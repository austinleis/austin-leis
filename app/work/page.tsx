import type { Metadata } from "next";
import { ogImage } from "@/app/lib/site";
import Image from "next/image";
import Link from "next/link";
import { workTiles } from "@/app/data/work";
import { JsonLd, breadcrumbSchema } from "@/app/lib/site";

const PRIORITY_TILES = 5;

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected photography by Austin Leis for design studios, brands and publications, including Jacquemus, Rimowa, Aime Leon Dore and Openhouse Magazine.",
  alternates: { canonical: "/work" },
  openGraph: {
    title: "Work | Austin Leis",
    description: "Selected photography for design studios, brands and publications.",
    url: "/work",
    images: [ogImage],
  },
};

export default function Work() {
  return (
    <>
      <JsonLd schema={breadcrumbSchema([{ name: "Home", path: "" }, { name: "Work", path: "/work" }])} />
      <main className="wk">
      <h1 className="sr">Work by Austin Leis</h1>
      <ul className="wk-g">
        {workTiles.map((tile, index) => (
          <li key={tile.slug}>
            <Link className="pj" href={`/projects/${tile.slug}`}>
              <span className="pj-tx">{tile.label}</span>
              <span className="pj-im">
                <Image
                  src={tile.src}
                  alt=""
                  width={tile.width}
                  height={tile.height}
                  sizes={tile.sizes}
                  priority={index < PRIORITY_TILES}
                />
              </span>
            </Link>
          </li>
        ))}
      </ul>
      </main>
    </>
  );
}
