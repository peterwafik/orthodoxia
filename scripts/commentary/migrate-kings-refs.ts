/**
 * One-off migration (2026-10-11): references to Kings written with reversed letters ("2لم18: 4" for
 * "2مل18: 4") are corrected in the committed Arabic commentary, and the translations of the units
 * concerned — which already read "Kgs" — are carried over to the new source hashes so they stay
 * current. Future imports apply the same correction in polishArabicText.
 */
import { readFileSync, readdirSync, writeFileSync, existsSync } from 'node:fs';
import { join, resolve } from 'node:path';
import type { CommentaryBook } from '../../packages/commentary/src/index.ts';
import { unitHash } from './translate-prepare-lib.ts';

const ROOT = resolve(import.meta.dirname, '../..');
const ARABIC = join(ROOT, 'content/commentary/stmark');
const CHUNKS = join(ROOT, 'content/translations/stmark-en');
const fix = (text: string) => text.replace(/([12])لم(?=\s?\d)/g, '$1مل');

let changed = 0;
for (const file of readdirSync(ARABIC).filter((name) => /^[A-Z0-9]{3}\.json$/.test(name))) {
  const book = JSON.parse(readFileSync(join(ARABIC, file), 'utf8')) as CommentaryBook;
  const rehash = new Map<string, string>();
  const chapters = book.chapters.map((chapter) => ({
    ...chapter,
    entries: chapter.entries.map((entry) => ({
      ...entry,
      paragraphs: entry.paragraphs.map((paragraph) => {
        const text = fix(paragraph.text);
        if (text !== paragraph.text) rehash.set(unitHash(paragraph.text), unitHash(text));
        return { ...paragraph, text };
      }),
    })),
  }));
  if (rehash.size === 0) continue;
  changed += rehash.size;
  writeFileSync(join(ARABIC, file), `${JSON.stringify({ ...book, chapters })}\n`);
  const dir = join(CHUNKS, book.book);
  if (!existsSync(dir)) continue;
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    let text = readFileSync(path, 'utf8');
    for (const [from, to] of rehash) text = text.replaceAll(`"hash": "${from}"`, `"hash": "${to}"`).replaceAll(`"hash":"${from}"`, `"hash":"${to}"`);
    if (name.endsWith('.ar.json')) text = fix(text);
    writeFileSync(path, text);
  }
}
console.log(`${changed} paragraphs corrected`);
