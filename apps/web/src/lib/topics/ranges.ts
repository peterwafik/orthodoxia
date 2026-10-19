/**
 * Working with passage ranges: merging overlapping ones, and the compact form ([book, chapter, verse,
 * chapter, verse], 0 = the whole chapter) in which the topic verses are stored in `data/topics/verses.json`.
 */
import type { PassageRange } from './reference.ts';

export type Packed = [book: string, fromChapter: number, fromVerse: number, toChapter: number, toVerse: number];

const MAX_VERSE = 999;

export function toPacked(range: PassageRange): Packed {
  return [range.book, range.from.chapter, range.from.verse ?? 0, range.to.chapter, range.to.verse ?? 0];
}

export function fromPacked([book, fromChapter, fromVerse, toChapter, toVerse]: Packed): PassageRange {
  return {
    book,
    from: { chapter: fromChapter, verse: fromVerse === 0 ? null : fromVerse },
    to: { chapter: toChapter, verse: toVerse === 0 ? null : toVerse },
  };
}

/** A position as one number, so ranges compare easily: chapter * 1000 + verse (the whole chapter spans 0..999). */
const start = (range: PassageRange): number => range.from.chapter * 1000 + (range.from.verse ?? 0);
const end = (range: PassageRange): number => range.to.chapter * 1000 + (range.to.verse ?? MAX_VERSE);

/** Sorts and joins ranges that overlap or touch (the next verse, or the next chapter after a whole one). */
export function mergeRanges(ranges: readonly PassageRange[]): PassageRange[] {
  const byBook = new Map<string, PassageRange[]>();
  for (const range of ranges) byBook.set(range.book, [...(byBook.get(range.book) ?? []), range]);
  const merged: PassageRange[] = [];
  for (const [book, list] of byBook) {
    const sorted = [...list].sort((a, b) => start(a) - start(b) || end(a) - end(b));
    let current: PassageRange | undefined;
    for (const range of sorted) {
      if (current === undefined) {
        current = range;
      } else if (start(range) <= end(current) + 1 || (current.to.verse === null && range.from.verse === null && range.from.chapter <= current.to.chapter + 1)) {
        if (end(range) > end(current)) current = { book, from: current.from, to: range.to };
      } else {
        merged.push(current);
        current = range;
      }
    }
    if (current !== undefined) merged.push(current);
  }
  return merged;
}
