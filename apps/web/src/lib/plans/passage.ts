/**
 * Passages for the reading plans: references like `MRK.1.14-20`, the verses they cover in the plans' editions,
 * their labels and their addresses in the Bible reader.
 */
import { bookByCode } from '@orthodoxia/bible';
import { biblePath, loadBook } from '../bible.ts';
import type { Locale } from '../../i18n/index.ts';

/**
 * The text the plans show, one edition per language. The KJV is the owner's choice for now (2026-11-21); a modern
 * English text can replace it here without touching the blocks.
 */
export const PLAN_EDITION = { en: 'kjv', ar: 'svd' } as const satisfies Record<Locale, string>;

export interface ParsedRef {
  readonly code: string;
  readonly chapter: number;
  readonly from: number | null;
  readonly to: number | null;
}

export function parseRef(ref: string): ParsedRef {
  const match = /^([1-4A-Z]{3})\.(\d+)(?:\.(\d+)(?:-(\d+))?)?$/.exec(ref);
  if (match === null) throw new Error(`Not a passage reference: ${ref}`);
  const from = match[3] === undefined ? null : Number(match[3]);
  return { code: match[1]!, chapter: Number(match[2]), from, to: match[4] === undefined ? from : Number(match[4]) };
}

export interface PassageVerse {
  readonly n: string;
  readonly text: string;
}

/** The verses of a passage in the language's plan edition. Throws when the passage is not there. */
export function passageVerses(ref: string, locale: Locale): PassageVerse[] {
  const { code, chapter, from, to } = parseRef(ref);
  const book = loadBook(PLAN_EDITION[locale], code);
  const found = book.chapters.find((candidate) => candidate.number === chapter);
  if (found === undefined) throw new Error(`${ref}: chapter ${chapter} is not in ${PLAN_EDITION[locale]}`);
  const verses = found.verses.filter((verse) => {
    const n = Number.parseInt(verse.number, 10);
    return from === null || (n >= from && n <= (to ?? from));
  });
  const last = verses.at(-1);
  if (verses.length === 0 || (to !== null && last !== undefined && Number.parseInt(last.number, 10) < to)) {
    throw new Error(`${ref}: the verses are not all in ${PLAN_EDITION[locale]}`);
  }
  return verses.map((verse) => ({ n: verse.number, text: verse.content.map((inline) => inline.text).join('').trim() }));
}

const numbers = { en: new Intl.NumberFormat('en-US', { useGrouping: false }), ar: new Intl.NumberFormat('ar-EG', { useGrouping: false }) };

/** "Mark 1:14–20", "مرقس ١: ١٤–٢٠". */
export function refLabel(ref: string, locale: Locale): string {
  const { code, chapter, from, to } = parseRef(ref);
  const info = bookByCode(code);
  if (info === undefined) throw new Error(`${ref}: unknown book`);
  const n = (value: number) => numbers[locale].format(value);
  const name = locale === 'ar' ? info.ar : info.en;
  if (from === null) return `${name} ${n(chapter)}`;
  const verses = to === null || to === from ? n(from) : `${n(from)}–${n(to)}`;
  return locale === 'ar' ? `${name} ${n(chapter)}: ${verses}` : `${name} ${chapter}:${verses}`;
}

/** The passage in the Bible reader; the verse anchor opens that verse's commentary. */
export function refHref(ref: string, locale: Locale): string {
  const { code, chapter, from } = parseRef(ref);
  const info = bookByCode(code);
  if (info === undefined) throw new Error(`${ref}: unknown book`);
  return `${biblePath(locale, PLAN_EDITION[locale], info, chapter)}${from === null ? '' : `#v${from}`}`;
}
