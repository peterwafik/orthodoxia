/**
 * Builds the English St. Mark commentary, content/commentary/stmark-en/<BOOK>.json, from the
 * Arabic books and the checked translation chunks (content/translations/stmark-en). Same structure
 * as the Arabic; an entry is kept only when all its paragraphs are translated with a current hash,
 * so a reader never sees half an entry or a translation of older text. Chunks failing
 * translate-check.ts are skipped and reported. `--source=malaty` builds content/commentary/malaty-en.
 */
import { existsSync, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { COMMENTARY_SCHEMA_VERSION, type CommentaryBook, type CommentaryChapter, type CommentarySourceId } from '../../packages/commentary/src/index.ts';
import { checkChunk, unitHash } from './translate-prepare-lib.ts';

const ROOT = resolve(import.meta.dirname, '../..');
const source = (process.argv.find((arg) => arg.startsWith('--source='))?.slice('--source='.length) ?? 'stmark') as CommentarySourceId;
const ARABIC = join(ROOT, 'content/commentary', source);
const CHUNKS = join(ROOT, 'content/translations', `${source}-en`);
const OUT = join(ROOT, 'content/commentary', `${source}-en`);

rmSync(OUT, { recursive: true, force: true });
mkdirSync(OUT, { recursive: true });
const summary: Record<string, { entries: number; translated: number }> = {};
let skipped = 0;
for (const file of readdirSync(ARABIC).filter((name) => /^[A-Z0-9]{3}\.json$/.test(name))) {
  const book = JSON.parse(readFileSync(join(ARABIC, file), 'utf8')) as CommentaryBook;
  const dir = join(CHUNKS, book.book);
  if (!existsSync(dir)) continue;
  const english = new Map<string, { hash: string; en: string }>();
  for (const name of readdirSync(dir).filter((chunk) => chunk.endsWith('.en.json'))) {
    const path = join(dir, name);
    const problems = checkChunk(path);
    if (problems.length > 0) {
      skipped++;
      console.log(`skipped ${book.book}/${name}: ${problems[0]}`);
      continue;
    }
    const chunk = JSON.parse(readFileSync(path, 'utf8')) as { units: Record<string, { hash: string; en: string }> };
    for (const [id, unit] of Object.entries(chunk.units)) english.set(id, unit);
  }
  if (english.size === 0) continue;
  const current = (id: string, arabic: string) => {
    const unit = english.get(id);
    return unit !== undefined && unit.hash === unitHash(arabic) ? unit.en : null;
  };
  let entries = 0;
  let translated = 0;
  const chapters: CommentaryChapter[] = book.chapters
    .map((chapter) => {
      let section: { ar: string | null; en: string | null } = { ar: null, en: null };
      const out = chapter.entries.flatMap((entry, index) => {
        entries++;
        if (entry.section !== section.ar) section = { ar: entry.section, en: entry.section === null ? null : current(`${chapter.chapter}.${index}.s`, entry.section) };
        const paragraphs = entry.paragraphs.map((paragraph, p) => {
          const en = current(`${chapter.chapter}.${index}.${p}`, paragraph.text);
          return en === null ? null : { ...paragraph, text: en };
        });
        if (paragraphs.some((paragraph) => paragraph === null)) return [];
        translated++;
        return [{ ...entry, section: section.en, paragraphs: paragraphs as NonNullable<(typeof paragraphs)[number]>[] }];
      });
      return { ...chapter, intro: [], entries: out };
    })
    .filter((chapter) => chapter.entries.length > 0);
  if (translated === 0) continue;
  const output: CommentaryBook = {
    schemaVersion: COMMENTARY_SCHEMA_VERSION,
    source,
    book: book.book,
    language: 'en',
    translation: { from: 'ar', method: 'machine', reviewed: false },
    documents: book.documents,
    extraction: book.extraction,
    intro: [],
    chapters,
  };
  writeFileSync(join(OUT, `${book.book}.json`), `${JSON.stringify(output)}\n`);
  summary[book.book] = { entries, translated };
}
writeFileSync(join(OUT, 'progress.json'), `${JSON.stringify(summary, null, 1)}\n`);
const total = Object.values(summary).reduce((sum, book) => ({ entries: sum.entries + book.entries, translated: sum.translated + book.translated }), { entries: 0, translated: 0 });
console.log(`English: ${total.translated} entries translated in ${Object.keys(summary).length} books${skipped ? `; ${skipped} chunks skipped` : ''}`);
