import { unzipSync, strFromU8 } from 'fflate';
import { isBookId, type BookId } from '../../../src/core/bible/books.ts';
import { toOsisId, type VerseIndex } from '../../../src/core/bible/verse-ref.ts';
import { CANONICAL_VERSIFICATION } from '../../../src/core/bible/versification.ts';
import {
  DATASET_SCHEMA_VERSION,
  type DatasetProvenance,
  type ImportNotice,
  type TranslationTextFile,
} from '../../../src/core/datasets/formats.ts';
import { stripByteOrderMark } from '../lib/files.ts';
import { createNotice } from '../lib/notices.ts';

/**
 * Importer for the Smith–Van Dyck Arabic Bible (1865, public domain), as eBible.org's USFM archive
 * (https://ebible.org/Scriptures/arb-vd_usfm.zip): one `.usfm` file per book.
 *
 * The text uses simple USFM: `\c` chapters, `\v` verses, `\p` paragraphs, `\s1` headings, `\d`
 * psalm titles (unnumbered, as in the KJV) and `\qa` acrostic letters. Only verse text is kept.
 * Its numbering is the KJV's except in a few places; a verse the KJV numbering does not have is
 * appended to the verse before it, and a KJV verse without text stays empty, both reported as
 * notices.
 */

/** USFM book codes → the OSIS IDs the app uses. */
const USFM_TO_OSIS: Readonly<Record<string, string>> = {
  GEN: 'Gen',
  EXO: 'Exod',
  LEV: 'Lev',
  NUM: 'Num',
  DEU: 'Deut',
  JOS: 'Josh',
  JDG: 'Judg',
  RUT: 'Ruth',
  '1SA': '1Sam',
  '2SA': '2Sam',
  '1KI': '1Kgs',
  '2KI': '2Kgs',
  '1CH': '1Chr',
  '2CH': '2Chr',
  EZR: 'Ezra',
  NEH: 'Neh',
  EST: 'Esth',
  JOB: 'Job',
  PSA: 'Ps',
  PRO: 'Prov',
  ECC: 'Eccl',
  SNG: 'Song',
  ISA: 'Isa',
  JER: 'Jer',
  LAM: 'Lam',
  EZK: 'Ezek',
  DAN: 'Dan',
  HOS: 'Hos',
  JOL: 'Joel',
  AMO: 'Amos',
  OBA: 'Obad',
  JON: 'Jonah',
  MIC: 'Mic',
  NAM: 'Nah',
  HAB: 'Hab',
  ZEP: 'Zeph',
  HAG: 'Hag',
  ZEC: 'Zech',
  MAL: 'Mal',
  MAT: 'Matt',
  MRK: 'Mark',
  LUK: 'Luke',
  JHN: 'John',
  ACT: 'Acts',
  ROM: 'Rom',
  '1CO': '1Cor',
  '2CO': '2Cor',
  GAL: 'Gal',
  EPH: 'Eph',
  PHP: 'Phil',
  COL: 'Col',
  '1TH': '1Thess',
  '2TH': '2Thess',
  '1TI': '1Tim',
  '2TI': '2Tim',
  TIT: 'Titus',
  PHM: 'Phlm',
  HEB: 'Heb',
  JAS: 'Jas',
  '1PE': '1Pet',
  '2PE': '2Pet',
  '1JN': '1John',
  '2JN': '2John',
  '3JN': '3John',
  JUD: 'Jude',
  REV: 'Rev',
};

/** Markers whose whole line is not verse text. */
const NON_TEXT_LINE = /^\\(?:id|ide|h|toc\d|mt\d?|cl|s\d?|d|qa|ms\d?|r|rem)\b/;

interface ParsedVerse {
  readonly book: BookId;
  readonly chapter: number;
  readonly verse: number;
  readonly text: string;
}

/** Parses one USFM book into its verses (exported for tests). */
export function parseVanDyckBook(usfm: string): ParsedVerse[] {
  const text = stripByteOrderMark(usfm).replace(/\r\n?/g, '\n');
  const code = /^\\id\s+(\S+)/m.exec(text)?.[1]?.toUpperCase();
  const osis = code === undefined ? undefined : USFM_TO_OSIS[code];
  if (osis === undefined || !isBookId(osis)) {
    throw new Error(`Van Dyck: unknown book "${String(code)}".`);
  }
  const verses: { book: BookId; chapter: number; verse: number; text: string }[] = [];
  let chapter = 0;
  for (const rawLine of text.split('\n')) {
    const line = rawLine.trim();
    if (line === '' || NON_TEXT_LINE.test(line)) continue;
    const chapterMatch = /^\\c\s+(\d+)/.exec(line);
    if (chapterMatch) {
      chapter = Number(chapterMatch[1]);
      continue;
    }
    // A line may hold one or more verses, and paragraph/poetry markers before them.
    const parts = line.split(/\\v\s+/);
    const leading = parts.shift() ?? '';
    const leadingText = clean(leading);
    const last = verses.at(-1);
    if (leadingText !== '' && last !== undefined) {
      last.text = `${last.text} ${leadingText}`.trim();
    }
    for (const part of parts) {
      const match = /^(\d+)\s*(.*)$/s.exec(part);
      if (!match)
        throw new Error(`Van Dyck ${osis} ${chapter}: malformed verse "${part.slice(0, 40)}".`);
      verses.push({ book: osis, chapter, verse: Number(match[1]), text: clean(match[2] ?? '') });
    }
  }
  return verses;
}

/** Removes remaining USFM markers and collapses whitespace. */
function clean(text: string): string {
  return text
    .replace(/\\f\s.*?\\f\*/g, '')
    .replace(/\\\+?[a-z]+\d*\*?/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

export function importVanDyckText(
  archive: Uint8Array,
  provenance: DatasetProvenance,
): TranslationTextFile {
  const versification = CANONICAL_VERSIFICATION;
  const entries = unzipSync(archive, { filter: (file) => file.name.endsWith('.usfm') });
  const verses = new Array<string | undefined>(versification.verseCount).fill(undefined);
  const merged: string[] = [];

  const parsedBooks = Object.values(entries).map((data) => parseVanDyckBook(strFromU8(data)));
  for (const book of parsedBooks) {
    let previous: VerseIndex | undefined;
    for (const verse of book) {
      const ref = { book: verse.book, chapter: verse.chapter, verse: verse.verse };
      const index = versification.indexOf(ref);
      if (index === undefined) {
        // Numbered differently from the KJV: keep the text with the verse before it.
        if (previous === undefined)
          throw new Error(`Van Dyck: ${toOsisId(ref)} has no preceding verse.`);
        verses[previous] = `${verses[previous] ?? ''} ${verse.text}`.trim();
        merged.push(toOsisId(ref));
        continue;
      }
      if (verses[index] !== undefined)
        throw new Error(`Van Dyck: duplicate verse ${toOsisId(ref)}.`);
      verses[index] = verse.text;
      previous = index;
    }
  }

  const empty: string[] = [];
  const complete = verses.map((text, index) => {
    if (text === undefined || text === '') empty.push(toOsisId(versification.refAt(index)));
    return text ?? '';
  });
  if (empty.length > 20) {
    throw new Error(
      `Van Dyck: ${empty.length} verses have no text, e.g. ${empty.slice(0, 5).join(', ')}.`,
    );
  }

  const notices: ImportNotice[] = [];
  if (merged.length > 0) {
    notices.push(
      createNotice(
        'info',
        'Verses numbered beyond the KJV versification, appended to the verse before them.',
        merged,
      ),
    );
  }
  if (empty.length > 0) {
    notices.push(createNotice('warning', 'KJV verses without text in the Van Dyck.', empty));
  }
  return {
    format: 'translation-text',
    schemaVersion: DATASET_SCHEMA_VERSION,
    versification: versification.id,
    provenance,
    notices,
    translationId: 'svd',
    verses: complete,
  };
}
