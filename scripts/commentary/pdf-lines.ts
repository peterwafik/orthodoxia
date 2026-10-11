/**
 * Extracts logical-order Arabic lines from a PDF with pdfjs. pdfjs returns positioned text items;
 * Word-produced Arabic PDFs list them in an order unrelated to reading order, so each line is
 * rebuilt from positions: items right to left, brackets mirrored, and digit runs kept left to
 * right inside each number.
 */
import { execFileSync } from 'node:child_process';
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

/**
 * Extraction with Poppler's `pdftotext`, for PDFs whose fonts map ligatures to presentation-form
 * code points in reading order (the older Gospel commentaries): Poppler keeps them in order, and
 * NFKC expands them correctly, where pdfjs's bidi reordering scrambles them. Poppler writes some
 * things visually, which is undone here: verse markers come out as "ع :41-40" (→ "ع40-41:"), and
 * punctuation lands before the space instead of after it. Requires `pdftotext` on the PATH or in
 * the POPPLER_PDFTOTEXT environment variable.
 */
const NUMBER_RUN = /[0-9\s()[\]{}«»:.,،؛\-–/"']*[0-9][0-9\s()[\]{}«»:.,،؛\-–/"']*/g;

/**
 * Poppler writes the runs of digits and punctuation between Arabic words in visual order
 * ("(مر3: 17)." comes out as ")مر .(17 :3", "ع12-13: "" as "ع" :13-12"). Each such run is put
 * back in logical order: its tokens (numbers, single characters) reversed, brackets mirrored. The
 * lone bracket left before the letters is restored by polishArabicText.
 */
export function logicalNumberRuns(line: string): string {
  return line.replace(NUMBER_RUN, (run) =>
    (run.match(/[0-9]+|[^0-9]/g) ?? [])
      .reverse()
      .map((token) => MIRROR[token] ?? token)
      .join(''),
  );
}

export function extractWithPoppler(path: string): PdfPage[] {
  const executable = process.env['POPPLER_PDFTOTEXT'] ?? 'pdftotext';
  const output = execFileSync(executable, ['-enc', 'UTF-8', path, '-'], { maxBuffer: 1 << 28 }).toString('utf8');
  return output
    .split('\f')
    .map((text, index) => ({
      page: index + 1,
      lines: text
        .split('\n')
        .map((line) =>
          logicalNumberRuns(
            cleanExtractedArabic(
              line
                .replace(/[‎‏‪-‮]/g, '')
                // Some fonts map digits to the private-use area.
                .replace(/[-]/g, (digit) => String(digit.charCodeAt(0) - 0xf030)),
            ),
          )
            // A numbered heading or footnote, ") (3تجسد المسيح" → "(3) تجسد المسيح".
            .replace(/^(\d+)\) \(/, '($1) ')
            // A marker whose digits are missing altogether: "ع :-" / "ع -:" → "ع؟:".
            .replace(/^ع\s*:\s*-?\s*(?=[ء-ي])/, 'ع؟: ')
            .replace(/^ع\s*-\s*:\s*/, 'ع؟: '),
        )
        .filter((line) => line !== '' && !/^[\d()\s]+$/.test(line)),
    }))
    .filter((page) => page.lines.length > 0 || page.page === 1);
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
