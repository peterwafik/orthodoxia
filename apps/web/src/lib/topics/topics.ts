/**
 * The topical study data the Bible reader uses: the parsed taxonomy and, for every family and subtopic,
 * the passage ranges that belong to it, with where they came from:
 *
 *   start    the family's starting passages (the study list this taxonomy came with)
 *   curated  passages listed by hand in topic-passages.ts
 *   nave     verses from Nave's Topical Bible (1903, public domain), chosen in nave-map.ts and compiled into
 *            data/topics/verses.json by scripts/topics/build.ts
 *
 * A subtopic's passages also count for its family.
 */
import naveVerses from '../../../../../data/topics/verses.json' with { type: 'json' };
import { mergeRanges, fromPacked, type Packed } from './ranges.ts';
import { parsePassages, type PassageRange } from './reference.ts';
import { FAMILIES } from './taxonomy-families.ts';
import { MAP_PASSAGES } from './family-maps/index.ts';
import { TOPIC_PASSAGES } from './topic-passages.ts';

export { FAMILIES };

export type Origin = 'start' | 'curated' | 'nave';

const NAVE = naveVerses as unknown as Readonly<Record<string, Packed[]>>;

export interface TopicData {
  readonly ranges: readonly PassageRange[];
  readonly origins: ReadonlySet<Origin>;
}

/** topic id ("23", "23.7") → its passage ranges and their origins. */
export const TOPIC_DATA: ReadonlyMap<string, TopicData> = (() => {
  const data = new Map<string, TopicData>();
  for (const family of FAMILIES) {
    const familyRanges: PassageRange[] = [...family.passages];
    const familyOrigins = new Set<Origin>(family.passages.length > 0 ? ['start'] : []);
    for (const topic of family.topics) {
      const ranges: PassageRange[] = [];
      const origins = new Set<Origin>();
      const key = `${family.id}:${topic.en}`;
      const curated = [TOPIC_PASSAGES[key], MAP_PASSAGES[key]].filter((list) => list !== undefined).join('; ');
      if (curated !== '') {
        ranges.push(...parsePassages(curated));
        origins.add('curated');
      }
      const nave = NAVE[topic.id];
      if (nave !== undefined) {
        ranges.push(...nave.map(fromPacked));
        origins.add('nave');
      }
      if (ranges.length === 0) continue;
      data.set(topic.id, { ranges: mergeRanges(ranges), origins });
      familyRanges.push(...ranges);
      for (const origin of origins) familyOrigins.add(origin);
    }
    data.set(family.id, { ranges: mergeRanges(familyRanges), origins: familyOrigins });
  }
  return data;
})();

/** topic id → its passage ranges. */
export const TOPIC_RANGES: ReadonlyMap<string, readonly PassageRange[]> = new Map([...TOPIC_DATA].map(([id, entry]) => [id, entry.ranges] as const));
