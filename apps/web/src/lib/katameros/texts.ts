/**
 * The Liturgy's readings of each Katameros entry, in full, in the site's Bible editions (KJV in English, Van Dyck in
 * Arabic, as for the reading plans). Built into one small file per entry (pages/[lang]/holy-mass/readings/[key].json).
 */
import { bookByCode } from '@orthodoxia/bible';
import dayReadings from '../../../../../data/katameros/dayReadings.json';
import holyFiftyReadings from '../../../../../data/katameros/holyFiftyReadings.json';
import jonahReadings from '../../../../../data/katameros/jonahReadings.json';
import lentReadings from '../../../../../data/katameros/lentReadings.json';
import sundayReadings from '../../../../../data/katameros/sundayReadings.json';
import uniqueReadings from '../../../../../data/katameros/uniqueReadings.json';
import { loadBook } from '../bible.ts';
import { PLAN_EDITION } from '../plans/passage.ts';
import type { Locale } from '../../i18n/index.ts';
import { parseReadings, type Passage } from './refs.ts';

import { LITURGY_SLOTS, type Slot } from './slots.ts';

export { LITURGY_SLOTS };

type Record_ = Partial<Record<string, string | number>>;

/** Every entry of the Katameros by its file name: `a<id>` (by date), `s<month>-<n>` (Sundays), `e<days from Pascha>`. */
export function allEntries(): Map<string, Record_> {
  const entries = new Map<string, Record_>();
  const used = new Set(dayReadings.flatMap((month) => month.readings));
  for (const reading of uniqueReadings) if (used.has(reading.id)) entries.set(`a${reading.id}`, reading);
  for (const [key, entry] of Object.entries(sundayReadings)) entries.set(`s${key.replace(':', '-')}`, entry);
  for (const table of [jonahReadings, lentReadings, holyFiftyReadings]) {
    for (const [key, entry] of Object.entries(table)) entries.set(`e${key}`, entry);
  }
  return entries;
}

export interface ReadingPart {
  readonly label: string;
  readonly verses: readonly { readonly n: string; readonly text: string }[];
}
export interface Reading {
  readonly label: string;
  readonly parts: readonly ReadingPart[];
}
export type EntryTexts = Partial<Record<Slot, Reading>>;

const numbers = { en: new Intl.NumberFormat('en-US', { useGrouping: false }), ar: new Intl.NumberFormat('ar-EG', { useGrouping: false }) };

function passageLabel(passage: Passage, locale: Locale, withBook: boolean): string {
  const info = bookByCode(passage.code);
  if (info === undefined) throw new Error(`unknown book ${passage.code}`);
  const n = (value: number) => numbers[locale].format(value);
  const sep = locale === 'ar' ? ': ' : ':';
  let span: string;
  if (passage.from === null) span = passage.toChapter === passage.chapter ? n(passage.chapter) : `${n(passage.chapter)}–${n(passage.toChapter)}`;
  else if (passage.toChapter !== passage.chapter) span = `${n(passage.chapter)}${sep}${n(passage.from)}–${n(passage.toChapter)}${sep}${n(passage.to!)}`;
  else span = `${n(passage.chapter)}${sep}${n(passage.from)}${passage.to !== passage.from ? `–${n(passage.to!)}` : ''}`;
  return withBook ? `${locale === 'ar' ? info.ar : info.en} ${span}` : span;
}

function passageVerses(passage: Passage, locale: Locale): { n: string; text: string }[] {
  const book = loadBook(PLAN_EDITION[locale], passage.code);
  const out: { n: string; text: string }[] = [];
  for (let chapter = passage.chapter; chapter <= passage.toChapter; chapter += 1) {
    const found = book.chapters.find((candidate) => candidate.number === chapter);
    if (found === undefined) throw new Error(`${passage.code} ${chapter} is not in ${PLAN_EDITION[locale]}`);
    const first = passage.from === null || chapter > passage.chapter ? 1 : passage.from;
    const last = passage.to === null || chapter < passage.toChapter ? Infinity : passage.to;
    const verses = found.verses.filter((verse) => {
      const n = Number.parseInt(verse.number, 10);
      return n >= first && n <= last;
    });
    if (verses.length === 0) throw new Error(`${passage.code} ${chapter}:${first}-${last} is not in ${PLAN_EDITION[locale]}`);
    const multi = passage.toChapter !== passage.chapter;
    for (const verse of verses) {
      const n = numbers[locale].format(Number.parseInt(verse.number, 10));
      out.push({ n: multi && verse === verses[0] ? `${numbers[locale].format(chapter)}${locale === 'ar' ? ': ' : ':'}${n}` : n, text: verse.content.map((inline) => inline.text).join('').trim() });
    }
  }
  return out;
}

/** The full texts of the Liturgy's readings of one entry, in one language. */
export function entryTexts(entry: Record_, locale: Locale): EntryTexts {
  const out: EntryTexts = {};
  for (const { slot } of LITURGY_SLOTS) {
    const value = entry[slot];
    if (typeof value !== 'string' || value.trim() === '') continue;
    const passages = parseReadings(value);
    // Verses from the same chapter read one after another make one part: "Psalms 104:16, 10".
    const parts: { label: string; verses: { n: string; text: string }[] }[] = [];
    passages.forEach((passage, i) => {
      const previous = passages[i - 1];
      const verses = passageVerses(passage, locale);
      const sameChapter =
        previous !== undefined && previous.code === passage.code && previous.toChapter === passage.chapter && passage.toChapter === passage.chapter && passage.from !== null;
      if (sameChapter && parts.length > 0) {
        const last = parts.at(-1)!;
        const span = passageLabel(passage, locale, false).split(locale === 'ar' ? ': ' : ':')[1]!;
        last.label += `${locale === 'ar' ? '، ' : ', '}${span}`;
        last.verses.push(...verses);
        return;
      }
      parts.push({ label: passageLabel(passage, locale, i === 0 || passage.code !== previous!.code), verses });
    });
    out[slot] = { label: parts.map((part) => part.label).join(locale === 'ar' ? '؛ ' : '; '), parts };
  }
  return out;
}
