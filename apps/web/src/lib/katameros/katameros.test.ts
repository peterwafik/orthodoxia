import { describe, expect, it } from 'vitest';
import { cycleLabel, entryKey, readingCycle } from './cycle.ts';
import { parseReadings } from './refs.ts';
import { allEntries, entryTexts, LITURGY_SLOTS } from './texts.ts';

const day = (y: number, m: number, d: number) => new Date(y, m - 1, d);

describe('Katameros references', () => {
  it('reads the shapes the data uses', () => {
    expect(parseReadings('Psalms 65:11;Psalms 81:1')).toEqual([
      { code: 'PSA', chapter: 65, from: 11, toChapter: 65, to: 11 },
      { code: 'PSA', chapter: 81, from: 1, toChapter: 81, to: 1 },
    ]);
    expect(parseReadings('Hebrews 11:32-12:2')).toEqual([{ code: 'HEB', chapter: 11, from: 32, toChapter: 12, to: 2 }]);
    expect(parseReadings('Psalms 17:1,2')).toEqual([
      { code: 'PSA', chapter: 17, from: 1, toChapter: 17, to: 1 },
      { code: 'PSA', chapter: 17, from: 2, toChapter: 17, to: 2 },
    ]);
    expect(parseReadings('Psalms 73:23-24: Psalms 73:28')).toHaveLength(2);
    expect(parseReadings('Psalms4:6-7')[0]).toMatchObject({ code: 'PSA', chapter: 4, from: 6, to: 7 });
    expect(() => parseReadings('Hezekiah 1:1')).toThrow();
  });
});

describe('the day’s readings', () => {
  it('follows the Sundays, feasts and seasons', () => {
    // Sunday 22 November 2026 is 13 Hatour: the second Sunday of Hatour.
    expect(readingCycle(day(2026, 11, 22))).toEqual({ cycle: 'sunday', month: 3, sunday: 2 });
    expect(cycleLabel(readingCycle(day(2026, 11, 22)), day(2026, 11, 22), 'en')).toBe('Second Sunday of Hatour');
    expect(cycleLabel(readingCycle(day(2026, 11, 22)), day(2026, 11, 22), 'ar')).toBe('الأحد الثاني من شهر هاتور');
    // A weekday reads its date's readings.
    expect(readingCycle(day(2026, 11, 21))).toEqual({ cycle: 'annual', month: 3, day: 12 });
    // The Nativity, 29 Kiahk, has its own.
    expect(readingCycle(day(2027, 1, 7))).toEqual({ cycle: 'annual', month: 4, day: 29 });
    // Coptic Pascha 2027 is 2 May: Lent from 8 March, Nineveh from 22 February, Pentecost on 20 June.
    expect(readingCycle(day(2027, 5, 2))).toEqual({ cycle: 'fifty', fromPascha: 0 });
    expect(readingCycle(day(2027, 3, 8))).toEqual({ cycle: 'lent', fromPascha: -55 });
    expect(readingCycle(day(2027, 2, 22))).toEqual({ cycle: 'nineveh', fromPascha: -69 });
    expect(readingCycle(day(2027, 4, 28))).toEqual({ cycle: 'holy-week', fromPascha: -4 });
    expect(entryKey(readingCycle(day(2027, 4, 28)))).toBeNull();
    expect(cycleLabel(readingCycle(day(2027, 6, 20)), day(2027, 6, 20), 'en')).toBe('Pentecost');
  });

  it('has readings for every day outside Holy Week, for years of early and late Pascha', () => {
    const entries = allEntries();
    for (const year of [2026, 2027, 2028, 2029, 2030, 2031, 2034, 2035]) {
      for (let date = day(year, 1, 1); date.getFullYear() === year; date = new Date(year, date.getMonth(), date.getDate() + 1)) {
        const cycle = readingCycle(date);
        const key = entryKey(cycle);
        if (cycle.cycle === 'holy-week') continue;
        expect(key !== null && entries.has(key), `${date.toDateString()} ${JSON.stringify(cycle)}`).toBe(true);
        expect(cycleLabel(cycle, date, 'en'), date.toDateString()).not.toBe('');
      }
    }
  });
});

describe('the readings’ texts', () => {
  it('builds every entry in full in both languages, with all five readings of the Liturgy', () => {
    for (const [key, entry] of allEntries()) {
      for (const locale of ['en', 'ar'] as const) {
        const texts = entryTexts(entry, locale);
        for (const { slot } of LITURGY_SLOTS) {
          if (key === 'e0' && slot === 'LPsalm') continue;
          expect(texts[slot]?.parts.length ?? 0, `${key} ${slot} ${locale}`).toBeGreaterThan(0);
        }
      }
    }
  });

  it('labels and fills a reading', () => {
    const texts = entryTexts({ Pauline: 'Hebrews 11:32-12:2', LPsalm: 'Psalms 65:11;Psalms 81:1' }, 'en');
    expect(texts.Pauline!.label).toBe('Hebrews 11:32–12:2');
    expect(texts.LPsalm!.label).toBe('Psalms 65:11; 81:1');
    expect(entryTexts({ LPsalm: 'Psalms 104:16;Psalms 104:10' }, 'en').LPsalm).toMatchObject({ label: 'Psalms 104:16, 10' });
    expect(entryTexts({ LPsalm: 'Psalms 104:16;Psalms 104:10' }, 'en').LPsalm!.parts).toHaveLength(1);
    expect(texts.Pauline!.parts[0]!.verses.at(-1)!.text).toContain('author and finisher');
    expect(entryTexts({ LGospel: 'Mark 6:14-29' }, 'ar').LGospel!.label).toBe('إنجيل مرقس ٦: ١٤–٢٩');
  });
});
