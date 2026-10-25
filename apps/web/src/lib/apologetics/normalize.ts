/**
 * Search normalisation. It is used to *match* only: stored text, names, citations and quotations are never altered.
 * Arabic: strips diacritics and tatweel, folds the alif variants, alif maqsura to ya and ta marbuta to ha, and turns
 * Arabic-Indic digits into Latin ones. Latin: lowercases, removes accents, and glues a leading number to its book name
 * ("1 Cor 15" → "1cor 15") so reference forms match whatever way they are typed.
 */
export function normalize(input: string): string {
  return input
    .normalize('NFKD')
    .replace(/[ً-ٰٟۖ-ۭـ]/g, '')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[آأإٱ]/g, 'ا')
    .replace(/ى/g, 'ي')
    .replace(/ة/g, 'ه')
    .replace(/[٠-٩]/g, (d) => String(d.charCodeAt(0) - 0x0660))
    .replace(/[۰-۹]/g, (d) => String(d.charCodeAt(0) - 0x06f0))
    .toLowerCase()
    .replace(/[“”«»"'’‘`]/g, '')
    .replace(/[^\p{L}\p{N}:.\-\s]/gu, ' ')
    .replace(/(^|\s)([1-3])\s+(?=[a-z؀-ۿ])/g, '$1$2')
    .replace(/\s+/g, ' ')
    .trim();
}

/** Splits a normalised string into the tokens a query must find. */
export function tokens(input: string): string[] {
  return normalize(input)
    .split(' ')
    .filter((token) => token.length > 0);
}

/** A record matches when every query token is the start of some token of the record's text. */
export function matches(queryTokens: readonly string[], haystackTokens: ReadonlySet<string>, haystack: string): boolean {
  return queryTokens.every((q) => {
    if (haystackTokens.has(q)) return true;
    return haystack.includes(` ${q}`) || haystack.startsWith(q);
  });
}
