/**
 * The Bible history chart in the browser: a wheel of time (or a straight band) drawn on a canvas, with every person a
 * bar in their lane. Drag to move, wheel or pinch to zoom, select a bar to open the person; search, lines of descent,
 * the Septuagint or Hebrew count, and the view are kept in the address so a view can be shared.
 */
import { line as yearLine, makeScale, toU, type Scale } from './scale.ts';

type Row = (number | null)[];
interface Person {
  i: string; n: string; s: string; l: number; a: Row; lx?: Row | null; h?: Row | null; b: number; x: number; c?: 1;
  o?: [number, number, string]; ol?: [number, number]; om?: [number, number]; r?: string; m?: string; d?: string; p?: [string, string][]; v?: string[]; k: number;
  f?: number; mo?: number; w?: number[]; ch?: number[]; e?: string; t?: string; sb?: string; ev?: number[]; q?: [string, string][];
}
interface EvidenceItem { t: string; k: string; d: string; fo: string; no: string; s: string; c: string; cn: string; nt: string; li: [string, string][]; q: [string, string] | null; p: number[] }
interface Payload {
  locale: 'en' | 'ar';
  count: number;
  counts: Record<Chron, { creation: number; flood: number; abraham: number; egypt: number; exodus: number; conquest: number; undated: number | null }>;
  lines: { id: string; name: string; color: string; dark: string }[];
  periods: { id: string; name: string; from: number | 'creation' | 'flood' | 'abraham' | 'egypt' | 'conquest' | 'undated' }[];
  marks: { year: number; name: string; note: string; basis: string; region: string; source: string }[];
  basis: string[];
  bible: { base: string; books: Record<string, [string, string]> };
  people: Person[];
  evidence: EvidenceItem[];
}
export interface ChartConfig { locale: 'en' | 'ar'; dataUrl: string; ui: Record<string, string> }

type Chron = 'hist' | 'lxx' | 'mt';
type View = 'wheel' | 'line';

interface Bar { idx: number; u0: number; u1: number; o0: number; o1: number; lane: number }
interface Layout { scale: Scale; bars: (Bar | null)[]; lanes: Bar[][]; maxLane: number; /** Lanes below this hold people with known dates. */ dated: number }

const R0 = 230; // inner radius of the wheel (world units)
const LH = 5; // height of a lane of people with known dates (world units)
const LH_EST = 2.2; // height of a lane of estimated people
const LINE_W = 7000; // width of the straight chart (world units)
const LINE_SCALE = 1.3; // lanes are a little taller on the straight chart
const GAP = 0.13; // half the opening at the top of the wheel (radians)
const A0 = -Math.PI / 2 + GAP;
const SWEEP = Math.PI * 2 - GAP * 2;

const esc = (text: string): string => text.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);
const fold = (text: string): string =>
  text.toLowerCase().normalize('NFD').replace(/[̀-ًͯ-ْٰ]/g, '').replace(/[أإآٱ]/g, 'ا').replace(/ة/g, 'ه').replace(/ى/g, 'ي').replace(/[-’']/g, ' ');

export async function mountChart(root: HTMLElement, config: ChartConfig): Promise<void> {
  const ui = config.ui;
  const ar = config.locale === 'ar';
  const $ = <T extends HTMLElement>(selector: string): T => root.querySelector<T>(selector)!;
  const stage = $<HTMLElement>('[data-stage]');
  const canvas = $<HTMLCanvasElement>('[data-canvas]');
  const status = $<HTMLElement>('[data-status]');
  const tip = $<HTMLElement>('[data-tip]');
  const panel = $<HTMLElement>('[data-panel]');
  const ctx = canvas.getContext('2d')!;
  status.textContent = ui['loading'] ?? '';

  const response = await fetch(config.dataUrl);
  if (!response.ok) throw new Error(`${config.dataUrl}: HTTP ${response.status}`);
  const data = (await response.json()) as Payload;
  status.textContent = '';
  const people = data.people;
  const numberFormat = new Intl.NumberFormat(ar ? 'ar-EG' : 'en-US', { useGrouping: false });
  const num = (value: number): string => numberFormat.format(value);

  // ---- state ----------------------------------------------------------------------------------------------------
  const params = new URLSearchParams(location.search);
  const countParam = params.get('count');
  let chron: Chron = countParam === 'mt' || countParam === 'lxx' ? countParam : 'hist';
  let view: View = params.get('view') === 'line' ? 'line' : 'wheel';
  const hiddenLines = new Set<number>((params.get('hide') ?? '').split(',').filter(Boolean).map(Number));
  let showEstimated = params.get('est') !== '0';
  let evidenceOnly = params.get('ev') === '1';
  let showStrings = true;
  let selected: number | null = null;
  let hover: number | null = null;
  let k = 1;
  let tx = 0;
  let ty = 0;
  let width = 0;
  let height = 0;
  let dark = document.documentElement.dataset['theme'] === 'dark';
  /** Until the reader moves the chart, a change of size fits it again. */
  let interacted = false;

  const layouts: Partial<Record<Chron, Layout>> = {};
  /** A person's place in the count shown ([start, end, lane, born, died]), or `null` when the count leaves them out. */
  function rowFor(person: Person): Row | null {
    if (chron === 'lxx' && person.lx !== undefined) return person.lx;
    if (chron === 'mt' && person.h !== undefined) return person.h;
    return person.a;
  }
  /** In the documented-history count, Adam to Terah (and the families placed from them) carry no date. */
  const undatedRow = (row: Row | null): boolean => {
    const end = data.counts[chron].undated;
    return end !== null && row !== null && (row[0] as number) < end;
  };
  const layout = (): Layout => {
    const cached = layouts[chron];
    if (cached) return cached;
    const scale = makeScale(data.counts[chron]);
    const bars: (Bar | null)[] = people.map((person, idx) => {
      const row = rowFor(person);
      if (row === null) return null;
      const [start, end, lane] = row as [number, number, number];
      const u0 = toU(scale, start);
      const u1 = Math.max(toU(scale, end), u0 + 0.0008);
      const office = officeOf(person);
      const o0 = office ? toU(scale, office[0]) : -1;
      const o1 = office ? Math.max(toU(scale, office[1]), o0 + 0.0006) : -1;
      return { idx, u0, u1, o0, o1, lane };
    });
    const lanes: Bar[][] = [];
    let maxLane = 0;
    let dated = 0;
    for (const bar of bars) {
      if (bar === null) continue;
      (lanes[bar.lane] ??= []).push(bar);
      maxLane = Math.max(maxLane, bar.lane);
      if (people[bar.idx]!.b !== data.basis.length - 1) dated = Math.max(dated, bar.lane + 1);
    }
    for (const lane of lanes) lane?.sort((a, b) => a.u0 - b.u0);
    const result = { scale, bars, lanes, maxLane, dated };
    layouts[chron] = result;
    return result;
  };

  // ---- geometry -------------------------------------------------------------------------------------------------
  const angle = (u: number): number => A0 + u * SWEEP;
  /** x of a place on the straight chart: time runs right to left on the Arabic page. */
  const X = (u: number): number => (ar ? 1 - u : u) * LINE_W;
  const base = (): number => (view === 'line' ? LINE_SCALE : 1);
  /** The size of a lane, and the distance of its middle from the first lane's edge (world units). */
  const laneSize = (lane: number): number => base() * (lane < layout().dated ? LH : LH_EST);
  const laneCenter = (lane: number): number => {
    const dated = layout().dated;
    return base() * (lane < dated ? (lane + 0.5) * LH : dated * LH + (lane - dated + 0.5) * LH_EST);
  };
  /** A distance from the first lane's edge → the lane, as a real number (0.0 = middle of lane 0). */
  const laneAt = (offset: number): number => {
    const dated = layout().dated;
    const d = offset / base();
    return d < dated * LH ? d / LH - 0.5 : dated + (d - dated * LH) / LH_EST - 0.5;
  };
  const extent = (): number => laneCenter(layout().maxLane) + laneSize(layout().maxLane);
  const radius = (lane: number): number => R0 + laneCenter(lane);
  const outer = (): number => R0 + extent() + 12;
  const toWorld = (sx: number, sy: number): [number, number] => [(sx - tx) / k, (sy - ty) / k];
  /** A world point → [u, lane as a real number], or null outside the chart. */
  const chartCoords = (wx: number, wy: number): [number, number] | null => {
    if (view === 'line') return [ar ? 1 - wx / LINE_W : wx / LINE_W, laneAt(wy)];
    const r = Math.hypot(wx, wy);
    let a = Math.atan2(wy, wx) - A0;
    while (a < 0) a += Math.PI * 2;
    const u = a / SWEEP;
    if (u > 1) return null;
    return [u, laneAt(r - R0)];
  };
  const pointAt = (u: number, lane: number): [number, number] => {
    if (view === 'line') return [X(u), laneCenter(lane)];
    const a = angle(u);
    const r = radius(lane);
    return [Math.cos(a) * r, Math.sin(a) * r];
  };

  /** The year a period begins in the count shown, or `null` when the count has no such period. */
  const periodYear = (from: Payload['periods'][number]['from']): number | null => (typeof from === 'number' ? from : data.counts[chron][from]);
  /** A person's office in the count shown. */
  const officeOf = (person: Person): [number, number] | null => {
    if (!person.o) return null;
    if (chron === 'lxx' && person.ol) return person.ol;
    if (chron === 'mt' && person.om) return person.om;
    return [person.o[0], person.o[1]];
  };

  const visible = (idx: number): boolean => {
    const person = people[idx]!;
    if (hiddenLines.has(person.l)) return false;
    if (!showEstimated && person.b === data.basis.length - 1) return false;
    if (evidenceOnly && !person.ev) return false;
    return true;
  };

  const fit = (): void => {
    if (view === 'wheel') {
      const R = outer() + 120;
      k = Math.min(width, height) / (2 * R);
      tx = width / 2;
      ty = height / 2;
    } else {
      const h = extent() + 10;
      k = Math.min(width / (LINE_W + 80), (height - 40) / (h + 40));
      tx = (width - LINE_W * k) / 2;
      ty = 54;
    }
  };

  // ---- colours --------------------------------------------------------------------------------------------------
  const lineColor = (l: number): string => (dark ? data.lines[l]!.dark : data.lines[l]!.color);
  const ink = (): string => (dark ? '#ede7d8' : '#1a2340');
  const muted = (): string => (dark ? 'rgba(174,182,198,0.85)' : 'rgba(75,85,103,0.85)');
  const faint = (): string => (dark ? 'rgba(237,231,216,0.08)' : 'rgba(26,35,64,0.06)');

  // ---- family of the selection ----------------------------------------------------------------------------------
  const familyOf = (idx: number): Set<number> => {
    const person = people[idx]!;
    const set = new Set<number>([idx]);
    for (const other of [person.f, person.mo, ...(person.w ?? []), ...(person.ch ?? [])]) if (other !== undefined) set.add(other);
    return set;
  };
  let family = new Set<number>();

  // ---- drawing --------------------------------------------------------------------------------------------------
  let frame = 0;
  const redraw = (): void => {
    if (frame === 0) frame = requestAnimationFrame(draw);
  };
  const textWidths = new Map<string, number>();
  /** The width of a text at 100px (screen), measured once. */
  const measure = (text: string, family: string): number => {
    let value = textWidths.get(text);
    if (value === undefined) {
      ctx.save();
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.font = `100px ${family}`;
      value = ctx.measureText(text).width;
      ctx.restore();
      textWidths.set(text, value);
    }
    return value;
  };

  function yearLabel(year: number): string {
    if (year < 0) return `${num(-year)} ${ui['bc']}`;
    return ar ? `${num(year)} ${ui['ad']}` : `${ui['ad']} ${year}`;
  }

  function drawGrid(L: Layout): void {
    const { scale } = L;
    const rOut = outer();
    // Period bands and names.
    const periods = data.periods.flatMap((period) => {
      const year = periodYear(period.from);
      return year === null ? [] : [{ ...period, year }];
    });
    periods.forEach((period, i) => {
      const u0 = toU(scale, period.year);
      const u1 = i + 1 < periods.length ? toU(scale, periods[i + 1]!.year) : 1;
      if (i % 2 === 0) {
        ctx.fillStyle = faint();
        if (view === 'wheel') {
          ctx.beginPath();
          ctx.arc(0, 0, rOut, angle(u0), angle(u1));
          ctx.arc(0, 0, R0 - 6, angle(u1), angle(u0), true);
          ctx.closePath();
          ctx.fill();
        } else ctx.fillRect(Math.min(X(u0), X(u1)), 0, Math.abs(X(u1) - X(u0)), extent());
      }
      // name
      ctx.font = `600 ${15 / k}px ${getComputedStyle(root).fontFamily}`;
      ctx.fillStyle = ink();
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      const um = (u0 + u1) / 2;
      if (view === 'wheel') {
        const a = angle(um);
        const r = rOut + 66 / k;
        ctx.save();
        ctx.translate(Math.cos(a) * r, Math.sin(a) * r);
        const flip = Math.sin(a) > 0;
        ctx.rotate(a + (flip ? -Math.PI / 2 : Math.PI / 2));
        ctx.fillText(period.name, 0, 0);
        ctx.restore();
      } else {
        ctx.fillText(period.name, X(um), -30 / k);
      }
      // boundary
      ctx.strokeStyle = muted();
      ctx.lineWidth = 1.2 / k;
      ctx.beginPath();
      if (view === 'wheel') {
        const a = angle(u0);
        ctx.moveTo(Math.cos(a) * (R0 - 8), Math.sin(a) * (R0 - 8));
        ctx.lineTo(Math.cos(a) * (rOut + 14 / k), Math.sin(a) * (rOut + 14 / k));
      } else {
        ctx.moveTo(X(u0), -8 / k);
        ctx.lineTo(X(u0), extent());
      }
      ctx.stroke();
    });

    // Year marks: a step fitted to how much room each period has on screen.
    const steps = [1000, 500, 200, 100, 50, 25, 10, 5, 2, 1];
    const pxPerU = view === 'wheel' ? rOut * SWEEP * k : LINE_W * k;
    ctx.font = `${11 / k}px ${getComputedStyle(root).fontFamily}`;
    ctx.fillStyle = muted();
    for (let i = 0; i < scale.shares.length; i++) {
      // The undated beginnings get no year marks.
      if (i === 0 && data.counts[chron].undated !== null) continue;
      const a = yearLine(scale.years[i]!);
      const b = yearLine(scale.years[i + 1]!);
      const pxPerYear = (scale.shares[i]! * pxPerU) / (b - a);
      const chosen = [...steps].reverse().find((s) => s * pxPerYear >= (ar ? 95 : 80)) ?? 1000;
      const first = Math.ceil(a / chosen) * chosen;
      for (let y = first; y < b; y += chosen) {
        const year = y <= 0 ? y - 1 : y;
        if (year === 0) continue;
        const u = toU(scale, year);
        ctx.strokeStyle = faint();
        ctx.lineWidth = 1 / k;
        ctx.beginPath();
        if (view === 'wheel') {
          const ang = angle(u);
          ctx.moveTo(Math.cos(ang) * (R0 - 4), Math.sin(ang) * (R0 - 4));
          ctx.lineTo(Math.cos(ang) * (rOut + 6 / k), Math.sin(ang) * (rOut + 6 / k));
          ctx.stroke();
          ctx.save();
          ctx.translate(Math.cos(ang) * (rOut + 10 / k), Math.sin(ang) * (rOut + 10 / k));
          ctx.rotate(ang);
          ctx.textAlign = 'left';
          ctx.textBaseline = 'middle';
          const flip = Math.cos(ang) < 0;
          if (flip) {
            ctx.rotate(Math.PI);
            ctx.textAlign = 'right';
          }
          ctx.fillText(yearLabel(year), 0, 0);
          ctx.restore();
        } else {
          ctx.moveTo(X(u), -4 / k);
          ctx.lineTo(X(u), extent());
          ctx.stroke();
          ctx.textAlign = 'center';
          ctx.textBaseline = 'bottom';
          ctx.fillText(yearLabel(year), X(u), -8 / k);
        }
      }
    }

    // Creation and the Flood.
    const marks: [number, string][] = [[data.counts[chron].creation, ui['creation']!], [data.counts[chron].flood, ui['flood']!]];
    for (const [year, label] of marks) {
      const u = toU(scale, year);
      ctx.strokeStyle = dark ? '#7fc0e6' : '#2f7fb0';
      ctx.lineWidth = 1.6 / k;
      ctx.beginPath();
      const [x0, y0] = view === 'wheel' ? [Math.cos(angle(u)) * (R0 - 10), Math.sin(angle(u)) * (R0 - 10)] : [X(u), 0];
      const [x1, y1] = view === 'wheel' ? [Math.cos(angle(u)) * rOut, Math.sin(angle(u)) * rOut] : [X(u), extent()];
      ctx.moveTo(x0, y0);
      ctx.lineTo(x1, y1);
      ctx.stroke();
      ctx.fillStyle = ctx.strokeStyle;
      ctx.font = `600 ${12 / k}px ${getComputedStyle(root).fontFamily}`;
      ctx.save();
      if (view === 'wheel') {
        const ang = angle(u);
        ctx.translate(Math.cos(ang) * (R0 - 14), Math.sin(ang) * (R0 - 14));
        ctx.rotate(ang + Math.PI);
        ctx.textAlign = 'left';
      } else {
        ctx.translate(X(u) + 4 / k, extent() + 14 / k);
        ctx.textAlign = 'left';
      }
      ctx.textBaseline = 'middle';
      ctx.fillText(label, 0, 0);
      ctx.restore();
    }
  }

  /** Events of documented history, dashed and coloured by region, beside the Bible's count. */
  const REGION_COLOR: Record<string, [string, string]> = {
    egypt: ['#8a5a2b', '#d9a66b'], mesopotamia: ['#2f6f73', '#7cc3c7'], levant: ['#6b4f8a', '#b9a0d8'], anatolia: ['#7a6a2b', '#d2c27a'],
    persia: ['#8a2b4a', '#e08aa6'], greece: ['#2b5a8a', '#86b4e0'], rome: ['#8a2b2b', '#e08a8a'],
  };
  const markColor = (region: string): string => (REGION_COLOR[region] ?? REGION_COLOR['egypt']!)[dark ? 1 : 0];
  let hoverMark: number | null = null;
  function drawHistory(L: Layout): void {
    ctx.save();
    ctx.lineWidth = 1.2 / k;
    ctx.font = `600 ${11 / k}px ${getComputedStyle(root).fontFamily}`;
    ctx.textBaseline = 'middle';
    const rOut = outer();
    // Zoomed out, only the key events are named; zoomed in, all of them, on up to three rows, each label only where it
    // does not crowd its neighbour on that row. Every line can be pointed at to read it.
    const overview = laneSize(0) * k < 3.2;
    const KEY_YEARS = new Set([-3300, -3100, -2580, -1792, -1279, -1208, -587, -539, -323, -27]);
    const lastOnRow = overview ? [-Infinity] : [-Infinity, -Infinity, -Infinity];
    const minGap = overview ? 22 : 16; // screen pixels between labels on one row
    data.marks.forEach((mark, i) => {
      const u = toU(L.scale, mark.year);
      const color = markColor(mark.region);
      ctx.strokeStyle = color;
      ctx.fillStyle = color;
      ctx.globalAlpha = hoverMark === i ? 1 : hoverMark === null ? 0.55 : 0.25;
      ctx.setLineDash([6 / k, 5 / k]);
      ctx.beginPath();
      const along = view === 'wheel' ? u * SWEEP * rOut * k : u * LINE_W * k; // position along the rim, in pixels
      if (view === 'wheel') {
        const a = angle(u);
        ctx.moveTo(Math.cos(a) * (R0 - 10), Math.sin(a) * (R0 - 10));
        ctx.lineTo(Math.cos(a) * rOut, Math.sin(a) * rOut);
      } else {
        ctx.moveTo(X(u), 0);
        ctx.lineTo(X(u), extent());
      }
      ctx.stroke();
      ctx.setLineDash([]);
      if (overview && !KEY_YEARS.has(mark.year) && hoverMark !== i) return;
      const row = lastOnRow.findIndex((last) => along - last >= minGap);
      if (row < 0 && hoverMark !== i) return;
      const level = row < 0 ? 0 : row;
      if (row >= 0) lastOnRow[row] = along;
      ctx.globalAlpha = hoverMark === i ? 1 : 0.9;
      if (view === 'wheel') {
        const a = angle(u);
        const r = rOut - 8 / k - level * 110;
        ctx.save();
        ctx.translate(Math.cos(a) * r, Math.sin(a) * r);
        const flip = Math.cos(a) < 0;
        ctx.rotate(flip ? a + Math.PI : a);
        ctx.textAlign = flip ? 'left' : 'right';
        ctx.fillText(mark.name, 0, -6 / k);
        ctx.restore();
      } else {
        ctx.textAlign = ar ? 'right' : 'left';
        ctx.fillText(mark.name, X(u) + (ar ? -4 : 4) / k, extent() + (30 + level * 14) / k);
      }
    });
    ctx.restore();
  }
  /** The documented-history event whose line is under the pointer (within a few pixels), if any. */
  const markAt = (sx: number, sy: number): number | null => {
    const [wx, wy] = toWorld(sx, sy);
    const coords = chartCoords(wx, wy);
    if (coords === null) return null;
    const L = layout();
    const scalePx = view === 'wheel' ? Math.hypot(wx, wy) * SWEEP * k : LINE_W * k;
    let best: number | null = null;
    let bestPx = 5;
    data.marks.forEach((mark, i) => {
      const px = Math.abs(toU(L.scale, mark.year) - coords[0]) * scalePx;
      if (px < bestPx) { bestPx = px; best = i; }
    });
    return best;
  };

  function drawCenter(): void {
    if (view !== 'wheel') return;
    ctx.fillStyle = dark ? 'rgba(22,36,74,0.9)' : 'rgba(255,253,248,0.92)';
    ctx.strokeStyle = muted();
    ctx.lineWidth = 1.2 / k;
    ctx.beginPath();
    ctx.arc(0, 0, R0 - 26, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    const family = getComputedStyle(root).getPropertyValue('--font-reading') || 'serif';
    ctx.fillStyle = ink();
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = `600 26px ${family}`;
    ctx.fillText(ui['title']!, 0, -86);
    ctx.font = `italic 15px ${family}`;
    // Wrap the verse inside the circle.
    const words = ui['centerVerse']!.split(' ');
    const lines: string[] = [];
    let current = '';
    for (const word of words) {
      const next = current === '' ? word : `${current} ${word}`;
      if (ctx.measureText(next).width > 290 && current !== '') {
        lines.push(current);
        current = word;
      } else current = next;
    }
    lines.push(current);
    lines.forEach((text, i) => ctx.fillText(text, 0, -40 + i * 22));
    ctx.font = `13px ${family}`;
    ctx.fillStyle = muted();
    ctx.fillText(ui['centerRef']!, 0, -40 + lines.length * 22 + 6);
    ctx.font = `12px ${family}`;
    ctx.fillText(ui['peopleCount']!.replace('{n}', num(data.count)), 0, -40 + lines.length * 22 + 30);
  }

  function drawBars(L: Layout): void {
    const anySelected = selected !== null;
    const fontFamily = getComputedStyle(root).fontFamily;
    const labels: [Bar, number][] = [];
    ctx.lineCap = 'butt';
    for (const bar of L.bars) {
      if (bar === null || !visible(bar.idx)) continue;
      const person = people[bar.idx]!;
      const estimated = person.b === data.basis.length - 1;
      const thick = laneSize(bar.lane) * 0.8;
      const inFamily = family.has(bar.idx);
      let alpha = estimated ? 0.38 : person.c ? 0.95 : 0.7;
      if (anySelected && !inFamily) alpha *= 0.22;
      if (hover === bar.idx || inFamily) alpha = 1;
      ctx.globalAlpha = alpha;
      ctx.strokeStyle = lineColor(person.l);
      ctx.lineWidth = thick;
      ctx.beginPath();
      if (view === 'wheel') ctx.arc(0, 0, radius(bar.lane), angle(bar.u0), angle(bar.u1));
      else {
        const y = laneCenter(bar.lane);
        ctx.moveTo(X(bar.u0), y);
        ctx.lineTo(X(bar.u1), y);
      }
      ctx.stroke();
      if (bar.o0 >= 0) {
        ctx.strokeStyle = dark ? 'rgba(255,255,255,0.55)' : 'rgba(0,0,0,0.45)';
        ctx.lineWidth = thick * 0.38;
        ctx.beginPath();
        if (view === 'wheel') ctx.arc(0, 0, radius(bar.lane), angle(bar.o0), angle(bar.o1));
        else {
          const y = laneCenter(bar.lane);
          ctx.moveTo(X(bar.o0), y);
          ctx.lineTo(X(bar.o1), y);
        }
        ctx.stroke();
      }
      if (selected === bar.idx || hover === bar.idx) {
        ctx.globalAlpha = 1;
        ctx.strokeStyle = ink();
        ctx.lineWidth = Math.max(thick * 0.25, 1.5 / k);
        const pad = thick * 0.75;
        ctx.beginPath();
        if (view === 'wheel') {
          ctx.arc(0, 0, radius(bar.lane) + pad, angle(bar.u0), angle(bar.u1));
          ctx.arc(0, 0, radius(bar.lane) - pad, angle(bar.u1), angle(bar.u0), true);
          ctx.closePath();
        } else ctx.rect(Math.min(X(bar.u0), X(bar.u1)), laneCenter(bar.lane) - pad, Math.abs(X(bar.u1) - X(bar.u0)), pad * 2);
        ctx.stroke();
      }
      if (person.ev) {
        // At the start of the bar, so it does not cover the name.
        const [x, y] = pointAt(Math.min(bar.u1, bar.u0 + (bar.u1 - bar.u0) * 0.04), bar.lane);
        const s = Math.min(thick * 0.55, Math.max(thick * 0.35, 4.5 / k));
        ctx.globalAlpha = anySelected && !inFamily ? 0.2 : 1;
        ctx.fillStyle = dark ? '#ffe9a8' : '#7a5a12';
        ctx.beginPath();
        ctx.moveTo(x, y - s);
        ctx.lineTo(x + s, y);
        ctx.lineTo(x, y + s);
        ctx.lineTo(x - s, y);
        ctx.closePath();
        ctx.fill();
      }
      if (laneSize(bar.lane) * k >= 6.5) labels.push([bar, alpha]);
    }
    ctx.globalAlpha = 1;
    if (labels.length === 0) return;
    ctx.textBaseline = 'middle';
    let font = '';
    for (const [bar, alpha] of labels) {
      const person = people[bar.idx]!;
      const size = Math.min(14, laneSize(bar.lane) * k * 0.7);
      const span = view === 'wheel' ? (bar.u1 - bar.u0) * SWEEP * radius(bar.lane) * k : (bar.u1 - bar.u0) * LINE_W * k;
      if (span < (measure(person.n, fontFamily) * size) / 100 + 8) continue;
      const next = `${size / k}px ${fontFamily}`;
      if (next !== font) {
        ctx.font = next;
        font = next;
      }
      const um = (bar.u0 + bar.u1) / 2;
      ctx.globalAlpha = Math.min(1, alpha + 0.2);
      ctx.fillStyle = dark ? '#0e1a33' : '#ffffff';
      if (view === 'wheel') {
        const a = angle(um);
        const r = radius(bar.lane);
        ctx.save();
        ctx.translate(Math.cos(a) * r, Math.sin(a) * r);
        ctx.rotate(Math.sin(a) > 0 ? a - Math.PI / 2 : a + Math.PI / 2);
        ctx.textAlign = 'center';
        ctx.fillText(person.n, 0, 0);
        ctx.restore();
      } else {
        ctx.textAlign = 'center';
        ctx.fillText(person.n, X(um), laneCenter(bar.lane));
      }
    }
    ctx.globalAlpha = 1;
  }

  function drawStrings(L: Layout): void {
    if (!showStrings || selected === null) return;
    const person = people[selected]!;
    const own = L.bars[selected];
    if (!own) return;
    ctx.lineWidth = 1.6 / k;
    const link = (from: Bar | null | undefined, to: Bar | null | undefined, u: number): void => {
      if (!from || !to) return;
      const [x0, y0] = pointAt(Math.min(Math.max(u, from.u0), from.u1), from.lane);
      const [x1, y1] = pointAt(to.u0, to.lane);
      ctx.beginPath();
      ctx.moveTo(x0, y0);
      ctx.lineTo(x1, y1);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(x1, y1, 2.6 / k, 0, Math.PI * 2);
      ctx.fill();
    };
    ctx.strokeStyle = ink();
    ctx.fillStyle = ink();
    ctx.globalAlpha = 0.85;
    for (const parent of [person.f, person.mo]) if (parent !== undefined) link(L.bars[parent], own, own.u0);
    for (const child of person.ch ?? []) {
      const bar = L.bars[child];
      if (bar) link(own, bar, bar.u0);
    }
    ctx.setLineDash([4 / k, 4 / k]);
    for (const partner of person.w ?? []) {
      const bar = L.bars[partner];
      if (!bar) continue;
      const u = Math.max(own.u0, bar.u0);
      const [x0, y0] = pointAt(Math.min(u, own.u1), own.lane);
      const [x1, y1] = pointAt(Math.min(u, bar.u1), bar.lane);
      ctx.beginPath();
      ctx.moveTo(x0, y0);
      ctx.lineTo(x1, y1);
      ctx.stroke();
    }
    ctx.setLineDash([]);
    ctx.globalAlpha = 1;
  }

  function draw(): void {
    frame = 0;
    const dpr = window.devicePixelRatio || 1;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, width, height);
    ctx.setTransform(dpr * k, 0, 0, dpr * k, dpr * tx, dpr * ty);
    const L = layout();
    drawGrid(L);
    drawHistory(L);
    drawCenter();
    drawBars(L);
    drawStrings(L);
  }

  // ---- hit testing ----------------------------------------------------------------------------------------------
  const hit = (sx: number, sy: number): number | null => {
    const [wx, wy] = toWorld(sx, sy);
    const coords = chartCoords(wx, wy);
    if (coords === null) return null;
    const [u, laneReal] = coords;
    const L = layout();
    const tolerance = 4 / (k * (view === 'wheel' ? radius(Math.max(0, laneReal)) * SWEEP : LINE_W));
    for (const lane of [Math.round(laneReal), Math.round(laneReal) + (laneReal > Math.round(laneReal) ? 1 : -1)]) {
      const bars = L.lanes[lane];
      if (!bars) continue;
      if (Math.abs(laneReal - lane) > 0.75) continue;
      for (const bar of bars) {
        if (bar.u0 - tolerance > u) break;
        if (u <= bar.u1 + tolerance && visible(bar.idx)) return bar.idx;
      }
    }
    return null;
  };

  // ---- formatting -----------------------------------------------------------------------------------------------
  const rowOf = (idx: number): Row | null => {
    return rowFor(people[idx]!);
  };
  const datesText = (idx: number): string => {
    const person = people[idx]!;
    const row = rowOf(idx);
    if (row === null) return ui['septuagintOnly']!;
    if (undatedRow(row)) return ui['undatedDates']!;
    const [start, end, , born, died] = row as [number, number, number, number | null, number | null];
    const c = person.x ? `${ui['circa']} ` : '';
    if (born !== null && died !== null) return `${c}${yearLabel(born)} – ${c}${yearLabel(died)}`;
    if (born !== null) return `${ui['born']} ${c}${yearLabel(born)}`;
    if (died !== null) return `${ui['died']} ${c}${yearLabel(died)}`;
    return `${c}${yearLabel(start)} – ${yearLabel(end)}`;
  };
  const ageText = (idx: number): string => {
    const row = rowOf(idx);
    if (row === null || row[3] === null || row[4] === null || people[idx]!.b === data.basis.length - 1) return '';
    const years = yearLine(row[4]!) - yearLine(row[3]!);
    return years > 0 ? `${ui['lived']} ${num(years)} ${ui['years']}` : '';
  };
  const refLink = (ref: string): string => {
    const [code, place] = ref.split(' ') as [string, string];
    const [chapter, verse] = place.split(':');
    const book = data.bible.books[code];
    if (!book) return esc(ref);
    return `<a href="${data.bible.base}${book[0]}/${chapter}/#v${verse}">${esc(book[1])} ${num(Number(chapter))}:${num(Number(verse))}</a>`;
  };
  const personChip = (idx: number): string => `<button type="button" class="chip" data-go="${idx}"><i style="background:${lineColor(people[idx]!.l)}"></i>${esc(people[idx]!.n)}</button>`;

  function describeGeneric(person: Person): string {
    const parts: string[] = [];
    const who = person.s === 'f' ? ui['woman'] : ui['man'];
    parts.push(person.e ? `${who} ${ui['ofPeriod']!.replace('{p}', person.e)}` : who!);
    const parent = person.f ?? person.mo;
    if (parent !== undefined) parts.push((person.s === 'f' ? ui['daughter'] : ui['son'])!.replace('{p}', people[parent]!.n));
    return parts.join(ar ? '، ' : '; ') + (ar ? '.' : '.');
  }

  function openPanel(idx: number): void {
    const person = people[idx]!;
    const estimated = person.b === data.basis.length - 1;
    const sections: string[] = [];
    sections.push(`<header><span class="swatch" style="background:${lineColor(person.l)}"></span><div><h2>${esc(person.n)}</h2>${person.r ? `<p class="role">${esc(person.r)}</p>` : ''}</div><button type="button" class="close" data-close aria-label="${esc(ui['close']!)}">×</button></header>`);
    const dateBits = [`<p class="dates">${esc(datesText(idx))}${ageText(idx) ? ` <span>· ${esc(ageText(idx))}</span>` : ''}</p>`];
    const office = officeOf(person);
    if (person.o && office) dateBits.push(`<p class="office"><b>${esc(person.o[2])}</b>: ${person.x ? ui['circa'] + ' ' : ''}${esc(yearLabel(office[0]))} – ${esc(yearLabel(office[1]))}</p>`);
    const moved = person.h !== undefined || person.lx !== undefined;
    if (chron === 'lxx' && person.ol) dateBits.push(`<p class="note">${esc(ui['sojournNote']!)}</p>`);
    if (chron === 'hist' && person.c && moved && !undatedRow(rowOf(idx))) dateBits.push(`<p class="note">${esc(ui['histNote']!)}</p>`);
    if (chron === 'hist' && undatedRow(rowOf(idx))) dateBits.push(`<p class="note">${esc(ui['undatedNote']!)}</p>`);
    const basisText = undatedRow(rowOf(idx)) ? ui['undatedBasis']! : data.basis[person.b]!;
    dateBits.push(`<p class="basis"><span class="badge basis-${person.b}">${esc(basisText)}</span></p>`);
    if (person.d) dateBits.push(`<p class="note">${esc(person.d)}</p>`);
    if (estimated) dateBits.push(`<p class="note">${esc(ui['estimatedNote']!)}</p>`);
    sections.push(`<section>${dateBits.join('')}</section>`);
    sections.push(`<section><p>${esc(person.m ?? describeGeneric(person))}</p>${person.sb ? `<p class="note"><b>${esc(ui['stepBrief']!)}:</b> ${esc(person.sb)}</p>` : ''}<dl class="facts"><dt>${esc(ui['line']!)}</dt><dd>${esc(data.lines[person.l]!.name)}</dd>${person.t ? `<dt>${esc(ui['tribe']!)}</dt><dd>${esc(person.t)}</dd>` : ''}${person.e ? `<dt>${esc(ui['period']!)}</dt><dd>${esc(person.e)}</dd>` : ''}</dl></section>`);

    const passages = person.p && person.p.length > 0 ? person.p.map(([label, href]) => `<a href="${href}">${esc(label)}</a>`) : (person.v ?? []).map(refLink);
    if (passages.length > 0) {
      sections.push(`<section><h3>${esc(ui['passages']!)}</h3><p class="refs">${passages.join(' ')}</p>${person.k > 0 ? `<p class="note">${esc(ui['versesCount']!.replace('{n}', num(person.k)))}</p>` : ''}</section>`);
    }
    const fam: string[] = [];
    if (person.f !== undefined) fam.push(`<dt>${esc(ui['father']!)}</dt><dd>${personChip(person.f)}</dd>`);
    if (person.mo !== undefined) fam.push(`<dt>${esc(ui['mother']!)}</dt><dd>${personChip(person.mo)}</dd>`);
    if (person.w?.length) fam.push(`<dt>${esc(ui['partners']!)}</dt><dd>${person.w.map(personChip).join('')}</dd>`);
    if (person.ch?.length) fam.push(`<dt>${esc(ui['children']!)}</dt><dd>${person.ch.map(personChip).join('')}</dd>`);
    if (fam.length > 0) sections.push(`<section><h3>${esc(ui['family']!)}</h3><dl class="family">${fam.join('')}</dl></section>`);

    const evidence = (person.ev ?? []).map((i) => data.evidence[i]!);
    const evHtml = evidence.length === 0
      ? `<p class="note">${esc(ui['noEvidence']!)}</p>`
      : evidence.map((item) => `<article class="ev ev-${item.c}"><h4>${esc(item.t)}</h4><p class="ev-meta"><span class="badge cert-${item.c}">${esc(item.cn)}</span> ${esc(item.k)} · ${esc(item.d)}</p><p>${esc(item.s)}</p>${item.nt ? `<p class="note">${esc(item.nt)}</p>` : ''}${item.fo || item.no ? `<p class="note">${item.fo ? `<b>${esc(ui['found']!)}:</b> ${esc(item.fo)}` : ''}${item.fo && item.no ? ' · ' : ''}${item.no ? `<b>${esc(ui['keptAt']!)}:</b> ${esc(item.no)}` : ''}</p>` : ''}<p class="links">${item.li.map(([t, u]) => `<a href="${esc(u)}" rel="noopener" target="_blank">${esc(t)}</a>`).join(' · ')}${item.q ? ` · <a href="${item.q[1]}">${esc(ui['faithLink']!)}: ${esc(item.q[0])}</a>` : ''}</p>${item.p.length > 1 ? `<p class="also">${item.p.filter((p) => p !== idx).map(personChip).join('')}</p>` : ''}</article>`).join('');
    sections.push(`<section><h3>${esc(ui['evidence']!)}</h3>${evHtml}</section>`);
    if (person.q?.length) sections.push(`<section><h3>${esc(ui['faithLink']!)}</h3><ul class="faith">${person.q.map(([t, h]) => `<li><a href="${h}">${esc(t)}</a></li>`).join('')}</ul></section>`);
    panel.innerHTML = sections.join('');
    panel.hidden = false;
    stage.classList.add('has-panel');
  }

  function closePanel(): void {
    panel.hidden = true;
    stage.classList.remove('has-panel');
    selected = null;
    family = new Set();
    writeUrl();
    redraw();
  }

  function select(idx: number | null, fly = false): void {
    if (idx === null) return closePanel();
    selected = idx;
    family = familyOf(idx);
    openPanel(idx);
    writeUrl();
    if (fly) flyTo(idx);
    redraw();
  }

  // ---- navigation -----------------------------------------------------------------------------------------------
  let animation = 0;
  const animateTo = (nk: number, ntx: number, nty: number): void => {
    cancelAnimationFrame(animation);
    const [sk, sx, sy] = [k, tx, ty];
    const t0 = performance.now();
    const step = (now: number): void => {
      const t = Math.min(1, (now - t0) / 450);
      const e = t < 0.5 ? 2 * t * t : 1 - (-2 * t + 2) ** 2 / 2;
      // Interpolate the zoom geometrically so the motion feels even.
      k = sk * (nk / sk) ** e;
      tx = sx + (ntx - sx) * e;
      ty = sy + (nty - sy) * e;
      draw();
      if (t < 1) animation = requestAnimationFrame(step);
    };
    animation = requestAnimationFrame(step);
  };
  function flyTo(idx: number): void {
    interacted = true;
    const bar = layout().bars[idx];
    if (!bar) return;
    const [wx, wy] = pointAt((bar.u0 + bar.u1) / 2, bar.lane);
    const target = Math.max(k, 18 / laneSize(bar.lane));
    const visibleWidth = stage.classList.contains('has-panel') && width > 820 ? width - Math.min(420, width * 0.42) : width;
    const cx = ar && stage.classList.contains('has-panel') && width > 820 ? width - visibleWidth / 2 : visibleWidth / 2;
    animateTo(target, cx - wx * target, height / 2 - wy * target);
  }
  function flyToU(u0: number, u1: number): void {
    interacted = true;
    const L = layout();
    if (view === 'line') {
      const target = Math.min(width / ((u1 - u0) * LINE_W * 1.05), 40);
      animateTo(target, -Math.min(X(u0), X(u1)) * target + width * 0.025, ty);
      return;
    }
    // Wheel: centre the arc's middle on the outer half of the lanes.
    const um = (u0 + u1) / 2;
    const rMid = radius(L.maxLane * 0.35);
    const arc = (u1 - u0) * SWEEP * rMid;
    const target = Math.min(Math.max(Math.min(width, height) / (arc * 1.1), 0.4), 30);
    const a = angle(um);
    animateTo(target, width / 2 - Math.cos(a) * rMid * target, height / 2 - Math.sin(a) * rMid * target);
  }
  const zoomAt = (factor: number, sx: number, sy: number): void => {
    interacted = true;
    const nk = Math.min(80, Math.max(0.08, k * factor));
    const f = nk / k;
    tx = sx - (sx - tx) * f;
    ty = sy - (sy - ty) * f;
    k = nk;
    redraw();
  };

  // ---- url ------------------------------------------------------------------------------------------------------
  function writeUrl(): void {
    const next = new URLSearchParams();
    if (selected !== null) next.set('p', people[selected]!.i);
    if (view === 'line') next.set('view', 'line');
    if (chron !== 'hist') next.set('count', chron);
    if (hiddenLines.size > 0) next.set('hide', [...hiddenLines].join(','));
    if (!showEstimated) next.set('est', '0');
    if (evidenceOnly) next.set('ev', '1');
    const query = next.toString();
    history.replaceState(null, '', query === '' ? location.pathname : `${location.pathname}?${query}`);
  }

  // ---- controls -------------------------------------------------------------------------------------------------
  const resize = (): void => {
    const rect = stage.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    const first = width === 0;
    const [ow, oh] = [width, height];
    width = rect.width;
    height = rect.height;
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    if (first || !interacted) fit();
    else {
      tx += (width - ow) / 2;
      ty += (height - oh) / 2;
    }
    redraw();
  };
  new ResizeObserver(resize).observe(stage);

  new MutationObserver(() => {
    dark = document.documentElement.dataset['theme'] === 'dark';
    if (selected !== null) openPanel(selected);
    renderLegend();
    redraw();
  }).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

  // Pointer: drag, pinch, hover, click.
  const pointers = new Map<number, [number, number]>();
  let dragStart: [number, number] | null = null;
  let moved = false;
  let pinch: { d: number; k: number } | null = null;
  const local = (event: PointerEvent | WheelEvent | MouseEvent): [number, number] => {
    const rect = canvas.getBoundingClientRect();
    return [event.clientX - rect.left, event.clientY - rect.top];
  };
  canvas.addEventListener('pointerdown', (event) => {
    canvas.setPointerCapture(event.pointerId);
    pointers.set(event.pointerId, local(event));
    dragStart = local(event);
    moved = false;
    if (pointers.size === 2) {
      const [a, b] = [...pointers.values()] as [[number, number], [number, number]];
      pinch = { d: Math.hypot(a[0] - b[0], a[1] - b[1]), k };
    }
  });
  canvas.addEventListener('pointermove', (event) => {
    const [x, y] = local(event);
    if (pointers.has(event.pointerId)) {
      const [px, py] = pointers.get(event.pointerId)!;
      pointers.set(event.pointerId, [x, y]);
      if (pointers.size === 2 && pinch) {
        const [a, b] = [...pointers.values()] as [[number, number], [number, number]];
        const d = Math.hypot(a[0] - b[0], a[1] - b[1]);
        zoomAt((pinch.k * (d / pinch.d)) / k, (a[0] + b[0]) / 2, (a[1] + b[1]) / 2);
        moved = true;
        return;
      }
      if (dragStart && Math.hypot(x - dragStart[0], y - dragStart[1]) > 4) moved = true;
      if (moved) {
        interacted = true;
        tx += x - px;
        ty += y - py;
        tip.hidden = true;
        redraw();
      }
      return;
    }
    const found = hit(x, y);
    if (found !== hover) {
      hover = found;
      canvas.style.cursor = found === null ? 'grab' : 'pointer';
      redraw();
    }
    const mark = found === null ? markAt(x, y) : null;
    if (mark !== hoverMark) {
      hoverMark = mark;
      redraw();
    }
    if (found === null && mark !== null) {
      const m = data.marks[mark]!;
      tip.hidden = false;
      tip.innerHTML = `<b>${esc(m.name)}</b><span>${esc(m.note)}</span><span>${esc(ui['worldBasis']!)}: ${esc(m.basis)}</span>`;
      const tw = tip.offsetWidth;
      tip.style.left = `${Math.min(width - tw - 8, Math.max(8, x + 14))}px`;
      tip.style.top = `${Math.max(8, y - 12 - tip.offsetHeight)}px`;
    } else if (found === null) tip.hidden = true;
    else {
      tip.hidden = false;
      tip.innerHTML = `<b>${esc(people[found]!.n)}</b><span>${esc(datesText(found))}</span>${people[found]!.r ? `<span>${esc(people[found]!.r!)}</span>` : ''}`;
      const tw = tip.offsetWidth;
      tip.style.left = `${Math.min(width - tw - 8, Math.max(8, x + 14))}px`;
      tip.style.top = `${Math.max(8, y - 12 - tip.offsetHeight)}px`;
    }
  });
  const endPointer = (event: PointerEvent): void => {
    pointers.delete(event.pointerId);
    if (pointers.size < 2) pinch = null;
    if (pointers.size === 0) {
      if (!moved && dragStart && event.type === 'pointerup') {
        const found = hit(dragStart[0], dragStart[1]);
        if (found === null) closePanel();
        else select(found);
      }
      dragStart = null;
    }
  };
  canvas.addEventListener('pointerup', endPointer);
  canvas.addEventListener('pointercancel', endPointer);
  canvas.addEventListener('pointerleave', () => {
    if (hover !== null) {
      hover = null;
      redraw();
    }
    tip.hidden = true;
  });
  canvas.addEventListener('wheel', (event) => {
    event.preventDefault();
    const [x, y] = local(event);
    zoomAt(Math.exp(-event.deltaY * (event.deltaMode === 1 ? 0.05 : 0.0018)), x, y);
  }, { passive: false });
  canvas.addEventListener('dblclick', (event) => {
    const [x, y] = local(event);
    zoomAt(2, x, y);
  });
  canvas.addEventListener('keydown', (event) => {
    const step = 60;
    const keys: Record<string, () => void> = {
      '+': () => zoomAt(1.4, width / 2, height / 2), '=': () => zoomAt(1.4, width / 2, height / 2),
      '-': () => zoomAt(1 / 1.4, width / 2, height / 2),
      ArrowLeft: () => { tx += step; redraw(); }, ArrowRight: () => { tx -= step; redraw(); },
      ArrowUp: () => { ty += step; redraw(); }, ArrowDown: () => { ty -= step; redraw(); },
      '0': () => { fit(); redraw(); },
      Escape: () => closePanel(),
    };
    const action = keys[event.key];
    if (action) {
      event.preventDefault();
      action();
    }
  });

  root.querySelectorAll<HTMLButtonElement>('[data-zoom]').forEach((button) => button.addEventListener('click', () => {
    const kind = button.dataset['zoom'];
    if (kind === 'in') zoomAt(1.6, width / 2, height / 2);
    else if (kind === 'out') zoomAt(1 / 1.6, width / 2, height / 2);
    else { fit(); redraw(); }
  }));
  $<HTMLButtonElement>('[data-fullscreen]').addEventListener('click', () => {
    if (document.fullscreenElement) void document.exitFullscreen();
    else void stage.requestFullscreen?.();
  });

  const setPressed = (selector: string, value: string): void => {
    root.querySelectorAll<HTMLButtonElement>(selector).forEach((button) => button.setAttribute('aria-pressed', String(Object.values(button.dataset)[0] === value)));
  };
  root.querySelectorAll<HTMLButtonElement>('[data-view]').forEach((button) => button.addEventListener('click', () => {
    view = button.dataset['view'] === 'line' ? 'line' : 'wheel';
    setPressed('[data-view]', view);
    fit();
    if (selected !== null) flyTo(selected);
    writeUrl();
    redraw();
  }));
  root.querySelectorAll<HTMLButtonElement>('[data-count]').forEach((button) => button.addEventListener('click', () => {
    const value = button.dataset['count'];
    chron = value === 'mt' || value === 'lxx' ? value : 'hist';
    setPressed('[data-count]', chron);
    renderPeriods();
    writeUrl();
    if (selected !== null) openPanel(selected);
    redraw();
  }));
  setPressed('[data-view]', view);
  setPressed('[data-count]', chron);

  const estimatedBox = $<HTMLInputElement>('[data-opt="estimated"]');
  const evidenceBox = $<HTMLInputElement>('[data-opt="evidence"]');
  const stringsBox = $<HTMLInputElement>('[data-opt="strings"]');
  estimatedBox.checked = showEstimated;
  evidenceBox.checked = evidenceOnly;
  estimatedBox.addEventListener('change', () => { showEstimated = estimatedBox.checked; writeUrl(); redraw(); });
  evidenceBox.addEventListener('change', () => { evidenceOnly = evidenceBox.checked; writeUrl(); redraw(); });
  stringsBox.addEventListener('change', () => { showStrings = stringsBox.checked; redraw(); });

  // Lines of descent: the legend is also the filter.
  const legend = $<HTMLElement>('[data-lines]');
  function renderLegend(): void {
    const counts = data.lines.map((_, l) => people.filter((person) => person.l === l).length);
    legend.innerHTML = data.lines.map((item, l) => (counts[l] === 0 ? '' : `<button type="button" class="line-chip" data-line="${l}" aria-pressed="${!hiddenLines.has(l)}"><i style="background:${dark ? item.dark : item.color}"></i>${esc(item.name)} <span>${num(counts[l]!)}</span></button>`)).join('');
  }
  renderLegend();
  legend.addEventListener('click', (event) => {
    const button = (event.target as HTMLElement).closest<HTMLButtonElement>('[data-line]');
    if (!button) return;
    const l = Number(button.dataset['line']);
    if (hiddenLines.has(l)) hiddenLines.delete(l); else hiddenLines.add(l);
    button.setAttribute('aria-pressed', String(!hiddenLines.has(l)));
    writeUrl();
    redraw();
  });

  // Periods: jump to one.
  const periodBox = $<HTMLElement>('[data-periods]');
  const renderPeriods = (): void => {
    periodBox.innerHTML = data.periods.map((period, i) => (periodYear(period.from) === null ? '' : `<button type="button" class="period" data-period="${i}">${esc(period.name)}</button>`)).join('');
  };
  renderPeriods();
  periodBox.addEventListener('click', (event) => {
    const button = (event.target as HTMLElement).closest<HTMLButtonElement>('[data-period]');
    if (!button) return;
    const i = Number(button.dataset['period']);
    const { scale } = layout();
    const start = periodYear(data.periods[i]!.from);
    if (start === null) return;
    const next = data.periods.slice(i + 1).map((period) => periodYear(period.from)).find((year): year is number => year !== null);
    const u0 = toU(scale, start);
    const u1 = next === undefined ? 1 : toU(scale, next);
    flyToU(u0, u1);
  });

  // Panel: family chips and closing.
  panel.addEventListener('click', (event) => {
    const target = event.target as HTMLElement;
    if (target.closest('[data-close]')) return closePanel();
    const go = target.closest<HTMLElement>('[data-go]');
    if (go) select(Number(go.dataset['go']), true);
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !panel.hidden && !(event.target instanceof HTMLInputElement)) closePanel();
  });

  // Search.
  const searchInput = $<HTMLInputElement>('[data-search]');
  const results = $<HTMLElement>('[data-results]');
  const folded = people.map((person) => fold(person.n));
  let active = -1;
  let matches: number[] = [];
  const showResults = (): void => {
    const q = fold(searchInput.value.trim());
    if (q.length === 0) {
      results.hidden = true;
      return;
    }
    const exact: number[] = [];
    const prefix: number[] = [];
    const inner: number[] = [];
    folded.forEach((name, idx) => {
      if (name === q) exact.push(idx);
      else if (name.startsWith(q)) prefix.push(idx);
      else if (name.includes(q)) inner.push(idx);
    });
    const byWeight = (a: number, b: number): number => (people[b]!.c ?? 0) - (people[a]!.c ?? 0) || people[b]!.k - people[a]!.k;
    matches = [...exact.sort(byWeight), ...prefix.sort(byWeight), ...inner.sort(byWeight)].slice(0, 12);
    active = matches.length > 0 ? 0 : -1;
    results.innerHTML = matches.length === 0
      ? `<li class="empty">${esc(ui['noMatch']!)}</li>`
      : matches.map((idx, i) => `<li role="option" id="bh-opt-${i}" aria-selected="${i === active}" data-go="${idx}"><i style="background:${lineColor(people[idx]!.l)}"></i><b>${esc(people[idx]!.n)}</b><span>${esc(people[idx]!.r ?? people[idx]!.e ?? '')} · ${esc(datesText(idx))}</span></li>`).join('');
    results.hidden = false;
    searchInput.setAttribute('aria-activedescendant', active >= 0 ? `bh-opt-${active}` : '');
  };
  searchInput.addEventListener('input', showResults);
  searchInput.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();
      if (matches.length === 0) return;
      active = (active + (event.key === 'ArrowDown' ? 1 : -1) + matches.length) % matches.length;
      results.querySelectorAll('li').forEach((li, i) => li.setAttribute('aria-selected', String(i === active)));
      searchInput.setAttribute('aria-activedescendant', `bh-opt-${active}`);
    } else if (event.key === 'Enter' && active >= 0) {
      event.preventDefault();
      pick(matches[active]!);
    } else if (event.key === 'Escape') {
      results.hidden = true;
    }
  });
  const pick = (idx: number): void => {
    results.hidden = true;
    searchInput.value = people[idx]!.n;
    if (!visible(idx)) {
      hiddenLines.delete(people[idx]!.l);
      if (people[idx]!.b === data.basis.length - 1) { showEstimated = true; estimatedBox.checked = true; }
      if (evidenceOnly && !people[idx]!.ev) { evidenceOnly = false; evidenceBox.checked = false; }
      renderLegend();
    }
    select(idx, true);
  };
  results.addEventListener('pointerdown', (event) => {
    const li = (event.target as HTMLElement).closest<HTMLElement>('[data-go]');
    if (li) {
      event.preventDefault();
      pick(Number(li.dataset['go']));
    }
  });
  searchInput.addEventListener('blur', () => setTimeout(() => (results.hidden = true), 150));

  // Links from the index below the chart ("#p=key").
  root.ownerDocument.addEventListener('click', (event) => {
    const link = (event.target as HTMLElement).closest<HTMLAnchorElement>('a[data-person]');
    if (!link) return;
    const idx = people.findIndex((person) => person.i === link.dataset['person']);
    if (idx < 0) return;
    event.preventDefault();
    stage.scrollIntoView({ behavior: 'smooth', block: 'center' });
    pick(idx);
  });

  // Start: open the person in the address, if any.
  resize();
  const start = params.get('p');
  if (start) {
    const idx = people.findIndex((person) => person.i === start);
    if (idx >= 0) setTimeout(() => select(idx, true), 50);
  }
}
