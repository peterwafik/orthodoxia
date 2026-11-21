import { describe, expect, it } from 'vitest';
import { BLOCKS, PLANS, checkPlans, planById, planDays } from './load.ts';
import { parseRef, passageVerses, refHref, refLabel } from './passage.ts';

describe('plan passages', () => {
  it('parses references', () => {
    expect(parseRef('MRK.1.14-20')).toEqual({ code: 'MRK', chapter: 1, from: 14, to: 20 });
    expect(parseRef('MRK.1')).toEqual({ code: 'MRK', chapter: 1, from: null, to: null });
    expect(parseRef('ZEC.9.9')).toEqual({ code: 'ZEC', chapter: 9, from: 9, to: 9 });
  });

  it('reads the verses from the plan editions', () => {
    const en = passageVerses('MRK.1.14-20', 'en');
    expect(en).toHaveLength(7);
    expect(en[0]!.text.startsWith('Now after that John was put in prison')).toBe(true);
    expect(passageVerses('MRK.1.14-20', 'ar')).toHaveLength(7);
    expect(passageVerses('MRK.1', 'en')).toHaveLength(45);
  });

  it('refuses a passage that is not there', () => {
    expect(() => passageVerses('MRK.1.99', 'en')).toThrow();
    expect(() => passageVerses('MRK.1.40-50', 'ar')).toThrow();
  });

  it('labels and links passages in each language', () => {
    expect(refLabel('MRK.1.14-20', 'en')).toBe('Mark 1:14–20');
    expect(refLabel('MRK.1.14-20', 'ar')).toBe('إنجيل مرقس ١: ١٤–٢٠');
    expect(refHref('MRK.1.14-20', 'en')).toBe('/en/bible/kjv/mark/1/#v14');
  });
});

describe('plan content', () => {
  it('has no broken blocks, passages or links', () => {
    expect(checkPlans()).toEqual([]);
  });

  it('gives Meet Jesus its sixteen days of Mark in order', () => {
    const days = planDays(planById('meet-jesus')!);
    expect(days.map((day) => day.block.id)).toEqual(Array.from({ length: 16 }, (_, i) => `mark-${String(i + 1).padStart(2, '0')}`));
    expect(days[15]!.index).toBe(15);
  });

  it('marks every block as a draft until it is reviewed', () => {
    for (const block of BLOCKS.values()) expect(['draft', 'awaiting-review', 'reviewed', 'published']).toContain(block.review.status);
  });

  it('lists the seven plans the owner chose', () => {
    expect(PLANS.map((plan) => plan.id).sort()).toEqual(['big-questions', 'big-story', 'church-year', 'heroes', 'meet-jesus', 'real-life', 'walk-the-land']);
  });
});

describe('plan pages while no plan is live', () => {
  it('generates no day pages and no "Part of" links', async () => {
    const { LIVE_PLANS, planDaysForChapter } = await import('./load.ts');
    const { dayPaths } = await import('./ui.ts');
    if (LIVE_PLANS.length > 0) return; // a live plan (or PLANS_PREVIEW=1) is covered by the build's link check
    expect(dayPaths(['en', 'ar'])).toEqual([]);
    expect(planDaysForChapter('MRK', 1)).toEqual([]);
  });
});
