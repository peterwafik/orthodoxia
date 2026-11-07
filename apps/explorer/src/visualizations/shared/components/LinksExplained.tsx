// Orthodoxia: what a link is and where the count comes from, opened from the arcs' summary.

import { christLinks } from '../../../christ-links/christ-links.ts';
import { t } from '../../../i18n/messages.ts';
import type { LinkReasons } from '../../../link-reasons/link-reasons.ts';
import { formatInteger } from '../../../shared/lib/format.ts';
import { InfoIcon } from '../../../shared/ui/icons.tsx';
import styles from './LinkStats.module.css';

export function LinksExplained({ reasons }: { readonly reasons: LinkReasons }) {
  const counts = reasons.countByCategory();
  const handPicked = christLinks().links.length;
  const openBible =
    counts.jesus +
    counts.quotation +
    counts.parallel +
    counts.topic +
    counts.words +
    counts.unclear;
  const names = t.categories.names;
  const rows: readonly (readonly [string, number])[] = [
    [names.jesus, counts.jesus],
    [names.quotation, counts.quotation],
    [names.parallel, counts.parallel],
    [names.topic, counts.topic],
    [names.words, counts.words],
  ];
  return (
    <details className={styles.explained}>
      <summary>
        <InfoIcon /> {t.linksInfo.button}
      </summary>
      <div className={styles.card}>
        <p>{t.linksInfo.intro}</p>
        <h4>{t.linksInfo.where(formatInteger(openBible + handPicked))}</h4>
        <ul>
          <li>{t.linksInfo.openBible(formatInteger(openBible))}</li>
          <li data-gold="">{t.linksInfo.handPicked(formatInteger(handPicked))}</li>
        </ul>
        <h4>{t.linksInfo.which}</h4>
        <p>{t.linksInfo.reasons}</p>
        <dl>
          {rows.map(([name, count]) => (
            <div key={name}>
              <dt>{name}</dt>
              <dd>{formatInteger(count)}</dd>
            </div>
          ))}
        </dl>
        <p>{t.linksInfo.hidden(formatInteger(counts.unclear))}</p>
        <p>{t.linksInfo.cap}</p>
        <p className={styles.choose}>{t.linksInfo.choose}</p>
      </div>
    </details>
  );
}
