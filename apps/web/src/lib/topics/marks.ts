/**
 * Which topics have passages in a chapter, and which verses. For a whole book at a time (the reader loads one
 * small file per book): chapter → topic id → verse spans [first, last], where `last` is null for "to the end
 * of the chapter" (JSON has no Infinity). Chapter numbers are the Hebrew/KJV ones.
 */
import { convertPsalm } from '@orthodoxia/bible';
import { versesInChapter } from './reference.ts';
import { TOPIC_RANGES } from './topics.ts';

export type Marks = Record<string, [number, number | null][]>;

/** The chapter number the topics use for a chapter of an edition (the Septuagint numbers many psalms differently). */
export function chapterKey(book: string, chapter: number, psalms: 'hebrew' | 'lxx'): number | undefined {
  return book === 'PSA' && psalms === 'lxx' ? convertPsalm(chapter, 'lxx', 'hebrew') : chapter;
}

const cache = new Map<string, Record<number, Marks>>();

export function marksForBook(book: string): Record<number, Marks> {
  const cached = cache.get(book);
  if (cached !== undefined) return cached;
  const chapters: Record<number, Marks> = {};
  for (const [id, ranges] of TOPIC_RANGES) {
    const first = Math.min(...ranges.filter((range) => range.book === book).map((range) => range.from.chapter));
    const last = Math.max(...ranges.filter((range) => range.book === book).map((range) => range.to.chapter));
    if (!Number.isFinite(first)) continue;
    for (let chapter = first; chapter <= last; chapter += 1) {
      const spans = versesInChapter(ranges, book, chapter);
      if (spans.length === 0) continue;
      (chapters[chapter] ??= {})[id] = spans.map(([from, to]) => [from, Number.isFinite(to) ? to : null]);
    }
  }
  cache.set(book, chapters);
  return chapters;
}

export function marksForChapter(book: string, chapter: number, psalms: 'hebrew' | 'lxx'): Marks {
  const key = chapterKey(book, chapter, psalms);
  return key === undefined ? {} : (marksForBook(book)[key] ?? {});
}
