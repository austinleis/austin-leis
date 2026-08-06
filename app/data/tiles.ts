export type Tile = {
  slug: string;
  label: string;
  src: string;
  width: number;
  height: number;
  sizes: string;
};

export const tiles: Tile[] = [
  {
    slug: "aime-leon-dore-los-angeles",
    label: "Aime Leon Dore, Los Angeles",
    src: "/media/aime-leon-dore-los-angeles/ald-day-2-003-edit-edit-edit-edit--720.webp",
    width: 720,
    height: 900,
    sizes: "(max-width: 767px) 62vw, 18.75vw"
  },
  {
    slug: "andrew-cosbie-yacht",
    label: "Andrew Cosbie, Yacht",
    src: "/media/andrew-cosbie-yacht/andrew-cosbie-yacht-032-edit-edit-edit-edit-edit-edit-edit-edit--480.webp",
    width: 480,
    height: 601,
    sizes: "(max-width: 767px) 42vw, 12.5vw"
  },
  {
    slug: "clements-design-doheny",
    label: "Clements Design, Doheny",
    src: "/media/clements-design-doheny/doheny-026-edit--401.webp",
    width: 401,
    height: 519,
    sizes: "(max-width: 767px) 33vw, 10.42vw"
  },
  {
    slug: "courtney-applebaum-henry-street",
    label: "Courtney Applebaum, Henry Street",
    src: "/media/courtney-applebaum-henry-street/applebaum-henry-st-017-painting-edit--1601.webp",
    width: 1601,
    height: 1068,
    sizes: "(max-width: 767px) 100vw, 41.67vw"
  },
  {
    slug: "jenni-kayne-bonnymede",
    label: "Jenni Kayne, Bonnymede",
    src: "/media/jenni-kayne-bonnymede/jenni-kayne-bonnymede-007-edit--641.webp",
    width: 641,
    height: 802,
    sizes: "(max-width: 767px) 46vw, 16.67vw"
  },
  {
    slug: "madhappy-melrose",
    label: "Madhappy, Melrose",
    src: "/media/madhappy-melrose/mh-melrose-010--401.webp",
    width: 401,
    height: 502,
    sizes: "(max-width: 767px) 36vw, 10.42vw"
  },
  {
    slug: "ome-dezin-la-presa",
    label: "Ome Dezin, La Presa",
    src: "/media/ome-dezin-la-presa/251227105957050005-edit-edit-edit--641.webp",
    width: 641,
    height: 801,
    sizes: "(max-width: 767px) 55vw, 16.67vw"
  },
  {
    slug: "openhouse-magazine-galerie-half",
    label: "Openhouse Magazine, Galerie Half",
    src: "/media/openhouse-magazine-galerie-half/46793-1-0006-edit--960.webp",
    width: 960,
    height: 1201,
    sizes: "(max-width: 767px) 78vw, 25vw"
  },
  {
    slug: "personal-work",
    label: "Personal Work",
    src: "/media/personal-work/hand-print-scan-3-5-edit--1280.webp",
    width: 1280,
    height: 1600,
    sizes: "(max-width: 767px) 82vw, 33.33vw"
  },
  {
    slug: "r-miller",
    label: "R. Miller",
    src: "/media/r-miller/r-miller-home-052-2-edit--480.webp",
    width: 480,
    height: 600,
    sizes: "(max-width: 767px) 40vw, 12.5vw"
  },
  {
    slug: "studio-ford-bauhaus",
    label: "Studio Ford, Bauhaus",
    src: "/media/studio-ford-bauhaus/000053100001--480.webp",
    width: 480,
    height: 655,
    sizes: "(max-width: 767px) 40vw, 12.5vw"
  },
  {
    slug: "studio-muka-kas",
    label: "Studio Muka, KAS",
    src: "/media/studio-muka-kas/studio-muka-kas-023--480.webp",
    width: 480,
    height: 601,
    sizes: "(max-width: 767px) 34vw, 12.5vw"
  },
  {
    slug: "victoria-porter-masselin",
    label: "Victoria Porter, Masselin",
    src: "/media/victoria-porter-masselin/victoria-porter-home-017-edit--1040.webp",
    width: 1040,
    height: 1300,
    sizes: "(max-width: 767px) 88vw, 27.08vw"
  }
];

export const loopCloneCount = 7;
