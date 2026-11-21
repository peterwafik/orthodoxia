/**
 * Which readings of the Katameros the Church reads on a day, worked out on the device. The data is coptic.io's
 * (data/katameros, MIT); the rules follow its readingCycle.ts, run on this site's own calendar (lib/calendar) and
 * Pascha (lib/plans/computus.ts).
 *
 * Precedence, highest first:
 *  1. Holy Week, Monday to Great Saturday: the Pascha book (no readings here yet).
 *  2. A feast of the Lord after Pascha (Thomas Sunday, the Ascension, Pentecost): the Holy Fifty Days.
 *  3. A fixed feast with readings of its own, except from Lazarus Saturday to Pascha.
 *  4. The Fast of Nineveh and Jonah's Passover.
 *  5. Great Lent, from its Preparation Saturday to Palm Sunday.
 *  6. The Holy Fifty Days, Pascha to Pentecost.
 *  7. A Sunday on the 29th (outside Touba and Amshir), keeping the monthly feast: the readings of 29 Baramhat.
 *  8. The Sunday before the Fast of Nineveh when it is a fifth Sunday of Touba: the Preparation Sunday of Lent.
 *  9. Any other Sunday: the Sunday of its Coptic month.
 * 10. Every other day: the readings of its Coptic date.
 */
import dayReadings from '../../../../../data/katameros/dayReadings.json';
import sundayReadings from '../../../../../data/katameros/sundayReadings.json';
import uniqueReadings from '../../../../../data/katameros/uniqueReadings.json';
import { MONTHS, toCoptic } from '../calendar/coptic.ts';
import { copticPascha } from '../plans/computus.ts';
import type { Locale } from '../../i18n/index.ts';

export type Cycle =
  | { readonly cycle: 'holy-week' | 'nineveh' | 'lent' | 'fifty'; readonly fromPascha: number }
  | { readonly cycle: 'sunday'; readonly month: number; readonly sunday: number }
  | { readonly cycle: 'annual'; readonly month: number; readonly day: number };

const TOUT = 1;
const HATOUR = 3;
const KIAHK = 4;
const TOUBA = 5;
const AMSHIR = 6;
const BARAMHAT = 7;
const BASHANS = 9;
const NASIE = 13;

/** Fixed feasts whose own readings replace the Sunday's and the season's. */
const PROPER: readonly (readonly [number, number])[] = [
  [TOUT, 1], [TOUT, 17], [TOUT, 18], [TOUT, 19],
  [KIAHK, 28], [KIAHK, 29], [KIAHK, 30],
  [TOUBA, 10], [TOUBA, 11], [TOUBA, 13],
  [AMSHIR, 8],
  [BARAMHAT, 10], [BARAMHAT, 29],
  [BASHANS, 24],
];

const SUNDAY_KEYS = new Set(Object.keys(sundayReadings));

const midnight = (date: Date): Date => new Date(date.getFullYear(), date.getMonth(), date.getDate());

/** Days from this civil year's Coptic Pascha (Pascha = 0). */
export function daysFromPascha(date: Date): number {
  const day = midnight(date);
  return Math.round((day.getTime() - copticPascha(day.getFullYear()).getTime()) / 86_400_000);
}

/** The Sunday of the Coptic month whose readings a Sunday takes (coptic.io's sundayOf). */
function sundayOf(date: Date, month: number, day: number): { month: number; sunday: number } {
  if (month === NASIE) return { month, sunday: 1 };
  const toParamoun = month === HATOUR ? 30 - day + 28 : month === KIAHK ? 28 - day : -1;
  const paramounOnSunday = toParamoun >= 0 && (date.getDay() + toParamoun) % 7 === 0;
  if (paramounOnSunday && month === HATOUR && day > 23) return { month: KIAHK, sunday: 1 };
  const sunday = Math.ceil(day / 7);
  if (sunday === 5 && month <= AMSHIR) return { month: AMSHIR, sunday: 2 };
  if (month === TOUT && day % 7 === 1) return { month, sunday: sunday - 1 };
  return { month, sunday: paramounOnSunday && month === KIAHK ? sunday + 1 : sunday };
}

export function readingCycle(input: Date): Cycle {
  const date = midnight(input);
  const d = daysFromPascha(date);
  if (d >= -6 && d <= -1) return { cycle: 'holy-week', fromPascha: d };
  if (d === 7 || d === 39 || d === 49) return { cycle: 'fifty', fromPascha: d };
  const { month, day } = toCoptic(date);
  const paschaWeek = d >= -8 && d <= 0;
  if (!paschaWeek && PROPER.some(([m, n]) => m === month && n === day)) return { cycle: 'annual', month, day };
  if (d >= -69 && d <= -66) return { cycle: 'nineveh', fromPascha: d };
  if (d >= -57 && d <= -7) return { cycle: 'lent', fromPascha: d };
  if (d >= 0 && d <= 49) return { cycle: 'fifty', fromPascha: d };
  if (date.getDay() !== 0) return { cycle: 'annual', month, day };
  if (day === 29 && month !== TOUBA && month !== AMSHIR) return { cycle: 'annual', month: BARAMHAT, day: 29 };
  if (d === -70 && month === TOUBA && day >= 29) return { cycle: 'lent', fromPascha: -56 };
  const sunday = sundayOf(date, month, day);
  // A Sunday the data has no readings for (one that falls just outside Lent in a late year) reads its date's.
  if (!SUNDAY_KEYS.has(`${sunday.month}:${sunday.sunday}`)) return { cycle: 'annual', month, day };
  return { cycle: 'sunday', ...sunday };
}

/** The file name of a cycle's readings (pages/[lang]/holy-mass/readings/[key].json), or null for Holy Week. */
export function entryKey(cycle: Cycle): string | null {
  switch (cycle.cycle) {
    case 'holy-week':
      return null;
    case 'annual':
      return `a${dayReadings[cycle.month - 1]!.readings[cycle.day - 1]!}`;
    case 'sunday':
      return `s${cycle.month}-${cycle.sunday}`;
    default:
      return `e${cycle.fromPascha}`;
  }
}

const DATA_MONTHS = ['Tout', 'Baba', 'Hator', 'Kiahk', 'Toba', 'Amshir', 'Baramhat', 'Baramouda', 'Bashans', 'Paona', 'Epep', 'Mesra', 'Nasie'];
const UNIQUE_DAY = new Map(uniqueReadings.map((reading) => [reading.id, reading.Day]));

const ORDINAL = {
  en: ['First', 'Second', 'Third', 'Fourth', 'Fifth', 'Sixth', 'Seventh'],
  ar: ['الأول', 'الثاني', 'الثالث', 'الرابع', 'الخامس', 'السادس', 'السابع'],
};
const WEEKDAY = {
  en: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  ar: ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'],
};

/** The name of the day in the Katameros: "Second Sunday of Hatour", "Great Lent, week 3, Wednesday". */
export function cycleLabel(cycle: Cycle, date: Date, locale: Locale): string {
  const ar = locale === 'ar';
  const num = new Intl.NumberFormat(ar ? 'ar-EG' : 'en-US');
  switch (cycle.cycle) {
    case 'holy-week':
      return ar ? 'أسبوع الآلام' : 'Holy Week';
    case 'annual': {
      const id = dayReadings[cycle.month - 1]!.readings[cycle.day - 1]!;
      const [n, name] = (UNIQUE_DAY.get(id) ?? '').split(' ');
      const month = DATA_MONTHS.indexOf(name ?? '');
      if (month < 0) return '';
      return ar ? `قراءات يوم ${num.format(Number(n))} ${MONTHS[month]!.ar}` : `The readings of ${n} ${MONTHS[month]!.en}`;
    }
    case 'sunday':
      return ar
        ? `الأحد ${ORDINAL.ar[cycle.sunday - 1]} من شهر ${MONTHS[cycle.month - 1]!.ar}`
        : `${ORDINAL.en[cycle.sunday - 1]} Sunday of ${MONTHS[cycle.month - 1]!.en}`;
    case 'nineveh':
      if (cycle.fromPascha === -66) return ar ? 'فصح يونان' : 'Jonah’s Passover';
      return ar ? `صوم نينوى، اليوم ${ORDINAL.ar[cycle.fromPascha + 69]}` : `The Fast of Nineveh, ${ORDINAL.en[cycle.fromPascha + 69]!.toLowerCase()} day`;
    case 'lent': {
      const d = cycle.fromPascha;
      if (d === -57) return ar ? 'سبت الاستعداد للصوم الكبير' : 'The Preparation Saturday of Great Lent';
      if (d === -56) return ar ? 'أحد الاستعداد للصوم الكبير' : 'The Preparation Sunday of Great Lent';
      if (d === -8) return ar ? 'سبت لعازر' : 'Lazarus Saturday';
      if (d === -7) return ar ? 'أحد الشعانين' : 'Palm Sunday';
      const week = Math.floor((d + 55) / 7) + 1;
      const weekday = WEEKDAY[locale][date.getDay()]!;
      return ar ? `الصوم الكبير، الأسبوع ${ORDINAL.ar[week - 1]}، ${weekday}` : `Great Lent, week ${week}, ${weekday}`;
    }
    case 'fifty': {
      const d = cycle.fromPascha;
      if (d === 0) return ar ? 'عيد القيامة المجيد' : 'The Feast of the Resurrection';
      if (d === 7) return ar ? 'أحد توما' : 'Thomas Sunday';
      if (d === 39) return ar ? 'عيد الصعود المجيد' : 'The Ascension';
      if (d === 49) return ar ? 'عيد العنصرة' : 'Pentecost';
      return ar ? `الخماسين المقدسة، اليوم ${num.format(d + 1)}` : `The Holy Fifty Days, day ${d + 1}`;
    }
  }
}
