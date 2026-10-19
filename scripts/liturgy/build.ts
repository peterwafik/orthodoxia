/**
 * Builds the Holy Mass texts from content/liturgy/ (format: content/liturgy/README.md):
 *   apps/web/public/liturgy/<liturgy>.json     one file per liturgy, every stop that has text
 *   apps/web/src/data/liturgy-sources.json     the distinct sources, for the Sources page
 * Fails, naming the file and line, on any problem. A missing content/liturgy/ builds empty files.
 */
import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join, relative, resolve } from 'node:path';
import { STOPS } from '../../apps/web/src/data/holy-mass.ts';
import { buildLiturgies } from '../../apps/web/src/lib/liturgy/build-core.ts';
import { LITURGIES } from '../../apps/web/src/lib/liturgy/resolve.ts';

const ROOT = resolve(import.meta.dirname, '../..');
const CONTENT = join(ROOT, 'content/liturgy');
const OUT = join(ROOT, 'apps/web/public/liturgy');
const SOURCES = join(ROOT, 'apps/web/src/data/liturgy-sources.json');

function listFiles(dir: string): string[] {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const path = join(dir, entry.name);
    return entry.isDirectory() ? listFiles(path) : [path];
  });
}

const files: Record<string, string> = {};
if (existsSync(CONTENT)) {
  for (const path of listFiles(CONTENT)) {
    const name = relative(CONTENT, path).split('\\').join('/');
    if (name === 'README.md') continue;
    files[name] = readFileSync(path, 'utf8');
  }
}

const result = buildLiturgies(files, STOPS.map((stop) => stop.slug));
if (result.errors.length > 0) {
  console.error(result.errors.join('\n'));
  console.error(`\n${result.errors.length} problem(s) in content/liturgy/. Nothing was written.`);
  process.exit(1);
}

mkdirSync(OUT, { recursive: true });
for (const liturgy of LITURGIES) writeFileSync(join(OUT, `${liturgy}.json`), JSON.stringify(result.liturgies[liturgy]));
writeFileSync(SOURCES, `${JSON.stringify(result.sources, null, 2)}\n`);

console.log('Holy Mass texts (stops with text, blocks, per language):');
for (const liturgy of LITURGIES) {
  const { stops, blocks, perLang } = result.coverage[liturgy];
  console.log(`  ${liturgy.padEnd(8)} ${stops}/${STOPS.length} stops, ${blocks} blocks (en ${perLang.en}, ar ${perLang.ar}, cop ${perLang.cop}, tr ${perLang.tr})`);
}
