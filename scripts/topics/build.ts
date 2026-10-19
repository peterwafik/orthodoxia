/**
 * Builds data/topics/verses.json: for every subtopic with an entry in nave-map.ts, the verse ranges that
 * Nave's Topical Bible lists for it, merged and packed ([book, chapter, verse, chapter, verse], 0 = whole
 * chapter). The result is committed, so site builds need no download. Run after editing nave-map.ts:
 *
 *   node scripts/topics/fetch.ts && node scripts/topics/build.ts
 */
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { BOOKS } from '../../packages/bible/src/books.ts';
import { parseNave } from '../../apps/web/src/lib/topics/nave-parse.ts';
import { NAVE_MAP } from '../../apps/web/src/lib/topics/nave-map.ts';
import { parseSelector, selectRefs } from '../../apps/web/src/lib/topics/nave-select.ts';
import { mergeRanges, toPacked, type Packed } from '../../apps/web/src/lib/topics/ranges.ts';
import { FAMILIES } from '../../apps/web/src/lib/topics/taxonomy-families.ts';

const ROOT = resolve(import.meta.dirname, '../..');
const RAW = resolve(ROOT, 'data/topics/raw/nave.xml');
const OUT = resolve(ROOT, 'data/topics/verses.json');
if (!existsSync(RAW)) throw new Error('Run `node scripts/topics/fetch.ts` first.');

const codeOf = new Map(BOOKS.map((book) => [book.osis, book.code]));
const idOf = new Map(FAMILIES.flatMap((family) => family.topics.map((topic) => [`${family.id}:${topic.en}`, topic.id] as const)));
const nave = parseNave(readFileSync(RAW, 'utf8'));

const result: Record<string, Packed[]> = {};
let verses = 0;
for (const [key, selector] of Object.entries(NAVE_MAP)) {
  const id = idOf.get(key);
  if (id === undefined) throw new Error(`nave-map.ts: "${key}" is not a subtopic of the taxonomy`);
  const ranges = selectRefs(nave, parseSelector(selector)).flatMap((ref) => {
    const book = codeOf.get(ref.book);
    if (book === undefined) throw new Error(`Unknown book "${ref.book}" in Nave for ${key}`);
    return [{ book, from: ref.from, to: ref.to }];
  });
  const merged = mergeRanges(ranges);
  if (merged.length === 0) throw new Error(`nave-map.ts: "${key}" selects no verses (${selector})`);
  result[id] = merged.map(toPacked);
  verses += merged.length;
}
const ordered = Object.fromEntries(Object.entries(result).sort(([a], [b]) => a.localeCompare(b, 'en', { numeric: true })));
writeFileSync(OUT, `${JSON.stringify(ordered)}\n`);
console.log(`${Object.keys(ordered).length} subtopics, ${verses} ranges → ${OUT}`);
