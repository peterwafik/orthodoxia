/**
 * Extracts logical-order Arabic lines from a PDF with pdfjs. pdfjs returns positioned text items;
 * Word-produced Arabic PDFs list them in an order unrelated to reading order, so each line is
 * rebuilt from positions: items right to left, brackets mirrored, and digit runs kept left to
 * right inside each number.
 */
import { readFileSync } from 'node:fs';
import { getDocument } from 'pdfjs-dist/legacy/build/pdf.mjs';
import { cleanExtractedArabic } from '../../packages/commentary/src/arabic.ts';
import type { PdfPage } from '../../packages/commentary/src/stmark.ts';

interface Item {
  readonly x: number;
  readonly width: number;
  readonly text: string;
  readonly dir: string;
}

const MIRROR: Readonly<Record<string, string>> = { '(': ')', ')': '(', '[': ']', ']': '[', '{': '}', '}': '{', '«': '»', '»': '«' };
const isNumeric = (text: string) => /^[0-9٠-٩۰-۹.,:\-–]+$/.test(text.trim()) && /[0-9٠-٩۰-۹]/.test(text);
const isBlank = (text: string) => text.trim() === '';

function lineText(items: Item[]): string {
  const ordered = [...items].sort((a, b) => b.x + b.width - (a.x + a.width));
  const out: string[] = [];
  let previousLeft: number | null = null;
  const separate = (item: Item) => {
    const gap = previousLeft === null ? 0 : previousLeft - (item.x + item.width);
    const last = out.at(-1);
    if (gap > 1.8 && last !== undefined && !isBlank(last) && !isBlank(item.text)) out.push(' ');
  };
  let index = 0;
  while (index < ordered.length) {
    const item = ordered[index]!;
    if (isNumeric(item.text) && item.dir === 'ltr') {
      separate(item);
      const run: Item[] = [];
      while (index < ordered.length && isNumeric(ordered[index]!.text) && ordered[index]!.dir === 'ltr') run.push(ordered[index++]!);
      const groups: ({ separator: string } | { parts: Item[] })[] = [];
      for (const part of run) {
        if (/^[-–:،,]$/.test(part.text.trim())) groups.push({ separator: part.text.trim() });
        else {
          const last = groups.at(-1);
          if (last !== undefined && 'parts' in last) last.parts.push(part);
          else groups.push({ parts: [part] });
        }
      }
      out.push(
        groups
          .map((group) => ('separator' in group ? group.separator : group.parts.sort((a, b) => a.x - b.x).map((part) => part.text).join('')))
          .join(''),
      );
      previousLeft = Math.min(...run.map((part) => part.x));
      continue;
    }
    index++;
    separate(item);
    out.push(item.text.length === 1 ? (MIRROR[item.text] ?? item.text) : item.text);
    if (item.width > 0) previousLeft = item.x;
  }
  return cleanExtractedArabic(out.join(''));
}

export async function extractPdfLines(path: string): Promise<PdfPage[]> {
  const document = await getDocument({ data: new Uint8Array(readFileSync(path)), useSystemFonts: true, verbosity: 0 }).promise;
  const pages: PdfPage[] = [];
  for (let number = 1; number <= document.numPages; number++) {
    const page = await document.getPage(number);
    const { items } = await page.getTextContent();
    const rows: { y: number; items: Item[] }[] = [];
    for (const raw of items) {
      if (!('str' in raw) || raw.str === '') continue;
      const x = raw.transform[4] as number;
      const y = raw.transform[5] as number;
      let row = rows.find((candidate) => Math.abs(candidate.y - y) < 3);
      if (row === undefined) rows.push((row = { y, items: [] }));
      row.items.push({ x, width: raw.width, text: raw.str, dir: raw.dir });
    }
    rows.sort((a, b) => b.y - a.y);
    pages.push({
      page: number,
      lines: rows.map((row) => lineText(row.items)).filter((line) => line !== '' && !/^[\dγηιΕR\s]+$/.test(line)),
    });
    page.cleanup();
  }
  await document.destroy();
  return pages;
}
