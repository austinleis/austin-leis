import fs from "node:fs/promises";
import path from "node:path";

let sharp;
try {
  sharp = (await import("sharp")).default;
} catch {
  console.error("sharp could not be resolved. It normally ships with next; otherwise: npm i -D sharp");
  process.exit(1);
}

const ROOT = process.cwd();
const SOURCE_DIR = path.join(ROOT, "source-images");
const PUBLIC_DIR = path.join(ROOT, "public");
const TILES_FILE = path.join(ROOT, "app/data/tiles.ts");

const REFERENCE_VIEWPORT = 1920;
const PIXEL_RATIO = 2;
const QUALITY = 78;

const kb = (bytes) => Math.round(bytes / 1024);

async function readTiles() {
  const source = await fs.readFile(TILES_FILE, "utf8");
  const pattern = /src: "([^"]+)"[\s\S]*?sizes: "[^"]*?([\d.]+)vw"/g;
  const tiles = [...source.matchAll(pattern)].map(([, src, vw]) => ({
    src,
    widest: Math.ceil((Number(vw) / 100) * REFERENCE_VIEWPORT * PIXEL_RATIO),
  }));
  if (!tiles.length) throw new Error(`No tiles parsed from ${TILES_FILE}`);
  return tiles;
}

async function build() {
  const tiles = await readTiles();
  let before = 0;
  let after = 0;

  for (const tile of tiles) {
    const from = path.join(SOURCE_DIR, tile.src);
    const to = path.join(PUBLIC_DIR, tile.src);
    const original = await sharp(from);
    const { width: sourceWidth } = await original.metadata();
    const target = Math.min(sourceWidth, tile.widest);

    await fs.mkdir(path.dirname(to), { recursive: true });
    await sharp(from)
      .resize({ width: target, withoutEnlargement: true })
      .jpeg({ quality: QUALITY, mozjpeg: true, progressive: true })
      .toFile(to);

    const [src, out] = await Promise.all([fs.stat(from), fs.stat(to)]);
    before += src.size;
    after += out.size;
    console.log(`${tile.src}\n  ${sourceWidth}px ${kb(src.size)}KB -> ${target}px ${kb(out.size)}KB`);
  }

  console.log(`\n${tiles.length} images: ${kb(before)}KB -> ${kb(after)}KB`);
}

build().catch((error) => {
  console.error(error);
  process.exit(1);
});
