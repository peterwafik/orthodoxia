import { ar } from './ar.ts';
import { en, type Dictionary } from './en.ts';

export const LOCALES = ['en', 'ar'] as const;
export type Locale = (typeof LOCALES)[number];

const DICTIONARIES: Readonly<Record<Locale, Dictionary>> = { en, ar };

export function isLocale(value: unknown): value is Locale {
  return typeof value === 'string' && (LOCALES as readonly string[]).includes(value);
}

export function t(locale: Locale): Dictionary {
  return DICTIONARIES[locale];
}

export function dir(locale: Locale): 'ltr' | 'rtl' {
  return locale === 'ar' ? 'rtl' : 'ltr';
}

export function otherLocale(locale: Locale): Locale {
  return locale === 'en' ? 'ar' : 'en';
}

/** `/en/about/` → `/ar/about/`. Paths outside a locale prefix map to that locale's home. */
export function switchLocalePath(pathname: string, to: Locale): string {
  const match = /^\/(en|ar)(\/.*)?$/.exec(pathname);
  return match === null ? `/${to}/` : `/${to}${match[2] ?? '/'}`;
}

/** Builds a path inside a locale: `localePath('ar', 'about')` → `/ar/about/`. */
export function localePath(locale: Locale, path = ''): string {
  const trimmed = path.replace(/^\/+|\/+$/g, '');
  return trimmed === '' ? `/${locale}/` : `/${locale}/${trimmed}/`;
}

/**
 * The cross-reference explorer's address for a locale. Only the English build exists until its
 * interface is localized (backlog P1-02), so every locale links there for now.
 */
export function explorerPath(_locale: Locale, view: '' | 'threads' = ''): string {
  return view === '' ? '/en/explore/' : `/en/explore/${view}/`;
}
