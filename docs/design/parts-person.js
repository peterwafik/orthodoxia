// ---------------------------------------------------------------- figures (richer: sleeves, hands, hair, beards, embroidery)
const BG = ' fill="var(--bg)"';
const hands = (x, y, r) => E(x, y, r * 0.55, r * 0.4, 1, 1) .replace('<ellipse', '<ellipse fill="var(--bg)"') + P(`M${f1(x - r * 0.3)} ${f1(y - r * 0.05)} h${f1(r * 0.6)}`, 0.5, 0.7);
// a sleeve from the shoulder (sx, sy) to the wrist (wx, wy), bulging outward at the elbow; flared at the cuff
const sleeve = (sx, sy, wx, wy, a, bulge = 0) => {
  const mx = (sx + wx) / 2 + bulge, my = (sy + wy) / 2;
  const b = a * 0.75;
  return P(`M${f1(sx - a)} ${f1(sy)} Q${f1(mx - a)} ${f1(my)} ${f1(wx - b)} ${f1(wy)} L${f1(wx + b)} ${f1(wy)} Q${f1(mx + a)} ${f1(my)} ${f1(sx + a)} ${f1(sy)} Z`, 1.3, 1, BG) + P(`M${f1(wx - b)} ${f1(wy - a * 0.6)} L${f1(wx + b)} ${f1(wy - a * 0.6)}`, 0.7, 0.7);
};
const headOf = (x, y, r, style) => {
  let s = '';
  if (style === 'veil') {
    s += P(`M${f1(x - r * 1.5)} ${f1(y + r * 3.6)} C${f1(x - r * 1.9)} ${f1(y - r * 0.6)} ${f1(x - r * 0.9)} ${f1(y - r * 1.7)} ${x} ${f1(y - r * 1.7)} C${f1(x + r * 0.9)} ${f1(y - r * 1.7)} ${f1(x + r * 1.9)} ${f1(y - r * 0.6)} ${f1(x + r * 1.5)} ${f1(y + r * 3.6)}`, 1.4, 1, BG);
    s += C(x, y + r * 0.1, r * 0.92, 1.1, 1, true) + P(`M${f1(x - r * 0.9)} ${f1(y - r * 0.3)} C${f1(x - r * 0.4)} ${f1(y - r * 1.1)} ${f1(x + r * 0.4)} ${f1(y - r * 1.1)} ${f1(x + r * 0.9)} ${f1(y - r * 0.3)}`, 0.9);
    return s;
  }
  if (style === 'cap') {
    s += P(`M${f1(x - r * 1.5)} ${f1(y + r * 2.2)} Q${f1(x - r * 1.6)} ${f1(y - r * 0.2)} ${f1(x - r)} ${f1(y - r * 0.9)}`, 0, 0);
    s += C(x, y, r, 1.4, 1, true);
    s += P(`M${f1(x - r * 1.05)} ${f1(y - r * 0.2)} C${f1(x - r * 1.1)} ${f1(y - r * 1.5)} ${f1(x + r * 1.1)} ${f1(y - r * 1.5)} ${f1(x + r * 1.05)} ${f1(y - r * 0.2)} Z`, 1.3, 1, BG) + P(`M${f1(x - r * 1.05)} ${f1(y - r * 0.55)} H${f1(x + r * 1.05)}`, 0.8) + cross(x, y - r * 1.02, r * 0.3, 0.7);
    s += P(`M${f1(x - r * 0.85)} ${f1(y + r * 0.2)} C${f1(x - r * 0.8)} ${f1(y + r * 1.9)} ${f1(x + r * 0.8)} ${f1(y + r * 1.9)} ${f1(x + r * 0.85)} ${f1(y + r * 0.2)}`, 1.2, 1, BG);
    s += P(`M${f1(x)} ${f1(y + r * 0.6)} V${f1(y + r * 1.5)} M${f1(x - r * 0.4)} ${f1(y + r * 0.7)} q${f1(r * 0.1)} ${f1(r * 0.6)} ${f1(r * 0.2)} ${f1(r * 0.9)} M${f1(x + r * 0.4)} ${f1(y + r * 0.7)} q${f1(-r * 0.1)} ${f1(r * 0.6)} ${f1(-r * 0.2)} ${f1(r * 0.9)}`, 0.6, 0.6);
    return s;
  }
  s += C(x, y, r, 1.4, 1, true);
  if (style === 'hair' || style === 'beard') {
    s += P(`M${f1(x - r * 1.05)} ${f1(y + r * 0.35)} C${f1(x - r * 1.35)} ${f1(y - r * 1.4)} ${f1(x + r * 1.35)} ${f1(y - r * 1.4)} ${f1(x + r * 1.05)} ${f1(y + r * 0.35)} C${f1(x + r * 0.7)} ${f1(y - r * 0.5)} ${f1(x - r * 0.7)} ${f1(y - r * 0.5)} ${f1(x - r * 1.05)} ${f1(y + r * 0.35)} Z`, 1.2, 1, BG);
  }
  if (style === 'beard') {
    s += P(`M${f1(x - r * 0.95)} ${f1(y + r * 0.2)} C${f1(x - r * 1.0)} ${f1(y + r * 1.9)} ${f1(x - r * 0.3)} ${f1(y + r * 2.3)} ${x} ${f1(y + r * 2.4)} C${f1(x + r * 0.3)} ${f1(y + r * 2.3)} ${f1(x + r * 1.0)} ${f1(y + r * 1.9)} ${f1(x + r * 0.95)} ${f1(y + r * 0.2)} C${f1(x + r * 0.5)} ${f1(y + r * 0.8)} ${f1(x - r * 0.5)} ${f1(y + r * 0.8)} ${f1(x - r * 0.95)} ${f1(y + r * 0.2)} Z`, 1.3, 1, BG);
    s += P(`M${f1(x - r * 0.4)} ${f1(y + r * 0.9)} q${f1(r * 0.1)} ${f1(r * 0.8)} ${f1(r * 0.2)} ${f1(r * 1.3)} M${f1(x + r * 0.4)} ${f1(y + r * 0.9)} q${f1(-r * 0.1)} ${f1(r * 0.8)} ${f1(-r * 0.2)} ${f1(r * 1.3)} M${x} ${f1(y + r * 1.0)} v${f1(r * 1.2)}`, 0.6, 0.65);
  }
  if (style === 'child') s += P(`M${f1(x - r * 0.9)} ${f1(y - r * 0.1)} C${f1(x - r * 0.5)} ${f1(y - r * 1.1)} ${f1(x + r * 0.5)} ${f1(y - r * 1.1)} ${f1(x + r * 0.9)} ${f1(y - r * 0.1)}`, 0.9);
  return s;
};
const embroidery = (x, y, w, n, size) => {
  let s = P(`M${f1(x - w)} ${f1(y - size * 1.6)} H${f1(x + w)} M${f1(x - w)} ${f1(y + size * 1.6)} H${f1(x + w)}`, 0.7, 0.8);
  for (let i = 0; i < n; i++) s += cross(x - w + (i + 0.5) * ((2 * w) / n), y, size, 0.6);
  return s;
};
// A standing, faceless person. x centre, base = feet line, h = height.
// kind: deacon | priest | lay | woman | child | back (priest seen from behind)
// item: none | book | censer | cross | candle | cymbals | triangle | chalice | raised
function person(x, base, h, kind = 'lay', item = 'none') {
  const r = h * 0.062, top = base - h, hy = top + r * 1.15, shy = top + r * 3.0;
  const sh = h * 0.105;
  const hem = h * ({ priest: 0.21, back: 0.21, deacon: 0.155, lay: 0.15, woman: 0.16, child: 0.14 }[kind] ?? 0.15);
  let s = '';
  const back = kind === 'back';
  // the robe
  s += P(`M${f1(x - sh)} ${f1(shy)} C${f1(x - sh * 1.15)} ${f1(shy + h * 0.28)} ${f1(x - hem * 0.92)} ${f1(base - h * 0.22)} ${f1(x - hem)} ${base} H${f1(x + hem)} C${f1(x + hem * 0.92)} ${f1(base - h * 0.22)} ${f1(x + sh * 1.15)} ${f1(shy + h * 0.28)} ${f1(x + sh)} ${f1(shy)} C${f1(x + sh * 0.5)} ${f1(shy - r * 0.8)} ${f1(x - sh * 0.5)} ${f1(shy - r * 0.8)} ${f1(x - sh)} ${f1(shy)} Z`, 1.5, 1, BG);
  // neck
  s += P(`M${f1(x - r * 0.45)} ${f1(hy + r * 0.9)} V${f1(shy - r * 0.35)} M${f1(x + r * 0.45)} ${f1(hy + r * 0.9)} V${f1(shy - r * 0.35)}`, 1.1);
  // folds
  for (const k of [-0.62, -0.32, 0.32, 0.62]) s += P(`M${f1(x + k * hem * 0.8)} ${f1(shy + h * 0.4)} C${f1(x + k * hem * 0.9)} ${f1(shy + h * 0.56)} ${f1(x + k * hem * 1.0)} ${f1(base - h * 0.15)} ${f1(x + k * hem * 1.06)} ${base - 2}`, 0.7, 0.55);
  s += P(`M${f1(x)} ${f1(shy + h * 0.45)} V${base - 2}`, 0.6, 0.4);
  if (kind === 'deacon') {
    s += P(`M${f1(x - sh * 0.9)} ${f1(shy + 1)} L${f1(x + sh * 0.7)} ${f1(shy + h * 0.38)} M${f1(x + sh * 0.9)} ${f1(shy + 1)} L${f1(x - sh * 0.7)} ${f1(shy + h * 0.38)}`, 1.1);
    s += P(`M${f1(x - sh * 0.55)} ${f1(shy + 1)} L${f1(x + sh * 1.0)} ${f1(shy + h * 0.38)} M${f1(x + sh * 0.55)} ${f1(shy + 1)} L${f1(x - sh * 1.0)} ${f1(shy + h * 0.38)}`, 0.6, 0.7);
    for (let i = 1; i <= 3; i++) s += cross(x - sh * 0.4 + i * sh * 0.22, shy + h * 0.06 + i * h * 0.075, h * 0.011, 0.5);
    s += embroidery(x, base - h * 0.07, hem * 0.9, 7, h * 0.011);
    s += P(`M${f1(x - sh * 0.85)} ${f1(shy + h * 0.28)} H${f1(x + sh * 0.85)}`, 0.8, 0.8);
  } else if (kind === 'priest' || back) {
    // the phelonion: a wide cape over the robe, with a large cross and a bordered edge
    s += P(`M${f1(x - sh * 1.5)} ${f1(shy + h * 0.06)} C${f1(x - sh * 2.0)} ${f1(shy + h * 0.42)} ${f1(x - hem * 1.12)} ${f1(base - h * 0.2)} ${f1(x - hem * 1.16)} ${f1(base - h * 0.02)} M${f1(x + sh * 1.5)} ${f1(shy + h * 0.06)} C${f1(x + sh * 2.0)} ${f1(shy + h * 0.42)} ${f1(x + hem * 1.12)} ${f1(base - h * 0.2)} ${f1(x + hem * 1.16)} ${f1(base - h * 0.02)}`, 1.3);
    s += P(`M${f1(x - sh * 0.95)} ${f1(shy + h * 0.015)} Q${x} ${f1(shy + (back ? h * 0.07 : h * 0.1))} ${f1(x + sh * 0.95)} ${f1(shy + h * 0.015)}`, 1);
    s += cross(x, shy + h * (back ? 0.3 : 0.27), h * (back ? 0.09 : 0.055), 1.5);
    for (const d of [-1, 1]) for (let i = 0; i < 4; i++) s += cross(x + d * hem * (0.35 + 0.17 * (i % 2)), shy + h * (0.5 + i * 0.1), h * 0.014, 0.6);
    s += embroidery(x, base - h * 0.06, hem * 0.95, 8, h * 0.012);
    if (!back) s += P(`M${f1(x - sh * 0.5)} ${f1(shy)} L${x} ${f1(shy + h * 0.14)} L${f1(x + sh * 0.5)} ${f1(shy)}`, 0.8);
  } else if (kind === 'woman') {
    s += P(`M${f1(x - sh * 0.9)} ${f1(shy + h * 0.1)} Q${x} ${f1(shy + h * 0.18)} ${f1(x + sh * 0.9)} ${f1(shy + h * 0.1)}`, 0.9);
    s += P(`M${f1(x - hem * 0.97)} ${f1(base - h * 0.06)} H${f1(x + hem * 0.97)}`, 0.8, 0.8);
  } else {
    s += P(`M${f1(x - sh * 0.95)} ${f1(shy + h * 0.31)} H${f1(x + sh * 0.95)}`, 1.1) + P(`M${f1(x - sh * 0.5)} ${f1(shy + h * 0.31)} v${f1(h * 0.05)} M${f1(x + sh * 0.5)} ${f1(shy + h * 0.31)} v${f1(h * 0.05)}`, 0.7, 0.7);
    s += embroidery(x, base - h * 0.055, hem * 0.9, 6, h * 0.008);
  }
  // arms
  const sx = sh * 0.9, a = h * 0.036;
  const L = x - sx, Rr = x + sx, sy = shy + 3;
  const wristY = shy + h * 0.3;
  if (item === 'raised') {
    for (const d of [-1, 1]) s += sleeve(x + d * sx, sy, x + d * h * 0.19, shy - h * 0.14, a, d * h * 0.05) + hands(x + d * h * 0.19, shy - h * 0.17, r);
  } else if (item === 'censer') {
    s += sleeve(L, sy, x - h * 0.03, wristY, a, -h * 0.03) + hands(x - h * 0.03, wristY + r * 0.3, r);
    const wx = x + h * 0.21, wy = shy + h * 0.2;
    s += sleeve(Rr, sy, wx, wy, a, h * 0.04) + hands(wx, wy + r * 0.4, r);
    s += P(`M${f1(wx)} ${f1(wy + r * 0.8)} V${f1(wy + h * 0.2)}`, 0.8) + P(`M${f1(wx - h * 0.04)} ${f1(wy + h * 0.2)} h${f1(h * 0.08)} l${f1(-h * 0.012)} ${f1(h * 0.055)} h${f1(-h * 0.056)} Z`, 1.2, 1, BG) + P(`M${f1(wx - h * 0.04)} ${f1(wy + h * 0.2)} q${f1(h * 0.04)} ${f1(-h * 0.04)} ${f1(h * 0.08)} 0`, 1) + cross(wx, wy + h * 0.235, h * 0.014, 0.6);
    s += P(`M${f1(wx)} ${f1(wy + h * 0.195)} q${f1(-h * 0.05)} ${f1(-h * 0.06)} 0 ${f1(-h * 0.12)} q${f1(h * 0.06)} ${f1(-h * 0.06)} ${f1(h * 0.01)} ${f1(-h * 0.12)}`, 0.7, 0.55);
  } else if (item === 'cross') {
    for (const d of [-1, 1]) s += sleeve(x + d * sx, sy, x + d * h * 0.035, shy + h * 0.11, a, d * h * 0.04) + hands(x + d * h * 0.035, shy + h * 0.09, r);
    s += P(`M${x} ${f1(top - h * 0.3)} V${f1(shy + h * 0.2)}`, 1.6) + cross(x, top - h * 0.2, h * 0.11, 1.9);
  } else if (item === 'candle') {
    s += sleeve(L, sy, x - h * 0.03, shy + h * 0.2, a, -h * 0.02) + hands(x - h * 0.03, shy + h * 0.19, r);
    const wx = x + h * 0.2, wy = shy + h * 0.24;
    s += sleeve(Rr, sy, wx, wy, a, h * 0.05) + hands(wx, wy + r * 0.3, r) + P(`M${f1(wx)} ${f1(wy)} v${f1(-h * 0.17)}`, 2) + P(`M${f1(wx)} ${f1(wy - h * 0.17)} q${f1(h * 0.012)} ${f1(-h * 0.02)} 0 ${f1(-h * 0.04)} q${f1(-h * 0.012)} ${f1(h * 0.02)} 0 ${f1(h * 0.04)}`, 0.9);
  } else if (item === 'cymbals') {
    for (const d of [-1, 1]) {
      const wx = x + d * h * 0.19, wy = shy + h * 0.2;
      s += sleeve(x + d * sx, sy, wx, wy, a, d * h * 0.05) + hands(wx, wy, r) + E(wx + d * h * 0.012, wy, h * 0.012, h * 0.065, 1.4) + E(wx + d * h * 0.03, wy, h * 0.008, h * 0.055, 0.8, 0.8);
    }
  } else if (item === 'triangle') {
    const wx = x - h * 0.2, wy = shy + h * 0.15;
    s += sleeve(L, sy, wx, wy, a, -h * 0.05) + hands(wx, wy, r) + P(`M${f1(wx)} ${f1(wy - 3)} v${f1(-h * 0.03)} M${f1(wx - h * 0.055)} ${f1(wy + h * 0.1)} L${f1(wx)} ${f1(wy - h * 0.03)} L${f1(wx + h * 0.055)} ${f1(wy + h * 0.1)} Z`, 1.3);
    const bx = x + h * 0.06, by = shy + h * 0.2;
    s += sleeve(Rr, sy, bx, by, a, h * 0.03) + hands(bx, by, r) + P(`M${f1(bx)} ${f1(by)} L${f1(wx + h * 0.02)} ${f1(wy + h * 0.06)}`, 1);
  } else if (item === 'chalice') {
    for (const d of [-1, 1]) s += sleeve(x + d * sx, sy, x + d * h * 0.045, shy + h * 0.21, a, d * h * 0.05) + hands(x + d * h * 0.045, shy + h * 0.2, r);
    s += P(`M${f1(x - h * 0.045)} ${f1(shy + h * 0.1)} h${f1(h * 0.09)} c0 ${f1(h * 0.05)} ${f1(-h * 0.02)} ${f1(h * 0.075)} ${f1(-h * 0.045)} ${f1(h * 0.075)} c${f1(-h * 0.025)} 0 ${f1(-h * 0.045)} ${f1(-h * 0.025)} ${f1(-h * 0.045)} ${f1(-h * 0.075)} Z`, 1.3, 1, BG) + P(`M${x} ${f1(shy + h * 0.175)} v${f1(h * 0.03)} M${f1(x - h * 0.03)} ${f1(shy + h * 0.205)} h${f1(h * 0.06)}`, 1.3) + cross(x, shy + h * 0.13, h * 0.016, 0.7);
  } else if (item === 'book') {
    for (const d of [-1, 1]) s += sleeve(x + d * sx, sy, x + d * h * 0.07, wristY - h * 0.03, a, d * h * 0.03);
    s += R(x - h * 0.1, shy + h * 0.2, h * 0.2, h * 0.15, 1.5, 1.4, 1, true) + P(`M${x} ${f1(shy + h * 0.2)} V${f1(shy + h * 0.35)}`, 0.8) + cross(x - h * 0.05, shy + h * 0.275, h * 0.03, 0.9) + cross(x + h * 0.05, shy + h * 0.275, h * 0.03, 0.9);
    s += hands(x - h * 0.09, shy + h * 0.33, r) + hands(x + h * 0.09, shy + h * 0.33, r);
  } else {
    // hands clasped in front
    s += sleeve(L, sy, x - h * 0.012, wristY, a, -h * 0.035) + sleeve(Rr, sy, x + h * 0.012, wristY, a, h * 0.035) + hands(x, wristY + r * 0.35, r * 1.1);
  }
  // the head
  const style = { deacon: 'cap', priest: 'cap', back: 'hair', lay: 'beard', woman: 'veil', child: 'child' }[kind];
  if (back) {
    s += C(x, hy, r, 1.4, 1, true) + P(`M${f1(x - r * 1.02)} ${f1(hy + r * 0.2)} C${f1(x - r * 1.2)} ${f1(hy - r * 1.5)} ${f1(x + r * 1.2)} ${f1(hy - r * 1.5)} ${f1(x + r * 1.02)} ${f1(hy + r * 0.2)} C${f1(x + r * 0.6)} ${f1(hy + r * 0.9)} ${f1(x - r * 0.6)} ${f1(hy + r * 0.9)} ${f1(x - r * 1.02)} ${f1(hy + r * 0.2)} Z`, 1.2, 1, BG) + P(`M${f1(x - r * 1.02)} ${f1(hy - r * 0.25)} H${f1(x + r * 1.02)}`, 0.8) + cross(x, hy - r * 0.65, r * 0.3, 0.7);
  } else s += headOf(x, hy, r, style);
  return s;
}
// A half-length figure for icons and paintings: halo, head, robes with folds, optional hands, book, veil, beard.
function bust(x, y, r, o = {}) {
  let s = o.crossHalo ? crossHalo(x, y, r * 1.7) : halo(x, y, r * 1.7);
  const w = r * 2.5, bot = y + r * (o.long ? 6.4 : 3.6);
  s += P(`M${f1(x - w)} ${f1(bot)} C${f1(x - w)} ${f1(y + r * 1.9)} ${f1(x - r * 1.1)} ${f1(y + r * 1.2)} ${x} ${f1(y + r * 1.2)} C${f1(x + r * 1.1)} ${f1(y + r * 1.2)} ${f1(x + w)} ${f1(y + r * 1.9)} ${f1(x + w)} ${f1(bot)} Z`, 1.3, 1, BG);
  s += P(`M${f1(x - r * 0.6)} ${f1(y + r * 1.2)} L${x} ${f1(y + r * 2.3)} L${f1(x + r * 0.6)} ${f1(y + r * 1.2)}`, 0.9);
  for (const k of [-1.4, -0.7, 0.7, 1.4]) s += P(`M${f1(x + k * r)} ${f1(y + r * 2.4)} C${f1(x + k * r * 1.05)} ${f1(y + r * 3.2)} ${f1(x + k * r * 1.1)} ${f1(bot - r * 0.6)} ${f1(x + k * r * 1.12)} ${f1(bot - 1)}`, 0.6, 0.6);
  s += P(`M${f1(x - r * 0.3)} ${f1(y + r * 2.3)} L${f1(x - r * 1.6)} ${f1(y + r * 3.0)} M${f1(x + r * 0.3)} ${f1(y + r * 2.3)} L${f1(x + r * 1.6)} ${f1(y + r * 3.0)}`, 0.7, 0.6);
  s += headOf(x, y, r, o.veil ? 'veil' : o.beard ? 'beard' : o.hair ? 'hair' : 'child').replace('child', '');
  if (o.book) s += R(x - r * 1.3, y + r * 2.5, r * 2.0, r * 1.5, 1, 1.2, 1, true) + P(`M${f1(x - r * 0.3)} ${f1(y + r * 2.5)} v${f1(r * 1.5)}`, 0.7) + cross(x - r * 0.8, y + r * 3.25, r * 0.35, 0.8) + hands(x + r * 0.9, y + r * 3.7, r * 0.9);
  if (o.bless) s += hands(x + r * 1.6, y + r * 2.9, r * 0.9) + P(`M${f1(x + r * 1.45)} ${f1(y + r * 2.55)} v${f1(-r * 0.6)} M${f1(x + r * 1.75)} ${f1(y + r * 2.55)} v${f1(-r * 0.5)}`, 0.9);
  return s;
}
