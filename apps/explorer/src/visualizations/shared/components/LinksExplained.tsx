// Orthodoxia: what a link is and how many of each kind there are, opened from the arcs' summary.

import { t } from '../../../i18n/messages.ts';
import { formatInteger } from '../../../shared/lib/format.ts';
import { InfoIcon } from '../../../shared/ui/icons.tsx';
import { LINK_CATEGORIES, type LinkCategory } from '../link-filter.ts';
import styles from './LinkStats.module.css';

export function LinksExplained({
  counts,
}: {
  readonly counts: Readonly<Record<LinkCategory, number>>;
}) {
  const total = LINK_CATEGORIES.reduce((sum, category) => sum + counts[category], 0);
  return (
    <details className={styles.explained}>
      <summary>
        <InfoIcon /> {t.linksInfo.button}
      </summary>
      <div className={styles.card}>
        <p>{t.linksInfo.intro}</p>
        <h4>{t.linksInfo.byKind(formatInteger(total))}</h4>
        <dl>
          {LINK_CATEGORIES.map((category) => (
            <div key={category}>
              <dt>{t.categories.names[category]}</dt>
              <dd>{formatInteger(counts[category])}</dd>
            </div>
          ))}
        </dl>
        <p>{t.linksInfo.cap}</p>
        <p className={styles.choose}>{t.linksInfo.choose}</p>
      </div>
    </details>
  );
}
