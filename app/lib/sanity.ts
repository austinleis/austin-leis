import { createImageUrlBuilder } from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url";
import { createClient } from "next-sanity";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "247tn8xk";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2024-10-01";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
});

const builder = createImageUrlBuilder({ projectId, dataset });

export const TILE_RATIO = 5 / 4;

export function croppedImage(source: SanityImageSource, width: number) {
  const height = Math.round(width / TILE_RATIO);
  return {
    src: builder.image(source).width(width).height(height).fit("crop").auto("format").url(),
    width,
    height,
  };
}

export function fullImage(source: SanityImageSource, width: number, ratio: number) {
  return {
    src: builder.image(source).width(width).auto("format").url(),
    width,
    height: Math.round(width / ratio),
  };
}
