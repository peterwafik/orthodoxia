/**
 * Verifies that every internal link (`href="/..."`) in the built site points at a file that exists
 * in `dist/`. Run by `scripts/build-site.ts` after the build; exits non-zero on any broken link.
 */
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { join, relative, resolve } from 'node:path';

const DIST = resolve(import.meta.dirname, '..', 'dist');

function htmlFiles(dir: string): string[] {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) return htmlFiles(path);
    return entry.name.endsWith('.html') ? [path] : [];
  });
}

function targetExists(href: string): boolean {
  const path = decodeURIComponent(href.split(/[?#]/)[0]!);
  if (path.endsWith('/')) return existsSync(join(DIST, path, 'index.html'));
  return existsSync(join(DIST, path)) || existsSync(join(DIST, path, 'index.html'));
}

const broken = new Map<string, string[]>();
const checked = new Set<string>();
const files = htmlFiles(DIST);
for (const file of files) {
  const html = readFileSync(file, 'utf8');
  for (const match of html.matchAll(/href="(\/[^"]*)"/g)) {
    const href = match[1]!.replaceAll('&amp;', '&');
    if (href.startsWith('//')) continue;
    if (!checked.has(href)) {
      checked.add(href);
      if (!targetExists(href)) broken.set(href, []);
    }
    broken.get(href)?.push(relative(DIST, file));
  }
}

if (broken.size > 0) {
  console.error(`✗ ${broken.size} broken internal link(s):`);
  for (const [href, pages] of [...broken].slice(0, 20)) {
    console.error(`  ${href}  (from ${pages.length} page(s), e.g. ${pages[0]})`);
  }
  process.exit(1);
}
console.log(`✓ Links: ${checked.size} distinct internal links across ${files.length} pages, none broken.`);
