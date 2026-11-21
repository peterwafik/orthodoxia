/**
 * Validates every content record against its schema and the cross-record rules that a schema alone
 * cannot express. Run by `npm run validate:content` and by CI; exits non-zero on any problem.
 *
 * Node strips TypeScript types natively but not inside node_modules, so the schema package is
 * imported by path rather than by its workspace name.
 */
import { readdirSync, readFileSync } from 'node:fs';
import { basename, join, resolve } from 'node:path';
import { parse } from 'yaml';
import { ChurchYearFile, ContentSource, PlanBlock, PlansFile, SynaxariumSummaries, WordsFile } from '../packages/content-schema/src/index.ts';

const ROOT = resolve(import.meta.dirname, '..');
const SOURCES_DIR = join(ROOT, 'content', 'sources');

const problems: string[] = [];

function yamlFiles(dir: string): string[] {
  return readdirSync(dir)
    .filter((name) => name.endsWith('.yaml'))
    .sort()
    .map((name) => join(dir, name));
}

const sourceIds = new Set<string>();
for (const file of yamlFiles(SOURCES_DIR)) {
  const name = basename(file, '.yaml');
  const result = ContentSource.safeParse(parse(readFileSync(file, 'utf8')));
  if (!result.success) {
    for (const issue of result.error.issues) {
      problems.push(`content/sources/${name}.yaml: ${issue.path.join('.') || '(root)'}: ${issue.message}`);
    }
    continue;
  }
  if (result.data.id !== name) {
    problems.push(`content/sources/${name}.yaml: id "${result.data.id}" must match the file name`);
  }
  if (sourceIds.has(result.data.id)) {
    problems.push(`content/sources/${name}.yaml: duplicate id "${result.data.id}"`);
  }
  sourceIds.add(result.data.id);
}

// Reading plans: each file against its schema. The cross-file checks (blocks, passages, links) need the Bible data and
// run in apps/web (checkPlans in src/lib/plans/load.ts).
const PLANS_DIR = join(ROOT, 'content', 'plans');
const schemaCheck = (schema: { safeParse(value: unknown): { success: boolean; error?: { issues: { path: PropertyKey[]; message: string }[] } } }, file: string, label: string): void => {
  const result = schema.safeParse(parse(readFileSync(file, 'utf8')));
  if (!result.success) for (const issue of result.error!.issues) problems.push(`${label}: ${issue.path.map(String).join('.') || '(root)'}: ${issue.message}`);
};
schemaCheck(PlansFile, join(PLANS_DIR, 'plans.yaml'), 'content/plans/plans.yaml');
schemaCheck(ChurchYearFile, join(PLANS_DIR, 'church-year.yaml'), 'content/plans/church-year.yaml');
schemaCheck(WordsFile, join(PLANS_DIR, 'words.yaml'), 'content/plans/words.yaml');
const blockFiles = yamlFiles(join(PLANS_DIR, 'blocks'));
for (const file of blockFiles) schemaCheck(PlanBlock, file, `content/plans/blocks/${basename(file)}`);

// Synaxarium summaries (content/synaxarium/<month>.yaml); their alignment with the collected names is checked in apps/web.
const synaxariumDir = join(ROOT, 'content', 'synaxarium');
const summaryFiles = readdirSync(synaxariumDir).filter((name) => name.endsWith('.yaml'));
for (const name of summaryFiles) schemaCheck(SynaxariumSummaries, join(synaxariumDir, name), `content/synaxarium/${name}`);

if (problems.length > 0) {
  console.error(`Content validation failed (${problems.length} problem(s)):`);
  for (const problem of problems) console.error(`  ✗ ${problem}`);
  process.exit(1);
}
console.log(`Content validation passed: ${sourceIds.size} sources, ${blockFiles.length} plan blocks.`);
