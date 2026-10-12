/**
 * Builds Fr. Tadros Yacoub Malaty's commentary, content/commentary/malaty/<BOOK>.json, for the
 * chapters of the Arabic Bible that have no St. Mark commentary text, from the pages fetched by
 * malaty-fetch.ts. Published with Fr. Tadros's permission (docs/translation/PERMISSION-REQUEST-MALATY.md).
 *
 * Each section of a page (an <h2> anchored to the verses it explains) becomes an entry for those
 * verses; within a section, a paragraph quoting a later verse ("… [5]") starts an entry for that
 * verse. The closing meditation ("من وحي …") is kept as the last entry's reflection. Pages with no
 * verse anchors (thematic pages) give one entry per section covering the whole chapter.
 *
 *   node scripts/commentary/malaty-build.ts
 */
import { existsSync, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { COMMENTARY_SCHEMA_VERSION, type CommentaryBook, type CommentaryChapter, type CommentaryEntry, type CommentaryParagraph } from '../../packages/commentary/src/index.ts';
import { parseMalatyPage, type MalatyBlock } from './malaty-parse.ts';

const ROOT = resolve(import.meta.dirname, '../..');
const DATA = join(ROOT, 'data/commentary/malaty');
const OUT = join(ROOT, 'content/commentary/malaty');
const BIBLE = join(ROOT, 'data/bible/build');

interface Page {
  readonly book: string;
  readonly chapter: number;
  readonly url: string;
  readonly file: string;
  readonly sha256: string;
}
const pages = (JSON.parse(readFileSync(join(DATA, 'sources.json'), 'utf8')) as { pages: Page[] }).pages;

/** Chapters of the Arabic edition without St. Mark commentary text. */
function gapChapters(): Map<string, number[]> {
  const manifest = JSON.parse(readFileSync(join(BIBLE, 'manifest.json'), 'utf8')) as { editions: Record<string, { books: { code: string; chapters: number[] }[] }> };
  const gaps = new Map<string, number[]>();
  for (const { code, chapters } of manifest.editions['svd']!.books) {
    const path = join(ROOT, 'content/commentary/stmark', `${code}.json`);
    const stMark = existsSync(path) ? (JSON.parse(readFileSync(path, 'utf8')) as CommentaryBook) : null;
    const covered = new Set((stMark?.chapters ?? []).filter((chapter) => chapter.entries.length > 0).map((chapter) => chapter.chapter));
    const missing = chapters.filter((chapter) => !covered.has(chapter));
    if (missing.length > 0) gaps.set(code, missing);
  }
  return gaps;
}

const verseCounts = new Map<string, Map<number, number>>();
function verseCount(book: string, chapter: number): number {
  if (!verseCounts.has(book)) {
    const file = JSON.parse(readFileSync(join(BIBLE, 'svd', `${book}.json`), 'utf8')) as { chapters: { number: number; verses: { number: string }[] }[] };
    verseCounts.set(book, new Map(file.chapters.map((chapter) => [chapter.number, Math.max(...chapter.verses.map((verse) => Number.parseInt(verse.number, 10) || 0))])));
  }
  return verseCounts.get(book)!.get(chapter) ?? 0;
}

const titleOf = (html: string) => /<h1[^>]*>([\s\S]*?)<\/h1>/i.exec(html)?.[1]?.replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim() ?? '';

/** The page holding a chapter: its own, or a page for a range of chapters ("الخروج 35-40"). */
function pageFor(book: string, chapter: number): Page | undefined {
  const own = pages.find((page) => page.book === book && page.chapter === chapter);
  if (own !== undefined) return own;
  return pages.find((page) => {
    if (page.book !== book) return false;
    const range = /\s(\d+)\s*[-–]\s*(\d+)\s*-\s*تفسير/.exec(titleOf(readFileSync(join(DATA, 'html', page.file), 'utf8')));
    return range !== null && Number(range[1]) <= chapter && chapter <= Number(range[2]);
  });
}

/**
 * Where a chapter of the Arabic edition is in Fr. Tadros's commentary. The Greek additions to Esther
 * and Daniel are not on St-Takla.org, except the Song of the Three, which he treats within Daniel 3.
 */
function locate(book: string, chapter: number): { book: string; chapter: number; part?: RegExp } | null {
  if (book === 'ESG') return chapter <= 10 ? { book: 'EST', chapter } : null;
  if (book === 'S3Y') return { book: 'DAN', chapter: 3, part: /تسبحة الثلاثة فتية/ };
  if (book === 'SUS' || book === 'BEL') return null;
  return { book, chapter };
}

const REFLECTION = /^من وحي /;
/** "… [5]" or "[4-7]": a paragraph that quotes verses of the chapter. */
const VERSE_MARK = /\[(\d{1,3})(?:\s*[-–]\s*(\d{1,3}))?\]/;
const clean = (text: string) =>
  text
    .replace(/\s+([.,،؛:!؟?)\]»])/g, '$1')
    .replace(/([([«])\s+/g, '$1')
    .replace(/\s{2,}/g, ' ')
    .trim();

interface Draft {
  verses: [number, number];
  /** Anchored by the page (a section or verse), rather than found from a quoted verse. */
  anchored: boolean;
  section: string | null;
  paragraphs: CommentaryParagraph[];
}

function buildChapter(blocks: readonly MalatyBlock[], chapterNumber: number, last: number): CommentaryChapter | null {
  const anchoredPage = blocks.some((block) => block.verses.length > 0);
  const intro: CommentaryParagraph[] = [];
  const drafts: Draft[] = [];
  let section: string | null = null;
  // The closing meditation: its heading, its title (a second heading), then its text. A heading after
  // that starts an appendix (homilies, studies), which the reader finds on the original page.
  let reflection: 'no' | 'title' | 'text' = 'no';
  for (const block of blocks) {
    const text = clean(block.text);
    if (text === '') continue;
    const verses = block.verses.filter((verse) => verse >= 1 && verse <= last);
    if (block.heading && REFLECTION.test(text)) {
      reflection = 'title';
      continue;
    }
    if (reflection !== 'no') {
      if (block.heading && reflection === 'text') break;
      reflection = 'text';
      const target = drafts.at(-1);
      if (target === undefined) intro.push({ text, kind: 'reflection' });
      else target.paragraphs.push({ text, kind: 'reflection' });
      continue;
    }
    if (block.heading) {
      section = text;
      if (verses.length > 0) drafts.push({ verses: [Math.min(...verses), Math.max(...verses)], anchored: true, section, paragraphs: [] });
      else if (!anchoredPage) drafts.push({ verses: [1, last], anchored: true, section, paragraphs: [] });
      else if (drafts.length > 0) drafts.push({ ...drafts.at(-1)!, anchored: false, section, paragraphs: [] });
      continue;
    }
    if (verses.length > 0) {
      drafts.push({ verses: [Math.min(...verses), Math.max(...verses)], anchored: true, section, paragraphs: [{ text }] });
      continue;
    }
    const current = drafts.at(-1);
    if (current === undefined) {
      if (anchoredPage) intro.push({ text });
      else drafts.push({ verses: [1, last], anchored: true, section, paragraphs: [{ text }] });
      continue;
    }
    // A paragraph quoting a later verse of the current section starts that verse's entry.
    const mark = VERSE_MARK.exec(text);
    if (mark !== null && anchoredPage) {
      const start = Number(mark[1]);
      const end = mark[2] === undefined ? start : Math.max(start, Number(mark[2]));
      const owner = [...drafts].reverse().find((draft) => draft.anchored)!;
      if (start > current.verses[0] && start >= owner.verses[0] && end <= Math.max(owner.verses[1], start) && end <= last && current.paragraphs.length > 0) {
        drafts.push({ verses: [start, end], anchored: false, section, paragraphs: [{ text }] });
        continue;
      }
    }
    current.paragraphs.push({ text });
  }

  // Anchored entries extend to the next anchored entry, the last to the end of the chapter, so that
  // every verse has its commentary.
  const anchored = drafts.filter((draft) => draft.anchored).sort((a, b) => a.verses[0] - b.verses[0]);
  anchored.forEach((draft, index) => {
    const next = anchored.slice(index + 1).find((candidate) => candidate.verses[0] > draft.verses[0]);
    const limit = next === undefined ? last : next.verses[0] - 1;
    if (draft.verses[1] < limit) draft.verses = [draft.verses[0], limit];
  });
  const entries: CommentaryEntry[] = drafts
    .filter((draft) => draft.paragraphs.length > 0)
    .map((draft) => ({ verses: [draft.verses[0], Math.min(draft.verses[1], last)] as const, page: 0, section: draft.section, paragraphs: draft.paragraphs }));
  if (entries.length === 0) return null;
  return { chapter: chapterNumber, page: 0, intro, entries };
}

/** The blocks of a page between the heading matching `part` and the next numbered or closing heading. */
function partOf(blocks: readonly MalatyBlock[], part: RegExp): MalatyBlock[] {
  const start = blocks.findIndex((block) => block.heading && part.test(block.text));
  if (start === -1) return [];
  const end = blocks.findIndex((block, index) => index > start && block.heading && (/^\d+\./.test(block.text) || REFLECTION.test(block.text)));
  return blocks.slice(start, end === -1 ? undefined : end).map((block) => ({ ...block, verses: [] }));
}

// The folder also holds links.json (malaty-links.ts); only book files are rebuilt.
mkdirSync(OUT, { recursive: true });
for (const name of readdirSync(OUT).filter((file) => /^[A-Z0-9]{3}\.json$/.test(file))) rmSync(join(OUT, name));
const report: Record<string, { chapters: number[]; missing: number[] }> = {};
let total = 0;
for (const [book, chapters] of gapChapters()) {
  const built: CommentaryChapter[] = [];
  const documents: CommentaryBook['documents'][number][] = [];
  const missing: number[] = [];
  for (const chapter of chapters) {
    const location = locate(book, chapter);
    const page = location === null ? undefined : pageFor(location.book, location.chapter);
    if (location === null || page === undefined) {
      missing.push(chapter);
      continue;
    }
    let blocks = parseMalatyPage(readFileSync(join(DATA, 'html', page.file), 'utf8'));
    if (location.part !== undefined) blocks = partOf(blocks, location.part);
    const result = buildChapter(blocks, chapter, verseCount(book, chapter));
    if (result === null) {
      missing.push(chapter);
      continue;
    }
    built.push(result);
    documents.push({ url: page.url, sha256: page.sha256, chapters: [chapter, chapter] });
  }
  report[book] = { chapters: built.map((chapter) => chapter.chapter), missing };
  if (built.length === 0) continue;
  total += built.length;
  const output: CommentaryBook = {
    schemaVersion: COMMENTARY_SCHEMA_VERSION,
    source: 'malaty',
    book,
    language: 'ar',
    documents,
    extraction: 'html',
    intro: [],
    chapters: built,
  };
  writeFileSync(join(OUT, `${book}.json`), `${JSON.stringify(output)}\n`);
}
writeFileSync(join(OUT, 'report.json'), `${JSON.stringify(report, null, 1)}\n`);
const entries = readdirSync(OUT)
  .filter((name) => /^[A-Z0-9]{3}\.json$/.test(name))
  .reduce((sum, name) => sum + (JSON.parse(readFileSync(join(OUT, name), 'utf8')) as CommentaryBook).chapters.reduce((count, chapter) => count + chapter.entries.length, 0), 0);
const unavailable = Object.entries(report).flatMap(([book, { missing }]) => missing.map((chapter) => `${book} ${chapter}`));
console.log(`Malaty: ${total} chapters, ${entries} entries. Not available: ${unavailable.length} (${unavailable.join(', ')})`);
