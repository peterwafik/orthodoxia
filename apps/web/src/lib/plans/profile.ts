/**
 * What the reader told the quiz, and how far they have read, kept in this browser only (orthodoxia:plans). Pure
 * functions: the pages' scripts read and write localStorage and call these. A missing or damaged value falls back to
 * "no profile yet" and no progress. Nothing here scores the reader: no streaks, no points, no missed days.
 */
import type { PassageRef, PlanBlock, PlanInterest } from '@orthodoxia/content-schema';

export type Pace = 5 | 15 | 30;
export type Style = 'explorer' | 'achiever' | 'reflector' | 'connector';
export type Experience = 'new' | 'some' | 'lots';

export interface Profile {
  readonly interest: PlanInterest;
  readonly pace: Pace;
  readonly style: Style;
  readonly experience: Experience;
}

export interface PlanProgress {
  /** 0-based indexes of the days marked done, sorted. */
  readonly done: readonly number[];
  /** The day last opened. */
  readonly last: number;
}

export interface Progress {
  readonly active: string | null;
  readonly plans: Readonly<Record<string, PlanProgress>>;
}

export interface PlansState {
  readonly profile: Profile | null;
  readonly progress: Progress;
}

export const PLANS_KEY = 'orthodoxia:plans';
export const JOURNAL_KEY = 'orthodoxia:plans:journal';
export const PLANS_READING_KEY = 'orthodoxia:plans:reading';

export const INTERESTS: readonly PlanInterest[] = ['story', 'people', 'places', 'questions', 'life', 'church', 'start'];
export const PACES: readonly Pace[] = [5, 15, 30];
export const STYLES: readonly Style[] = ['explorer', 'achiever', 'reflector', 'connector'];
export const EXPERIENCES: readonly Experience[] = ['new', 'some', 'lots'];

/** For a day opened from a shared link before the quiz: the 15-minute passage and the Explorer's extra card. */
export const defaultProfile = (): Profile => ({ interest: 'start', pace: 15, style: 'explorer', experience: 'some' });

export const emptyProgress = (): Progress => ({ active: null, plans: {} });

const isIndexList = (value: unknown): value is number[] =>
  Array.isArray(value) && value.every((item) => Number.isInteger(item) && (item as number) >= 0);

function readProfile(value: unknown): Profile | null {
  if (typeof value !== 'object' || value === null) return null;
  const { interest, pace, style, experience } = value as Record<string, unknown>;
  const ok =
    INTERESTS.includes(interest as PlanInterest) &&
    PACES.includes(pace as Pace) &&
    STYLES.includes(style as Style) &&
    EXPERIENCES.includes(experience as Experience);
  return ok ? { interest: interest as PlanInterest, pace: pace as Pace, style: style as Style, experience: experience as Experience } : null;
}

function readProgress(value: unknown): Progress {
  if (typeof value !== 'object' || value === null) return emptyProgress();
  const { active, plans } = value as Record<string, unknown>;
  const out: Record<string, PlanProgress> = {};
  if (typeof plans === 'object' && plans !== null) {
    for (const [id, entry] of Object.entries(plans)) {
      const { done, last } = (entry ?? {}) as Record<string, unknown>;
      if (!isIndexList(done)) continue;
      const lastDay = typeof last === 'number' && Number.isInteger(last) && last >= 0 ? last : 0;
      out[id] = { done: [...new Set(done)].sort((a, b) => a - b), last: lastDay };
    }
  }
  return { active: typeof active === 'string' ? active : null, plans: out };
}

export function parseState(raw: string | null): PlansState {
  if (raw === null) return { profile: null, progress: emptyProgress() };
  try {
    const value = JSON.parse(raw) as { profile?: unknown; progress?: unknown } | null;
    return { profile: readProfile(value?.profile), progress: readProgress(value?.progress) };
  } catch {
    return { profile: null, progress: emptyProgress() };
  }
}

export const serializeState = (state: PlansState): string => JSON.stringify(state);

/**
 * The plan the quiz suggests. Someone who likes stories but has never read the Bible starts with Meet Jesus; then the
 * first live plan for the interest; then Meet Jesus; then whatever is live.
 */
export function planFor(profile: Profile, plans: readonly { id: string; interests: readonly PlanInterest[] }[]): string | null {
  const has = (id: string) => plans.some((plan) => plan.id === id);
  if (profile.interest === 'story' && profile.experience === 'new' && has('meet-jesus')) return 'meet-jesus';
  const match = plans.find((plan) => plan.interests.includes(profile.interest));
  if (match !== undefined) return match.id;
  if (has('meet-jesus')) return 'meet-jesus';
  return plans[0]?.id ?? null;
}

const PACE_PASSAGE = { 5: 'short', 15: 'full', 30: 'deep' } as const;
export const passageFor = (block: PlanBlock, pace: Pace): PassageRef => block.passages[PACE_PASSAGE[pace]];

export function markDone(progress: Progress, planId: string, day: number): Progress {
  const current = progress.plans[planId] ?? { done: [], last: day };
  const done = [...new Set([...current.done, day])].sort((a, b) => a - b);
  return { active: planId, plans: { ...progress.plans, [planId]: { done, last: day } } };
}

export function openDay(progress: Progress, planId: string, day: number): Progress {
  const current = progress.plans[planId] ?? { done: [], last: day };
  return { active: planId, plans: { ...progress.plans, [planId]: { ...current, last: day } } };
}

/** The first day not yet done; the last day when every day is done. */
export function nextDay(progress: Progress, planId: string, total: number): number {
  const done = new Set(progress.plans[planId]?.done ?? []);
  for (let day = 0; day < total; day += 1) if (!done.has(day)) return day;
  return Math.max(0, total - 1);
}
