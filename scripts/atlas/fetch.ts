/**
 * Downloads the OpenBible.info Bible Geocoding Data (CC BY 4.0: every place named in the Protestant Bible, with its
 * verses and the scholarly identifications) into data/atlas/raw/ancient.jsonl (git-ignored). Run
 * `node scripts/atlas/fetch.ts`, then `node scripts/atlas/build.ts`.
 */
import { createHash } from 'node:crypto';
import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';

const URL = 'https://raw.githubusercontent.com/openbibleinfo/Bible-Geocoding-Data/main/data/ancient.jsonl';
const OUT = resolve(import.meta.dirname, '../../data/atlas/raw/ancient.jsonl');

if (existsSync(OUT) && !process.argv.includes('--force')) {
  console.log(`Already downloaded: ${OUT} (use --force to fetch again)`);
} else {
  const response = await fetch(URL);
  if (!response.ok) throw new Error(`${URL}: HTTP ${response.status}`);
  const text = await response.text();
  if (!text.includes('"friendly_id"')) throw new Error('The downloaded file is not the expected geocoding data.');
  mkdirSync(dirname(OUT), { recursive: true });
  writeFileSync(OUT, text);
  console.log(`Saved ${text.length} characters to ${OUT} (sha256 ${createHash('sha256').update(text).digest('hex')})`);
}
