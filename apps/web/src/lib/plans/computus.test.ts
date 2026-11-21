import { describe, expect, it } from 'vitest';
import { copticPascha, nextSeason, seasonOn, seasonsOf } from './computus.ts';

const iso = (date: Date): string =>
  `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;

describe('Coptic Pascha', () => {
  it('matches known dates', () => {
    expect(iso(copticPascha(2024))).toBe('2024-05-05');
    expect(iso(copticPascha(2025))).toBe('2025-04-20');
    expect(iso(copticPascha(2026))).toBe('2026-04-12');
    expect(iso(copticPascha(2027))).toBe('2027-05-02');
  });

  it('starts Great Lent 55 days before Pascha', () => {
    expect(iso(seasonsOf(2027).find((season) => season.id === 'great-lent')!.start)).toBe('2027-03-08');
  });
});

describe('the Nativity fast', () => {
  const ids = ['nativity-fast'] as const;

  it('runs from 25 November to 6 January', () => {
    expect(seasonOn(new Date(2026, 10, 25), ids)).toMatchObject({ id: 'nativity-fast', day: 0 });
    expect(seasonOn(new Date(2027, 0, 3), ids)).toMatchObject({ id: 'nativity-fast', day: 39 });
    expect(seasonOn(new Date(2027, 0, 6), ids)).toMatchObject({ day: 42 });
    expect(seasonOn(new Date(2027, 0, 7), ids)).toBeNull();
    expect(seasonOn(new Date(2026, 10, 24), ids)).toBeNull();
  });

  it('ignores the time of day', () => {
    expect(seasonOn(new Date(2026, 10, 25, 23, 59), ids)).toMatchObject({ day: 0 });
  });

  it('says when the next one starts', () => {
    expect(iso(nextSeason(new Date(2026, 7, 1), ids)!.start)).toBe('2026-11-25');
    expect(iso(nextSeason(new Date(2027, 0, 7), ids)!.start)).toBe('2027-11-25');
  });
});
