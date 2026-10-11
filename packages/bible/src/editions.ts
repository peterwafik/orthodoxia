import { BOOKS, type BookInfo } from './books.ts';
import type { PsalmNumbering } from './psalms.ts';

/**
 * Raw text sources, pinned in `data/bible/sources.json` and described in the source registry
 * (`content/sources/<registryId>.yaml`).
 */
export type TextSourceId = 'ebible-eng-kjv' | 'ebible-eng-brenton' | 'ebible-arb-vd' | 'wikisource-ar-dc';

/**
 * Where an edition gets one canonical book from. `book` is the code inside the source (USFM code,
 * or a Wikisource page key). `chapters` optionally takes a subset of the source's chapters and
 * renumbers them from `renumberFrom`; `verses` keeps only verses in an inclusive range.
 */
export interface BookSource {
  readonly source: TextSourceId;
  readonly book: string;
  readonly chapters?: readonly number[];
  readonly renumberFrom?: number;
  readonly verses?: readonly [number, number];
  /** Shown above the text, e.g. where the chapter sits in the source's own numbering. */
  readonly note?: { readonly en: string; readonly ar: string };
}

export interface Edition {
  readonly id: string;
  readonly locale: 'en' | 'ar';
  readonly name: string;
  readonly shortName: string;
  readonly description: string;
  readonly psalms: PsalmNumbering;
  /** Whether verse numbers follow the KJV scheme used by the cross-reference explorer. */
  readonly explorerCompatible: boolean;
  readonly books: Readonly<Record<string, BookSource>>;
}

const canon = (section: BookInfo['section']): BookInfo[] => BOOKS.filter((book) => book.section === section);
const same = (source: TextSourceId, books: readonly BookInfo[]): Record<string, BookSource> =>
  Object.fromEntries(books.map((book) => [book.code, { source, book: book.code }]));

const OT = canon('ot');
const NT = canon('nt');
const KJV_DEUTEROCANON = ['TOB', 'JDT', 'ESG', 'WIS', 'SIR', 'BAR', 'S3Y', 'SUS', 'BEL', '1MA', '2MA'];

const PSALM_151_FROM_BRENTON: BookSource = {
  source: 'ebible-eng-brenton',
  book: 'PSA',
  chapters: [151],
  renumberFrom: 1,
  note: {
    en: 'Psalm 151 is not in the KJV Apocrypha; this text is from Brenton’s translation of the Septuagint (1851).',
    ar: 'المزمور ١٥١ غير موجود في أبوكريفا ترجمة الملك جيمس؛ هذا النص من ترجمة برنتون للترجمة السبعينية (١٨٥١).',
  },
};

export const EDITIONS: readonly Edition[] = [
  {
    id: 'kjv',
    locale: 'en',
    name: 'King James Version with the Deuterocanon',
    shortName: 'KJV',
    description:
      'The 1769 King James Version with its Apocrypha, the public-domain ancestor of the NKJV that Coptic Orthodox churches commonly read in English.',
    psalms: 'hebrew',
    explorerCompatible: true,
    books: {
      ...same('ebible-eng-kjv', OT),
      ...Object.fromEntries(KJV_DEUTEROCANON.map((code) => [code, { source: 'ebible-eng-kjv', book: code }])),
      PS2: PSALM_151_FROM_BRENTON,
      ...same('ebible-eng-kjv', NT),
    },
  },
  {
    id: 'lxx',
    locale: 'en',
    name: 'Septuagint (Brenton) with the King James New Testament',
    shortName: 'LXX',
    description:
      'Sir Lancelot Brenton’s 1851 translation of the Greek Septuagint, the Old Testament tradition of the Coptic Orthodox Church, with Septuagint psalm numbering as in the Agpeya. The New Testament is the KJV.',
    psalms: 'lxx',
    explorerCompatible: false,
    books: {
      ...Object.fromEntries(
        OT.filter((book) => book.code !== 'EST' && book.code !== 'DAN').map((book) => [
          book.code,
          { source: 'ebible-eng-brenton', book: book.code },
        ]),
      ),
      // The Septuagint's Esther and Daniel include the Greek additions in place.
      EST: { source: 'ebible-eng-brenton', book: 'ESG' },
      DAN: { source: 'ebible-eng-brenton', book: 'DAG' },
      ...Object.fromEntries(
        ['TOB', 'JDT', 'WIS', 'SIR', 'BAR', 'LJE', 'SUS', 'BEL', '1MA', '2MA'].map((code) => [
          code,
          { source: 'ebible-eng-brenton', book: code },
        ]),
      ),
      ...same('ebible-eng-kjv', NT),
    },
  },
  {
    id: 'svd',
    locale: 'ar',
    name: 'ترجمة فاندايك (١٨٦٥) مع الأسفار القانونية الثانية',
    shortName: 'فاندايك',
    description:
      'ترجمة سميث وفاندايك العربية (١٨٦٥) التي تُقرأ في الكنيسة القبطية الأرثوذكسية، مع نص الأسفار القانونية الثانية من ويكي مصدر.',
    psalms: 'hebrew',
    explorerCompatible: true,
    books: {
      ...same('ebible-arb-vd', OT),
      TOB: { source: 'wikisource-ar-dc', book: 'TOB' },
      JDT: { source: 'wikisource-ar-dc', book: 'JDT' },
      ESG: { source: 'wikisource-ar-dc', book: 'ESG' },
      WIS: { source: 'wikisource-ar-dc', book: 'WIS' },
      SIR: { source: 'wikisource-ar-dc', book: 'SIR' },
      BAR: { source: 'wikisource-ar-dc', book: 'BAR' },
      S3Y: {
        source: 'wikisource-ar-dc',
        book: 'DAG',
        chapters: [3],
        renumberFrom: 1,
        verses: [24, 90],
        note: {
          en: 'Numbered here as in this text’s Daniel 3:24–90.',
          ar: 'ترقيم الآيات هنا كما في دانيال ٣: ٢٤–٩٠ في هذا النص.',
        },
      },
      SUS: { source: 'wikisource-ar-dc', book: 'DAG', chapters: [13], renumberFrom: 1, note: { en: 'Daniel 13 in this text.', ar: 'دانيال ١٣ في هذا النص.' } },
      BEL: { source: 'wikisource-ar-dc', book: 'DAG', chapters: [14], renumberFrom: 1, note: { en: 'Daniel 14 in this text.', ar: 'دانيال ١٤ في هذا النص.' } },
      '1MA': { source: 'wikisource-ar-dc', book: '1MA' },
      '2MA': { source: 'wikisource-ar-dc', book: '2MA' },
      ...same('ebible-arb-vd', NT),
    },
  },
];

export function getEdition(id: string): Edition | undefined {
  return EDITIONS.find((edition) => edition.id === id);
}

export function editionsFor(locale: 'en' | 'ar'): Edition[] {
  return EDITIONS.filter((edition) => edition.locale === locale);
}

/** The edition each language opens by default. */
export const DEFAULT_EDITION: Readonly<Record<'en' | 'ar', string>> = { en: 'kjv', ar: 'svd' };
