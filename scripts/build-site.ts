/**
 * Builds the whole static site into `dist/`:
 *   1. the Bible data (scripts/bible), the Holy Mass texts (scripts/liturgy) and the content site (apps/web, Astro) → dist/
 *   2. the cross-reference explorer (apps/explorer, upstream Vite app), once per language →
 *      dist/en/explore/ and dist/ar/explore/
 * then checks the output against the free hosting limits (docs/phase-0/05-hosting-evaluation.md).
 *
 * SITE_ORIGIN (e.g. https://orthodoxia.example.workers.dev) sets canonical and share URLs.
 */
import { execSync } from 'node:child_process';
import { cpSync, readdirSync, rmSync, statSync } from 'node:fs';
import { join, relative, resolve } from 'node:path';

const ROOT = resolve(import.meta.dirname, '..');
const DIST = join(ROOT, 'dist');
const SITE_ORIGIN = process.env['SITE_ORIGIN'] ?? 'http://localhost:8787';

/**
 * The explorer is built once per language. Each build reads only its own translation (BSB or Van
 * Dyck), so the other one is removed from that copy to keep the deployment small.
 */
const EXPLORER_MOUNTS = [
  { base: '/en/explore/', locale: 'en', unusedTranslation: 'svd' },
  { base: '/ar/explore/', locale: 'ar', unusedTranslation: 'bsb' },
] as const;

/** Cloudflare Workers static assets, Free plan (verified 2026-10-11). */
const MAX_FILE_BYTES = 25 * 1024 * 1024;
const MAX_FILES = 20_000;

function run(command: string, env: Record<string, string> = {}): void {
  console.log(`\n$ ${command}`);
  execSync(command, { cwd: ROOT, stdio: 'inherit', env: { ...process.env, ...env } });
}

function listFiles(dir: string): string[] {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const path = join(dir, entry.name);
    return entry.isDirectory() ? listFiles(path) : [path];
  });
}

rmSync(DIST, { recursive: true, force: true });

run('npm run bible');
run('npm run liturgy');
run('npm run build -w apps/web', { SITE_ORIGIN });
cpSync(join(ROOT, 'apps', 'web', 'dist'), DIST, { recursive: true });

for (const mount of EXPLORER_MOUNTS) {
  run('npm run build -w apps/explorer', { BASE_PATH: mount.base, SITE_ORIGIN, LOCALE: mount.locale });
  const target = join(DIST, ...mount.base.split('/').filter(Boolean));
  cpSync(join(ROOT, 'apps', 'explorer', 'dist'), target, { recursive: true });
  rmSync(join(target, 'data', 'translations', `${mount.unusedTranslation}.json`), { force: true });
}

const files = listFiles(DIST);
const oversized = files.filter((file) => statSync(file).size > MAX_FILE_BYTES);
const totalBytes = files.reduce((sum, file) => sum + statSync(file).size, 0);
console.log(`\ndist/: ${files.length} files, ${(totalBytes / 1024 / 1024).toFixed(1)} MB`);
if (oversized.length > 0 || files.length > MAX_FILES) {
  for (const file of oversized) console.error(`  ✗ over 25 MiB: ${relative(ROOT, file)}`);
  if (files.length > MAX_FILES) console.error(`  ✗ ${files.length} files exceeds ${MAX_FILES}`);
  process.exit(1);
}

run('node scripts/check-links.ts');
