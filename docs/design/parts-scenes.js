// ---------------------------------------------------------------- shared set pieces
const swag = (x1, x2, y, n, depth = 12) => {
  let s = '';
  const w = (x2 - x1) / n;
  for (let i = 0; i < n; i++) s += P(`M${f1(x1 + i * w)} ${y} q${f1(w / 2)} ${depth} ${f1(w)} 0`, 1.1) + P(`M${f1(x1 + i * w + w * 0.2)} ${y + 2} q${f1(w * 0.3)} ${depth * 0.55} ${f1(w * 0.6)} 0`, 0.6, 0.6);
  return s + P(`M${x1} ${y} H${x2}`, 1.3);
};
const bricks = (x1, y1, x2, y2, bh, bw, o = 0.35) => {
  let s = '';
  let row = 0;
  for (let y = y1; y < y2; y += bh, row++) {
    s += P(`M${x1} ${y} H${x2}`, 0.6, o);
    for (let x = x1 + (row % 2) * bw / 2; x < x2; x += bw) s += P(`M${f1(x)} ${y} v${Math.min(bh, y2 - y)}`, 0.5, o);
  }
  return s;
};
const throne = (x, y, w, h) =>
  R(x - w / 2, y, w, h, 3, 1.6, 1, true) + R(x - w / 2 + 10, y + 10, w - 20, h * 0.55, 2, 0.8, 0.6) + P(`M${x - w / 2 - 12} ${y + h * 0.6} H${x + w / 2 + 12} M${x - w / 2 - 8} ${y + h * 0.6 + 8} H${x + w / 2 + 8}`, 1.3) + P(`M${x - w / 2 - 6} ${y + h * 0.6 + 8} V${y + h} M${x + w / 2 + 6} ${y + h * 0.6 + 8} V${y + h}`, 1.5) + cross(x, y + 22, 9, 1.1);
const addCrossed = true;

// ---------------------------------------------------------------- scene 1: the sanctuary screen
function scene1() {
  let s = '';
  // the floor of the nave in front of the screen
  s += floorLines(600, 650, 650, 720, 150, 9, [668, 692]);
  // side walls with a window each
  s += R(70, 232, 64, 418, 0, 1.6, 1, true) + R(1066, 232, 64, 418, 0, 1.6, 1, true);
  s += bricks(70, 232, 134, 650, 28, 32) + bricks(1066, 232, 1130, 650, 28, 32);
  s += P(archPath(88, 116, 340, 280), 1.3, 1, BG) + P(archPath(1084, 1112, 340, 280), 1.3, 1, BG) + P('M102 292 V340 M1098 292 V340', 0.6, 0.5);
  // the stepped crown of the screen
  s += P('M150 206 C150 160 200 140 260 140 H380 V206 Z', 1.6, 1, BG) + P('M1050 206 C1050 160 1000 140 940 140 H820 V206 Z', 1.6, 1, BG);
  s += P('M166 206 C166 170 205 156 260 156 H380 M1034 206 C1034 170 995 156 940 156 H820', 0.9, 0.7);
  s += rosette(270, 182, 14) + rosette(930, 182, 14) + rosette(332, 184, 8) + rosette(868, 184, 8) + rosette(206, 190, 7) + rosette(994, 190, 7);
  s += P('M380 206 A220 140 0 0 1 820 206 Z', 2.2, 1, BG) + P('M398 206 A202 124 0 0 1 802 206', 1.2) + P('M414 206 A186 110 0 0 1 786 206', 0.7, 0.6);
  for (let i = 0; i < 17; i++) s += star(430 + i * 21.5, 108 + Math.abs(8 - i) * 2.4, 2.4);
  // posts with capitals, carved rosettes and crosses on top
  [150, 330, 470, 730, 870, 1050].forEach((x) => {
    s += R(x - 17, 206, 34, 394, 2, 1.7, 1, true) + P(`M${x - 9} 238 V592 M${x + 9} 238 V592`, 0.7, 0.5);
    s += R(x - 23, 196, 46, 14, 2, 1.5, 1, true) + R(x - 23, 590, 46, 14, 2, 1.5, 1, true);
    for (let y = 270; y < 580; y += 62) s += rosette(x, y, 6);
    s += cross(x, 170, 18, 1.8);
  });
  s += cross(600, 50, 24, 2) + P('M600 74 V84', 1.5);
  s += P('M134 206 H1066', 1.8) + P('M134 228 H1066', 1.2);
  for (let x = 140; x < 1060; x += 14) s += P(`M${x} 207 v10`, 0.7, 0.55);
  // the Crucifixion: the cross, the Lord, the Virgin and St. John, hills, sun and moon
  s += P('M600 88 V198 M552 122 H648', 3.4) + P('M600 88 V198 M552 122 H648', 1.2, 1, ' stroke="var(--bg)"');
  s += crossHalo(600, 110, 15) + C(600, 110, 7.5, 1.3, 1, true);
  s += P('M584 124 C586 138 586 150 588 164 M616 124 C614 138 614 150 612 164 M584 124 Q600 130 616 124', 1.2) + P('M588 164 H612 L614 190 H586 Z', 1.2, 1, BG) + P('M592 168 v20 M600 168 v22 M608 168 v20', 0.6, 0.6);
  s += P('M554 126 L584 122 M646 126 L616 122', 1.5) + P('M600 196 v6', 0.01, 0);
  s += bust(486, 150, 9, { veil: true, long: true }) + P('M474 168 c-6 6 -6 14 0 18 M498 168 c6 6 6 14 0 18', 0.9);
  s += bust(714, 150, 9, { hair: true, long: true }) + P('M702 168 c-6 6 -6 14 0 18 M726 168 c6 6 6 14 0 18', 0.9);
  s += P('M420 204 C450 188 470 196 500 190 M700 190 C730 196 750 188 780 204', 0.9, 0.7) + P('M424 200 c6 -6 12 -6 18 0 M762 200 c6 -6 12 -6 18 0', 0.7, 0.6);
  s += C(540, 98, 9, 1.1) + P('M540 88 v-4 M549 98 h4 M531 98 h-4 M546 91 l3 -3 M534 91 l-3 -3', 0.8) + C(660, 98, 9, 1.1, 1, false) + P('M655 94 l10 8 M665 94 l-10 8', 0.8);
  // the Last Supper across the top, drawn over the posts
  s += R(196, 232, 808, 62, 2, 1.5, 1, true) + R(202, 238, 796, 50, 1, 0.7, 0.6);
  const xs = Array.from({ length: 13 }, (_, i) => 232 + i * 56);
  xs.forEach((x, i) => {
    if (i === 6) return;
    s += bust(x, 255, 7, { hair: i % 2 === 0, beard: i % 2 === 1 }) + P(`M${x - 14} 288 h28`, 0.001, 0);
    s += P(`M${x + 14} 276 q5 -3 9 1`, 0.8, 0.8);
  });
  s += bust(600, 253, 9.5, { crossHalo: true, beard: true, bless: true });
  s += P('M200 289 H1000', 1.5) + P('M200 293 H1000', 0.7, 0.6);
  for (let i = 0; i < 13; i++) if (i !== 6) s += E(232 + i * 56 + 24, 286, 9, 2.4, 0.9);
  s += P('M586 284 h28 l-4 -10 h-20 z M600 284 v5 M590 289 h20', 1.3) + C(600, 279, 2, 0.7);
  // the bays of the lower tier with arched icon frames and carved panels
  [[166, 314], [346, 454], [746, 854], [886, 1034]].forEach(([a, b]) => {
    s += P(archPath(a + 14, b - 14, 520, 338), 1.8, 1, BG) + P(archPath(a + 22, b - 22, 520, 346), 0.8, 0.6);
    for (let i = 0; i < 9; i++) s += star((a + b) / 2 + (i - 4) * ((b - a - 60) / 8), 360 + Math.abs(i - 4) * 4, 2);
    s += R(a + 14, 524, b - a - 28, 70, 2, 1.4, 1, true) + R(a + 22, 532, b - a - 44, 54, 1, 0.8, 0.6);
  });
  // icons
  s += bust(240, 396, 15, { veil: true, long: true }) + C(266, 452, 7.5, 1.2, 1, true) + crossHalo(266, 452, 12) + P('M254 464 C256 484 276 484 278 464 Z', 1.1, 1, BG) + hands(262, 470, 6) + P('M268 470 l8 -6', 0.8);
  s += bust(400, 398, 14, { hair: true, beard: true, book: true, long: true });
  s += P('M768 504 q10 -6 20 0 t20 0 t20 0 t20 0 t20 0', 1) + P('M770 512 q10 -6 20 0 t20 0 t20 0 t20 0', 0.8, 0.6) + P('M776 496 q10 -6 20 0 t20 0 t20 0', 0.7, 0.5);
  s += bust(792, 396, 11, { hair: true, beard: true, bless: true }) + P('M770 500 l8 -22 M810 500 l-6 -22', 0.7, 0.5);
  s += crossHalo(822, 452, 14) + C(822, 452, 8, 1.2, 1, true) + P('M810 464 C812 482 812 494 814 504 M834 464 C832 482 832 494 830 504', 1) + P('M822 460 v32 M812 470 h20', 0.5, 0.5);
  s += P('M826 384 q-10 -2 -16 4 q6 4 16 -2 z M826 384 l8 -10 M822 388 l-3 -10 M826 388 l2 -10', 0.9) + P('M834 392 L824 436', 0.7, 0.5) + P('M848 484 q8 -12 4 -26 M852 484 q10 -6 12 -18', 0.9, 0.7);
  s += winged(960, 450, 56, 58) + bust(960, 398, 12, { hair: true, long: true }) + P('M996 372 V520', 1.7) + P('M996 372 l-6 14 h12 z', 1.2) + P('M996 440 h-14 v18 h14', 1.1);
  s += P('M934 466 C938 490 940 500 940 516 M986 466 C982 490 980 500 980 516', 0.8, 0.6);
  // carved panels under the icons: a rosette and small arched doors with curtains
  s += rosette(240, 558, 14) + rosette(400, 558, 14) + rosette(800, 558, 14) + rosette(960, 558, 14);
  s += P('M196 592 V562 a14 14 0 0 1 28 0 V592 M256 592 V562 a14 14 0 0 1 28 0 V592', 1.1) + P('M916 592 V562 a14 14 0 0 1 28 0 V592 M976 592 V562 a14 14 0 0 1 28 0 V592', 1.1);
  // the central door
  s += P(archPath(486, 714, 604, 376), 2.4, 1, BG) + P(archPath(500, 700, 604, 390), 1.2) + P(archPath(512, 688, 604, 402), 0.8, 0.6);
  s += P(archPath(524, 676, 604, 416), 1.2, 1, BG);
  for (let i = 0; i < 14; i++) s += P(`M${532 + i * 10.4} 440 V604`, 0.6, 0.5);
  s += P('M534 480 H666 M534 540 H666', 0.5, 0.4) + P('M560 420 q40 -20 80 0', 0.7, 0.5);
  s += lamp(600, 392, 14, 1.0) + cross(600, 374, 9, 1.4);
  s += swag(520, 680, 424, 8, 12);
  s += curtain(504, 424, 56, 180, 'left') + mirror(curtain(504, 424, 56, 180, 'left'), 600);
  s += person(600, 626, 172, 'back', 'none');
  s += R(468, 604, 264, 14, 1, 1.5, 1, true) + R(448, 618, 304, 14, 1, 1.5, 1, true) + R(428, 632, 344, 16, 1, 1.5, 1, true);
  s += P('M134 604 H468 M732 604 H1066 M134 612 H448 M752 612 H1066', 1.3, 0.9);
  s += bricks(134, 604, 468, 650, 14, 40, 0.3) + bricks(732, 604, 1066, 650, 14, 40, 0.3);
  // deacons with their candelabra; sandals at the step
  s += person(290, 704, 235, 'deacon') + person(910, 704, 235, 'deacon');
  s += candelabra(420, 696, 200, 3) + candelabra(780, 696, 200, 3);
  s += P('M556 704 q-4 -12 4 -16 q16 -2 18 14 q-10 6 -22 2 z M584 708 q-4 -12 4 -16 q16 -2 18 14 q-10 6 -22 2 z', 1.2, 1, BG) + P('M560 696 l14 4 M588 700 l14 4 M574 690 v6 M602 694 v6', 0.7);
  return s;
}

// ---------------------------------------------------------------- scene 2: the choir and the Word
function scene2() {
  let s = '';
  s += floorLines(600, 560, 600, 720, 140, 9, [622, 648, 684]);
  // the beamed ceiling
  s += R(60, 14, 1080, 38, 0, 1.4) + P('M60 33 H1140', 0.7, 0.5);
  for (let x = 90; x < 1140; x += 60) s += P(`M${x} 14 V52`, 0.7, 0.5) + cross(x + 30, 33, 6, 0.8);
  // the arcade of the back wall with paintings
  const arches = [[130, 410], [460, 740], [790, 1070]];
  arches.forEach(([a, b], i) => {
    s += P(archPath(a, b, 410, 90), 2.2, 1, BG) + P(archPath(a + 14, b - 14, 410, 104), 1.1) + P(archPath(a + 26, b - 26, 410, 116), 0.7, 0.55);
    for (let k = 0; k < 11; k++) s += star(a + 34 + k * ((b - a - 68) / 10), 132 + Math.abs(k - 5) * 2.5, 3);
    s += lamp((a + b) / 2, 90, 28 + (i === 1 ? 18 : 0), 1.15);
  });
  [110, 435, 765, 1090].forEach((x) => {
    s += R(x - 18, 80, 36, 340, 2, 1.8, 1, true) + R(x - 25, 72, 50, 14, 2, 1.5, 1, true) + R(x - 25, 410, 50, 14, 2, 1.5, 1, true) + P(`M${x - 8} 100 V402 M${x + 8} 100 V402`, 0.7, 0.45);
    for (let y = 130; y < 400; y += 70) s += rosette(x, y, 6);
    s += cross(x, 52, 14, 1.6);
  });
  s += bust(270, 240, 22, { veil: true, long: true }) + C(300, 336, 11, 1.3, 1, true) + crossHalo(300, 336, 17) + P('M287 348 C289 370 311 370 313 348 Z', 1, 1, BG);
  s += bust(600, 230, 22, { beard: true, hair: true, crossHalo: true, book: true, long: true, bless: true });
  s += winged(930, 300, 84, 80) + bust(930, 240, 20, { hair: true, long: true }) + P('M980 214 V392', 1.6) + P('M980 214 l-6 12 h12 z', 1.1);
  // the raised platform
  s += R(90, 468, 1020, 14, 1, 1.6, 1, true) + P('M90 482 H1110', 1.2);
  // the people of the choir
  s += person(310, 560, 240, 'deacon', 'cymbals') + person(400, 560, 240, 'deacon', 'cymbals') + person(790, 560, 240, 'deacon', 'triangle') + person(880, 560, 240, 'deacon', 'cymbals') + person(490, 560, 225, 'deacon', 'censer') + person(700, 560, 225, 'deacon', 'candle');
  s += person(600, 566, 245, 'priest');
  // the lectern in front of the reader: a tall stand with an open Gospel
  s += P('M588 566 L584 430 H616 L612 566 Z', 1.6, 1, BG) + P('M560 566 H640 M570 558 H630', 1.5) + P('M562 430 H638 L650 400 H550 Z', 1.5, 1, BG);
  s += P('M600 400 V430', 0.8) + P('M558 408 C578 402 592 404 600 408 C608 404 622 402 642 408', 0.8) + P('M562 414 H594 M606 414 H638 M566 420 H594 M606 420 H634', 0.6, 0.6);
  s += cross(600, 490, 12, 1.3) + P('M592 466 h16 M592 520 h16', 0.8);
  s += candelabra(180, 560, 300, 7) + candelabra(1020, 560, 300, 7);
  // the lattice fence in front, with the three steps in the gap
  const fence = (x1, x2) => {
    let f = R(x1, 500, x2 - x1, 62, 1, 1.6, 1, true) + P(`M${x1} 512 H${x2} M${x1} 550 H${x2}`, 1.2);
    for (let x = x1 - 40; x < x2 + 40; x += 22) {
      const c = (v) => Math.max(x1, Math.min(x2, v));
      f += P(`M${c(x)} 512 L${c(x + 38)} 550`, 0.7, 0.7) + P(`M${c(x + 38)} 512 L${c(x)} 550`, 0.7, 0.7);
    }
    return f;
  };
  s += fence(90, 520) + fence(680, 1110);
  [90, 520, 680, 1110].forEach((x) => (s += R(x - 7, 488, 14, 82, 1, 1.5, 1, true) + C(x, 484, 6, 1.2) + cross(x, 474, 6, 1)));
  s += R(520, 570, 160, 12, 1, 1.5, 1, true) + R(500, 582, 200, 14, 1, 1.5, 1, true) + R(480, 596, 240, 16, 1, 1.5, 1, true);
  s += P('M90 570 H480 M720 570 H1110', 1.4) + bricks(90, 570, 480, 612, 14, 44, 0.3) + bricks(720, 570, 1110, 612, 14, 44, 0.3);
  // the benches with the faithful seen from behind: men on the left, women (veiled) on the right
  const bench = (x1, x2, y, women, n) => {
    let b = '';
    for (let i = 0; i < n; i++) {
      const x = x1 + (i + 0.5) * ((x2 - x1) / n);
      b += women
        ? P(`M${x - 24} ${y + 36} C${x - 26} ${y - 2} ${x - 12} ${y - 22} ${x} ${y - 22} C${x + 12} ${y - 22} ${x + 26} ${y - 2} ${x + 24} ${y + 36}`, 1.3, 1, BG) + C(x, y - 8, 9, 1.1, 1, true) + P(`M${x - 12} ${y - 6} C${x - 14} ${y - 26} ${x + 14} ${y - 26} ${x + 12} ${y - 6}`, 1.1, 1, BG) + P(`M${x} ${y - 4} V${y + 32}`, 0.7, 0.6) + P(`M${x - 14} ${y + 8} q6 6 14 4 M${x + 14} ${y + 8} q-6 6 -14 4`, 0.6, 0.6)
        : P(`M${x - 26} ${y + 36} C${x - 28} ${y + 4} ${x - 12} ${y - 6} ${x} ${y - 6} C${x + 12} ${y - 6} ${x + 28} ${y + 4} ${x + 26} ${y + 36}`, 1.3, 1, BG) + C(x, y - 20, 11, 1.3, 1, true) + P(`M${x - 11} ${y - 18} C${x - 12} ${y - 36} ${x + 12} ${y - 36} ${x + 11} ${y - 18}`, 1.1, 1, BG) + P(`M${x} ${y - 4} V${y + 32}`, 0.7, 0.6) + P(`M${x - 8} ${y - 4} l8 8 l8 -8`, 0.7, 0.6);
    }
    b += R(x1 - 6, y + 30, x2 - x1 + 12, 12, 2, 1.5, 1, true) + P(`M${x1 - 6} ${y + 54} H${x2 + 6}`, 1.2);
    return b;
  };
  s += bench(60, 500, 632, false, 6) + bench(700, 1140, 632, true, 6) + bench(80, 480, 696, false, 6) + bench(720, 1120, 696, true, 6);
  return s;
}

// ---------------------------------------------------------------- scene 3: the nave at the kiss of peace
function scene3() {
  let s = '';
  const vx = 600, vy = 330;
  const px = (k, off) => vx + off * k;
  const floorY = (k) => vy + 390 * k;
  const ceilY = (k) => vy - 330 * k;
  const wallX = (k, side) => vx + side * 600 * k;
  // floor tiles and the aisle carpet
  for (let i = -10; i <= 10; i++) s += P(`M${vx + i * 50} ${vy + 156} L${vx + i * 190} 720`, 0.7, 0.4);
  [0.4, 0.46, 0.54, 0.64, 0.76, 0.9, 1.0].forEach((k) => (s += P(`M0 ${floorY(k)} H1200`, 0.7, 0.4)));
  s += P(`M${vx - 44} ${vy + 156} L${vx - 190} 720 M${vx + 44} ${vy + 156} L${vx + 190} 720`, 1.3) + P(`M${vx - 36} ${vy + 156} L${vx - 160} 720 M${vx + 36} ${vy + 156} L${vx + 160} 720`, 0.7, 0.6);
  // ceiling beams
  [0.4, 0.5, 0.64, 0.8, 1.0].forEach((k) => (s += P(`M${vx - 600 * k} ${ceilY(k)} H${vx + 600 * k}`, 1.1, 0.8) + P(`M${vx - 600 * k} ${ceilY(k) + 14 * k} H${vx + 600 * k}`, 0.6, 0.5)));
  s += P(`M0 0 L${vx - 240} ${ceilY(0.4)} M1200 0 L${vx + 240} ${ceilY(0.4)} M0 40 L${vx - 240} ${ceilY(0.4) + 24} M1200 40 L${vx + 240} ${ceilY(0.4) + 24}`, 1.1, 0.8);
  // the end wall: the screen with a central door, side doors and icons above
  const kw = 0.4;
  const wy = floorY(kw), wt = ceilY(kw);
  s += R(vx - 600 * kw, wt, 1200 * kw, wy - wt, 0, 1.8, 1, true);
  s += bricks(vx - 240, wt, vx + 240, wy, 16, 30, 0.25);
  s += R(vx - 232, wt + 8, 464, 36, 1, 1.2, 1, true);
  for (let i = 0; i < 13; i++) s += C(vx - 216 + i * 36, wt + 26, 5, 0.9) + P(`M${vx - 222 + i * 36} ${wt + 38} q6 -8 12 0`, 0.6, 0.6);
  s += P(archPath(560, 640, wy, 322), 1.9, 1, BG) + P(archPath(568, 632, wy, 330), 0.8, 0.6);
  s += swag(568, 632, 344, 4, 7) + curtain(562, 350, 26, wy - 350, 'left') + mirror(curtain(562, 350, 26, wy - 350, 'left'), 600);
  for (const [a, b] of [[388, 436], [764, 812]]) s += P(archPath(a, b, wy - 20, 330), 1.3, 1, BG) + bust((a + b) / 2, 360, 6.5, { veil: a < 500, hair: a > 500, long: true });
  for (const [a, b] of [[446, 500], [700, 754]]) s += P(archPath(a, b, wy - 20, 360), 1.1, 1, BG) + cross((a + b) / 2, 392, 8, 1);
  s += lamp(600, 288, 20, 0.85) + cross(600, 268, 8, 1.3);
  s += R(vx - 250, wy - 8, 500, 8, 1, 1.4, 1, true);
  s += person(600, wy - 4, 136, 'priest', 'cross');
  s += person(534, wy + 4, 126, 'deacon', 'censer') + mirror(person(534, wy + 4, 126, 'deacon', 'censer'), 600);
  // icons on the side walls, between the columns
  const ks = [1.0, 0.8, 0.62, 0.48];
  for (const d of [-1, 1]) for (let i = 0; i < ks.length - 1; i++) {
    const k1 = ks[i] * 0.9 + ks[i + 1] * 0.1, k2 = ks[i + 1] * 0.9 + ks[i] * 0.1;
    const ya = (k) => vy - 170 * k, yb = (k) => vy + 10 * k;
    s += P(`M${wallX(k1, d)} ${ya(k1)} L${wallX(k2, d)} ${ya(k2)} L${wallX(k2, d)} ${yb(k2)} L${wallX(k1, d)} ${yb(k1)} Z`, 1.2, 1, BG);
    s += P(`M${wallX(k1 * 0.92 + k2 * 0.08, d)} ${ya(k1) + 12 * k1} L${wallX(k2 * 0.92 + k1 * 0.08, d)} ${ya(k2) + 12 * k2} L${wallX(k2 * 0.92 + k1 * 0.08, d)} ${yb(k2) - 12 * k2} L${wallX(k1 * 0.92 + k2 * 0.08, d)} ${yb(k1) - 12 * k1} Z`, 0.7, 0.6);
    const km = (k1 + k2) / 2;
    s += cross(wallX(km, d), vy - 80 * km, 16 * km, 1.1);
  }
  // columns and arches of the two colonnades; lamps down the aisle and along the sides
  ks.forEach((k, i) => {
    for (const d of [-1, 1]) {
      const x = px(k, d * 430);
      const w = 40 * k, top = ceilY(k) + 40 * k, bot = floorY(k);
      s += R(x - w / 2, top, w, bot - top, 1, 1.5 + k * 0.3, 1, true);
      s += R(x - w * 0.78, top - 12 * k, w * 1.56, 12 * k, 1, 1.4, 1, true) + R(x - w * 0.78, bot - 10 * k, w * 1.56, 10 * k, 1, 1.4, 1, true);
      s += P(`M${x - w * 0.22} ${top + 6} V${bot - 14}`, 0.7, 0.5) + P(`M${x + w * 0.22} ${top + 6} V${bot - 14}`, 0.7, 0.5);
      for (let y = 0.2; y < 0.9; y += 0.22) if (k > 0.55) s += rosette(x, top + (bot - top) * y, 6 * k + 2);
      if (k > 0.55) s += cross(x, top - 28 * k, 12 * k, 1.4);
      if (i < ks.length - 1) {
        const k2 = ks[i + 1], x2 = px(k2, d * 430), t2 = ceilY(k2) + 40 * k2 - 12 * k2, t1 = top - 12 * k;
        s += P(`M${x} ${t1} Q${(x + x2) / 2} ${(t1 + t2) / 2 + 56 * k} ${x2} ${t2}`, 1.2);
        s += P(`M${x} ${t1 + 10 * k} Q${(x + x2) / 2} ${(t1 + t2) / 2 + 56 * k + 10 * k} ${x2} ${t2 + 8 * k2}`, 0.7, 0.6);
        s += lamp((x + x2) / 2 + d * 8 * k, t1 + 28 * k, 20 * k, 1.1 * k);
      }
    }
    s += lamp(vx, ceilY(k), 30 * k + 4, 1.4 * k);
  });
  // the faithful greeting each other with clasped hands (men left, women right), in pairs at three depths
  const pair = (cx, base, h, women) => {
    const gap = h * 0.17, kind = women ? 'woman' : 'lay';
    let p = person(cx - gap, base, h, kind, 'none') + person(cx + gap, base, h * 0.97, kind, 'none');
    p += P(`M${cx - gap + h * 0.1} ${base - h * 0.64} C${cx - 4} ${base - h * 0.61} ${cx + 4} ${base - h * 0.61} ${cx + gap - h * 0.1} ${base - h * 0.64}`, 1.5) + hands(cx, base - h * 0.62, h * 0.045);
    return p;
  };
  s += pair(470, 484, 150, false) + pair(730, 484, 150, true);
  s += pair(380, 570, 215, false) + pair(820, 570, 215, true);
  s += pair(270, 710, 300, false) + pair(930, 710, 300, true);
  // deacons with the censer and the cross walking down the aisle
  s += person(540, 640, 240, 'deacon', 'censer') + person(670, 600, 205, 'deacon', 'cross');
  return s;
}

// ---------------------------------------------------------------- scene 4: the haikal and the altar
function scene4() {
  let s = '';
  s += floorLines(600, 600, 620, 720, 140, 9, [640, 668, 700]);
  // the apse: a half-dome decorated with stars and a band of crosses
  s += P('M170 346 V262 A430 250 0 0 1 1030 262 V346 Z', 2.4, 1, BG) + P('M190 346 V264 A410 232 0 0 1 1010 264 V346', 1.2) + P('M210 346 V266 A390 214 0 0 1 990 266 V346', 0.7, 0.55);
  for (let i = 0; i < 30; i++) {
    const a = Math.PI * (0.05 + (i / 29) * 0.9);
    s += cross(600 - 420 * Math.cos(a), 270 - 242 * Math.sin(a), 4.2, 0.7) + star(600 - 380 * Math.cos(a), 270 - 214 * Math.sin(a) + 6, 2.6);
  }
  // Christ enthroned in a mandorla, with rays
  for (let a = 0; a < 28; a++) {
    const t = (a / 28) * Math.PI * 2;
    s += P(`M${f1(600 + 124 * Math.cos(t))} ${f1(190 + 148 * Math.sin(t))} L${f1(600 + 140 * Math.cos(t))} ${f1(190 + 166 * Math.sin(t))}`, 0.7, 0.5);
  }
  s += E(600, 190, 118, 142, 1.7, 1) + E(600, 190, 108, 132, 0.8, 0.6);
  s += throne(600, 170, 150, 160);
  s += P('M556 296 C556 280 560 270 570 262 L600 250 L630 262 C640 270 644 280 644 296 Z', 1.4, 1, BG) + P('M572 276 C580 290 586 296 590 304 M628 276 C620 290 614 296 610 304', 0.8, 0.7);
  s += bust(600, 116, 20, { crossHalo: true, hair: true, beard: true, bless: true, book: true, long: true });
  s += P('M572 296 C572 308 574 316 580 320 H592 V296 M608 296 V320 H620 C626 316 628 308 628 296', 1.2);
  // Alpha and Omega
  s += P('M478 226 L494 178 L510 226 M484 210 H504', 2) + P('M704 226 H716 C702 214 700 192 716 184 C732 178 746 194 738 212 C735 218 730 222 726 226 H738', 2);
  // the four living creatures in medallions
  const medal = (x, y) => C(x, y, 48, 1.8, 1, true) + C(x, y, 42, 0.8, 0.6) + C(x, y, 38, 0.5, 0.5);
  s += medal(372, 118) + winged(372, 142, 38, 32) + bust(372, 112, 11, { hair: true, long: false }) + P('M356 144 C360 128 384 128 388 144', 1);
  s += medal(828, 118);
  for (let a = 0; a < 20; a++) { const t = (a / 20) * 6.283; s += P(`M${f1(828 + 14 * Math.cos(t))} ${f1(118 + 14 * Math.sin(t))} l${f1(10 * Math.cos(t))} ${f1(10 * Math.sin(t))}`, 0.9); }
  s += C(828, 118, 13, 1.3, 1, true) + P('M818 110 q-5 -9 -11 -5 M838 110 q5 -9 11 -5 M822 128 q6 8 12 0 M822 118 h-4 M834 118 h4', 1.1) + halo(828, 118, 36, 0.9);
  s += medal(350, 282) + C(350, 286, 15, 1.3, 1, true) + P('M334 276 C320 270 318 258 328 250 M366 276 C380 270 382 258 372 250', 1.6) + P('M342 298 C346 306 354 306 358 298 M344 288 h2 M354 288 h2', 1.1) + halo(350, 286, 30, 0.9) + P('M326 296 q-10 6 -8 16 M374 296 q10 6 8 16', 0.8);
  s += medal(850, 282) + P('M850 262 C842 264 840 274 846 281 C838 291 840 301 850 305 C860 301 862 291 854 281 C860 274 858 264 850 262 Z', 1.4, 1, BG) + winged(850, 288, 36, 28) + P('M846 270 l-6 4 l6 2', 1.1) + halo(850, 276, 28, 0.9);
  for (let i = 0; i < 3; i++) s += P(`M${230 + i * 30} 352 A${370 - i * 30} ${30 - i * 4} 0 0 1 ${970 - i * 30} 352`, 1.2 - i * 0.2, 0.9);
  s += P('M170 346 H1030', 1.8) + P('M170 352 H1030', 0.8, 0.6);
  // the ciborium: a dome on four columns, a cross on top, Christ painted inside the dome
  s += P('M434 456 A166 112 0 0 1 766 456 Z', 2, 1, BG) + P('M444 456 A156 104 0 0 1 756 456', 0.9, 0.7);
  for (let i = 1; i < 7; i++) s += P(`M${600 + (i - 3.5) * 40} 456 Q${600 + (i - 3.5) * 22} 350 600 344`, 0.7, 0.45);
  s += bust(600, 398, 12, { crossHalo: true, beard: true, hair: true, bless: true }) + winged(600, 428, 52, 24);
  for (const [x, y] of [[480, 404], [520, 378], [680, 378], [720, 404], [490, 440], [710, 440], [556, 366], [644, 366]]) s += star(x, y, 3.2);
  s += R(430, 456, 340, 16, 1, 1.7, 1, true) + R(440, 472, 320, 8, 1, 1, 1, true);
  for (let i = 0; i < 17; i++) s += cross(444 + i * 20, 464, 3.6, 0.6);
  s += P('M600 324 V344', 1.8) + C(600, 330, 6, 1.5, 1, true) + cross(600, 298, 24, 2.2);
  [[454, 604], [548, 594], [652, 594], [746, 604]].forEach(([x, b], i) => {
    const front = i === 0 || i === 3;
    const w = front ? 13 : 10;
    s += R(x - w, 480, w * 2, b - 480, 1, front ? 1.8 : 1.2, 1, true) + R(x - w * 1.45, 480, w * 2.9, 10, 1, 1.3, 1, true) + R(x - w * 1.45, b - 10, w * 2.9, 10, 1, 1.3, 1, true);
    if (front) s += C(x, 524, 9, 1.1, 1, true) + bust(x, 524, 4.6, { hair: true }) + P(`M${x - 6} 560 h12 M${x} 552 v16 M${x - 6} 556 h12`, 0.6);
  });
  // the altar: embroidered cloth, candles, Gospel, veiled chalice
  s += R(518, 520, 164, 76, 1, 1.7, 1, true) + R(512, 514, 176, 10, 1, 1.5, 1, true) + P('M518 536 H682', 0.9);
  for (let i = 0; i < 4; i++) s += cross(544 + i * 38, 562, 9, 1.1);
  for (let i = 0; i < 12; i++) s += P(`M${524 + i * 13} 588 l6 8 l6 -8`, 0.8);
  s += P('M586 514 C586 498 592 492 600 490 C608 492 614 498 614 514 Z', 1.3, 1, BG) + cross(600, 504, 6, 1) + R(626, 500, 30, 14, 1, 1.2, 1, true) + cross(641, 507, 4, 0.8);
  [540, 660].forEach((x) => (s += P(`M${x} 514 v-28`, 2) + P(`M${x} 486 q4 -6 0 -12 q-4 6 0 12`, 0.9) + P(`M${x - 8} 514 h16`, 1.4)));
  // the processional cross on its stand and a candelabrum
  s += P('M850 650 V384 M836 650 H864 M826 660 H874', 2) + cross(850, 358, 26, 2) + C(850, 440, 5, 1.2, 1, true) + C(850, 480, 4, 1.1, 1, true);
  s += candelabra(330, 650, 200, 3);
  // the priest at the altar with raised hands, a deacon with the censer, another with a candle
  s += person(600, 672, 178, 'back', 'raised');
  s += person(452, 704, 235, 'deacon', 'censer') + person(752, 704, 225, 'deacon', 'candle');
  // the screens of the sanctuary in the foreground, with icons and tied curtains
  const screen = (x, icon) => {
    let c = R(x, 300, 30, 400, 2, 1.8, 1, true) + R(x + 150, 300, 30, 400, 2, 1.8, 1, true) + R(x - 5, 292, 40, 12, 1, 1.4, 1, true) + R(x + 145, 292, 40, 12, 1, 1.4, 1, true);
    c += cross(x + 15, 272, 17, 1.8) + cross(x + 165, 272, 17, 1.8) + R(x + 30, 330, 120, 340, 0, 0.001, 0, true);
    c += P(archPath(x + 38, x + 142, 560, 396), 1.7, 1, BG) + P(archPath(x + 46, x + 134, 560, 404), 0.8, 0.6) + P(`M${x + 30} 316 h120`, 1.3);
    for (let i = 0; i < 7; i++) c += star(x + 46 + i * 14, 408 + Math.abs(i - 3) * 3, 2);
    c += R(x + 30, 570, 120, 80, 2, 1.4, 1, true) + rosette(x + 90, 610, 20) + R(x + 30, 650, 120, 20, 1, 1.3, 1, true);
    c += icon;
    return c;
  };
  s += screen(60, bust(150, 462, 15, { veil: true, long: true }) + C(172, 520, 7, 1.2, 1, true) + crossHalo(172, 520, 11));
  s += screen(960, bust(1050, 462, 15, { hair: true, beard: true, crossHalo: true, book: true, bless: true, long: true }));
  s += curtain(200, 332, 38, 330, 'left') + mirror(curtain(200, 332, 38, 330, 'left'), 600);
  // the rug
  s += P('M410 654 H790 L840 720 H360 Z', 1.4) + P('M424 662 H776 L820 712 H380 Z', 0.8, 0.6);
  for (let i = 0; i < 7; i++) s += rosette(442 + i * 53, 690, 8);
  return s;
}

// ---------------------------------------------------------------- scene 5: communion and heaven
function scene5() {
  let s = '';
  // heaven opening above the church: a ring of clouds, rays, the throne
  s += P('M30 412 C30 160 280 20 600 20 C920 20 1170 160 1170 412', 1.8) + P('M60 412 C60 180 300 50 600 50 C900 50 1140 180 1140 412', 0.9, 0.6);
  for (let i = 0; i < 34; i++) {
    const a = Math.PI + (i / 33) * Math.PI;
    s += P(`M${f1(600 + 570 * Math.cos(a) - 18)} ${f1(412 + 392 * Math.sin(a) + 6)} a18 15 0 0 1 36 0`, 1.2, 0.9);
  }
  for (let i = 0; i < 40; i++) {
    const a = Math.PI + 0.2 + (i / 39) * (Math.PI - 0.4);
    s += P(`M${f1(600 + 130 * Math.cos(a))} ${f1(200 + 110 * Math.sin(a))} L${f1(600 + 340 * Math.cos(a))} ${f1(200 + 240 * Math.sin(a))}`, 0.7, 0.4);
  }
  // Christ enthroned in the mandorla; the Virgin on His right and St. John the Baptist on His left, praying
  s += E(600, 170, 104, 132, 1.8, 1) + E(600, 170, 94, 122, 0.8, 0.6);
  s += throne(600, 150, 140, 150);
  s += P('M552 290 C552 272 558 262 570 254 L600 244 L630 254 C642 262 648 272 648 290 Z', 1.4, 1, BG);
  s += bust(600, 100, 19, { crossHalo: true, hair: true, beard: true, bless: true, book: true, long: true });
  s += P('M572 290 C572 302 574 310 580 314 H592 V290 M608 290 V314 H620 C626 310 628 302 628 290', 1.2);
  s += bust(468, 192, 16, { veil: true, long: true }) + P('M448 230 C442 246 444 262 450 280 M488 230 C494 246 492 262 486 280', 0.9, 0.7) + hands(452, 236, 7) + hands(484, 236, 7) + P('M446 234 C440 222 446 210 456 210', 1);
  s += bust(732, 192, 16, { hair: true, beard: true, long: true }) + P('M712 230 C706 246 708 262 714 280 M752 230 C758 246 756 262 750 280', 0.9, 0.7) + hands(716, 236, 7) + hands(748, 236, 7);
  // the four living creatures with wings and eyes
  const creature = (x, y, kind) => {
    let c = winged(x, y, 54, 40);
    for (const [ex, ey] of [[-36, -10], [-22, -20], [36, -10], [22, -20], [-32, 8], [32, 8], [-16, 12], [16, 12]]) c += C(x + ex, y + ey, 2.2, 0.8);
    c += C(x, y - 4, 14, 1.4, 1, true) + halo(x, y - 4, 23, 1);
    if (kind === 'lion') c += P(`M${x - 8} ${y - 12} l-4 -8 M${x + 8} ${y - 12} l4 -8 M${x - 7} ${y + 2} q7 6 14 0`, 1.1) + P(`M${x - 18} ${y - 4} q-6 8 0 16 M${x + 18} ${y - 4} q6 8 0 16`, 0.9);
    if (kind === 'ox') c += P(`M${x - 12} ${y - 12} q-8 -6 -6 -14 M${x + 12} ${y - 12} q8 -6 6 -14 M${x - 6} ${y + 2} h12`, 1.3);
    if (kind === 'eagle') c += P(`M${x - 3} ${y - 8} q6 4 4 14 q-6 -2 -4 -14`, 1.2);
    if (kind === 'man') c += P(`M${x - 8} ${y - 8} q8 -8 16 0`, 1);
    return c;
  };
  s += creature(366, 92, 'lion') + creature(834, 92, 'ox') + creature(300, 226, 'man') + creature(900, 226, 'eagle');
  // six-winged seraphim
  const seraph = (x, y) => {
    let c = '';
    for (const d of [-1, 1]) for (let i = 0; i < 3; i++) c += P(`M${x + d * 10} ${y + (i - 1) * 6} C${x + d * 30} ${y + (i - 1) * 16 - 14} ${x + d * 44} ${y + (i - 1) * 16 - 6} ${x + d * 54} ${y + (i - 1) * 14 + 4} C${x + d * 42} ${y + (i - 1) * 14 + 8} ${x + d * 24} ${y + (i - 1) * 12 + 6} ${x + d * 10} ${y + (i - 1) * 6 + 4}`, 1);
    return c + C(x, y, 11, 1.3, 1, true) + halo(x, y, 18, 0.9);
  };
  s += seraph(160, 196) + seraph(1040, 196) + seraph(210, 90) + seraph(990, 90);
  // angels with censers, in flight
  const angel = (x, y, d) => {
    let c = winged(x, y, 36, 32);
    c += P(`M${x - 15} ${y + 40} C${x - 13} ${y + 4} ${x - 6} ${y - 2} ${x} ${y - 2} C${x + 6} ${y - 2} ${x + 13} ${y + 4} ${x + 15} ${y + 40} Z`, 1.3, 1, BG) + P(`M${x - 6} ${y + 6} L${x + 6} ${y + 26} M${x + 6} ${y + 6} L${x - 6} ${y + 26}`, 0.7, 0.7);
    c += C(x, y - 14, 9, 1.3, 1, true) + halo(x, y - 14, 16, 0.9);
    c += P(`M${x + d * 14} ${y + 8} q${d * 14} -4 ${d * 22} 8`, 1.1) + P(`M${x + d * 36} ${y + 18} v18`, 0.7) + P(`M${x + d * 30} ${y + 36} h12 l-2 9 h-8 z`, 1.1, 1, BG) + P(`M${x + d * 36} ${y + 32} q-7 -8 0 -16 q7 -8 0 -16`, 0.7, 0.55);
    return c;
  };
  s += angel(424, 338, 1) + angel(776, 338, -1);
  // the twenty-four elders: two rows of six on each side, crowned, holding bowls
  const elders = (x0, dir) => {
    let c = '';
    for (let row = 0; row < 2; row++) for (let i = 0; i < 6; i++) {
      const x = x0 + dir * i * 40 - dir * row * 12, y = 250 + row * 78 - i * 4;
      c += P(`M${x - 14} ${y + 34} C${x - 14} ${y + 12} ${x - 7} ${y + 8} ${x} ${y + 8} C${x + 7} ${y + 8} ${x + 14} ${y + 12} ${x + 14} ${y + 34} Z`, 1.2, 1, BG) + P(`M${x - 6} ${y + 10} L${x} ${y + 20} L${x + 6} ${y + 10}`, 0.6, 0.7) + C(x, y, 7, 1.2, 1, true) + P(`M${x - 8} ${y - 5} l4 -9 l4 5 l4 -5 l4 9 Z`, 1, 1, BG) + P(`M${x - 5} ${y + 5} q5 9 10 0`, 0.9) + P(`M${x + 6} ${y + 22} h9 q-1 6 -4.5 6 q-3.5 0 -4.5 -6`, 0.9, 1, BG) + P(`M${x + 6} ${y + 18} q4 -2 8 0`, 0.6);
    }
    return c;
  };
  s += elders(64, 1) + elders(1136, -1);
  // the church below: the roof beam, the arcade and the central door of the sanctuary
  s += R(0, 412, 1200, 14, 0, 1.8, 1, true) + P('M0 432 H1200', 1.1);
  s += P(archPath(470, 730, 704, 446), 2.3, 1, BG) + P(archPath(486, 714, 704, 462), 1.1) + P(archPath(500, 700, 704, 476), 0.7, 0.6);
  for (let i = 0; i < 12; i++) s += P(`M${512 + i * 16} 484 V704`, 0.6, 0.5);
  s += lamp(600, 432, 14, 1.1) + swag(490, 710, 462, 8, 12) + curtain(486, 470, 58, 234, 'left') + mirror(curtain(486, 470, 58, 234, 'left'), 600);
  [100, 330, 870, 1100].forEach((x) => {
    s += R(x - 17, 432, 34, 272, 2, 1.6, 1, true) + R(x - 24, 432, 48, 12, 1, 1.3, 1, true) + R(x - 24, 694, 48, 10, 1, 1.3, 1, true) + P(`M${x - 6} 448 V688 M${x + 6} 448 V688`, 0.6, 0.45) + cross(x, 470, 7, 1) + rosette(x, 560, 7);
  });
  s += lamp(215, 432, 36, 1) + lamp(985, 432, 36, 1);
  s += floorLines(600, 704, 704, 720, 120, 10, [710]);
  // the priest with the chalice at the door, deacons, and the people coming to receive communion
  s += person(600, 698, 225, 'priest', 'chalice');
  s += person(512, 700, 215, 'deacon', 'censer') + person(690, 700, 215, 'deacon', 'candle');
  s += person(408, 706, 200, 'lay', 'crossed') + person(308, 712, 210, 'woman', 'crossed') + person(212, 716, 180, 'child', 'none') + person(150, 716, 220, 'lay', 'none');
  s += person(804, 706, 200, 'woman', 'crossed') + person(906, 712, 210, 'lay', 'crossed') + person(1004, 716, 182, 'child', 'none') + person(1060, 716, 222, 'woman', 'none');
  return s;
}
