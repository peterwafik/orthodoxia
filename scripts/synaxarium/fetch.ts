/**
 * Collects the Coptic Synaxarium day by day, in English and Arabic, with the full text of every commemoration, from
 * the editions published on St-Takla.org. The Calendar & Synaxarium day pages show these texts in full.
 *
 * Pages are cached in data/synaxarium/raw/ (git-ignored); the result is data/synaxarium/synaxarium.json (committed).
 *
 *   node scripts/synaxarium/fetch.ts            fetch missing pages, then rebuild the JSON
 *   node scripts/synaxarium/fetch.ts --update   re-fetch everything
 */
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';

const ROOT = resolve(import.meta.dirname, '../..');
const DIR = join(ROOT, 'data/synaxarium');
const RAW = join(DIR, 'raw');
const update = process.argv.includes('--update');

const SITE = 'https://st-takla.org';
const EN_BASE = `${SITE}/Full-Free-Coptic-Books/Coptic-Synaxarium-or-Synaxarion_English/`;
const EN_INDEX = `${EN_BASE}Eng-Synexarium-or-Synexarion-index.html`;
const AR_BASE = `${SITE}/Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/`;
const AR_INDEX = `${AR_BASE}Synexarium-or-Synexarion-index.html`;

export interface Story {
  readonly title: string;
  readonly paragraphs: string[];
}
interface DayRecord {
  readonly month: number;
  readonly day: number;
  readonly en: Story[];
  readonly ar: Story[];
}

const sleep = (ms: number) => new Promise((done) => setTimeout(done, ms));

async function get(url: string, file: string, encoding: 'utf-8' | 'windows-1256'): Promise<string> {
  const path = join(RAW, file);
  if (!update && existsSync(path)) return readFileSync(path, 'utf8');
  for (let attempt = 1; attempt <= 3; attempt += 1) {
    try {
      const response = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Orthodoxia study site)' } });
      if (!response.ok) throw new Error(`${response.status} ${url}`);
      const text = new TextDecoder(encoding).decode(await response.arrayBuffer());
      writeFileSync(path, text);
      await sleep(250);
      return text;
    } catch (error) {
      if (attempt === 3) throw error;
      await sleep(1500 * attempt);
    }
  }
  throw new Error(`unreachable: ${url}`);
}

const ENTITIES: Record<string, string> = {
  nbsp: ' ', quot: '"', amp: '&', lt: '<', gt: '>', apos: '’', rsquo: '’', lsquo: '‘', ldquo: '“', rdquo: '”',
  ndash: '–', mdash: '—', hellip: '…', laquo: '«', raquo: '»', shy: '',
};

const decode = (html: string): string =>
  html
    .replace(/<br\s*\/?>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&#(\d+);/g, (_, code: string) => String.fromCodePoint(Number(code)))
    .replace(/&#x([0-9a-f]+);/gi, (_, code: string) => String.fromCodePoint(parseInt(code, 16)))
    .replace(/&([a-z]+);/gi, (whole, name: string) => ENTITIES[name.toLowerCase()] ?? whole)
    .replace(/\s+/g, ' ')
    .replace(/\s+([.,;:!?،؛])/g, '$1')
    .trim();

const SKIP = /St-Takla|موقع الأنبا تكلا|موقع كنيسة الأنبا تكلا/i;
const BREAK = '\u0001';

/** The text of a stretch of HTML as paragraphs, without the site's own notes and image captions. Block tags, line
 * breaks and the three-space indents the pages use to start a paragraph all count as breaks. */
function paragraphs(html: string): string[] {
  return html
    .replace(/<\/?(p|div|h\d|li|ul|ol|tr|td|table|center|blockquote)\b[^>]*>|<br\s*\/?>/gi, BREAK)
    .replace(/(&nbsp;\s*){2,}/gi, BREAK)
    .split(BREAK)
    .map(decode)
    .filter((text) => text !== '' && !/^[.\s]+$/.test(text) && !SKIP.test(text));
}

/** Day links in an index page, grouped by their month folder (01-… to 13-…), in page order. */
function dayLinks(html: string, pattern: RegExp): Map<number, string[]> {
  const months = new Map<number, string[]>();
  for (const match of html.matchAll(pattern)) {
    const href = match[1]!;
    const month = Number(href.slice(0, 2));
    const list = months.get(month) ?? [];
    if (!list.includes(href)) list.push(href);
    months.set(month, list);
  }
  return months;
}

const DIVIDER = /<img[^>]+St-Takla-org--divider[^>]*>/i;

/** The day's stories: after the page's <h1>, up to the list of the month's days. */
function storyArea(html: string): string {
  const h1 = html.search(/<\/h1>/i);
  if (h1 < 0) return '';
  const tail = html.slice(h1 + 5);
  const end = tail.search(/Days of(&nbsp;|\s)+the month|أيام شهر/);
  return end < 0 ? tail : tail.slice(0, end);
}

/** Split an area into stories at each heading; headings with no text after them (a list of titles) are dropped. */
function byHeadings(area: string, heading: RegExp, clean: (title: string) => string): Story[] {
  const marks = [...area.matchAll(heading)].filter((match) => decode(match[1]!) !== '');
  return marks
    .map((mark, i) => {
      const end = i + 1 < marks.length ? marks[i + 1]!.index : area.length;
      return { title: clean(decode(mark[1]!)), paragraphs: paragraphs(area.slice(mark.index + mark[0].length, end)) };
    })
    .filter((story) => story.paragraphs.length > 0);
}

const ANCHOR = /<a name="(\d+)\.?"[^>]*>[\s\S]{0,200}?<\/a>/g;

/** English day page: either a numbered list of titles (linking to #N.) with each story after <a name="N.">, or
 * stories each under its own <h3>. */
function englishStories(html: string): Story[] {
  const area = storyArea(html);
  const titles = new Map<string, string>();
  for (const match of area.matchAll(/<a href="#(\d+)\.?">([\s\S]*?)<\/a>/g)) {
    const title = decode(match[2]!).replace(/^\d+\.\s*/, '').replace(/\.$/, '');
    if (title !== '' && !titles.has(match[1]!)) titles.set(match[1]!, title);
  }
  const marks = [...area.matchAll(ANCHOR)];
  if (marks.length === 0) return byHeadings(area, /<h3[^>]*>([\s\S]*?)<\/h3>/gi, (title) => title.replace(/\.$/, ''));
  return marks.map((mark, i) => {
    const end = i + 1 < marks.length ? marks[i + 1]!.index : area.length;
    const body = paragraphs(area.slice(mark.index + mark[0].length, end));
    return { title: titles.get(mark[1]!) ?? body[0]?.slice(0, 80) ?? '', paragraphs: body };
  });
}

/** Arabic day page: every story under an <h2> that ends with the date in brackets. */
function arabicStories(html: string): Story[] {
  const area = storyArea(html).split(DIVIDER).slice(0, -1).join(' ') || storyArea(html);
  return byHeadings(area, /<h2[^>]*>([\s\S]*?)<\/h2>/gi, (title) => title.replace(/\s*\([^()]*\)\s*$/, '').trim());
}

async function main(): Promise<void> {
  mkdirSync(RAW, { recursive: true });
  const enIndex = await get(EN_INDEX, 'ent-index.html', 'utf-8');
  const arIndex = await get(AR_INDEX, 'ar-index.html', 'windows-1256');
  const enDays = dayLinks(enIndex, /href="(\d\d-[A-Za-z]+\/Coptic-Calendar_\d\d-[A-Za-z]+\.html)"/g);
  const arDays = dayLinks(arIndex, /href="(\d\d-[A-Za-z]+\/\d\d-[A-Za-z]+\.html)"/g);

  const records: DayRecord[] = [];
  for (let month = 1; month <= 13; month += 1) {
    const days = month === 13 ? 6 : 30;
    const en = enDays.get(month) ?? [];
    const ar = arDays.get(month) ?? [];
    for (let day = 1; day <= days; day += 1) {
      const enHref = en.find((href) => Number(href.split('_')[1]!.slice(0, 2)) === day);
      const arHref = ar.find((href) => Number(href.split('/')[1]!.slice(0, 2)) === day);
      const enHtml = enHref === undefined ? '' : await get(EN_BASE + enHref, `ent-${enHref.replace('/', '_')}`, 'utf-8');
      const arHtml = arHref === undefined ? '' : await get(AR_BASE + arHref, `ar-${arHref.replace('/', '_')}`, 'windows-1256');
      records.push({ month, day, en: englishStories(enHtml), ar: arabicStories(arHtml) });
      process.stdout.write(`\r${month}/${day}  `);
    }
  }
  const missing = records.filter((record) => record.en.length === 0 || record.ar.length === 0);
  const empty = records.flatMap((record) =>
    (['en', 'ar'] as const).flatMap((lang) => record[lang].filter((story) => story.paragraphs.length === 0).map(() => `${lang} ${record.month}/${record.day}`)),
  );
  writeFileSync(
    join(DIR, 'synaxarium.json'),
    `${JSON.stringify({ source: 'st-takla-synaxarium', fetched: new Date().toISOString().slice(0, 10), days: records })}\n`,
  );
  const count = (lang: 'en' | 'ar') => records.reduce((sum, record) => sum + record[lang].length, 0);
  console.log(`\n${records.length} days; ${count('en')} English and ${count('ar')} Arabic stories`);
  console.log(`days with no stories in one language: ${missing.map((r) => `${r.month}/${r.day}`).join(' ') || 'none'}`);
  console.log(`stories with no text: ${empty.join(', ') || 'none'}`);
}

await main();
