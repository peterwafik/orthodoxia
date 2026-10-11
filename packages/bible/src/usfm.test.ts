import { describe, expect, it } from 'vitest';
import { parseUsfm, type Verse } from './usfm.ts';

const plain = (verse: Verse | undefined): string => (verse?.content ?? []).map((inline) => inline.text).join('');

describe('parseUsfm', () => {
  it('reads book code, name, chapters and verses', () => {
    const book = parseUsfm('\\id JHN test\n\\h John\n\\mt1 John\n\\c 1\n\\p\n\\v 1 In the beginning.\n\\v 2 He was.\n\\c 2\n\\p\n\\v 1 On the third day.\n');
    expect(book.code).toBe('JHN');
    expect(book.name).toBe('John');
    expect(book.chapters.map((chapter) => chapter.number)).toEqual([1, 2]);
    expect(plain(book.chapters[0]?.verses[1])).toBe('He was.');
  });

  it('strips Strong’s attributes but keeps the words', () => {
    const book = parseUsfm('\\id JHN\n\\c 3\n\\p\n\\v 16 For \\w God|strong="G2316"\\w* so \\w loved|strong="G25"\\w* the world.\n');
    expect(plain(book.chapters[0]?.verses[0])).toBe('For God so loved the world.');
  });

  it('keeps italic supplied words, divine name and words of Jesus as styles', () => {
    const book = parseUsfm('\\id GEN\n\\c 1\n\\p\n\\v 1 \\wj I \\add am\\add* the \\nd Lord\\nd*\\wj* indeed.\n');
    const content = book.chapters[0]!.verses[0]!.content;
    expect(content).toEqual([
      { text: 'I ', styles: ['wj'] },
      { text: 'am', styles: ['wj', 'add'] },
      { text: ' the ', styles: ['wj'] },
      { text: 'Lord', styles: ['wj', 'nd'] },
      { text: ' indeed.', styles: [] },
    ]);
  });

  it('moves footnotes out of the text and drops cross-reference notes', () => {
    const book = parseUsfm('\\id PSA\n\\c 3\n\\p\n\\v 3 There is no help.\\f + \\fr 3:3 \\ft Selah: a pause.\\f* Pause.\\x - \\xo 3:3 \\xt Ps 4:1\\x*\n');
    const verse = book.chapters[0]!.verses[0]!;
    expect(plain(verse)).toBe('There is no help. Pause.');
    expect(verse.notes).toEqual(['Selah: a pause.']);
  });

  it('keeps an unnumbered psalm title as the superscription', () => {
    const book = parseUsfm('\\id PSA\n\\c 3\n\\cl Psalm 3\n\\d A Psalm of David.\n\\p\n\\v 1 O Lord.\n');
    expect(book.chapters[0]?.superscription).toBe('A Psalm of David.');
    expect(plain(book.chapters[0]?.verses[0])).toBe('O Lord.');
  });

  it('records headings, paragraphs and poetry levels', () => {
    const book = parseUsfm('\\id PSA\n\\c 1\n\\s1 The two ways\n\\q1\n\\v 1 Blessed is the man\n\\q2 who walks not.\n\\q1\n\\v 2 But his delight\n\\p\n\\v 3 Prose.\n\\v 4 Same paragraph.\n');
    const verses = book.chapters[0]!.verses;
    expect(verses[0]).toMatchObject({ headings: ['The two ways'], poetry: 1, paragraph: true });
    expect(plain(verses[0])).toBe('Blessed is the man who walks not.');
    expect(verses[1]).toMatchObject({ poetry: 1, paragraph: true });
    expect(verses[2]).toMatchObject({ poetry: 0, paragraph: true });
    expect(verses[3]).toMatchObject({ paragraph: false });
  });

  it('drops published alternate verse numbers', () => {
    const book = parseUsfm('\\id ESG\n\\c 1\n\\p\n\\v 1 \\vp 1a\\vp* In the second year.\n');
    expect(plain(book.chapters[0]?.verses[0])).toBe('In the second year.');
  });

  it('handles Arabic text and CRLF line endings', () => {
    const book = parseUsfm('\\id JHN\r\n\\h إِنْجِيلُ يُوحَنَّا\r\n\\c 1 \r\n\\p\r\n\\v 1 فِي ٱلْبَدْءِ كَانَ ٱلْكَلِمَةُ  \r\n');
    expect(book.name).toBe('إِنْجِيلُ يُوحَنَّا');
    expect(plain(book.chapters[0]?.verses[0])).toBe('فِي ٱلْبَدْءِ كَانَ ٱلْكَلِمَةُ');
  });

  it('rejects text without an \\id line', () => {
    expect(() => parseUsfm('\\c 1\n\\v 1 x')).toThrow(/missing/);
  });
});
