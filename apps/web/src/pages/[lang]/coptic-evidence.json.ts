/**
 * The evidence the Coptic Orthodox Church gives for each point of its faith, with the text of every verse it cites,
 * in one language (`/en/coptic-evidence.json`, `/ar/coptic-evidence.json`). The church-history page loads it the
 * first time a reader opens the evidence of a point, and shows it in a window without leaving the page.
 */
import type { APIRoute } from 'astro';
import { COPTIC_EVIDENCE } from '../../data/coptic-evidence.ts';
import { LOCALES, type Locale } from '../../i18n/index.ts';
import { evidencePopup } from '../../lib/topics/evidence.ts';

export function getStaticPaths() {
  return LOCALES.map((lang) => ({ params: { lang } }));
}

export const GET: APIRoute = ({ params }) => {
  const locale = params.lang as Locale;
  const points = Object.fromEntries(COPTIC_EVIDENCE.map((entry) => [entry.point, evidencePopup(entry, locale)]));
  return new Response(JSON.stringify({ points }), { headers: { 'Content-Type': 'application/json; charset=utf-8' } });
};
