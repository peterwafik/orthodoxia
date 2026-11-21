/**
 * Downloads STEPBible's TIPNR (Translators Individualised Proper Names with all References, Tyndale House Cambridge,
 * CC BY 4.0) into data/bible-people/raw/tipnr.txt (git-ignored): every person named in the Bible, one record each, with
 * parents, partners, children, tribe, the period they lived in, and every verse that names them.
 * Run `node scripts/bible-people/fetch.ts`, then `node scripts/bible-people/build.ts`.
 */
import { createHash } from 'node:crypto';
import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';

const URL =
  'https://raw.githubusercontent.com/STEPBible/STEPBible-Data/master/Proper%20Nouns/' +
  'TIPNR%20-%20Translators%20Individualised%20Proper%20Names%20with%20all%20References%20-%20STEPBible.org%20CC%20BY.txt';
const OUT = resolve(import.meta.dirname, '../../data/bible-people/raw/tipnr.txt');

if (existsSync(OUT) && !process.argv.includes('--force')) {
  console.log(`Already downloaded: ${OUT} (use --force to fetch again)`);
} else {
  const response = await fetch(URL);
  if (!response.ok) throw new Error(`${URL}: HTTP ${response.status}`);
  const text = await response.text();
  if (!text.includes('$========== PERSON')) throw new Error('The downloaded file is not the expected TIPNR data.');
  mkdirSync(dirname(OUT), { recursive: true });
  writeFileSync(OUT, text);
  console.log(`Saved ${text.length} characters to ${OUT} (sha256 ${createHash('sha256').update(text).digest('hex')})`);
}
