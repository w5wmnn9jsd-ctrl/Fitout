// Generates flat-design SVG placeholder illustrations for the gallery/hero.
// Run with: node scripts/generate-placeholders.mjs
import { writeFileSync, mkdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "..", "public", "images", "gallery");
mkdirSync(outDir, { recursive: true });

const W = 800;
const H = 600;

function rect(x, y, w, h, fill, extra = "") {
  return `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${fill}" ${extra} />`;
}

function scene({ id, wall, wallShade, floor, floorShade, accentDark, furniture }) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}">
  <defs>
    <linearGradient id="wall-${id}" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${wall}" />
      <stop offset="100%" stop-color="${wallShade}" />
    </linearGradient>
    <linearGradient id="floor-${id}" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${floorShade}" />
      <stop offset="100%" stop-color="${floor}" />
    </linearGradient>
    <radialGradient id="glow-${id}" cx="50%" cy="0%" r="75%">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.35" />
      <stop offset="100%" stop-color="#ffffff" stop-opacity="0" />
    </radialGradient>
  </defs>
  ${rect(0, 0, W, H * 0.62, `url(#wall-${id})`)}
  ${rect(0, H * 0.62, W, H * 0.38, `url(#floor-${id})`)}
  <rect x="0" y="0" width="${W}" height="${H}" fill="url(#glow-${id})" />
  ${furniture}
  <rect x="0" y="0" width="${W}" height="${H}" fill="${accentDark}" opacity="0.04" />
</svg>`;
}

function window_(x, y, w, h, frame, glass) {
  return `
  <rect x="${x - 8}" y="${y - 8}" width="${w + 16}" height="${h + 16}" rx="4" fill="${frame}" />
  <rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${glass}" />
  <rect x="${x + w / 2 - 3}" y="${y}" width="6" height="${h}" fill="${frame}" />
  <rect x="${x}" y="${y + h / 2 - 3}" width="${w}" height="6" fill="${frame}" />`;
}

function sofa(x, y, w, h, color, dark) {
  return `
  <rect x="${x}" y="${y + h * 0.35}" width="${w}" height="${h * 0.65}" rx="18" fill="${color}" />
  <rect x="${x}" y="${y}" width="${w}" height="${h * 0.55}" rx="16" fill="${color}" />
  <rect x="${x - 14}" y="${y}" width="26" height="${h}" rx="12" fill="${dark}" />
  <rect x="${x + w - 12}" y="${y}" width="26" height="${h}" rx="12" fill="${dark}" />
  <rect x="${x + 18}" y="${y + h * 0.42}" width="${w * 0.28}" height="${h * 0.4}" rx="10" fill="${dark}" opacity="0.5" />
  <rect x="${x + w * 0.55}" y="${y + h * 0.42}" width="${w * 0.28}" height="${h * 0.4}" rx="10" fill="${dark}" opacity="0.5" />`;
}

function table(x, y, w, h, color) {
  return `
  <rect x="${x}" y="${y}" width="${w}" height="${h * 0.18}" rx="6" fill="${color}" />
  <rect x="${x + 8}" y="${y + h * 0.18}" width="10" height="${h * 0.75}" fill="${color}" opacity="0.85" />
  <rect x="${x + w - 18}" y="${y + h * 0.18}" width="10" height="${h * 0.75}" fill="${color}" opacity="0.85" />`;
}

function cabinetRun(x, y, w, h, color, dark) {
  const doors = 4;
  const dw = w / doors;
  let doorsSvg = "";
  for (let i = 0; i < doors; i++) {
    doorsSvg += rect(x + i * dw + 4, y + 8, dw - 8, h - 16, i % 2 === 0 ? color : dark, 'rx="4"');
  }
  return `${rect(x, y, w, h, dark, 'rx="8"')}${doorsSvg}`;
}

function pendant(cx, y1, y2, color) {
  return `
  <line x1="${cx}" y1="${y1}" x2="${cx}" y2="${y2}" stroke="${color}" stroke-width="3" />
  <ellipse cx="${cx}" cy="${y2 + 14}" rx="34" ry="18" fill="${color}" />`;
}

function plant(x, y, color, potColor) {
  return `
  <path d="M ${x} ${y} q -30 -70 -50 -110 q 40 20 55 70 q 10 -70 40 -100 q 5 55 -10 110 q 35 -50 70 -55 q -25 45 -70 65 z" fill="${color}" />
  <rect x="${x - 22}" y="${y}" width="44" height="34" rx="6" fill="${potColor}" />`;
}

function rug(x, y, w, h, color) {
  return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="10" fill="${color}" opacity="0.55" />`;
}

function bed(x, y, w, h, color, dark) {
  return `
  ${rect(x - 10, y - 40, 26, h + 40, dark, 'rx="8"')}
  ${rect(x + w - 16, y - 40, 26, h + 40, dark, 'rx="8"')}
  ${rect(x, y, w, h, color, 'rx="14"')}
  ${rect(x + 16, y + 10, w * 0.32, h * 0.4, "#ffffff", 'rx="8" opacity="0.85"')}
  ${rect(x + w * 0.55, y + 10, w * 0.32, h * 0.4, "#ffffff", 'rx="8" opacity="0.85"')}`;
}

function desk(x, y, w, h, color, dark) {
  return `
  ${rect(x, y, w, h * 0.16, color, 'rx="4"')}
  ${rect(x + 10, y + h * 0.16, 10, h * 0.8, dark)}
  ${rect(x + w - 20, y + h * 0.16, 10, h * 0.8, dark)}
  ${rect(x + w * 0.55, y - 60, 60, 44, "#2b2725", 'rx="4"')}`;
}

const scenes = [
  {
    file: "kitchen-fitout.svg",
    id: "k1",
    wall: "#EFE6D8",
    wallShade: "#E3D5BE",
    floor: "#B08968",
    floorShade: "#C9A17E",
    accent: "#C4693B",
    accentDark: "#7C4A2D",
    furniture:
      window_(560, 60, 170, 190, "#7C4A2D", "#F7EFE1") +
      cabinetRun(60, 300, 640, 130, "#E8DCC8", "#8C6A4A") +
      rect(300, 250, 200, 60, "#C4693B", 'rx="6"') +
      pendant(150, 0, 140, "#7C4A2D") +
      pendant(230, 0, 160, "#7C4A2D"),
  },
  {
    file: "living-room-renovation.svg",
    id: "l1",
    wall: "#F3EFE7",
    wallShade: "#E6DECD",
    floor: "#A9764E",
    floorShade: "#C79868",
    accent: "#7C8B6F",
    accentDark: "#4B5A40",
    furniture:
      window_(80, 60, 220, 220, "#4B5A40", "#F7F5EE") +
      rug(240, 430, 400, 130, "#C79868") +
      sofa(260, 330, 320, 130, "#7C8B6F", "#4B5A40") +
      table(430, 470, 140, 40, "#5B4636") +
      plant(680, 470, "#5C7A52", "#4B5A40"),
  },
  {
    file: "home-office-studio.svg",
    id: "o1",
    wall: "#E9EEF1",
    wallShade: "#D6E0E6",
    floor: "#8C6A4A",
    floorShade: "#A9825C",
    accent: "#3C4A5B",
    accentDark: "#232E3B",
    furniture:
      window_(500, 60, 220, 200, "#232E3B", "#EEF3F6") +
      desk(120, 380, 320, 120, "#5B4636", "#232E3B") +
      rect(150, 470, 60, 90, "#3C4A5B", 'rx="10"') +
      plant(620, 460, "#5C7A52", "#232E3B"),
  },
  {
    file: "bathroom-refit.svg",
    id: "b1",
    wall: "#E5EEEC",
    wallShade: "#CFE1DD",
    floor: "#BFC9C7",
    floorShade: "#D6DEDC",
    accent: "#3C4A5B",
    accentDark: "#233038",
    furniture:
      window_(600, 70, 130, 130, "#233038", "#F2F8F6") +
      rect(80, 320, 260, 140, "#FFFFFF", 'rx="16"') +
      rect(80, 320, 260, 30, "#CFE1DD", 'rx="16"') +
      rect(420, 260, 140, 220, "#FFFFFF", 'rx="70"') +
      rect(420, 260, 140, 40, "#CFE1DD", 'rx="70"') +
      rect(620, 300, 90, 160, "#3C4A5B", 'rx="8"'),
  },
  {
    file: "master-bedroom.svg",
    id: "bd1",
    wall: "#F1E9E4",
    wallShade: "#E3D2C7",
    floor: "#9C7250",
    floorShade: "#BB9068",
    accent: "#C4693B",
    accentDark: "#7C4A2D",
    furniture:
      window_(560, 60, 170, 210, "#7C4A2D", "#FBF3E8") +
      rug(120, 470, 300, 100, "#E3D2C7") +
      bed(140, 340, 300, 150, "#EFE1D2", "#7C4A2D") +
      pendant(560, 0, 120, "#7C4A2D") +
      plant(670, 470, "#5C7A52", "#7C4A2D"),
  },
  {
    file: "boutique-retail.svg",
    id: "r1",
    wall: "#F5EFE6",
    wallShade: "#E8DCC8",
    floor: "#3B342C",
    floorShade: "#544A3E",
    accent: "#C4693B",
    accentDark: "#2B2725",
    furniture:
      window_(60, 50, 680, 230, "#2B2725", "#FBF6EC") +
      cabinetRun(60, 340, 300, 150, "#E8DCC8", "#2B2725") +
      cabinetRun(440, 340, 300, 150, "#E8DCC8", "#2B2725") +
      pendant(240, 280, 340, "#2B2725") +
      pendant(560, 280, 340, "#2B2725"),
  },
  {
    file: "reception-lobby.svg",
    id: "rc1",
    wall: "#EDEAE4",
    wallShade: "#DCD5C8",
    floor: "#5B4636",
    floorShade: "#7A5F45",
    accent: "#3C4A5B",
    accentDark: "#232E3B",
    furniture:
      window_(80, 60, 260, 220, "#232E3B", "#F4F6F7") +
      table(400, 330, 260, 40, "#232E3B") +
      rect(430, 260, 40, 80, "#3C4A5B", 'rx="6"') +
      rect(500, 240, 40, 100, "#C4693B", 'rx="6"') +
      rect(570, 270, 40, 70, "#3C4A5B", 'rx="6"') +
      plant(700, 470, "#5C7A52", "#232E3B"),
  },
  {
    file: "rooftop-lounge.svg",
    id: "ro1",
    wall: "#DCEBF2",
    wallShade: "#BFDCE8",
    floor: "#8C6A4A",
    floorShade: "#A9825C",
    accent: "#7C8B6F",
    accentDark: "#4B5A40",
    furniture:
      rect(0, 0, 800, 340, "#CFE6F0") +
      rect(0, 0, 800, 340, "#ffffff", 'opacity="0.18"') +
      sofa(120, 350, 260, 120, "#4B5A40", "#2E3A27") +
      sofa(430, 350, 260, 120, "#4B5A40", "#2E3A27") +
      table(340, 460, 130, 30, "#5B4636") +
      plant(720, 470, "#5C7A52", "#2E3A27") +
      plant(50, 470, "#5C7A52", "#2E3A27"),
  },
];

for (const s of scenes) {
  const svg = scene(s);
  writeFileSync(path.join(outDir, s.file), svg, "utf8");
  console.log("wrote", s.file);
}

// Hero image - wide banner
const heroSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" width="1600" height="900">
  <defs>
    <linearGradient id="hero-wall" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#F3EFE7" />
      <stop offset="100%" stop-color="#E3D2C7" />
    </linearGradient>
    <linearGradient id="hero-floor" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#B08968" />
      <stop offset="100%" stop-color="#8C6A4A" />
    </linearGradient>
    <radialGradient id="hero-glow" cx="30%" cy="10%" r="80%">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.4" />
      <stop offset="100%" stop-color="#ffffff" stop-opacity="0" />
    </radialGradient>
  </defs>
  <rect x="0" y="0" width="1600" height="560" fill="url(#hero-wall)" />
  <rect x="0" y="560" width="1600" height="340" fill="url(#hero-floor)" />
  <rect x="0" y="0" width="1600" height="900" fill="url(#hero-glow)" />
  ${window_(1120, 90, 380, 380, "#7C4A2D", "#FBF3E8")}
  ${rug(140, 660, 760, 190, "#E3D2C7")}
  ${sofa(180, 500, 560, 220, "#7C8B6F", "#4B5A40")}
  ${table(500, 720, 260, 60, "#5B4636")}
  ${plant(980, 690, "#5C7A52", "#4B5A40")}
  ${pendant(300, 0, 220, "#7C4A2D")}
  ${pendant(420, 0, 260, "#7C4A2D")}
</svg>`;
writeFileSync(path.join(outDir, "..", "hero.svg"), heroSvg, "utf8");
console.log("wrote hero.svg");

// About image
const aboutSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 700" width="900" height="700">
  <defs>
    <linearGradient id="about-wall" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#EDEAE4" />
      <stop offset="100%" stop-color="#DCD5C8" />
    </linearGradient>
    <linearGradient id="about-floor" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#7A5F45" />
      <stop offset="100%" stop-color="#5B4636" />
    </linearGradient>
  </defs>
  <rect x="0" y="0" width="900" height="440" fill="url(#about-wall)" />
  <rect x="0" y="440" width="900" height="260" fill="url(#about-floor)" />
  ${window_(560, 60, 260, 260, "#232E3B", "#F4F6F7")}
  ${desk(100, 420, 340, 130, "#5B4636", "#232E3B")}
  ${rect(140, 500, 60, 90, "#3C4A5B", 'rx="10"')}
  ${plant(720, 500, "#5C7A52", "#232E3B")}
</svg>`;
writeFileSync(path.join(outDir, "..", "about.svg"), aboutSvg, "utf8");
console.log("wrote about.svg");
