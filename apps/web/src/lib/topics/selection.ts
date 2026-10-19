/**
 * What is ticked in the topic panel, and how ticking a main topic (a "family") works:
 *
 *  - ticking a main topic selects it and every subtopic under it, and remembers which of those subtopics were
 *    already ticked;
 *  - unticking it removes them all and puts back only the ones remembered;
 *  - ticking the last subtopic by hand ticks the main topic too; taking one out of a ticked main topic makes
 *    it "some of them" (a partly filled box) and drops what was remembered.
 *
 * A family id ("6") is in `selected` while the family is ticked as a whole; subtopic ids look like "6.12".
 */
export interface Selection {
  readonly selected: Set<string>;
  /** For a family ticked as a whole: the subtopics that were ticked before it was. */
  readonly before: Map<string, string[]>;
}

/** The ids of a family's subtopics that can be ticked (those that have passages). */
export type SubsOf = (familyId: string) => readonly string[];

const familyOf = (id: string): string => id.split('.')[0]!;
const isFamily = (id: string): boolean => !id.includes('.');

export function toggleTopic(selection: Selection, id: string, on: boolean, subsOf: SubsOf): void {
  const { selected, before } = selection;
  if (isFamily(id)) {
    const subs = subsOf(id);
    if (on) {
      before.set(id, subs.filter((sub) => selected.has(sub)));
      selected.add(id);
      for (const sub of subs) selected.add(sub);
    } else {
      selected.delete(id);
      for (const sub of subs) selected.delete(sub);
      for (const sub of before.get(id) ?? []) selected.add(sub);
      before.delete(id);
    }
    return;
  }
  const family = familyOf(id);
  const subs = subsOf(family);
  if (on) selected.add(id);
  else selected.delete(id);
  if (selected.has(family)) {
    if (!subs.every((sub) => selected.has(sub))) {
      selected.delete(family);
      before.delete(family);
    }
  } else if (subs.length > 0 && subs.every((sub) => selected.has(sub))) {
    selected.add(family);
    before.delete(family);
  }
}

/** True when some, but not all, of a family's subtopics are ticked (the partly filled box). */
export function isSome(selection: Selection, familyId: string, subsOf: SubsOf): boolean {
  return !selection.selected.has(familyId) && subsOf(familyId).some((sub) => selection.selected.has(sub));
}

/** How many things are ticked, counting a ticked main topic as one and each lone subtopic as one. */
export function countUnits(selection: Selection): number {
  let units = 0;
  for (const id of selection.selected) if (isFamily(id) || !selection.selected.has(familyOf(id))) units += 1;
  return units;
}
