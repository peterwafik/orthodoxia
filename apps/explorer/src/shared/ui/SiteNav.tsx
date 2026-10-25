import { LOCALE } from '../../i18n/locale.ts';
import { t } from '../../i18n/messages.ts';
import { MenuButton } from '../../visualizations/shared/components/MenuButton.tsx';
import { setTheme, useTheme } from '../lib/theme.ts';
import { SiteMenuIcon } from './icons.tsx';
import styles from './SiteNav.module.css';

/**
 * Orthodoxia patch (PATCHES.md): the site's own navigation inside the explorer's header. The brand
 * leads home, the language link opens the same view and passage in the other language, the theme
 * button switches light/dark for the whole site (the same control and icon as on every other page),
 * and the menu holds the rest of the site.
 */

const OTHER_LOCALE = LOCALE === 'ar' ? 'en' : 'ar';

/** The current address with `/en/` and `/ar/` swapped, keeping the view, passage and filters. */
function otherLanguageHref(): string {
  if (typeof window === 'undefined') return `/${OTHER_LOCALE}/explore/`;
  const { pathname, search, hash } = window.location;
  return `${pathname.replace(/^\/(en|ar)\//, `/${OTHER_LOCALE}/`)}${search}${hash}`;
}

export function Brand() {
  return (
    <a href={`/${LOCALE}/`} className={styles.brand}>
      <CopticCross />
      <span>{t.siteName}</span>
    </a>
  );
}

export function SiteNav() {
  const links = [
    { href: `/${LOCALE}/`, label: t.site.home },
    { href: `/${LOCALE}/bible/`, label: t.site.bible },
    { href: `/${LOCALE}/holy-mass/`, label: t.site.holyMass },
    { href: `/${LOCALE}/church-history/`, label: t.site.churchHistory },
    { href: `/${LOCALE}/apologetics/`, label: t.site.faith },
    { href: `/${LOCALE}/about/`, label: t.site.about },
  ];
  return (
    <div className={styles.nav}>
      <a
        className={styles.language}
        href={otherLanguageHref()}
        hrefLang={OTHER_LOCALE}
        lang={OTHER_LOCALE}
        onClick={(event) => {
          // The address changes as the reader navigates; read it at the moment of the click.
          event.currentTarget.href = otherLanguageHref();
        }}
      >
        {t.site.otherLanguage}
      </a>
      <ThemeToggle />
      <MenuButton label={t.site.menu} icon={SiteMenuIcon} iconOnly>
        <nav aria-label={t.site.menu}>
          <ul className={styles.links}>
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </MenuButton>
    </div>
  );
}

/** The site's light/dark switch: a circle half filled, as in the site header. */
function ThemeToggle() {
  const theme = useTheme();
  return (
    <button
      type="button"
      className={styles.theme}
      aria-label={t.site.themeToggle}
      title={t.site.themeToggle}
      onClick={() => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
      }}
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="M12 4a8 8 0 0 1 0 16Z" fill="currentColor" />
      </svg>
    </button>
  );
}

/** The Coptic cross mark, as on the rest of the site (decorative; the name beside it is the label). */
function CopticCross() {
  return (
    <svg className={styles.cross} viewBox="0 0 32 32" aria-hidden="true">
      <g fill="currentColor">
        <rect x="13.5" y="6" width="5" height="20" rx="0.5" />
        <rect x="6" y="13.5" width="20" height="5" rx="0.5" />
        {[0, 90, 180, 270].map((angle) => (
          <g key={angle} transform={`rotate(${angle} 16 16)`}>
            <circle cx="16" cy="2.6" r="1.9" />
            <circle cx="12.7" cy="4.4" r="1.6" />
            <circle cx="19.3" cy="4.4" r="1.6" />
          </g>
        ))}
      </g>
    </svg>
  );
}
