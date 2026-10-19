import { describe, expect, it } from 'vitest';
import { buildLiturgies } from './build-core.ts';

const GOOD = (source: string, text: string) => `source: ${source}\n\n@priest\nen| ${text}\n`;
const SLUGS = ['one', 'two'];

describe('buildLiturgies', () => {
  it('builds one JSON per liturgy with the common stops copied in, plus coverage and sources', () => {
    const result = buildLiturgies(
      { 'common/one.txt': GOOD('Src A', 'common'), 'basil/two.txt': GOOD('Src B', 'basil two') },
      SLUGS,
    );
    expect(result.errors).toEqual([]);
    expect(Object.keys(result.liturgies['basil'].stops)).toEqual(['one', 'two']);
    expect(Object.keys(result.liturgies['cyril'].stops)).toEqual(['one']);
    expect(result.liturgies['basil'].stops['two']!.source).toBe('Src B');
    expect(result.coverage['basil'].stops).toBe(2);
    expect(result.coverage['gregory'].stops).toBe(1);
    expect(result.sources).toEqual(['Src A', 'Src B']);
  });

  it('carries the Arabic source into the JSON', () => {
    const result = buildLiturgies({ 'common/one.txt': 'source: S\nsource-ar: مصدر\n\n@priest\nen| x\n' }, SLUGS);
    expect(result.errors).toEqual([]);
    expect(result.liturgies['basil'].stops['one']).toMatchObject({ source: 'S', sourceAr: 'مصدر' });
  });

  it('names the file when a slug is not a real stop', () => {
    const result = buildLiturgies({ 'common/lift-up-yor-hearts.txt': GOOD('S', 'x') }, SLUGS);
    expect(result.errors).toHaveLength(1);
    expect(result.errors[0]).toContain('content/liturgy/common/lift-up-yor-hearts.txt');
    expect(result.errors[0]).toMatch(/not a stop/);
  });

  it('names the file when it is in an unknown folder or is not a .txt file', () => {
    const result = buildLiturgies({ 'coptic/one.txt': GOOD('S', 'x'), 'common/one.md': GOOD('S', 'x') }, SLUGS);
    expect(result.errors.some((error) => error.includes('content/liturgy/coptic/one.txt') && /folder/.test(error))).toBe(true);
    expect(result.errors.some((error) => error.includes('content/liturgy/common/one.md') && /\.txt/.test(error))).toBe(true);
  });

  it('reports a file’s parse problems with its path and line', () => {
    const result = buildLiturgies({ 'common/one.txt': '@priest\nen| No source.\n' }, SLUGS);
    expect(result.errors[0]).toMatch(/^content\/liturgy\/common\/one\.txt:1:/);
  });

  it('builds empty liturgies from no files at all', () => {
    const result = buildLiturgies({}, SLUGS);
    expect(result.errors).toEqual([]);
    expect(result.liturgies['basil']).toEqual({ liturgy: 'basil', stops: {} });
    expect(result.coverage['cyril']).toEqual({ stops: 0, blocks: 0, perLang: { en: 0, ar: 0, cop: 0, tr: 0 } });
    expect(result.sources).toEqual([]);
  });
});
