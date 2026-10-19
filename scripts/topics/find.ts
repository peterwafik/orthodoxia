/**
 * Maintainer tool: Nave topics whose name contains a word, with their verse counts.
 *
 *   node scripts/topics/find.ts love mercy ...
 */
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { parseNave } from '../../apps/web/src/lib/topics/nave-parse.ts';

const nave = parseNave(readFileSync(resolve(import.meta.dirname, '../../data/topics/raw/nave.xml'), 'utf8'));
for (const word of process.argv.slice(2)) {
  const hits = Object.entries(nave)
    .filter(([name]) => name.toLowerCase().includes(word.toLowerCase()))
    .map(([name, topic]) => `${name}(${topic.groups.reduce((sum, group) => sum + group.refs.length, 0)}${topic.see.length > 0 ? ` see ${topic.see[0]}` : ''})`);
  console.log(`${word}: ${hits.slice(0, 40).join(' | ')}`);
}
