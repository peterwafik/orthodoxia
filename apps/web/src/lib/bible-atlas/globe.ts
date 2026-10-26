/**
 * The Bible atlas in the browser: a canvas globe (or flat map) with the places and journeys of the Bible drawn on it, the
 * panel that lists them, and the popup that opens the passages of a place. The data arrives as one JSON file per language
 * (see payload.ts); the coastlines come from Natural Earth through the world-atlas package, loaded when the page opens.
 *
 * Only what is needed is redrawn: a frame is drawn when something moved, and not at all while the globe is off screen.
 * With reduced motion nothing spins, flies or animates; the view simply changes.
 */
import { geoCentroid, geoDistance, geoGraticule10, geoInterpolate, geoMercator, geoOrthographic, geoPath, type GeoProjection } from 'd3-geo';
import { feature } from 'topojson-client';
import { LAKES, RIVERS, type LonLat } from './geo.ts';
import type { AtlasPayload } from './payload.ts';

export interface AtlasConfig {
  readonly dataUrl: string;
  readonly landUrl: { readonly coarse: string; readonly fine: string };
  readonly ui: Readonly<Record<string, string>>;
  readonly types: Readonly<Record<string, string>>;
  readonly kinds: Readonly<Record<string, string>>;
  readonly locale: 'en' | 'ar';
}

type Place = AtlasPayload['places'][number];
type Journey = AtlasPayload['journeys'][number];
interface Dot {
  readonly id: string;
  readonly name: string;
  readonly modern: string;
  readonly type: string;
  readonly conf: number;
  readonly lon: number;
  readonly lat: number;
  readonly count: number;
  readonly alt: number;
  readonly verses: readonly string[];
}
type Mode = 'globe' | 'map';
interface Mark {
  readonly x: number;
  readonly y: number;
  readonly r: number;
  readonly kind: 'place' | 'dot';
  readonly id: string;
}
interface View {
  lon: number;
  lat: number;
  zoom: number;
}
interface Colors {
  ocean1: string;
  ocean2: string;
  land: string;
  landLine: string;
  grid: string;
  glow: string;
  ink: string;
  muted: string;
  halo: string;
  surface: string;
  water: string;
  fontUi: string;
  fontReading: string;
}

const RAD = Math.PI / 180;
const DEG = 180 / Math.PI;
const clamp = (value: number, low: number, high: number): number => Math.min(high, Math.max(low, value));
const wrapLon = (lon: number): number => ((((lon + 180) % 360) + 360) % 360) - 180;
const ease = (t: number): number => (t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2);
const ZOOM = { globe: { min: 1, max: 90 }, map: { min: 1, max: 160 } } as const;
/** Where the globe opens: the Holy Land and the Mediterranean. */
const HOME: Record<Mode, View> = { globe: { lon: 30, lat: 31, zoom: 1.35 }, map: { lon: 30, lat: 33, zoom: 3.2 } };

function must<T extends Element>(root: ParentNode, selector: string): T {
  const found = root.querySelector<T>(selector);
  if (found === null) throw new Error(`The atlas page is missing ${selector}`);
  return found;
}

function el<K extends keyof HTMLElementTagNameMap>(tag: K, className?: string, text?: string): HTMLElementTagNameMap[K] {
  const node = document.createElement(tag);
  if (className !== undefined) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

export async function mountAtlas(root: HTMLElement, config: AtlasConfig): Promise<void> {
  const { ui, types, kinds, locale } = config;
  const ar = locale === 'ar';
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

  const canvas = must<HTMLCanvasElement>(root, '[data-canvas]');
  const stage = must<HTMLElement>(root, '[data-stage]');
  const tip = must<HTMLElement>(root, '[data-tip]');
  const popup = must<HTMLElement>(root, '[data-popup]');
  const status = must<HTMLElement>(root, '[data-status]');
  const journeyList = must<HTMLElement>(root, '[data-journey-list]');
  const placeList = must<HTMLElement>(root, '[data-place-list]');
  const eraBox = must<HTMLElement>(root, '[data-eras]');
  const searchBox = must<HTMLInputElement>(root, '[data-search]');
  const counts = must<HTMLElement>(root, '[data-counts]');
  const context = canvas.getContext('2d');
  if (context === null) throw new Error('The atlas needs a 2D canvas.');
  const ctx: CanvasRenderingContext2D = context;

  // ───────────── Data ─────────────
  status.textContent = ui['loading'] ?? '';
  const [payload, coarseTopo, fineTopo] = await Promise.all([
    fetch(config.dataUrl).then((response) => response.json() as Promise<AtlasPayload>),
    fetch(config.landUrl.coarse).then((response) => response.json() as Promise<unknown>),
    fetch(config.landUrl.fine).then((response) => response.json() as Promise<unknown>).catch(() => undefined),
  ]);
  status.textContent = '';

  const landOf = (topology: unknown): GeoJSON.FeatureCollection | GeoJSON.Feature => {
    const topo = topology as { objects: Record<string, unknown> };
    return feature(topo as never, topo.objects['land'] as never) as unknown as GeoJSON.FeatureCollection | GeoJSON.Feature;
  };
  const landCoarse = landOf(coarseTopo);
  const landFine = fineTopo === undefined ? landCoarse : landOf(fineTopo);

  const places: readonly Place[] = payload.places;
  const placeById = new Map(places.map((place) => [place.id, place]));
  const journeys: readonly Journey[] = payload.journeys;
  const journeyById = new Map(journeys.map((journey) => [journey.id, journey]));
  const eraById = new Map<string, (typeof payload.eras)[number]>(payload.eras.map((era) => [era.id, era]));
  const dots: readonly Dot[] = payload.dots.map((row) => ({ id: row[0], name: row[1], modern: row[2], type: row[3], conf: row[4], lon: row[5], lat: row[6], count: row[7], alt: row[8], verses: row[9] }));
  const dotById = new Map(dots.map((dot) => [dot.id, dot]));

  /** Each journey as coordinates, the length of each leg (radians) and their sum. */
  const routes = new Map<string, { coords: LonLat[]; legs: number[]; total: number }>();
  for (const journey of journeys) {
    const coords = journey.stops.flatMap((stop) => {
      const place = placeById.get(stop.p);
      return place === undefined ? [] : [[place.lon, place.lat] as LonLat];
    });
    const legs = coords.slice(1).map((point, index) => geoDistance(coords[index] as LonLat, point));
    routes.set(journey.id, { coords, legs, total: legs.reduce((sum, leg) => sum + leg, 0) });
  }

  // ───────────── State ─────────────
  let mode: Mode = 'globe';
  const views: Record<Mode, View> = { globe: { ...HOME.globe }, map: { ...HOME.map } };
  const activeEras = new Set<string>();
  const layers = { journeys: true, all: true, uncertain: false, labels: true };
  let selectedPlace: string | undefined;
  let selectedDot: string | undefined;
  let selectedJourney: string | undefined;
  let hover: Mark | undefined;
  let routeT = 1;
  let routeStart = 0;
  let routeSpan = 1;
  let autoRotate = false;
  let interacting = false;
  let width = 0;
  let height = 0;
  let dpr = 1;
  let marks: Mark[] = [];
  let colors = readColors();
  let anim: { from: View; to: View; start: number; ms: number; mode: Mode } | undefined;
  let velocity = { lon: 0, lat: 0 };
  let frameHandle = 0;
  let onScreen = true;
  let lastFrame = 0;
  const view = (): View => views[mode];
  /** The picture is pushed aside while the popup covers part of the stage, so the chosen place stays in sight. */
  let shiftX = 0;
  let shiftY = 0;
  const wide = matchMedia('(min-width: 62rem)');
  function targetShift(): [number, number] {
    if (popup.hidden) return [0, 0];
    if (wide.matches) return [((popup.offsetWidth + 12) / 2) * (ar ? -1 : 1), 0];
    return [0, -Math.min(popup.offsetHeight, height * 0.64) / 2];
  }

  // ───────────── Colours ─────────────
  function readColors(): Colors {
    const style = getComputedStyle(root);
    const read = (name: string): string => style.getPropertyValue(name).trim();
    return {
      ocean1: read('--atlas-ocean-1'),
      ocean2: read('--atlas-ocean-2'),
      land: read('--atlas-land'),
      landLine: read('--atlas-land-line'),
      grid: read('--atlas-grid'),
      glow: read('--atlas-glow'),
      ink: read('--ink'),
      muted: read('--ink-muted'),
      halo: read('--atlas-halo'),
      surface: read('--surface-raised'),
      water: read('--atlas-water'),
      fontUi: read('--font-ui'),
      fontReading: read('--font-reading'),
    };
  }
  const dark = (): boolean => document.documentElement.dataset['theme'] === 'dark';
  const hsl = (hue: number, alpha = 1): string => (dark() ? `hsl(${hue} 72% 68% / ${alpha})` : `hsl(${hue} 64% 38% / ${alpha})`);
  const eraHue = (era: string | undefined): number => (era === undefined ? 40 : (eraById.get(era)?.hue ?? 40));

  // ───────────── Projection ─────────────
  function projectionFor(target: Mode, at: View, w: number, h: number): GeoProjection {
    const half = Math.min(w, h) / 2;
    if (target === 'globe') {
      return geoOrthographic().clipAngle(90).precision(0.5).translate([w / 2 + shiftX, h / 2 + shiftY]).scale(half * 0.9 * at.zoom).rotate([-at.lon, -at.lat]);
    }
    return geoMercator().precision(0.5).translate([w / 2 + shiftX, h / 2 + shiftY]).center([at.lon, at.lat]).scale((Math.max(w, 600) / (2 * Math.PI)) * at.zoom);
  }
  const visible = (lon: number, lat: number): boolean => mode === 'map' || geoDistance([lon, lat], [view().lon, view().lat]) < Math.PI / 2 - 0.02;

  // ───────────── Selection ─────────────
  const eraOn = (era: string): boolean => activeEras.size === 0 || activeEras.has(era);
  const placeOn = (place: Place): boolean => activeEras.size === 0 || place.eras.some((era) => activeEras.has(era)) || (selectedJourney !== undefined && (journeyById.get(selectedJourney)?.stops.some((stop) => stop.p === place.id) ?? false));
  const journeyOn = (journey: Journey): boolean => eraOn(journey.era);
  const dotOn = (dot: Dot): boolean => layers.all && (dot.conf >= 400 || layers.uncertain);

  function fitView(points: readonly LonLat[], at: Mode): View {
    if (points.length === 0) return { ...HOME[at] };
    const center = geoCentroid({ type: 'MultiPoint', coordinates: points as LonLat[] });
    if (at === 'globe') {
      const radius = Math.max(...points.map((point) => geoDistance(center, point)));
      const angle = clamp(radius * 1.18 + 0.012, 0.012, 1.4);
      return { lon: center[0], lat: center[1], zoom: clamp(0.82 / (0.9 * Math.sin(angle)), 1, 34) };
    }
    const probe = geoMercator().translate([0, 0]).center(center).scale(1);
    const xs = points.map((point) => probe(point)?.[0] ?? 0);
    const ys = points.map((point) => probe(point)?.[1] ?? 0);
    const spanX = Math.max(Math.max(...xs) - Math.min(...xs), 0.0006);
    const spanY = Math.max(Math.max(...ys) - Math.min(...ys), 0.0006);
    const base = Math.max(width, 600) / (2 * Math.PI);
    return { lon: center[0], lat: center[1], zoom: clamp(Math.min((0.74 * width) / spanX, (0.7 * height) / spanY) / base, 1.2, 60) };
  }

  function flyTo(target: View, ms = 1000): void {
    const goal: View = { lon: wrapLon(target.lon), lat: clamp(target.lat, mode === 'map' ? -70 : -85, mode === 'map' ? 78 : 85), zoom: clamp(target.zoom, ZOOM[mode].min, ZOOM[mode].max) };
    velocity = { lon: 0, lat: 0 };
    if (reduced || ms === 0) {
      Object.assign(view(), goal);
      anim = undefined;
    } else {
      const from = { ...view() };
      // Turn the short way round.
      goal.lon = from.lon + wrapLon(goal.lon - from.lon);
      anim = { from, to: goal, start: performance.now(), ms, mode };
    }
    request();
  }

  function flyToPlaces(ids: readonly string[]): void {
    const points = ids.flatMap((id) => {
      const place = placeById.get(id);
      return place === undefined ? [] : [[place.lon, place.lat] as LonLat];
    });
    flyTo(fitView(points, mode));
  }

  function selectJourney(id: string | undefined, fly = true): void {
    selectedJourney = id;
    selectedPlace = undefined;
    selectedDot = undefined;
    closePopup();
    const journey = id === undefined ? undefined : journeyById.get(id);
    if (journey !== undefined && fly) {
      flyToPlaces(journey.stops.map((stop) => stop.p));
      routeT = reduced ? 1 : 0;
      routeStart = performance.now() + 450;
      routeSpan = clamp(1400 + 1100 * journey.stops.length, 2500, 9000);
    } else {
      routeT = 1;
    }
    if (id === undefined && fly) flyTo(HOME[mode], 900);
    renderJourneyList();
    syncHash();
    request();
  }

  function selectPlace(id: string, options: { fly?: boolean; focus?: boolean } = {}): void {
    const place = placeById.get(id);
    if (place === undefined) return;
    selectedPlace = id;
    selectedDot = undefined;
    openPlacePopup(place, options.focus === true);
    if (options.fly !== false) flyTo({ lon: place.lon, lat: place.lat, zoom: Math.max(view().zoom, mode === 'globe' ? 7 : 8, zoomToSeparate(place)) });
    syncHash();
    request();
  }

  /** How far to zoom so that the nearest other place is at least ~42 px away. */
  function zoomToSeparate(place: Place): number {
    let nearest = Infinity;
    for (const other of places) {
      if (other.id === place.id) continue;
      nearest = Math.min(nearest, geoDistance([place.lon, place.lat], [other.lon, other.lat]));
    }
    if (!Number.isFinite(nearest) || nearest === 0) return 1;
    const half = Math.min(width, height) / 2;
    const perRadian = mode === 'globe' ? half * 0.9 : Math.max(width, 600) / (2 * Math.PI);
    return clamp(42 / (perRadian * nearest), 1, mode === 'globe' ? 45 : 110);
  }

  function selectDot(id: string, options: { fly?: boolean; focus?: boolean } = {}): void {
    const dot = dotById.get(id);
    if (dot === undefined) return;
    selectedDot = id;
    selectedPlace = undefined;
    openDotPopup(dot, options.focus === true);
    if (options.fly !== false) flyTo({ lon: dot.lon, lat: dot.lat, zoom: Math.max(view().zoom, mode === 'globe' ? 9 : 10) });
    syncHash();
    request();
  }

  function clearSelection(): void {
    selectedPlace = undefined;
    selectedDot = undefined;
    closePopup();
    syncHash();
    request();
  }

  function syncHash(): void {
    const hash = selectedPlace !== undefined ? `#place=${selectedPlace}` : selectedDot !== undefined ? `#other=${selectedDot}` : selectedJourney !== undefined ? `#journey=${selectedJourney}` : '';
    try {
      history.replaceState(null, '', `${location.pathname}${location.search}${hash}`);
    } catch {
      // The address cannot be changed here; the page still works.
    }
  }

  function applyHash(): void {
    const [kind, id] = location.hash.replace(/^#/, '').split('=');
    if (id === undefined || id === '') return;
    if (kind === 'journey' && journeyById.has(id)) {
      selectJourney(id);
      setTab('journeys');
    } else if (kind === 'place' && placeById.has(id)) {
      selectPlace(id);
      setTab('places');
    } else if (kind === 'other' && dotById.has(id)) {
      selectDot(id);
      setTab('places');
    }
  }

  // ───────────── Popup ─────────────
  const verseLink = (osis: string): { label: string; href: string } | undefined => {
    const [book, chapter, verse] = osis.split('.');
    const info = book === undefined ? undefined : payload.books[book];
    if (info === undefined || chapter === undefined || verse === undefined) return undefined;
    return { label: `${info[1]} ${chapter}:${verse}`, href: `${payload.reader}${info[0]}/${chapter}/#v${verse}` };
  };
  const fill = (template: string, n: number): string => template.replace('{n}', String(n));

  function certBadge(cert: string): HTMLElement {
    const label = cert === 'secure' ? ui['certSecure'] : cert === 'probable' ? ui['certProbable'] : ui['certTradition'];
    const badge = el('span', `ap-cert ap-cert-${cert}`, label);
    badge.title = (cert === 'secure' ? ui['certSecureNote'] : cert === 'probable' ? ui['certProbableNote'] : ui['certTraditionNote']) ?? '';
    return badge;
  }

  function popupShell(title: string, colour: string, kind: string): { head: HTMLElement } {
    popup.replaceChildren();
    popup.style.setProperty('--c', colour);
    const head = el('header', 'ap-head');
    const heading = el('div', 'ap-title');
    heading.append(el('span', 'ap-kind', kind), el('h3', undefined, title));
    const close = el('button', 'ap-close');
    close.type = 'button';
    close.setAttribute('aria-label', ui['close'] ?? 'Close');
    close.innerHTML = '<svg viewBox="0 0 20 20" width="16" height="16" aria-hidden="true"><path d="m4 4 12 12M16 4 4 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>';
    close.addEventListener('click', clearSelection);
    head.append(heading, close);
    popup.append(head);
    popup.setAttribute('aria-label', title);
    return { head };
  }

  function refLinks(refs: readonly { l: string; h: string }[], className = 'ap-ref'): HTMLElement[] {
    return refs.map((ref) => {
      const link = el('a', className);
      link.href = ref.h;
      const text = el('bdi', undefined, ref.l);
      link.append(text, el('span', 'ap-go', ar ? '←' : '→'));
      return link;
    });
  }

  function versesBlock(osises: readonly string[], count: number): HTMLDetailsElement | undefined {
    const links = osises.flatMap((osis) => {
      const link = verseLink(osis);
      return link === undefined ? [] : [link];
    });
    if (links.length === 0) return undefined;
    const details = el('details', 'ap-more');
    details.append(el('summary', undefined, count === 1 ? (ui['namedOnce'] ?? '') : fill(ui['namedIn'] ?? '', count)));
    const list = el('ul', 'ap-verses');
    for (const link of links) {
      const item = el('li');
      const anchor = el('a');
      anchor.href = link.href;
      anchor.append(el('bdi', undefined, link.label));
      item.append(anchor);
      list.append(item);
    }
    details.append(el('p', 'ap-fine', fill(ui['moreVersesShown'] ?? '', links.length)), list);
    return details;
  }

  function openPlacePopup(place: Place, focus: boolean): void {
    const colour = hsl(eraHue(place.eras[0]));
    popupShell(place.name, colour, kinds[place.kind] ?? '');
    const body = el('div', 'ap-body');
    if (place.modern !== '') body.append(el('p', 'ap-modern', `${ui['today']}: ${place.modern}`));
    const badges = el('div', 'ap-badges');
    badges.append(certBadge(place.cert));
    for (const era of place.eras) {
      const info = eraById.get(era);
      if (info === undefined) continue;
      const chip = el('span', 'ap-era', info.name);
      chip.style.setProperty('--c', hsl(info.hue));
      chip.title = info.span;
      badges.append(chip);
    }
    body.append(badges, el('p', 'ap-summary', place.summary));
    if (place.note !== '') body.append(el('p', 'ap-note', place.note));

    body.append(el('h4', undefined, ui['events']));
    const events = el('ul', 'ap-events');
    for (const event of place.events) {
      const item = el('li');
      const text = el('span', 'ap-event', event.t);
      item.append(text);
      if (event.trad) {
        const mark = el('span', 'ap-trad', ui['tradition']);
        mark.title = ui['tradNote'] ?? '';
        item.append(mark);
      }
      item.append(...refLinks(event.refs));
      events.append(item);
    }
    body.append(events);

    const more = versesBlock(place.verses, place.count);
    if (more !== undefined) body.append(more);

    const passing = place.journeys.flatMap((id) => {
      const journey = journeyById.get(id);
      return journey === undefined ? [] : [journey];
    });
    if (passing.length > 0) {
      body.append(el('h4', undefined, ui['journeysHere']));
      const chips = el('ul', 'ap-chips');
      for (const journey of passing) {
        const item = el('li');
        const button = el('button', 'ap-chip', `${journey.person}: ${journey.title}`);
        button.type = 'button';
        button.style.setProperty('--c', hsl(journey.hue));
        button.addEventListener('click', () => {
          setTab('journeys');
          selectJourney(journey.id);
        });
        item.append(button);
        chips.append(item);
      }
      body.append(chips);
    }
    if (place.evidence.length > 0) {
      body.append(el('h4', undefined, ui['related']));
      const list = el('ul', 'ap-links');
      for (const entry of place.evidence) {
        const item = el('li');
        const link = el('a', undefined, entry.t);
        link.href = entry.h;
        item.append(link);
        list.append(item);
      }
      body.append(list);
    }
    popup.append(body);
    showPopup(focus);
  }

  function openDotPopup(dot: Dot, focus: boolean): void {
    popupShell(dot.name, hsl(40), types[dot.type] ?? '');
    const body = el('div', 'ap-body');
    if (dot.modern !== '') body.append(el('p', 'ap-modern', `${ui['today']}: ${dot.modern}`));
    const badges = el('div', 'ap-badges');
    const tier = dot.conf >= 800 ? 'secure' : dot.conf >= 400 ? 'probable' : 'tradition';
    const label = el('span', `ap-cert ap-cert-${tier}`, `${ui['confidence']}: ${dot.conf >= 800 ? ui['confHigh'] : dot.conf >= 400 ? ui['confMedium'] : ui['confLow']}`);
    badges.append(label);
    if (dot.alt > 0) badges.append(el('span', 'ap-era', dot.alt === 1 ? (ui['alternativeOne'] ?? '') : fill(ui['alternatives'] ?? '', dot.alt)));
    body.append(badges);
    if (ar) body.append(el('p', 'ap-fine', ui['namesInEnglish']));
    const more = versesBlock(dot.verses, dot.count);
    if (more !== undefined) {
      more.open = true;
      body.append(more);
    }
    popup.append(body);
    showPopup(focus);
  }

  function showPopup(focus: boolean): void {
    popup.hidden = false;
    popup.scrollTop = 0;
    requestAnimationFrame(() => popup.classList.add('is-open'));
    if (focus) popup.focus({ preventScroll: true });
  }

  function closePopup(): void {
    popup.classList.remove('is-open');
    popup.hidden = true;
  }

  // ───────────── The panel ─────────────
  let tabNow: 'journeys' | 'places' = 'journeys';
  const shown = { journeys: 0, places: 0 };
  const showCount = (): void => {
    counts.textContent = fill(ui[tabNow === 'journeys' ? 'journeyCount' : 'placeCount'] ?? '', shown[tabNow]);
  };
  function setTab(tab: 'journeys' | 'places'): void {
    tabNow = tab;
    showCount();
    for (const button of root.querySelectorAll<HTMLElement>('[data-tab]')) {
      const on = button.dataset['tab'] === tab;
      button.setAttribute('aria-selected', String(on));
      button.tabIndex = on ? 0 : -1;
    }
    for (const pane of root.querySelectorAll<HTMLElement>('[data-pane]')) pane.hidden = pane.dataset['pane'] !== tab;
  }
  for (const button of root.querySelectorAll<HTMLElement>('[data-tab]')) {
    button.addEventListener('click', () => setTab(button.dataset['tab'] === 'places' ? 'places' : 'journeys'));
    button.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
        const next = button.dataset['tab'] === 'journeys' ? 'places' : 'journeys';
        setTab(next);
        root.querySelector<HTMLElement>(`[data-tab="${next}"]`)?.focus();
      }
    });
  }

  function renderEras(): void {
    eraBox.replaceChildren();
    const all = el('button', 'chip', ui['allPeriods']);
    all.type = 'button';
    all.setAttribute('aria-pressed', String(activeEras.size === 0));
    all.addEventListener('click', () => {
      activeEras.clear();
      afterFilter();
    });
    eraBox.append(all);
    for (const era of payload.eras) {
      const button = el('button', 'chip');
      button.type = 'button';
      button.style.setProperty('--c', hsl(era.hue));
      button.append(el('span', 'chip-dot'), document.createTextNode(era.name));
      button.title = era.span;
      button.setAttribute('aria-pressed', String(activeEras.has(era.id)));
      button.addEventListener('click', () => {
        if (activeEras.has(era.id)) activeEras.delete(era.id);
        else activeEras.add(era.id);
        afterFilter();
      });
      eraBox.append(button);
    }
  }

  function afterFilter(): void {
    if (selectedJourney !== undefined && !journeyOn(journeyById.get(selectedJourney) as Journey)) selectedJourney = undefined;
    renderEras();
    renderJourneyList();
    renderPlaceList();
    request();
  }

  function renderJourneyList(): void {
    journeyList.replaceChildren();
    const visibleJourneys = journeys.filter(journeyOn);
    shown.journeys = visibleJourneys.length;
    showCount();
    const selected = selectedJourney === undefined ? undefined : journeyById.get(selectedJourney);
    if (selected !== undefined) {
      const back = el('button', 'back', `${ar ? '→' : '←'} ${ui['showAll']}`);
      back.type = 'button';
      back.addEventListener('click', () => selectJourney(undefined));
      journeyList.append(back);
      const card = el('article', 'journey-open');
      card.style.setProperty('--c', hsl(selected.hue));
      card.append(el('p', 'jo-person', selected.person), el('h3', undefined, selected.title), el('p', 'jo-summary', selected.summary));
      const badges = el('div', 'ap-badges');
      badges.append(certBadge(selected.cert));
      const era = eraById.get(selected.era);
      if (era !== undefined) {
        const chip = el('span', 'ap-era', era.name);
        chip.style.setProperty('--c', hsl(era.hue));
        chip.title = era.span;
        badges.append(chip);
      }
      card.append(badges);
      if (selected.note !== '') card.append(el('p', 'ap-note', selected.note));
      const replay = el('button', 'btn', ui['replay']);
      replay.type = 'button';
      replay.addEventListener('click', () => selectJourney(selected.id));
      card.append(replay, el('h4', undefined, ui['stops']));
      const steps = el('ol', 'steps');
      selected.stops.forEach((stop, index) => {
        const place = placeById.get(stop.p);
        const item = el('li');
        if (stop.trad) item.classList.add('is-trad');
        const number = el('span', 'step-n', String(index + 1));
        const text = el('div', 'step-body');
        const name = el('button', 'step-place', place?.name ?? stop.p);
        name.type = 'button';
        name.addEventListener('click', (event) => selectPlace(stop.p, { focus: event.detail === 0 }));
        text.append(name);
        if (stop.text !== '') text.append(el('p', undefined, stop.text));
        const links = el('div', 'step-refs');
        links.append(...refLinks(stop.refs, 'ap-ref'));
        if (stop.trad) {
          const mark = el('span', 'ap-trad', ui['tradition']);
          mark.title = ui['tradNote'] ?? '';
          links.append(mark);
        }
        text.append(links);
        item.append(number, text);
        steps.append(item);
      });
      card.append(steps);
      journeyList.append(card);
      return;
    }
    const byEra = new Map<string, Journey[]>();
    for (const journey of visibleJourneys) byEra.set(journey.era, [...(byEra.get(journey.era) ?? []), journey]);
    for (const era of payload.eras) {
      const group = byEra.get(era.id);
      if (group === undefined) continue;
      const heading = el('h3', 'group');
      heading.style.setProperty('--c', hsl(era.hue));
      heading.append(el('span', 'chip-dot'), document.createTextNode(era.name));
      journeyList.append(heading);
      const list = el('ul', 'items');
      for (const journey of group) {
        const item = el('li');
        const button = el('button', 'item');
        button.type = 'button';
        button.style.setProperty('--c', hsl(journey.hue));
        button.append(el('span', 'item-line'), el('span', 'item-title', journey.title), el('span', 'item-sub', `${journey.person} · ${journey.stops.length}`));
        if (journey.cert === 'tradition') button.append(el('span', 'ap-trad', ui['tradition']));
        button.addEventListener('click', () => selectJourney(journey.id));
        item.append(button);
        list.append(item);
      }
      journeyList.append(list);
    }
  }

  const collator = new Intl.Collator(locale);
  const normal = (value: string): string => value.toLowerCase().normalize('NFKD').replace(/[ً-ٰٟ]/g, '').replace(/[أإآ]/g, 'ا').replace(/ة/g, 'ه').replace(/ى/g, 'ي');
  const curatedSorted = [...places].sort((a, b) => collator.compare(a.name, b.name));

  function renderPlaceList(): void {
    placeList.replaceChildren();
    const query = normal(searchBox.value.trim());
    const matches = curatedSorted.filter((place) => placeOn(place) && (query === '' || normal(`${place.name} ${place.modern}`).includes(query)));
    const list = el('ul', 'items');
    for (const place of matches) {
      const item = el('li');
      const button = el('button', 'item item-place');
      button.type = 'button';
      button.style.setProperty('--c', hsl(eraHue(place.eras[0])));
      button.append(el('span', 'item-dot'), el('span', 'item-title', place.name), el('span', 'item-sub', place.modern));
      if (place.id === selectedPlace) button.setAttribute('aria-current', 'true');
      button.addEventListener('click', (event) => selectPlace(place.id, { focus: event.detail === 0 }));
      item.append(button);
      list.append(item);
    }
    if (matches.length === 0 && query !== '') placeList.append(el('p', 'none', ui['noMatch']));
    placeList.append(list);
    shown.places = matches.length;
    showCount();

    if (query.length >= 2) {
      const others = dots.filter((dot) => normal(`${dot.name} ${dot.modern}`).includes(query)).sort((a, b) => b.count - a.count).slice(0, 40);
      if (others.length > 0) {
        const more = el('ul', 'items');
        for (const dot of others) {
          const item = el('li');
          const button = el('button', 'item item-place item-other');
          button.type = 'button';
          button.append(el('span', 'item-dot'), el('span', 'item-title', dot.name), el('span', 'item-sub', dot.modern !== '' ? dot.modern : (types[dot.type] ?? '')));
          button.addEventListener('click', (event) => selectDot(dot.id, { focus: event.detail === 0 }));
          item.append(button);
          more.append(item);
        }
        placeList.append(el('h3', 'group', ui['layerAll']), more);
      }
    }
  }
  searchBox.addEventListener('input', renderPlaceList);

  // ───────────── Controls ─────────────
  for (const input of root.querySelectorAll<HTMLInputElement>('[data-layer]')) {
    const key = input.dataset['layer'] as keyof typeof layers;
    input.checked = layers[key];
    input.addEventListener('change', () => {
      layers[key] = input.checked;
      request();
    });
  }
  const modeButtons = [...root.querySelectorAll<HTMLElement>('[data-view]')];
  function setMode(next: Mode): void {
    if (next === mode) return;
    views[next].lon = views[mode].lon;
    views[next].lat = views[mode].lat;
    mode = next;
    anim = undefined;
    for (const button of modeButtons) button.setAttribute('aria-pressed', String(button.dataset['view'] === next));
    if (selectedJourney !== undefined) flyToPlaces(journeyById.get(selectedJourney)?.stops.map((stop) => stop.p) ?? []);
    else if (selectedPlace !== undefined) {
      const place = placeById.get(selectedPlace);
      if (place !== undefined) flyTo({ lon: place.lon, lat: place.lat, zoom: next === 'globe' ? 7 : 8 }, 600);
    }
    request();
  }
  for (const button of modeButtons) button.addEventListener('click', () => setMode(button.dataset['view'] === 'map' ? 'map' : 'globe'));
  const rotateButton = must<HTMLElement>(root, '[data-rotate]');
  function setRotate(on: boolean): void {
    autoRotate = on && !reduced;
    rotateButton.setAttribute('aria-pressed', String(autoRotate));
    request();
  }
  rotateButton.addEventListener('click', () => setRotate(!autoRotate));
  if (reduced) rotateButton.hidden = true;
  const zoomBy = (factor: number): void => flyTo({ ...view(), zoom: view().zoom * factor }, 380);
  must<HTMLElement>(root, '[data-zoom="in"]').addEventListener('click', () => zoomBy(1.8));
  must<HTMLElement>(root, '[data-zoom="out"]').addEventListener('click', () => zoomBy(1 / 1.8));
  must<HTMLElement>(root, '[data-zoom="reset"]').addEventListener('click', () => {
    selectedJourney = undefined;
    selectedPlace = undefined;
    selectedDot = undefined;
    closePopup();
    activeEras.clear();
    routeT = 1;
    renderEras();
    renderJourneyList();
    renderPlaceList();
    syncHash();
    flyTo(HOME[mode], 900);
  });

  // ───────────── Drawing ─────────────
  function sizeCanvas(): void {
    const box = stage.getBoundingClientRect();
    dpr = Math.min(window.devicePixelRatio || 1, 2.5);
    width = Math.max(1, Math.round(box.width));
    height = Math.max(1, Math.round(box.height));
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    request();
  }

  function request(): void {
    if (frameHandle === 0 && onScreen) frameHandle = requestAnimationFrame(frame);
  }

  const pathFor = (projection: GeoProjection) => geoPath(projection, ctx);

  function routePoint(route: { coords: LonLat[]; legs: number[]; total: number }, distance: number): LonLat | undefined {
    let left = distance;
    for (let index = 0; index < route.legs.length; index++) {
      const leg = route.legs[index] as number;
      if (left <= leg || index === route.legs.length - 1) return geoInterpolate(route.coords[index] as LonLat, route.coords[index + 1] as LonLat)(leg === 0 ? 0 : clamp(left / leg, 0, 1)) as LonLat;
      left -= leg;
    }
    return route.coords[0];
  }

  /** The legs of a journey up to a distance, each as [from, to, dashed]; the last may stop short. */
  function legsUpTo(journey: Journey, distance: number): { a: LonLat; b: LonLat; trad: boolean }[] {
    const route = routes.get(journey.id);
    if (route === undefined) return [];
    const out: { a: LonLat; b: LonLat; trad: boolean }[] = [];
    let left = distance;
    for (let index = 0; index < route.legs.length; index++) {
      const leg = route.legs[index] as number;
      const a = route.coords[index] as LonLat;
      const b = route.coords[index + 1] as LonLat;
      const trad = journey.stops[index + 1]?.trad ?? false;
      if (left >= leg) out.push({ a, b, trad });
      else {
        if (left > 0) out.push({ a, b: geoInterpolate(a, b)(left / leg) as LonLat, trad });
        break;
      }
      left -= leg;
    }
    return out;
  }

  function frame(now: number): void {
    frameHandle = 0;
    const dt = Math.min(64, now - (lastFrame || now));
    lastFrame = now;
    let busy = false;

    // The camera.
    if (anim !== undefined) {
      const t = clamp((now - anim.start) / anim.ms, 0, 1);
      const e = ease(t);
      const at = views[anim.mode];
      at.lon = anim.from.lon + (anim.to.lon - anim.from.lon) * e;
      at.lat = anim.from.lat + (anim.to.lat - anim.from.lat) * e;
      // Zoom in the logarithm so it feels even.
      at.zoom = Math.exp(Math.log(anim.from.zoom) + (Math.log(anim.to.zoom) - Math.log(anim.from.zoom)) * e);
      if (t >= 1) anim = undefined;
      busy = true;
    } else if (!interacting && (Math.abs(velocity.lon) > 0.002 || Math.abs(velocity.lat) > 0.002)) {
      const at = view();
      at.lon = wrapLon(at.lon + velocity.lon * dt);
      at.lat = clamp(at.lat + velocity.lat * dt, -85, mode === 'map' ? 78 : 85);
      velocity = { lon: velocity.lon * 0.93, lat: velocity.lat * 0.93 };
      busy = true;
    } else if (autoRotate && !interacting && mode === 'globe' && selectedJourney === undefined && selectedPlace === undefined && selectedDot === undefined) {
      view().lon = wrapLon(view().lon + dt * 0.004);
      busy = true;
    }

    // Ease the picture toward its place beside the popup.
    const [goalX, goalY] = targetShift();
    if (Math.abs(goalX - shiftX) > 0.5 || Math.abs(goalY - shiftY) > 0.5) {
      shiftX = reduced ? goalX : shiftX + (goalX - shiftX) * 0.18;
      shiftY = reduced ? goalY : shiftY + (goalY - shiftY) * 0.18;
      busy = true;
    }

    // The route of the chosen journey draws itself.
    const chosen = selectedJourney === undefined ? undefined : journeyById.get(selectedJourney);
    if (chosen !== undefined && routeT < 1) {
      routeT = clamp((now - routeStart) / routeSpan, 0, 1);
      busy = true;
    }
    // A selected place pulses.
    if (!reduced && selectedPlace !== undefined) busy = true;

    draw(now, chosen);
    if (busy && onScreen) request();
  }

  function draw(now: number, chosen: Journey | undefined): void {
    const at = view();
    const projection = projectionFor(mode, at, width, height);
    const path = pathFor(projection);
    const half = Math.min(width, height) / 2;
    const radius = half * 0.9 * at.zoom;
    const cx = width / 2 + shiftX;
    const cy = height / 2 + shiftY;
    const fast = interacting || anim !== undefined || Math.abs(velocity.lon) > 0.01;
    const land = fast && at.zoom < 9 ? landCoarse : landFine;

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, width, height);
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';

    if (mode === 'globe') {
      // The glow of the air, then the sea with the light from the upper left.
      const glow = ctx.createRadialGradient(cx, cy, radius * 0.97, cx, cy, radius * 1.14);
      glow.addColorStop(0, colors.glow);
      glow.addColorStop(1, 'transparent');
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(cx, cy, radius * 1.14, 0, 2 * Math.PI);
      ctx.fill();
      const sea = ctx.createRadialGradient(cx - radius * 0.35, cy - radius * 0.4, radius * 0.1, cx, cy, radius);
      sea.addColorStop(0, colors.ocean1);
      sea.addColorStop(1, colors.ocean2);
      ctx.fillStyle = sea;
      ctx.beginPath();
      path({ type: 'Sphere' });
      ctx.fill();
    } else {
      const sea = ctx.createLinearGradient(0, 0, 0, height);
      sea.addColorStop(0, colors.ocean1);
      sea.addColorStop(1, colors.ocean2);
      ctx.fillStyle = sea;
      ctx.fillRect(0, 0, width, height);
    }

    // Graticule.
    ctx.strokeStyle = colors.grid;
    ctx.lineWidth = 0.6;
    ctx.beginPath();
    path(geoGraticule10());
    ctx.stroke();

    // Land.
    ctx.fillStyle = colors.land;
    ctx.strokeStyle = colors.landLine;
    ctx.lineWidth = 0.8;
    ctx.beginPath();
    path(land);
    ctx.fill();
    ctx.stroke();

    // Lakes and rivers.
    ctx.fillStyle = colors.ocean2;
    ctx.strokeStyle = colors.landLine;
    ctx.lineWidth = 0.6;
    for (const lake of LAKES) {
      ctx.beginPath();
      path({ type: 'Polygon', coordinates: [lake.ring as LonLat[]] });
      ctx.fill();
      ctx.stroke();
    }
    ctx.strokeStyle = colors.water;
    ctx.lineWidth = clamp(0.9 + at.zoom * 0.05, 0.9, 2.2);
    ctx.beginPath();
    for (const river of RIVERS) path({ type: 'LineString', coordinates: river.line as LonLat[] });
    ctx.stroke();

    if (mode === 'globe') {
      // The curve of the earth: the edge falls into shadow.
      const limb = ctx.createRadialGradient(cx - radius * 0.25, cy - radius * 0.3, radius * 0.55, cx, cy, radius);
      limb.addColorStop(0, 'transparent');
      limb.addColorStop(1, dark() ? 'rgba(2, 6, 18, 0.55)' : 'rgba(14, 26, 51, 0.30)');
      ctx.fillStyle = limb;
      ctx.beginPath();
      path({ type: 'Sphere' });
      ctx.fill();
      ctx.strokeStyle = colors.landLine;
      ctx.lineWidth = 1;
      ctx.beginPath();
      path({ type: 'Sphere' });
      ctx.stroke();
    }

    marks = [];
    const project = (lon: number, lat: number): [number, number] | undefined => {
      if (!visible(lon, lat)) return undefined;
      const point = projection([lon, lat]);
      if (point === null) return undefined;
      if (point[0] < -30 || point[0] > width + 30 || point[1] < -30 || point[1] > height + 30) return undefined;
      return point;
    };

    // Journey lines.
    const faded = chosen !== undefined;
    if (layers.journeys || chosen !== undefined) {
      for (const journey of journeys) {
        if (!journeyOn(journey)) continue;
        const isChosen = chosen?.id === journey.id;
        if (!layers.journeys && !isChosen) continue;
        const route = routes.get(journey.id);
        if (route === undefined) continue;
        const total = isChosen ? routeT * route.total : route.total;
        const legs = legsUpTo(journey, total);
        const alpha = isChosen ? 1 : faded ? 0.1 : 0.5;
        const draws = (dashed: boolean): void => {
          ctx.beginPath();
          for (const leg of legs) if (leg.trad === dashed) path({ type: 'LineString', coordinates: [leg.a, leg.b] });
        };
        for (const dashed of [false, true]) {
          if (isChosen) {
            ctx.setLineDash([]);
            ctx.strokeStyle = colors.halo;
            ctx.lineWidth = 6.5;
            draws(dashed);
            ctx.stroke();
          }
          ctx.setLineDash(dashed ? (isChosen ? [9, 7] : [5, 5]) : []);
          ctx.strokeStyle = hsl(journey.hue, alpha);
          ctx.lineWidth = isChosen ? 3.4 : 1.7;
          draws(dashed);
          ctx.stroke();
        }
        ctx.setLineDash([]);
        if (isChosen) {
          // Arrow heads along each finished leg.
          ctx.fillStyle = hsl(journey.hue);
          ctx.strokeStyle = colors.halo;
          ctx.lineWidth = 1.5;
          for (const leg of legs) {
            const mid = geoInterpolate(leg.a, leg.b);
            const head = project(...(mid(0.56) as LonLat));
            const tail = project(...(mid(0.5) as LonLat));
            if (head === undefined || tail === undefined) continue;
            const angle = Math.atan2(head[1] - tail[1], head[0] - tail[0]);
            ctx.save();
            ctx.translate(head[0], head[1]);
            ctx.rotate(angle);
            ctx.beginPath();
            ctx.moveTo(7, 0);
            ctx.lineTo(-5, -5);
            ctx.lineTo(-5, 5);
            ctx.closePath();
            ctx.stroke();
            ctx.fill();
            ctx.restore();
          }
        }
      }
    }

    // Every other place the Bible names.
    if (layers.all) {
      const dim = activeEras.size > 0 ? 0.35 : 1;
      for (const dot of dots) {
        if (!dotOn(dot)) continue;
        const point = project(dot.lon, dot.lat);
        if (point === undefined) continue;
        const strong = dot.conf >= 800 ? 0.78 : dot.conf >= 400 ? 0.55 : 0.32;
        const isSelected = dot.id === selectedDot;
        const r = isSelected ? 5 : clamp(1.7 + Math.log10(dot.count + 1) * 0.9 + at.zoom * 0.04, 1.8, 4);
        ctx.fillStyle = hsl(36, strong * dim);
        ctx.strokeStyle = colors.halo;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(point[0], point[1], r, 0, 2 * Math.PI);
        ctx.fill();
        if (at.zoom > 3 || isSelected) ctx.stroke();
        marks.push({ x: point[0], y: point[1], r: Math.max(r, 6), kind: 'dot', id: dot.id });
      }
    }

    // The places told in full.
    const stopsOf = new Map<string, number[]>();
    if (chosen !== undefined) {
      const route = routes.get(chosen.id);
      let walked = 0;
      chosen.stops.forEach((stop, index) => {
        if (index > 0 && route !== undefined) walked += route.legs[index - 1] as number;
        if (route !== undefined && routeT * route.total + 1e-9 >= walked) stopsOf.set(stop.p, [...(stopsOf.get(stop.p) ?? []), index + 1]);
      });
    }
    const labelQueue: { text: string; x: number; y: number; priority: number; r: number }[] = [];
    const pulse = reduced ? 0 : (now % 1800) / 1800;
    for (const place of places) {
      if (!placeOn(place) && !stopsOf.has(place.id)) continue;
      const point = project(place.lon, place.lat);
      if (point === undefined) continue;
      const hue = eraHue(activeEras.size === 0 ? place.eras[0] : (place.eras.find((era) => activeEras.has(era)) ?? place.eras[0]));
      const isSelected = place.id === selectedPlace;
      const isHover = hover?.kind === 'place' && hover.id === place.id;
      const onRoute = stopsOf.has(place.id);
      const size = 5.4 + (isSelected ? 2 : 0) + (isHover ? 1.5 : 0) + (at.zoom > 6 ? 1 : 0);
      const dimmed = chosen !== undefined && !onRoute;
      ctx.globalAlpha = dimmed ? 0.4 : 1;
      if (isSelected && !reduced) {
        ctx.strokeStyle = hsl(hue, 1 - pulse);
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(point[0], point[1], size + 4 + pulse * 18, 0, 2 * Math.PI);
        ctx.stroke();
      }
      drawMarker(point[0], point[1], size, place, hue);
      ctx.globalAlpha = 1;
      if (onRoute && chosen !== undefined) {
        const label = stopsOf.get(place.id)!.join('·');
        const w = Math.max(18, 9 + label.length * 7);
        const bx = point[0] + size + 3;
        const by = point[1] - size - 12;
        ctx.fillStyle = hsl(chosen.hue);
        ctx.strokeStyle = colors.halo;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.roundRect(bx, by, w, 18, 9);
        ctx.stroke();
        ctx.fill();
        ctx.fillStyle = dark() ? '#0e1a33' : '#ffffff';
        ctx.font = `700 11px ${colors.fontUi}`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(label, bx + w / 2, by + 9.5);
      }
      marks.push({ x: point[0], y: point[1], r: size + 5, kind: 'place', id: place.id });
      const priority = isSelected ? 100 : isHover ? 90 : onRoute ? 80 : 40 + Math.log10(place.events.length + 1) * 10;
      const wanted = isSelected || isHover || onRoute || (layers.labels && at.zoom >= (mode === 'globe' ? 2.4 : 2.6));
      if (wanted) labelQueue.push({ text: place.name, x: point[0], y: point[1], priority, r: size });
    }

    // Names of other places when close in.
    if (layers.all && layers.labels && at.zoom >= (mode === 'globe' ? 9 : 10)) {
      const near = marks
        .filter((mark) => mark.kind === 'dot')
        .map((mark) => ({ mark, dot: dotById.get(mark.id) as Dot }))
        .sort((a, b) => b.dot.count - a.dot.count)
        .slice(0, 36);
      for (const { mark, dot } of near) labelQueue.push({ text: dot.name, x: mark.x, y: mark.y, priority: 10 + Math.log10(dot.count + 1), r: 3 });
    }
    const dotSelected = selectedDot === undefined ? undefined : dotById.get(selectedDot);
    if (dotSelected !== undefined) {
      const mark = marks.find((candidate) => candidate.kind === 'dot' && candidate.id === dotSelected.id);
      if (mark !== undefined) labelQueue.push({ text: dotSelected.name, x: mark.x, y: mark.y, priority: 100, r: 5 });
    }
    if (hover?.kind === 'dot') {
      const hovered = dotById.get(hover.id);
      if (hovered !== undefined) labelQueue.push({ text: hovered.name, x: hover.x, y: hover.y, priority: 95, r: 3 });
    }
    placeLabels(labelQueue);

    // The traveller.
    if (chosen !== undefined && routeT < 1) {
      const route = routes.get(chosen.id);
      const head = route === undefined ? undefined : routePoint(route, routeT * route.total);
      const spot = head === undefined ? undefined : project(head[0], head[1]);
      if (spot !== undefined) {
        const halo = ctx.createRadialGradient(spot[0], spot[1], 0, spot[0], spot[1], 16);
        halo.addColorStop(0, hsl(chosen.hue, 0.85));
        halo.addColorStop(1, 'transparent');
        ctx.fillStyle = halo;
        ctx.beginPath();
        ctx.arc(spot[0], spot[1], 16, 0, 2 * Math.PI);
        ctx.fill();
        ctx.fillStyle = colors.surface;
        ctx.strokeStyle = hsl(chosen.hue);
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.arc(spot[0], spot[1], 5, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
      }
    }
  }

  /** One marker: its shape follows the kind of place, its fill how sure the site is. */
  function drawMarker(x: number, y: number, r: number, place: Place, hue: number): void {
    const colour = hsl(hue);
    ctx.lineWidth = 2;
    ctx.strokeStyle = colors.halo;
    ctx.beginPath();
    if (place.kind === 'mountain') {
      ctx.moveTo(x, y - r * 1.2);
      ctx.lineTo(x + r * 1.15, y + r * 0.85);
      ctx.lineTo(x - r * 1.15, y + r * 0.85);
      ctx.closePath();
    } else if (place.kind === 'water') {
      ctx.moveTo(x, y - r * 1.25);
      ctx.lineTo(x + r * 1.05, y);
      ctx.lineTo(x, y + r * 1.25);
      ctx.lineTo(x - r * 1.05, y);
      ctx.closePath();
    } else if (place.kind === 'region') {
      ctx.roundRect(x - r, y - r, r * 2, r * 2, r * 0.45);
    } else {
      ctx.arc(x, y, r, 0, 2 * Math.PI);
    }
    ctx.stroke();
    if (place.cert === 'tradition') {
      // Hollow: the site is held by tradition or disputed.
      ctx.fillStyle = colors.surface;
      ctx.fill();
      ctx.lineWidth = 2.2;
      ctx.strokeStyle = colour;
      ctx.stroke();
    } else {
      ctx.fillStyle = colour;
      ctx.fill();
      if (place.cert === 'probable') {
        // A pale centre: the usual identification, though scholars differ.
        ctx.fillStyle = colors.surface;
        ctx.beginPath();
        ctx.arc(x, y + (place.kind === 'mountain' ? r * 0.2 : 0), r * 0.36, 0, 2 * Math.PI);
        ctx.fill();
      }
    }
  }

  /** Writes the names that fit, most important first, each with a halo; none over another. */
  function placeLabels(queue: { text: string; x: number; y: number; priority: number; r: number }[]): void {
    queue.sort((a, b) => b.priority - a.priority);
    const taken: { x: number; y: number; w: number; h: number }[] = marks.map((mark) => ({ x: mark.x - 5, y: mark.y - 5, w: 10, h: 10 }));
    ctx.textBaseline = 'middle';
    ctx.lineWidth = 3.4;
    ctx.strokeStyle = colors.halo;
    for (const label of queue) {
      const strong = label.priority >= 80;
      ctx.font = `${strong ? 650 : 500} ${strong ? 13 : 12}px ${ar ? colors.fontUi : colors.fontReading}`;
      const w = ctx.measureText(label.text).width;
      const h = 15;
      const right = label.x + label.r + 5;
      const candidates = [
        { x: right, y: label.y - h / 2, align: 'left' as const },
        { x: label.x - label.r - 5 - w, y: label.y - h / 2, align: 'left' as const },
        { x: label.x - w / 2, y: label.y - label.r - h - 3, align: 'left' as const },
        { x: label.x - w / 2, y: label.y + label.r + 3, align: 'left' as const },
      ];
      const spot = candidates.find((box) => box.x > 4 && box.x + w < width - 4 && box.y > 4 && box.y + h < height - 4 && !taken.some((other) => box.x < other.x + other.w && box.x + w > other.x && box.y < other.y + other.h && box.y + h > other.y));
      if (spot === undefined && !strong) continue;
      const use = spot ?? candidates[0]!;
      taken.push({ x: use.x - 2, y: use.y - 1, w: w + 4, h: h + 2 });
      ctx.textAlign = 'left';
      ctx.strokeText(label.text, use.x, use.y + h / 2);
      ctx.fillStyle = colors.ink;
      ctx.fillText(label.text, use.x, use.y + h / 2);
    }
  }

  // ───────────── Pointer, wheel, keys ─────────────
  const pointers = new Map<number, { x: number; y: number }>();
  let dragged = 0;
  let pinch = 0;
  let last = { x: 0, y: 0, t: 0 };

  const local = (event: PointerEvent | WheelEvent): { x: number; y: number } => {
    const box = canvas.getBoundingClientRect();
    return { x: event.clientX - box.left, y: event.clientY - box.top };
  };

  function pick(x: number, y: number): Mark | undefined {
    let best: Mark | undefined;
    let bestScore = Infinity;
    for (const mark of marks) {
      const d = Math.hypot(mark.x - x, mark.y - y);
      const reach = mark.kind === 'place' ? mark.r + 4 : mark.r + 2;
      if (d > reach) continue;
      const score = d + (mark.kind === 'dot' ? 6 : 0);
      if (score < bestScore) {
        best = mark;
        bestScore = score;
      }
    }
    return best;
  }

  function showTip(mark: Mark | undefined, x: number, y: number): void {
    if (mark === undefined) {
      tip.hidden = true;
      return;
    }
    const place = mark.kind === 'place' ? placeById.get(mark.id) : undefined;
    const dot = mark.kind === 'dot' ? dotById.get(mark.id) : undefined;
    tip.replaceChildren(el('strong', undefined, place?.name ?? dot?.name ?? ''));
    const sub = place === undefined ? (dot === undefined ? '' : (types[dot.type] ?? '')) : place.modern;
    if (sub !== '') tip.append(el('span', undefined, sub));
    tip.hidden = false;
    const box = tip.getBoundingClientRect();
    tip.style.insetInlineStart = `${clamp(x + 14, 4, width - box.width - 4)}px`;
    tip.style.insetBlockStart = `${clamp(y + 16, 4, height - box.height - 4)}px`;
    if (ar) tip.style.insetInlineStart = `${clamp(x - box.width - 14, 4, width - box.width - 4)}px`;
  }

  canvas.addEventListener('pointerdown', (event) => {
    canvas.setPointerCapture(event.pointerId);
    pointers.set(event.pointerId, local(event));
    interacting = true;
    dragged = 0;
    anim = undefined;
    velocity = { lon: 0, lat: 0 };
    last = { ...local(event), t: performance.now() };
    if (pointers.size === 2) {
      const [a, b] = [...pointers.values()] as [{ x: number; y: number }, { x: number; y: number }];
      pinch = Math.hypot(a.x - b.x, a.y - b.y);
    }
    tip.hidden = true;
    request();
  });

  canvas.addEventListener('pointermove', (event) => {
    const point = local(event);
    if (!pointers.has(event.pointerId)) {
      const found = pick(point.x, point.y);
      if (found?.id !== hover?.id || found?.kind !== hover?.kind) {
        hover = found;
        canvas.style.cursor = found === undefined ? 'grab' : 'pointer';
        request();
      }
      if (event.pointerType === 'mouse') showTip(found, point.x, point.y);
      return;
    }
    const before = pointers.get(event.pointerId) as { x: number; y: number };
    pointers.set(event.pointerId, point);
    if (pointers.size === 2) {
      const [a, b] = [...pointers.values()] as [{ x: number; y: number }, { x: number; y: number }];
      const distance = Math.hypot(a.x - b.x, a.y - b.y);
      if (pinch > 0) view().zoom = clamp(view().zoom * (distance / pinch), ZOOM[mode].min, ZOOM[mode].max);
      pinch = distance;
      dragged += 10;
      request();
      return;
    }
    const dx = point.x - before.x;
    const dy = point.y - before.y;
    dragged += Math.abs(dx) + Math.abs(dy);
    if (dragged < 4) return;
    const at = view();
    if (mode === 'globe') {
      const k = Math.min(width, height) / 2 * 0.9 * at.zoom;
      const kx = (dx / k) * DEG / Math.max(0.25, Math.cos(at.lat * RAD));
      const ky = (dy / k) * DEG;
      at.lon = wrapLon(at.lon - kx);
      at.lat = clamp(at.lat + ky, -85, 85);
      const now = performance.now();
      const span = Math.max(8, now - last.t);
      velocity = { lon: (-kx / span) * 0.9, lat: (ky / span) * 0.9 };
      last = { ...point, t: now };
    } else {
      const projection = projectionFor('map', at, width, height);
      const center = projection.invert?.([width / 2 + shiftX - dx, height / 2 + shiftY - dy]);
      if (center !== undefined && center !== null) {
        at.lon = wrapLon(center[0]);
        at.lat = clamp(center[1], -70, 78);
      }
    }
    tip.hidden = true;
    request();
  });

  function release(event: PointerEvent): void {
    const point = local(event);
    const wasTap = dragged < 6 && pointers.size === 1;
    pointers.delete(event.pointerId);
    if (pointers.size < 2) pinch = 0;
    if (pointers.size === 0) {
      interacting = false;
      if (wasTap && event.type === 'pointerup') {
        const found = pick(point.x, point.y);
        if (found === undefined) {
          if (selectedPlace !== undefined || selectedDot !== undefined) clearSelection();
        } else if (found.kind === 'place') {
          selectPlace(found.id, { fly: false });
          setTab('places');
        } else {
          selectDot(found.id, { fly: false });
          setTab('places');
        }
        velocity = { lon: 0, lat: 0 };
      }
      request();
    }
  }
  canvas.addEventListener('pointerup', release);
  canvas.addEventListener('pointercancel', release);
  canvas.addEventListener('pointerleave', () => {
    if (pointers.size === 0 && hover !== undefined) {
      hover = undefined;
      tip.hidden = true;
      request();
    }
  });

  canvas.addEventListener(
    'wheel',
    (event) => {
      event.preventDefault();
      anim = undefined;
      const at = view();
      at.zoom = clamp(at.zoom * Math.exp(-event.deltaY * (event.ctrlKey ? 0.01 : 0.0016)), ZOOM[mode].min, ZOOM[mode].max);
      request();
    },
    { passive: false },
  );

  canvas.addEventListener('keydown', (event) => {
    const at = view();
    const step = mode === 'globe' ? 14 / Math.max(1, at.zoom ** 0.85) : 10 / Math.max(1, at.zoom ** 0.8);
    const moves: Record<string, [number, number]> = { ArrowLeft: [-step, 0], ArrowRight: [step, 0], ArrowUp: [0, step], ArrowDown: [0, -step] };
    const move = moves[event.key];
    if (move !== undefined) {
      event.preventDefault();
      flyTo({ lon: at.lon + move[0], lat: at.lat + move[1], zoom: at.zoom }, 220);
    } else if (event.key === '+' || event.key === '=') {
      event.preventDefault();
      zoomBy(1.6);
    } else if (event.key === '-' || event.key === '_') {
      event.preventDefault();
      zoomBy(1 / 1.6);
    } else if (event.key === 'Escape') {
      clearSelection();
    }
  });
  popup.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      clearSelection();
      canvas.focus({ preventScroll: true });
    }
  });

  // ───────────── Start ─────────────
  new ResizeObserver(sizeCanvas).observe(stage);
  new IntersectionObserver((entries) => {
    onScreen = entries.some((entry) => entry.isIntersecting);
    if (onScreen) request();
  }).observe(stage);
  new MutationObserver(() => {
    colors = readColors();
    renderEras();
    renderJourneyList();
    renderPlaceList();
    request();
  }).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
  window.addEventListener('hashchange', applyHash);

  renderEras();
  renderJourneyList();
  renderPlaceList();
  setTab('journeys');
  closePopup();
  sizeCanvas();
  root.dataset['ready'] = '';
  canvas.style.cursor = 'grab';

  if (location.hash.length > 1) {
    applyHash();
  } else if (!reduced) {
    // An opening turn from the far side of the earth to the lands of the Bible.
    views.globe.lon = HOME.globe.lon - 140;
    views.globe.lat = 18;
    flyTo(HOME.globe, 2600);
  }
  request();
}
