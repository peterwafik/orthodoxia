/**
 * The Liturgy's readings of one Katameros entry, in full, in one language (`/en/holy-mass/readings/s3-2.json`). The
 * Holy Mass page works out the day's entry on the device (lib/katameros/cycle.ts) and loads this file.
 */
import type { APIRoute } from 'astro';
import { LOCALES, type Locale } from '../../../../i18n/index.ts';
import { allEntries, entryTexts } from '../../../../lib/katameros/texts.ts';

export function getStaticPaths() {
  const keys = [...allEntries().keys()];
  return LOCALES.flatMap((lang) => keys.map((key) => ({ params: { lang, key } })));
}

export const GET: APIRoute = ({ params }) => {
  const entry = allEntries().get(params.key!)!;
  return new Response(JSON.stringify(entryTexts(entry, params.lang as Locale)), { headers: { 'Content-Type': 'application/json; charset=utf-8' } });
};
