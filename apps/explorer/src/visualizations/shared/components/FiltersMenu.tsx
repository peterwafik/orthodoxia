import { formatInteger } from '../../../shared/lib/format.ts';
import { FiltersIcon, ResetIcon } from '../../../shared/ui/icons.tsx';
import {
  describeThreshold,
  isDefaultFilter,
  VOTE_THRESHOLDS,
  type LinkFilter,
} from '../link-filter.ts';
import styles from './controls.module.css';
import { MenuButton } from './MenuButton.tsx';
import { t } from '../../../i18n/messages.ts';

interface FiltersMenuProps {
  readonly filter: LinkFilter;
  readonly defaults: LinkFilter;
  readonly onChange: (filter: LinkFilter) => void;
  /** Links currently shown, and in the whole dataset, so filtering is never hidden. */
  readonly shownLinks: number;
  readonly totalLinks: number;
}

/** Short option labels: the minimum is included, hence ≥ (e.g. "≥ 4" keeps links with 4 votes). */
function thresholdLabel(minVotes: number): string {
  return minVotes === -Infinity ? t.filters.all : `≥ ${String(minVotes)}`;
}

/** Low-key link filters: a button that opens a small popover. */
export function FiltersMenu({
  filter,
  defaults,
  onChange,
  shownLinks,
  totalLinks,
}: FiltersMenuProps) {
  const isDefault = isDefaultFilter(filter, defaults);
  return (
    <MenuButton label={t.filters.label} icon={FiltersIcon} indicator={!isDefault}>
      <label className={styles.field}>
        {t.filters.votes}
        <select
          className={styles.select}
          value={String(filter.minVotes)}
          onChange={(event) => {
            onChange({ ...filter, minVotes: Number(event.target.value) });
          }}
        >
          {VOTE_THRESHOLDS.map((minVotes) => (
            <option key={minVotes} value={String(minVotes)}>
              {thresholdLabel(minVotes)}
            </option>
          ))}
        </select>
      </label>
      <p className={styles.hint}>
        {t.filters.explanation(
          formatInteger(shownLinks),
          formatInteger(totalLinks),
          describeThreshold(filter.minVotes),
          filter.hiddenGenres.size > 0
            ? t.filters.genresHidden(String(filter.hiddenGenres.size))
            : '',
        )}
      </p>
      <p className={styles.hint}>{t.filters.tip}</p>
      <button
        type="button"
        className={styles.button}
        disabled={isDefault}
        onClick={() => {
          onChange(defaults);
        }}
      >
        <ResetIcon />
        {t.filters.reset}
      </button>
    </MenuButton>
  );
}
