/**
 * Checks translated chunks against their Arabic sources (checkChunk in translate-prepare-lib.ts).
 *
 *   node scripts/commentary/translate-check.ts [--source=malaty] <chunk.en.json | BOOK | all>
 * Prints "ok" or the problems; exits 1 on problems.
 */
import { readdirSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { checkChunk } from './translate-prepare-lib.ts';

const ROOT = resolve(import.meta.dirname, '../..');
const source = process.argv.find((arg) => arg.startsWith('--source='))?.slice('--source='.length) ?? 'stmark';
const DIR = join(ROOT, 'content/translations', `${source}-en`);

const target = process.argv.slice(2).find((arg) => !arg.startsWith('--')) ?? 'all';
const paths = target.endsWith('.json')
  ? [resolve(target)]
  : readdirSync(DIR)
      .filter((book) => target === 'all' || book === target)
      .flatMap((book) => readdirSync(join(DIR, book)).filter((file) => file.endsWith('.en.json')).map((file) => join(DIR, book, file)));
let failed = 0;
for (const path of paths) {
  const problems = checkChunk(path);
  if (problems.length > 0) {
    failed++;
    console.log(`${path}:\n  ${problems.slice(0, 20).join('\n  ')}`);
  }
}
if (target.endsWith('.json')) console.log(failed === 0 ? 'ok' : '');
else console.log(`${paths.length - failed}/${paths.length} chunks ok`);
process.exit(failed === 0 ? 0 : 1);
