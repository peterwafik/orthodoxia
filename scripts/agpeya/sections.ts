/**
 * Step 2 of the Agpeya import: cuts data/agpeya/raw/lines.json into the hours and their sections.
 *
 * The PDF sets Coptic, English and Arabic in three columns whose headings stand level with one another, so the
 * headings of the English column (the easiest to recognise) give the cut points for all three columns: a column's
 * section runs from the cut to the next cut. Each section's title in the other two languages is the text standing
 * level with the English title. The result is written to data/agpeya/raw/sections.json for review.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import type { Column, Line } from './extract.ts';

const RAW = resolve(import.meta.dirname, '../../data/agpeya/raw');
const lines = JSON.parse(readFileSync(resolve(RAW, 'lines.json'), 'utf8')) as Line[];

/**
 * Where each hour begins: the page and the first line of its opening (the paragraph about the hour). What stands above
 * it on that page still belongs to the hour before. The first hour begins at the top of page 2.
 */
export const HOURS = [
  { id: 'prime', page: 2, start: /^Morning Prayer is designed/ },
  { id: 'terce', page: 33, start: /^Make us worthy to pray/ },
  { id: 'sext', page: 48, start: /^The Sixth Hour/ },
  { id: 'none', page: 63, start: /^The Ninth Hour/ },
  { id: 'vespers', page: 78, start: /^The Vespers/ },
  { id: 'compline', page: 89, start: /^The Compline/ },
  { id: 'veil', page: 103, start: /^Veil:/ },
  { id: 'midnight', page: 107, start: /^The Midnight Hour/ },
] as const;
const LAST_PAGE = 139;

/** What an English heading line looks like. Titles that run over two lines are joined (see `joinGap`). */
const HEADING: RegExp[] = [
  /^P ?SA ?L ?MS? ?\d/i,
  /^INTRODUCTION TO\b/,
  /^THE (LORD'S PRAYER|PRAYER OF THANKSGIVING|ORTHODOX CREED)\b/,
  /^THE PRAYER OF$/,
  /THE FAITH OF THE|THE TRISAGION|THE GLORIA/,
  /THE HOLY GOSPEL/,
  /THE PAULINE EPISTLE|THE CATHOLIC EPISTLE|THE ACTS OF THE APOSTLES/,
  /^(FIRST|SECOND|THIRD) ABSOLUTION/,
  /^ABSOLUTION\b/,
  /^The Absolution\b/,
  /^HOLY HOLY HOLY\b/,
  /^CONCLUSION OF EVERY/,
  /^GRACIOUSLY ACCORD/,
  /^The Psalms of the Veil/,
];
const joinGap = 22;

interface Cut {
  page: number;
  y: number;
  /** The heading lines, top to bottom (none for an hour's opening). */
  title: Line[];
  /** Set when an hour begins here. */
  hour?: string;
}

const byColumn = (page: number, col: Column): Line[] => lines.filter((l) => l.page === page && l.col === col).sort((a, b) => b.y - a.y);

function cutsOf(): Cut[] {
  const cuts: Cut[] = [];
  for (let page = 2; page <= LAST_PAGE; page++) {
    const en = byColumn(page, 'en');
    for (let i = 0; i < en.length; i++) {
      const line = en[i] as Line;
      const hour = HOURS.find((h) => h.page === page && h.start.test(line.text));
      if (hour !== undefined) {
        if (hour.id !== 'prime') cuts.push({ page, y: line.y + 12, title: [], hour: hour.id });
        continue;
      }
      if (!HEADING.some((pattern) => pattern.test(line.text))) continue;
      // A second heading line right below the first belongs to it (THE PRAYER OF / THANKSGIVING).
      const title = [line];
      while (i + 1 < en.length) {
        const next = en[i + 1] as Line;
        const last = title[title.length - 1] as Line;
        const letters = next.text.replace(/[^A-Za-z]/g, '');
        if (last.y - next.y < joinGap && letters.length >= 3 && letters === letters.toUpperCase() && !HEADING.some((p) => p.test(next.text)) && !/ALLELUIA/.test(next.text)) {
          title.push(next);
          i++;
        } else break;
      }
      cuts.push({ page, y: line.y, title });
    }
  }
  return cuts;
}

export interface Section {
  hour: string;
  title: { en: string; ar: string; cop: string };
  page: number;
  text: Record<Column, string[]>;
}

/** Position of a line in the reading order of a column (earlier is smaller). */
const order = (page: number, y: number): number => page * 10000 - y;

function paragraphs(rows: Line[]): string[] {
  if (rows.length === 0) return [];
  const out: string[] = [];
  let current: string[] = [];
  const gapsByPage = new Map<number, number[]>();
  for (let i = 1; i < rows.length; i++) {
    const a = rows[i - 1] as Line;
    const b = rows[i] as Line;
    if (a.page === b.page) gapsByPage.set(a.page, [...(gapsByPage.get(a.page) ?? []), a.y - b.y]);
  }
  const pitch = (page: number): number => {
    const gaps = [...(gapsByPage.get(page) ?? [])].sort((x, y) => x - y);
    return gaps.length === 0 ? 16 : (gaps[Math.floor(gaps.length * 0.3)] as number);
  };
  rows.forEach((row, i) => {
    const previous = rows[i - 1];
    const newParagraph = previous !== undefined && previous.page === row.page && previous.y - row.y > pitch(row.page) * 1.22;
    if (newParagraph && current.length > 0) {
      out.push(current.join(' '));
      current = [];
    }
    current.push(row.text);
  });
  if (current.length > 0) out.push(current.join(' '));
  return out.map((text) => text.replace(/\s+/g, ' ').trim()).filter((text) => text !== '');
}

export function allSections(): Section[] {
  const cuts = cutsOf();
  const sections: Section[] = [];
  const TOL = 10;
  const columns: Column[] = ['cop', 'en', 'ar'];
  const stream: Record<Column, Line[]> = { cop: [], en: [], ar: [] };
  for (const col of columns) for (let page = 2; page <= LAST_PAGE; page++) stream[col].push(...byColumn(page, col));
  const bounds: Cut[] = [{ page: 2, y: 100000, title: [], hour: 'prime' }, ...cuts];
  let hour = 'prime';
  bounds.forEach((cut, index) => {
    if (cut.hour !== undefined) hour = cut.hour;
    const next = bounds[index + 1];
    const startY = index === 0 ? cut.y : cut.y + TOL;
    const pick = (col: Column): Line[] =>
      stream[col].filter((l) => order(l.page, l.y) >= order(cut.page, startY) && (next === undefined || order(l.page, l.y) < order(next.page, next.y + TOL)));
    const mine: Record<Column, Line[]> = { cop: pick('cop'), en: pick('en'), ar: pick('ar') };
    // The title of the other languages: the lines level with the English title.
    const titleText: Record<Column, string> = { cop: '', en: '', ar: '' };
    const bodyRows: Record<Column, Line[]> = { cop: mine.cop, en: mine.en, ar: mine.ar };
    if (cut.title.length > 0) {
      const top = (cut.title[0] as Line).y + 8;
      const bottom = (cut.title[cut.title.length - 1] as Line).y - 8;
      for (const col of columns) {
        const level = mine[col].filter((l) => l.page === cut.page && l.y <= top && l.y >= bottom);
        titleText[col] = level.map((l) => l.text).join(' ');
        // A reading's Arabic and Coptic text begins level with the English heading, so there the band stays in the text.
        const reading = col !== 'en' && /THE HOLY GOSPEL|PAULINE EPISTLE/.test(cut.title.map((t) => t.text).join(' '));
        bodyRows[col] = reading ? mine[col] : mine[col].filter((l) => !level.includes(l));
      }
    }
    sections.push({
      hour,
      title: { en: titleText.en, ar: titleText.ar, cop: titleText.cop },
      page: cut.page,
      text: { cop: paragraphs(bodyRows.cop), en: paragraphs(bodyRows.en), ar: paragraphs(bodyRows.ar) },
    });
  });
  return sections;
}

if (import.meta.main) {
  const all = allSections();
  writeFileSync(resolve(RAW, 'sections.json'), `${JSON.stringify(all)}\n`);
  let last = '';
  for (const s of all) {
    if (s.hour !== last) {
      last = s.hour;
      console.log(`\n=== ${s.hour}`);
    }
    const n = (c: Column): number => s.text[c].length;
    console.log(`p${String(s.page).padStart(3)} ${(s.title.en || '(opening)').padEnd(34).slice(0, 34)} | ${(s.title.ar || '-').padEnd(22).slice(0, 22)} | paras cop ${n('cop')} en ${n('en')} ar ${n('ar')}`);
  }
}
