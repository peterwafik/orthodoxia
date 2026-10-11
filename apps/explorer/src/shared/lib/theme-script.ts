/**
 * Orthodoxia patch (PATCHES.md): the DOM-free part of the theme handling, shared by the app
 * (`theme.ts`) and the build (`vite/locale.ts`).
 */

/** Where the site remembers the reader's light/dark choice (the same key on every page). */
export const THEME_STORAGE_KEY = 'orthodoxia:theme';

/**
 * The inline script that applies the saved theme before first paint (no flash of the wrong theme).
 * Kept in sync with the site's own (apps/web/src/layouts/Base.astro).
 */
export const APPLY_SAVED_THEME_SCRIPT = `try{var t=localStorage.getItem(${JSON.stringify(THEME_STORAGE_KEY)});if(t==='light'||t==='dark')document.documentElement.dataset.theme=t}catch(e){}`;
