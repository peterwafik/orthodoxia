/**
 * Builds the Holy Mass journey's deep-zoom image: the master artwork enlarged and cut into a tile
 * pyramid (Deep Zoom layout, 512 px JPEG tiles) so the browser only ever loads the part of the
 * picture, at the resolution, that the camera is looking at.
 *
 *   content/art/holy-mass/source.jpg  →  apps/web/public/holy-mass/tiles/{level}/{col}_{row}.jpg
 *                                        apps/web/public/holy-mass/meta.json
 *                                        apps/web/public/holy-mass/preview.jpg
 *
 * The source is enlarged with Lanczos resampling and a light sharpen. That makes zooming smooth
 * (no blocky pixels) but cannot add detail the source does not have: to get real detail, put a
 * higher-resolution master at content/art/holy-mass/master.jpg (or set HOLY_MASS_MASTER); the
 * pyramid is then built from it unchanged.
 *
 *   node scripts/holy-mass/tiles.ts [--force]
 */
import { createHash } from 'node:crypto';
import { existsSync, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import sharp from 'sharp';

const ROOT = resolve(import.meta.dirname, '../..');
const ART = join(ROOT, 'content/art/holy-mass');
const OUT = join(ROOT, 'apps/web/public/holy-mass');
const TILE = 512;
/** Long side of the finished pyramid. The source is 1280 px wide; 7,680 is six times that. */
const TARGET_WIDTH = Number(process.env['HOLY_MASS_WIDTH'] ?? 7680);

const master = process.env['HOLY_MASS_MASTER'] ?? (existsSync(join(ART, 'master.jpg')) ? join(ART, 'master.jpg') : join(ART, 'source.jpg'));
const fingerprint = createHash('sha256').update(readFileSync(master)).update(String(TARGET_WIDTH)).digest('hex').slice(0, 16);
const metaPath = join(OUT, 'meta.json');
if (!process.argv.includes('--force') && existsSync(metaPath) && (JSON.parse(readFileSync(metaPath, 'utf8')) as { fingerprint: string }).fingerprint === fingerprint) {
  console.log('holy-mass tiles: up to date');
  process.exit(0);
}

sharp.concurrency(2);
sharp.cache(false);
const info = await sharp(master).metadata();
const sourceWidth = info.width ?? 0;
const sourceHeight = info.height ?? 0;
const width = TARGET_WIDTH;
const height = Math.round((sourceHeight / sourceWidth) * width);

rmSync(OUT, { recursive: true, force: true });
mkdirSync(OUT, { recursive: true });

const resized = () =>
  sharp(master, { limitInputPixels: false })
    .resize(width, height, { kernel: 'lanczos3', fit: 'fill' })
    // A light sharpen restores the edge contrast that enlarging softens.
    .sharpen({ sigma: 1.1, m1: 0.6, m2: 1.2 });

await resized()
  .jpeg({ quality: 70, chromaSubsampling: '4:2:0', mozjpeg: true })
  .tile({ size: TILE, overlap: 0, layout: 'dz', depth: 'onepixel' })
  .toFile(join(OUT, 'pyramid'));

// sharp writes pyramid.dzi and pyramid_files/<level>/<col>_<row>.jpg; flatten to tiles/.
const { renameSync } = await import('node:fs');
renameSync(join(OUT, 'pyramid_files'), join(OUT, 'tiles'));
rmSync(join(OUT, 'pyramid.dzi'), { force: true });
rmSync(join(OUT, 'tiles', 'vips-properties.xml'), { force: true });

// A small whole-picture preview that is shown immediately and underneath every tile.
await sharp(master).resize(1920, Math.round((sourceHeight / sourceWidth) * 1920), { kernel: 'lanczos3' }).jpeg({ quality: 78, mozjpeg: true }).toFile(join(OUT, 'preview.jpg'));

const maxLevel = Math.max(...readdirSync(join(OUT, 'tiles')).map(Number));
writeFileSync(
  metaPath,
  `${JSON.stringify({ fingerprint, width, height, tileSize: TILE, maxLevel, sourceWidth, sourceHeight, format: 'jpeg' })}\n`,
);
const files = readdirSync(join(OUT, 'tiles'), { recursive: true }).length;
console.log(`holy-mass tiles: ${width}x${height} from ${sourceWidth}x${sourceHeight}, levels 0–${maxLevel}, ${files} entries`);
