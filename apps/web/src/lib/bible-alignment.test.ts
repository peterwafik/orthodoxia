import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';

/**
 * The reader shows the King James Version in English and Van Dyck in Arabic, with no edition switch, so a reader who
 * changes language must land on the same book and chapter. This fails if the English text lacks a chapter that the
 * Arabic has; such a chapter would then have to be taken from the Septuagint (LXX).
 */
const DATA = join(import.meta.dirname, '../../../../data/bible/build/manifest.json');
const built = existsSync(DATA);

type Manifest = { editions: Record<string, { books: { code: string; chapters: number[] }[] }> };

describe.skipIf(!built)('English and Arabic Bible share one structure', () => {
  const manifest = built ? (JSON.parse(readFileSync(DATA, 'utf8')) as Manifest) : undefined;
  const chapters = (edition: string) => new Map(manifest!.editions[edition]!.books.map((book) => [book.code, book.chapters] as const));

  it('has in the King James Version every book of the Arabic Bible', () => {
    const kjv = chapters('kjv');
    for (const code of chapters('svd').keys()) expect(kjv.has(code), `${code} is missing from KJV`).toBe(true);
  });

  it('has in the King James Version every chapter of every Arabic book', () => {
    const kjv = chapters('kjv');
    for (const [code, list] of chapters('svd')) {
      for (const chapter of list) expect(kjv.get(code)!, `${code} ${chapter} is missing from KJV`).toContain(chapter);
    }
  });
});
