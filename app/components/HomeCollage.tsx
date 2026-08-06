"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { loopCloneCount, tiles } from "@/app/data/tiles";
import { useMountEffect } from "@/app/hooks/useMountEffect";
import { damp } from "@/app/lib/motion";

const LERP = 0.09;
const KEY_STEP = 140;
const THROW = 170;
const MAX_THROW_SPEED = 4;
const PRIORITY_TILES = 4;
const TRAILING_TILES = 3;

const loop = [...tiles, ...tiles.slice(0, loopCloneCount)];

export function HomeCollage() {
  const trackRef = useRef<HTMLDivElement>(null);

  useMountEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const items = Array.from(track.children) as HTMLElement[];
    let max = 0;
    let current = 0;
    let target = 0;
    let last = 0;
    let raf = 0;
    let running = false;
    let dragging = false;
    let velocity = 0;

    const measure = () => {
      const first = items[0];
      const clone = items[tiles.length];
      if (!first || !clone) return;
      max = Math.max(clone.getBoundingClientRect().top - first.getBoundingClientRect().top, 1);
    };

    const draw = () => {
      track.style.transform = `translate3d(0, ${-current}px, 0)`;
    };

    const wrap = () => {
      const shift = Math.floor(current / max);
      if (shift === 0) return;
      current -= shift * max;
      target -= shift * max;
    };

    const tick = (now: number) => {
      if (dragging) {
        running = false;
        return;
      }
      const delta = last ? Math.min(now - last, 64) : 16.666;
      last = now;
      current = damp(current, target, LERP, delta);
      wrap();
      draw();

      if (Math.abs(target - current) > 0.05) {
        raf = requestAnimationFrame(tick);
      } else {
        current = target;
        draw();
        running = false;
      }
    };

    const start = () => {
      if (running) return;
      running = true;
      last = 0;
      raf = requestAnimationFrame(tick);
    };

    const scrollBy = (amount: number) => {
      target += amount;
      start();
    };

    const menuIsOpen = () => document.documentElement.dataset.menu === "open";

    const onWheel = (event: WheelEvent) => {
      event.preventDefault();
      if (menuIsOpen()) return;
      scrollBy(event.deltaMode === 1 ? event.deltaY * 16 : event.deltaY);
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowDown" || event.key === "PageDown") scrollBy(KEY_STEP);
      else if (event.key === "ArrowUp" || event.key === "PageUp") scrollBy(-KEY_STEP);
      else return;
      event.preventDefault();
    };

    let pointerId: number | null = null;
    let pointerY = 0;

    let pointerTime = 0;

    const onPointerDown = (event: PointerEvent) => {
      if (event.pointerType === "mouse" || menuIsOpen()) return;
      pointerId = event.pointerId;
      pointerY = event.clientY;
      pointerTime = event.timeStamp;
      velocity = 0;
      dragging = true;
      target = current;
      document.body.classList.add("is-dragging");
    };

    const onPointerMove = (event: PointerEvent) => {
      if (!dragging || pointerId !== event.pointerId) return;
      const shift = pointerY - event.clientY;
      const elapsed = Math.max(event.timeStamp - pointerTime, 1);
      velocity = velocity * 0.7 + (shift / elapsed) * 0.3;
      pointerY = event.clientY;
      pointerTime = event.timeStamp;
      current += shift;
      target = current;
      wrap();
      draw();
    };

    const onPointerUp = () => {
      if (!dragging) return;
      dragging = false;
      pointerId = null;
      document.body.classList.remove("is-dragging");
      const speed = Math.max(Math.min(velocity, MAX_THROW_SPEED), -MAX_THROW_SPEED);
      target = current + speed * THROW;
      start();
    };

    const onFocusIn = (event: FocusEvent) => {
      const link = (event.target as HTMLElement | null)?.closest(".ho-li-i");
      if (!link) return;
      const rect = link.getBoundingClientRect();
      const settledTop = rect.top + current - target;
      const settledBottom = settledTop + rect.height;
      const margin = window.innerHeight * 0.1;
      if (settledTop < margin) scrollBy(settledTop - margin);
      else if (settledBottom > window.innerHeight - margin) {
        scrollBy(settledBottom - window.innerHeight + margin);
      }
    };

    measure();
    draw();

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
    window.addEventListener("pointercancel", onPointerUp);
    window.addEventListener("resize", measure);
    track.addEventListener("focusin", onFocusIn);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("pointercancel", onPointerUp);
      window.removeEventListener("resize", measure);
      track.removeEventListener("focusin", onFocusIn);
      document.body.classList.remove("is-dragging");
    };
  });

  return (
    <main className="stage">
      <h1 className="sr">Austin Leis, photographer, Los Angeles</h1>
      <div className="p">
        <div className="ho-li_" ref={trackRef}>
          {loop.map((tile, index) => (
            <div
              className="ho-li"
              key={`${tile.slug}-${index}`}
              aria-hidden={index >= tiles.length}
            >
              <Link
                className="ho-li-i pj"
                href={`/projects/${tile.slug}`}
                tabIndex={index >= tiles.length ? -1 : undefined}
              >
                <span className="pj-tx">{tile.label}</span>
                <span className="pj-im">
                  <Image
                    src={tile.src}
                    alt=""
                    width={tile.width}
                    height={tile.height}
                    sizes={tile.sizes}
                    priority={index < PRIORITY_TILES}
                    loading={
                      index >= PRIORITY_TILES && index >= tiles.length - TRAILING_TILES
                        ? "eager"
                        : undefined
                    }
                  />
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
