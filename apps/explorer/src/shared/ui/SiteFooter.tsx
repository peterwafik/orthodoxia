import type { ReactNode } from 'react';
import { LOCALE } from '../../i18n/locale.ts';
import { t } from '../../i18n/messages.ts';
import styles from './SiteFooter.module.css';

interface SiteFooterProps {
  /** Page-specific credits, such as data attribution. */
  readonly children?: ReactNode;
  /** Extra class for page-specific spacing (CSS Modules class names may be undefined). */
  readonly className?: string | undefined;
}

/** The footer: the site and the upstream project credited, plus the page's data credits. */
export function SiteFooter({ children, className }: SiteFooterProps) {
  return (
    <footer className={className ? `${styles.footer} ${className}` : styles.footer}>
      <span className={styles.owner}>
        <a href={`/${LOCALE}/`}>{t.siteName}</a> · {t.credits.basedOn}{' '}
        <a href="https://github.com/trekhleb/bible-cross-references">Bible Cross-References</a>{' '}
        {t.credits.upstreamAuthor}
      </span>
      {children !== undefined && <span className={styles.credits}>{children}</span>}
    </footer>
  );
}
