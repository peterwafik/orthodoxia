import { bookBySlug } from '@orthodoxia/bible';
import { loadBook } from '../bible.ts';
import type { Evidence } from '../../data/apologetics/types.ts';

export interface PassageVerses {
  /** Verse number and text in the King James Version (public domain). */
  readonly en: readonly { n: string; text: string }[];
  /** Verse number and text in the Van Dyck Arabic Bible (public domain). */
  readonly ar: readonly { n: string; text: string }[];
}

function range(spec: string | undefined): [number, number] | null {
  if (spec === undefined) return null;
  const [from, to] = spec.split('-').map((part) => Number.parseInt(part, 10));
  if (from === undefined || Number.isNaN(from)) return null;
  return [from, to === undefined || Number.isNaN(to) ? from : to];
}

/** The verses of a cited Bible reference in both reader editions, for the side-by-side view. Null if the book is absent. */
export function passageVerses(ref: NonNullable<Evidence['bible']>): PassageVerses | null {
  const info = bookBySlug(ref.book);
  if (info === undefined) return null;
  const bounds = range(ref.verse);
  const read = (edition: string): { n: string; text: string }[] => {
    try {
      const chapter = loadBook(edition, info.code).chapters.find((c) => c.number === ref.chapter);
      if (chapter === undefined) return [];
      return chapter.verses
        .filter((v) => {
          if (bounds === null) return true;
          const first = Number.parseInt(v.number, 10);
          return first >= bounds[0] && first <= bounds[1];
        })
        .map((v) => ({ n: v.number, text: v.content.map((inline) => inline.text).join('').replace(/\s+/g, ' ').trim() }));
    } catch {
      return [];
    }
  };
  const en = read('kjv');
  const ar = read('svd');
  return en.length === 0 && ar.length === 0 ? null : { en, ar };
}
