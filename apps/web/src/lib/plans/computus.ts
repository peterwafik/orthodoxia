/**
 * The Church Year seasons the reading plans follow, worked out on the reader's device. Dates follow the registered
 * source in content/plans/church-year.yaml:
 * - the Nativity fast, 16 Hathor (25 November) to the eve of the Nativity on 29 Koiak (7 January): 43 days;
 * - Great Lent, 55 days ending on the eve of Pascha;
 * - the three-day Fast of Nineveh, two weeks before Great Lent (to be checked against a Coptic calendar before that
 *   season's days are written).
 * Coptic Pascha follows the Alexandrian computus on the Julian calendar; adding 13 days gives the civil date from
 * 1900 to 2099. All dates are local calendar dates: no hours, no time zones.
 */
import type { SeasonId } from '@orthodoxia/content-schema';

const day = (year: number, month: number, date: number): Date => new Date(year, month - 1, date);
const addDays = (date: Date, days: number): Date => new Date(date.getFullYear(), date.getMonth(), date.getDate() + days);
const midnight = (date: Date): Date => new Date(date.getFullYear(), date.getMonth(), date.getDate());
const MS_PER_DAY = 86_400_000;
const daysBetween = (from: Date, to: Date): number => Math.round((midnight(to).getTime() - midnight(from).getTime()) / MS_PER_DAY);

/** Coptic (and Eastern) Pascha as a civil (Gregorian) date, for 1900–2099. */
export function copticPascha(year: number): Date {
  if (year < 1900 || year > 2099) throw new Error(`copticPascha is valid for 1900–2099, not ${year}`);
  const a = year % 4;
  const b = year % 7;
  const c = year % 19;
  const d = (19 * c + 15) % 30;
  const e = (2 * a + 4 * b - d + 34) % 7;
  const month = Math.floor((d + e + 114) / 31);
  const date = ((d + e + 114) % 31) + 1;
  return addDays(day(year, month, date), 13);
}

export interface Season {
  readonly id: SeasonId;
  readonly start: Date;
  readonly days: number;
}

/** The seasons that begin in a given civil year. */
export function seasonsOf(year: number): Season[] {
  const pascha = copticPascha(year);
  const lent = addDays(pascha, -55);
  return [
    { id: 'nineveh', start: addDays(lent, -14), days: 3 },
    { id: 'great-lent', start: lent, days: 55 },
    { id: 'nativity-fast', start: day(year, 11, 25), days: 43 },
  ];
}

/** The season (of those asked for) that a date falls in, and the 0-based day within it; null outside them. */
export function seasonOn(date: Date, ids: readonly SeasonId[]): { id: SeasonId; day: number; start: Date } | null {
  for (const year of [date.getFullYear() - 1, date.getFullYear()]) {
    for (const season of seasonsOf(year)) {
      if (!ids.includes(season.id)) continue;
      const index = daysBetween(season.start, date);
      if (index >= 0 && index < season.days) return { id: season.id, day: index, start: season.start };
    }
  }
  return null;
}

/** The next start of any of the given seasons, strictly after the date. */
export function nextSeason(date: Date, ids: readonly SeasonId[]): { id: SeasonId; start: Date } | null {
  const upcoming = [date.getFullYear(), date.getFullYear() + 1]
    .flatMap((year) => seasonsOf(year))
    .filter((season) => ids.includes(season.id) && daysBetween(date, season.start) > 0)
    .sort((x, y) => x.start.getTime() - y.start.getTime());
  const first = upcoming[0];
  return first === undefined ? null : { id: first.id, start: first.start };
}
