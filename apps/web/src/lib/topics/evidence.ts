/**
 * The evidence of family 44 (how the Coptic Orthodox Church supports each point of its faith), prepared for the
 * Bible reader: each cited passage as a label and a link to its chapter (to the first verse), and the early
 * witnesses in one language. Used by `/<lang>/topics.json` and by the church-history page.
 */
import { BOOKS, DEFAULT_EDITION } from '@orthodoxia/bible';
import { COMPARE_POINTS } from '../../data/church-history/compare.ts';
import { COPTIC_EVIDENCE, EVIDENCE_FAMILY, type EvidenceEntry } from '../../data/coptic-evidence.ts';
import { biblePath, bookName, editionBooks, loadBook } from '../bible.ts';
import type { Locale } from '../../i18n/index.ts';
import { parsePassages, type PassageRange } from './reference.ts';

export interface EvidenceRef {
  readonly label: string;
  readonly href: string;
}

export interface EvidenceView {
  readonly point: string;
  readonly claim: string;
  readonly refs: readonly EvidenceRef[];
  readonly witnesses: readonly { readonly title: string; readonly when: string; readonly note?: string }[];
}

function describe(range: PassageRange, name: string): string {
  const { from, to } = range;
  if (from.verse === null) return from.chapter === to.chapter ? `${name} ${from.chapter}` : `${name} ${from.chapter}–${to.chapter}`;
  if (from.chapter === to.chapter) return from.verse === to.verse ? `${name} ${from.chapter}:${from.verse}` : `${name} ${from.chapter}:${from.verse}–${to.verse}`;
  return `${name} ${from.chapter}:${from.verse}–${to.chapter}:${to.verse}`;
}

const chaptersByEdition = new Map<string, Map<string, Set<number>>>();
function chaptersOf(edition: string): Map<string, Set<number>> {
  let known = chaptersByEdition.get(edition);
  if (known === undefined) {
    known = new Map(editionBooks(edition).map(({ info, chapters }) => [info.code, new Set(chapters)] as const));
    chaptersByEdition.set(edition, known);
  }
  return known;
}

/** The passages of a list as labelled links; a passage whose chapter the edition does not have is left out. */
export function evidenceRefs(verses: string, locale: Locale): EvidenceRef[] {
  const edition = DEFAULT_EDITION[locale];
  const available = chaptersOf(edition);
  const refs: EvidenceRef[] = [];
  for (const range of parsePassages(verses)) {
    const info = BOOKS.find((book) => book.code === range.book);
    if (info === undefined || available.get(info.code)?.has(range.from.chapter) !== true) continue;
    const hash = range.from.verse === null ? '' : `#v${range.from.verse}`;
    refs.push({ label: describe(range, bookName(info, locale)), href: `${biblePath(locale, edition, info, range.from.chapter)}${hash}` });
  }
  return refs;
}

export interface EvidencePassage extends EvidenceRef {
  /** The text of the passage, verse by verse, in the edition of the language. */
  readonly verses: readonly { readonly n: string; readonly text: string }[];
}

/** The passages of a list with their text, for the church-history popup (so the reader need not leave the page). */
export function evidencePassages(verses: string, locale: Locale): EvidencePassage[] {
  const edition = DEFAULT_EDITION[locale];
  const links = evidenceRefs(verses, locale);
  const wanted = parsePassages(verses).filter((range) => {
    const info = BOOKS.find((book) => book.code === range.book);
    return info !== undefined && chaptersOf(edition).get(info.code)?.has(range.from.chapter) === true;
  });
  return wanted.map((range, index) => {
    const book = loadBook(edition, range.book);
    const out: { n: string; text: string }[] = [];
    for (let chapter = range.from.chapter; chapter <= range.to.chapter; chapter++) {
      const data = book.chapters.find((candidate) => candidate.number === chapter);
      if (data === undefined) continue;
      const low = chapter === range.from.chapter ? (range.from.verse ?? 1) : 1;
      const high = chapter === range.to.chapter ? (range.to.verse ?? Infinity) : Infinity;
      for (const verse of data.verses) {
        const number = Number.parseInt(verse.number, 10);
        if (Number.isNaN(number) || number < low || number > high) continue;
        const text = verse.content.map((part) => part.text).join('').replace(/\s+/g, ' ').trim();
        if (text !== '') out.push({ n: range.from.chapter === range.to.chapter ? verse.number : `${chapter}:${verse.number}`, text });
      }
    }
    return { ...links[index]!, verses: out };
  });
}

export function evidenceView(entry: EvidenceEntry, locale: Locale): EvidenceView {
  return {
    point: entry.point,
    claim: entry.claim[locale],
    refs: evidenceRefs(entry.verses, locale),
    witnesses: entry.witnesses.map((witness) => ({
      title: witness.title[locale],
      when: witness.when[locale],
      ...(witness.note === undefined ? {} : { note: witness.note[locale] }),
    })),
  };
}

/** Everything the popup shows for one point: the claim, the passages with their text, and the early witnesses. */
export function evidencePopup(entry: EvidenceEntry, locale: Locale) {
  const view = evidenceView(entry, locale);
  return { point: entry.point, claim: view.claim, passages: evidencePassages(entry.verses, locale), witnesses: view.witnesses };
}

/** The evidence of a family-44 subtopic, by the English name the taxonomy gives it. */
export function evidenceForTopic(englishName: string, locale: Locale): EvidenceView | undefined {
  const point = COMPARE_POINTS.find((candidate) => candidate.label.en === englishName);
  const entry = point === undefined ? undefined : COPTIC_EVIDENCE.find((candidate) => candidate.point === point.id);
  return entry === undefined ? undefined : evidenceView(entry, locale);
}

export { EVIDENCE_FAMILY };
