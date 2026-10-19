/**
 * Step 2 for Rites_Liturgy_Full-1.pdf: turns the positioned text pieces of a page (from rites-extract.cjs)
 * into segments: a speaker's part (priest, deacon, people) or a rubric (what is done), each with its
 * English and its Arabic text taken from the same place on the page.
 *
 * Layout of the book: three columns, Coptic (transliteration) | English | Arabic. A speaker's part begins
 * with a label in all three ("Priest:" ... "الكاهن:"); a rubric has its English at the left margin (where
 * the Coptic column would be) and no Coptic beside it; a section heading is centred and bold.
 */
const ARABIC = /[؀-ۿ]/;
const DIACRITICS = /^[ً-ْٰ\s]+$/;
const LABEL_EN = /^(Priest|Bishop|Pope|Patriarch|Deacon|Archdeacon|Subdeacon|Reader|People|Congregation|Choir|Everyone|All):?$/;
const ROLE_EN = { Priest: 'priest', Bishop: 'priest', Pope: 'priest', Patriarch: 'priest', Deacon: 'deacon', Archdeacon: 'deacon', Subdeacon: 'deacon', Reader: 'deacon', People: 'people', Congregation: 'people', Choir: 'people', Everyone: 'people', All: 'people' };
const LABEL_AR = /^(?:الكاهن|الشماس|الشعب|الأسقف|البطريرك|الإيبوذياكون|الأرشيدياكون|الجميع|الجماعة|المرتل|المرتلون|القارئ):?$|^:(?:الكاهن|الشماس|الشعب)$/;

const ENGLISH_X = 250; // English prayer text starts at about 261; the left margin (Coptic or rubric) is at about 71
const FOOTER_Y = 62; // the page number

/** English text of lines: hyphen at the end of a line joins the next one without a space. */
function joinLines(lines) {
  let out = '';
  for (const line of lines) {
    if (line === '') continue;
    if (out === '') out = line;
    else if (/[A-Za-z]-$/.test(out)) out += line;
    else out += ' ' + line;
  }
  return out;
}

/** Arabic text of items: rows top to bottom, each row right to left; touching pieces are joined without a space. */
function arabicText(items) {
  const rows = [];
  for (const item of [...items].sort((a, b) => b.y - a.y)) {
    const row = rows.find((candidate) => Math.abs(candidate.y - item.y) < 4.5);
    if (row !== undefined) row.items.push(item);
    else rows.push({ y: item.y, items: [item] });
  }
  rows.sort((a, b) => b.y - a.y);
  const lines = rows.map((row) => {
    const ordered = row.items.sort((a, b) => b.x + b.w - (a.x + a.w) || b.x - a.x);
    let text = '';
    let leftEdge = null;
    for (const item of ordered) {
      if (DIACRITICS.test(item.t)) {
        // a vowel sign belongs on the last letter, before any full stop that was written after it
        const chars = [...text];
        const at = chars.map((ch) => /[ء-ي]/.test(ch)).lastIndexOf(true);
        chars.splice(at + 1, 0, item.t.trim());
        text = chars.join('');
        continue;
      }
      const gap = leftEdge === null ? 0 : leftEdge - (item.x + item.w);
      if (text !== '' && gap > 1.2) text += ' ';
      text += item.t;
      leftEdge = item.x;
    }
    return text.replace(/\s+([ً-ْٰ])/g, '$1').replace(/\s+/g, ' ').trim();
  });
  return lines.filter((line) => line !== '').join(' ');
}

function parsePage(page) {
  const items = page.items.filter((item) => item.y >= FOOTER_Y && item.t.trim() !== '');

  // Coptic fonts: the fonts that have special characters of the transliteration at the left margin
  const special = new Map();
  for (const item of items) {
    if (ARABIC.test(item.t) || item.x >= ENGLISH_X) continue;
    if (/[`@\][}]/.test(item.t)) special.set(item.f, (special.get(item.f) ?? 0) + 1);
  }
  const copticFonts = new Set([...special].filter(([, count]) => count >= 2).map(([font]) => font));

  // A lone full stop or vowel sign in an Arabic font, out in the Arabic column, is Arabic too. Anything with
  // Latin letters stays English: on some pages the English rubrics are set in the same font as the Arabic.
  const arabicFonts = new Set(items.filter((item) => ARABIC.test(item.t)).map((item) => item.f));
  const arabic = [];
  const english = [];
  for (const item of items) {
    if (ARABIC.test(item.t) || (arabicFonts.has(item.f) && !/[A-Za-z0-9]/.test(item.t) && item.x >= 300)) arabic.push(item);
    else if (copticFonts.has(item.f)) continue; // Coptic transliteration: not used
    else english.push(item);
  }

  // English lines
  const rows = [];
  for (const item of [...english].sort((a, b) => b.y - a.y)) {
    const row = rows.find((candidate) => Math.abs(candidate.y - item.y) < 2.4);
    if (row !== undefined) row.items.push(item);
    else rows.push({ y: item.y, items: [item] });
  }
  const lines = rows
    .sort((a, b) => b.y - a.y)
    .map((row) => {
      const ordered = row.items.sort((a, b) => a.x - b.x);
      return { y: row.y, x0: ordered[0].x, x1: Math.max(...ordered.map((i) => i.x + i.w)), fonts: new Set(ordered.map((i) => i.f)), text: ordered.map((i) => i.t).join(' ').replace(/\s+/g, ' ').trim() };
    });

  const boldFonts = new Set(lines.filter((line) => LABEL_EN.test(line.text)).flatMap((line) => [...line.fonts]));
  const segments = []; // { type, role, top, enLines }
  let current = null;
  const close = () => {
    current = null;
  };
  for (const line of lines) {
    const label = LABEL_EN.exec(line.text);
    const centre = (line.x0 + line.x1) / 2;
    const bold = [...line.fonts].every((font) => boldFonts.has(font));
    if (label !== null) {
      current = { type: 'say', role: ROLE_EN[label[1]], top: line.y + 8, enLines: [] };
      segments.push(current);
    } else if (bold && boldFonts.size > 0 && line.x0 < ENGLISH_X && centre > 200 && centre < 420) {
      segments.push({ type: 'heading', role: null, top: line.y + 8, enLines: [line.text] });
      close();
    } else if (line.x0 < ENGLISH_X) {
      if (current === null || current.type !== 'rubric') {
        current = { type: 'rubric', role: null, top: line.y + 8, enLines: [] };
        segments.push(current);
      }
      current.enLines.push(line.text);
    } else {
      if (current === null || current.type !== 'say') {
        current = { type: 'say', role: null, top: line.y + 8, enLines: [] };
        segments.push(current);
      }
      current.enLines.push(line.text);
    }
  }

  // Arabic pieces go to the segment they sit in (the nearest one above them); labels are not text
  const arabicOf = segments.map(() => []);
  for (const item of arabic) {
    const text = item.t.trim();
    if (LABEL_AR.test(text)) continue;
    let target = 0;
    segments.forEach((segment, index) => {
      if (item.y <= segment.top) target = index;
    });
    if (segments.length > 0) arabicOf[target].push(item);
  }
  // a heading (and the Arabic under it) is not text: the stop already has its title
  return segments
    .map((segment, index) => ({ type: segment.type, role: segment.role, en: joinLines(segment.enLines), ar: arabicText(arabicOf[index]) }))
    .filter((segment) => segment.type !== 'heading');
}

/** Joins the segments of several pages: an unlabelled start of a page continues the part above it. */
function mergePages(pageSegments) {
  const blocks = [];
  let lastRole = 'priest';
  for (const segments of pageSegments) {
    segments.forEach((segment, index) => {
      if (segment.type === 'heading') return;
      if (segment.type === 'say') {
        const previous = blocks.at(-1);
        if (segment.role === null && index === 0 && previous !== undefined && previous.type === 'say') {
          previous.en = [previous.en, segment.en].filter(Boolean).join(' ');
          previous.ar = [previous.ar, segment.ar].filter(Boolean).join(' ');
          return;
        }
        if (segment.role !== null) lastRole = segment.role;
        blocks.push({ type: 'say', role: segment.role ?? lastRole, en: segment.en, ar: segment.ar });
      } else {
        blocks.push({ type: 'rubric', role: 'rubric', en: segment.en, ar: segment.ar });
      }
    });
  }
  return blocks.filter((block) => block.en !== '' || block.ar !== '');
}

module.exports = { parsePage, mergePages, arabicText, joinLines };
