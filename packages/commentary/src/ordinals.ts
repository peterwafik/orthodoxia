/**
 * Arabic ordinal numbers 1–150 as written in chapter headings ("الأصحاح الحادى والعشرون",
 * "المزمور المائة والخامس"), matched after removing spaces, diacritics and letter variants, since
 * extracted headings often lose their spacing.
 */

const UNITS = ['', 'اول', 'ثاني', 'ثالث', 'رابع', 'خامس', 'سادس', 'سابع', 'ثامن', 'تاسع'];
/** In compounds, 1 is "حادي" (الحادي عشر، الحادي والعشرون). */
const UNITS_COMPOUND = ['', 'حادي', 'ثاني', 'ثالث', 'رابع', 'خامس', 'سادس', 'سابع', 'ثامن', 'تاسع'];
const TENS = ['', 'عاشر', 'عشرون', 'ثلاثون', 'اربعون', 'خمسون', 'ستون', 'سبعون', 'ثمانون', 'تسعون'];

/** Normalizes Arabic for ordinal matching: no spaces, diacritics or tatweel; unified letters. */
export function compactArabic(text: string): string {
  return text
    .replace(/[ً-ْٰـ\s]/g, '')
    .replace(/[أإآٱ]/g, 'ا')
    .replace(/ى/g, 'ي')
    .replace(/ة/g, 'ه');
}

function ordinalForms(number: number): string[] {
  const hundreds = Math.floor(number / 100);
  const rest = number % 100;
  const tens = Math.floor(rest / 10);
  const units = rest % 10;
  let core: string[];
  if (rest === 0) core = [];
  else if (rest < 10) core = [`ال${UNITS[units]}`];
  else if (rest === 10) core = ['العاشر'];
  else if (rest < 20) core = [`ال${UNITS_COMPOUND[units]}عشر`];
  else if (units === 0) core = [`ال${TENS[tens]}`];
  else core = [`ال${UNITS_COMPOUND[units]}وال${TENS[tens]}`];
  if (hundreds === 0) return core;
  // 100 "المائة/المئة"; 101+ "المائة والأول" or "الأول بعد المائة".
  const hundred = ['المائه', 'المئه'];
  if (rest === 0) return hundred;
  return hundred.flatMap((h) => [`${h}و${core[0]}`, `${core[0]}بعد${h}`]);
}

const ORDINALS = new Map<string, number>();
for (let number = 1; number <= 150; number++) {
  for (const form of ordinalForms(number)) ORDINALS.set(compactArabic(form), number);
}

/**
 * The chapter number in a heading such as "الأصحاح الحادى والعشرون", "اصحاح 5" or
 * "المزمور الخمسون", or `null` when the text is not a chapter heading.
 */
export function chapterHeadingNumber(heading: string): number | null {
  const compact = compactArabic(heading).replace(/[^ء-ي0-9]/g, '');
  // The article's lam-alef ligature often extracts swapped (األصحاح), in the ordinal too (األول).
  const match = /^[ال]{0,3}(?:صحاح|مزمور)(.+)$/.exec(compact);
  if (match === null) return null;
  const rest = match[1]!.replace(/^اال/, 'الا').replace(/واال/g, 'والا');
  if (/^\d{1,3}$/.test(rest)) return Number(rest);
  return ORDINALS.get(rest) ?? null;
}
