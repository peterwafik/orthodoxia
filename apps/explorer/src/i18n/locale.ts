/**
 * The interface language, fixed at build time: the site builds the explorer once per language
 * (`LOCALE=ar` → `/ar/explore/`), and Vite replaces `__LOCALE__` with the value (vite.config.ts).
 * In Node (the Vite config's own plugins, the data pipeline) it falls back to the `LOCALE`
 * environment variable, so build-time HTML (e.g. dataset preloads) matches the build.
 */
export type Locale = 'en' | 'ar';

declare const __LOCALE__: string | undefined;

const configured =
  typeof __LOCALE__ === 'undefined'
    ? (globalThis as { process?: { env?: Record<string, string | undefined> } }).process?.env?.[
        'LOCALE'
      ]
    : __LOCALE__;

export const LOCALE: Locale = configured === 'ar' ? 'ar' : 'en';

/** Direction of the interface text. Visualizations keep their own left-to-right geometry. */
export const DIRECTION: 'ltr' | 'rtl' = LOCALE === 'ar' ? 'rtl' : 'ltr';

/** Picks the value for the current language. */
export function localized<T>(values: { readonly en: T; readonly ar: T }): T {
  return values[LOCALE];
}
