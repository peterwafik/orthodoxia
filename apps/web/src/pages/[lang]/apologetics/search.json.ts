import type { APIRoute } from 'astro';
import { LOCALES } from '../../../i18n/index.ts';
import { buildSearchIndex } from '../../../lib/apologetics/index.ts';
import type { Locale } from '../../../i18n/index.ts';

export function getStaticPaths() {
  return LOCALES.map((lang) => ({ params: { lang } }));
}

export const GET: APIRoute = ({ params }) => {
  const locale = params['lang'] as Locale;
  return new Response(JSON.stringify(buildSearchIndex(locale)), { headers: { 'Content-Type': 'application/json; charset=utf-8' } });
};
