/**
 * The St. Mark Church (Heliopolis) Bible commentary PDFs, as linked from
 * https://www.stmarkos.org/index.php/ar/2013-12-28-16-52-18/2013-12-28-17-02-27 (Arabic only).
 * Use is authorized by a member of the St. Mark website team (see
 * content/sources/stmark-heliopolis-commentary.yaml).
 *
 * `scrambledLigatures`: PDFs whose fonts emit some letter pairs in reverse order; their text is
 * repaired (packages/commentary/src/arabic.ts) and the site marks it as automatically extracted.
 * `textLayer: false`: PDFs whose body text cannot be extracted (only headings); the site links to
 * the PDF instead.
 */
export interface StMarkDocument {
  readonly file: string;
  readonly book: string;
  /** For books split over several PDFs (Psalms): the first chapter in this file. */
  readonly firstChapter?: number;
  readonly scrambledLigatures?: boolean;
  readonly textLayer?: false;
}

export const STMARK_BASE_URL = 'https://www.stmarkos.org/explainbible/';
export const STMARK_INDEX_URL = 'https://www.stmarkos.org/index.php/ar/2013-12-28-16-52-18/2013-12-28-17-02-27';

export const STMARK_DOCUMENTS: readonly StMarkDocument[] = [
  { file: 'sefr-takween.pdf', book: 'GEN' },
  { file: 'sefr-alkhroug.pdf', book: 'EXO' },
  { file: 'sefr-alaoeen.pdf', book: 'LEV' },
  { file: 'sefr-al3ded.pdf', book: 'NUM' },
  { file: 'sefr-altathnea.pdf', book: 'DEU' },
  { file: 'sefr-easho3.pdf', book: 'JOS' },
  { file: 'sefr-alkodah.pdf', book: 'JDG' },
  { file: 'sefr-ra3outh.pdf', book: 'RUT' },
  { file: 'sefr-samuel-al2ol.pdf', book: '1SA' },
  { file: 'sefr-samuel-althane.pdf', book: '2SA' },
  { file: 'sefr-almolok-al2ol.pdf', book: '1KI' },
  { file: 'sefr-almolok-althane.pdf', book: '2KI' },
  { file: 'sefr-akhbar_al_ayam-awal.pdf', book: '1CH' },
  { file: 'sefr-akhbar_al_ayam-thany.pdf', book: '2CH' },
  { file: 'sefr-3zra.pdf', book: 'EZR' },
  { file: 'sefr-na7mea.pdf', book: 'NEH' },
  { file: 'sefr-ester.pdf', book: 'EST', textLayer: false },
  { file: 'sefr-ayoub.pdf', book: 'JOB', textLayer: false },
  { file: 'sefr-mazamir1.pdf', book: 'PSA', firstChapter: 1 },
  { file: 'sefr-mazamir2.pdf', book: 'PSA', firstChapter: 51 },
  { file: 'sefr-mazamir3.pdf', book: 'PSA', firstChapter: 101 },
  { file: 'sefr-armia.pdf', book: 'JER' },
  { file: 'sefr-marathy.pdf', book: 'LAM' },
  { file: 'sefr-tobia.pdf', book: 'TOB' },
  { file: 'sefr-eahodet.pdf', book: 'JDT' },
  { file: 'MathewFullBible-Ar.pdf', book: 'MAT', scrambledLigatures: true },
  { file: 'MarkosFull-Ar.pdf', book: 'MRK', scrambledLigatures: true },
  { file: 'LukeFull-Ar.pdf', book: 'LUK', scrambledLigatures: true },
  { file: 'JohnFull-Ar.pdf', book: 'JHN', scrambledLigatures: true },
  { file: 'ActsoftheApostlesFull-AR.pdf', book: 'ACT' },
  // The page links RomansFull-Ar.pdf and JohnThirdFull-Ar.pdf, which return 404; the files exist as -AR.
  { file: 'RomansFull-AR.pdf', book: 'ROM' },
  { file: 'CorinthiansFirstFull-AR.pdf', book: '1CO' },
  { file: 'CorinthiansSecondFull-AR.pdf', book: '2CO' },
  { file: 'GalatiansFull-AR.pdf', book: 'GAL' },
  { file: 'EphesiansFull-Ar.pdf', book: 'EPH' },
  { file: 'PhilippiansFull-Ar.pdf', book: 'PHP' },
  { file: 'ColossiansFull-Ar.pdf', book: 'COL' },
  { file: 'ThessaloniansFirstFull-Ar.pdf', book: '1TH' },
  { file: 'ThessaloniansSecondFull-Ar.pdf', book: '2TH' },
  { file: 'TimothyFirstFull-Ar.pdf', book: '1TI' },
  { file: 'TimothySecondFull-Ar.pdf', book: '2TI' },
  { file: 'TitusFull-Ar.pdf', book: 'TIT' },
  { file: 'PhilemonFull-Ar.pdf', book: 'PHM' },
  { file: 'HebrewsFull-Ar.pdf', book: 'HEB' },
  { file: 'JamesFull-Ar.pdf', book: 'JAS' },
  { file: 'PeterFirstFull-Ar.pdf', book: '1PE' },
  { file: 'PeterSecondFull-Ar.pdf', book: '2PE' },
  { file: 'JohnFirstFull-Ar.pdf', book: '1JN' },
  { file: 'JohnSecondFull-Ar.pdf', book: '2JN' },
  { file: 'JohnThirdFull-AR.pdf', book: '3JN' },
  { file: 'JudahFull-Ar.pdf', book: 'JUD' },
  { file: 'RevelationFull-Ar.pdf', book: 'REV' },
];

export const documentUrl = (file: string): string => `${STMARK_BASE_URL}${file}`;
