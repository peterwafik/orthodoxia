import { describe, expect, it } from 'vitest';
import { lookupBook } from './book-lookup.ts';
import { BOOKS } from './books.ts';
import { ARABIC_BOOK_NAMES, ARABIC_GENRE_NAMES, normalizeArabic } from './names-ar.ts';
import { GENRES } from './genres.ts';
import { parseReference } from './reference-parse.ts';
import { KJV_VERSIFICATION } from './versification.ts';

describe('Arabic names', () => {
  it('cover every book and genre', () => {
    expect(BOOKS.filter((book) => ARABIC_BOOK_NAMES[book.id] === undefined)).toEqual([]);
    expect(GENRES.filter((genre) => ARABIC_GENRE_NAMES[genre.id] === undefined)).toEqual([]);
  });

  it('normalize diacritics, hamza forms, the article and a leading "book of"', () => {
    expect(normalizeArabic('سِفْرُ التَّكْوِينِ')).toBe(normalizeArabic('تكوين'));
    expect(normalizeArabic('إشعياء')).toBe(normalizeArabic('اشعياء'));
    expect(normalizeArabic('إنجيل يوحنا')).toBe('يوحنا');
    expect(normalizeArabic('٣١٦')).toBe('316');
  });
});

describe('Arabic references', () => {
  it.each([
    ['يوحنا 3: 16', 'John', 3, 16],
    ['مزمور ٢٣', 'Ps', 23, undefined],
    ['سفر التكوين 1: 1', 'Gen', 1, 1],
    ['كورنثوس الأولى 13', '1Cor', 13, undefined],
  ] as const)('parses %s', (input, book, chapter, verse) => {
    const result = parseReference(input, KJV_VERSIFICATION);
    expect(result).toEqual({ ok: true, reference: { book, chapter, verse } });
  });

  it('reports an ambiguous prefix rather than guessing', () => {
    const result = parseReference('يو 3 16', KJV_VERSIFICATION);
    expect(result.ok).toBe(false);
  });

  it('still accepts English names', () => {
    expect(lookupBook('Isaiah')).toMatchObject({ kind: 'found', book: { id: 'Isa' } });
  });
});
