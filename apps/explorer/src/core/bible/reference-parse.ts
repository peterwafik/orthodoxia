import { lookupBook } from './book-lookup.ts';
import { getReferenceName, type BookId } from './books.ts';
import type { Versification } from './versification.ts';
import { t } from '../../i18n/messages.ts';
import { normalizeArabic } from './names-ar.ts';

/** A reference entered by a user: a whole chapter (no verse) or a single verse. */
export interface ParsedReference {
  readonly book: BookId;
  readonly chapter: number;
  readonly verse: number | undefined;
}

export type ReferenceParseResult =
  | { readonly ok: true; readonly reference: ParsedReference }
  | { readonly ok: false; readonly error: string };

/**
 * `<book> <chapter>[<separator><verse>]`, where the book may start with 1–3 or a roman numeral and
 * the separator is `:`, `.` or whitespace. Matches e.g. `John 3:16`, `1 Cor 13`, `Gen.1.1`.
 */
const REFERENCE_PATTERN =
  /^(?<book>(?:[1-3]\s*)?[a-z\u0621-\u064A][a-z\u0621-\u064A\s.]*?)\s*(?<chapter>\d+)(?:\s*[:.\s]\s*(?<verse>\d+))?$/i;

function failure(error: string): ReferenceParseResult {
  return { ok: false, error };
}

function formatCandidates(names: readonly string[]): string {
  return names.length <= 1
    ? names.join('')
    : `${names.slice(0, -1).join(', ')} ${t.search.or} ${names.slice(-1).join('')}`;
}

/**
 * Parses a human-typed Bible reference such as `John 3:16`, `jn 3 16`, `1co13` or `Gen.1.1`, and
 * checks that the chapter and verse exist in the given versification.
 */
export function parseReference(input: string, versification: Versification): ReferenceParseResult {
  const match = REFERENCE_PATTERN.exec(normalizeArabic(input).replace(/[،؛]/g, ' ').trim());
  if (!match?.groups) {
    return failure(t.search.invalid);
  }
  const { book: bookQuery = '', chapter: chapterText = '', verse: verseText } = match.groups;

  const lookup = lookupBook(bookQuery);
  switch (lookup.kind) {
    case 'unknown':
      return failure(t.search.unknownBook(bookQuery.trim()));
    case 'ambiguous':
      return failure(
        t.search.ambiguous(
          bookQuery.trim(),
          formatCandidates(lookup.candidates.map((book) => book.name)),
        ),
      );
    case 'found':
      break;
  }

  const { book } = lookup;
  const chapter = Number(chapterText);
  const verseCount = versification.verseCountOf(book.id, chapter);
  if (verseCount === undefined) {
    return failure(t.search.chapters(book.name, String(versification.chapterCountOf(book.id))));
  }

  if (verseText === undefined) {
    return { ok: true, reference: { book: book.id, chapter, verse: undefined } };
  }
  const verse = Number(verseText);
  if (verse < 1 || verse > verseCount) {
    return failure(t.search.verses(`${getReferenceName(book)} ${chapter}`, String(verseCount)));
  }
  return { ok: true, reference: { book: book.id, chapter, verse } };
}
