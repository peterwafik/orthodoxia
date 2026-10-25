/**
 * Checks every external source link in the Faith & Evidence catalogue and writes the result to
 * apps/web/src/data/apologetics/link-report.json. Admin-only, run by hand: `npm run apologetics:links`.
 * One request per host at a time with a pause between requests; HEAD first, then GET if HEAD is refused; a 15 s timeout.
 * It records redirects and blocks honestly and never substitutes another page for a failed one.
 */
import { writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { SOURCES } from '../../apps/web/src/data/apologetics/sources.ts';

const OUT = resolve(import.meta.dirname, '../../apps/web/src/data/apologetics/link-report.json');
const today = new Date().toISOString().slice(0, 10);
const report: Record<string, { status: string; checked: string; note?: string }> = {};

async function probe(url: string, method: 'HEAD' | 'GET'): Promise<Response> {
  return fetch(url, { method, redirect: 'manual', signal: AbortSignal.timeout(15_000), headers: { 'User-Agent': 'OrthodoxiaLinkCheck/1.0 (source catalogue verification)' } });
}

for (const source of SOURCES) {
  if (!source.url.startsWith('https://')) continue;
  try {
    let response = await probe(source.url, 'HEAD');
    if (response.status === 405 || response.status === 403 || response.status === 501) response = await probe(source.url, 'GET');
    const code = response.status;
    if (code >= 200 && code < 300) report[source.id] = { status: 'ok', checked: today };
    else if (code >= 300 && code < 400) report[source.id] = { status: 'redirected', checked: today, note: `HTTP ${code} to ${response.headers.get('location') ?? 'unknown'}` };
    else if (code === 401 || code === 403 || code === 429) report[source.id] = { status: 'blocked', checked: today, note: `HTTP ${code}` };
    else report[source.id] = { status: 'failed', checked: today, note: `HTTP ${code}` };
  } catch (error) {
    report[source.id] = { status: 'failed', checked: today, note: error instanceof Error ? error.message.slice(0, 80) : 'error' };
  }
  console.log(source.id, report[source.id]?.status, report[source.id]?.note ?? '');
  await new Promise((r) => setTimeout(r, 1200));
}

writeFileSync(OUT, `${JSON.stringify(report, null, 2)}\n`);
console.log(`Wrote ${join(OUT)}`);
