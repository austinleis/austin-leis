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
const DATA_DIR = path.join(ROOT, "app/data");
const QUALITY = 78;

const kb = (bytes) => Math.round(bytes / 1024);

async function readTiles() {
  const files = (await fs.readdir(DATA_DIR)).filter((name) => name.endsWith(".ts"));
  const wanted = new Map();

  for (const file of files) {
    const source = await fs.readFile(path.join(DATA_DIR, file), "utf8");
    for (const [, src] of source.matchAll(/src: "([^"]+)"/g)) {
      const match = src.match(/^(.*)--(\d+)\.jpg$/);
      if (!match) throw new Error(`${src} is missing its --<width> variant suffix`);
      wanted.set(src, { src, from: `${match[1]}.jpg`, width: Number(match[2]) });
    }
  }

  if (!wanted.size) throw new Error(`No tiles parsed from ${DATA_DIR}`);
  return [...wanted.values()];
}

async function removeStale(keep) {
  const entries = await fs.readdir(PUBLIC_DIR, { recursive: true, withFileTypes: true });
  for (const entry of entries) {
    if (entry.isDirectory() || !entry.name.endsWith(".jpg")) continue;
    const relative = "/" + path.relative(PUBLIC_DIR, path.join(entry.parentPath, entry.name));
    if (!keep.has(relative)) {
      await fs.rm(path.join(entry.parentPath, entry.name));
      console.log(`removed stale ${relative}`);
    }
  }
}

async function build() {
  const tiles = await readTiles();
  let before = 0;
  let after = 0;

  for (const tile of tiles) {
    const from = path.join(SOURCE_DIR, tile.from);
    const to = path.join(PUBLIC_DIR, tile.src);

    await fs.mkdir(path.dirname(to), { recursive: true });
    await sharp(from)
      .resize({ width: tile.width, withoutEnlargement: true })
      .jpeg({ quality: QUALITY, mozjpeg: true, progressive: true })
      .toFile(to);

    const [source, output] = await Promise.all([fs.stat(from), fs.stat(to)]);
    before += source.size;
    after += output.size;
  }

  await removeStale(new Set(tiles.map((tile) => tile.src)));
  console.log(`${tiles.length} variants: ${kb(before)}KB of sources -> ${kb(after)}KB served`);
}

build().catch((error) => {
  console.error(error);
  process.exit(1);
});
