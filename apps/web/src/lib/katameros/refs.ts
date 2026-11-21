/**
 * The Katameros' references (data/katameros, from coptic.io), such as "Psalms 65:11;Psalms 81:1",
 * "Hebrews 11:32-12:2" or "Psalms 17:1,2", read into passages of the Bible.
 */

/** The books the Liturgy's readings come from, by the names the data uses. */
const BOOKS: Readonly<Record<string, string>> = {
  Psalms: 'PSA',
  Matthew: 'MAT',
  Mark: 'MRK',
  Luke: 'LUK',
  John: 'JHN',
  Acts: 'ACT',
  Romans: 'ROM',
  '1 Corinthians': '1CO',
  '2 Corinthians': '2CO',
  '2 Corinthian': '2CO',
  Galatians: 'GAL',
  Ephesians: 'EPH',
  Philippians: 'PHP',
  Colossians: 'COL',
  '1 Thessalonians': '1TH',
  '2 Thessalonians': '2TH',
  '1 Timothy': '1TI',
  '2 Timothy': '2TI',
  Titus: 'TIT',
  Philemon: 'PHM',
  Hebrews: 'HEB',
  James: 'JAS',
  '1 Peter': '1PE',
  '2 Peter': '2PE',
  '1 John': '1JN',
  '2 John': '2JN',
  '3 John': '3JN',
  Jude: 'JUD',
};

/** One stretch of verses, possibly across chapters; `from` null means whole chapters. */
export interface Passage {
  readonly code: string;
  readonly chapter: number;
  readonly from: number | null;
  readonly toChapter: number;
  readonly to: number | null;
}

/** Read a Katameros reference string into passages. Throws on a book or shape it does not know. */
export function parseReadings(value: string): Passage[] {
  const cleaned = value
    .replace(/([A-Za-z])(\d)/g, '$1 $2') // "Psalms4:6-7"
    .replace(/:\s+(?=[1-3]?\s?[A-Z])/g, ';') // "Psalms 73:23-24: Psalms 73:28"
    .replace(/\s+LXX\b/g, '');
  const out: Passage[] = [];
  for (const part of cleaned.split(';').map((piece) => piece.trim()).filter(Boolean)) {
    const match = /^(.+?)\s+(\d[\d:,\-\s]*)$/.exec(part);
    if (match === null) throw new Error(`Not a reading: "${part}" in "${value}"`);
    const code = BOOKS[match[1]!];
    if (code === undefined) throw new Error(`Unknown book "${match[1]}" in "${value}"`);
    let chapter = 0;
    for (const piece of match[2]!.replace(/-\s*$/, '').split(',').map((text) => text.trim()).filter(Boolean)) {
      const span = /^(?:(\d+):)?(\d+)(?:-(?:(\d+):)?(\d+))?$/.exec(piece);
      if (span === null) throw new Error(`Not a verse span: "${piece}" in "${value}"`);
      if (!piece.includes(':') && chapter === 0) {
        // Whole chapters: "14" or "1-14".
        const first = Number(span[2]);
        out.push({ code, chapter: first, from: null, toChapter: span[4] === undefined ? first : Number(span[4]), to: null });
        continue;
      }
      if (span[1] !== undefined) chapter = Number(span[1]);
      const from = Number(span[2]);
      const toChapter = span[3] === undefined ? chapter : Number(span[3]);
      const to = span[4] === undefined ? from : Number(span[4]);
      out.push({ code, chapter, from, toChapter, to });
    }
  }
  return out;
}
