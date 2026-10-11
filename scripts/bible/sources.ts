/**
 * The raw Bible text files the site is built from. Each is committed under `data/bible/raw/` and
 * pinned by SHA-256 in `data/bible/sources.json`, so the Bible can always be rebuilt identically
 * even if an upstream URL changes. Licenses are recorded in `content/sources/*.yaml`.
 */
import type { TextSourceId } from '../../packages/bible/src/editions.ts';

export interface ZipSource {
  readonly kind: 'ebible-usfm-zip';
  readonly id: TextSourceId;
  readonly registryId: string;
  readonly url: string;
  readonly file: string;
}

export interface WikisourceSource {
  readonly kind: 'wikisource-pages';
  readonly id: TextSourceId;
  readonly registryId: string;
  /** Book key → Arabic Wikisource page title. */
  readonly pages: Readonly<Record<string, string>>;
}

export const RAW_SOURCES: readonly (ZipSource | WikisourceSource)[] = [
  {
    kind: 'ebible-usfm-zip',
    id: 'ebible-eng-kjv',
    registryId: 'ebible-king-james-version-apocrypha',
    url: 'https://ebible.org/Scriptures/eng-kjv_usfm.zip',
    file: 'eng-kjv_usfm.zip',
  },
  {
    kind: 'ebible-usfm-zip',
    id: 'ebible-eng-brenton',
    registryId: 'ebible-brenton-septuagint',
    url: 'https://ebible.org/Scriptures/eng-Brenton_usfm.zip',
    file: 'eng-Brenton_usfm.zip',
  },
  {
    kind: 'ebible-usfm-zip',
    id: 'ebible-arb-vd',
    registryId: 'ebible-arabic-van-dyck',
    url: 'https://ebible.org/Scriptures/arb-vd_usfm.zip',
    file: 'arb-vd_usfm.zip',
  },
  {
    kind: 'wikisource-pages',
    id: 'wikisource-ar-dc',
    registryId: 'wikisource-arabic-deuterocanon',
    pages: {
      TOB: 'سفر طوبيا',
      JDT: 'سفر يهوديت',
      ESG: 'تتمة سفر أستير',
      WIS: 'سفر الحكمة',
      SIR: 'سفر يشوع بن سيراخ',
      BAR: 'سفر باروخ',
      DAG: 'تتمة سفر دانيال',
      '1MA': 'سفر المكابيين الأول',
      '2MA': 'سفر المكابيين الثانى',
    },
  },
];

/** One pinned file, as recorded in `data/bible/sources.json`. */
export interface PinnedFile {
  readonly source: TextSourceId;
  /** Path under `data/bible/raw/`. */
  readonly file: string;
  readonly url: string;
  readonly sha256: string;
  readonly retrievedAt: string;
  /** Wikisource only: the page revision the file was taken from. */
  readonly revision?: number;
  readonly title?: string;
}
