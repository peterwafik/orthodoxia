import { describe, expect, it } from 'vitest';
import { countUnits, isSome, toggleTopic, type Selection } from './selection.ts';

const SUBS: Record<string, string[]> = { '1': ['1.1', '1.2', '1.3'], '2': ['2.1', '2.2'] };
const subsOf = (family: string): string[] => SUBS[family] ?? [];
const empty = (): Selection => ({ selected: new Set(), before: new Map() });
const list = (selection: Selection): string[] => [...selection.selected].sort();

describe('ticking a main topic', () => {
  it('selects the main topic and every subtopic under it', () => {
    const selection = empty();
    toggleTopic(selection, '1', true, subsOf);
    expect(list(selection)).toEqual(['1', '1.1', '1.2', '1.3']);
  });

  it('puts back only the subtopics that were ticked before when it is unticked', () => {
    const selection = empty();
    toggleTopic(selection, '1.2', true, subsOf);
    toggleTopic(selection, '2.1', true, subsOf);
    toggleTopic(selection, '1', true, subsOf);
    expect(list(selection)).toEqual(['1', '1.1', '1.2', '1.3', '2.1']);
    toggleTopic(selection, '1', false, subsOf);
    expect(list(selection)).toEqual(['1.2', '2.1']);
  });

  it('leaves nothing of the family when nothing was ticked before', () => {
    const selection = empty();
    toggleTopic(selection, '2', true, subsOf);
    toggleTopic(selection, '2', false, subsOf);
    expect(list(selection)).toEqual([]);
    expect(selection.before.size).toBe(0);
  });

  it('does not touch other families', () => {
    const selection = empty();
    toggleTopic(selection, '2', true, subsOf);
    toggleTopic(selection, '1', true, subsOf);
    toggleTopic(selection, '1', false, subsOf);
    expect(list(selection)).toEqual(['2', '2.1', '2.2']);
  });
});

describe('ticking subtopics one by one', () => {
  it('shows the main topic as ticked once the last subtopic is ticked, and as "some" before that', () => {
    const selection = empty();
    toggleTopic(selection, '2.1', true, subsOf);
    expect(isSome(selection, '2', subsOf)).toBe(true);
    toggleTopic(selection, '2.2', true, subsOf);
    expect(selection.selected.has('2')).toBe(true);
    expect(isSome(selection, '2', subsOf)).toBe(false);
  });

  it('turns a ticked main topic into "some" when one subtopic is taken out, and forgets what it kept', () => {
    const selection = empty();
    toggleTopic(selection, '1.1', true, subsOf);
    toggleTopic(selection, '1', true, subsOf);
    toggleTopic(selection, '1.3', false, subsOf);
    expect(list(selection)).toEqual(['1.1', '1.2']);
    expect(selection.before.has('1')).toBe(false);
    expect(isSome(selection, '1', subsOf)).toBe(true);
  });

  it('unticking a main topic that was completed by hand clears it', () => {
    const selection = empty();
    for (const sub of SUBS['2']!) toggleTopic(selection, sub, true, subsOf);
    toggleTopic(selection, '2', false, subsOf);
    expect(list(selection)).toEqual([]);
  });
});

describe('countUnits', () => {
  it('counts a ticked main topic once and a lone subtopic once', () => {
    const selection = empty();
    toggleTopic(selection, '1', true, subsOf);
    toggleTopic(selection, '2.1', true, subsOf);
    expect(countUnits(selection)).toBe(2);
  });
});
