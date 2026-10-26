import type { Locale } from '../../i18n/index.ts';

interface Line {
  readonly en: string;
  readonly ar: string;
}

const LINES = {
  title: { en: 'Bible atlas', ar: 'أطلس الكتاب المقدس' },
  metaDescription: {
    en: 'An interactive globe of the Bible: the journeys of Abraham, Moses, Jesus, Paul and others, and more than a thousand places the Bible names, each linked to the chapters that mention it, with the certainty of every site stated.',
    ar: 'كرة أرضية تفاعلية للكتاب المقدس: رحلات إبراهيم وموسى ويسوع وبولس وغيرهم، وأكثر من ألف موضع يذكرها الكتاب المقدس، وكل منها مرتبط بالفصول التي تذكره، مع بيان درجة اليقين في كل موضع.',
  },
  stageLabel: {
    en: 'A globe of the Bible lands. Drag to turn it, scroll or pinch to zoom, and select a mark to read about the place. The same places are listed in the panel.',
    ar: 'كرة أرضية لأراضي الكتاب المقدس. اسحب لتديرها، وحرّك العجلة أو اقرص للتكبير، واختر علامة لتقرأ عن الموضع. والمواضع نفسها مسرودة في اللوحة.',
  },
  needsScript: {
    en: 'The globe needs JavaScript. The index of places further down this page lists every place with its passages.',
    ar: 'الكرة الأرضية تحتاج إلى جافاسكريبت. وفهرس المواضع أسفل هذه الصفحة يسرد كل موضع مع فصوله.',
  },
  loading: { en: 'Loading the atlas…', ar: 'جارٍ تحميل الأطلس…' },
  failed: { en: 'The atlas could not be loaded. The index of places below still works.', ar: 'تعذّر تحميل الأطلس. وفهرس المواضع أدناه ما زال يعمل.' },

  tabJourneys: { en: 'Journeys', ar: 'الرحلات' },
  tabPlaces: { en: 'Places', ar: 'المواضع' },
  periods: { en: 'Period', ar: 'العصر' },
  allPeriods: { en: 'All periods', ar: 'كل العصور' },
  search: { en: 'Search places', ar: 'ابحث في المواضع' },
  searchPlaceholder: { en: 'Jerusalem, Bethel, Philippi…', ar: 'أورشليم، بيت إيل، فيلبي…' },
  noMatch: { en: 'No place matches.', ar: 'لا يوجد موضع مطابق.' },
  journeyCount: { en: '{n} journeys', ar: '{n} رحلة' },
  placeCount: { en: '{n} places', ar: '{n} موضعًا' },
  stops: { en: 'Stops', ar: 'المحطات' },
  showAll: { en: 'All journeys', ar: 'كل الرحلات' },
  replay: { en: 'Replay', ar: 'أعد العرض' },
  showJourney: { en: 'Show this journey', ar: 'اعرض هذه الرحلة' },
  journeysHere: { en: 'Journeys that pass here', ar: 'الرحلات التي تمر هنا' },

  layers: { en: 'Layers', ar: 'الطبقات' },
  layerJourneys: { en: 'Journey lines', ar: 'خطوط الرحلات' },
  layerAll: { en: 'Every place the Bible names', ar: 'كل موضع يذكره الكتاب المقدس' },
  layerUncertain: { en: 'Include uncertain sites', ar: 'مع المواضع غير المؤكدة' },
  layerLabels: { en: 'Names on the map', ar: 'الأسماء على الخريطة' },
  viewGlobe: { en: 'Globe', ar: 'كرة' },
  viewMap: { en: 'Flat map', ar: 'خريطة مسطحة' },
  rotate: { en: 'Turn slowly', ar: 'دوران بطيء' },
  zoomIn: { en: 'Zoom in', ar: 'تكبير' },
  zoomOut: { en: 'Zoom out', ar: 'تصغير' },
  reset: { en: 'Reset the view', ar: 'إعادة الضبط' },
  menu: { en: 'Show the panel', ar: 'أظهر اللوحة' },

  legend: { en: 'How sure is each site?', ar: 'ما مدى اليقين في كل موضع؟' },
  certSecure: { en: 'Secure', ar: 'مؤكد' },
  certSecureNote: { en: 'The site is known.', ar: 'الموضع معروف.' },
  certProbable: { en: 'Probable', ar: 'مرجّح' },
  certProbableNote: { en: 'The usual identification; scholars differ.', ar: 'التطابق المعتاد؛ ويختلف الدارسون.' },
  certTradition: { en: 'Traditional or uncertain', ar: 'تقليدي أو غير مؤكد' },
  certTraditionNote: { en: 'Held by tradition, or the site is disputed.', ar: 'يتمسك به التقليد، أو الموضع مختلف عليه.' },
  mapNote: {
    en: 'Lines join the stops in the order the passages give them. They are not roads or sea-lanes, which the text rarely describes. Rivers and lakes are simplified, and no modern borders are drawn.',
    ar: 'تصل الخطوط بين المحطات بحسب ترتيب الفصول. وليست طرقًا ولا مسالك بحرية، فالنص نادرًا ما يصفها. والأنهار والبحيرات مبسّطة، ولا تُرسم حدود حديثة.',
  },

  close: { en: 'Close', ar: 'إغلاق' },
  read: { en: 'Read', ar: 'اقرأ' },
  events: { en: 'What happened here', ar: 'ما جرى هنا' },
  tradition: { en: 'Church tradition', ar: 'تقليد الكنيسة' },
  tradNote: { en: 'Rests on tradition, not on the text of Scripture', ar: 'يستند إلى التقليد لا إلى نص الكتاب' },
  today: { en: 'Today', ar: 'اليوم' },
  namedIn: { en: 'Named in {n} verses', ar: 'مذكور في {n} آية' },
  namedOnce: { en: 'Named in 1 verse', ar: 'مذكور في آية واحدة' },
  moreVerses: { en: 'Verses that name this place', ar: 'الآيات التي تذكر هذا الموضع' },
  moreVersesShown: { en: 'A spread of {n}, in the order of the Bible.', ar: 'عيّنة من {n} بترتيب الكتاب المقدس.' },
  related: { en: 'Evidence and questions', ar: 'الأدلة والأسئلة' },
  zoomHere: { en: 'Zoom to this place', ar: 'قرّب إلى هذا الموضع' },
  confidence: { en: 'Identification', ar: 'التعيين' },
  confHigh: { en: 'Well supported', ar: 'مدعوم جيدًا' },
  confMedium: { en: 'Probable', ar: 'مرجّح' },
  confLow: { en: 'Uncertain', ar: 'غير مؤكد' },
  alternatives: { en: '{n} other sites proposed', ar: 'اقتُرحت {n} مواضع أخرى' },
  alternativeOne: { en: '1 other site proposed', ar: 'اقتُرح موضع آخر' },
  namesInEnglish: { en: 'This name is shown in English.', ar: 'هذا الاسم معروض بالإنجليزية.' },

  index: { en: 'Index of places', ar: 'فهرس المواضع' },
  indexLede: {
    en: 'Every place of the atlas that has its own account, with the passages that tell it. The same places are on the globe.',
    ar: 'كل موضع في الأطلس له رواية خاصة، مع الفصول التي تحكيه. والمواضع نفسها على الكرة الأرضية.',
  },
} as const satisfies Record<string, Line>;

const TYPES = {
  settlement: { en: 'Town or city', ar: 'مدينة أو بلدة' },
  mountain: { en: 'Mountain', ar: 'جبل' },
  hill: { en: 'Hill', ar: 'تل' },
  island: { en: 'Island', ar: 'جزيرة' },
  spring: { en: 'Spring', ar: 'عين' },
  well: { en: 'Well', ar: 'بئر' },
  campsite: { en: 'Camp', ar: 'محطة' },
  valley: { en: 'Valley', ar: 'وادٍ' },
  wadi: { en: 'Wadi', ar: 'وادٍ' },
  pool: { en: 'Pool', ar: 'بركة' },
  ford: { en: 'Ford', ar: 'مخاضة' },
  structure: { en: 'Structure', ar: 'منشأة' },
} as const satisfies Record<string, Line>;

const KINDS = {
  city: { en: 'City', ar: 'مدينة' },
  mountain: { en: 'Mountain', ar: 'جبل' },
  water: { en: 'Water', ar: 'مياه' },
  region: { en: 'Region', ar: 'منطقة' },
  site: { en: 'Site', ar: 'موضع' },
} as const satisfies Record<string, Line>;

export type UiKey = keyof typeof LINES;

/** The page's strings in one language, flat. */
export function ui(locale: Locale): Record<UiKey, string> {
  return Object.fromEntries(Object.entries(LINES).map(([key, line]) => [key, line[locale]])) as Record<UiKey, string>;
}

export const typeNames = (locale: Locale): Record<string, string> => Object.fromEntries(Object.entries(TYPES).map(([key, line]) => [key, line[locale]]));
export const kindNames = (locale: Locale): Record<string, string> => Object.fromEntries(Object.entries(KINDS).map(([key, line]) => [key, line[locale]]));
