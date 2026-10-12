/**
 * Downloads Fr. Tadros Yacoub Malaty's commentary pages from St-Takla.org for the books whose
 * chapters the St. Mark commentary does not cover, into data/commentary/malaty/html/ (git-ignored),
 * and records what was fetched in data/commentary/malaty/sources.json (committed). Published with
 * Fr. Tadros's permission (docs/translation/PERMISSION-REQUEST-MALATY.md).
 *
 *   node scripts/commentary/malaty-fetch.ts            download missing pages
 *   node scripts/commentary/malaty-fetch.ts --update   re-download everything
 */
import { createHash } from 'node:crypto';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';

const ROOT = resolve(import.meta.dirname, '../..');
const DIR = join(ROOT, 'data/commentary/malaty');
const HTML = join(DIR, 'html');
const update = process.argv.includes('--update');
const BASE = 'https://st-takla.org/pub_Bible-Interpretations/Holy-Bible-Tafsir-01-Old-Testament/Father-Tadros-Yacoub-Malaty/';

/** Book → index page (relative to BASE), from St-Takla's Malaty index (2026-10-12). */
export const MALATY_BOOKS: Readonly<Record<string, string>> = {
  EXO: '02-Sefr-El-Khoroug/Tafseer-Sefr-El-Khroug__00-index.html',
  '1CH': '13-Sefr-Akhbar-El-Ayam-El-Awal/Tafseer-Sefr-Akhbar-El-Ayam-El-Awal__00-index.html',
  '2CH': '14-Sefr-Akhbaar-Al-Aiam-El-Thane/Tafseer-Sefr-A5bar-AlAyam-Al-Thany__00-index.html',
  EZR: '15-Sefr-Ezra/Tafseer-Sefr-Ezra__00-index.html',
  EST: '19-Sefr-Astir/Tafseer-Sefr-Esteer__00-index.html',
  JOB: '20-Sefr-Ayoub/Tafseer-Sefr-Ayoob__00-index.html',
  PSA: '21-Sefr-El-Mazameer/Tafseer-Sefr-El-Mazamir__00-index.html',
  PRO: '22-Sefr-El-Amthal/Tafseer-Sefr-El-Amthal__00-index.html',
  ECC: '23-Sefr-El-Gamaa/Tafseer-Sefr-El-Gam3a__00-index.html',
  SNG: '24-Seft-Nashid-El-Anshad/Tafseer-Sefr-Nasheed-El-Anasheed__00-index.html',
  WIS: '25-Sefr-El-Hekma/Tafseer-Sefr-El-Hekmet-Solaiman__00-index.html',
  SIR: '26-Sefr-Yashoue-Ebn-Sirakh/Tafseer-Sefr-Yasho3-Ibn-Sira5__00-index.html',
  ISA: '27-Sefr-Asheia/Tafseer-Sefr-Ash3eia2__00-index.html',
  EZK: '31-Sefr-Hazkyal/Tafseer-Sefr-Hazkial__00-index.html',
  DAN: '32-Sefr-Danial/Tafseer-Sefr-Daniel__00-index.html',
  HOS: '33-Sefr-Hoshae/Tafseer-Sefr-Hosha3__00-index.html',
  JOL: '34-Sefr-Youil/Tafseer-Sefr-Yo2il__00-index.html',
  AMO: '35-Sefr-Amos/Tafseer-Sefr-3amoos__00-index.html',
  OBA: '36-Sefr-Obedia/Tafseer-Sefr-Obedya__00-index.html',
  JON: '37-Sefr-Younan/Tafseer-Sefr-Yonan__00-index.html',
  MIC: '38-Sefr-Mikha/Tafseer-Sefr-Mikha__00-index.html',
  NAM: '39-Sefr-Nahoum/Tafseer-Sefr-Nahoom__00-index.html',
  HAB: '40-Sefr-Habkouk/Tafseer-Sefr-Habakouk__00-index.html',
  ZEP: '41-Sefr-Safania/Tafseer-Sefr-Safanya__00-index.html',
  HAG: '42-Sefr-Hegy/Tafseer-Sefr-Heggi__00-index.html',
  ZEC: '43-Sefr-Zakarya/Tafseer-Sefr-Zakaria__00-index.html',
  MAL: '44-Sefr-Malakhi/Tafseer-Sefr-Malakhy__00-index.html',
};

const CHAPTER_PAGE = /Chapter[-_]?0*(\d{1,3})\.html$/i;

export interface MalatyPage {
  readonly book: string;
  readonly chapter: number;
  readonly url: string;
  readonly file: string;
  readonly sha256: string;
  readonly retrievedAt: string;
}

async function get(url: string): Promise<string> {
  for (let attempt = 1; ; attempt++) {
    try {
      const response = await fetch(url, { headers: { 'User-Agent': 'OrthodoxiaCommentaryImport/0.1 (https://github.com/peterwafik/orthodoxia)' } });
      if (!response.ok) throw new Error(`GET ${url}: HTTP ${response.status}`);
      const bytes = new Uint8Array(await response.arrayBuffer());
      const head = new TextDecoder('latin1').decode(bytes.slice(0, 4000));
      return new TextDecoder(/charset=utf-8/i.test(head) ? 'utf-8' : 'windows-1256').decode(bytes);
    } catch (error) {
      if (attempt >= 4) throw error;
      await new Promise((done) => setTimeout(done, 2000 * attempt));
    }
  }
}

if (import.meta.main) {
  mkdirSync(HTML, { recursive: true });
  const pinsPath = join(DIR, 'sources.json');
  const previous: MalatyPage[] = existsSync(pinsPath) ? (JSON.parse(readFileSync(pinsPath, 'utf8')) as { pages: MalatyPage[] }).pages : [];
  const today = new Date().toISOString().slice(0, 10);
  const pages: MalatyPage[] = [];
  for (const [book, path] of Object.entries(MALATY_BOOKS)) {
    const index = new URL(path, BASE).href;
    const chapters = new Map<number, string>();
    for (const match of (await get(index)).matchAll(/href="([^"#]+\.html)"/g)) {
      const href = match[1]!;
      const number = CHAPTER_PAGE.exec(href)?.[1];
      if (number === undefined || href.includes('00-index')) continue;
      const url = new URL(href, index).href;
      if (!url.startsWith(BASE)) continue;
      if (!chapters.has(Number(number))) chapters.set(Number(number), url);
    }
    const queue = [...chapters].sort(([a], [b]) => a - b);
    const work = async () => {
      for (let next = queue.shift(); next !== undefined; next = queue.shift()) {
        const [chapter, url] = next;
        const file = `${book}/${String(chapter).padStart(3, '0')}.html`;
        const target = join(HTML, file);
        const known = previous.find((page) => page.url === url);
        let text: string;
        if (!update && existsSync(target) && known !== undefined) {
          text = readFileSync(target, 'utf8');
        } else {
          text = await get(url);
          mkdirSync(join(HTML, book), { recursive: true });
          writeFileSync(target, text);
        }
        pages.push({ book, chapter, url, file, sha256: createHash('sha256').update(text).digest('hex'), retrievedAt: known !== undefined && !update ? known.retrievedAt : today });
      }
    };
    await Promise.all([work(), work(), work(), work()]);
    console.log(`${book}: ${chapters.size} chapter page(s)`);
  }
  pages.sort((a, b) => a.file.localeCompare(b.file));
  writeFileSync(pinsPath, `${JSON.stringify({ source: 'st-takla-org', author: 'Fr. Tadros Yacoub Malaty', pages }, null, 2)}\n`);
}
