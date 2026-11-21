import { describe, expect, it } from 'vitest';
import { PassageRef, Plan, PlanBlock } from './plans.ts';

const bi = (s: string) => ({ en: s, ar: s });
const block = {
  id: 'mark-01',
  passages: { short: 'MRK.1.14-20', full: 'MRK.1.1-20', deep: 'MRK.1' },
  title: bi('t'),
  hook: bi('h'),
  explain: bi('e'),
  think: bi('q'),
  deeper: [{ kind: 'verse', ref: 'ISA.40.3' }],
  review: { status: 'draft', origin: 'ai-generated' },
};

describe('plan schemas', () => {
  it('reads passage references within one chapter', () => {
    for (const ok of ['MRK.1', 'MRK.1.14', 'MRK.1.14-20', '1SA.17.4-11']) expect(PassageRef.safeParse(ok).success).toBe(true);
    for (const bad of ['mrk.1', 'MRK', 'MRK.1.20-14', 'MRK.1.14-20x']) expect(PassageRef.safeParse(bad).success).toBe(false);
  });

  it('accepts a full block and fills the defaults', () => {
    const parsed = PlanBlock.parse(block);
    expect(parsed.words).toEqual([]);
    expect(parsed.sources).toEqual([]);
  });

  it('rejects a check whose answer is not one of the options', () => {
    const check = { question: bi('q'), options: [bi('a'), bi('b')], answer: 2, why: bi('w') };
    expect(PlanBlock.safeParse({ ...block, check }).success).toBe(false);
    expect(PlanBlock.safeParse({ ...block, check: { ...check, answer: 1 } }).success).toBe(true);
  });

  it('needs at least one deeper link', () => {
    expect(PlanBlock.safeParse({ ...block, deeper: [] }).success).toBe(false);
  });

  it('keeps church-year days out of plans.yaml, and live sequences need days', () => {
    const plan = { id: 'p', live: false, kind: 'sequence', name: bi('n'), who: bi('w'), description: bi('d'), interests: ['start'] };
    expect(Plan.safeParse(plan).success).toBe(true);
    expect(Plan.safeParse({ ...plan, live: true }).success).toBe(false);
    expect(Plan.safeParse({ ...plan, kind: 'church-year', days: ['a'] }).success).toBe(false);
  });
});
