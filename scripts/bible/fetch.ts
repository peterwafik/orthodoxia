/**
 * Downloads the raw Bible sources into `data/bible/raw/` and pins them in `data/bible/sources.json`.
 *
 *   node scripts/bible/fetch.ts            verify pinned files; download any that are missing
 *   node scripts/bible/fetch.ts --update   re-download everything and re-pin (review the diff!)
 *
 * Wikisource pages are fetched at a fixed revision ID, so a later edit on Wikisource never changes
 * the site until someone deliberately runs --update.
 */
import { createHash } from 'node:crypto';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { RAW_SOURCES, type PinnedFile } from './sources.ts';

const ROOT = resolve(import.meta.dirname, '../..');
const RAW = join(ROOT, 'data/bible/raw');
const PINS = join(ROOT, 'data/bible/sources.json');
const USER_AGENT = 'OrthodoxiaBibleImporter/0.1 (https://github.com/peterwafik/orthodoxia)';
const update = process.argv.includes('--update');
const today = new Date().toISOString().slice(0, 10);

const sha256 = (data: Uint8Array): string => createHash('sha256').update(data).digest('hex');

async function download(url: string): Promise<Uint8Array> {
  const response = await fetch(url, { headers: { 'User-Agent': USER_AGENT } });
  if (!response.ok) throw new Error(`GET ${url}: HTTP ${response.status}`);
  return new Uint8Array(await response.arrayBuffer());
}

/** A page's latest revision (`title`) or one exact revision (`revids`), via the MediaWiki API. */
async function queryRevision(selector: { titles: string } | { revids: string }): Promise<{ revision: number; content: string }> {
  const params = new URLSearchParams({
    action: 'query', prop: 'revisions', rvprop: 'ids|content', rvslots: 'main',
    format: 'json', formatversion: '2', ...selector,
  });
  const response = await fetch(`https://ar.wikisource.org/w/api.php?${params}`, { headers: { 'User-Agent': USER_AGENT } });
  const json = (await response.json()) as {
    query: { pages: { revisions?: { revid: number; slots: { main: { content: string } } }[] }[] };
  };
  const revision = json.query.pages[0]?.revisions?.[0];
  if (revision === undefined) throw new Error(`Wikisource revision not found: ${JSON.stringify(selector)}`);
  return { revision: revision.revid, content: revision.slots.main.content };
}

const latestRevision = (title: string) => queryRevision({ titles: title });
const revisionContent = async (revision: number): Promise<Uint8Array> =>
  new TextEncoder().encode((await queryRevision({ revids: String(revision) })).content);

const pinned: PinnedFile[] = existsSync(PINS) ? (JSON.parse(readFileSync(PINS, 'utf8')) as { files: PinnedFile[] }).files : [];
const result: PinnedFile[] = [];

function write(file: string, data: Uint8Array): void {
  const path = join(RAW, file);
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, data);
}

async function ensure(pin: PinnedFile | undefined, fresh: () => Promise<{ data: Uint8Array; pin: Omit<PinnedFile, 'sha256'> }>): Promise<void> {
  if (pin !== undefined && !update) {
    const path = join(RAW, pin.file);
    if (existsSync(path)) {
      const actual = sha256(readFileSync(path));
      if (actual !== pin.sha256) throw new Error(`${pin.file}: SHA-256 mismatch (expected ${pin.sha256}, got ${actual})`);
      console.log(`✓ ${pin.file}`);
      result.push(pin);
      return;
    }
    const data = pin.revision === undefined ? await download(pin.url) : await revisionContent(pin.revision);
    if (sha256(data) !== pin.sha256) {
      throw new Error(`${pin.file}: the upstream file changed since it was pinned. Run with --update and review.`);
    }
    write(pin.file, data);
    console.log(`↓ ${pin.file} (verified)`);
    result.push(pin);
    return;
  }
  const { data, pin: fields } = await fresh();
  write(fields.file, data);
  const next: PinnedFile = { ...fields, sha256: sha256(data) };
  console.log(`${pin?.sha256 === next.sha256 ? '=' : '↻'} ${next.file}`);
  result.push(next);
}

for (const source of RAW_SOURCES) {
  if (source.kind === 'ebible-usfm-zip') {
    const file = `ebible/${source.file}`;
    await ensure(pinned.find((pin) => pin.file === file), async () => ({
      data: await download(source.url),
      pin: { source: source.id, file, url: source.url, retrievedAt: today },
    }));
  } else {
    for (const [key, title] of Object.entries(source.pages)) {
      const file = `wikisource/${key}.wikitext`;
      const pin = pinned.find((candidate) => candidate.file === file);
      await ensure(pin, async () => {
        const { revision, content } = await latestRevision(title);
        const url = `https://ar.wikisource.org/w/index.php?oldid=${revision}`;
        return {
          data: new TextEncoder().encode(content),
          pin: { source: source.id, file, url: `${url}&action=raw`, retrievedAt: today, revision, title },
        };
      });
    }
  }
}

writeFileSync(PINS, `${JSON.stringify({ files: result }, null, 2)}\n`);
console.log(`Pinned ${result.length} files in data/bible/sources.json`);
