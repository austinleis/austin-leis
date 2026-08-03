"use client";

import Image from "next/image";
import { useState } from "react";
import type { Project } from "@/app/data/projects";
import { useMountEffect } from "@/app/hooks/useMountEffect";

const COPIES = 3;

export function ProjectGallery({ project }: { project: Project }) {
  const count = project.images.length;
  const slides = Array.from({ length: count * COPIES }, (_, i) => ({
    image: project.images[i % count],
    key: i,
  }));

  const [index, setIndex] = useState(count);
  const [snap, setSnap] = useState(false);
  const slot = ((index % count) + count) % count;

  const go = (delta: number) => {
    setSnap(false);
    setIndex((current) => current + delta);
  };

  const recentre = () => {
    if (index < count) {
      setSnap(true);
      setIndex((current) => current + count);
    } else if (index >= count * 2) {
      setSnap(true);
      setIndex((current) => current - count);
    }
  };

  useMountEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") go(-1);
      else if (event.key === "ArrowRight") go(1);
      else return;
      event.preventDefault();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  });

  return (
    <main className="pr">
      <div className="pr-vp">
        <div
          className="pr-tr"
          data-snap={snap}
          onTransitionEnd={recentre}
          style={{ transform: `translate3d(calc(50vw - ${index + 0.5} * var(--pr-step)), 0, 0)` }}
        >
          {slides.map(({ image, key }) => (
            <div className="pr-sl" key={key}>
              <span className="pr-im">
                <Image
                  src={image.src}
                  alt=""
                  width={image.width}
                  height={image.height}
                  sizes={image.sizes}
                  priority={key === count}
                />
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="pr-vl" aria-hidden="true" />

      <button
        className="pr-go pr-go-prev"
        type="button"
        onClick={() => go(-1)}
        aria-label="Previous image"
      />
      <button
        className="pr-go pr-go-next"
        type="button"
        onClick={() => go(1)}
        aria-label="Next image"
      />

      <div className="pr-me">
        <h1>{project.title}</h1>
        <p>{project.year}</p>
        <p className="pr-ct" aria-live="polite">
          {String(slot + 1).padStart(2, "0")}/{String(count).padStart(2, "0")}
        </p>
      </div>
    </main>
  );
}
