import type { Plugin } from 'vite';
import { MESSAGES } from '../src/i18n/messages.ts';
import { APPLY_SAVED_THEME_SCRIPT } from '../src/shared/lib/theme-script.ts';
import { pageOf, PAGES } from './site.ts';

/**
 * Orthodoxia patch (PATCHES.md): localizes the HTML entries for the build's language (`LOCALE`):
 * `<html lang dir>`, the page title and description, and the no-JavaScript message; and applies
 * the reader's saved light/dark theme before first paint (src/shared/lib/theme.ts). Runs before
 * the other HTML plugins, so the head they build from the title and description is localized too.
 */
export const BUILD_LOCALE: 'en' | 'ar' = process.env['LOCALE'] === 'ar' ? 'ar' : 'en';

export function locale(): Plugin {
  const messages = MESSAGES[BUILD_LOCALE];
  const pages = new Map<string, { title: string; description: string }>([
    [
      PAGES.main.entry,
      {
        title: `${messages.explorerTitle} · ${messages.siteName}`,
        description: messages.page.description,
      },
    ],
    [
      PAGES.threads.entry,
      {
        title: `${messages.page.threadsTitle} · ${messages.explorerTitle} · ${messages.siteName}`,
        description: messages.page.threadsDescription,
      },
    ],
  ]);
  return {
    name: 'orthodoxia-locale',
    transformIndexHtml: {
      order: 'pre',
      handler(html, context) {
        const page = pageOf(context.path);
        let result = html.replace(
          /<html lang="en"/,
          `<html lang="${BUILD_LOCALE}" dir="${BUILD_LOCALE === 'ar' ? 'rtl' : 'ltr'}"`,
        );
        const text = page === undefined ? undefined : pages.get(page.entry);
        if (text !== undefined) {
          result = result
            .replace(/<title>[\s\S]*?<\/title>/, `<title>${text.title}</title>`)
            .replace(/(<meta\s+name="description"\s+content=")[^"]*(")/, `$1${text.description}$2`)
            .replace(
              /<noscript>[\s\S]*?<\/noscript>/,
              `<noscript>${messages.page.noscript}</noscript>`,
            );
        }
        return {
          html: result,
          tags: [{ tag: 'script', children: APPLY_SAVED_THEME_SCRIPT, injectTo: 'head-prepend' }],
        };
      },
    },
  };
}
