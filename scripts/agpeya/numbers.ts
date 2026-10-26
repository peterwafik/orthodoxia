/** Psalm numbers as words in Arabic ("المزمور الحادي عشر") and as Coptic letters ("ⲓ̅ⲁ̅"). */

const UNITS = ['', 'الأول', 'الثاني', 'الثالث', 'الرابع', 'الخامس', 'السادس', 'السابع', 'الثامن', 'التاسع'];
const UNITS_COMPOUND = ['', 'الحادي', 'الثاني', 'الثالث', 'الرابع', 'الخامس', 'السادس', 'السابع', 'الثامن', 'التاسع'];
const TENS = ['', 'العاشر', 'العشرون', 'الثلاثون', 'الأربعون', 'الخمسون', 'الستون', 'السبعون', 'الثمانون', 'التسعون'];

/** 1–150 as an Arabic ordinal: الأول … الحادي عشر … الحادي والعشرون … المائة والثامن عشر. */
export function arabicOrdinal(n: number): string {
  const hundreds = Math.floor(n / 100);
  const rest = n % 100;
  const tens = Math.floor(rest / 10);
  const units = rest % 10;
  let core: string;
  if (rest === 0) core = '';
  else if (rest < 10) core = UNITS[units] as string;
  else if (rest === 10) core = 'العاشر';
  else if (rest < 20) core = `${UNITS_COMPOUND[units] as string} عشر`;
  else if (units === 0) core = TENS[tens] as string;
  else core = `${UNITS_COMPOUND[units] as string} و${(TENS[tens] as string).replace(/^ال/, 'ال')}`;
  if (hundreds === 0) return core;
  return core === '' ? 'المائة' : `المائة و${core}`;
}

const COPTIC_UNITS = ['', 'ⲁ', 'ⲃ', 'ⲅ', 'ⲇ', 'ⲉ', 'ϛ', 'ⲍ', 'ⲏ', 'ⲑ'];
const COPTIC_TENS = ['', 'ⲓ', 'ⲕ', 'ⲗ', 'ⲙ', 'ⲛ', 'ⲝ', 'ⲟ', 'ⲡ', 'ϥ'];
const COPTIC_HUNDREDS = ['', 'ⲣ', 'ⲥ', 'ⲧ', 'ⲩ', 'ⲫ', 'ⲭ', 'ⲯ', 'ⲱ'];

/** 1–150 as a Coptic numeral, each letter with its overline. */
export function copticNumeral(n: number): string {
  const letters = `${COPTIC_HUNDREDS[Math.floor(n / 100)] ?? ''}${COPTIC_TENS[Math.floor((n % 100) / 10)] ?? ''}${COPTIC_UNITS[n % 10] ?? ''}`;
  return [...letters].map((letter) => `${letter}̅`).join('');
}

/** Western digits as Arabic-Indic digits, for the Arabic page. */
export const arabicDigits = (text: string): string => text.replace(/[0-9]/g, (d) => String.fromCharCode(0x0660 + Number(d)));
