/**
 * Maintainer tool: the headings of Nave topics with how many verses each has.
 *
 *   node scripts/topics/outline.ts "LOVE" ["GOD" ...]
 */
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { parseNave } from '../../apps/web/src/lib/topics/nave-parse.ts';

const nave = parseNave(readFileSync(resolve(import.meta.dirname, '../../data/topics/raw/nave.xml'), 'utf8'));
for (const name of process.argv.slice(2)) {
  const topic = nave[name];
  if (topic === undefined) {
    console.log(`${name}: not in Nave (similar: ${Object.keys(nave).filter((key) => key.includes(name)).slice(0, 8).join(', ')})`);
    continue;
  }
  console.log(`## ${name}${topic.see.length > 0 ? `   (see ${topic.see.join(', ')})` : ''}`);
  for (const group of topic.groups) {
    if (group.depth > (Number(process.env.DEPTH) || 3)) continue;
    console.log(`${'  '.repeat(group.depth - 2)}${group.label.slice(0, 70)} (${group.refs.length})${group.see.length > 0 ? ` see ${group.see.join('/')}` : ''}`);
  }
}
