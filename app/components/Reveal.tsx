"use client";

import { useMountEffect } from "@/app/hooks/useMountEffect";

export function Reveal() {
  useMountEffect(() => {
    const frame = requestAnimationFrame(() => {
      document.documentElement.dataset.ready = "true";
    });
    return () => cancelAnimationFrame(frame);
  });

  return null;
}
