/**
 * Passage references as the topical study lists write them ("1 Corinthians 13:1–13", "Ephesians 5:21–6:4",
 * "Job 1–2 and 38–42"), read into structured ranges, and the part of one chapter that such ranges cover.
 * A reference to a book we do not know is an error, never a guess. Chapter numbers are those of the
 * Hebrew/KJV numbering (the Psalms differ in the Septuagint; the page converts before it asks).
 */
import { BOOKS } from '@orthodoxia/bible';

export interface Position {
  readonly chapter: number;
  /** `null` = the whole chapter (the start of it in `from`, the end of it in `to`). */
  readonly verse: number | null;
}

export interface PassageRange {
  readonly book: string;
  readonly from: Position;
  readonly to: Position;
}

const BY_NAME = new Map<string, string>([
  ...BOOKS.map((book) => [book.en.toLowerCase(), book.code] as const),
  ['psalm', 'PSA'],
]);

const LOCATOR = /^(.*?)\s+(\d+(?::\d+)?(?:\s*[–—-]\s*\d+(?::\d+)?)?(?:\s+and\s+\d+(?::\d+)?(?:\s*[–—-]\s*\d+(?::\d+)?)?)*)$/;

function parsePart(book: string, part: string): PassageRange {
  const [left, right] = part.split(/\s*[–—-]\s*/);
  const [chapter, verse] = left!.split(':').map(Number) as [number, number | undefined];
  const from: Position = { chapter, verse: verse ?? null };
  if (right === undefined) return { book, from, to: { chapter, verse: verse ?? null } };
  if (right.includes(':')) {
    const [toChapter, toVerse] = right.split(':').map(Number) as [number, number];
    return { book, from, to: { chapter: toChapter, verse: toVerse } };
  }
  const number = Number(right);
  return verse === undefined ? { book, from, to: { chapter: number, verse: null } } : { book, from, to: { chapter, verse: number } };
}

export function parseReference(reference: string): PassageRange[] {
  const match = LOCATOR.exec(reference.trim());
  if (match === null) throw new Error(`Cannot read the reference "${reference}"`);
  const name = match[1]!.trim();
  const book = BY_NAME.get(name.toLowerCase());
  if (book === undefined) throw new Error(`Unknown book "${name}" in the reference "${reference}"`);
  return match[2]!.split(/\s+and\s+/).map((part) => parsePart(book, part));
}

/** A list of references separated by semicolons. */
export function parsePassages(list: string): PassageRange[] {
  return list
    .split(';')
    .map((reference) => reference.trim())
    .filter((reference) => reference !== '')
    .flatMap(parseReference);
}

/** The verse spans ([first, last], last may be Infinity) of one chapter that the ranges cover. */
export function versesInChapter(ranges: readonly PassageRange[], book: string, chapter: number): [number, number][] {
  const spans: [number, number][] = [];
  for (const range of ranges) {
    if (range.book !== book || chapter < range.from.chapter || chapter > range.to.chapter) continue;
    const first = chapter === range.from.chapter ? (range.from.verse ?? 1) : 1;
    const last = chapter === range.to.chapter ? (range.to.verse ?? Infinity) : Infinity;
    spans.push([first, last]);
  }
  return spans;
}
