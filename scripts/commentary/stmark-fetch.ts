/**
 * Downloads the St. Mark commentary PDFs into data/commentary/stmark/pdf/ (git-ignored: 136 MB) and
 * pins each by SHA-256 in data/commentary/stmark/sources.json (committed).
 *
 *   node scripts/commentary/stmark-fetch.ts            verify pins; download missing files
 *   node scripts/commentary/stmark-fetch.ts --update   re-download everything and re-pin
 */
import { createHash } from 'node:crypto';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { documentUrl, STMARK_DOCUMENTS } from './stmark-sources.ts';

const ROOT = resolve(import.meta.dirname, '../..');
const DIR = join(ROOT, 'data/commentary/stmark');
const PDF_DIR = join(DIR, 'pdf');
const PINS = join(DIR, 'sources.json');
const update = process.argv.includes('--update');
const today = new Date().toISOString().slice(0, 10);

interface Pin {
  readonly file: string;
  readonly url: string;
  readonly sha256: string;
  readonly bytes: number;
  readonly retrievedAt: string;
}

const sha256 = (data: Uint8Array) => createHash('sha256').update(data).digest('hex');
const pins: Pin[] = existsSync(PINS) ? (JSON.parse(readFileSync(PINS, 'utf8')) as { files: Pin[] }).files : [];
mkdirSync(PDF_DIR, { recursive: true });

async function download(url: string): Promise<Uint8Array> {
  const response = await fetch(url, { headers: { 'User-Agent': 'OrthodoxiaCommentaryImport/0.1 (https://github.com/peterwafik/orthodoxia)' } });
  const data = new Uint8Array(await response.arrayBuffer());
  const isPdf = new TextDecoder().decode(data.slice(0, 5)) === '%PDF-';
  if (!response.ok || !isPdf) throw new Error(`GET ${url}: HTTP ${response.status}${isPdf ? '' : ', not a PDF'}`);
  return data;
}

const result: Pin[] = [];
for (const { file } of STMARK_DOCUMENTS) {
  const path = join(PDF_DIR, file);
  const pin = pins.find((candidate) => candidate.file === file);
  if (pin !== undefined && !update) {
    if (!existsSync(path)) {
      const data = await download(pin.url);
      if (sha256(data) !== pin.sha256) throw new Error(`${file}: changed upstream since pinned; run with --update and review.`);
      writeFileSync(path, data);
      console.log(`↓ ${file} (verified)`);
    } else if (sha256(readFileSync(path)) !== pin.sha256) {
      throw new Error(`${file}: SHA-256 mismatch.`);
    } else {
      console.log(`✓ ${file}`);
    }
    result.push(pin);
    continue;
  }
  const url = documentUrl(file);
  const data = await download(url);
  writeFileSync(path, data);
  result.push({ file, url, sha256: sha256(data), bytes: data.length, retrievedAt: today });
  console.log(`↻ ${file} (${(data.length / 1024 / 1024).toFixed(1)} MB)`);
}
writeFileSync(PINS, `${JSON.stringify({ files: result }, null, 2)}\n`);
console.log(`Pinned ${result.length} files.`);
