import type { Book, Chapter, Verse } from './usfm.ts';

/**
 * Parses an Arabic Wikisource Bible-book page into the same `Book` model as `parseUsfm`.
 *
 * The pages in "تصنيف:الأسفار_القانونية_الثانية" use one layout: a level-2 heading per chapter
 * whose last number is the chapter number (`== سفر طوبيا 1 ==`), then one paragraph per verse
 * starting with its number. Long verses are sometimes wrapped onto following unnumbered lines,
 * which belong to the verse above. Verse 0 (an editorial title in a few pages) is dropped.
 */
export function parseWikisourceBook(wikitext: string, code: string, name: string): Book {
  const lines = cleanWikitext(wikitext).split('\n');
  const chapters: { number: number; verses: { number: string; text: string }[] }[] = [];
  let current: (typeof chapters)[number] | null = null;

  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (line === '') continue;
    const heading = /^=+\s*(.*?)\s*=+$/.exec(line);
    if (heading !== null) {
      const number = /(\d+)\s*$/.exec(toWesternDigits(heading[1]!))?.[1];
      if (number !== undefined) {
        current = { number: Number(number), verses: [] };
        chapters.push(current);
      }
      continue;
    }
    if (current === null) continue;
    const verse = /^(\d+)\s+(.*)$/.exec(toWesternDigits(line));
    if (verse !== null) {
      current.verses.push({ number: verse[1]!, text: verse[2]! });
    } else if (current.verses.length > 0) {
      const last = current.verses[current.verses.length - 1]!;
      last.text = `${last.text} ${line}`;
    }
  }

  return {
    code,
    name,
    chapters: chapters
      .map(
        (chapter): Chapter => ({
          number: chapter.number,
          superscription: null,
          verses: chapter.verses
            .filter((verse) => verse.number !== '0')
            .map(
              (verse, index): Verse => ({
                number: verse.number,
                content: [{ text: verse.text.replace(/\s+/g, ' ').trim(), styles: [] }],
                notes: [],
                paragraph: index === 0,
                poetry: 0,
                headings: [],
              }),
            ),
        }),
      )
      .filter((chapter) => chapter.verses.length > 0),
  };
}

/** Removes HTML tags, templates, categories, links and bold/italic quotes. */
function cleanWikitext(text: string): string {
  return text
    .replace(/\r\n?/g, '\n')
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/\{\{[^{}]*\}\}/g, '')
    .replace(/\[\[(?:تصنيف|Category):[^\]]*\]\]/g, '')
    .replace(/\[\[(?:[^|\]]*\|)?([^\]]*)\]\]/g, '$1')
    .replace(/<[^>]+>/g, '')
    .replace(/'{2,}/g, '');
}

/** Wikisource pages mix Western (0-9) and Arabic-Indic (٠-٩) digits in numbers. */
function toWesternDigits(text: string): string {
  return text.replace(/[٠-٩]/g, (digit) => String(digit.charCodeAt(0) - 0x0660));
}
