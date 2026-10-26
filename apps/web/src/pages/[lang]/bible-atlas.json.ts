/**
 * The atlas data in one language, as a static file (`/en/bible-atlas.json`, `/ar/bible-atlas.json`). The atlas page loads
 * it when it opens, so the page itself stays small and each language gets only its own text.
 */
import type { APIRoute } from 'astro';
import { buildPayload } from '../../lib/bible-atlas/payload.ts';
import { LOCALES, type Locale } from '../../i18n/index.ts';

export function getStaticPaths() {
  return LOCALES.map((lang) => ({ params: { lang } }));
}

export const GET: APIRoute = ({ params }) =>
  new Response(JSON.stringify(buildPayload(params.lang as Locale)), { headers: { 'Content-Type': 'application/json; charset=utf-8' } });
