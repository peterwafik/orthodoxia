/**
 * Plays the Holy Mass film by scroll: every clip is a <video> that is never played, only seeked.
 * Clips are fetched whole as blobs (so they are always seekable, even on hosts without byte ranges),
 * the current clip and its neighbours first, and a still of the scene stays underneath until the
 * clip has painted its first frame.
 */
import { clipOrder, filmAt, sceneAt, type ChapterRange } from './film.ts';

export interface FilmOptions {
  readonly container: HTMLElement;
  readonly ranges: readonly ChapterRange[];
  /** Chapters (1-based) that have a link clip to the next one. */
  readonly links: ReadonlySet<number>;
  /** Where the clips and stills live, e.g. /holy-mass-film */
  readonly base: string;
  readonly reducedMotion: () => boolean;
}

interface Clip {
  readonly name: string;
  readonly video: HTMLVideoElement;
  loading: Promise<void> | null;
  ready: boolean;
}

export function createFilm({ container, ranges, links, base, reducedMotion }: FilmOptions) {
  const phone = () => matchMedia('(max-width: 860px), (hover: none) and (pointer: coarse)').matches;
  const order = clipOrder(ranges.length, links);
  const still = document.createElement('img');
  still.className = 'film-still';
  still.alt = '';
  still.decoding = 'async';
  container.append(still);

  const clips = new Map<string, Clip>();
  for (const name of order) {
    const video = document.createElement('video');
    video.className = 'film-clip';
    video.muted = true;
    video.playsInline = true;
    video.preload = 'auto';
    video.setAttribute('aria-hidden', 'true');
    video.tabIndex = -1;
    container.append(video);
    clips.set(name, { name, video, loading: null, ready: false });
  }

  function load(clip: Clip): Promise<void> {
    if (clip.loading !== null) return clip.loading;
    const file = `${base}/${clip.name}${phone() ? '-m' : ''}.mp4`;
    clip.loading = fetch(file)
      .then((response) => {
        if (!response.ok) throw new Error(String(response.status));
        return response.blob();
      })
      .then(
        (blob) =>
          new Promise<void>((resolve) => {
            clip.video.addEventListener(
              'loadeddata',
              () => {
                clip.ready = true;
                resolve();
                draw();
              },
              { once: true },
            );
            clip.video.src = URL.createObjectURL(blob);
          }),
      )
      .catch(() => {
        // Offline or blocked: the still stays and the page keeps working.
        clip.loading = null;
      });
    return clip.loading;
  }

  let scene = -1;
  let wanted = { position: 0 };
  let pending = false;
  const seeking = new Set<string>();

  function seek(clip: Clip, t: number) {
    const { video } = clip;
    if (!clip.ready || !Number.isFinite(video.duration)) return;
    const target = Math.min(video.duration - 0.001, Math.max(0, t * video.duration));
    if (Math.abs(video.currentTime - target) < 0.004) return;
    // Never queue a new seek while the decoder is still busy: a fast flick would freeze the clip.
    if (seeking.has(clip.name)) return;
    seeking.add(clip.name);
    video.addEventListener(
      'seeked',
      () => {
        seeking.delete(clip.name);
        draw();
      },
      { once: true },
    );
    video.currentTime = target;
  }

  function draw() {
    pending = false;
    const { position } = wanted;
    const index = sceneAt(position, ranges);
    if (index !== scene) {
      scene = index;
      still.src = `${base}/scene-${index + 1}.jpg`;
    }
    if (reducedMotion()) {
      for (const clip of clips.values()) clip.video.style.opacity = '0';
      return;
    }
    const frame = filmAt(position, ranges, links);
    const current = clips.get(frame.clip)!;
    const around = order.indexOf(frame.clip);
    for (const near of [around, around + 1, around - 1]) {
      const clip = clips.get(order[near] ?? '');
      if (clip !== undefined) void load(clip);
    }
    if (frame.next !== undefined) void load(clips.get(frame.next.clip)!);
    seek(current, frame.t);
    const next = frame.next === undefined ? undefined : clips.get(frame.next.clip);
    if (next !== undefined && frame.next !== undefined) seek(next, frame.next.t);
    for (const clip of clips.values()) {
      let opacity = 0;
      if (clip === current && clip.ready) opacity = 1;
      if (clip === next && clip.ready) opacity = frame.next!.mix;
      clip.video.style.opacity = String(opacity);
    }
  }

  return {
    /** Show the film at a fractional stop position. */
    show(position: number) {
      wanted = { position };
      if (pending) return;
      pending = true;
      requestAnimationFrame(draw);
    },
    /** Fetch the first clips straight away so the opening is ready. */
    warm() {
      void load(clips.get(order[0]!)!);
      void load(clips.get(order[1]!)!);
    },
  };
}
