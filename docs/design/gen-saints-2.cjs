// Second round: heads covered by the monastic hood, thick carefully drawn beards.
const fs = require('fs');
const { cross, halo, shoulders, neck, omophorion, hems, folds, gospel, openBook, scroll, blessing, staff, pectoral, medallion } = require('./gen-saints.cjs');

// A beard: a thick outline, a thinner inner outline and flowing strands inside, so it reads as the strongest shape.
const strands = (cx, top, bottom, spread, n) =>
  Array.from({ length: n }, (_, i) => {
    const t = n === 1 ? 0 : i / (n - 1) - 0.5;
    const x0 = cx + t * spread;
    const x1 = cx + t * spread * 0.55;
    return `<path d="M${x0.toFixed(1)} ${top} C${(x0 + t * 6).toFixed(1)} ${top + (bottom - top) * 0.4} ${(x1 - t * 4).toFixed(1)} ${top + (bottom - top) * 0.7} ${(cx + t * 4).toFixed(1)} ${bottom}" stroke-width="1.1" opacity="0.7"/>`;
  }).join('');

// The hood (koukoulion): covers the whole head and falls over the shoulders, with the opening for the face.
// Only the face opening is left bare, framed by the hood's thick edge; no features inside it.
const hood = (peak, width) => {
  const l = 120 - width, r = 120 + width;
  return (
    `<path d="M${l} 112 C${l - 6} 70 ${l + 6} ${peak} 120 ${peak} C${r - 6} ${peak} ${r + 6} 70 ${r} 112" stroke-width="2"/>` +
    `<path d="M${l} 112 C${l - 14} 124 ${l - 22} 132 ${l - 24} 150 M${r} 112 C${r + 14} 124 ${r + 22} 132 ${r + 24} 150" stroke-width="1.6"/>` +
    // the inner edge of the hood around the face
    `<path d="M${l + 10} 100 C${l + 6} 66 ${l + 16} ${peak + 14} 120 ${peak + 14} C${r - 16} ${peak + 14} ${r - 6} 66 ${r - 10} 100" stroke-width="1.3"/>` +
    // pleats
    `<path d="M${l + 2} 96 C${l - 2} 82 ${l + 2} 70 ${l + 8} 62 M${r - 2} 96 C${r + 2} 82 ${r - 2} 70 ${r - 8} 62" stroke-width="0.8" opacity="0.55"/>`
  );
};
const face = (w, bottom) => `<path d="M${120 - w} 78 V${bottom - 20} M${120 + w} 78 V${bottom - 20}" stroke-width="0"/>`;
// the cross on the hood at the brow and a row of small crosses along its edge
const brow = (peak) => cross(120, peak + 4, 5, 1.4) + [-26, -16, 16, 26].map((dx, i) => cross(120 + dx, peak + 11 + (i === 1 || i === 2 ? -3 : 3), 2.4, 0.9)).join('');
const cape = `<path d="M40 200 C40 168 76 148 120 150 C164 148 200 168 200 200" stroke-width="1.3" opacity="0.85"/><path d="M76 200 C78 184 90 170 104 164 M164 200 C162 184 150 170 136 164" stroke-width="0.9" opacity="0.55"/>`;

// Cyril: wide full beard in two soft lobes; broad rounded hood.
const cyril =
  hood(26, 34) + brow(26) +
  `<path d="M92 84 C84 122 104 146 120 152 C136 146 156 122 148 84 C140 98 130 104 120 104 C110 104 100 98 92 84 Z" stroke-width="2.6" fill="currentColor" fill-opacity="0.08"/>` +
  `<path d="M99 92 C97 118 108 136 120 142 C132 136 143 118 141 92" stroke-width="1.2" opacity="0.7"/>` + strands(120, 104, 146, 36, 7) +
  `<path d="M120 104 V128" stroke-width="1.4" opacity="0.8"/>`;
// Gregory: shorter, round, thick beard; a veil (epanokalimavkion) hangs from the back of the hood.
const gregory =
  hood(28, 32) + brow(28) +
  `<path d="M120 28 C150 34 168 56 172 96 M120 28 C90 34 72 56 68 96" stroke-width="0.9" opacity="0.45"/>` +
  `<path d="M94 84 C90 108 102 124 120 126 C138 124 150 108 146 84 C138 94 130 98 120 98 C110 98 102 94 94 84 Z" stroke-width="2.6" fill="currentColor" fill-opacity="0.08"/>` +
  `<path d="M101 92 C101 108 109 118 120 120 C131 118 139 108 139 92" stroke-width="1.2" opacity="0.7"/>` + strands(120, 100, 122, 28, 6) +
  `<path d="M108 108 C114 112 126 112 132 108" stroke-width="1.2" opacity="0.8"/>`;
// Basil: narrow pointed hood; long thick pointed beard.
const basil =
  hood(14, 28) + brow(14) +
  `<path d="M99 82 C94 118 108 148 120 166 C132 148 146 118 141 82 C134 94 128 98 120 98 C112 98 106 94 99 82 Z" stroke-width="2.6" fill="currentColor" fill-opacity="0.08"/>` +
  `<path d="M106 92 C104 120 112 144 120 156 C128 144 136 120 134 92" stroke-width="1.2" opacity="0.7"/>` + strands(120, 100, 160, 24, 5) +
  `<path d="M120 100 V150" stroke-width="1.3" opacity="0.8"/>`;

const ST = {
  cyril: [
    ['Hood, Gospel and blessing', 'The black monastic hood with crosses covering the whole head, a thick full beard in two lobes, the omophorion with crosses, the Gospel book and a blessing hand.', cape + cyril + neck + omophorion(3) + gospel() + blessing() + hems],
    ['Hood, staff and Theotokos medallion', 'The hood and full beard, the Coptic staff with its two serpent heads, a pectoral cross and a medallion of the Theotokos.', cape + cyril + neck + omophorion(2) + pectoral(160) + staff() + medallion(60, 172, 'theotokos') + folds],
    ['Hood, scroll and staff', 'The hood and full beard, an unrolled scroll for his writings, and the staff.', cape + cyril + neck + omophorion(3) + scroll(30, 162) + staff(206) + hems],
  ],
  gregory: [
    ['Hood, Gospel and blessing', 'The hood with a veil falling behind, a short round thick beard, the omophorion, a decorated Gospel book and a blessing hand.', cape + gregory + neck + omophorion(3) + gospel() + blessing() + hems],
    ['Hood and scroll', 'The same hood and beard, the omophorion with a pectoral cross and an unrolled scroll.', cape + gregory + neck + omophorion(2) + scroll(138, 162) + pectoral(150) + hems],
    ['Hood, Trinity medallion and book', 'An open book and a medallion with the triangle of the Trinity, for “the Theologian”.', cape + gregory + neck + omophorion(3) + openBook() + medallion(60, 172, 'trinity') + folds],
  ],
  basil: [
    ['Hood, open book and blessing', 'The narrow pointed hood, a long thick pointed beard, the omophorion, an open book and a blessing hand.', cape + basil + neck + omophorion(3) + openBook() + blessing() + hems],
    ['Hood and staff', 'The pointed hood and long beard, a pectoral cross and the staff.', cape + basil + neck + omophorion(2) + pectoral(168) + staff() + hems],
    ['Hood, Gospel and church medallion', 'The Gospel book and a medallion of a church for the great works he founded.', cape + basil + neck + omophorion(3) + gospel() + medallion(60, 172, 'church') + folds],
  ],
};
const names = { cyril: 'St. Cyril', gregory: 'St. Gregory', basil: 'St. Basil' };
let html = `<!doctype html><html lang="en"><head><meta charset="utf-8"/><meta name="viewport" content="width=device-width, initial-scale=1"/><title>Holy Mass saints, drawing ideas 2</title><style>
body{margin:0;padding:2rem 1.5rem 4rem;background:#e6e1d3;font-family:Inter,system-ui,sans-serif;color:#1a2340}h1{font-size:1.4rem;margin:0 0 .3rem}.intro{max-width:62rem;color:#4b5567;margin:0 0 1rem}h2{font-size:1.15rem;margin:2.2rem 0 .6rem}
.row{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:1rem}.card{background:#fffdf8;border:1px solid #ddd5c3;border-top:3px solid #7a5a12;border-radius:6px;padding:1rem 1.2rem 1.2rem}
svg{display:block;width:100%;height:auto;color:#7a5a12}.card h3{margin:.4rem 0 .2rem;font-size:1rem}.card p{margin:0;font-size:.9rem;color:#4b5567}.id{font-weight:700;color:#7a5a12}</style></head><body>
<h1>Holy Mass cards: the saints, second round</h1><p class="intro">Every head is now covered by the monastic hood, and the beard is the boldest shape in each drawing. Same three ideas per saint; tell me which you want for each (for example “Cyril 2, Gregory 1, Basil 3”).</p>`;
for (const [id, opts] of Object.entries(ST)) {
  html += `<h2>${names[id]}</h2><div class="row">`;
  opts.forEach(([title, text, body], i) => {
    html += `<div class="card"><svg viewBox="0 0 240 200" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">${halo}${shoulders}${body}</svg><h3><span class="id">${names[id].replace('St. ', '')} ${i + 1}</span> · ${title}</h3><p>${text}</p></div>`;
  });
  html += `</div>`;
}
fs.writeFileSync(__dirname + '/holy-mass-saints-2.html', html + '</body></html>');
