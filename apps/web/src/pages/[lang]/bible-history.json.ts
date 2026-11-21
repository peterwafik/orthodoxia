/**
 * The Bible history chart data in one language, as a static file (`/en/bible-history.json`, `/ar/bible-history.json`).
 * The page loads it when it opens, so the page itself stays small.
 */
import type { APIRoute } from 'astro';
import { buildPayload } from '../../lib/bible-history/payload.ts';
import { LOCALES, type Locale } from '../../i18n/index.ts';

export function getStaticPaths() {
  return LOCALES.map((lang) => ({ params: { lang } }));
}

export const GET: APIRoute = ({ params }) =>
  new Response(JSON.stringify(buildPayload(params.lang as Locale)), { headers: { 'Content-Type': 'application/json; charset=utf-8' } });
