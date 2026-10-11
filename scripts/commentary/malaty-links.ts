/**
 * Collects links to Fr. Tadros Yacoub Malaty's commentary on St-Takla.org for the books the St. Mark
 * commentary does not cover (and Job and Esther, whose St. Mark PDFs have no text layer). Linked
 * only: the text is copyrighted and its permission was given to St-Takla.org
 * (content/sources/st-takla-org.yaml). Output: content/commentary/malaty/links.json (committed).
 *
 *   node scripts/commentary/malaty-links.ts
 */
import { mkdirSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';

const ROOT = resolve(import.meta.dirname, '../..');
const BASE = 'https://st-takla.org/pub_Bible-Interpretations/';
const OT = 'Holy-Bible-Tafsir-01-Old-Testament/Father-Tadros-Yacoub-Malaty/';

/** Book → index page (relative to BASE), as listed on St-Takla's Malaty index (2026-10-11). */
const BOOKS: Readonly<Record<string, string>> = {
  EST: `${OT}19-Sefr-Astir/Tafseer-Sefr-Esteer__00-index.html`,
  PRO: `${OT}22-Sefr-El-Amthal/Tafseer-Sefr-El-Amthal__00-index.html`,
  ECC: `${OT}23-Sefr-El-Gamaa/Tafseer-Sefr-El-Gam3a__00-index.html`,
  SNG: `${OT}24-Seft-Nashid-El-Anshad/Tafseer-Sefr-Nasheed-El-Anasheed__00-index.html`,
  WIS: `${OT}25-Sefr-El-Hekma/Tafseer-Sefr-El-Hekmet-Solaiman__00-index.html`,
  SIR: `${OT}26-Sefr-Yashoue-Ebn-Sirakh/Tafseer-Sefr-Yasho3-Ibn-Sira5__00-index.html`,
  ISA: `${OT}27-Sefr-Asheia/Tafseer-Sefr-Ash3eia2__00-index.html`,
  EZK: `${OT}31-Sefr-Hazkyal/Tafseer-Sefr-Hazkial__00-index.html`,
  DAN: `${OT}32-Sefr-Danial/Tafseer-Sefr-Daniel__00-index.html`,
  HOS: `${OT}33-Sefr-Hoshae/Tafseer-Sefr-Hosha3__00-index.html`,
  JOL: `${OT}34-Sefr-Youil/Tafseer-Sefr-Yo2il__00-index.html`,
  AMO: `${OT}35-Sefr-Amos/Tafseer-Sefr-3amoos__00-index.html`,
  OBA: `${OT}36-Sefr-Obedia/Tafseer-Sefr-Obedya__00-index.html`,
  JON: `${OT}37-Sefr-Younan/Tafseer-Sefr-Yonan__00-index.html`,
  MIC: `${OT}38-Sefr-Mikha/Tafseer-Sefr-Mikha__00-index.html`,
  NAM: `${OT}39-Sefr-Nahoum/Tafseer-Sefr-Nahoom__00-index.html`,
  HAB: `${OT}40-Sefr-Habkouk/Tafseer-Sefr-Habakouk__00-index.html`,
  ZEP: `${OT}41-Sefr-Safania/Tafseer-Sefr-Safanya__00-index.html`,
  HAG: `${OT}42-Sefr-Hegy/Tafseer-Sefr-Heggi__00-index.html`,
  ZEC: `${OT}43-Sefr-Zakarya/Tafseer-Sefr-Zakaria__00-index.html`,
  MAL: `${OT}44-Sefr-Malakhi/Tafseer-Sefr-Malakhy__00-index.html`,
};

const CHAPTER_PAGE = /Chapter[-_]?0*(\d{1,3})\.html$/i;

async function get(url: string): Promise<string> {
  const response = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Orthodoxia commentary links)' } });
  if (!response.ok) throw new Error(`GET ${url}: HTTP ${response.status}`);
  return new TextDecoder('windows-1256').decode(await response.arrayBuffer());
}

const result: Record<string, { index: string; chapters: Record<number, string> }> = {};
for (const [book, path] of Object.entries(BOOKS)) {
  const index = new URL(path, BASE).href;
  const html = await get(index);
  const chapters: Record<number, string> = {};
  for (const match of html.matchAll(/href="([^"#]+\.html)"/g)) {
    const href = match[1]!;
    const number = CHAPTER_PAGE.exec(href)?.[1];
    if (number === undefined || href.includes('00-index')) continue;
    const url = new URL(href, index).href;
    chapters[Number(number)] ??= url;
  }
  result[book] = { index, chapters };
  console.log(`${book}: ${Object.keys(chapters).length} chapter link(s)`);
}

const out = join(ROOT, 'content/commentary/malaty');
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'links.json'), `${JSON.stringify({ retrievedAt: new Date().toISOString().slice(0, 10), books: result }, null, 2)}\n`);
