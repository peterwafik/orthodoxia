/**
 * Maintainer tool: for the subtopics of one family that have no Nave mapping yet, lists the Nave topics and
 * headings whose words overlap with the subtopic's name, to help write the entry in nave-map.ts.
 *
 *   node scripts/topics/suggest.ts <family number> [path to nave.xml]
 */
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { parseNave } from '../../apps/web/src/lib/topics/nave-parse.ts';
import { FAMILIES } from '../../apps/web/src/lib/topics/taxonomy-families.ts';
import { NAVE_MAP } from '../../apps/web/src/lib/topics/nave-map.ts';

const ROOT = resolve(import.meta.dirname, '../..');
const familyId = process.argv[2];
const xmlPath = process.argv[3] ?? resolve(ROOT, 'data/topics/raw/nave.xml');
const family = FAMILIES.find((candidate) => candidate.id === familyId);
if (family === undefined) throw new Error(`No family ${familyId}`);

const nave = parseNave(readFileSync(xmlPath, 'utf8'));
const STOP = new Set(['of', 'the', 'a', 'an', 'and', 'in', 'to', 'for', 'with', 'by', 'on', 'is', 'as', 'god', "god's", 'christ', "christ's", 'jesus', "jesus'", 'what', 'how', 'why', 'does', 'can', 'who']);
const stem = (word: string): string => word.toLowerCase().replace(/['’]s?$/, '').replace(/(ing|ed|es|s|ly|ness|ful)$/, '');
const tokens = (text: string): string[] => text.split(/[^A-Za-z]+/).filter((word) => word.length > 2 && !STOP.has(word.toLowerCase())).map(stem);
const size = (name: string): number => nave[name]!.groups.reduce((sum, group) => sum + group.refs.length, 0);

for (const topic of family.topics) {
  if (NAVE_MAP[`${family.id}:${topic.en}`] !== undefined) continue;
  const wanted = tokens(topic.en);
  const found: { score: number; text: string }[] = [];
  for (const [name, entry] of Object.entries(nave)) {
    const nameTokens = tokens(name);
    const nameScore = wanted.filter((word) => nameTokens.includes(word)).length;
    if (nameScore > 0 && size(name) >= 3) found.push({ score: nameScore * 10 + Math.min(size(name), 200) / 100, text: `${name}(${size(name)})` });
    for (const group of entry.groups) {
      if (group.depth !== 2 || group.refs.length < 2) continue;
      const groupTokens = tokens(group.label);
      const score = wanted.filter((word) => groupTokens.includes(word)).length;
      if (score > 0 && (score >= wanted.length || nameScore > 0)) found.push({ score: score * 5 + nameScore * 4, text: `${name}>${group.label.slice(0, 38)}(${group.refs.length})` });
    }
  }
  found.sort((a, b) => b.score - a.score);
  console.log(`${family.id}:${topic.en}\n    ${found.slice(0, 7).map((entry) => entry.text).join(' | ')}`);
}
