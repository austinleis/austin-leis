const FRAME = 1000 / 60;

export function damp(current: number, target: number, factor: number, delta: number) {
  return current + (target - current) * (1 - Math.exp(Math.log(1 - factor) * (delta / FRAME)));
}

export function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
