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
const LIBRARY = path.join(ROOT, "source-images/library/Website Photos");
const PORTRAIT = path.join(ROOT, "source-images/portrait.jpg");
const PUBLIC_DIR = path.join(ROOT, "public");
const DATA_DIR = path.join(ROOT, "app/data");

const QUALITY = 88;
const EFFORT = 6;
const REFERENCE_VIEWPORT = 1920;
const PIXEL_RATIO = 2;

const GALLERY_VW = 29;
const WORK_VW = 17;
const FIGURE_VW = 22;
const HOME_VW = [18.75, 12.5, 10.42, 41.67, 16.67, 10.42, 16.67, 25, 33.33, 12.5, 12.5, 12.5, 27.08];
const HOME_VW_MOBILE = [62, 42, 33, 100, 46, 36, 55, 78, 82, 40, 40, 34, 88];

const IMAGE_RE = /\.(jpe?g|tiff?|png)$/i;

const COVERS = {
  "r-miller": "R. Miller Home-052-2-Edit.jpg",
  "personal-work": "Hand Print Scan 3 (5)-Edit.jpg",
};
const HOME_PINNED = ["r-miller", "personal-work"];
const kb = (bytes) => Math.round(bytes / 1024);

const slugify = (value) =>
  value
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const targetWidth = (vw) => Math.ceil((vw / 100) * REFERENCE_VIEWPORT * PIXEL_RATIO);

async function listImages(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  return entries
    .filter((e) => e.isFile() && IMAGE_RE.test(e.name) && !e.name.startsWith("."))
    .map((e) => e.name)
    .sort((a, b) => a.localeCompare(b, "en", { numeric: true }));
}

async function scanLibrary() {
  const clients = (await fs.readdir(LIBRARY, { withFileTypes: true }))
    .filter((e) => e.isDirectory() && !e.name.startsWith("."))
    .map((e) => e.name)
    .sort((a, b) => a.localeCompare(b, "en"));

  const projects = [];
  for (const client of clients) {
    const clientDir = path.join(LIBRARY, client);
    const subs = (await fs.readdir(clientDir, { withFileTypes: true }))
      .filter((e) => e.isDirectory() && !e.name.startsWith("."))
      .map((e) => e.name)
      .sort((a, b) => a.localeCompare(b, "en"));

    const groups = subs.length
      ? subs.map((name) => ({ title: name, dir: path.join(clientDir, name) }))
      : [{ title: client, dir: clientDir }];

    for (const group of groups) {
      const files = await listImages(group.dir);
      if (!files.length) continue;
      const slug =
        group.title === client ? slugify(client) : `${slugify(client)}-${slugify(group.title)}`;

      const cover = COVERS[slug];
      if (cover) {
        const at = files.indexOf(cover);
        if (at === -1) throw new Error(`Cover ${cover} not found in ${group.dir}`);
        files.unshift(...files.splice(at, 1));
      }

      projects.push({
        slug,
        client,
        title: group.title,
        files: files.map((name) => path.relative(LIBRARY, path.join(group.dir, name))),
      });
    }
  }
  return projects;
}

function webpPath(relative, width) {
  const parsed = path.parse(relative);
  return `/media/${slugify(parsed.dir.split(path.sep).join("-"))}/${slugify(parsed.name)}--${width}.webp`;
}

async function convert(from, to, width) {
  const out = path.join(PUBLIC_DIR, to);
  await fs.mkdir(path.dirname(out), { recursive: true });
  const [src, existing] = await Promise.all([fs.stat(from), fs.stat(out).catch(() => null)]);
  if (existing && existing.mtimeMs > src.mtimeMs) {
    const meta = await sharp(out).metadata();
    return { width: meta.width, height: meta.height, bytes: existing.size };
  }
  const info = await sharp(from)
    .resize({ width, withoutEnlargement: true })
    .withIccProfile("srgb")
    .webp({ quality: QUALITY, effort: EFFORT })
    .toFile(out);
  return { width: info.width, height: info.height, bytes: info.size };
}

async function prune(keep) {
  const mediaDir = path.join(PUBLIC_DIR, "media");
  let entries = [];
  try {
    entries = await fs.readdir(mediaDir, { recursive: true, withFileTypes: true });
  } catch {
    return;
  }
  for (const entry of entries) {
    if (entry.isDirectory()) continue;
    const relative = "/" + path.relative(PUBLIC_DIR, path.join(entry.parentPath, entry.name));
    if (!keep.has(relative)) await fs.rm(path.join(entry.parentPath, entry.name));
  }
}

const fmt = (value) => JSON.stringify(value, null, 2).replace(/"([a-z]+)":/g, "$1:");

async function build() {
  if (!(await fs.stat(LIBRARY).catch(() => null))) {
    console.error(
      `No source library at ${path.relative(ROOT, LIBRARY)}.\n` +
        "The committed files in public/media and app/data are unaffected and the site still builds.\n" +
        "Restore the masters there (or point LIBRARY at them) to regenerate images.",
    );
    process.exit(1);
  }
  const projects = await scanLibrary();
  if (!projects.length) throw new Error(`No projects found under ${LIBRARY}`);

  const wanted = new Map();
  const want = (relative, width) => {
    const src = webpPath(relative, width);
    if (!wanted.has(src)) wanted.set(src, { src, from: path.join(LIBRARY, relative), width });
    return src;
  };

  const home = Array.from({ length: 13 }, (_, i) =>
    projects[Math.round((i * (projects.length - 1)) / 12)],
  );
  for (const slug of HOME_PINNED) {
    if (home.some((p) => p.slug === slug)) continue;
    const project = projects.find((p) => p.slug === slug);
    const index = projects.indexOf(project);
    let nearest = 0;
    home.forEach((p, i) => {
      if (Math.abs(projects.indexOf(p) - index) < Math.abs(projects.indexOf(home[nearest]) - index)) {
        nearest = i;
      }
    });
    home[nearest] = project;
  }

  for (const project of projects) {
    for (const file of project.files) want(file, targetWidth(GALLERY_VW));
    want(project.files[0], targetWidth(WORK_VW));
  }
  home.forEach((project, i) => want(project.files[0], targetWidth(HOME_VW[i])));
  const contactProject = projects[projects.length - 1];
  want(contactProject.files[0], targetWidth(FIGURE_VW));
  const portraitSrc = `/media/portrait--608.webp`;
  wanted.set(portraitSrc, { src: portraitSrc, from: PORTRAIT, width: 608 });

  const sizes = new Map();
  let bytes = 0;
  let done = 0;
  for (const item of wanted.values()) {
    const info = await convert(item.from, item.src, item.width);
    sizes.set(item.src, info);
    bytes += info.bytes;
    done += 1;
    if (done % 40 === 0) console.log(`  ${done}/${wanted.size}`);
  }
  await prune(new Set(wanted.keys()));

  const entry = (relative, width, sizesAttr) => {
    const src = webpPath(relative, width);
    const info = sizes.get(src);
    return { src, width: info.width, height: info.height, sizes: sizesAttr };
  };

  const gallerySizes = `(max-width: 767px) 62vw, ${GALLERY_VW}vw`;
  const workSizes = `(max-width: 767px) 45vw, ${WORK_VW}vw`;

  const label = (p) => (p.title === p.client ? p.client : `${p.client}, ${p.title}`);

  const projectData = projects.map((p) => ({
    slug: p.slug,
    client: p.client,
    title: p.title,
    label: label(p),
    images: p.files.map((f) => entry(f, targetWidth(GALLERY_VW), gallerySizes)),
  }));

  const workData = projects.map((p) => ({
    slug: p.slug,
    label: label(p),
    ...entry(p.files[0], targetWidth(WORK_VW), workSizes),
  }));

  const tileData = home.map((p, i) => ({
    slug: p.slug,
    label: label(p),
    ...entry(p.files[0], targetWidth(HOME_VW[i]), `(max-width: 767px) ${HOME_VW_MOBILE[i]}vw, ${HOME_VW[i]}vw`),
  }));

  await fs.writeFile(
    path.join(DATA_DIR, "projects.ts"),
    `export type ProjectImage = {\n  src: string;\n  width: number;\n  height: number;\n  sizes: string;\n};\n\nexport type Project = {\n  slug: string;\n  client: string;\n  title: string;\n  label: string;\n  images: ProjectImage[];\n};\n\nexport const projects: Project[] = ${fmt(projectData)};\n`,
  );
  await fs.writeFile(
    path.join(DATA_DIR, "tiles.ts"),
    `export type Tile = {\n  slug: string;\n  label: string;\n  src: string;\n  width: number;\n  height: number;\n  sizes: string;\n};\n\nexport const tiles: Tile[] = ${fmt(tileData)};\n\nexport const loopCloneCount = 7;\n`,
  );
  await fs.writeFile(
    path.join(DATA_DIR, "work.ts"),
    `import type { Tile } from "./tiles";\n\nexport const workTiles: Tile[] = ${fmt(workData)};\n`,
  );

  const figure = (src, sizesAttr) => {
    const info = sizes.get(src);
    return { src, width: info.width, height: info.height, sizes: sizesAttr };
  };
  const figureSizes = `(max-width: 767px) 62vw, ${FIGURE_VW}vw`;
  await fs.writeFile(
    path.join(DATA_DIR, "figures.ts"),
    `export type Figure = {\n  src: string;\n  width: number;\n  height: number;\n  sizes: string;\n};\n\nexport const portrait: Figure = ${fmt(figure(portraitSrc, figureSizes))};\n\nexport const contactFigure: Figure = ${fmt(figure(webpPath(contactProject.files[0], targetWidth(FIGURE_VW)), figureSizes))};\n`,
  );

  console.log(
    `\n${projects.length} projects, ${wanted.size} webp variants, ${kb(bytes)}KB served`,
  );
}

build().catch((error) => {
  console.error(error);
  process.exit(1);
});
