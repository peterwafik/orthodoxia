import type { ReactNode } from 'react';
import { formatInteger, formatShare } from '../../../shared/lib/format.ts';
import type { LinkSummary } from '../link-summary.ts';
import styles from './LinkStats.module.css';
import { t } from '../../../i18n/messages.ts';

interface LinkStatsProps {
  readonly summary: LinkSummary;
  /**
   * How to interact, shown under the numbers: with a mouse (on wide screens), or on a touch
   * screen (phones included, since touch gestures are harder to guess).
   */
  readonly hint?: { readonly pointer: ReactNode; readonly touch: ReactNode };
}

/** A quiet corner summary of what is on screen; context, not the main event. */
export function LinkStats({ summary, hint }: LinkStatsProps) {
  const { verseCount, shownLinks, totalLinks, connectedVerses, crossTestamentLinks } = summary;
  return (
    <div className={styles.stats} aria-label={t.stats.label}>
      <span>
        <strong>{formatInteger(verseCount)}</strong> {t.stats.verses} ·{' '}
        {t.stats.linksShown(
          formatInteger(shownLinks),
          shownLinks < totalLinks ? formatInteger(totalLinks) : null,
        )}
      </span>
      <span className={styles.secondary}>
        {t.stats.connected(formatShare(connectedVerses, verseCount))} ·{' '}
        {t.stats.crossTestament(formatInteger(crossTestamentLinks))}
      </span>
      {hint !== undefined && (
        <>
          <span className={`${styles.hint} ${styles.pointerHint}`}>{hint.pointer}</span>
          <span className={`${styles.hint} ${styles.touchHint}`}>{hint.touch}</span>
        </>
      )}
    </div>
  );
}
