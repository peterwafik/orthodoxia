import type { Article } from '../types.ts';

/** Every `articles/<question-id>.ts` that exports `article`. Adding a file is all it takes to register an article. */
const modules = import.meta.glob<{ article: Article }>('./*.ts', { eager: true });

export const ARTICLES: readonly Article[] = Object.entries(modules)
  .filter(([path]) => !path.endsWith('/index.ts'))
  .map(([, module]) => module.article)
  .sort((a, b) => a.id.localeCompare(b.id));
