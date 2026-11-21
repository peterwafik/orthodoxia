/**
 * The reading plans' content (content/plans/), parsed and validated at build time, and the checks a schema alone
 * cannot make: every block, word and source exists, every passage is in both editions, and every link leads to a
 * real place, person or question.
 */
import { ChurchYearFile, PlanBlock, WordsFile, type Plan, type PlanWord, type SeasonId } from '@orthodoxia/content-schema';
import { parse } from 'yaml';
import { PLACE_BY_ID } from '../../data/bible-atlas/places.ts';
import { QUESTIONS } from '../../data/apologetics/questions.ts';
import { CORE_BY_KEY } from '../../data/bible-history/index.ts';
import { loadPeople } from '../bible-history/payload.ts';
import { SOURCES } from '../sources.ts';
import { parseRef, passageVerses } from './passage.ts';
import { LIVE_PLANS, PLANS, planById } from './catalog.ts';

export { LIVE_PLANS, PLANS, planById };
import type { Locale } from '../../i18n/index.ts';

const raw = (files: Record<string, string>, name: string): string => {
  const entry = Object.entries(files).find(([path]) => path.endsWith(`/${name}`));
  if (entry === undefined) throw new Error(`content/plans/${name} is missing`);
  return entry[1];
};
const top = import.meta.glob<string>('../../../../../content/plans/*.yaml', { query: '?raw', import: 'default', eager: true });
const blockFiles = import.meta.glob<string>('../../../../../content/plans/blocks/*.yaml', { query: '?raw', import: 'default', eager: true });

function parsed<T>(schema: { safeParse(value: unknown): { success: true; data: T } | { success: false; error: { message: string } } }, text: string, where: string): T {
  const result = schema.safeParse(parse(text));
  if (!result.success) throw new Error(`Invalid ${where}: ${result.error.message}`);
  return result.data;
}

export const CHURCH_YEAR: ChurchYearFile = parsed(ChurchYearFile, raw(top, 'church-year.yaml'), 'content/plans/church-year.yaml');
export const WORDS: ReadonlyMap<string, PlanWord> = new Map(
  parsed(WordsFile, raw(top, 'words.yaml'), 'content/plans/words.yaml').words.map((word) => [word.id, word]),
);
export const BLOCKS: ReadonlyMap<string, PlanBlock> = new Map(
  Object.entries(blockFiles).map(([path, text]) => {
    const block = parsed(PlanBlock, text, path);
    const file = path.split('/').at(-1)!.replace(/\.yaml$/, '');
    if (block.id !== file) throw new Error(`${path}: id "${block.id}" must match the file name`);
    return [block.id, block];
  }),
);

export interface PlanDay {
  readonly block: PlanBlock;
  /** 0-based position in the plan. */
  readonly index: number;
  /** The Church Year season the day belongs to, for church-year plans. */
  readonly season?: SeasonId;
}

/** A plan's days in order. A church-year plan takes them from church-year.yaml, season by season. */
export function planDays(plan: Plan): PlanDay[] {
  const ids: { id: string; season?: SeasonId }[] =
    plan.kind === 'church-year'
      ? CHURCH_YEAR.seasons.flatMap((season) => season.days.map((id) => ({ id, season: season.id })))
      : plan.days.map((id) => ({ id }));
  return ids.flatMap(({ id, season }, index) => {
    const block = BLOCKS.get(id);
    if (block === undefined) return [];
    return [season === undefined ? { block, index } : { block, index, season }];
  });
}

/** Live plan days that read a given chapter, for the "Part of" link in the Bible reader. */
export function planDaysForChapter(code: string, chapter: number): { plan: Plan; day: PlanDay }[] {
  return LIVE_PLANS.flatMap((plan) =>
    planDays(plan)
      .filter((day) => Object.values(day.block.passages).some((ref) => {
        const parsedRef = parseRef(ref);
        return parsedRef.code === code && parsedRef.chapter === chapter;
      }))
      .map((day) => ({ plan, day })),
  );
}

const LOCALES: readonly Locale[] = ['en', 'ar'];

/** Everything wrong with the plans' content, as readable lines; empty when all is well. */
export function checkPlans(): string[] {
  const problems: string[] = [];
  const sourceIds = new Set(SOURCES.map((source) => source.id));
  const questionSlugs = new Set(QUESTIONS.map((question) => question.slug));
  const personKeys = new Set([...loadPeople().map((person) => person.k), ...CORE_BY_KEY.keys()]);

  for (const plan of PLANS) {
    for (const id of plan.days) if (!BLOCKS.has(id)) problems.push(`plan ${plan.id}: unknown block "${id}"`);
    const total = plan.kind === 'church-year' ? CHURCH_YEAR.seasons.reduce((sum, season) => sum + season.days.length, 0) : plan.days.length;
    for (const section of plan.sections) {
      if (section.from >= Math.max(total, 1)) problems.push(`plan ${plan.id}: section "${section.title.en}" starts after the last day`);
    }
  }
  if (!sourceIds.has(CHURCH_YEAR.source)) problems.push(`church-year.yaml: unknown source "${CHURCH_YEAR.source}"`);
  for (const season of CHURCH_YEAR.seasons) {
    for (const id of season.days) if (!BLOCKS.has(id)) problems.push(`church-year ${season.id}: unknown block "${id}"`);
  }

  for (const block of BLOCKS.values()) {
    const where = `block ${block.id}`;
    for (const ref of Object.values(block.passages)) {
      for (const locale of LOCALES) {
        try {
          passageVerses(ref, locale);
        } catch (error) {
          problems.push(`${where}: ${(error as Error).message}`);
        }
      }
    }
    for (const word of block.words) if (!WORDS.has(word)) problems.push(`${where}: unknown word "${word}"`);
    for (const source of block.sources) if (!sourceIds.has(source)) problems.push(`${where}: unknown source "${source}"`);
    for (const link of block.deeper) {
      if (link.kind === 'verse') {
        for (const locale of LOCALES) {
          try {
            passageVerses(link.ref, locale);
          } catch (error) {
            problems.push(`${where}: ${(error as Error).message}`);
          }
        }
      } else if (link.kind === 'place' && !PLACE_BY_ID.has(link.id)) {
        problems.push(`${where}: unknown atlas place "${link.id}"`);
      } else if (link.kind === 'person' && !personKeys.has(link.key)) {
        problems.push(`${where}: unknown person "${link.key}"`);
      } else if (link.kind === 'question' && !questionSlugs.has(link.slug)) {
        problems.push(`${where}: unknown question "${link.slug}"`);
      }
    }
  }
  return problems;
}
