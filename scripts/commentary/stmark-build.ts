/**
 * Builds the St. Mark commentary data: PDFs (data/commentary/stmark/pdf, from stmark-fetch.ts)
 * → logical text lines (cached in data/commentary/stmark/text) → letter-order repair → parsed
 * chapters and verse entries → content/commentary/stmark/<BOOK>.json (committed).
 *
 * Every book is validated against the Arabic Bible's chapter and verse counts (data/bible/build,
 * from `npm run bible`); the findings are written to content/commentary/stmark/report.json.
 */
import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { strFromU8, unzipSync } from 'fflate';
import {
  ARABIC_WORD,
  COMMENTARY_SCHEMA_VERSION,
  createLigatureRepair,
  dictionaryKey,
  learnSwappedPairs,
  parseStMarkCommentary,
  type CommentaryBook,
  type CommentaryChapter,
  type CommentaryParagraph,
  type PdfPage,
} from '../../packages/commentary/src/index.ts';
import { extractPdfLines } from './pdf-lines.ts';
import { STMARK_DOCUMENTS, type StMarkDocument } from './stmark-sources.ts';

const ROOT = resolve(import.meta.dirname, '../..');
const DATA = join(ROOT, 'data/commentary/stmark');
const CACHE = join(DATA, 'text');
const OUT = join(ROOT, 'content/commentary/stmark');
const pins = (JSON.parse(readFileSync(join(DATA, 'sources.json'), 'utf8')) as { files: { file: string; url: string; sha256: string }[] }).files;
const pinOf = (file: string) => {
  const pin = pins.find((candidate) => candidate.file === file);
  if (pin === undefined) throw new Error(`${file} is not pinned; run stmark-fetch.ts`);
  return pin;
};

// 1. Text of every document (cached by checksum).
mkdirSync(CACHE, { recursive: true });
const texts = new Map<string, PdfPage[]>();
for (const document of STMARK_DOCUMENTS) {
  if (document.textLayer === false) continue;
  const { sha256 } = pinOf(document.file);
  const cachePath = join(CACHE, `${document.file}.${sha256.slice(0, 12)}.json`);
  if (!existsSync(cachePath)) {
    process.stdout.write(`extracting ${document.file}… `);
    writeFileSync(cachePath, JSON.stringify(await extractPdfLines(join(DATA, 'pdf', document.file))));
    console.log('done');
  }
  texts.set(document.file, JSON.parse(readFileSync(cachePath, 'utf8')) as PdfPage[]);
}

// 2. Dictionary (Van Dyck + documents without scrambled fonts) and the scrambled pairs.
const frequencies = new Map<string, number>();
const count = (word: string) => {
  const key = dictionaryKey(word.replace(/ى([ء-ي])/g, '$1ي'));
  frequencies.set(key, (frequencies.get(key) ?? 0) + 1);
};
const bibleZip = unzipSync(new Uint8Array(readFileSync(join(ROOT, 'data/bible/raw/ebible/arb-vd_usfm.zip'))));
for (const data of Object.values(bibleZip)) strFromU8(data).match(ARABIC_WORD)?.forEach(count);
const allWords = (pages: PdfPage[]) => pages.flatMap((page) => page.lines.flatMap((line) => line.match(ARABIC_WORD) ?? []));
for (const document of STMARK_DOCUMENTS) {
  if (!document.scrambledLigatures && texts.has(document.file)) allWords(texts.get(document.file)!).forEach(count);
}
const frequency = (key: string) => frequencies.get(key) ?? 0;
const scrambledWords = STMARK_DOCUMENTS.filter((document) => document.scrambledLigatures).flatMap((document) => allWords(texts.get(document.file)!));
const swappedPairs = learnSwappedPairs(scrambledWords, frequency, 6);
const repair = createLigatureRepair(frequency, swappedPairs);
const PREFIXES = ['', 'وال', 'بال', 'فال', 'كال', 'لل', 'ال', 'و', 'ف', 'ب', 'ل'];
const stemFrequency = (word: string) => {
  const key = dictionaryKey(word);
  return Math.max(...PREFIXES.filter((prefix) => key.startsWith(prefix)).map((prefix) => frequency(key.slice(prefix.length))));
};
console.log(`dictionary: ${frequencies.size} words; scrambled pairs learned: ${[...swappedPairs].join(' ')}`);

// 3. Parse, validate and write each book.
const manifest = JSON.parse(readFileSync(join(ROOT, 'data/bible/build/manifest.json'), 'utf8')) as {
  editions: Record<string, { books: { code: string; chapters: number[] }[] }>;
};
const verseCounts = (book: string): Map<number, number> => {
  const file = JSON.parse(readFileSync(join(ROOT, 'data/bible/build/svd', `${book}.json`), 'utf8')) as {
    chapters: { number: number; verses: { number: string }[] }[];
  };
  return new Map(file.chapters.map((chapter) => [chapter.number, Math.max(...chapter.verses.map((verse) => Number.parseInt(verse.number, 10)))]));
};

rmSync(OUT, { recursive: true, force: true });
mkdirSync(OUT, { recursive: true });
const report: Record<string, unknown> = {};
const modes: Record<string, string> = {};
const books = [...new Set(STMARK_DOCUMENTS.map((document) => document.book))];
for (const book of books) {
  const documents = STMARK_DOCUMENTS.filter((document) => document.book === book);
  const expected = verseCounts(book);
  if (documents.every((document) => document.textLayer === false)) {
    const output: CommentaryBook = {
      schemaVersion: COMMENTARY_SCHEMA_VERSION,
      source: 'stmark',
      book,
      language: 'ar',
      documents: documents.map((document) => ({ ...urlAndHash(document), chapters: [1, Math.max(...expected.keys())] as const })),
      extraction: 'pdf-link',
      intro: [],
      chapters: [],
    };
    writeFileSync(join(OUT, `${book}.json`), `${JSON.stringify(output)}\n`);
    report[book] = { extraction: 'pdf-link', note: 'no extractable text layer: linked to the PDF' };
    console.log(`○ ${book}: PDF link only (no text layer)`);
    continue;
  }

  const intro: CommentaryParagraph[] = [];
  const chapters: CommentaryChapter[] = [];
  const outputDocuments: { url: string; sha256: string; chapters: readonly [number, number] }[] = [];
  for (const document of documents) {
    const pages = texts.get(document.file)!.map((page) => ({
      page: page.page,
      lines: page.lines.map((line) => line.replace(ARABIC_WORD, repair)),
    }));
    // Parse both ways and keep the reading that agrees best with the Bible's chapters and verses.
    const candidates = (['headings', 'restarts'] as const).map((mode) => {
      const result = parseStMarkCommentary(pages, document.firstChapter ?? 1, mode);
      let score = 0;
      for (const chapter of result.chapters) {
        const verses = expected.get(chapter.chapter);
        if (verses === undefined) {
          score -= 200;
          continue;
        }
        const covered = new Set<number>();
        for (const entry of chapter.entries) {
          if (entry.verses[1] > verses) score -= 50;
          for (let verse = entry.verses[0]; verse <= Math.min(entry.verses[1], verses); verse++) covered.add(verse);
        }
        score += covered.size;
      }
      const duplicates = result.chapters.length - new Set(result.chapters.map((chapter) => chapter.chapter)).size;
      return { mode, result, score: score - 200 * duplicates };
    });
    candidates.sort((a, b) => b.score - a.score);
    const parsed = candidates[0]!.result;
    modes[document.file] = candidates[0]!.mode;
    if (chapters.length === 0) intro.push(...parsed.intro);
    chapters.push(...parsed.chapters);
    const numbers = parsed.chapters.map((chapter) => chapter.chapter);
    outputDocuments.push({ ...urlAndHash(document), chapters: [Math.min(...numbers), Math.max(...numbers)] });
  }

  // Validation against the Bible: chapters that do not exist, repeated chapters and entries past a
  // chapter's last verse are dropped (never shown under the wrong verse) and reported.
  const problems: string[] = [];
  const seen = new Set<number>();
  const valid: CommentaryChapter[] = [];
  for (const chapter of chapters) {
    const verses = expected.get(chapter.chapter);
    if (verses === undefined) {
      problems.push(`chapter ${chapter.chapter} does not exist (${chapter.entries.length} entries dropped)`);
      continue;
    }
    if (seen.has(chapter.chapter)) {
      problems.push(`chapter ${chapter.chapter} found twice (${chapter.entries.length} entries dropped)`);
      continue;
    }
    seen.add(chapter.chapter);
    const beyond = chapter.entries.filter((entry) => entry.verses[0] > verses);
    if (beyond.length > 0) problems.push(`chapter ${chapter.chapter}: ${beyond.length} entr(ies) past verse ${verses} dropped`);
    valid.push({
      ...chapter,
      entries: chapter.entries
        .filter((entry) => entry.verses[0] <= verses)
        .map((entry) => ({ ...entry, verses: [entry.verses[0], Math.min(entry.verses[1], verses)] as const })),
    });
  }
  valid.sort((a, b) => a.chapter - b.chapter);

  // Content check: an entry usually opens with the verse's own words before a colon ("بولس أسير
  // يسوع المسيح :"). Those words should occur in the Van Dyck text of the entry's verses; a chapter
  // whose entries match a neighboring chapter better is misaligned.
  const bibleText = verseTexts(book);
  const keyOf = (entry: CommentaryChapter['entries'][number]) => {
    const head = entry.paragraphs[0]?.text.split(/[:：]/)[0] ?? '';
    const words = normalizeForMatch(head).split(' ').filter((word) => word.length > 2);
    return words.length >= 2 && words.length <= 8 ? words : null;
  };
  const matches = (words: string[], chapterNumber: number, [start, end]: readonly [number, number]) => {
    const verses = bibleText.get(chapterNumber);
    if (verses === undefined) return false;
    const text = Array.from({ length: end - start + 1 }, (_, offset) => verses.get(start + offset) ?? '').join(' ');
    return words.filter((word) => text.includes(word)).length >= Math.ceil(words.length * 0.6);
  };
  let checked = 0;
  let confirmed = 0;
  for (const chapter of valid) {
    let here = 0;
    let before = 0;
    let after = 0;
    let keyed = 0;
    for (const entry of chapter.entries) {
      const words = keyOf(entry);
      if (words === null) continue;
      keyed++;
      if (matches(words, chapter.chapter, entry.verses)) here++;
      if (matches(words, chapter.chapter - 1, entry.verses)) before++;
      if (matches(words, chapter.chapter + 1, entry.verses)) after++;
    }
    checked += keyed;
    confirmed += here;
    if (keyed >= 4 && (before > here * 1.5 + 1 || after > here * 1.5 + 1)) {
      problems.push(`chapter ${chapter.chapter}: content matches chapter ${before > after ? chapter.chapter - 1 : chapter.chapter + 1} better (${here}/${keyed} here)`);
    }
  }
  const alignment = checked === 0 ? null : confirmed / checked;

  // Text quality: share of words the dictionary does not attest, even through a known stem.
  let wordsTotal = 0;
  let wordsUnknown = 0;
  for (const chapter of valid) {
    for (const entry of chapter.entries) {
      for (const paragraph of entry.paragraphs) {
        for (const word of paragraph.text.match(ARABIC_WORD) ?? []) {
          wordsTotal++;
          if (repair(word) === word && stemFrequency(word) === 0) wordsUnknown++;
        }
      }
    }
  }
  const covered = valid.reduce((sum, chapter) => {
    const set = new Set<number>();
    for (const entry of chapter.entries) for (let verse = entry.verses[0]; verse <= entry.verses[1]; verse++) set.add(verse);
    return sum + set.size;
  }, 0);
  const totalVerses = [...expected.values()].reduce((sum, verses) => sum + verses, 0);
  const scrambled = documents.some((document) => document.scrambledLigatures);
  const output: CommentaryBook = {
    schemaVersion: COMMENTARY_SCHEMA_VERSION,
    source: 'stmark',
    book,
    language: 'ar',
    documents: outputDocuments,
    extraction: scrambled ? 'pdf-text-repaired' : 'pdf-text',
    intro,
    chapters: valid,
  };
  writeFileSync(join(OUT, `${book}.json`), `${JSON.stringify(output)}\n`);
  const entries = valid.reduce((sum, chapter) => sum + chapter.entries.length, 0);
  report[book] = {
    extraction: output.extraction,
    chapters: `${valid.length}/${expected.size}`,
    entries,
    verseCoverage: `${((covered / totalVerses) * 100).toFixed(1)}%`,
    chapterDetection: documents.map((document) => modes[document.file]),
    unattestedWords: wordsTotal === 0 ? null : `${((wordsUnknown / wordsTotal) * 100).toFixed(1)}%`,
    contentAlignment: alignment === null ? null : `${(alignment * 100).toFixed(0)}% of keyed entries match their verse text`,
    problems,
  };
  const flag = valid.length === expected.size && problems.length === 0 ? '✓' : '!';
  console.log(`${flag} ${book}: ${valid.length}/${expected.size} chapters, ${entries} entries, ${((covered / totalVerses) * 100).toFixed(0)}% of verses, aligned ${alignment === null ? '–' : (alignment * 100).toFixed(0) + '%'}, unattested ${wordsTotal === 0 ? '–' : ((wordsUnknown / wordsTotal) * 100).toFixed(1) + '%'}${problems.length ? ` — ${problems.slice(0, 3).join('; ')}` : ''}`);
}
writeFileSync(join(OUT, 'report.json'), `${JSON.stringify({ generatedFrom: 'data/commentary/stmark/sources.json', swappedPairs: [...swappedPairs], books: report }, null, 2)}\n`);

/** Arabic text normalized for loose matching: no diacritics, unified letter variants. */
function normalizeForMatch(text: string): string {
  return text
    .replace(/[ً-ْٰـ]/g, '')
    .replace(/[أإآٱ]/g, 'ا')
    .replace(/ى/g, 'ي')
    .replace(/ة/g, 'ه')
    .replace(/[^ء-ي\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/** Van Dyck verse texts of a book, normalized: chapter → verse → text. */
function verseTexts(book: string): Map<number, Map<number, string>> {
  const file = JSON.parse(readFileSync(join(ROOT, 'data/bible/build/svd', `${book}.json`), 'utf8')) as {
    chapters: { number: number; verses: { number: string; content: { text: string }[] }[] }[];
  };
  return new Map(
    file.chapters.map((chapter) => [
      chapter.number,
      new Map(chapter.verses.map((verse) => [Number.parseInt(verse.number, 10), normalizeForMatch(verse.content.map((inline) => inline.text).join(''))])),
    ]),
  );
}

function urlAndHash(document: StMarkDocument) {
  const { url, sha256 } = pinOf(document.file);
  return { url, sha256 };
}
void manifest;
