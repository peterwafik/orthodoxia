import { createRequire } from 'node:module';
import { describe, expect, it } from 'vitest';

const require = createRequire(import.meta.url);
const { buildVocabulary, fixArabic } = require('./arabic-fix.cjs') as {
  buildVocabulary: (texts: string[]) => Map<string, number>;
  fixArabic: (text: string, vocabulary: Map<string, number> | null) => string;
};

// A small made-up vocabulary: ordinary words, each with a count.
const vocabulary = buildVocabulary([
  'سلام سلام سلام سلام قال قال قال قال العالم العالم العالم ملاك ملاك ملاك ملاك صلاة صلاة صلاة والسلام والسلام',
  'مالك',
]);

describe('the Arabic ligature repair', () => {
  it('puts a swapped lam+alef right when the right form is the known word', () => {
    expect(fixArabic('سالم', vocabulary)).toBe('سلام');
    expect(fixArabic('صالة', vocabulary)).toBe('صلاة');
    expect(fixArabic('والسالم', vocabulary)).toBe('والسلام');
  });

  it('leaves a correct word with alef then lam alone', () => {
    expect(fixArabic('قال', vocabulary)).toBe('قال');
    expect(fixArabic('العالم', vocabulary)).toBe('العالم');
  });

  it('chooses the more frequent of two real words', () => {
    expect(fixArabic('مالك', vocabulary)).toBe('ملاك');
  });

  it('keeps punctuation and vowel signs where they were', () => {
    expect(fixArabic('سالم.', vocabulary)).toBe('سلام.');
    expect(fixArabic('(سالمٌ)', vocabulary)).toBe('(سلامٌ)');
  });

  it('leaves a word it knows nothing about, and works with no vocabulary at all', () => {
    expect(fixArabic('كذالك', vocabulary)).toBe('كذالك');
    expect(fixArabic('سالم', null)).toBe('سالم');
  });

  it('puts back a hamza that the PDF lost, and prefers the words of the page itself', () => {
    const small = buildVocabulary(['لأن لأن لأن']);
    expect(fixArabic('الن', small)).toBe('لأن');
    const page = buildVocabulary(['الارثوذكسية']);
    expect(fixArabic('االرثوذكسية', [page, small])).toBe('الارثوذكسية');
    // the page's own word wins over a more frequent general one
    const general = buildVocabulary(['مالك مالك مالك']);
    const own = buildVocabulary(['ملاك']);
    expect(fixArabic('مالك', [own, general])).toBe('ملاك');
  });

  it('turns the reversed name of God into its right spelling, with or without a vocabulary', () => {
    expect(fixArabic('هللا', null)).toBe('الله');
    expect(fixArabic('فلنسأل هللا الضابط', vocabulary)).toBe('فلنسأل الله الضابط');
  });
});
