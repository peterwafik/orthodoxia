/**
 * Step 1 of the Agpeya import: reads the Coptic–English–Arabic Agpeya PDF (not in the repository) and writes, for every
 * page and every column, its lines with their positions, to data/agpeya/raw/lines.json (git-ignored).
 *
 *   node scripts/agpeya/extract.ts "<path to the pdf>"
 *
 * The three languages are told apart by font: the Coptic is set in "CS Avva Shenouda" (decoded to Unicode here), the
 * Greek in "Symbol", Arabic by its letters. Pieces of a line that the PDF split mid-word are joined by their
 * positions, not by the spaces in the text.
 */
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { getDocument } from 'pdfjs-dist/legacy/build/pdf.mjs';
import { cleanExtractedArabic } from '../../packages/commentary/src/arabic.ts';
import { decodeCoptic, decodeSymbol } from './decode.ts';

const OUT = resolve(import.meta.dirname, '../../data/agpeya/raw/lines.json');
const ARABIC = /[؀-ۿﭐ-﷿ﹰ-﻿]/;
const MARK = /^[ً-ٰٟ\s]+$/;

export type Column = 'cop' | 'en' | 'ar';
interface Piece {
  x: number;
  y: number;
  w: number;
  s: string;
  font: string;
  size: number;
}
export interface Line {
  page: number;
  col: Column;
  y: number;
  x0: number;
  x1: number;
  bold: boolean;
  size: number;
  text: string;
}

const path = process.argv[2];
if (path === undefined) throw new Error('Usage: node scripts/agpeya/extract.ts "<path to the Agpeya pdf>"');
const pdf = await getDocument({ data: new Uint8Array(readFileSync(path)), useSystemFonts: true }).promise;

const lines: Line[] = [];
for (let n = 1; n <= pdf.numPages; n++) {
  const page = await pdf.getPage(n);
  const content = await page.getTextContent();
  await page.getOperatorList(); // loads the real font names
  const pieces: Piece[] = [];
  for (const item of content.items) {
    if (!('str' in item) || item.str.trim() === '' && item.str.length === 0) continue;
    let font = '?';
    try {
      font = (page.commonObjs.get(item.fontName) as { name: string }).name.replace(/^[A-Z]{6}\+/, '');
    } catch {
      // font name unknown
    }
    pieces.push({ x: item.transform[4] as number, y: item.transform[5] as number, w: item.width, s: item.str, font, size: Math.abs(item.transform[3] as number) });
  }

  // Which column each piece belongs to. Letters decide; a mark or punctuation goes with the column it stands in.
  const arabicLeft = Math.min(...pieces.filter((p) => ARABIC.test(p.s)).map((p) => p.x), 9999);
  const englishLeft = Math.min(...pieces.filter((p) => !ARABIC.test(p.s) && !/Avva|Symbol/.test(p.font) && /[A-Za-z]{3}/.test(p.s) && p.x > 200).map((p) => p.x), 262);
  const columnOf = (p: Piece): Column => {
    if (/Avva/.test(p.font)) return 'cop';
    // The Greek (Symbol font) stands in the Coptic column when it is to the left of the English one.
    if (/^Symbol$/.test(p.font)) return p.x < englishLeft - 4 ? 'cop' : 'en';
    if (ARABIC.test(p.s)) return 'ar';
    if (MARK.test(p.s) && p.x >= arabicLeft - 6 && p.s.trim() !== '' && /[ً-ٰٟ]/.test(p.s)) return 'ar';
    if (/Arabic|AL-Qairwan/.test(p.font)) return 'ar';
    if (p.x >= arabicLeft - 6 && arabicLeft < 9999 && !/[A-Za-z]/.test(p.s)) return 'ar';
    return 'en';
  };

  for (const col of ['cop', 'en', 'ar'] as const) {
    const mine = pieces.filter((p) => columnOf(p) === col && p.s.length > 0);
    // Pieces on one line differ a little in height (accents, small caps); cluster by height.
    const rows: { y: number; parts: Piece[] }[] = [];
    for (const piece of [...mine].sort((a, b) => b.y - a.y)) {
      const row = rows.find((r) => Math.abs(r.y - piece.y) < 4.5);
      if (row === undefined) rows.push({ y: piece.y, parts: [piece] });
      else row.parts.push(piece);
    }
    for (const row of rows) {
      const parts = col === 'ar' ? row.parts.sort((a, b) => b.x - a.x) : row.parts.sort((a, b) => a.x - b.x);
      let text = '';
      for (let i = 0; i < parts.length; i++) {
        const part = parts[i] as Piece;
        let s = part.s;
        if (part.font === 'Symbol') s = decodeSymbol(s);
        if (i > 0) {
          const before = parts[i - 1] as Piece;
          const gap = col === 'ar' ? before.x - (part.x + part.w) : part.x - (before.x + before.w);
          const touching = gap < 1.6;
          if (!touching && !/\s$/.test(text) && !/^\s/.test(s)) text += ' ';
        }
        text += s;
      }
      text = text.replace(/\s+/g, ' ').trim();
      if (text === '' || /coptic-treasures\.com/.test(text)) continue;
      if (col === 'cop') text = decodeCoptic(text);
      if (col === 'ar') text = cleanExtractedArabic(text).replace(/[ً-ْٰ]/g, '').replace(/s+/g, ' ').trim();
      const xs0 = row.parts.map((p) => p.x);
      const xs1 = row.parts.map((p) => p.x + p.w);
      lines.push({
        page: n,
        col,
        y: Math.round(row.y),
        x0: Math.round(Math.min(...xs0)),
        x1: Math.round(Math.max(...xs1)),
        bold: row.parts.every((p) => /Bold/.test(p.font)),
        size: Math.round(Math.max(...row.parts.map((p) => p.size))),
        text,
      });
    }
  }
}

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, `${JSON.stringify(lines)}\n`);
console.log(`${lines.length} lines from ${pdf.numPages} pages → ${OUT}`);
