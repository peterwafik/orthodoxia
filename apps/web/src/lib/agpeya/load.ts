/**
 * The Agpeya texts (data/agpeya/<hour>.json, made by scripts/agpeya from the Coptic–English–Arabic Agpeya PDF and then
 * proofread). Pages read them while being pre-rendered; nothing is fetched by the browser.
 */
import { existsSync, readFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { BOOKS, DEFAULT_EDITION, lxxToHebrew } from '@orthodoxia/bible';
import { biblePath, bookName } from '../bible.ts';
import { evidenceRefs } from '../topics/evidence.ts';
import { localePath, type Locale } from '../../i18n/index.ts';

export type Kind = 'opening' | 'prayer' | 'psalm' | 'epistle' | 'gospel' | 'creed' | 'absolution' | 'hymn' | 'table';
export interface Bi {
  en: string;
  ar: string;
}
export interface Section {
  id: string;
  kind: Kind;
  title: Bi;
  subtitle?: Bi;
  psalm?: number;
  ref?: string;
  shared?: true;
  table?: { hour: string; items: { psalm: number; en: string; ar: string }[] }[];
  text: { en: string[]; ar: string[]; cop: string[] };
}
export interface Hour {
  id: string;
  order: number;
  title: Bi;
  time: Bi;
  /** The hour of the day it is prayed at (24 = midnight). */
  at: number;
  about: Bi;
  sections: Section[];
}

export const HOUR_IDS = ['prime', 'terce', 'sext', 'none', 'vespers', 'compline', 'veil', 'midnight'] as const;

const DIRS = [resolve(process.cwd(), '../../data/agpeya'), resolve(process.cwd(), 'data/agpeya'), resolve(import.meta.dirname, '../../../../../data/agpeya')];
const DATA = DIRS.find((dir) => existsSync(join(dir, 'prime.json'))) ?? DIRS[0]!;

let cache: Hour[] | undefined;
export function hours(): Hour[] {
  cache ??= HOUR_IDS.map((id) => JSON.parse(readFileSync(join(DATA, `${id}.json`), 'utf8')) as Hour);
  return cache;
}

export const agpeyaPath = (locale: Locale, hour?: string): string => localePath(locale, hour === undefined ? 'agpeya' : `agpeya/${hour}`);

/** A psalm of the Agpeya (the Septuagint's numbering) as a link into the Bible reader (the Hebrew numbering of the KJV and the Van Dyck). */
export function psalmLink(locale: Locale, lxx: number): { label: string; href: string } | undefined {
  const hebrew = lxxToHebrew(lxx)[0];
  const book = BOOKS.find((b) => b.code === 'PSA');
  if (hebrew === undefined || book === undefined) return undefined;
  return { label: `${bookName(book, locale)} ${hebrew}`, href: biblePath(locale, DEFAULT_EDITION[locale], book, hebrew) };
}

export const readingLinks = (ref: string, locale: Locale): { l: string; h: string }[] => evidenceRefs(ref, locale).map(({ label, href }) => ({ l: label, h: href }));

/** The prayers said at every hour, printed once with Prime: what the other hours point back to. */
export const sharedSections = (): Section[] => (hours()[0] as Hour).sections.filter((section) => section.shared === true);
