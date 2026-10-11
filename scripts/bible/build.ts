/**
 * Builds the Bible reader's data from the pinned raw files:
 *   data/bible/build/<edition>/<BOOK>.json   one EditionBookFile per book
 *   data/bible/build/manifest.json           editions → books → chapter numbers, plus counts
 *
 * Idempotent: the output depends only on `data/bible/raw/` (verified against
 * `data/bible/sources.json`) and on `packages/bible`. Fails on any missing book or empty chapter.
 */
import { createHash } from 'node:crypto';
import { mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { unzipSync, strFromU8 } from 'fflate';
import { BOOKS } from '../../packages/bible/src/books.ts';
import { EDITIONS, type TextSourceId } from '../../packages/bible/src/editions.ts';
import { BIBLE_SCHEMA_VERSION, selectChapters, type EditionBookFile } from '../../packages/bible/src/text.ts';
import { parseUsfm, type Book } from '../../packages/bible/src/usfm.ts';
import { parseWikisourceBook } from '../../packages/bible/src/wikisource.ts';
import type { PinnedFile } from './sources.ts';

const ROOT = resolve(import.meta.dirname, '../..');
const RAW = join(ROOT, 'data/bible/raw');
const OUT = join(ROOT, 'data/bible/build');
const pins = (JSON.parse(readFileSync(join(ROOT, 'data/bible/sources.json'), 'utf8')) as { files: PinnedFile[] }).files;

function readPinned(pin: PinnedFile): Uint8Array {
  const data = readFileSync(join(RAW, pin.file));
  const actual = createHash('sha256').update(data).digest('hex');
  if (actual !== pin.sha256) throw new Error(`${pin.file}: SHA-256 mismatch. Run \`node scripts/bible/fetch.ts\`.`);
  return data;
}

/** Every book of every source, parsed once. */
const library = new Map<TextSourceId, Map<string, Book>>();
for (const pin of pins) {
  const books = library.get(pin.source) ?? new Map<string, Book>();
  library.set(pin.source, books);
  if (pin.file.endsWith('.zip')) {
    const entries = unzipSync(readPinned(pin), { filter: (file) => file.name.endsWith('.usfm') });
    for (const data of Object.values(entries)) {
      const book = parseUsfm(strFromU8(data));
      books.set(book.code, book);
    }
  } else {
    const key = pin.file.replace(/^.*\/|\.wikitext$/g, '');
    books.set(key, parseWikisourceBook(strFromU8(readPinned(pin)), key, pin.title ?? key));
  }
}

rmSync(OUT, { recursive: true, force: true });
const manifest: Record<string, { books: { code: string; chapters: number[] }[]; verses: number; chapters: number }> = {};
const notices: string[] = [];

for (const edition of EDITIONS) {
  mkdirSync(join(OUT, edition.id), { recursive: true });
  const books: { code: string; chapters: number[] }[] = [];
  let verses = 0;
  let chapters = 0;
  for (const info of BOOKS) {
    const source = edition.books[info.code];
    if (source === undefined) continue;
    const parsed = library.get(source.source)?.get(source.book);
    if (parsed === undefined) throw new Error(`${edition.id}: ${source.source} has no book ${source.book} (for ${info.code})`);
    const selected = selectChapters(parsed, source);
    const file: EditionBookFile = {
      schemaVersion: BIBLE_SCHEMA_VERSION,
      edition: edition.id,
      code: info.code,
      source: source.source,
      sourceName: parsed.name,
      note: source.note ?? null,
      chapters: selected,
    };
    writeFileSync(join(OUT, edition.id, `${info.code}.json`), JSON.stringify(file));
    // Record verse numbers the source skips, so gaps are documented rather than silent.
    for (const chapter of selected) {
      let previous: number | null = null;
      for (const verse of chapter.verses) {
        const number = Number.parseInt(verse.number, 10);
        if (previous !== null && number > previous + 1) {
          notices.push(`${edition.id} ${info.code} ${chapter.number}: verses ${previous + 1}–${number - 1} are absent from the source`);
        }
        previous = Number.parseInt(verse.number.split('-').at(-1) ?? verse.number, 10);
      }
    }
    books.push({ code: info.code, chapters: selected.map((chapter) => chapter.number) });
    chapters += selected.length;
    verses += selected.reduce((sum, chapter) => sum + chapter.verses.length, 0);
  }
  manifest[edition.id] = { books, verses, chapters };
  console.log(`✓ ${edition.id}: ${books.length} books, ${chapters} chapters, ${verses} verses`);
}

writeFileSync(
  join(OUT, 'manifest.json'),
  `${JSON.stringify({ schemaVersion: BIBLE_SCHEMA_VERSION, editions: manifest, notices }, null, 2)}\n`,
);
console.log(`${notices.length} notice(s): verse numbers absent from a source (listed in manifest.json)`);
for (const notice of notices.slice(0, 10)) console.log(`  · ${notice}`);
