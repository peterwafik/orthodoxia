/**
 * Choosing verses from Nave's Topical Bible for one of our topics. A selector names Nave topics and,
 * optionally, which of their headings to take:
 *
 *   "MERCY"                        every verse under MERCY
 *   "LOVE>OF MAN FOR GOD"          only the heading whose text contains this (and the lines under it)
 *   "FAITH>IN GOD|AND WORKS; DOUBT"  several headings, several topics, separated by | and ;
 *
 * A topic or a heading that cannot be found is an error: a wrong name must never quietly mark nothing.
 */
import type { NaveRef, NaveTopic } from './nave-parse.ts';

export interface Selector {
  readonly topic: string;
  readonly headings: readonly string[];
}

export function parseSelector(text: string): Selector[] {
  return text
    .split(';')
    .map((part) => part.trim())
    .filter((part) => part !== '')
    .map((part) => {
      const [topic, headings] = part.split('>');
      return { topic: topic!.trim(), headings: headings === undefined ? [] : headings.split('|').map((heading) => heading.trim()).filter((heading) => heading !== '') };
    });
}

export function selectRefs(nave: Readonly<Record<string, NaveTopic>>, selectors: readonly Selector[]): NaveRef[] {
  const refs: NaveRef[] = [];
  for (const { topic, headings } of selectors) {
    const entry = nave[topic];
    if (entry === undefined) throw new Error(`Nave's Topical Bible has no topic "${topic}"`);
    if (headings.length === 0) {
      for (const group of entry.groups) refs.push(...group.refs);
      continue;
    }
    for (const heading of headings) {
      const needle = heading.toLowerCase();
      let found = false;
      entry.groups.forEach((group, index) => {
        if (!group.label.toLowerCase().includes(needle)) return;
        found = true;
        // the heading's own verses, then the deeper lines that follow it
        refs.push(...group.refs);
        for (let next = index + 1; next < entry.groups.length && entry.groups[next]!.depth > group.depth; next += 1) refs.push(...entry.groups[next]!.refs);
      });
      if (!found) throw new Error(`Nave's topic "${topic}" has no heading containing "${heading}"`);
    }
  }
  return refs;
}
