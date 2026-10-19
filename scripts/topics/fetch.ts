/**
 * Downloads Nave's Topical Bible (Orville J. Nave, 1903, public domain) as marked-up text from CCEL into
 * data/topics/raw/nave.xml (git-ignored). Run `node scripts/topics/fetch.ts`, then `node scripts/topics/build.ts`.
 */
import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';

const URL = 'https://www.ccel.org/ccel/n/nave/bible.xml';
const OUT = resolve(import.meta.dirname, '../../data/topics/raw/nave.xml');

if (existsSync(OUT) && !process.argv.includes('--force')) {
  console.log(`Already downloaded: ${OUT} (use --force to fetch again)`);
} else {
  const response = await fetch(URL);
  if (!response.ok) throw new Error(`${URL}: HTTP ${response.status}`);
  const text = await response.text();
  if (!text.includes('<ThML')) throw new Error('The downloaded file is not the expected ThML text.');
  mkdirSync(dirname(OUT), { recursive: true });
  writeFileSync(OUT, text);
  console.log(`Saved ${text.length} characters to ${OUT}`);
}
