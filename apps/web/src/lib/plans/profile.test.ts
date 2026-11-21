import { describe, expect, it } from 'vitest';
import type { PlanInterest } from '@orthodoxia/content-schema';
import { defaultProfile, markDone, nextDay, openDay, parseState, planFor, serializeState, type Profile } from './profile.ts';

const profile = (over: Partial<Profile>): Profile => ({ ...defaultProfile(), ...over });
const plan = (id: string, interests: PlanInterest[]) => ({ id, interests });
const PLANS = [plan('meet-jesus', ['start', 'story']), plan('heroes', ['people']), plan('big-story', ['story'])];

describe('saved plan state', () => {
  it('falls back to no profile and no progress on a missing or damaged value', () => {
    for (const raw of [null, '{bad', 'null', '{"profile":{"pace":7}}', '{"progress":{"plans":{"x":{"done":"no"}}}}']) {
      const state = parseState(raw);
      expect(state.profile).toBeNull();
      expect(state.progress.plans).toEqual({});
    }
  });

  it('round-trips', () => {
    const state = { profile: profile({ style: 'reflector' }), progress: markDone({ active: null, plans: {} }, 'meet-jesus', 3) };
    expect(parseState(serializeState(state))).toEqual(state);
  });

  it('defaults a shared link to the 15-minute passage and the Explorer card', () => {
    expect(defaultProfile()).toMatchObject({ pace: 15, style: 'explorer' });
  });
});

describe('the quiz', () => {
  it('starts a new reader who likes stories with Meet Jesus', () => {
    expect(planFor(profile({ interest: 'story', experience: 'new' }), PLANS)).toBe('meet-jesus');
  });

  it('picks the first live plan for the interest, then falls back', () => {
    expect(planFor(profile({ interest: 'people' }), PLANS)).toBe('heroes');
    expect(planFor(profile({ interest: 'places' }), PLANS)).toBe('meet-jesus');
    expect(planFor(profile({ interest: 'places' }), [plan('heroes', ['people'])])).toBe('heroes');
    expect(planFor(profile({}), [])).toBeNull();
  });
});

describe('progress', () => {
  it('marks a day done once and keeps the list sorted', () => {
    let progress = markDone({ active: null, plans: {} }, 'p', 4);
    progress = markDone(progress, 'p', 1);
    progress = markDone(progress, 'p', 4);
    expect(progress.plans['p']!.done).toEqual([1, 4]);
    expect(progress.active).toBe('p');
  });

  it('suggests the first day not done, and stays on the last when all are done', () => {
    const progress = markDone(markDone({ active: null, plans: {} }, 'p', 0), 'p', 2);
    expect(nextDay(progress, 'p', 4)).toBe(1);
    const all = [0, 1, 2].reduce((acc, day) => markDone(acc, 'p', day), progress);
    expect(nextDay(all, 'p', 3)).toBe(2);
    expect(openDay(progress, 'p', 3).plans['p']).toEqual({ done: [0, 2], last: 3 });
  });
});
