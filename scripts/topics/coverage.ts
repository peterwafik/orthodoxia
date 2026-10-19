/**
 * Maintainer tool: how many subtopics have verses, and from where; lists the ones with none.
 *
 *   node scripts/topics/coverage.ts
 */
import { FAMILIES, TOPIC_DATA } from '../../apps/web/src/lib/topics/topics.ts';

let total = 0;
let nave = 0;
let curated = 0;
let both = 0;
const empty: string[] = [];
for (const family of FAMILIES) {
  for (const topic of family.topics) {
    total += 1;
    const origins = TOPIC_DATA.get(topic.id)?.origins ?? new Set();
    const n = origins.has('nave');
    const c = origins.has('curated');
    if (n && c) both += 1;
    else if (n) nave += 1;
    else if (c) curated += 1;
    else empty.push(`${family.id}:${topic.en}`);
  }
}
console.log(`${total} subtopics: ${total - empty.length} have verses (Nave only ${nave}, listed only ${curated}, both ${both}); ${empty.length} have none.`);
if (empty.length > 0) console.log(empty.join('\n'));
