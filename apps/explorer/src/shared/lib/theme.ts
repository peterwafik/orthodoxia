import { useSyncExternalStore } from 'react';
import { THEME_STORAGE_KEY } from './theme-script.ts';

export { THEME_STORAGE_KEY };

/**
 * Orthodoxia patch (PATCHES.md): the explorer follows the site's light/dark theme.
 *
 * The theme is `<html data-theme>` when the reader chose one (saved by the site under the same
 * storage key, so the choice is shared with every other page), else the operating system's
 * preference. An inline script in the page head applies the saved choice before first paint (see
 * `vite/locale.ts`); this module reads it, changes it, and tells subscribers when it changes, so the
 * canvases can repaint.
 */
export type Theme = 'light' | 'dark';

const DARK_QUERY = '(prefers-color-scheme: dark)';

export function currentTheme(): Theme {
  if (typeof document === 'undefined') return 'dark';
  const chosen = document.documentElement.dataset['theme'];
  if (chosen === 'light' || chosen === 'dark') return chosen;
  return window.matchMedia(DARK_QUERY).matches ? 'dark' : 'light';
}

/** Applies a theme and remembers it for every page of the site. */
export function setTheme(theme: Theme): void {
  document.documentElement.dataset['theme'] = theme;
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // Storage unavailable (private mode): the choice lasts for this page view.
  }
}

export function subscribeToTheme(onChange: () => void): () => void {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
  const query = window.matchMedia(DARK_QUERY);
  query.addEventListener('change', onChange);
  return () => {
    observer.disconnect();
    query.removeEventListener('change', onChange);
  };
}

/** The current theme, re-rendering when the reader or the system changes it. */
export function useTheme(): Theme {
  return useSyncExternalStore(subscribeToTheme, currentTheme, () => 'dark');
}
