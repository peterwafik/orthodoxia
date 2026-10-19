/**
 * Step 1 for the "Rites_Liturgy_Full-1.pdf" source ("The Divine Liturgies of Saints Basil, Gregory and
 * Cyril", Fr. Jacob Nadian, St. Bishoy Coptic Orthodox Church of Toronto): this book has a real text layer
 * (Coptic transliteration | English | Arabic in three columns), so no character recognition is needed.
 * This script only saves every page's text pieces with their position, one JSON file per page:
 *
 *   node scripts/liturgy/import/rites-extract.cjs "<output folder>" [first] [last]
 *
 * Step 2 (rites-gen.cjs) turns those files into the content/liturgy/ text files.
 */
const fs = require('fs');
const path = require('path');
const { pathToFileURL } = require('url');

const [, , outDir, firstArg, lastArg] = process.argv;
if (!outDir) {
  console.error('Usage: node scripts/liturgy/import/rites-extract.cjs "<output folder>" [first page] [last page]');
  process.exit(1);
}
const root = path.resolve(__dirname, '../../..');
const pdfPath = path.join(root, 'Rites_Liturgy_Full-1.pdf');
if (!fs.existsSync(pdfPath)) {
  console.error(`Not found: ${pdfPath}`);
  process.exit(1);
}

(async () => {
  const pdfjs = await import(pathToFileURL(path.join(root, 'node_modules/pdfjs-dist/legacy/build/pdf.mjs')).href);
  const document = await pdfjs.getDocument({ data: new Uint8Array(fs.readFileSync(pdfPath)), useSystemFonts: true, verbosity: 0 }).promise;
  fs.mkdirSync(outDir, { recursive: true });
  const first = Number(firstArg ?? 1);
  const last = Math.min(Number(lastArg ?? document.numPages), document.numPages);
  console.log(`Pages ${first} to ${last} of ${document.numPages}`);
  for (let number = first; number <= last; number++) {
    const page = await document.getPage(number);
    const view = page.getViewport({ scale: 1 });
    const content = await page.getTextContent();
    const items = content.items
      .filter((item) => 'str' in item && item.str.trim() !== '')
      .map((item) => ({ t: item.str, x: Math.round(item.transform[4] * 10) / 10, y: Math.round(item.transform[5] * 10) / 10, w: Math.round(item.width * 10) / 10, h: Math.round(item.height * 10) / 10, f: item.fontName }));
    fs.writeFileSync(path.join(outDir, `page-${String(number).padStart(3, '0')}.json`), JSON.stringify({ page: number, width: view.width, height: view.height, items }));
    page.cleanup();
  }
  console.log(`Done. Files in ${outDir}`);
})();
