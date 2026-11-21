/**
 * The Coptic calendar: twelve months of 30 days and Nasie of 5 (6 in a Coptic leap year). For 1900–2099, 1 Tout falls
 * on 11 September, or 12 September in the year before a Gregorian leap year (source: wikipedia-coptic-calendar). The
 * Coptic year number (Anno Martyrum) is the Gregorian year minus 283 from 1 Tout, minus 284 before it. All dates are
 * local calendar dates, with no hours.
 */
import type { Locale } from '../../i18n/index.ts';

export interface CopticDate {
  readonly year: number;
  /** 1 (Tout) to 13 (Nasie). */
  readonly month: number;
  readonly day: number;
}

export interface CopticMonth {
  readonly n: number;
  /** URL segment. */
  readonly slug: string;
  readonly en: string;
  readonly ar: string;
}

export const MONTHS: readonly CopticMonth[] = [
  { n: 1, slug: 'tout', en: 'Tout', ar: 'توت' },
  { n: 2, slug: 'baba', en: 'Baba', ar: 'بابه' },
  { n: 3, slug: 'hatour', en: 'Hatour', ar: 'هاتور' },
  { n: 4, slug: 'kiahk', en: 'Kiahk', ar: 'كيهك' },
  { n: 5, slug: 'touba', en: 'Touba', ar: 'طوبه' },
  { n: 6, slug: 'amshir', en: 'Amshir', ar: 'أمشير' },
  { n: 7, slug: 'baramhat', en: 'Baramhat', ar: 'برمهات' },
  { n: 8, slug: 'baramouda', en: 'Baramouda', ar: 'برموده' },
  { n: 9, slug: 'bashans', en: 'Bashans', ar: 'بشنس' },
  { n: 10, slug: 'paona', en: 'Paona', ar: 'بؤونه' },
  { n: 11, slug: 'abib', en: 'Abib', ar: 'أبيب' },
  { n: 12, slug: 'mesra', en: 'Mesra', ar: 'مسرى' },
  { n: 13, slug: 'nasie', en: 'Nasie', ar: 'نسيء' },
];

export const monthName = (month: number, locale: Locale): string => MONTHS[month - 1]![locale];
export const monthBySlug = (slug: string): CopticMonth | undefined => MONTHS.find((month) => month.slug === slug);

const isGregorianLeap = (year: number): boolean => (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
const addDays = (date: Date, days: number): Date => new Date(date.getFullYear(), date.getMonth(), date.getDate() + days);
const midnight = (date: Date): Date => new Date(date.getFullYear(), date.getMonth(), date.getDate());
const daysBetween = (from: Date, to: Date): number => Math.round((midnight(to).getTime() - midnight(from).getTime()) / 86_400_000);

/** The Gregorian date of 1 Tout of a Coptic year. */
export function newYear(copticYear: number): Date {
  const gregorian = copticYear + 283;
  return new Date(gregorian, 8, isGregorianLeap(gregorian + 1) ? 12 : 11);
}

/** Days in Nasie of a Coptic year: 6 when the year ends just before a Gregorian leap year's 1 Tout shift. */
export const nasieDays = (copticYear: number): number => daysBetween(newYear(copticYear), newYear(copticYear + 1)) - 360;

export function toCoptic(date: Date): CopticDate {
  const gregorian = date.getFullYear();
  let year = gregorian - 283;
  if (daysBetween(newYear(year), date) < 0) year -= 1;
  const offset = daysBetween(newYear(year), date);
  return { year, month: Math.floor(offset / 30) + 1, day: (offset % 30) + 1 };
}

export function fromCoptic({ year, month, day }: CopticDate): Date {
  return addDays(newYear(year), (month - 1) * 30 + day - 1);
}

/** Every day of the Coptic year, in order (366 entries: Nasie 6 is included, whether or not this year has it). */
export const YEAR_DAYS: readonly { month: number; day: number }[] = MONTHS.flatMap((month) =>
  Array.from({ length: month.n === 13 ? 6 : 30 }, (_, i) => ({ month: month.n, day: i + 1 })),
);
