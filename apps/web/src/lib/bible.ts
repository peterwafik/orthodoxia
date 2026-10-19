/**
 * Build-time access to the generated Bible data (`data/bible/build/`, produced by
 * `node scripts/bible/build.ts`). Pages read it while being pre-rendered; nothing is fetched by the
 * browser.
 */
import { existsSync, readFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import {
  BOOKS,
  EDITIONS,
  bookByCode,
  bookBySlug,
  equivalentLocation,
  getEdition,
  type BookInfo,
  type Edition,
  type EditionBookFile,
} from '@orthodoxia/bible';
import { localePath, type Locale } from '../i18n/index.ts';

// Astro runs builds from apps/web and the tests run from the repository root; the data lives at the root.
const DATA = [
  resolve(process.cwd(), '../../data/bible/build'),
  resolve(process.cwd(), 'data/bible/build'),
  resolve(import.meta.dirname, '../../../../data/bible/build'),
].find((directory) => existsSync(join(directory, 'manifest.json'))) ?? resolve(process.cwd(), '../../data/bible/build');

interface Manifest {
  readonly editions: Record<string, { books: { code: string; chapters: number[] }[] }>;
}

let manifest: Manifest | undefined;
function getManifest(): Manifest {
  if (manifest === undefined) {
    try {
      manifest = JSON.parse(readFileSync(join(DATA, 'manifest.json'), 'utf8')) as Manifest;
    } catch {
      throw new Error('Bible data is missing. Run `node scripts/bible/build.ts` (npm run bible) first.');
    }
  }
  return manifest;
}

const bookCache = new Map<string, EditionBookFile>();
export function loadBook(edition: string, code: string): EditionBookFile {
  const key = `${edition}/${code}`;
  let book = bookCache.get(key);
  if (book === undefined) {
    book = JSON.parse(readFileSync(join(DATA, edition, `${code}.json`), 'utf8')) as EditionBookFile;
    bookCache.set(key, book);
  }
  return book;
}

/** The books an edition contains, in canonical order, with their chapter numbers. */
export function editionBooks(edition: string): { info: BookInfo; chapters: number[] }[] {
  const entries = getManifest().editions[edition]?.books ?? [];
  return entries.flatMap(({ code, chapters }) => {
    const info = bookByCode(code);
    return info === undefined ? [] : [{ info, chapters }];
  });
}

export function editionsForLocale(locale: Locale): Edition[] {
  return EDITIONS.filter((edition) => edition.locale === locale);
}

export function bookName(info: BookInfo, locale: Locale): string {
  return locale === 'ar' ? info.ar : info.en;
}

export function biblePath(locale: Locale, edition: string, book?: BookInfo, chapter?: number | null): string {
  const parts = ['bible', edition];
  if (book !== undefined) parts.push(book.slug);
  if (book !== undefined && chapter !== undefined && chapter !== null) parts.push(String(chapter));
  return localePath(locale, parts.join('/'));
}

/** The address of the same place in another edition, falling back to that edition's book list. */
export function equivalentPath(fromEdition: string, toEdition: string, code: string, chapter: number | null): string {
  const target = getEdition(toEdition);
  if (target === undefined) throw new Error(`Unknown edition ${toEdition}`);
  const location = equivalentLocation(fromEdition, toEdition, { book: code, chapter });
  const info = location === null ? undefined : bookByCode(location.book);
  if (location === null || info === undefined) return biblePath(target.locale, toEdition);
  const exists = location.chapter === null || editionBooks(toEdition).some(
    (entry) => entry.info.code === location.book && entry.chapters.includes(location.chapter as number),
  );
  return biblePath(target.locale, toEdition, info, exists ? location.chapter : null);
}

export { BOOKS, bookBySlug, getEdition };
