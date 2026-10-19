import { CHALCEDON } from './chalcedon.ts';
import { TRUNK_AND_ORIENT } from './orient.ts';
import { REFORMATION } from './reformation.ts';
import type { Bilingual, Church, ChurchGroup, HistoryEvent } from './types.ts';

export * from './types.ts';
export * from './compare.ts';
export { POSITIONS } from './positions.ts';

/** The short name shown beside each thread on the timeline. */
const SHORT_NAMES: Readonly<Record<string, Bilingual>> = {
  'coptic-orthodox': { en: 'Coptic Orthodox', ar: 'القبطية الأرثوذكسية' },
  ethiopian: { en: 'Ethiopian Orthodox', ar: 'الإثيوبية' },
  'church-of-the-east': { en: 'Church of the East', ar: 'كنيسة المشرق' },
  armenian: { en: 'Armenian Apostolic', ar: 'الأرمنية' },
  syriac: { en: 'Syriac Orthodox', ar: 'السريانية' },
  malankara: { en: 'Malankara', ar: 'الملنكارا' },
  'eastern-orthodox': { en: 'Eastern Orthodox', ar: 'الأرثوذكسية الخلقيدونية' },
  'eastern-catholic': { en: 'Eastern Catholic', ar: 'الكاثوليكية الشرقية' },
  'roman-catholic': { en: 'Roman Catholic', ar: 'الكاثوليكية الرومانية' },
  lutheran: { en: 'Lutheran', ar: 'اللوثرية' },
  reformed: { en: 'Reformed', ar: 'الإصلاحية' },
  anglican: { en: 'Anglican', ar: 'الأنجليكانية' },
  anabaptist: { en: 'Anabaptist', ar: 'الأنابابتست' },
  baptist: { en: 'Baptist', ar: 'المعمدانية' },
  pentecostal: { en: 'Pentecostal', ar: 'الخمسينية' },
};

export interface ChurchEntry extends Church {
  readonly short: Bilingual;
}

export const CHURCHES: readonly ChurchEntry[] = [...TRUNK_AND_ORIENT, ...CHALCEDON, ...REFORMATION].map(
  (church) => {
    const short = SHORT_NAMES[church.id];
    if (short === undefined) throw new Error(`church-history: no short name for "${church.id}"`);
    return { ...church, short };
  },
);

/** Dated events drawn on the time axis. */
export const EVENTS: readonly HistoryEvent[] = [
  { year: 33, label: { en: 'Pentecost', ar: 'يوم الخمسين' } },
  { year: 325, label: { en: 'Nicaea', ar: 'نيقية' } },
  { year: 431, label: { en: 'Ephesus', ar: 'أفسس' } },
  { year: 451, label: { en: 'Chalcedon', ar: 'خلقيدونية' } },
  { year: 1054, label: { en: 'Great Schism', ar: 'الانشقاق الكبير' } },
  { year: 1517, label: { en: 'Reformation', ar: 'الإصلاح' } },
  { year: 1906, label: { en: 'Azusa Street', ar: 'شارع أزوسا' } },
];

/** The year the timeline ends. */
export const TIMELINE_END_YEAR = 2026;

/** The groups, top to bottom as they appear on the timeline. */
export const GROUPS: readonly ChurchGroup[] = [
  {
    id: 'east',
    hue: 22,
    name: { en: 'East Syriac tradition', ar: 'التقليد السرياني الشرقي' },
    note: {
      en: 'The church of Persia and the East, which separated after the Council of Ephesus.',
      ar: 'كنيسة فارس والمشرق التي انفصلت بعد مجمع أفسس.',
    },
  },
  {
    id: 'oriental',
    hue: 45,
    name: { en: 'Oriental Orthodox family', ar: 'أسرة الكنائس الأرثوذكسية الشرقية' },
    note: {
      en: 'Churches that share one faith and reject Chalcedon, and are in communion with one another.',
      ar: 'كنائس تشترك في إيمان واحد وترفض مجمع خلقيدونية، وهي في شركة بعضها مع بعض.',
    },
  },
  {
    id: 'chalcedonian',
    hue: 215,
    name: { en: 'Chalcedonian churches, East and West', ar: 'الكنائس الخلقيدونية، الشرق والغرب' },
    note: {
      en: 'Churches that accept Chalcedon and keep bishops in apostolic succession: Eastern Orthodox, Eastern Catholic and Roman Catholic.',
      ar: 'كنائس تقبل خلقيدونية وتحفظ الأساقفة في التسلسل الرسولي: الأرثوذكسية الخلقيدونية والكاثوليكية الشرقية والكاثوليكية الرومانية.',
    },
  },
  {
    id: 'reformation',
    hue: 135,
    name: { en: 'Churches of the Reformation', ar: 'كنائس الإصلاح' },
    note: {
      en: 'Churches that arose from the sixteenth-century Reformation and the movements that followed it.',
      ar: 'كنائس نشأت من إصلاح القرن السادس عشر ومن الحركات التي تلته.',
    },
  },
];
