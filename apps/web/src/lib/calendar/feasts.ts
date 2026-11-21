/**
 * Feasts and fasts of the Coptic Orthodox Church for any Coptic year, worked out on the device. Sources:
 * wikipedia-coptic-calendar and wikipedia-coptic-fasting (content/sources). Fixed feasts are kept by Coptic date and
 * checked in the tests against St-Takla's own headings for those days; moveable ones are counted from Coptic Pascha.
 *
 * The Nativity is kept on 7 January (29 Kiahk, or 28 Kiahk in the years when 1 Tout falls on 12 September), and the
 * Nativity fast runs from 25 November to 6 January, as the sources describe.
 */
import type { Locale } from '../../i18n/index.ts';
import { copticPascha } from '../plans/computus.ts';
import { fromCoptic, toCoptic, newYear } from './coptic.ts';

export type FeastLevel = 'major' | 'minor' | 'feast';

export interface Feast {
  readonly id: string;
  readonly level: FeastLevel;
  readonly name: Readonly<Record<Locale, string>>;
}

export interface Fast {
  readonly id: string;
  readonly name: Readonly<Record<Locale, string>>;
}

const n = (en: string, ar: string) => ({ en, ar });

/** Fixed feasts by Coptic month and day. */
export const FIXED_FEASTS: readonly (Feast & { readonly month: number; readonly day: number })[] = [
  { id: 'nayrouz', level: 'feast', month: 1, day: 1, name: n('Nayrouz, the Coptic New Year', 'عيد النيروز، رأس السنة القبطية') },
  { id: 'cross', level: 'feast', month: 1, day: 17, name: n('Feast of the Cross', 'عيد الصليب') },
  { id: 'michael', level: 'feast', month: 3, day: 12, name: n('Feast of the Archangel Michael', 'عيد رئيس الملائكة ميخائيل') },
  { id: 'theophany', level: 'major', month: 5, day: 11, name: n('Theophany (the Baptism of the Lord)', 'عيد الغطاس المجيد') },
  { id: 'circumcision', level: 'minor', month: 5, day: 6, name: n('The Circumcision of the Lord', 'عيد الختان') },
  { id: 'cana', level: 'minor', month: 5, day: 13, name: n('The Wedding at Cana', 'عيد عرس قانا الجليل') },
  { id: 'presentation', level: 'minor', month: 6, day: 8, name: n('The Entry of the Lord into the Temple', 'عيد دخول السيد المسيح الهيكل') },
  { id: 'annunciation', level: 'major', month: 7, day: 29, name: n('The Annunciation', 'عيد البشارة المجيد') },
  { id: 'entry-egypt', level: 'minor', month: 9, day: 24, name: n('The Entry of the Lord into Egypt', 'عيد دخول السيد المسيح أرض مصر') },
  { id: 'apostles', level: 'feast', month: 11, day: 5, name: n('Feast of the Apostles Peter and Paul', 'عيد الرسولين بطرس وبولس') },
  { id: 'transfiguration', level: 'minor', month: 12, day: 13, name: n('The Transfiguration', 'عيد التجلي') },
  { id: 'assumption', level: 'feast', month: 12, day: 16, name: n('The Assumption of the Body of the Virgin Mary', 'عيد صعود جسد السيدة العذراء') },
];

/** Moveable feasts, by days from Coptic Pascha. */
export const MOVEABLE_FEASTS: readonly (Feast & { readonly offset: number })[] = [
  { id: 'palm-sunday', level: 'major', offset: -7, name: n('Palm Sunday', 'أحد الشعانين') },
  { id: 'covenant-thursday', level: 'minor', offset: -3, name: n('Covenant Thursday', 'خميس العهد') },
  { id: 'good-friday', level: 'feast', offset: -2, name: n('Good Friday', 'الجمعة العظيمة') },
  { id: 'pascha', level: 'major', offset: 0, name: n('The Feast of the Resurrection', 'عيد القيامة المجيد') },
  { id: 'thomas-sunday', level: 'minor', offset: 7, name: n('Thomas Sunday', 'أحد توما') },
  { id: 'ascension', level: 'major', offset: 39, name: n('The Ascension', 'عيد الصعود المجيد') },
  { id: 'pentecost', level: 'major', offset: 49, name: n('Pentecost', 'عيد العنصرة') },
];

export const NATIVITY: Feast = { id: 'nativity', level: 'major', name: n('The Nativity of the Lord', 'عيد الميلاد المجيد') };

export const FASTS: Readonly<Record<string, Fast>> = {
  nativity: { id: 'nativity', name: n('The Nativity fast', 'صوم الميلاد') },
  paramoun: { id: 'paramoun', name: n('Paramoun (the eve of the feast)', 'البرامون') },
  nineveh: { id: 'nineveh', name: n('The Fast of Nineveh', 'صوم نينوى') },
  lent: { id: 'lent', name: n('Great Lent', 'الصوم الكبير') },
  'holy-week': { id: 'holy-week', name: n('Holy Week', 'أسبوع الآلام') },
  apostles: { id: 'apostles', name: n('The Apostles’ fast', 'صوم الرسل') },
  virgin: { id: 'virgin', name: n('The Fast of the Virgin', 'صوم العذراء') },
  weekly: { id: 'weekly', name: n('Wednesday and Friday fast', 'صوم الأربعاء والجمعة') },
};

const addDays = (date: Date, days: number): Date => new Date(date.getFullYear(), date.getMonth(), date.getDate() + days);
const key = (date: Date): string => `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
const between = (date: Date, from: Date, to: Date): boolean => date.getTime() >= from.getTime() && date.getTime() <= to.getTime();

export interface DayInfo {
  readonly feasts: readonly Feast[];
  /** The fast kept that day, if any (the most specific one). */
  readonly fast: Fast | null;
}

/** Feasts and the fast of one civil date. */
export function dayInfo(date: Date): DayInfo {
  const day = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const coptic = toCoptic(day);
  const feasts: Feast[] = [];
  for (const feast of FIXED_FEASTS) if (feast.month === coptic.month && feast.day === coptic.day) feasts.push(feast);
  if (day.getMonth() === 0 && day.getDate() === 7) feasts.push(NATIVITY);

  // Pascha of the civil year this date falls in decides the moveable feasts and seasons (Lent to the Apostles' fast).
  const pascha = copticPascha(day.getFullYear());
  for (const feast of MOVEABLE_FEASTS) if (key(addDays(pascha, feast.offset)) === key(day)) feasts.push(feast);

  const major = feasts.some((feast) => feast.level === 'major');
  const lent = addDays(pascha, -55);
  const pentecost = addDays(pascha, 49);
  const apostlesEnd = fromCoptic({ year: toCoptic(pentecost).year, month: 11, day: 4 });
  const nativityStart = new Date(day.getMonth() === 0 ? day.getFullYear() - 1 : day.getFullYear(), 10, 25);
  const nativityEnd = new Date(nativityStart.getFullYear() + 1, 0, 6);
  const virginStart = fromCoptic({ year: coptic.year, month: 12, day: 1 });
  const theophanyEve = addDays(fromCoptic({ year: coptic.year, month: 5, day: 11 }), -1);

  let fast: Fast | null = null;
  if (key(day) === key(nativityEnd) || key(day) === key(theophanyEve)) fast = FASTS['paramoun']!;
  else if (between(day, nativityStart, nativityEnd)) fast = FASTS['nativity']!;
  else if (between(day, addDays(lent, -14), addDays(lent, -12))) fast = FASTS['nineveh']!;
  else if (between(day, addDays(pascha, -6), addDays(pascha, -1))) fast = FASTS['holy-week']!;
  else if (between(day, lent, addDays(pascha, -8))) fast = FASTS['lent']!;
  else if (between(day, addDays(pentecost, 1), apostlesEnd)) fast = FASTS['apostles']!;
  else if (between(day, virginStart, addDays(virginStart, 14))) fast = FASTS['virgin']!;
  else {
    // Wednesdays and Fridays, except the fifty days after Pascha, the days from the Nativity to Theophany, and major feasts.
    const weekday = day.getDay();
    const fifty = between(day, pascha, pentecost);
    const nativityTide = between(day, new Date(nativityEnd.getFullYear(), 0, 7), fromCoptic({ year: coptic.year, month: 5, day: 11 }));
    if ((weekday === 3 || weekday === 5) && !fifty && !nativityTide && !major) fast = FASTS['weekly']!;
  }
  return { feasts, fast };
}

/** Every civil date of a Coptic year, with its Coptic date and day info. */
export function yearDays(copticYear: number): { date: Date; month: number; day: number; info: DayInfo }[] {
  const start = newYear(copticYear);
  const end = newYear(copticYear + 1);
  const out: { date: Date; month: number; day: number; info: DayInfo }[] = [];
  for (let date = start; date.getTime() < end.getTime(); date = addDays(date, 1)) {
    const coptic = toCoptic(date);
    out.push({ date, month: coptic.month, day: coptic.day, info: dayInfo(date) });
  }
  return out;
}
