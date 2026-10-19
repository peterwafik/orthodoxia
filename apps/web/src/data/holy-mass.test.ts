import { bookByCode } from '@orthodoxia/bible';
import { describe, expect, it } from 'vitest';
import { CHAPTERS, SCENES, STOPS, stopHash } from './holy-mass.ts';
import { SAYS } from './holy-mass-says.ts';
import { MEANING } from './holy-mass-meaning.ts';

describe('the Holy Mass journey', () => {
  it('has 52 stops in the five chapters of the approved design', () => {
    expect(STOPS).toHaveLength(52);
    const range = (id: number) => {
      const numbers = STOPS.filter((stop) => stop.chapter === id).map((stop) => stop.n);
      return [Math.min(...numbers), Math.max(...numbers)];
    };
    expect(CHAPTERS.map((chapter) => range(chapter.id))).toEqual([
      [1, 6],
      [7, 20],
      [21, 28],
      [29, 46],
      [47, 52],
    ]);
    STOPS.forEach((stop, index) => expect(stop.n).toBe(index + 1));
  });

  it('puts "Lift up your hearts" at stop 29, as in the approved design', () => {
    expect(STOPS[28]!.slug).toBe('lift-up-your-hearts');
  });

  it('has unique, URL-safe addresses', () => {
    const hashes = STOPS.map(stopHash);
    expect(new Set(hashes).size).toBe(52);
    for (const hash of hashes) expect(hash).toMatch(/^\d+-[a-z0-9-]+$/);
  });

  it('has every text in both languages', () => {
    for (const stop of STOPS) {
      for (const field of [stop.title, stop.what, stop.meaning, stop.meditate]) {
        expect(field.en.trim(), `stop ${stop.n}`).not.toBe('');
        expect(field.ar, `stop ${stop.n}`).toMatch(/[؀-ۿ]/);
      }
    }
  });

  it('uses only real Bible books', () => {
    for (const stop of STOPS) {
      for (const reference of stop.scripture) expect(bookByCode(reference.book), `${stop.n} ${reference.book}`).toBeDefined();
    }
  });

  it('describes the scene of every chapter in both languages', () => {
    for (const chapter of CHAPTERS) {
      const scene = SCENES[chapter.id];
      expect(scene.title.en.trim()).not.toBe('');
      expect(scene.note.en.trim()).not.toBe('');
      expect(scene.title.ar).toMatch(/[؀-ۿ]/);
      expect(scene.note.ar).toMatch(/[؀-ۿ]/);
    }
  });

  it('marks parts that differ among the three liturgies, never the whole Liturgy of the Word', () => {
    const varying = STOPS.filter((stop) => stop.varies === true);
    expect(varying.length).toBeGreaterThan(0);
    expect(varying.every((stop) => stop.chapter === 4)).toBe(true);
  });

  it('says who does what at every stop, in both languages, for real stops only', () => {
    const slugs = new Set(STOPS.map((stop) => stop.slug));
    for (const slug of Object.keys(SAYS)) expect(slugs.has(slug), slug).toBe(true);
    for (const stop of STOPS) {
      const lines = Object.values(stop.says);
      expect(lines.length, `stop ${stop.n} has no speaker`).toBeGreaterThan(0);
      for (const line of lines) {
        expect(line.en.trim(), `stop ${stop.n}`).not.toBe('');
        expect(line.ar, `stop ${stop.n}`).toMatch(/[؀-ۿ]/);
      }
    }
  });
});

describe('the "Meaning behind" text', () => {
  it('gives every stop a few short paragraphs in each language, written for that language alone', () => {
    for (const stop of STOPS) {
      for (const [language, text, minimum] of [['English', stop.meaning.en, 450], ['Arabic', stop.meaning.ar, 330]] as const) {
        const paragraphs = text.split('\n\n');
        expect(text.length, `stop ${stop.n} ${language}`).toBeGreaterThan(minimum);
        expect(paragraphs.length, `stop ${stop.n} ${language} paragraphs`).toBeGreaterThanOrEqual(2);
        expect(paragraphs.length, `stop ${stop.n} ${language} paragraphs`).toBeLessThanOrEqual(4);
        for (const paragraph of paragraphs) {
          expect(paragraph.trim(), `stop ${stop.n} ${language} has an empty paragraph`).not.toBe('');
          expect(paragraph.length, `stop ${stop.n} ${language} has a paragraph that is too long`).toBeLessThan(760);
        }
      }
      expect(stop.meaning.en, `stop ${stop.n} English has Arabic in it`).not.toMatch(/[؀-ۿ]/);
      expect(stop.meaning.ar, `stop ${stop.n} Arabic has English letters in it`).not.toMatch(/[A-Za-z]/);
    }
  });

  it('reads as one voice: it never says who is being quoted or where a point comes from', () => {
    for (const stop of STOPS) {
      expect(stop.meaning.en, `stop ${stop.n}`).not.toMatch(/(the book|Mina|Michael|according to|the author|points out|points to|notes that|explains that)/i);
      expect(stop.meaning.ar, `stop ${stop.n}`).not.toMatch(/(ميخائيل|مينا|المؤلف|(يذكر|يشير|يقول|يوضح|يلاحظ|يضيف|يؤكد|يشرح) (الكتاب|الكاتب))/);
    }
  });

  it('has an entry for every stop and none for a stop that does not exist', () => {
    const slugs = new Set(STOPS.map((stop) => stop.slug));
    expect(Object.keys(MEANING).sort()).toEqual([...slugs].sort());
  });
});
