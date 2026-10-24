// Generates docs/design/holy-mass-saints.html: three line-drawing ideas per saint, faceless but detailed.
const fs = require('fs');
const cross = (x, y, s = 4, w = 1.1) => `<path d="M${x} ${y - s} V${y + s} M${x - s * 0.75} ${y - s * 0.25} H${x + s * 0.75}" stroke-width="${w}"/>`;
const halo =
  `<circle cx="120" cy="68" r="52" stroke-width="1.1" opacity="0.55"/><circle cx="120" cy="68" r="47" stroke-width="0.8" opacity="0.4"/>` +
  Array.from({ length: 24 }, (_, i) => {
    const a = (i / 24) * 2 * Math.PI;
    return `<circle cx="${(120 + 49.5 * Math.cos(a)).toFixed(1)}" cy="${(68 + 49.5 * Math.sin(a)).toFixed(1)}" r="0.9" stroke-width="0.6" opacity="0.5"/>`;
  }).join('');
const shoulders =
  `<path d="M14 200 C20 150 66 130 120 132 C174 130 220 150 226 200" stroke-width="1.6"/>` +
  `<path d="M40 200 C44 170 70 156 92 152 M200 200 C196 170 170 156 148 152" stroke-width="0.9" opacity="0.55"/>`;
const neck = `<path d="M104 112 V132 M136 112 V132" stroke-width="1.2"/>`;
const omophorion = (n = 3) =>
  `<path d="M92 133 C96 160 110 180 116 200 M148 133 C144 160 130 180 124 200 M104 134 C106 158 114 178 118 200 M136 134 C134 158 126 178 122 200" stroke-width="1.2"/>` +
  [0, 1, 2].slice(0, n).map((i) => cross(109 + i * 2.4, 156 + i * 14, 4.2)).join('') +
  [0, 1, 2].slice(0, n).map((i) => cross(131 - i * 2.4, 156 + i * 14, 4.2)).join('');
const hems = `<path d="M30 190 H80 M160 190 H210" stroke-width="0.8" opacity="0.5"/>`;
const folds = `<path d="M60 200 C62 182 70 172 80 166 M180 200 C178 182 170 172 160 166 M74 200 C76 188 82 180 90 174 M166 200 C164 188 158 180 150 174" stroke-width="0.8" opacity="0.5"/>`;
const gospel = (x = 140, y = 150) =>
  `<rect x="${x}" y="${y}" width="50" height="42" rx="2" stroke-width="1.4"/><rect x="${x + 4}" y="${y + 4}" width="42" height="34" rx="1" stroke-width="0.8" opacity="0.6"/>` +
  cross(x + 25, y + 21, 9, 1.4) +
  [[x + 8, y + 8], [x + 42, y + 8], [x + 8, y + 34], [x + 42, y + 34]].map(([a, b]) => `<circle cx="${a}" cy="${b}" r="1.6" stroke-width="0.8"/>`).join('');
const openBook = (x = 136, y = 160) =>
  `<path d="M${x} ${y} C${x + 14} ${y - 6} ${x + 26} ${y - 6} ${x + 40} ${y} V${y + 30} C${x + 26} ${y + 24} ${x + 14} ${y + 24} ${x} ${y + 30} Z M${x + 20} ${y - 3} V${y + 27}" stroke-width="1.3"/>` +
  [0, 1, 2, 3].map((i) => `<path d="M${x + 4} ${y + 6 + i * 5} H${x + 16} M${x + 24} ${y + 6 + i * 5} H${x + 36}" stroke-width="0.7" opacity="0.6"/>`).join('');
const scroll = (x = 132, y = 158) =>
  `<path d="M${x} ${y} H${x + 56} V${y + 30} H${x} Z" stroke-width="1.3"/><path d="M${x} ${y} C${x - 8} ${y} ${x - 8} ${y + 10} ${x} ${y + 10} M${x + 56} ${y + 30} C${x + 64} ${y + 30} ${x + 64} ${y + 20} ${x + 56} ${y + 20}" stroke-width="1.1"/>` +
  [0, 1, 2, 3].map((i) => `<path d="M${x + 6} ${y + 6 + i * 6} H${x + 50}" stroke-width="0.7" opacity="0.6"/>`).join('');
const blessing = (x = 52, y = 150) =>
  `<path d="M${x} ${y + 40} V${y + 16} C${x} ${y + 8} ${x + 8} ${y + 8} ${x + 8} ${y + 16} V${y + 4} C${x + 8} ${y - 3} ${x + 16} ${y - 3} ${x + 16} ${y + 4} V${y + 14} M${x + 16} ${y + 6} C${x + 16} ${y - 1} ${x + 24} ${y - 1} ${x + 24} ${y + 6} V${y + 22} C${x + 24} ${y + 32} ${x + 18} ${y + 40} ${x + 14} ${y + 42} M${x} ${y + 24} C${x - 8} ${y + 18} ${x - 10} ${y + 28} ${x - 2} ${y + 34}" stroke-width="1.3"/>`;
const staff = (x = 206) =>
  `<path d="M${x} 200 V92" stroke-width="1.6"/><path d="M${x} 92 C${x} 74 ${x - 18} 74 ${x - 18} 88 C${x - 18} 94 ${x - 12} 96 ${x - 10} 92 M${x} 92 C${x} 74 ${x + 18} 74 ${x + 18} 88 C${x + 18} 94 ${x + 12} 96 ${x + 10} 92" stroke-width="1.4"/><circle cx="${x}" cy="96" r="2.2" stroke-width="1"/>` +
  `<path d="M${x - 3} 130 H${x + 3} M${x - 3} 150 H${x + 3}" stroke-width="1"/>`;
const pectoral = (y = 140) =>
  `<path d="M104 ${y - 6} C108 ${y + 4} 132 ${y + 4} 136 ${y - 6}" stroke-width="0.8" opacity="0.7"/><path d="M120 ${y + 3} V${y + 17} M114 ${y + 8} H126" stroke-width="1.3"/><circle cx="120" cy="${y + 8}" r="2.2" stroke-width="0.8"/>`;
const medallion = (x, y, kind) => {
  const ring = `<circle cx="${x}" cy="${y}" r="13" stroke-width="1.1"/><circle cx="${x}" cy="${y}" r="10.5" stroke-width="0.7" opacity="0.5"/>`;
  if (kind === 'theotokos')
    return ring + `<circle cx="${x}" cy="${y - 4}" r="3.2" stroke-width="1"/><path d="M${x - 7} ${y + 8} C${x - 7} ${y + 1} ${x + 7} ${y + 1} ${x + 7} ${y + 8}" stroke-width="1"/><circle cx="${x + 1}" cy="${y + 3}" r="2.2" stroke-width="0.8"/>`;
  if (kind === 'trinity') return ring + `<path d="M${x} ${y - 7} L${x + 6.5} ${y + 4.5} H${x - 6.5} Z" stroke-width="1"/><circle cx="${x}" cy="${y + 1}" r="2" stroke-width="0.8"/>`;
  return ring + `<path d="M${x - 7} ${y + 7} V${y - 1} L${x} ${y - 6} L${x + 7} ${y - 1} V${y + 7} Z M${x} ${y - 6} V${y - 9}" stroke-width="1"/><path d="M${x - 2} ${y + 7} V${y + 2} H${x + 2} V${y + 7}" stroke-width="0.8"/>`;
};
// Heads: no eyes, nose or mouth.
const hoodCrosses = [[100, 50], [110, 43], [120, 40], [130, 43], [140, 50]].map(([x, y]) => cross(x, y, 2.6, 0.9)).join('');
const cyrilHood =
  `<path d="M90 70 C84 24 156 24 150 70" stroke-width="1.6"/><path d="M90 70 C80 92 82 118 94 134 M150 70 C160 92 158 118 146 134" stroke-width="1.5"/><path d="M98 56 C110 48 130 48 142 56" stroke-width="1.3"/>` +
  hoodCrosses +
  `<path d="M98 56 V74 C98 88 108 94 120 94 C132 94 142 88 142 74 V56" stroke-width="1.4"/><path d="M96 78 C90 110 110 128 120 130 C130 128 150 110 144 78" stroke-width="1.5"/>` +
  `<path d="M106 92 C108 106 114 116 120 122 M134 92 C132 106 126 116 120 122 M100 84 C100 100 106 114 114 122 M140 84 C140 100 134 114 126 122" stroke-width="0.8" opacity="0.6"/>`;
const cyrilTaj =
  `<path d="M96 56 C94 22 146 22 144 56" stroke-width="1.6"/><path d="M95 50 H145 M96 44 H144" stroke-width="1.1"/><path d="M120 6 V24 M112 14 H128" stroke-width="1.5"/>` +
  [104, 120, 136].map((x) => `<circle cx="${x}" cy="47" r="1.5" stroke-width="0.8"/>`).join('') +
  `<path d="M144 52 C152 60 152 76 148 84 M96 52 C88 60 88 76 92 84" stroke-width="1.2"/>` +
  `<path d="M98 56 V74 C98 88 108 94 120 94 C132 94 142 88 142 74 V56" stroke-width="1.4"/><path d="M96 78 C90 110 110 128 120 130 C130 128 150 110 144 78" stroke-width="1.5"/>` +
  `<path d="M106 92 C108 106 114 116 120 122 M134 92 C132 106 126 116 120 122" stroke-width="0.8" opacity="0.6"/>`;
const gregoryHead =
  `<path d="M97 70 C92 26 148 26 143 70" stroke-width="1.6"/><path d="M104 40 C114 34 126 34 136 40 M108 48 C116 44 124 44 132 48" stroke-width="0.8" opacity="0.55"/>` +
  `<path d="M97 54 C89 56 89 70 97 72 M143 54 C151 56 151 70 143 72" stroke-width="1.3"/><path d="M98 60 V76 C98 90 108 96 120 96 C132 96 142 90 142 76 V60" stroke-width="1.4"/>` +
  `<path d="M98 76 C100 104 112 110 120 110 C128 110 140 104 142 76" stroke-width="1.5"/><path d="M108 104 C114 108 126 108 132 104 M104 92 C106 100 112 106 116 108 M136 92 C134 100 128 106 124 108" stroke-width="0.8" opacity="0.6"/>`;
const basilHead =
  `<path d="M103 62 C100 30 140 30 137 62" stroke-width="1.6"/><path d="M103 50 C93 64 95 90 104 102 M137 50 C147 64 145 90 136 102" stroke-width="1.4"/>` +
  `<path d="M103 54 V76 C103 88 112 94 120 94 C128 94 137 88 137 76 V54" stroke-width="1.4"/><path d="M103 76 C102 108 112 130 120 144 C128 130 138 108 137 76" stroke-width="1.5"/>` +
  `<path d="M120 100 V136 M112 96 C113 112 117 126 120 136 M128 96 C127 112 123 126 120 136 M107 90 C107 106 112 120 116 130 M133 90 C133 106 128 120 124 130" stroke-width="0.8" opacity="0.6"/>`;
const phelonion =
  `<path d="M30 200 C34 160 72 138 120 142 C168 138 206 160 210 200 M120 142 V200" stroke-width="1.1" opacity="0.8"/><path d="M66 200 C70 176 90 160 108 156 M174 200 C170 176 150 160 132 156" stroke-width="0.9" opacity="0.6"/>`;
const ST = {
  cyril: [
    ['Hood, Gospel and blessing', 'Black Coptic patriarch’s hood with a band of crosses, a full beard, an omophorion with crosses, the Gospel book and a blessing hand.', cyrilHood + neck + omophorion(3) + gospel() + blessing() + hems],
    ['Crown, staff and Theotokos medallion', 'The patriarch’s crown with a cross, the Coptic staff with its two serpent heads, a pectoral cross and a medallion of the Theotokos, since he defended that title.', cyrilTaj + neck + omophorion(2) + pectoral(146) + staff() + medallion(60, 168, 'theotokos') + folds],
    ['Hood, scroll and staff', 'The hood and full beard, an unrolled scroll for his writings, the staff, and an omophorion with large crosses.', cyrilHood + neck + omophorion(3) + scroll(30, 160) + staff(206) + hems],
  ],
  gregory: [
    ['Bare head, Gospel and blessing', 'The high bare head with a few side hairs, a short round beard, an omophorion with crosses, the decorated Gospel book and a blessing hand.', gregoryHead + neck + omophorion(3) + gospel() + blessing() + hems],
    ['Phelonion and scroll', 'The same head, a bishop’s cape (phelonion) with its fold lines, the omophorion and an unrolled scroll.', gregoryHead + neck + phelonion + omophorion(2) + scroll(138, 160) + pectoral(144) + hems],
    ['Trinity medallion and open book', 'Called “the Theologian”: an open book, a medallion with the triangle of the Trinity, and the omophorion with crosses.', gregoryHead + neck + omophorion(3) + openBook() + medallion(60, 168, 'trinity') + folds],
  ],
  basil: [
    ['Open book and blessing', 'The narrow face with side hair and a long pointed beard, the omophorion with crosses, an open book and a blessing hand.', basilHead + neck + omophorion(3) + openBook() + blessing() + hems],
    ['Phelonion and staff', 'The long beard, a bishop’s cape with fold lines, a pectoral cross and a staff.', basilHead + neck + phelonion + omophorion(2) + pectoral(150) + staff() + hems],
    ['Gospel and the church medallion', 'The long beard, the Gospel book, and a medallion of a church for the great works he founded, with the omophorion.', basilHead + neck + omophorion(3) + gospel() + medallion(60, 168, 'church') + folds],
  ],
};
const names = { cyril: 'St. Cyril', gregory: 'St. Gregory', basil: 'St. Basil' };
let html = `<!doctype html><html lang="en"><head><meta charset="utf-8"/><meta name="viewport" content="width=device-width, initial-scale=1"/><title>Holy Mass saints, drawing ideas</title><style>
body{margin:0;padding:2rem 1.5rem 4rem;background:#e6e1d3;font-family:Inter,system-ui,sans-serif;color:#1a2340}h1{font-size:1.4rem;margin:0 0 .3rem}.intro{max-width:62rem;color:#4b5567;margin:0 0 1rem}h2{font-size:1.15rem;margin:2.2rem 0 .6rem}
.row{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:1rem}.card{background:#fffdf8;border:1px solid #ddd5c3;border-top:3px solid #7a5a12;border-radius:6px;padding:1rem 1.2rem 1.2rem}
svg{display:block;width:100%;height:auto;color:#7a5a12}.card h3{margin:.4rem 0 .2rem;font-size:1rem}.card p{margin:0;font-size:.9rem;color:#4b5567}.id{font-weight:700;color:#7a5a12}</style></head><body>
<h1>Holy Mass cards: ideas for the three saints</h1><p class="intro">Three ideas for each saint, still without facial features but with more detail: vestments, crosses, books, staffs and symbols. Tell me which one you want for each saint (for example “Cyril 2, Gregory 1, Basil 3”), or mix details between them.</p>`;
for (const [id, opts] of Object.entries(ST)) {
  html += `<h2>${names[id]}</h2><div class="row">`;
  opts.forEach(([title, text, body], i) => {
    html += `<div class="card"><svg viewBox="0 0 240 200" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">${halo}${shoulders}${body}</svg><h3><span class="id">${names[id].replace('St. ', '')} ${i + 1}</span> · ${title}</h3><p>${text}</p></div>`;
  });
  html += `</div>`;
}
fs.writeFileSync(__dirname + '/holy-mass-saints.html', html + '</body></html>');

module.exports = { cross, halo, shoulders, neck, omophorion, hems, folds, gospel, openBook, scroll, blessing, staff, pectoral, medallion };
