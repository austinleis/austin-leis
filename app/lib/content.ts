import type { SanityImageSource } from "@sanity/image-url";
import { client, croppedImage, fullImage } from "@/app/lib/sanity";

const REFERENCE_VIEWPORT = 1920;
const PIXEL_RATIO = 2;
const at = (vw: number) => Math.ceil((vw / 100) * REFERENCE_VIEWPORT * PIXEL_RATIO);

const GALLERY_VW = 29;
const WORK_VW = 17;
const FIGURE_VW = 22;
const HOME_VW = [18.75, 12.5, 10.42, 41.67, 16.67, 10.42, 16.67, 25, 33.33, 12.5, 12.5, 12.5, 27.08];
const HOME_VW_MOBILE = [62, 42, 33, 100, 46, 36, 55, 78, 82, 40, 40, 34, 88];

type RawImage = SanityImageSource & {
  asset: { metadata?: { dimensions?: { aspectRatio: number } } };
};

type RawProject = {
  slug: string;
  client: string;
  title: string | null;
  featured: boolean;
  images: RawImage[];
};

export type Tile = {
  slug: string;
  label: string;
  src: string;
  width: number;
  height: number;
  sizes: string;
};

export type ProjectImage = { src: string; width: number; height: number; sizes: string };

export type Project = {
  slug: string;
  client: string;
  title: string;
  label: string;
  images: ProjectImage[];
};

const PROJECT_QUERY = `*[_type == "project" && defined(slug.current) && count(images) > 0]
  | order(orderRank asc) {
    "slug": slug.current,
    client,
    title,
    featured,
    images[]{ ..., asset->{ _id, metadata { dimensions } } }
  }`;

const SETTINGS_QUERY = `*[_id == "siteSettings"][0]{
  siteTitle, description, instagram, email, location,
  publications, clients,
  "infoBody": infoBody[].children[].text,
  "contactBody": contactBody[].children[].text,
  portrait{ ..., asset->{ _id, metadata { dimensions } } },
  contactImage{ ..., asset->{ _id, metadata { dimensions } } }
}`;

const label = (project: RawProject) =>
  !project.title || project.title === project.client
    ? project.client
    : `${project.client}, ${project.title}`;

let cache: RawProject[] | null = null;

async function rawProjects() {
  cache ??= await client.fetch<RawProject[]>(PROJECT_QUERY);
  if (!cache.length) throw new Error("No projects found in Sanity");
  return cache;
}

export async function getProjects(): Promise<Project[]> {
  const projects = await rawProjects();
  const sizes = `(max-width: 767px) 62vw, ${GALLERY_VW}vw`;
  return projects.map((project) => ({
    slug: project.slug,
    client: project.client,
    title: project.title ?? project.client,
    label: label(project),
    images: project.images.map((image) => ({
      ...fullImage(image, at(GALLERY_VW), image.asset.metadata?.dimensions?.aspectRatio ?? 0.8),
      sizes,
    })),
  }));
}

export async function getWorkTiles(): Promise<Tile[]> {
  const projects = await rawProjects();
  const sizes = `(max-width: 767px) 45vw, ${WORK_VW}vw`;
  return projects.map((project) => ({
    slug: project.slug,
    label: label(project),
    ...croppedImage(project.images[0], at(WORK_VW)),
    sizes,
  }));
}

export async function getHomeTiles(): Promise<Tile[]> {
  const projects = await rawProjects();
  const featured = projects.filter((project) => project.featured);
  const pool = featured.length >= HOME_VW.length ? featured : projects;
  const chosen = Array.from({ length: HOME_VW.length }, (_, i) =>
    featured.length >= HOME_VW.length
      ? pool[i]
      : pool[Math.round((i * (pool.length - 1)) / (HOME_VW.length - 1))],
  );

  return chosen.map((project, i) => ({
    slug: project.slug,
    label: label(project),
    ...croppedImage(project.images[0], at(HOME_VW[i])),
    sizes: `(max-width: 767px) ${HOME_VW_MOBILE[i]}vw, ${HOME_VW[i]}vw`,
  }));
}

export type Settings = {
  siteTitle: string;
  description: string;
  instagram: string;
  email: string;
  location: string;
  publications: string[];
  clients: string[];
  infoBody: string[];
  contactBody: string[];
  portrait: ProjectImage | null;
  contactImage: ProjectImage | null;
};

export async function getSettings(): Promise<Settings> {
  const raw = await client.fetch<Record<string, unknown>>(SETTINGS_QUERY);
  const figure = (source: unknown): ProjectImage | null => {
    if (!source) return null;
    const image = source as RawImage;
    return {
      ...fullImage(image, at(FIGURE_VW), image.asset.metadata?.dimensions?.aspectRatio ?? 0.8),
      sizes: `(max-width: 767px) 62vw, ${FIGURE_VW}vw`,
    };
  };

  return {
    siteTitle: (raw?.siteTitle as string) ?? "Austin Leis",
    description: (raw?.description as string) ?? "",
    instagram: (raw?.instagram as string) ?? "https://www.instagram.com/",
    email: (raw?.email as string) ?? "",
    location: (raw?.location as string) ?? "",
    publications: (raw?.publications as string[]) ?? [],
    clients: (raw?.clients as string[]) ?? [],
    infoBody: (raw?.infoBody as string[]) ?? [],
    contactBody: (raw?.contactBody as string[]) ?? [],
    portrait: figure(raw?.portrait),
    contactImage: figure(raw?.contactImage),
  };
}

export const loopCloneCount = 7;
