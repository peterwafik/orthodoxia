// Orthodoxia: replaces upstream's Filters menu (a community-votes threshold). Readers choose which
// kinds of link to show; the arcs, threads and details follow at once (see PATCHES.md).

import { formatInteger } from '../../../shared/lib/format.ts';
import { CategoriesIcon, ResetIcon } from '../../../shared/ui/icons.tsx';
import {
  isDefaultFilter,
  LINK_CATEGORIES,
  toggleCategory,
  type LinkCategory,
  type LinkFilter,
} from '../link-filter.ts';
import styles from './controls.module.css';
import { MenuButton } from './MenuButton.tsx';
import { t } from '../../../i18n/messages.ts';

interface CategoriesMenuProps {
  readonly filter: LinkFilter;
  readonly defaults: LinkFilter;
  readonly onChange: (filter: LinkFilter) => void;
  /** How many links of each kind there are in the whole Bible. */
  readonly counts: Readonly<Record<LinkCategory, number>>;
}

/** A header button listing every kind of link, each with a checkbox. */
export function CategoriesMenu({ filter, defaults, onChange, counts }: CategoriesMenuProps) {
  const isDefault = isDefaultFilter(filter, defaults);
  return (
    <MenuButton label={t.categories.label} icon={CategoriesIcon} indicator={!isDefault}>
      <p className={styles.hint}>{t.categories.intro}</p>
      <ul className={styles.categories}>
        {LINK_CATEGORIES.map((category) => (
          <li key={category}>
            <label className={styles.category} data-category={category}>
              <input
                type="checkbox"
                checked={filter.categories.has(category)}
                onChange={() => {
                  onChange(toggleCategory(filter, category));
                }}
              />
              <span className={styles.categoryText}>
                <span className={styles.categoryName}>
                  {t.categories.names[category]}
                  <span className={styles.categoryCount}>{formatInteger(counts[category])}</span>
                </span>
                <span className={styles.hint}>{t.categories.descriptions[category]}</span>
              </span>
            </label>
          </li>
        ))}
      </ul>
      <button
        type="button"
        className={styles.button}
        disabled={isDefault}
        onClick={() => {
          onChange(defaults);
        }}
      >
        <ResetIcon />
        {t.categories.reset}
      </button>
    </MenuButton>
  );
}
