/**
 * Proofreading of the extracted Arabic (and a few English paragraphs). The PDF's Arabic font scrambles some letters, and
 * the dictionary repair cannot fix them all, so each hour's Arabic is read by a person (or a model) who mends only those
 * glitches. This tool hands the paragraphs out and takes the mended ones back, refusing any change big enough to be a
 * change of wording.
 *
 *   node scripts/agpeya/proof.ts export   writes data/agpeya/raw/proof/<hour>.json (the paragraphs to read)
 *   node scripts/agpeya/proof.ts apply    reads data/agpeya/raw/proof/<hour>.fixed.json and patches data/agpeya/<hour>.json
 */
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const ROOT = resolve(import.meta.dirname, '../..');
const DIR = resolve(ROOT, 'data/agpeya/raw/proof');
const HOURS = ['prime', 'terce', 'sext', 'none', 'vespers', 'compline', 'veil', 'midnight'];

interface Item {
  id: string;
  lang: 'ar' | 'en';
  text: string;
}
interface HourFile {
  id: string;
  about: { en: string; ar: string };
  sections: { id: string; text: { en: string[]; ar: string[]; cop: string[] } }[];
}

const load = (hour: string): HourFile => JSON.parse(readFileSync(resolve(ROOT, `data/agpeya/${hour}.json`), 'utf8')) as HourFile;

/** Letters that differ between two strings, as a share of the longer: an edit distance on characters. */
export function change(a: string, b: string): number {
  const x = [...a];
  const y = [...b];
  let previous = Array.from({ length: y.length + 1 }, (_, i) => i);
  for (let i = 1; i <= x.length; i++) {
    const row = [i];
    for (let j = 1; j <= y.length; j++) row[j] = Math.min((previous[j] as number) + 1, (row[j - 1] as number) + 1, (previous[j - 1] as number) + (x[i - 1] === y[j - 1] ? 0 : 1));
    previous = row;
  }
  return (previous[y.length] as number) / Math.max(x.length, y.length, 1);
}

const command = process.argv[2];
if (command === 'export') {
  mkdirSync(DIR, { recursive: true });
  for (const hour of HOURS) {
    const file = load(hour);
    const items: Item[] = [{ id: 'about', lang: 'ar', text: file.about.ar }];
    for (const section of file.sections) section.text.ar.forEach((text, i) => items.push({ id: `${section.id}#${i}`, lang: 'ar', text }));
    // The English of the last pages of the Midnight hour was read from a poor scan and has misread words.
    if (hour === 'midnight') for (const section of file.sections) if (/absolution/.test(section.id)) section.text.en.forEach((text, i) => items.push({ id: `${section.id}#en${i}`, lang: 'en', text }));
    writeFileSync(resolve(DIR, `${hour}.json`), `${JSON.stringify(items.filter((item) => item.text !== ''), null, 1)}\n`);
    console.log(`${hour}: ${items.length} Arabic paragraphs`);
  }
} else if (command === 'apply') {
  const report: string[] = [];
  for (const hour of HOURS) {
    const fixedPath = resolve(DIR, `${hour}.fixed.json`);
    if (!existsSync(fixedPath)) {
      report.push(`${hour}: no ${hour}.fixed.json`);
      continue;
    }
    const fixed = new Map((JSON.parse(readFileSync(fixedPath, 'utf8')) as { id: string; text: string }[]).map((item) => [item.id, item.text]));
    const file = load(hour);
    let changed = 0;
    let refused = 0;
    const take = (id: string, old: string): string => {
      const next = fixed.get(id);
      if (next === undefined || next === old) return old;
      const share = change(old, next);
      if (share > 0.18) {
        refused++;
        report.push(`${hour} ${id}: refused (${(share * 100).toFixed(0)}% changed)\n  was: ${old.slice(0, 120)}\n  now: ${next.slice(0, 120)}`);
        return old;
      }
      changed++;
      return next;
    };
    file.about.ar = take('about', file.about.ar);
    for (const section of file.sections) {
      section.text.ar = section.text.ar.map((text, i) => take(`${section.id}#${i}`, text));
      section.text.en = section.text.en.map((text, i) => take(`${section.id}#en${i}`, text));
    }
    writeFileSync(resolve(ROOT, `data/agpeya/${hour}.json`), `${JSON.stringify(file, null, 1)}\n`);
    report.push(`${hour}: ${changed} paragraphs mended, ${refused} refused`);
  }
  console.log(report.join('\n'));
} else {
  console.log('Usage: node scripts/agpeya/proof.ts export|apply');
}
