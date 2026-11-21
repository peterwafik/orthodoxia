/**
 * The Synaxarium at build time: each Coptic day's commemorations with their full stories, in English and Arabic
 * (data/synaxarium/synaxarium.json, collected by scripts/synaxarium/fetch.ts), and the short summaries written for
 * this site (content/synaxarium/<month>.yaml), which are drafts until reviewed.
 */
import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { parse } from 'yaml';
import { SynaxariumSummaries } from '@orthodoxia/content-schema';
import type { Locale } from '../../i18n/index.ts';

interface RawStory {
  readonly title: string;
  readonly paragraphs: readonly string[];
}
interface RawDay {
  readonly month: number;
  readonly day: number;
  readonly en: readonly RawStory[];
  readonly ar: readonly RawStory[];
}

export interface Commemoration {
  readonly title: string;
  /** The full story, paragraph by paragraph (empty when the Synaxarium gives only the name). */
  readonly paragraphs: readonly string[];
  readonly summary: string | null;
}

export interface SynaxariumDay {
  readonly month: number;
  readonly day: number;
  readonly items: readonly Commemoration[];
  /** True while any summary on the day is an unreviewed draft. */
  readonly draft: boolean;
}

const find = (path: string): string => {
  const candidates = [resolve(process.cwd(), '../..', path), resolve(process.cwd(), path), resolve(import.meta.dirname, '../../../../..', path)];
  const found = candidates.find((candidate) => existsSync(candidate));
  if (found === undefined) throw new Error(`${path} not found (run node scripts/synaxarium/fetch.ts)`);
  return found;
};

let raw: RawDay[] | null = null;
function rawDays(): RawDay[] {
  raw ??= (JSON.parse(readFileSync(find('data/synaxarium/synaxarium.json'), 'utf8')) as { days: RawDay[] }).days;
  return raw;
}

type Summaries = SynaxariumSummaries;

/** The Arabic pages' note for a commemoration with no story ("no information"). */
const NO_TEXT = /^لا (يوجد|توجد) معلومات\.?$/;

const summaryFiles = import.meta.glob<string>('../../../../../content/synaxarium/*.yaml', { query: '?raw', import: 'default', eager: true });
const SUMMARIES: ReadonlyMap<number, Summaries> = new Map(
  Object.entries(summaryFiles).map(([path, text]) => {
    const result = SynaxariumSummaries.safeParse(parse(text));
    if (!result.success) throw new Error(`Invalid ${path}: ${result.error.message}`);
    return [result.data.month, result.data];
  }),
);

export function synaxariumDay(month: number, day: number, locale: Locale): SynaxariumDay {
  const record = rawDays().find((entry) => entry.month === month && entry.day === day);
  const side = record?.[locale] ?? [];
  const file = SUMMARIES.get(month);
  const summaries = file?.days[String(day)]?.[locale] ?? [];
  const items = side.map((item, index) => ({ title: item.title, paragraphs: item.paragraphs.filter((text) => !NO_TEXT.test(text)), summary: summaries[index] ?? null }));
  const hasSummary = items.some((item) => item.summary !== null);
  return {
    month,
    day,
    items,
    draft: hasSummary && file !== undefined && file.review.status !== 'reviewed' && file.review.status !== 'published',
  };
}

/** All raw days, for the tests. */
export const allSynaxariumDays = (): readonly RawDay[] => rawDays();

/** Summary lists that do not line up with the collected names (one summary per commemoration, per language). */
export function summaryProblems(): string[] {
  const problems: string[] = [];
  for (const [month, file] of SUMMARIES) {
    for (const [day, languages] of Object.entries(file.days)) {
      const record = rawDays().find((entry) => entry.month === month && entry.day === Number(day));
      for (const locale of ['en', 'ar'] as const) {
        const list = languages[locale];
        if (list === undefined) continue;
        const expected = record?.[locale].length ?? 0;
        if (list.length !== expected) problems.push(`${month}/${day} ${locale}: ${list.length} summaries for ${expected} commemorations`);
      }
    }
  }
  return problems;
}
