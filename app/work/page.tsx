import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { workTiles } from "@/app/data/work";

const PRIORITY_TILES = 5;

export const metadata: Metadata = {
  title: "Work - Austin Leis",
  alternates: { canonical: "/work" },
};

export default function Work() {
  return (
    <main className="wk">
      <h1 className="sr">Work - Austin Leis</h1>
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
  );
}
