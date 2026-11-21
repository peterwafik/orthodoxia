/**
 * Quick check of hand-written Bible history files, for use while writing them:
 *   node scripts/bible-people/check-data.ts apps/web/src/data/bible-history/core-kings.ts
 * Checks every export that is an array of people or evidence: both languages present, no Arabic letters in English
 * and no Latin letters in Arabic, references readable and pointing at real chapters, keys known to TIPNR (or "x:"),
 * no duplicate keys, sensible dates. The vitest suite (bible-history.test.ts) runs the same checks on all files.
 */
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { parsePassages } from '../../apps/web/src/lib/topics/reference.ts';

const ROOT = resolve(import.meta.dirname, '../..');
const people = JSON.parse(readFileSync(resolve(ROOT, 'data/bible-people/people.json'), 'utf8')) as { k: string }[];
const KEYS = new Set(people.map((person) => person.k));
const ARTICLES = new Set(
  (await import('node:fs')).readdirSync(resolve(ROOT, 'apps/web/src/data/apologetics/articles')).map((name) => name.replace(/\.ts$/, '')),
);
const ARABIC = /[؀-ۿ]/;
const LATIN = /[A-Za-z]/;

const errors: string[] = [];
const bilingual = (where: string, value: unknown, required = true): void => {
  if (value === undefined) { if (required) errors.push(`${where}: missing`); return; }
  const text = value as { en?: string; ar?: string };
  if (!text.en?.trim()) errors.push(`${where}: English missing`);
  if (!text.ar?.trim()) errors.push(`${where}: Arabic missing`);
  if (text.en && ARABIC.test(text.en)) errors.push(`${where}: Arabic letters in English "${text.en}"`);
  if (text.ar && LATIN.test(text.ar)) errors.push(`${where}: Latin letters in Arabic "${text.ar}"`);
  if (text.ar && !ARABIC.test(text.ar)) errors.push(`${where}: Arabic text has no Arabic "${text.ar}"`);
};

for (const file of process.argv.slice(2)) {
  const module = (await import(pathToFileURL(resolve(file)).href)) as Record<string, unknown>;
  for (const [name, value] of Object.entries(module)) {
    if (!Array.isArray(value)) continue;
    const seen = new Set<string>();
    for (const item of value as Record<string, unknown>[]) {
      if ('says' in item) {
        const where = `${name}/${String(item.id)}`;
        if (seen.has(String(item.id))) errors.push(`${where}: duplicate id`);
        seen.add(String(item.id));
        for (const field of ['title', 'date', 'says']) bilingual(`${where}.${field}`, item[field]);
        for (const field of ['found', 'now', 'note']) bilingual(`${where}.${field}`, item[field], false);
        for (const key of (item.people as string[]) ?? []) if (!KEYS.has(key) && !key.startsWith('x:')) errors.push(`${where}: unknown person ${key}`);
        if (!Array.isArray(item.links) || item.links.length === 0) errors.push(`${where}: no links`);
        if (item.question !== undefined && !ARTICLES.has(String(item.question))) errors.push(`${where}: unknown question ${String(item.question)}`);
        continue;
      }
      const key = String(item.key);
      const where = `${name}/${key}`;
      if (seen.has(key)) errors.push(`${where}: duplicate key`);
      seen.add(key);
      if (!KEYS.has(key) && !key.startsWith('x:')) errors.push(`${where}: not a TIPNR key`);
      for (const field of ['name', 'role', 'summary']) bilingual(`${where}.${field}`, item[field]);
      bilingual(`${where}.dating`, item.dating, false);
      const office = item.office as { from: number; to: number; title: unknown } | undefined;
      if (office) { bilingual(`${where}.office.title`, office.title); if (office.from > office.to) errors.push(`${where}: office ends before it starts`); }
      if (item.born === undefined && item.died === undefined && office === undefined) errors.push(`${where}: no dates`);
      if (typeof item.born === 'number' && typeof item.died === 'number' && item.born > item.died) errors.push(`${where}: dies before birth`);
      for (const year of [item.born, item.died, office?.from, office?.to]) if (year === 0) errors.push(`${where}: there is no year 0`);
      for (const id of (item.questions as string[]) ?? []) if (!ARTICLES.has(id)) errors.push(`${where}: unknown question ${id}`);
      try { if (parsePassages(String(item.refs)).length === 0) errors.push(`${where}: no references`); } catch (error) { errors.push(`${where}: ${(error as Error).message}`); }
    }
    console.log(`${name}: ${value.length} entries`);
  }
}
if (errors.length > 0) { console.log(errors.join('\n')); console.log(`${errors.length} problem(s)`); process.exit(1); }
console.log('OK');
