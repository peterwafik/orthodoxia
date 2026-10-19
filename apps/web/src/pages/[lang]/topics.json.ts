/**
 * The topic names in one language, as a static file (`/en/topics.json`, `/ar/topics.json`). The Bible
 * reader loads it the first time the topic popup is opened, so the chapter pages stay small and each
 * language gets only its own names. `h` says whether the topic has any passage at all, and `o` where its
 * passages come from (s = the family's study list, c = listed by hand, n = Nave's Topical Bible). The topics of family 44 also carry `ev`: the evidence the Coptic Orthodox Church gives for that point of faith (its claim, links to the verses, and the early witnesses).
 */
import type { APIRoute } from 'astro';
import { FAMILIES, TOPIC_DATA } from '../../lib/topics/topics.ts';
import { LOCALES, type Locale } from '../../i18n/index.ts';
import { EVIDENCE_FAMILY, evidenceForTopic } from '../../lib/topics/evidence.ts';

export function getStaticPaths() {
  return LOCALES.map((lang) => ({ params: { lang } }));
}

const LETTER = { start: 's', curated: 'c', nave: 'n' } as const;
const flags = (id: string): { h: 0 | 1; o: string } => {
  const entry = TOPIC_DATA.get(id);
  return entry === undefined ? { h: 0, o: '' } : { h: 1, o: [...entry.origins].map((origin) => LETTER[origin]).join('') };
};

export const GET: APIRoute = ({ params }) => {
  const locale = params.lang as Locale;
  const families = FAMILIES.map((family) => ({
    id: family.id,
    name: family[locale],
    color: family.color,
    ...flags(family.id),
    topics: family.topics.map((topic) => ({
      id: topic.id,
      name: topic[locale],
      ...flags(topic.id),
      ...(family.id === EVIDENCE_FAMILY.id ? { ev: evidenceForTopic(topic.en, locale) } : {}),
    })),
  }));
  return new Response(JSON.stringify({ families }), { headers: { 'Content-Type': 'application/json; charset=utf-8' } });
};
