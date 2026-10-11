/**
 * Splits the St. Mark commentary (content/commentary/stmark/<BOOK>.json) into translation chunks:
 * content/translations/stmark-en/<BOOK>/<nnn>.ar.json, each a list of { id, kind, ar } units of
 * about CHUNK_WORDS Arabic words. Translators write the matching <nnn>.en.json ({ id → English });
 * translate-merge.ts builds content/commentary/stmark-en/<BOOK>.json from them.
 *
 * Unit ids are stable for a given import: "<chapter>.<entry>.s" for an entry's section title and
 * "<chapter>.<entry>.<paragraph>" for its paragraphs. Each unit carries a hash of its Arabic text,
 * so a re-import that changes a unit makes its old translation stale rather than wrong.
 * Existing chunk files are never overwritten (translations in progress are kept).
 *
 *   node scripts/commentary/translate-prepare.ts [BOOK …]
 */
import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import type { CommentaryBook } from '../../packages/commentary/src/index.ts';
import { unitsOf, type TranslationUnit } from './translate-prepare-lib.ts';

const ROOT = resolve(import.meta.dirname, '../..');
const SOURCE = join(ROOT, 'content/commentary/stmark');
const OUT = join(ROOT, 'content/translations/stmark-en');
const CHUNK_WORDS = 3500;

const words = (text: string) => text.split(/\s+/).length;

const requested = process.argv.slice(2);
const files = readdirSync(SOURCE).filter((file) => /^[A-Z0-9]{3}\.json$/.test(file));
let chunks = 0;
let created = 0;
for (const file of files) {
  const book = JSON.parse(readFileSync(join(SOURCE, file), 'utf8')) as CommentaryBook;
  if (requested.length > 0 && !requested.includes(book.book)) continue;
  const units = unitsOf(book);
  if (units.length === 0) continue;
  const dir = join(OUT, book.book);
  mkdirSync(dir, { recursive: true });
  let current: TranslationUnit[] = [];
  let count = 0;
  let number = 0;
  const flush = () => {
    if (current.length === 0) return;
    number++;
    chunks++;
    const path = join(dir, `${String(number).padStart(3, '0')}.ar.json`);
    if (!existsSync(path)) {
      writeFileSync(path, `${JSON.stringify({ book: book.book, chunk: number, units: current }, null, 1)}\n`);
      created++;
    }
    current = [];
    count = 0;
  };
  // Chunks end at a chapter boundary when they are already half full, so that a chunk usually
  // holds whole chapters and the translator sees each chapter's context together.
  let chapter = '';
  for (const unit of units) {
    const unitChapter = unit.id.split('.')[0]!;
    if (unitChapter !== chapter && count >= CHUNK_WORDS / 2) flush();
    chapter = unitChapter;
    current.push(unit);
    count += words(unit.ar);
    if (count >= CHUNK_WORDS * 1.5) flush();
  }
  flush();
}
console.log(`${chunks} chunks (${created} new) in content/translations/stmark-en/`);
