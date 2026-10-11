/** Diagnostic: shows how the parser classifies the lines of one cached document. */
import { readdirSync, readFileSync } from 'node:fs';
import { join, resolve } from 'node:path';

const ROOT = resolve(import.meta.dirname, '../..');
const CACHE = join(ROOT, 'data/commentary/stmark/text');
const [file, from = '0', to = '120'] = process.argv.slice(2);
const cached = readdirSync(CACHE).find((name) => name.startsWith(file!));
if (cached === undefined) throw new Error(`no cache for ${file}`);
const pages = JSON.parse(readFileSync(join(CACHE, cached), 'utf8')) as { page: number; lines: string[] }[];
const lines = pages.flatMap((page) => [`@@ page ${page.page}`, ...page.lines]);
const plain = (line: string) => line.replace(/[ً-ْٰ]/g, '').replace(/[أإآٱ]/g, 'ا').replace(/\s+/g, ' ').trim();
const MARKER = /^ع\s*[()]?\s*(\d+)\s*(?:[-–]\s*(\d+)|((?:\s*[،,و]\s*\d+)+))?\s*[()]?\s*:\s*/;
const SECTION = /^\(\s*\d+\s*\)\s*(.+?)\s*[()]?\s*ع\s*[\d\s,،\-–]+[()]?\s*[:()]*\s*$/;
const HEADING = /^(?:ال)?(?:اصحاح|مزمور)\s+\S+(?:\s+\S+){0,3}$/;
for (const line of lines.slice(Number(from), Number(to))) {
  const text = plain(line);
  const tag = MARKER.test(text) ? 'MARK' : SECTION.test(text) ? 'SECT' : HEADING.test(text) && text.split(' ').length <= 4 ? 'HEAD' : '    ';
  console.log(`${tag} ${line.slice(0, 110)}`);
}
