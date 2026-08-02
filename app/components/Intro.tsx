"use client";

import { useMountEffect } from "@/app/hooks/useMountEffect";
import { prefersReducedMotion } from "@/app/lib/motion";

export function Intro() {
  useMountEffect(() => {
    const root = document.documentElement;
    const hold = prefersReducedMotion() ? 80 : 1500;

    const toRun = window.setTimeout(() => {
      root.dataset.intro = "run";
    }, 60);

    const toDone = window.setTimeout(() => {
      root.dataset.intro = "done";
    }, 60 + hold);

    return () => {
      window.clearTimeout(toRun);
      window.clearTimeout(toDone);
    };
  });

  return (
    <div id="lo" aria-hidden="true">
      <div id="lo-bg" />
      <div id="lo-pr">
        <div />
      </div>
    </div>
  );
}
