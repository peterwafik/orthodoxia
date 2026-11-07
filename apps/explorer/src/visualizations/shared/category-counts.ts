// Orthodoxia: how many links of each kind the Bible has, for the categories menu.

import { christLinks } from '../../christ-links/christ-links.ts';
import type { LinkReasons } from '../../link-reasons/link-reasons.ts';
import type { LinkCategory } from './link-filter.ts';

const cache = new WeakMap<LinkReasons, Readonly<Record<LinkCategory, number>>>();

export function categoryCounts(reasons: LinkReasons): Readonly<Record<LinkCategory, number>> {
  let counts = cache.get(reasons);
  if (!counts) {
    const { jesus, quotation, parallel, topic, words } = reasons.countByCategory();
    const hand = { jesus: 0, prophecy: 0, symbol: 0 };
    for (const link of christLinks().links) {
      const kind = christLinks().entryOf(link.id)?.kind;
      if (kind) hand[kind] += 1;
    }
    counts = {
      jesus: jesus + hand.jesus,
      prophecy: hand.prophecy,
      symbol: hand.symbol,
      quotation,
      parallel,
      topic,
      words,
    };
    cache.set(reasons, counts);
  }
  return counts;
}
