import { describe, expect, it } from 'vitest';
import type { Block } from '../liturgy/parse.ts';
import { creditFor, hasRubric, scriptItems, splitSource } from './script-view.ts';

const blocks: Block[] = [
  { role: 'rubric', text: { en: 'The priest turns.', ar: 'يلتفت.' } },
  { role: 'priest', text: { en: 'Peace.', ar: 'سلام.', cop: 'Ϩⲓⲣⲏⲛⲏ' }, note: { en: 'A greeting.', ar: 'تحية.' } },
  { role: 'people', text: { ar: 'آمين.' } },
];

describe('scriptItems (one language at a time)', () => {
  it('shows only the chosen language, with its own note', () => {
    expect(scriptItems(blocks, 'en')).toEqual([
      { role: 'rubric', text: 'The priest turns.' },
      { role: 'priest', text: 'Peace.', note: 'A greeting.' },
    ]);
    expect(scriptItems(blocks, 'ar').map((item) => item.text)).toEqual(['يلتفت.', 'سلام.', 'آمين.']);
    expect(scriptItems(blocks, 'ar')[1]!.note).toBe('تحية.');
  });

  it('never shows the other language: a block that lacks the chosen one is left out', () => {
    expect(scriptItems(blocks, 'en').some((item) => /[؀-ۿ]/.test(item.text))).toBe(false);
    expect(scriptItems([{ role: 'people', text: { ar: 'آمين.' } }], 'en')).toEqual([]);
  });

  it('gives no note when the note is only in the other language', () => {
    const one: Block[] = [{ role: 'priest', text: { en: 'x', ar: 'س' }, note: { ar: 'ملاحظة' } }];
    expect(scriptItems(one, 'en')[0]).toEqual({ role: 'priest', text: 'x' });
  });

  it('skips a block with an unknown speaker, no text, or a damaged shape, without throwing', () => {
    const damaged = [null, { role: 'priest' }, { role: 'priest', text: null }, 'nope', { role: 'bishop', text: { en: 'x' } }, { role: 'priest', text: {} }, blocks[1]] as unknown as Block[];
    expect(scriptItems(damaged, 'en').map((item) => item.role)).toEqual(['priest']);
    expect(scriptItems(undefined as unknown as Block[], 'en')).toEqual([]);
  });
});

describe('hasRubric', () => {
  it('is true only when some block is a step', () => {
    expect(hasRubric(blocks)).toBe(true);
    expect(hasRubric(blocks.slice(1))).toBe(false);
    expect(hasRubric(undefined as unknown as Block[])).toBe(false);
  });
});

describe('splitSource', () => {
  it('separates a link from the words', () => {
    expect(splitSource('Example Translation, used with permission. https://example.org/x.')).toEqual({
      label: 'Example Translation, used with permission.',
      url: 'https://example.org/x',
    });
  });

  it('has no link when there is none', () => {
    expect(splitSource('Written for this site')).toEqual({ label: 'Written for this site' });
  });
});

describe('creditFor (the credit line is in the page language too)', () => {
  it('uses the Arabic source on the Arabic page, and the source on the English page', () => {
    const entry = { source: 'Written for this site.', sourceAr: 'كُتب لهذا الموقع.' };
    expect(creditFor(entry, 'ar')).toEqual({ label: 'كُتب لهذا الموقع.' });
    expect(creditFor(entry, 'en')).toEqual({ label: 'Written for this site.' });
  });

  it('keeps a link from the source', () => {
    expect(creditFor({ source: 'Translation. https://example.org/t' }, 'en')).toEqual({ label: 'Translation.', url: 'https://example.org/t' });
  });

  it('never shows the other language: it sends the reader to the Sources page instead', () => {
    expect(creditFor({ source: 'Written for this site.' }, 'ar')).toEqual({ label: null });
    expect(creditFor({ source: 'كُتب لهذا الموقع.' }, 'en')).toEqual({ label: null });
  });
});
