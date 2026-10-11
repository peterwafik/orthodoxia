import { describe, expect, it } from 'vitest';
import { chapterHeadingNumber } from './ordinals.ts';

describe('chapterHeadingNumber', () => {
  it.each([
    ['الأصحاح الأول', 1],
    ['الأَصْحَاحُ الثَّانِى', 2],
    ['الأصحاح العاشر', 10],
    ['الأصحاح الحادى عشر', 11],
    ['الأصحاح الثانى عشر', 12],
    ['الأصحاح العشرون', 20],
    ['الأصحاح الحادى والعشرون', 21],
    ['الأصحاح الخمسون', 50],
    ['الأََ صُ حاحالأَوَّ ل', 1],
    ['المزمور المائة', 100],
    ['المزمور المائة والأول', 101],
    ['المزمور الخمسون بعد المائة', 150],
    ['اصحاح 5', 5],
    ['األَصْحَاحُالرَّابِعُ', 4],
    ['األصحاح األول', 1],
  ])('%s → %i', (heading, number) => {
    expect(chapterHeadingNumber(heading)).toBe(number);
  });

  it.each(['الأصحاح', 'مقدمة', 'المزمور هو ترنيمة'])('%s is not a numbered heading', (text) => {
    expect(chapterHeadingNumber(text)).toBeNull();
  });
});
