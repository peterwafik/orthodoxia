import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';

/**
 * The owner has asked that the disclaimer and the "Data and code credits" block never appear on any page.
 * (The attributions the licences ask for live on the Sources page.) This fails if one of its sentences comes back
 * into the site's source.
 */
const SRC = join(import.meta.dirname, '..');
const FORBIDDEN = [
  'independent study project',
  'Every text here is in the public domain or openly licensed',
  'awaiting confirmation by our reviewers',
  'public-domain ancestor of the NKJV',
  'Data and code credits',
  'Site code: MIT License',
  'Original articles: CC BY-SA',
  'SIL Open Font License',
  'مشروع دراسي مستقل',
  'إسناد البيانات والبرمجيات',
];

function sourceFiles(dir: string): string[] {
  return readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) return sourceFiles(path);
    return /\.(astro|ts)$/.test(name) && !name.endsWith('.test.ts') ? [path] : [];
  });
}

describe('pages do not carry the disclaimer or the credits block', () => {
  const files = sourceFiles(SRC);

  it('finds the source files', () => {
    expect(files.length).toBeGreaterThan(20);
  });

  for (const phrase of FORBIDDEN) {
    it(`never says "${phrase}"`, () => {
      const offenders = files.filter((file) => readFileSync(file, 'utf8').includes(phrase));
      expect(offenders).toEqual([]);
    });
  }
});
