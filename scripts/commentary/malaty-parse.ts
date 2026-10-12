/**
 * Parses a chapter page of Fr. Tadros Malaty's commentary on St-Takla.org into sections of
 * paragraphs. A section heading (<h2>) carries anchors `<a name="N">` for the verses it covers;
 * some pages also anchor verses inside the text, and some (thematic pages such as Exodus 35–40)
 * anchor none.
 */

export interface MalatyBlock {
  /** A section heading, or a paragraph. */
  readonly heading: boolean;
  readonly text: string;
  /** Verse numbers anchored at this block. */
  readonly verses: readonly number[];
}

const ENTITIES: Readonly<Record<string, string>> = { nbsp: ' ', quot: '"', amp: '&', lt: '<', gt: '>', apos: "'", laquo: '«', raquo: '»', ndash: '–', mdash: '—', hellip: '…', zwnj: '‌', zwj: '‍', rlm: '', lrm: '' };

export function decodeEntities(text: string): string {
  return text.replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (whole, name: string) => {
    if (name.startsWith('#x') || name.startsWith('#X')) return String.fromCodePoint(Number.parseInt(name.slice(2), 16));
    if (name.startsWith('#')) return String.fromCodePoint(Number(name.slice(1)));
    return ENTITIES[name.toLowerCase()] ?? whole;
  });
}

/** Removes an element and its content, for every element whose opening tag or content matches. */
function removeElements(html: string, tag: string, matches: (element: string) => boolean): string {
  let result = '';
  let position = 0;
  const open = new RegExp(`<${tag}\\b`, 'gi');
  for (let match = open.exec(html); match !== null; match = open.exec(html)) {
    if (match.index < position) continue;
    // Find the matching close tag, counting nested elements of the same kind.
    const scan = new RegExp(`<(/?)${tag}\\b[^>]*>`, 'gi');
    scan.lastIndex = match.index;
    let depth = 0;
    let end = -1;
    for (let tagMatch = scan.exec(html); tagMatch !== null; tagMatch = scan.exec(html)) {
      depth += tagMatch[1] === '/' ? -1 : 1;
      if (depth === 0) {
        end = tagMatch.index + tagMatch[0].length;
        break;
      }
    }
    if (end === -1) break;
    const element = html.slice(match.index, end);
    if (matches(element)) {
      result += html.slice(position, match.index);
      position = end;
    }
    open.lastIndex = end;
  }
  return result + html.slice(position);
}

/** The commentary body of a page: after the site's navigation, before the notes and footer. */
export function bodyOf(html: string): string {
  // The page's own commentary menu (select "surf1") comes right before the text, "surf2" after it.
  const select = html.search(/<select name="surf1"/i);
  const formEnd = select === -1 ? -1 : html.indexOf('</form>', select);
  const h1 = html.search(/<\/h1>/i);
  const start = formEnd !== -1 ? formEnd + '</form>'.length : Math.max(h1, 0);
  const ends = [
    html.indexOf('name="الحواشي_والمراجع"', start),
    html.indexOf('<select name="surf2"', start),
    html.indexOf('table-footer', start),
    html.indexOf('<!-- footer with contacts', start),
    // Footnotes, on pages without a notes heading.
    ((index) => (index === -1 ? -1 : start + index))(html.slice(start).search(/<div id=ftn\d|<a name="\(\d+f\)"/i)),
  ].filter((index) => index !== -1);
  let end = ends.length > 0 ? Math.min(...ends) : html.length;
  // Back up to the start of the element holding the end marker.
  const tagStart = html.lastIndexOf('<', end);
  if (tagStart > start) end = tagStart;
  return html.slice(start, end);
}

const NOISE_PARAGRAPH = [
  /^St-Takla\.org$/i,
  // The site's pointers ("← other commentaries on this chapter …").
  /^←/,
  /^لم يُعَلِّق الكاتِب على هذا النص/,
  /يوجد أيضًا\s*تفاسير أخرى/,
  /^←?\s*اذهب مباشرةً لتفسير الآية/,
  /^اضغط هنا لإظهار الفهرس/,
  /^\*?\s*تأملات في كتاب/,
  /^(?:نص|تفسير) سفر [^:]{1,30}:/,
  /^الكتاب المقدس المسموع/,
  /^استمع لهذا الأصحاح/,
  /^Image:/i,
  /^(?:الأصحاح|الإصحاح) (?:السابق|التالي)/,
];

export function parseMalatyPage(html: string): MalatyBlock[] {
  let body = bodyOf(html);
  body = body.replace(/<script\b[\s\S]*?<\/script>|<style\b[\s\S]*?<\/style>|<!--[\s\S]*?-->/gi, '');
  // Image tables, the chapter's table of contents (links to anchors on the page), forms.
  body = removeElements(body, 'table', (element) => /St-Takla\.org\s*(?:<[^>]*>\s*)*Image|صورة في\s*(?:<[^>]*>\s*)*موقع الأنبا تكلا|href="#/i.test(element));
  body = removeElements(body, 'form', () => true);
  // Page numbers of the printed book ("ص 15"), shown only on request.
  body = body.replace(/<span[^>]*class="[^"]*hidable[^"]*"[^>]*>[\s\S]*?<\/span>/gi, '');
  // Footnote markers: "(7)" linked to the notes.
  body = body.replace(/<a[^>]*href="#\(\d+f\)"[^>]*>[\s\S]*?<\/a>/gi, '');
  body = body.replace(/<a[^>]*href="#[^"]*f"[^>]*>\s*\(?\d+\)?\s*<\/a>/gi, '');
  body = body.replace(/\s+/g, ' ');
  body = body.replace(/<a\s+name="(\d{1,3})"\s*>/gi, ' \u0001$1\u0002 ');
  body = body.replace(/<h[1-4]\b[^>]*>/gi, '\n\u0003').replace(/<\/h[1-4]>/gi, '\n');
  body = body.replace(/<(?:p|div|br|tr|li|blockquote|ul|ol)\b[^>]*>|<\/(?:p|div|tr|li|blockquote|ul|ol)>/gi, '\n');
  body = body.replace(/<[^>]+>/g, '');
  body = decodeEntities(body);

  const blocks: MalatyBlock[] = [];
  let pendingVerses: number[] = [];
  for (const rawLine of body.split('\n')) {
    let line = rawLine;
    const heading = line.startsWith('\u0003');
    const verses = [...line.matchAll(/\u0001(\d+)\u0002/g)].map((match) => Number(match[1]));
    line = line.replace(/\u0001\d+\u0002/g, '').replace(/\u0003/g, '');
    line = line.replace(/\s+/g, ' ').trim();
    if (line === '' || /^[\s.:\-–—|*•_←→]*$/.test(line)) {
      pendingVerses.push(...verses);
      continue;
    }
    if (NOISE_PARAGRAPH.some((pattern) => pattern.test(line))) {
      pendingVerses.push(...verses);
      continue;
    }
    blocks.push({ heading, text: line, verses: [...pendingVerses, ...verses] });
    pendingVerses = [];
  }
  return mergeBrokenParagraphs(blocks);
}

/**
 * The pages break paragraphs at inline formatting changes (a saint's name in its own span, a
 * reference in brackets on its own line). Rejoin a block that does not end a sentence with the
 * next one, unless either is a heading or carries verse anchors.
 */
function mergeBrokenParagraphs(blocks: MalatyBlock[]): MalatyBlock[] {
  const result: MalatyBlock[] = [];
  for (const block of blocks) {
    const previous = result.at(-1);
    const previousEnds = previous === undefined || /[.!?؟:»"”)\]]\s*$/.test(previous.text) && !/^[\[(]?\d/.test(block.text);
    if (previous !== undefined && !previous.heading && !block.heading && block.verses.length === 0 && !previousEnds) {
      result[result.length - 1] = { ...previous, text: `${previous.text} ${block.text}` };
    } else {
      result.push(block);
    }
  }
  return result;
}
