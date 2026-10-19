/**
 * Step 3 for Rites_Liturgy_Full-1.pdf: writes the Holy Mass text files (content/liturgy/) from the pages
 * saved by rites-extract.cjs.
 *
 *   node scripts/liturgy/import/rites-gen.cjs "<folder with page-NNN.json>" [--vocab "<folder with ocr-ar/page-NNNN.txt>"] [--dry]
 *
 * --vocab: a folder of Arabic text (any text of the liturgy) used only as a list of real words, to decide
 *          where the book's reversed lam+alef letters (سالم for سلام) must be put right. Without it only the
 *          name of God is repaired.
 * --dry:   only prints how many blocks each stop gets; writes nothing.
 *
 * The page mapping below follows the contents list of the book (printed page = PDF page). Edit it to move a
 * prayer to another stop. Whoever runs this and publishes the result is responsible for the right to use
 * the book.
 */
const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');
const { parsePage, mergePages } = require('./rites-parse.cjs');
const { buildVocabulary, fixArabic } = require('./arabic-fix.cjs');

const args = process.argv.slice(2);
const pagesDir = args.find((a) => !a.startsWith('--') && args[args.indexOf(a) - 1] !== '--vocab');
const vocabDir = args.includes('--vocab') ? args[args.indexOf('--vocab') + 1] : null;
const dry = args.includes('--dry');
if (!pagesDir || !fs.existsSync(pagesDir)) {
  console.error('Usage: node scripts/liturgy/import/rites-gen.cjs "<folder with page-NNN.json>" [--vocab "<folder>"] [--dry]');
  process.exit(1);
}
const outRoot = path.resolve(__dirname, '../../../content/liturgy');

const SLUGS = [
  'vesting', 'choosing-the-lamb', 'procession-of-the-lamb', 'blessing-of-the-oblations', 'thanksgiving', 'absolutions',
  'entering-the-word', 'incense-before-the-pauline', 'procession-of-incense', 'prayers-during-the-procession', 'hymn-of-the-censer',
  'hymn-of-the-intercessions', 'trisagion', 'pauline-epistle', 'catholic-epistle', 'acts', 'synaxarion', 'psalm-and-alleluia',
  'holy-gospel', 'homily', 'prayer-of-the-veil', 'litany-of-peace', 'litany-of-the-fathers', 'litany-of-the-assemblies', 'creed',
  'washing-of-hands', 'prayer-of-reconciliation', 'kiss-of-peace', 'lift-up-your-hearts', 'it-is-fitting-and-right',
  'watos-aspasmos', 'narrative-of-salvation', 'sanctus', 'institution-narrative', 'memorial', 'invocation-of-the-holy-spirit',
  'the-intercessions', 'commemoration-of-the-saints', 'the-diptychs', 'introduction-to-the-fraction', 'prayer-of-the-fraction',
  'the-lords-prayer', 'prayer-of-submission', 'prayer-of-absolution', 'the-holies-for-the-holy', 'the-confession',
  'before-the-distribution', 'the-distribution', 'psalm-150', 'thanksgiving-after-communion', 'dismissal', 'the-blessing',
];

const SOURCE_EN =
  'The Divine Liturgies of Saints Basil, Gregory and Cyril (Coptic, English and Arabic), Fr. Jacob Nadian, St. Bishoy Coptic Orthodox Church of Toronto, Stouffville, Ontario, Canada.';
const SOURCE_AR =
  'الثلاثة قداسات للقديسين باسيليوس واغريغوريوس وكيرلس (قبطي وإنجليزي وعربي)، الأب يعقوب نادين، كنيسة الأنبا بيشوي القبطية الأرثوذكسية بتورونتو، ستوفيل، أونتاريو، كندا.';

// Page ranges (printed page = PDF page), from the contents list of the book.
const r = (from, to) => ({ from, to });
const basil = {
  1: [r(12, 12)],
  2: [r(13, 16)],
  3: [r(17, 23)],
  5: [r(24, 29)],
  6: [r(30, 32)],
  8: [r(33, 34)],
  11: [r(35, 35)],
  12: [r(36, 37)],
  13: [r(49, 50)],
  14: [r(38, 40)],
  15: [r(41, 46)],
  16: [r(47, 48)],
  19: [r(51, 61)],
  21: [r(62, 63)],
  22: [r(65, 66)],
  23: [r(67, 69)],
  24: [r(70, 72)],
  25: [r(73, 76)],
  27: [r(77, 78), r(82, 84)],
  28: [r(79, 81)],
  29: [r(85, 85)],
  32: [r(86, 87)],
  33: [r(88, 91)],
  34: [r(92, 96)],
  36: [r(97, 100)],
  37: [r(101, 108)],
  38: [r(109, 115)],
  39: [r(116, 118)],
  40: [r(119, 120)],
  41: [r(121, 123)],
  42: [r(124, 124)],
  43: [r(125, 125)],
  44: [r(126, 130)],
  46: [r(131, 133)],
  47: [r(134, 136)],
  48: [r(137, 137)],
  49: [r(138, 141)],
  50: [r(142, 144)],
  51: [r(145, 146)],
  52: [r(147, 151)],
};
const gregory = {
  21: [r(152, 155)],
  27: [r(156, 163)],
  32: [r(164, 173)],
  34: [r(174, 180)],
  36: [r(181, 183)],
  37: [r(184, 199)],
  38: [r(200, 207)],
  40: [r(208, 210)],
  41: [r(211, 212)],
  42: [r(213, 213)],
  43: [r(214, 215)],
  44: [r(216, 219)],
  46: [r(220, 221)],
  50: [r(222, 226)],
};
const cyril = {
  21: [r(227, 230)],
  27: [r(231, 236)],
  32: [r(237, 239)],
  37: [r(240, 250), r(259, 277), r(288, 289)],
  38: [r(251, 258)],
  34: [r(278, 284)],
  36: [r(285, 287)],
  40: [r(290, 290)],
  41: [r(291, 295)],
  42: [r(296, 297)],
  43: [r(298, 299)],
  44: [r(300, 304)],
  46: [r(305, 306)],
  50: [r(307, 310)],
};
// Stops that are the same in the three liturgies come from the St. Basil pages and go to common/.
const SHARED = new Set([1, 2, 3, 5, 6, 8, 11, 12, 13, 14, 15, 16, 19, 22, 23, 24, 25, 28, 47, 48, 49, 51, 52]);
const LITURGIES = { basil, gregory, cyril };

// ---- reading the pages ------------------------------------------------------------------------------------
const pdfPath = path.resolve(__dirname, '../../../Rites_Liturgy_Full-1.pdf');
let warnedNoPdftotext = false;
/** The Arabic words of a page as the older reader (pdftotext) reads them: it gets the lam+alef pairs right. */
function pageWords(number) {
  try {
    const text = execFileSync('pdftotext', ['-f', String(number), '-l', String(number), '-enc', 'UTF-8', pdfPath, '-'], { maxBuffer: 1 << 26, stdio: ['ignore', 'pipe', 'ignore'] }).toString('utf8');
    return buildVocabulary([text]);
  } catch {
    if (!warnedNoPdftotext) console.log('pdftotext was not found: the Arabic repair uses only the general vocabulary.');
    warnedNoPdftotext = true;
    return null;
  }
}

const cache = new Map();
function segmentsOfPage(number) {
  if (!cache.has(number)) {
    const file = path.join(pagesDir, `page-${String(number).padStart(3, '0')}.json`);
    if (!fs.existsSync(file)) {
      cache.set(number, []);
    } else {
      const own = pageWords(number);
      const lists = [own, vocabulary].filter((list) => list !== null);
      const segments = parsePage(JSON.parse(fs.readFileSync(file, 'utf8')));
      cache.set(number, segments.map((segment) => ({ ...segment, ar: segment.ar ? fixArabic(segment.ar, lists.length > 0 ? lists : null) : segment.ar })));
    }
  }
  return cache.get(number);
}

let vocabulary = null;
if (vocabDir) {
  const texts = [];
  for (const file of fs.readdirSync(vocabDir)) if (/\.txt$/.test(file)) texts.push(fs.readFileSync(path.join(vocabDir, file), 'utf8'));
  vocabulary = buildVocabulary(texts);
  console.log(`Vocabulary: ${vocabulary.size} words from ${texts.length} files`);
} else {
  console.log('No --vocab folder: only the name of God is repaired in the Arabic.');
}

function blocksOfRanges(ranges) {
  const blocks = [];
  for (const range of ranges) {
    const pages = [];
    for (let number = range.from; number <= range.to; number++) pages.push(segmentsOfPage(number));
    blocks.push(...mergePages(pages));
  }
  return blocks;
}

function render(blocks) {
  const text = blocks.map((block) => {
    const lines = [`@${block.role}`];
    if (block.en) lines.push(`en| ${block.en.replace(/\s+/g, ' ').trim()}`);
    if (block.ar) lines.push(`ar| ${block.ar.replace(/\s+/g, ' ').trim()}`);
    return lines.join('\n');
  });
  return [`source: ${SOURCE_EN}`, `source-ar: ${SOURCE_AR}`, '', text.join('\n\n'), ''].join('\n');
}

// remove what an earlier generator wrote (these folders hold only generated files)
const removed = [];
if (!dry) {
  for (const folder of ['common', 'basil', 'gregory', 'cyril']) {
    const dir = path.join(outRoot, folder);
    if (!fs.existsSync(dir)) continue;
    for (const file of fs.readdirSync(dir)) if (file.endsWith('.txt')) {
      fs.unlinkSync(path.join(dir, file));
      removed.push(`${folder}/${file}`);
    }
  }
  console.log(`Removed ${removed.length} older generated files.`);
}

const summary = [];
for (const [liturgy, table] of Object.entries(LITURGIES)) {
  for (const [numberText, ranges] of Object.entries(table)) {
    const number = Number(numberText);
    const slug = SLUGS[number - 1];
    const folder = liturgy === 'basil' && SHARED.has(number) ? 'common' : liturgy;
    const blocks = blocksOfRanges(ranges);
    if (blocks.length === 0) {
      summary.push(`${String(number).padStart(2)} ${folder}/${slug}: nothing found`);
      continue;
    }
    const counts = { priest: 0, deacon: 0, people: 0, rubric: 0 };
    for (const block of blocks) counts[block.role] = (counts[block.role] ?? 0) + 1;
    if (!dry) {
      const target = path.join(outRoot, folder, `${slug}.txt`);
      fs.mkdirSync(path.dirname(target), { recursive: true });
      fs.writeFileSync(target, render(blocks), 'utf8');
    }
    summary.push(`${String(number).padStart(2)} ${folder}/${slug}: ${blocks.length} blocks (priest ${counts.priest}, deacon ${counts.deacon}, people ${counts.people}, rubrics ${counts.rubric})`);
  }
}
console.log(summary.join('\n'));
console.log(dry ? '\n(dry run: nothing written)' : `\nWritten under ${outRoot}. Now run: npm run liturgy`);
