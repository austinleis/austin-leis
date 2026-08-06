export type Figure = {
  src: string;
  width: number;
  height: number;
  sizes: string;
};

export const portrait: Figure = {
  src: "/media/portrait--608.webp",
  width: 608,
  height: 639,
  sizes: "(max-width: 767px) 62vw, 22vw"
};

export const contactFigure: Figure = {
  src: "/media/victoria-porter-masselin/victoria-porter-home-017-edit--845.webp",
  width: 845,
  height: 1056,
  sizes: "(max-width: 767px) 62vw, 22vw"
};
