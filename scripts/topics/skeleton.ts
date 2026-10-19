/**
 * Maintainer tool: for a family, prints the subtopics whose English name is exactly a Nave topic (ignoring
 * plural endings), ready to paste into the family's `nave` table, then the names still to be mapped.
 *
 *   node scripts/topics/skeleton.ts <family number>
 */
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { parseNave } from '../../apps/web/src/lib/topics/nave-parse.ts';
import { FAMILIES } from '../../apps/web/src/lib/topics/taxonomy-families.ts';

const family = FAMILIES.find((candidate) => candidate.id === process.argv[2]);
if (family === undefined) throw new Error(`No family ${process.argv[2]}`);
const nave = parseNave(readFileSync(resolve(import.meta.dirname, '../../data/topics/raw/nave.xml'), 'utf8'));
const byName = new Map(Object.keys(nave).map((name) => [name.toLowerCase().replace(/\s*\(.*\)\s*$/, ''), name] as const));
const size = (name: string): number => nave[name]!.groups.reduce((sum, group) => sum + group.refs.length, 0);

const exact: string[] = [];
const rest: string[] = [];
for (const topic of family.topics) {
  const name = topic.en.toLowerCase().replace(/^the /, '');
  const hit = [name, name.replace(/s$/, ''), `${name}s`, name.replace(/ies$/, 'y')].map((candidate) => byName.get(candidate)).find((found) => found !== undefined);
  if (hit !== undefined && size(hit) >= 3) exact.push(`    ${/^[A-Za-z]+$/.test(topic.en) ? topic.en : `"${topic.en}"`}: '${hit}',   // ${size(hit)}`);
  else rest.push(topic.en);
}
console.log(exact.join('\n'));
console.log('\nTO MAP:', rest.join(' | '));
