import { chapterHeadingNumber } from './ordinals.ts';
import type { CommentaryChapter, CommentaryEntry, CommentaryParagraph } from './types.ts';

/**
 * Parses the text of a St. Mark Church (Heliopolis) commentary PDF into chapters and per-verse
 * entries. The books share one layout:
 *
 *   book introduction …
 *   الأصحاح الأول                         chapter heading (not always extractable)
 *   (1) التحية الرسولية (ع1-3):            section heading with its verse range
 *   1 بولس أسير … 2 وإلى …                 the quoted Bible text of the section (skipped: the site
 *                                         shows the verses themselves)
 *   ع1: commentary …                      a verse entry: ع1:, ع1-3:, ع1، 2:
 *   ✦ application …                       closing reflection of a section
 *
 * Chapters are found from the verse numbering restarting (and from headings where present); the
 * caller validates the result against the Bible's real chapter and verse counts.
 */

export interface PdfPage {
  readonly page: number;
  readonly lines: readonly string[];
}

export interface ParsedCommentary {
  readonly intro: readonly CommentaryParagraph[];
  readonly chapters: readonly CommentaryChapter[];
}

const MARKER = /^ع\s*[()]?\s*(\d+)\s*(?:[-–]\s*(\d+)|((?:\s*[،,و]\s*\d+)+))?\s*[()]?\s*:\s*/;
const SECTION = /^\(\s*\d+\s*\)\s*(.+?)\s*[()]?\s*ع\s*[\d\s,،\-–]+[()]?\s*[:()]*\s*$/;
const CHAPTER_HEADING = /^(?:ال)?(?:اصحاح|مزمور)\s+\S+(?:\s+\S+){0,3}$/;
const CHAPTER_HEADING_COMPACT = /^(?:ال)?(?:اصحاح|مزمور)[ء-ي]{2,22}$/;
const PAGE_NUMBER = /^\(?\s*\d+\s*\)?$/;

// Private-use characters (decorations, and a mark some fonts put before page numbers) are ignored.
const plain = (line: string) =>
  line.replace(/[-]/g, '').replace(/[ً-ْٰ]/g, '').replace(/[أإآٱ]/g, 'ا').replace(/\s+/g, ' ').trim();

/** Lines repeated at the top or bottom of many pages: running headers and footers. */
function runningLines(pages: readonly PdfPage[]): Set<string> {
  const counts = new Map<string, number>();
  for (const { lines } of pages) {
    for (const line of new Set([...lines.slice(0, 2), ...lines.slice(-1)].map(plain))) {
      counts.set(line, (counts.get(line) ?? 0) + 1);
    }
  }
  const threshold = Math.max(3, pages.length * 0.15);
  return new Set([...counts].filter(([, count]) => count >= threshold).map(([line]) => line));
}

function parseMarker(line: string): { verses: [number, number]; rest: string } | null {
  const match = MARKER.exec(line);
  if (match === null) return null;
  const first = Number(match[1]);
  let last = first;
  if (match[2] !== undefined) last = Number(match[2]);
  else if (match[3] !== undefined) last = Math.max(first, ...(match[3].match(/\d+/g) ?? []).map(Number));
  if (last < first || last - first > 60) last = first;
  return { verses: [first, last], rest: line.slice(match[0].length) };
}

/**
 * A heading printed on the same line as the chapter's subtitle, or after a page number
 * ("األَصْ حَ احُ الثَالِ ث شفاء يابس اليد", "232 املزمورالثَانِويالعِشرون آلام المسيح"): the number
 * read from the longest leading run of words that forms a heading. The line is a heading line.
 */
export function headingPrefixNumber(line: string): number | null {
  const words = line.replace(/^\s*\d+\s+/, '').trim().split(/\s+/);
  if (!/(?:صحاح|مزمور)/.test(plain(words.slice(0, 4).join('')).replace(/[أإآ]/g, 'ا'))) return null;
  for (let count = Math.min(words.length, 12); count >= 1; count--) {
    const prefix = words.slice(0, count).join(' ');
    // Printed headings are vowelled; prose that merely starts with "المزمور 23" is not one.
    const number = /[ً-ْ]/.test(prefix) ? chapterHeadingNumber(prefix) : null;
    if (number !== null) return number;
  }
  return null;
}

interface Draft {
  verses: [number, number];
  page: number;
  section: string | null;
  lines: string[];
}

/** Joins wrapped lines into paragraphs. */
export function toParagraphs(lines: readonly string[]): CommentaryParagraph[] {
  const paragraphs: CommentaryParagraph[] = [];
  const typical = Math.max(40, ...lines.map((line) => line.length)) * 0.82;
  let current: { text: string; kind?: 'reflection' | 'point' } | null = null;
  let previous = '';
  for (const raw of lines) {
    // The reflection sign is a symbol-font glyph that extracts as "?", a bullet, or a
    // private-use character; other private-use characters are decorations.
    const privateUseSign = /^\s*[-]/.test(raw);
    let line = raw.replace(/[-]/g, '').trim();
    if (line === '') continue;
    let kind: CommentaryParagraph['kind'];
    if (privateUseSign || (/^[?؟•✦+]\s+/.test(line) && !/^[?؟]\s*$/.test(line))) {
      line = line.replace(/^[?؟•✦+]\s+/, '');
      kind = 'reflection';
    } else if (/^(\d+|[أ-ي])\s*[-–]\s*/.test(line)) {
      kind = 'point';
    }
    const startsNew =
      current === null ||
      kind !== undefined ||
      (/[.!؟:»"]$/.test(previous) && previous.length < typical);
    if (startsNew) {
      if (current !== null) paragraphs.push(current);
      current = kind === undefined ? { text: line } : { text: line, kind };
    } else if (current !== null) {
      current.text = `${current.text} ${line}`;
    }
    previous = line;
  }
  if (current !== null) paragraphs.push(current);
  return paragraphs.filter((paragraph) => /[ء-ي]/.test(paragraph.text));
}

/**
 * `mode`: `headings` numbers chapters from their headings (restarts only fill gaps); `restarts`
 * ignores headings and counts chapters where the verse numbering restarts. Layouts differ between
 * books, so the importer parses both ways and keeps the one that validates against the Bible.
 */
export function parseStMarkCommentary(
  pages: readonly PdfPage[],
  firstChapter = 1,
  mode: 'headings' | 'restarts' = 'headings',
): ParsedCommentary {
  const running = runningLines(pages);
  const introLines: string[] = [];
  const chapters: { chapter: number; page: number; introLines: string[]; drafts: Draft[] }[] = [];
  let section: string | null = null;
  let inScripture = false;
  let lastStart = 0;
  let current: Draft | null = null;

  // Chapter numbers come from the headings ("الأصحاح الحادى والعشرون") where they can be read; the
  // verse numbering restarting only fills in chapters whose heading is missing from the text.
  const headingNumbers = new Set<number>();
  for (const { lines } of pages) {
    for (const line of lines) {
      const number = mode === 'headings' ? chapterHeadingNumber(line) : null;
      if (number !== null) headingNumbers.add(number);
    }
  }
  let pendingChapter: number | null = null;

  const chapter = () => chapters.at(-1);
  const startChapter = (number: number, page: number) => {
    chapters.push({ chapter: number, page, introLines: [], drafts: [] });
    lastStart = 0;
  };

  for (const { page, lines } of pages) {
    for (const line of lines) {
      const text = plain(line);
      if (text === '' || PAGE_NUMBER.test(text) || running.has(text)) continue;

      // Headings also repeat as running headers on every page of their chapter: a heading only
      // matters when it names a chapter other than the current one, and it never interrupts an
      // entry that continues across the page.
      const compact = text.replace(/\s+/g, '');
      const headingNumber = chapterHeadingNumber(line) ?? headingPrefixNumber(line);
      if (headingNumber !== null || CHAPTER_HEADING_COMPACT.test(compact) || (CHAPTER_HEADING.test(text) && text.split(' ').length <= 4)) {
        if (mode === 'headings' && headingNumber !== null && headingNumber !== chapter()?.chapter && headingNumber >= firstChapter) {
          pendingChapter = headingNumber;
        }
        continue;
      }
      const sectionMatch = SECTION.exec(text);
      if (sectionMatch !== null) {
        section = line
          .replace(/[-]/g, '')
          .replace(/\s*[()]?\s*ع\s*[\d\s,،\-–]+[()]?\s*[:()]*\s*$/, '')
          .replace(/\s+/g, ' ')
          .trim();
        inScripture = true;
        current = null;
        continue;
      }
      // A marker whose verse number the PDF lost ("ع؟:"): an entry with verses [0, 0], which the
      // importer places by matching its words against the chapter's verses.
      if (/^ع\s*؟\s*:/.test(text) && chapters.length > 0) {
        inScripture = false;
        current = { verses: [0, 0], page, section, lines: [] };
        chapter()!.drafts.push(current);
        const rest = line.replace(/^[^:]*:\s*/, '');
        if (rest.trim() !== '') current.lines.push(rest);
        continue;
      }
      const marker = parseMarker(text);
      if (marker !== null) {
        const [start] = marker.verses;
        const restarted = start < lastStart || (start === 1 && lastStart > 1);
        if (pendingChapter !== null && (restarted || chapters.length === 0 || start <= 3)) {
          startChapter(pendingChapter, page);
          pendingChapter = null;
        } else if (chapters.length === 0) {
          startChapter(firstChapter, page);
        } else if (restarted) {
          // No heading announced this chapter: the next one, unless its own heading is still to come.
          const next = chapter()!.chapter + 1;
          if (!headingNumbers.has(next) || pendingChapter === next) startChapter(next, page);
        }
        lastStart = start;
        inScripture = false;
        current = { verses: marker.verses, page, section, lines: [] };
        chapter()!.drafts.push(current);
        const rest = line.replace(/^[^:]*:\s*/, '');
        if (rest.trim() !== '') current.lines.push(rest);
        continue;
      }
      if (inScripture) continue;
      if (current !== null) current.lines.push(line);
      else if (chapters.length === 0) introLines.push(line);
      else chapter()!.introLines.push(line);
    }
  }

  return {
    intro: toParagraphs(introLines),
    chapters: chapters.map(({ chapter: number, page, introLines: lines, drafts }) => ({
      chapter: number,
      page,
      intro: toParagraphs(lines),
      entries: drafts
        .map((draft): CommentaryEntry => ({
          verses: draft.verses,
          page: draft.page,
          section: draft.section,
          paragraphs: toParagraphs(draft.lines),
        }))
        .filter((entry) => entry.paragraphs.length > 0),
    })),
  };
}
