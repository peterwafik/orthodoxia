/**
 * Builds the Holy Mass journey's deep-zoom image: the master artwork enlarged and cut into a tile
 * pyramid (Deep Zoom layout, 512 px JPEG tiles) so the browser only ever loads the part of the
 * picture, at the resolution, that the camera is looking at.
 *
 *   content/art/holy-mass/source.jpg  →  apps/web/public/holy-mass/tiles/{level}/{col}_{row}.jpeg
 *                                         apps/web/public/holy-mass/meta.json
 *                                         apps/web/public/holy-mass/preview.jpg
 *
 * The master is enlarged with Lanczos resampling and a light sharpen. Regions that have been
 * enhanced separately are laid over it with soft edges: content/art/holy-mass/detail/detail.json
 * lists them as { file, x, y, w, h } in master pixels, each file being that region at a higher
 * resolution (here: the master cut in overlapping 1280 × 960 pieces and upscaled to 4096 × 3072).
 * Where a region has no enhanced file, the plain enlargement shows.
 *
 *   node scripts/holy-mass/tiles.ts [--force]
 *
 * HOLY_MASS_MASTER replaces the master; HOLY_MASS_WIDTH sets the pyramid's width.
 */
import { createHash } from 'node:crypto';
import { existsSync, mkdirSync, readFileSync, readdirSync, renameSync, rmSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import sharp from 'sharp';

const ROOT = resolve(import.meta.dirname, '../..');
const ART = join(ROOT, 'content/art/holy-mass');
const DETAIL = join(ART, 'detail');
const OUT = join(ROOT, 'apps/web/public/holy-mass');
const TILE = 512;
const TARGET_WIDTH = Number(process.env['HOLY_MASS_WIDTH'] ?? 10240);

interface DetailRegion {
  readonly file: string;
  readonly x: number;
  readonly y: number;
  readonly w: number;
  readonly h: number;
}

const master = process.env['HOLY_MASS_MASTER'] ?? join(ART, 'source.jpg');
const regions: DetailRegion[] = existsSync(join(DETAIL, 'detail.json'))
  ? (JSON.parse(readFileSync(join(DETAIL, 'detail.json'), 'utf8')) as { regions: DetailRegion[] }).regions.filter((region) => existsSync(join(DETAIL, region.file)))
  : [];

const hash = createHash('sha256').update(readFileSync(master)).update(String(TARGET_WIDTH)).update(readFileSync(import.meta.filename));
for (const region of regions) hash.update(readFileSync(join(DETAIL, region.file))).update(`${region.x},${region.y},${region.w},${region.h}`);
const fingerprint = hash.digest('hex').slice(0, 16);

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
const scale = width / sourceWidth;

/** 0 at the edge, 1 inside by `feather` pixels; edges on the picture's border are not faded. */
function ramp(length: number, feather: number, fadeStart: boolean, fadeEnd: boolean): Float32Array {
  const values = new Float32Array(length);
  for (let i = 0; i < length; i++) {
    const start = fadeStart ? Math.min(1, i / feather) : 1;
    const end = fadeEnd ? Math.min(1, (length - 1 - i) / feather) : 1;
    const t = Math.min(start, end);
    values[i] = t * t * (3 - 2 * t);
  }
  return values;
}

/** One enhanced region as a PNG with a soft alpha edge, and where it goes in the pyramid. */
async function overlayFor(region: DetailRegion): Promise<sharp.OverlayOptions> {
  const left = Math.round(region.x * scale);
  const top = Math.round(region.y * scale);
  const w = Math.min(width - left, Math.round(region.w * scale));
  const h = Math.min(height - top, Math.round(region.h * scale));
  const { data } = await sharp(join(DETAIL, region.file)).resize(w, h, { kernel: 'lanczos3', fit: 'fill' }).removeAlpha().raw().toBuffer({ resolveWithObject: true });
  const feather = Math.round(Math.min(w, h) * 0.1);
  const ax = ramp(w, feather, region.x > 0, region.x + region.w < sourceWidth);
  const ay = ramp(h, feather, region.y > 0, region.y + region.h < sourceHeight);
  const rgba = Buffer.allocUnsafe(w * h * 4);
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const from = (y * w + x) * 3;
      const to = (y * w + x) * 4;
      rgba[to] = data[from]!;
      rgba[to + 1] = data[from + 1]!;
      rgba[to + 2] = data[from + 2]!;
      rgba[to + 3] = Math.round(ax[x]! * ay[y]! * 255);
    }
  }
  const input = await sharp(rgba, { raw: { width: w, height: h, channels: 4 } }).png({ compressionLevel: 1 }).toBuffer();
  return { input, left, top };
}

rmSync(OUT, { recursive: true, force: true });
mkdirSync(OUT, { recursive: true });

const overlays: sharp.OverlayOptions[] = [];
for (const region of regions) overlays.push(await overlayFor(region));

let pipeline = sharp(master, { limitInputPixels: false })
  .resize(width, height, { kernel: 'lanczos3', fit: 'fill' })
  // A light sharpen restores the edge contrast that enlarging softens.
  .sharpen({ sigma: 1.1, m1: 0.6, m2: 1.2 });
if (overlays.length > 0) pipeline = pipeline.composite(overlays);

await pipeline
  .jpeg({ quality: 78, chromaSubsampling: '4:2:0', mozjpeg: true })
  .tile({ size: TILE, overlap: 0, layout: 'dz', depth: 'onepixel' })
  .toFile(join(OUT, 'pyramid'));

// sharp writes pyramid.dzi and pyramid_files/<level>/<col>_<row>.jpeg; flatten to tiles/.
renameSync(join(OUT, 'pyramid_files'), join(OUT, 'tiles'));
rmSync(join(OUT, 'pyramid.dzi'), { force: true });
rmSync(join(OUT, 'tiles', 'vips-properties.xml'), { force: true });

// A small whole-picture preview that is shown immediately and underneath every tile.
await sharp(master).resize(1920, Math.round((sourceHeight / sourceWidth) * 1920), { kernel: 'lanczos3' }).jpeg({ quality: 78, mozjpeg: true }).toFile(join(OUT, 'preview.jpg'));

const maxLevel = Math.max(...readdirSync(join(OUT, 'tiles')).map(Number));
writeFileSync(metaPath, `${JSON.stringify({ fingerprint, width, height, tileSize: TILE, maxLevel, sourceWidth, sourceHeight, detailRegions: regions.length, format: 'jpeg' })}\n`);
const files = readdirSync(join(OUT, 'tiles'), { recursive: true }).length;
console.log(`holy-mass tiles: ${width}x${height} from ${sourceWidth}x${sourceHeight} with ${regions.length} enhanced regions, levels 0–${maxLevel}, ${files} entries`);
