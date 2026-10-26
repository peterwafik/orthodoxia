import type { Era } from './types.ts';

/** Dates are approximate on purpose: scholars date the earliest periods differently, and the site does not pick a side. */
export const ERAS: readonly Era[] = [
  { id: 'primeval', hue: 200, name: { en: 'The beginning', ar: 'البدايات' }, span: { en: 'Before recorded history', ar: 'قبل التاريخ المدوَّن' } },
  { id: 'patriarchs', hue: 38, name: { en: 'The patriarchs', ar: 'الآباء' }, span: { en: 'Second millennium BC (approximate)', ar: 'الألف الثاني ق.م (تقريبًا)' } },
  { id: 'exodus', hue: 18, name: { en: 'Exodus and conquest', ar: 'الخروج ودخول كنعان' }, span: { en: 'Dated between the 15th and 13th centuries BC; scholars differ', ar: 'يؤرَّخ بين القرنين الخامس عشر والثالث عشر ق.م، ويختلف الدارسون' } },
  { id: 'kingdom', hue: 340, name: { en: 'Judges and kings', ar: 'القضاة والملوك' }, span: { en: 'About 1200–586 BC', ar: 'نحو ١٢٠٠–٥٨٦ ق.م' } },
  { id: 'exile', hue: 268, name: { en: 'Exile and return', ar: 'السبي والعودة' }, span: { en: '586 BC to about 400 BC', ar: 'من ٥٨٦ ق.م إلى نحو ٤٠٠ ق.م' } },
  { id: 'christ', hue: 48, name: { en: 'The life of Christ', ar: 'حياة المسيح' }, span: { en: 'About 5 BC to AD 33', ar: 'من نحو ٥ ق.م إلى ٣٣ م' } },
  { id: 'apostles', hue: 160, name: { en: 'The apostles', ar: 'الرسل والكنيسة الأولى' }, span: { en: 'AD 33 to about AD 100', ar: 'من ٣٣ م إلى نحو ١٠٠ م' } },
];

export const ERA_BY_ID: ReadonlyMap<string, Era> = new Map(ERAS.map((era) => [era.id, era]));
