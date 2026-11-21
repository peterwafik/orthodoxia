import { describe, expect, it } from 'vitest';
import { fromCoptic, nasieDays, newYear, toCoptic } from './coptic.ts';
import { dayInfo, yearDays } from './feasts.ts';

const iso = (date: Date): string =>
  `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
const d = (y: number, m: number, day: number) => new Date(y, m - 1, day);

describe('the Coptic calendar', () => {
  it('starts the year on 11 September, or 12 September before a leap year', () => {
    expect(iso(newYear(1743))).toBe('2026-09-11');
    expect(iso(newYear(1744))).toBe('2027-09-12');
    expect(nasieDays(1743)).toBe(6);
    expect(nasieDays(1742)).toBe(5);
  });

  it('converts both ways', () => {
    expect(toCoptic(d(2026, 11, 21))).toEqual({ year: 1743, month: 3, day: 12 });
    expect(toCoptic(d(2027, 1, 7))).toEqual({ year: 1743, month: 4, day: 29 });
    expect(toCoptic(d(2026, 9, 10))).toEqual({ year: 1742, month: 13, day: 5 });
    expect(toCoptic(d(2027, 9, 11))).toEqual({ year: 1743, month: 13, day: 6 });
    expect(iso(fromCoptic({ year: 1743, month: 12, day: 16 }))).toBe('2027-08-22');
    for (let i = 0; i < 800; i += 7) {
      const date = d(2026, 1, 1 + i);
      expect(iso(fromCoptic(toCoptic(date)))).toBe(iso(date));
    }
  });

  it('has a full year of days', () => {
    expect(yearDays(1743)).toHaveLength(366);
    expect(yearDays(1742)).toHaveLength(365);
  });
});

describe('feasts and fasts', () => {
  const feasts = (date: Date) => dayInfo(date).feasts.map((feast) => feast.id);
  const fast = (date: Date) => dayInfo(date).fast?.id ?? null;

  it('keeps the Nativity on 7 January, with the fast and Paramoun before it', () => {
    expect(feasts(d(2027, 1, 7))).toContain('nativity');
    expect(feasts(d(2028, 1, 7))).toContain('nativity');
    expect(fast(d(2026, 11, 25))).toBe('nativity');
    expect(fast(d(2026, 11, 24))).toBe(null);
    expect(fast(d(2027, 1, 6))).toBe('paramoun');
    expect(fast(d(2027, 1, 8))).toBe(null);
  });

  it('counts the moveable feasts and seasons from Pascha', () => {
    expect(feasts(d(2027, 5, 2))).toContain('pascha');
    expect(feasts(d(2027, 4, 25))).toContain('palm-sunday');
    expect(feasts(d(2027, 6, 10))).toContain('ascension');
    expect(feasts(d(2027, 6, 20))).toContain('pentecost');
    expect(fast(d(2027, 3, 8))).toBe('lent');
    expect(fast(d(2027, 4, 30))).toBe('holy-week');
    expect(fast(d(2027, 2, 22))).toBe('nineveh');
    expect(fast(d(2027, 6, 21))).toBe('apostles');
    expect(fast(d(2027, 7, 11))).toBe('apostles');
    expect(fast(d(2027, 7, 12))).toBe(null);
  });

  it('keeps the Fast of the Virgin before the Assumption', () => {
    expect(fast(d(2027, 8, 7))).toBe('virgin');
    expect(fast(d(2027, 8, 21))).toBe('virgin');
    expect(feasts(d(2027, 8, 22))).toContain('assumption');
  });

  it('fasts on Wednesdays and Fridays, but not in the fifty days or after the Nativity', () => {
    expect(fast(d(2026, 10, 14))).toBe('weekly');
    expect(fast(d(2026, 10, 16))).toBe('weekly');
    expect(fast(d(2026, 10, 15))).toBe(null);
    expect(fast(d(2027, 5, 5))).toBe(null);
    expect(fast(d(2027, 1, 8))).toBe(null);
  });
});
