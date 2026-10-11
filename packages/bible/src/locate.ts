import { getEdition, type Edition } from './editions.ts';
import { convertPsalm } from './psalms.ts';

export interface Location {
  readonly book: string;
  /** `null` means the book's index page (no exact chapter equivalent). */
  readonly chapter: number | null;
}

/**
 * Finds where a chapter of one edition lives in another, so switching edition or language keeps the
 * reader in place. Handles the places where editions package the same text differently:
 * Septuagint psalm numbering, Psalm 151, the Letter of Jeremiah (Baruch 6 in KJV/Arabic, its own book
 * in Brenton), and the Song of the Three (its own book in KJV/Arabic, inside Daniel 3 in Brenton).
 * Returns `null` when the target edition has no such book at all.
 */
export function equivalentLocation(fromId: string, toId: string, location: Location): Location | null {
  const from = getEdition(fromId);
  const to = getEdition(toId);
  if (from === undefined || to === undefined) return null;
  const { book, chapter } = location;
  const has = (edition: Edition, code: string): boolean => code in edition.books;

  if (book === 'PSA' && chapter !== null) {
    if (to.psalms === 'lxx' || from.psalms === 'lxx') {
      const converted = convertPsalm(chapter, from.psalms, to.psalms);
      if (converted !== undefined) return { book: 'PSA', chapter: converted };
      // LXX Psalm 151 → the standalone Psalm 151 book.
      return has(to, 'PS2') ? { book: 'PS2', chapter: 1 } : { book: 'PSA', chapter: null };
    }
    return { book, chapter };
  }
  if (book === 'PS2') {
    if (has(to, 'PS2')) return { book, chapter };
    return to.psalms === 'lxx' ? { book: 'PSA', chapter: 151 } : null;
  }
  if (book === 'LJE' && !has(to, 'LJE')) return has(to, 'BAR') ? { book: 'BAR', chapter: 6 } : null;
  // Baruch 6 is the Letter of Jeremiah where the target keeps it as a separate book.
  if (book === 'BAR' && chapter === 6 && has(to, 'LJE')) return { book: 'LJE', chapter: 1 };
  if (book === 'S3Y' && !has(to, 'S3Y')) return has(to, 'DAN') ? { book: 'DAN', chapter: 3 } : null;
  if (book === 'ESG' && !has(to, 'ESG')) return has(to, 'EST') ? { book: 'EST', chapter: null } : null;
  if (!has(to, book)) return null;
  return { book, chapter };
}
