import { LOCALE } from '../../i18n/locale.ts';
import { t } from '../../i18n/messages.ts';
import styles from './SiteFooter.module.css';

/**
 * Orthodoxia patch (PATCHES.md): the footer of the whole site, the same on every page. It is built here in React
 * to match apps/web/src/components/SiteFooter.astro exactly (same words, links and look): keep the two in step.
 * Two slim rows: the site's name with its pages and, set apart by a vertical divider, the project pages; and below,
 * what the site is and its copyright line. Nothing else: no credits, licences or disclaimers.
 */
export function SiteFooter() {
  const pages = [
    { href: `/${LOCALE}/bible/`, label: t.footer.bible },
    { href: `/${LOCALE}/holy-mass/`, label: t.footer.holyMass },
    { href: `/${LOCALE}/church-history/`, label: t.footer.churchHistory },
    { href: `/${LOCALE}/explore/`, label: t.footer.crossReferences },
    { href: `/${LOCALE}/explore/threads/`, label: t.footer.threads },
  ];
  const project = [
    { href: `/${LOCALE}/about/`, label: t.footer.about },
    { href: `/${LOCALE}/sources/`, label: t.footer.sources },
  ];
  return (
    <footer className={styles.sf}>
      <div className={styles.inner}>
        <a className={styles.logo} href={`/${LOCALE}/`}>
          <CopticCross />
          <span>{t.siteName}</span>
        </a>
        <div className={styles.links}>
          <nav className={styles.nav} aria-label={t.footer.pages}>
            <ul>
              {pages.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <span className={styles.divider} aria-hidden="true" />
          <nav className={styles.nav} aria-label={t.footer.project}>
            <ul>
              {project.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
      <div className={styles.note}>
        <p>{t.footer.online}</p>
        <p>
          © {new Date().getFullYear()} {t.siteName}
        </p>
      </div>
    </footer>
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
