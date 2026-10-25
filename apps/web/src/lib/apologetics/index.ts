import { bookBySlug } from '@orthodoxia/bible';
import { ARTICLES } from '../../data/apologetics/articles/index.ts';
import { GLOSSARY } from '../../data/apologetics/glossary.ts';
import { JOURNEYS } from '../../data/apologetics/journeys.ts';
import { QUESTIONS, QUESTION_BY_ID, TOPICS, TOPIC_BY_ID } from '../../data/apologetics/questions.ts';
import { SOURCES } from '../../data/apologetics/sources.ts';
import type { Article, Evidence, Line, LinkStatus, Paras, Question, SourceWork } from '../../data/apologetics/types.ts';
import { DEFAULT_EDITION } from '@orthodoxia/bible';
import { localePath, type Locale } from '../../i18n/index.ts';
import linkReport from '../../data/apologetics/link-report.json';
import { normalize } from './normalize.ts';

/**
 * Drafts are shown, plainly labelled and kept out of search engines, so the owner can read them. Set to false to build only
 * articles that a named human reviewer has published.
 */
export const SHOW_DRAFTS = true;

/** Whether pages announce that an article has not been reviewed by a named person (banner, byline, "draft" and "proposed" labels). */
export const SHOW_REVIEW_NOTICES = false;

/** True when an article should carry the unreviewed notices on its pages. */
export const showsDraftNotice = (article: { readonly state: string }): boolean => SHOW_REVIEW_NOTICES && article.state !== 'published';

export const l = (line: Line, locale: Locale): string => line[locale];
export const paras = (value: Paras, locale: Locale): readonly string[] => value[locale];

export const apoPath = (locale: Locale, path = ''): string => localePath(locale, path === '' ? 'apologetics' : `apologetics/${path}`);

export function isVisible(article: Article): boolean {
  return article.state === 'published' || (SHOW_DRAFTS && (article.state === 'draft' || article.state === 'in_review'));
}

export const VISIBLE_ARTICLES: readonly Article[] = ARTICLES.filter(isVisible);
export const ARTICLE_BY_QUESTION: ReadonlyMap<string, Article> = new Map(VISIBLE_ARTICLES.map((a) => [a.questionId, a]));

type LinkEntry = { status: LinkStatus; checked?: string; note?: string };
const report = linkReport as unknown as Record<string, LinkEntry>;

/** Sources with the latest link-check result merged in (`npm run apologetics:links`). */
export const ALL_SOURCES: readonly SourceWork[] = SOURCES.map((s) => (report[s.id] === undefined ? s : { ...s, link: report[s.id]! }));
export const SOURCE_BY_ID: ReadonlyMap<string, SourceWork> = new Map(ALL_SOURCES.map((s) => [s.id, s]));

export const GLOSSARY_TERMS = GLOSSARY;
export { JOURNEYS, QUESTIONS, QUESTION_BY_ID, TOPICS, TOPIC_BY_ID };

export function questionsOf(topicId: string): readonly Question[] {
  return QUESTIONS.filter((q) => q.topic === topicId);
}

/** The sources an article cites, in order of first citation, then its further reading. */
export function citedSources(article: Article): SourceWork[] {
  const ids = [...article.evidence.map((e) => e.sourceId), ...article.furtherReading];
  return [...new Set(ids)].flatMap((id) => {
    const source = SOURCE_BY_ID.get(id);
    return source === undefined ? [] : [source];
  });
}

/** Articles and claims in which a source is cited (source → claim navigation). */
export function citationsOf(sourceId: string): { article: Article; evidence: Evidence[] }[] {
  return VISIBLE_ARTICLES.flatMap((article) => {
    const evidence = article.evidence.filter((e) => e.sourceId === sourceId);
    return evidence.length > 0 || article.furtherReading.includes(sourceId) ? [{ article, evidence }] : [];
  });
}

export function bibleLink(locale: Locale, ref: NonNullable<Evidence['bible']>): { href: string; label: string } | null {
  const book = bookBySlug(ref.book);
  if (book === undefined) return null;
  const href = localePath(locale, `bible/${DEFAULT_EDITION[locale]}/${book.slug}/${ref.chapter}`);
  const verse = ref.verse === undefined ? '' : `:${ref.verse.replace('-', '–')}`;
  return { href, label: `${locale === 'ar' ? book.ar : book.en} ${ref.chapter}${verse}` };
}

/** One searchable record. `text` is normalised for matching; `title`/`summary` are shown. */
export interface SearchRecord {
  id: string;
  type: 'article' | 'question' | 'source' | 'term';
  url: string;
  title: string;
  summary: string;
  topic?: string;
  kind?: string;
  standpoint?: string;
  difficulty?: string;
  access?: string;
  review?: string;
  state?: string;
  /** Fields the query is matched against, each normalised, so a result can say where it matched. */
  fields: Record<string, string>;
}

export function buildSearchIndex(locale: Locale): SearchRecord[] {
  const out: SearchRecord[] = [];
  const f = (v: string): string => normalize(v);

  for (const q of QUESTIONS) {
    const article = ARTICLE_BY_QUESTION.get(q.id);
    const topic = TOPIC_BY_ID.get(q.topic)!;
    if (article === undefined) {
      out.push({ id: q.id, type: 'question', url: apoPath(locale, `questions/${q.slug}`), title: q.title[locale], summary: '', topic: q.topic, difficulty: q.difficulty, state: 'backlog', fields: { title: f(`${q.title.en} ${q.title.ar}`), topic: f(`${topic.title.en} ${topic.title.ar}`) } });
      continue;
    }
    const refs = article.evidence.flatMap((e) => (e.bible === undefined ? [] : [bibleLink('en', e.bible)?.label ?? '', bibleLink('ar', e.bible)?.label ?? '', e.bible.book]));
    out.push({
      id: q.id,
      type: 'article',
      url: apoPath(locale, `questions/${q.slug}`),
      title: q.title[locale],
      summary: article.shortAnswer[locale],
      topic: q.topic,
      difficulty: q.difficulty,
      state: article.state,
      fields: {
        title: f(`${q.title.en} ${q.title.ar}`),
        answer: f(article.shortAnswer[locale]),
        points: f(article.quickPoints[locale].join(' ')),
        claims: f(article.claims.map((c) => c.proposition[locale]).join(' ')),
        sources: f(article.evidence.map((e) => `${SOURCE_BY_ID.get(e.sourceId)?.title ?? ''} ${SOURCE_BY_ID.get(e.sourceId)?.author ?? ''} ${e.locator}`).join(' ')),
        references: f(refs.join(' ')),
        topic: f(`${topic.title.en} ${topic.title.ar}`),
      },
    });
  }

  for (const s of ALL_SOURCES) {
    out.push({ id: s.id, type: 'source', url: apoPath(locale, `sources/${s.id.toLowerCase()}`), title: s.title, summary: s.use[locale], kind: s.kind, standpoint: s.standpoint, access: s.access, review: s.review, fields: { title: f(s.title), author: f(s.author), locator: f(s.locator ?? ''), about: f(`${s.use.en} ${s.use.ar}`), id: f(s.id) } });
  }

  for (const t of GLOSSARY) {
    out.push({ id: t.id, type: 'term', url: `${apoPath(locale, 'glossary')}#${t.id}`, title: t.term[locale], summary: t.definition[locale], fields: { term: f(`${t.term.en} ${t.term.ar} ${t.aliases.join(' ')}`), definition: f(`${t.definition.en} ${t.definition.ar}`) } });
  }
  return out;
}
