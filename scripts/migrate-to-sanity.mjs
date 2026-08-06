import fs from "node:fs/promises";
import path from "node:path";
import { createClient } from "@sanity/client";
import { projects } from "../app/data/projects.ts";
import { publications, clients } from "../app/data/info.ts";

const ROOT = process.cwd();
const PUBLIC_DIR = path.join(ROOT, "public");
const BATCH = 5;

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const token = process.env.SANITY_API_READ_TOKEN;

if (!projectId || !token) {
  console.error("Missing NEXT_PUBLIC_SANITY_PROJECT_ID or SANITY_API_READ_TOKEN in .env.local");
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  token,
  apiVersion: "2024-10-01",
  useCdn: false,
});

async function largestVariant(src) {
  const parsed = path.parse(src);
  const [base] = parsed.name.split("--");
  const dir = path.join(PUBLIC_DIR, parsed.dir);
  const files = await fs.readdir(dir);
  let best = null;
  for (const file of files) {
    if (!file.startsWith(`${base}--`) || !file.endsWith(".webp")) continue;
    const width = Number(file.slice(file.lastIndexOf("--") + 2, -5));
    if (!best || width > best.width) best = { width, file: path.join(dir, file) };
  }
  if (!best) throw new Error(`No variant found for ${src}`);
  return best.file;
}

const uploaded = new Map();

async function uploadOnce(src) {
  if (uploaded.has(src)) return uploaded.get(src);
  const file = await largestVariant(src);
  const asset = await client.assets.upload("image", await fs.readFile(file), {
    filename: path.basename(file),
  });
  uploaded.set(src, asset._id);
  return asset._id;
}

async function run() {
  const existing = await client.fetch(`count(*[_type == "project"])`);
  if (existing > 0) {
    console.error(`${existing} project documents already exist. Refusing to duplicate.`);
    console.error("Delete them in the Studio first if you want to re-run this migration.");
    process.exit(1);
  }

  const total = projects.reduce((n, p) => n + p.images.length, 0);
  let done = 0;

  for (const [index, project] of projects.entries()) {
    const ids = [];
    for (let i = 0; i < project.images.length; i += BATCH) {
      const slice = project.images.slice(i, i + BATCH);
      const batch = await Promise.all(slice.map((image) => uploadOnce(image.src)));
      ids.push(...batch);
      done += slice.length;
      process.stdout.write(`\r  uploading ${done}/${total}`);
    }

    await client.createOrReplace({
      _id: `project.${project.slug}`,
      _type: "project",
      client: project.client,
      title: project.title === project.client ? undefined : project.title,
      slug: { _type: "slug", current: project.slug },
      featured: false,
      order: (index + 1) * 10,
      images: ids.map((id, i) => ({
        _key: `${project.slug}-${i}`,
        _type: "image",
        asset: { _type: "reference", _ref: id },
      })),
    });
  }
  console.log();

  const portrait = await uploadOnce("/media/portrait--608.webp");
  const contactImage = await uploadOnce(projects[projects.length - 1].images[0].src);

  const paragraph = (text, key) => ({
    _key: key,
    _type: "block",
    children: [{ _key: `${key}-0`, _type: "span", text }],
  });

  await client.createOrReplace({
    _id: "siteSettings",
    _type: "siteSettings",
    siteTitle: "Austin Leis",
    description: "Austin Leis is a photographer based in Los Angeles.",
    instagram: "https://www.instagram.com/",
    infoBody: [
      paragraph(
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "info-1",
      ),
      paragraph(
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        "info-2",
      ),
    ],
    portrait: { _type: "image", asset: { _type: "reference", _ref: portrait } },
    publications,
    clients,
    contactBody: [
      paragraph(
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
        "contact-1",
      ),
    ],
    email: "austin@austinleis.com",
    location: "Los Angeles, California",
    contactImage: { _type: "image", asset: { _type: "reference", _ref: contactImage } },
  });

  console.log(`\n${projects.length} projects, ${uploaded.size} images, site settings created.`);
}

run().catch((error) => {
  console.error("\n", error.message);
  process.exit(1);
});
