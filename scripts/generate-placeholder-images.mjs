// Generates a cohesive set of abstract, editorial-toned SVG "photography"
// placeholders so the site renders fully without any external image CDN.
// Swap any file under /public/images with real photography — file names
// and dimensions are referenced directly from /data, nothing else to update.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC = join(__dirname, "..", "public", "images");

// --- deterministic PRNG so each named scene is stable across runs ---
function seedFromString(str) {
  let h = 1779033703 ^ str.length;
  for (let i = 0; i < str.length; i++) {
    h = Math.imul(h ^ str.charCodeAt(i), 3432918353);
    h = (h << 13) | (h >>> 19);
  }
  return () => {
    h = Math.imul(h ^ (h >>> 16), 2246822507);
    h = Math.imul(h ^ (h >>> 13), 3266489909);
    h ^= h >>> 16;
    return (h >>> 0) / 4294967296;
  };
}

// StayHaus brand palette: Powder Blue #8FB7C9, Warm Cream #F7F3EA,
// Mist #D5E1E3, Camel #B99D7B, Soft Charcoal #4A4B48.
const PALETTES = [
  { name: "powder", stops: ["#F7F3EA", "#C7DCE4", "#8FB7C9"], line: "#4A4B48", deep: "#2E2F2C" },
  { name: "mist", stops: ["#F7F3EA", "#D5E1E3", "#4F7A8C"], line: "#4A4B48", deep: "#2E2F2C" },
  { name: "camel", stops: ["#EFE7D5", "#B99D7B", "#7D5F3E"], line: "#3A2E1E", deep: "#241C12" },
  { name: "charcoal", stops: ["#D5E1E3", "#8FB7C9", "#4A4B48"], line: "#2E2F2C", deep: "#1E1F1C" },
  { name: "dune", stops: ["#F7F3EA", "#D5E1E3", "#B99D7B"], line: "#4A4B48", deep: "#2E2F2C" },
];

function paletteFor(seed) {
  const r = seedFromString(seed)();
  return PALETTES[Math.floor(r * PALETTES.length)];
}

function clamp(n, min, max) {
  return Math.min(max, Math.max(min, n));
}

// Composes one abstract "photographic" scene: gradient field, a soft light
// glow, a horizon/floor band, and one of a few restrained architectural
// line motifs. Intentionally non-literal — no icons, no clipart.
function scene({ seed, width, height, motif }) {
  const rand = seedFromString(seed);
  const palette = paletteFor(seed);
  const [c1, c2, c3] = palette.stops;
  const glowX = clamp(rand() * width, width * 0.15, width * 0.85);
  const glowY = clamp(rand() * height * 0.55, height * 0.08, height * 0.5);
  const glowR = width * (0.35 + rand() * 0.25);
  const horizonY = height * (0.58 + rand() * 0.14);
  const gradAngle = Math.floor(rand() * 360);
  const uid = seed.replace(/[^a-zA-Z0-9]/g, "");

  const motifs = {
    arch: `
      <g opacity="0.16" stroke="${palette.line}" stroke-width="2" fill="none">
        <path d="M ${width * 0.32} ${height} L ${width * 0.32} ${height * 0.5} A ${width * 0.18} ${width * 0.18} 0 0 1 ${width * 0.68} ${height * 0.5} L ${width * 0.68} ${height}" />
      </g>`,
    mullion: `
      <g opacity="0.14" stroke="${palette.line}" stroke-width="2">
        <line x1="${width * 0.5}" y1="${height * 0.12}" x2="${width * 0.5}" y2="${height * 0.88}" />
        <line x1="${width * 0.18}" y1="${height * 0.5}" x2="${width * 0.82}" y2="${height * 0.5}" />
      </g>`,
    louver: `
      <g opacity="0.13" stroke="${palette.line}" stroke-width="2">
        ${Array.from({ length: 6 }, (_, i) => {
          const y = height * (0.22 + i * 0.09);
          return `<line x1="${width * 0.12}" y1="${y}" x2="${width * 0.88}" y2="${y - height * 0.05}" />`;
        }).join("")}
      </g>`,
    horizon: `
      <g opacity="0.15" stroke="${palette.line}" stroke-width="2" fill="none">
        <path d="M 0 ${horizonY - height * 0.08} Q ${width * 0.5} ${horizonY - height * 0.14} ${width} ${horizonY - height * 0.08}" />
      </g>`,
    frond: `
      <g opacity="0.14" stroke="${palette.line}" stroke-width="2" fill="none" stroke-linecap="round">
        ${Array.from({ length: 5 }, (_, i) => {
          const a = (-40 + i * 20) * (Math.PI / 180);
          const x2 = width * 0.5 + Math.cos(a) * width * 0.32;
          const y2 = height * 0.35 + Math.sin(a) * width * 0.32;
          return `<path d="M ${width * 0.5} ${height * 0.35} Q ${(width * 0.5 + x2) / 2} ${height * 0.15} ${x2} ${y2}" />`;
        }).join("")}
      </g>`,
  };

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" role="img" aria-label="StayHaus placeholder imagery">
  <defs>
    <linearGradient id="bg-${uid}" gradientTransform="rotate(${gradAngle} 0.5 0.5)">
      <stop offset="0%" stop-color="${c1}" />
      <stop offset="55%" stop-color="${c2}" />
      <stop offset="100%" stop-color="${c3}" />
    </linearGradient>
    <radialGradient id="glow-${uid}" cx="${(glowX / width) * 100}%" cy="${(glowY / height) * 100}%" r="60%">
      <stop offset="0%" stop-color="#FFFDF8" stop-opacity="0.55" />
      <stop offset="100%" stop-color="#FFFDF8" stop-opacity="0" />
    </radialGradient>
    <linearGradient id="floor-${uid}" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${palette.deep}" stop-opacity="0" />
      <stop offset="100%" stop-color="${palette.deep}" stop-opacity="0.4" />
    </linearGradient>
    <radialGradient id="vig-${uid}" cx="50%" cy="45%" r="75%">
      <stop offset="60%" stop-color="#000000" stop-opacity="0" />
      <stop offset="100%" stop-color="#000000" stop-opacity="0.18" />
    </radialGradient>
    <filter id="grain-${uid}">
      <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" result="noise" />
      <feColorMatrix in="noise" type="saturate" values="0" />
      <feComponentTransfer><feFuncA type="linear" slope="0.05" /></feComponentTransfer>
      <feComposite operator="over" in2="SourceGraphic" />
    </filter>
  </defs>
  <rect width="${width}" height="${height}" fill="url(#bg-${uid})" />
  <rect width="${width}" height="${height}" fill="url(#glow-${uid})" />
  ${motifs[motif] ?? motifs.horizon}
  <rect y="${horizonY}" width="${width}" height="${height - horizonY}" fill="url(#floor-${uid})" />
  <rect width="${width}" height="${height}" fill="url(#vig-${uid})" />
  <rect width="${width}" height="${height}" filter="url(#grain-${uid})" opacity="0.5" />
</svg>`;
}

function write(path, svg) {
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, svg, "utf8");
}

const MOTIFS = ["arch", "mullion", "louver", "horizon", "frond"];

// --- destinations (16:10) ---
const destinationSlugs = [
  "st-petersburg",
  "clearwater-beach",
  "sarasota",
  "tampa",
  "naples",
  "miami",
  "orlando",
];
destinationSlugs.forEach((slug, i) => {
  const svg = scene({ seed: `destination-${slug}`, width: 1600, height: 1000, motif: MOTIFS[i % MOTIFS.length] });
  write(join(PUBLIC, "destinations", `${slug}.svg`), svg);
});

// --- properties (4:3 gallery images, 5 per property) ---
const propertySlugs = [
  "the-kenwood-loft",
  "casa-coquina",
  "the-sandbar-house",
  "moonrise-cabana",
  "bayfront-modern",
  "the-grove-house",
  "hyde-park-flat",
  "the-riverwalk-suite",
];
propertySlugs.forEach((slug) => {
  for (let i = 1; i <= 5; i++) {
    const svg = scene({
      seed: `property-${slug}-${i}`,
      width: 1600,
      height: 1200,
      motif: MOTIFS[(slug.length + i) % MOTIFS.length],
    });
    write(join(PUBLIC, "properties", slug, `${i}.svg`), svg);
  }
});

// --- guide heroes (21:9 wide editorial) ---
destinationSlugs
  .filter((s) => ["st-petersburg", "clearwater-beach", "sarasota", "tampa"].includes(s))
  .forEach((slug, i) => {
    const svg = scene({ seed: `guide-${slug}`, width: 2000, height: 900, motif: MOTIFS[(i + 2) % MOTIFS.length] });
    write(join(PUBLIC, "guides", `${slug}-hero.svg`), svg);
  });

// --- misc marketing imagery ---
const misc = [
  { seed: "home-hero", file: "home/hero.svg", w: 2400, h: 1350, motif: "horizon" },
  { seed: "home-intro", file: "home/intro.svg", w: 1600, h: 2000, motif: "mullion" },
  { seed: "home-differentiators", file: "home/differentiators.svg", w: 1600, h: 1200, motif: "arch" },
  { seed: "about-hero", file: "about/hero.svg", w: 2400, h: 1200, motif: "frond" },
  { seed: "about-story-1", file: "about/story-1.svg", w: 1400, h: 1750, motif: "mullion" },
  { seed: "about-story-2", file: "about/story-2.svg", w: 1400, h: 1750, motif: "arch" },
  { seed: "about-standards", file: "about/standards.svg", w: 1600, h: 1000, motif: "louver" },
  { seed: "partner-hero", file: "partner/hero.svg", w: 2400, h: 1200, motif: "louver" },
  { seed: "partner-portfolio", file: "partner/portfolio.svg", w: 1600, h: 1200, motif: "horizon" },
  { seed: "explore-hero", file: "explore/hero.svg", w: 2400, h: 1100, motif: "frond" },
  { seed: "og-cover", file: "og/cover.svg", w: 1200, h: 630, motif: "horizon" },
];
misc.forEach(({ seed, file, w, h, motif }) => {
  write(join(PUBLIC, file), scene({ seed, width: w, height: h, motif }));
});

console.log(`Generated placeholder imagery for ${destinationSlugs.length} destinations, ${propertySlugs.length} properties (x5), 4 guides, and ${misc.length} marketing images.`);
