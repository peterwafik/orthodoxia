// Third round: drawn after the reference icon (halo, hair, a wavy thick beard, flowing robes, hands holding a book),
// without facial features. One drawing per saint, each with a different head, beard and holding.
const fs = require('fs');
const S = 2.2; // main stroke
const cross = (x, y, s = 5, w = 1.6) => `<path d="M${x} ${y - s} V${y + s} M${x - s * 0.8} ${y - s * 0.25} H${x + s * 0.8}" stroke-width="${w}"/>`;
const halo = `<circle cx="120" cy="70" r="56" stroke-width="2"/>`;

// A wavy beard: scalloped lower edge, flowing S-shaped locks inside.
const beard = (top, bottom, half, lobes) => {
  const cx = 120;
  const h = bottom - top;
  const left = [`M${cx - half} ${top}`];
  // left edge down to the tip, then back up the right edge, with small scallops on the way
  const pts = [];
  for (let i = 1; i <= lobes; i++) {
    const t = i / lobes;
    const x = cx - half * (1 - t) ** 0.8 * (1 + (i % 2 ? 0.08 : -0.04));
    pts.push(`Q${(x - 5).toFixed(1)} ${(top + h * (t - 0.5 / lobes)).toFixed(1)} ${x.toFixed(1)} ${(top + h * t).toFixed(1)}`);
  }
  const right = [];
  for (let i = lobes - 1; i >= 0; i--) {
    const t = i / lobes;
    const x = cx + half * (1 - t) ** 0.8 * (1 + (i % 2 ? 0.08 : -0.04));
    right.push(`Q${(x + 5).toFixed(1)} ${(top + h * (t + 0.5 / lobes)).toFixed(1)} ${x.toFixed(1)} ${(top + h * t).toFixed(1)}`);
  }
  const outline = `<path d="${left.join(' ')} ${pts.join(' ')} ${right.join(' ')} Z" stroke-width="${S}"/>`;
  const locks = [-0.7, -0.35, 0, 0.35, 0.7]
    .map((k) => {
      const x0 = cx + k * half * 0.9;
      return `<path d="M${x0.toFixed(1)} ${top + 6} C${(x0 + k * 8 + 6).toFixed(1)} ${top + h * 0.35} ${(x0 - k * 4 - 6).toFixed(1)} ${top + h * 0.6} ${(cx + k * half * 0.25).toFixed(1)} ${bottom - 6 - Math.abs(k) * 8}" stroke-width="1.2"/>`;
    })
    .join('');
  return outline + locks;
};
// The moustache line over the beard (just a soft arch, no mouth).
const moustache = (top) => `<path d="M104 ${top + 3} C110 ${top - 5} 117 ${top - 3} 120 ${top + 2} C123 ${top - 3} 130 ${top - 5} 136 ${top + 3}" stroke-width="1.4"/>`;
// The face opening: forehead, cheeks, nose line left out on purpose.
const face = (top, bottom) => `<path d="M100 ${top} C98 ${top + 20} 102 ${bottom - 8} 108 ${bottom} M140 ${top} C142 ${top + 20} 138 ${bottom - 8} 132 ${bottom}" stroke-width="1.8"/>`;

// Drapery common to all: wide shoulders, big sleeves with fold lines, the cuff and the hands holding something.
const robe = `<path d="M18 220 C16 176 30 150 64 138 C84 130 100 128 120 130 C140 128 156 130 176 138 C210 150 224 176 222 220" stroke-width="${S}"/>` +
  `<path d="M18 220 C20 196 28 180 42 170 M222 220 C220 196 212 180 198 170" stroke-width="1.4"/>` +
  `<path d="M32 220 C34 200 42 188 54 180 M208 220 C206 200 198 188 186 180 M46 220 C48 206 54 196 62 190 M194 220 C192 206 186 196 178 190" stroke-width="1.1" opacity="0.8"/>`;
// A hand (back of the hand with four fingers) at (x, y), mirrored when m = -1.
const hand = (x, y, m = 1) =>
  `<path d="M${x} ${y + 6} C${x + 4 * m} ${y - 8} ${x + 16 * m} ${y - 12} ${x + 26 * m} ${y - 8} C${x + 32 * m} ${y - 4} ${x + 30 * m} ${y + 6} ${x + 24 * m} ${y + 12} C${x + 16 * m} ${y + 18} ${x + 6 * m} ${y + 16} ${x} ${y + 6} Z" stroke-width="1.8"/>` +
  `<path d="M${x + 12 * m} ${y - 8} C${x + 14 * m} ${y - 2} ${x + 14 * m} ${y + 4} ${x + 12 * m} ${y + 10} M${x + 19 * m} ${y - 9} C${x + 21 * m} ${y - 2} ${x + 21 * m} ${y + 5} ${x + 19 * m} ${y + 11}" stroke-width="1.1" opacity="0.8"/>`;

const book = (x, y, w, h) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="3" stroke-width="${S}"/><rect x="${x + 5}" y="${y + 5}" width="${w - 10}" height="${h - 10}" rx="1.5" stroke-width="1.1" opacity="0.7"/>` + cross(x + w / 2, y + h / 2, 11, 2);
const stack = (x, y, w, h) => `<path d="M${x} ${y} H${x + w} V${y + h} H${x} Z" stroke-width="${S}"/><path d="M${x + 4} ${y - 5} H${x + w + 4} V${y + h - 5} M${x + 8} ${y - 10} H${x + w + 8} V${y + h - 10}" stroke-width="1.5"/>` + cross(x + w / 2, y + h / 2, 10, 1.8);
const scroll = (x, y, w, h) => `<path d="M${x} ${y} H${x + w} V${y + h} H${x} Z" stroke-width="${S}"/><path d="M${x} ${y} C${x - 10} ${y} ${x - 10} ${y + 12} ${x} ${y + 12} M${x + w} ${y + h} C${x + w + 10} ${y + h} ${x + w + 10} ${y + h - 12} ${x + w} ${y + h - 12}" stroke-width="1.6"/>` +
  [0, 1, 2, 3, 4].map((i) => `<path d="M${x + 8} ${y + 8 + i * ((h - 16) / 4)} H${x + w - 8}" stroke-width="1" opacity="0.7"/>`).join('');

// ---- Cyril: monastic. Long wavy hair to the shoulders, the cowl draped round the neck, a long pointed beard.
const cyril =
  halo + robe +
  // hair, falling in waves beside the face
  `<path d="M96 66 C88 38 152 38 144 66" stroke-width="${S}"/><path d="M96 66 C84 80 86 100 96 112 C92 120 98 126 104 124 M144 66 C156 80 154 100 144 112 C148 120 142 126 136 124" stroke-width="${S}"/>` +
  `<path d="M96 66 C90 82 92 98 100 108 M144 66 C150 82 148 98 140 108" stroke-width="1.2" opacity="0.8"/>` +
  `<path d="M100 56 C112 48 128 48 140 56" stroke-width="1.5"/>` + face(60, 94) +
  beard(90, 152, 27, 5) +
  // the cowl: a wide collar laid round the neck and over the shoulders, with a pleated edge
  `<path d="M62 150 C70 128 94 120 106 124 L120 148 L134 124 C146 120 170 128 178 150" stroke-width="${S}"/><path d="M62 150 C66 142 72 138 78 136 M178 150 C174 142 168 138 162 136" stroke-width="1.2"/>` +
  `<path d="M120 148 V220" stroke-width="1.4"/>` +
  book(88, 160, 64, 56) + hand(58, 178, 1) + hand(182, 196, -1);

// ---- Gregory: a bishop. High bare brow with hair at the sides, a thick rounded beard, the omophorion with a great cross.
const gregory =
  halo + robe +
  `<path d="M96 70 C90 36 150 36 144 70" stroke-width="${S}"/><path d="M96 58 C86 62 86 84 96 92 M144 58 C154 62 154 84 144 92" stroke-width="${S}"/>` +
  `<path d="M104 46 C114 40 126 40 136 46" stroke-width="1.2" opacity="0.7"/>` + face(56, 92) +
  beard(88, 138, 29, 4) +
  // omophorion: a broad band over the left shoulder, crossing the chest, ending in a great cross
  `<path d="M100 128 C84 130 70 142 66 160 M140 128 C150 136 160 150 168 172" stroke-width="${S}"/><path d="M104 130 L168 196 M124 130 L180 190" stroke-width="${S}"/>` +
  `<path d="M120 130 L112 144 L130 156" stroke-width="1.3"/>` + cross(160, 160, 14, 2.2) + `<rect x="148" y="146" width="24" height="28" rx="1" stroke-width="0" />` +
  stack(82, 164, 54, 44) + hand(58, 184, 1) + hand(176, 200, -1);

// ---- Basil: a monk-bishop. The hood covers the head and falls over the shoulders; a long narrow beard; he blesses and holds a scroll.
const basil =
  halo + robe +
  `<path d="M90 100 C84 40 156 40 150 100" stroke-width="${S}"/><path d="M90 100 C80 118 78 138 72 152 M150 100 C160 118 162 138 168 152" stroke-width="${S}"/>` +
  `<path d="M100 96 C96 62 106 52 120 52 C134 52 144 62 140 96" stroke-width="1.6"/>` +
  `<path d="M96 80 C92 70 96 60 102 54 M144 80 C148 70 144 60 138 54" stroke-width="1" opacity="0.6"/>` + cross(120, 46, 6, 1.8) +
  beard(90, 166, 24, 6) +
  `<path d="M120 160 V220" stroke-width="1.3" opacity="0"/>` +
  scroll(100, 168, 62, 38) +
  // right hand raised in blessing
  `<path d="M52 190 V160 C52 152 60 152 60 160 V146 C60 138 68 138 68 146 V156 M68 148 C68 140 76 140 76 148 V170 C76 182 70 190 64 192 M52 172 C44 166 42 178 50 184" stroke-width="1.7"/>` + hand(184, 196, -1);

const ST = [
  ['St. Cyril', cyril, 'Monastic: long wavy hair, the cowl laid round the neck, a long pointed beard, holding a book with a cross.'],
  ['St. Gregory', gregory, 'A bishop: a high bare brow with side hair, a thick round beard, the omophorion with a great cross, holding a stack of Gospels.'],
  ['St. Basil', basil, 'A monk-bishop: the hood covers the head, a long narrow beard, one hand raised in blessing and the other holding a scroll.'],
];
let html = `<!doctype html><html lang="en"><head><meta charset="utf-8"/><meta name="viewport" content="width=device-width, initial-scale=1"/><title>Holy Mass saints, after the reference</title><style>
body{margin:0;padding:2rem 1.5rem 4rem;background:#e6e1d3;font-family:Inter,system-ui,sans-serif;color:#1a2340}h1{font-size:1.4rem;margin:0 0 .3rem}.intro{max-width:62rem;color:#4b5567;margin:0 0 1rem}
.row{display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:1rem}.card{background:#fffdf8;border:1px solid #ddd5c3;border-top:3px solid #7a5a12;border-radius:6px;padding:1rem 1.2rem 1.2rem}
svg{display:block;width:100%;height:auto;color:#5a420c}.card h3{margin:.4rem 0 .2rem;font-size:1.05rem}.card p{margin:0;font-size:.9rem;color:#4b5567}</style></head><body>
<h1>Holy Mass cards: the saints, drawn after your reference</h1><p class="intro">Drawn in the manner of the reference icon: a halo, wavy hair, a thick flowing beard, wide robes with fold lines and hands holding a book, with the face left empty. One for each saint.</p><div class="row">`;
for (const [name, body, text] of ST) html += `<div class="card"><svg viewBox="0 0 240 224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">${body}</svg><h3>${name}</h3><p>${text}</p></div>`;
fs.writeFileSync(__dirname + '/holy-mass-saints-3.html', html + '</div></body></html>');
