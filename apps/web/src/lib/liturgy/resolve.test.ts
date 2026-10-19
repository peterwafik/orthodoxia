import { describe, expect, it } from 'vitest';
import type { ParsedFile } from './parse.ts';
import { coverageOf, resolveLiturgy } from './resolve.ts';

const file = (source: string, ...lines: Array<[('en' | 'ar'), string]>): ParsedFile => ({
  source,
  blocks: lines.map(([lang, text]) => ({ role: 'priest' as const, text: { [lang]: text } })),
});

const files = new Map<string, ParsedFile>([
  ['common/a', file('Common A', ['en', 'a-common'])],
  ['common/b', file('Common B', ['en', 'b-common'], ['ar', 'ب'])],
  ['basil/b', file('Basil B', ['en', 'b-basil'])],
]);

describe('resolveLiturgy', () => {
  it('uses the liturgy’s own file when there is one, else the common one', () => {
    const basil = resolveLiturgy('basil', files, ['a', 'b', 'c']);
    expect(basil['a']).toMatchObject({ origin: 'common', source: 'Common A' });
    expect(basil['b']).toMatchObject({ origin: 'basil', source: 'Basil B' });
    expect(basil['b']!.blocks).toHaveLength(1);
    const cyril = resolveLiturgy('cyril', files, ['a', 'b', 'c']);
    expect(cyril['b']).toMatchObject({ origin: 'common' });
  });

  it('leaves out a stop that has no text', () => {
    expect(Object.keys(resolveLiturgy('basil', files, ['a', 'b', 'c']))).toEqual(['a', 'b']);
  });
});

describe('coverageOf', () => {
  it('counts stops, blocks and blocks per language', () => {
    const coverage = coverageOf(resolveLiturgy('cyril', files, ['a', 'b']));
    expect(coverage).toEqual({ stops: 2, blocks: 3, perLang: { en: 2, ar: 1, cop: 0, tr: 0 } });
  });

  it('is all zero for no scripts', () => {
    expect(coverageOf({})).toEqual({ stops: 0, blocks: 0, perLang: { en: 0, ar: 0, cop: 0, tr: 0 } });
  });
});
