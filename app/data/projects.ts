export type ProjectImage = {
  src: string;
  width: number;
  height: number;
  sizes: string;
};

export type Project = {
  slug: string;
  client: string;
  title: string;
  label: string;
  images: ProjectImage[];
};

export const projects: Project[] = [
  {
    slug: "aime-leon-dore-los-angeles",
    client: "Aime Leon Dore",
    title: "Los Angeles",
    label: "Aime Leon Dore, Los Angeles",
    images: [
      {
        src: "/media/aime-leon-dore-los-angeles/ald-day-2-003-edit-edit-edit-edit--1114.webp",
        width: 1114,
        height: 1393,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/aime-leon-dore-los-angeles/ald-day-2-033-2-edit-edit-edit--1114.webp",
        width: 1114,
        height: 1393,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/aime-leon-dore-los-angeles/ald-day-2-036-edit-edit--1114.webp",
        width: 1114,
        height: 1485,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/aime-leon-dore-los-angeles/ald-los-angeles-055-edit-1-edit--1114.webp",
        width: 1114,
        height: 1393,
        sizes: "(max-width: 767px) 62vw, 29vw"
      }
    ]
  },
  {
    slug: "andrew-cosbie-12th-street",
    client: "Andrew Cosbie",
    title: "12th Street",
    label: "Andrew Cosbie, 12th Street",
    images: [
      {
        src: "/media/andrew-cosbie-12th-street/andrew-cosbie-w-12th-st-008-2-edit-edit-edit--1114.webp",
        width: 1114,
        height: 1393,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/andrew-cosbie-12th-street/andrew-cosbie-w-12th-st-018-edit--1114.webp",
        width: 1114,
        height: 1393,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/andrew-cosbie-12th-street/andrew-cosbie-w-12th-st-075-edit--1114.webp",
        width: 1114,
        height: 1393,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/andrew-cosbie-12th-street/andrew-cosbie-w-12th-st-091-edit--1114.webp",
        width: 1114,
        height: 1393,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/andrew-cosbie-12th-street/andrew-cosbie-w-12th-st-191-edit-edit--1114.webp",
        width: 1114,
        height: 1393,
        sizes: "(max-width: 767px) 62vw, 29vw"
      }
    ]
  },
  {
    slug: "andrew-cosbie-montecito",
    client: "Andrew Cosbie",
    title: "Montecito",
    label: "Andrew Cosbie, Montecito",
    images: [
      {
        src: "/media/andrew-cosbie-montecito/andrew-cosbie-montecito-059--1114.webp",
        width: 1114,
        height: 1393,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/andrew-cosbie-montecito/andrew-cosbie-montecito-192-edit--1114.webp",
        width: 1114,
        height: 1393,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/andrew-cosbie-montecito/andrew-cosbie-montecito-227-edit--1114.webp",
        width: 1114,
        height: 1393,
        sizes: "(max-width: 767px) 62vw, 29vw"
      }
    ]
  },
  {
    slug: "andrew-cosbie-yacht",
    client: "Andrew Cosbie",
    title: "Yacht",
    label: "Andrew Cosbie, Yacht",
    images: [
      {
        src: "/media/andrew-cosbie-yacht/andrew-cosbie-yacht-032-edit-edit-edit-edit-edit-edit-edit-edit--1114.webp",
        width: 1114,
        height: 1393,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/andrew-cosbie-yacht/andrew-cosbie-yacht-194-edit-edit-edit-2-2--1114.webp",
        width: 1114,
        height: 1393,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/andrew-cosbie-yacht/andrew-cosbie-yacht-288-edit-edit-edit-2-2--1114.webp",
        width: 1114,
        height: 1393,
        sizes: "(max-width: 767px) 62vw, 29vw"
      }
    ]
  },
  {
    slug: "breland-harper-spa-elle-decor",
    client: "Breland Harper",
    title: "Spa - Elle Decor",
    label: "Breland Harper, Spa - Elle Decor",
    images: [
      {
        src: "/media/breland-harper-spa-elle-decor/breland-harper-spa-022-edit-3--1114.webp",
        width: 1114,
        height: 1393,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/breland-harper-spa-elle-decor/breland-harper-spa-035-edit-edit--1114.webp",
        width: 1114,
        height: 1393,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/breland-harper-spa-elle-decor/breland-harper-spa-096-2-edit--1114.webp",
        width: 1114,
        height: 1393,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/breland-harper-spa-elle-decor/breland-harper-spa-097-edit-edit--1114.webp",
        width: 1114,
        height: 1393,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/breland-harper-spa-elle-decor/breland-harper-spa-122-edit-edit--1114.webp",
        width: 1114,
        height: 1393,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/breland-harper-spa-elle-decor/breland-harper-spa-130--1114.webp",
        width: 1114,
        height: 1393,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/breland-harper-spa-elle-decor/photo-jan-12-2026-7-18-12-am-1--1114.webp",
        width: 1114,
        height: 1393,
        sizes: "(max-width: 767px) 62vw, 29vw"
      }
    ]
  },
  {
    slug: "clements-design-corona-del-mar",
    client: "Clements Design",
    title: "Corona Del Mar",
    label: "Clements Design, Corona Del Mar",
    images: [
      {
        src: "/media/clements-design-corona-del-mar/clements-design-cdm-020--1114.webp",
        width: 1114,
        height: 1394,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/clements-design-corona-del-mar/clements-design-cdm-116--1114.webp",
        width: 1114,
        height: 1393,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/clements-design-corona-del-mar/clements-design-cdm-259--1114.webp",
        width: 1114,
        height: 1485,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/clements-design-corona-del-mar/clements-design-cdm-320--1114.webp",
        width: 1114,
        height: 1393,
        sizes: "(max-width: 767px) 62vw, 29vw"
      }
    ]
  },
  {
    slug: "clements-design-doheny",
    client: "Clements Design",
    title: "Doheny",
    label: "Clements Design, Doheny",
    images: [
      {
        src: "/media/clements-design-doheny/doheny-026-edit--1114.webp",
        width: 1114,
        height: 1442,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/clements-design-doheny/doheny-041-edit--1114.webp",
        width: 1114,
        height: 1442,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/clements-design-doheny/doheny-165-edit--1114.webp",
        width: 1114,
        height: 1393,
        sizes: "(max-width: 767px) 62vw, 29vw"
      }
    ]
  },
  {
    slug: "clements-design-placer",
    client: "Clements Design",
    title: "Placer",
    label: "Clements Design, Placer",
    images: [
      {
        src: "/media/clements-design-placer/34-placer-086--1114.webp",
        width: 1114,
        height: 1393,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/clements-design-placer/34-placer-092--1114.webp",
        width: 1114,
        height: 1396,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/clements-design-placer/34-placer-110--1114.webp",
        width: 1114,
        height: 1393,
        sizes: "(max-width: 767px) 62vw, 29vw"
      }
    ]
  },
  {
    slug: "courtney-applebaum-henry-street",
    client: "Courtney Applebaum",
    title: "Henry Street",
    label: "Courtney Applebaum, Henry Street",
    images: [
      {
        src: "/media/courtney-applebaum-henry-street/applebaum-henry-st-017-painting-edit--1114.webp",
        width: 1114,
        height: 742,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/courtney-applebaum-henry-street/applebaum-henry-st-042-edit--1114.webp",
        width: 1114,
        height: 1671,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/courtney-applebaum-henry-street/applebaum-henry-st-069-edit--1114.webp",
        width: 1114,
        height: 1671,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/courtney-applebaum-henry-street/applebaum-henry-st-120-edit--1114.webp",
        width: 1114,
        height: 1672,
        sizes: "(max-width: 767px) 62vw, 29vw"
      }
    ]
  },
  {
    slug: "galerie-half-showroom",
    client: "Galerie Half",
    title: "Showroom",
    label: "Galerie Half, Showroom",
    images: [
      {
        src: "/media/galerie-half-showroom/dscf8814-edit--1114.webp",
        width: 1114,
        height: 1387,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/galerie-half-showroom/gh-ig-shots-005-edit--1114.webp",
        width: 1114,
        height: 1393,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/galerie-half-showroom/gh-ig-shots-014-edit--1114.webp",
        width: 1114,
        height: 1393,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/galerie-half-showroom/gh-ig-shots-019-edit-edit--1114.webp",
        width: 1114,
        height: 1393,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/galerie-half-showroom/gh-ig-shots-024-2--1114.webp",
        width: 1114,
        height: 1393,
        sizes: "(max-width: 767px) 62vw, 29vw"
      }
    ]
  },
  {
    slug: "jacquemus-montecito-boutique",
    client: "Jacquemus",
    title: "Montecito Boutique",
    label: "Jacquemus, Montecito Boutique",
    images: [
      {
        src: "/media/jacquemus-montecito-boutique/jacquemus-montecito-007-edit-edit-edit-edit--1114.webp",
        width: 1114,
        height: 1393,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/jacquemus-montecito-boutique/jacquemus-montecito-010-edit-edit--1114.webp",
        width: 1114,
        height: 1393,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/jacquemus-montecito-boutique/jacquemus-montecito-017-edit-edit-edit--1114.webp",
        width: 1114,
        height: 1393,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/jacquemus-montecito-boutique/jacquemus-montecito-025-edit-edit--1114.webp",
        width: 1114,
        height: 1393,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/jacquemus-montecito-boutique/jacquemus-montecito-032-edit-edit-edit-edit-edit--1114.webp",
        width: 1114,
        height: 1393,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/jacquemus-montecito-boutique/jacquemus-montecito-034-edit--1114.webp",
        width: 1114,
        height: 1393,
        sizes: "(max-width: 767px) 62vw, 29vw"
      }
    ]
  },
  {
    slug: "jenni-kayne-bonnymede",
    client: "Jenni Kayne",
    title: "Bonnymede",
    label: "Jenni Kayne, Bonnymede",
    images: [
      {
        src: "/media/jenni-kayne-bonnymede/jenni-kayne-bonnymede-007-edit--1114.webp",
        width: 1114,
        height: 1393,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/jenni-kayne-bonnymede/jenni-kayne-bonnymede-014-edit--1114.webp",
        width: 1114,
        height: 1393,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/jenni-kayne-bonnymede/jenni-kayne-bonnymede-043-edit--1114.webp",
        width: 1114,
        height: 1393,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/jenni-kayne-bonnymede/jenni-kayne-bonnymede-100-edit--1114.webp",
        width: 1114,
        height: 1393,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/jenni-kayne-bonnymede/jenni-kayne-bonnymede-105-edit--1114.webp",
        width: 1114,
        height: 1393,
        sizes: "(max-width: 767px) 62vw, 29vw"
      }
    ]
  },
  {
    slug: "m-haas-brentwood",
    client: "M. Haas",
    title: "Brentwood",
    label: "M. Haas, Brentwood",
    images: [
      {
        src: "/media/m-haas-brentwood/m-haas-brentwood-035-edit--1114.webp",
        width: 1114,
        height: 1393,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/m-haas-brentwood/m-haas-brentwood-043--1114.webp",
        width: 1114,
        height: 1393,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/m-haas-brentwood/m-haas-brentwood-075-edit--1114.webp",
        width: 1114,
        height: 1393,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/m-haas-brentwood/m-haas-brentwood-108-edit--1114.webp",
        width: 1114,
        height: 1393,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/m-haas-brentwood/m-haas-brentwood-227--1114.webp",
        width: 1114,
        height: 1393,
        sizes: "(max-width: 767px) 62vw, 29vw"
      }
    ]
  },
  {
    slug: "m-haas-pasadena",
    client: "M. Haas",
    title: "Pasadena",
    label: "M. Haas, Pasadena",
    images: [
      {
        src: "/media/m-haas-pasadena/m-haas-030-edit--1114.webp",
        width: 1114,
        height: 1393,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/m-haas-pasadena/m-haas-041-edit-edit--1114.webp",
        width: 1114,
        height: 1393,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/m-haas-pasadena/m-haas-079-edit--1114.webp",
        width: 1114,
        height: 1393,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/m-haas-pasadena/m-haas-100--1114.webp",
        width: 1114,
        height: 1393,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/m-haas-pasadena/m-haas-110-edit--1114.webp",
        width: 1114,
        height: 1393,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/m-haas-pasadena/m-haas-156-edit-edit--1114.webp",
        width: 1114,
        height: 1485,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/m-haas-pasadena/m-haas-170-edit-edit-edit-2--1114.webp",
        width: 1114,
        height: 1393,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/m-haas-pasadena/m-haas-179-edit--1114.webp",
        width: 1114,
        height: 1394,
        sizes: "(max-width: 767px) 62vw, 29vw"
      }
    ]
  },
  {
    slug: "madhappy-melrose",
    client: "Madhappy",
    title: "Melrose",
    label: "Madhappy, Melrose",
    images: [
      {
        src: "/media/madhappy-melrose/mh-melrose-010--1114.webp",
        width: 1114,
        height: 1393,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/madhappy-melrose/mh-melrose-011-edit--1114.webp",
        width: 1114,
        height: 1393,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/madhappy-melrose/mh-melrose-013--1114.webp",
        width: 1114,
        height: 1393,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/madhappy-melrose/mh-melrose-014--1114.webp",
        width: 1114,
        height: 1393,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/madhappy-melrose/mh-melrose-015--1114.webp",
        width: 1114,
        height: 1393,
        sizes: "(max-width: 767px) 62vw, 29vw"
      }
    ]
  },
  {
    slug: "office-of-bc",
    client: "Office of BC",
    title: "Office of BC",
    label: "Office of BC",
    images: [
      {
        src: "/media/office-of-bc/000008150015-edit--1114.webp",
        width: 1114,
        height: 1521,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/office-of-bc/100185040012-edit-edit--1114.webp",
        width: 1114,
        height: 1521,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/office-of-bc/100185060014-edit-edit--1114.webp",
        width: 1114,
        height: 1708,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/office-of-bc/hand-print-scan-2-2-2--1114.webp",
        width: 1114,
        height: 1393,
        sizes: "(max-width: 767px) 62vw, 29vw"
      }
    ]
  },
  {
    slug: "ome-dezin-colony",
    client: "Ome Dezin",
    title: "Colony",
    label: "Ome Dezin, Colony",
    images: [
      {
        src: "/media/ome-dezin-colony/260411151136050003-edit--1114.webp",
        width: 1114,
        height: 1393,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/ome-dezin-colony/260411151136060003-edit--1114.webp",
        width: 1114,
        height: 1393,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/ome-dezin-colony/260411151136080002-edit--1114.webp",
        width: 1114,
        height: 1393,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/ome-dezin-colony/260411151136090003-edit--1114.webp",
        width: 1114,
        height: 1393,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/ome-dezin-colony/260411151136090007-edit--1114.webp",
        width: 1114,
        height: 1393,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/ome-dezin-colony/260411151136090012--1114.webp",
        width: 1114,
        height: 1393,
        sizes: "(max-width: 767px) 62vw, 29vw"
      }
    ]
  },
  {
    slug: "ome-dezin-la-presa",
    client: "Ome Dezin",
    title: "La Presa",
    label: "Ome Dezin, La Presa",
    images: [
      {
        src: "/media/ome-dezin-la-presa/251227105957050005-edit-edit-edit--1114.webp",
        width: 1114,
        height: 1393,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/ome-dezin-la-presa/251227105957050015-edit-edit-edit-edit-2--1114.webp",
        width: 1114,
        height: 1393,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/ome-dezin-la-presa/251227105957130004-edit-3--1114.webp",
        width: 1114,
        height: 1393,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/ome-dezin-la-presa/251227105957200013-edit-edit--1114.webp",
        width: 1114,
        height: 1393,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/ome-dezin-la-presa/251227105957220016-edit-edit-2--1114.webp",
        width: 1114,
        height: 1393,
        sizes: "(max-width: 767px) 62vw, 29vw"
      }
    ]
  },
  {
    slug: "ome-dezin-park-lane",
    client: "Ome Dezin",
    title: "Park Lane",
    label: "Ome Dezin, Park Lane",
    images: [
      {
        src: "/media/ome-dezin-park-lane/20240618-000252670009-edit--1114.webp",
        width: 1114,
        height: 1393,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/ome-dezin-park-lane/20240618-000252730001-edit--1114.webp",
        width: 1114,
        height: 1393,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/ome-dezin-park-lane/20240618-000252730012-edit--1114.webp",
        width: 1114,
        height: 1393,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/ome-dezin-park-lane/20240618-000252780003-edit-edit--1114.webp",
        width: 1114,
        height: 1393,
        sizes: "(max-width: 767px) 62vw, 29vw"
      }
    ]
  },
  {
    slug: "openhouse-magazine-galerie-half",
    client: "Openhouse Magazine",
    title: "Galerie Half",
    label: "Openhouse Magazine, Galerie Half",
    images: [
      {
        src: "/media/openhouse-magazine-galerie-half/46793-1-0006-edit--1114.webp",
        width: 1114,
        height: 1393,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/openhouse-magazine-galerie-half/46793-4-0012--1114.webp",
        width: 1114,
        height: 1393,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/openhouse-magazine-galerie-half/46793-5-0007--1114.webp",
        width: 1114,
        height: 1523,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/openhouse-magazine-galerie-half/46793-5-0012--1114.webp",
        width: 1114,
        height: 1394,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/openhouse-magazine-galerie-half/46793-6-0006--1114.webp",
        width: 1114,
        height: 1521,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/openhouse-magazine-galerie-half/46793-7-0007--1114.webp",
        width: 1114,
        height: 1393,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/openhouse-magazine-galerie-half/46793-9-0016--1114.webp",
        width: 1114,
        height: 1393,
        sizes: "(max-width: 767px) 62vw, 29vw"
      }
    ]
  },
  {
    slug: "openhouse-magazine-ira-kurlander",
    client: "Openhouse Magazine",
    title: "Ira Kurlander",
    label: "Openhouse Magazine, Ira Kurlander",
    images: [
      {
        src: "/media/openhouse-magazine-ira-kurlander/37791-a1-0005--1114.webp",
        width: 1114,
        height: 1521,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/openhouse-magazine-ira-kurlander/37791-a1-0013--1114.webp",
        width: 1114,
        height: 1521,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/openhouse-magazine-ira-kurlander/37791-a4-0011-2--1114.webp",
        width: 1114,
        height: 1521,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/openhouse-magazine-ira-kurlander/37791-a4-0012--1114.webp",
        width: 1114,
        height: 1521,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/openhouse-magazine-ira-kurlander/37791-a5-0001--1114.webp",
        width: 1114,
        height: 1521,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/openhouse-magazine-ira-kurlander/37791-a5-0011--1114.webp",
        width: 1114,
        height: 1521,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/openhouse-magazine-ira-kurlander/37791-a8-0007--1114.webp",
        width: 1114,
        height: 1522,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/openhouse-magazine-ira-kurlander/37791-a9-0001--1114.webp",
        width: 1114,
        height: 1521,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/openhouse-magazine-ira-kurlander/37791-a9-0009--1114.webp",
        width: 1114,
        height: 1521,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/openhouse-magazine-ira-kurlander/37791-a9-0014--1114.webp",
        width: 1114,
        height: 1521,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/openhouse-magazine-ira-kurlander/37791-a10-0007-2--1114.webp",
        width: 1114,
        height: 816,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/openhouse-magazine-ira-kurlander/37791-a13-0015--1114.webp",
        width: 1114,
        height: 1521,
        sizes: "(max-width: 767px) 62vw, 29vw"
      }
    ]
  },
  {
    slug: "openhouse-magazine-seventh-house",
    client: "Openhouse Magazine",
    title: "Seventh House",
    label: "Openhouse Magazine, Seventh House",
    images: [
      {
        src: "/media/openhouse-magazine-seventh-house/000089880016--1114.webp",
        width: 1114,
        height: 1521,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/openhouse-magazine-seventh-house/000089900015-edit--1114.webp",
        width: 1114,
        height: 1521,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/openhouse-magazine-seventh-house/000089910002--1114.webp",
        width: 1114,
        height: 1522,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/openhouse-magazine-seventh-house/000102700008-edit--1114.webp",
        width: 1114,
        height: 1521,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/openhouse-magazine-seventh-house/000102710013-edit-rt--1114.webp",
        width: 1114,
        height: 1521,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/openhouse-magazine-seventh-house/000102740009-edit--1114.webp",
        width: 1114,
        height: 1521,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/openhouse-magazine-seventh-house/000102760002-edit--1114.webp",
        width: 1114,
        height: 1521,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/openhouse-magazine-seventh-house/000102760005-edit--1114.webp",
        width: 1114,
        height: 1521,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/openhouse-magazine-seventh-house/000102790004-edit--1114.webp",
        width: 1114,
        height: 1521,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/openhouse-magazine-seventh-house/000102800010-edit--1114.webp",
        width: 1114,
        height: 1521,
        sizes: "(max-width: 767px) 62vw, 29vw"
      }
    ]
  },
  {
    slug: "openhouse-magazine-thomas-mann-house",
    client: "Openhouse Magazine",
    title: "Thomas Mann House",
    label: "Openhouse Magazine, Thomas Mann House",
    images: [
      {
        src: "/media/openhouse-magazine-thomas-mann-house/55077-1-003-edit--1114.webp",
        width: 1114,
        height: 1522,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/openhouse-magazine-thomas-mann-house/55077-1-012-edit--1114.webp",
        width: 1114,
        height: 1522,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/openhouse-magazine-thomas-mann-house/55077-4-012-edit--1114.webp",
        width: 1114,
        height: 1522,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/openhouse-magazine-thomas-mann-house/55077-5-006-edit--1114.webp",
        width: 1114,
        height: 1522,
        sizes: "(max-width: 767px) 62vw, 29vw"
      }
    ]
  },
  {
    slug: "personal-work",
    client: "Personal Work",
    title: "Personal Work",
    label: "Personal Work",
    images: [
      {
        src: "/media/personal-work/hand-print-scan-3-5-edit--1114.webp",
        width: 1114,
        height: 1393,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/personal-work/260124111417020006--1114.webp",
        width: 1114,
        height: 1386,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/personal-work/260124111417020008--1114.webp",
        width: 1114,
        height: 1386,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/personal-work/260124111417030011-edit-edit-3--1114.webp",
        width: 1114,
        height: 1386,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/personal-work/bw49622-1-0001-edit--1114.webp",
        width: 1114,
        height: 1393,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/personal-work/bw49622-1-0014-edit-2--1114.webp",
        width: 1114,
        height: 1393,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/personal-work/hand-print-scan-1-edit--1114.webp",
        width: 1114,
        height: 1540,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/personal-work/hand-print-scan-3-2-edit--1114.webp",
        width: 1114,
        height: 1386,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/personal-work/hand-print-scan-3-2--1114.webp",
        width: 1114,
        height: 1393,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/personal-work/hand-print-scan-3-10-edit--1114.webp",
        width: 1114,
        height: 1386,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/personal-work/sea-ranch-cattle-print--1114.webp",
        width: 1114,
        height: 1393,
        sizes: "(max-width: 767px) 62vw, 29vw"
      }
    ]
  },
  {
    slug: "r-miller",
    client: "R. Miller",
    title: "R. Miller",
    label: "R. Miller",
    images: [
      {
        src: "/media/r-miller/r-miller-home-052-2-edit--1114.webp",
        width: 1114,
        height: 1393,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/r-miller/000302010013-edit-2--1114.webp",
        width: 1114,
        height: 1385,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/r-miller/000302010016-edit-edit--1114.webp",
        width: 1114,
        height: 1385,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/r-miller/r-miller-home-039-edit-edit--1114.webp",
        width: 1114,
        height: 1393,
        sizes: "(max-width: 767px) 62vw, 29vw"
      }
    ]
  },
  {
    slug: "rimowa-new-horizons",
    client: "Rimowa",
    title: "New Horizons",
    label: "Rimowa, New Horizons",
    images: [
      {
        src: "/media/rimowa-new-horizons/00010010--1114.webp",
        width: 1114,
        height: 1560,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/rimowa-new-horizons/00010028-edit--1114.webp",
        width: 1114,
        height: 1559,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/rimowa-new-horizons/00020008--1114.webp",
        width: 1114,
        height: 1559,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/rimowa-new-horizons/00050023--1114.webp",
        width: 1114,
        height: 1559,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/rimowa-new-horizons/00060010-edit--1114.webp",
        width: 1114,
        height: 1560,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/rimowa-new-horizons/00090038-edit--1114.webp",
        width: 1114,
        height: 1559,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/rimowa-new-horizons/00100022-edit--1114.webp",
        width: 1114,
        height: 1559,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/rimowa-new-horizons/00170014--1114.webp",
        width: 1114,
        height: 1559,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/rimowa-new-horizons/00170026--1114.webp",
        width: 1114,
        height: 1559,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/rimowa-new-horizons/00180037--1114.webp",
        width: 1114,
        height: 1559,
        sizes: "(max-width: 767px) 62vw, 29vw"
      }
    ]
  },
  {
    slug: "ruemmler-showroom",
    client: "Ruemmler",
    title: "Showroom",
    label: "Ruemmler, Showroom",
    images: [
      {
        src: "/media/ruemmler-showroom/dscf2561-edit--1114.webp",
        width: 1114,
        height: 1393,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/ruemmler-showroom/dscf3017-edit--1114.webp",
        width: 1114,
        height: 1393,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/ruemmler-showroom/dscf3028-edit--1114.webp",
        width: 1114,
        height: 1393,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/ruemmler-showroom/dscf3059-edit-edit-2--1114.webp",
        width: 1114,
        height: 1393,
        sizes: "(max-width: 767px) 62vw, 29vw"
      }
    ]
  },
  {
    slug: "seventh-house-gallery-photos",
    client: "Seventh House",
    title: "Gallery Photos",
    label: "Seventh House, Gallery Photos",
    images: [
      {
        src: "/media/seventh-house-gallery-photos/331094-03-0004-edit--1114.webp",
        width: 1114,
        height: 1392,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/seventh-house-gallery-photos/332371-2-0005-edit--1114.webp",
        width: 1114,
        height: 1392,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/seventh-house-gallery-photos/000066530013--1114.webp",
        width: 1114,
        height: 1521,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/seventh-house-gallery-photos/photo-jun-05-10-27-33-pm--1114.webp",
        width: 1114,
        height: 1393,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/seventh-house-gallery-photos/photo-may-29-9-51-09-am--1114.webp",
        width: 1114,
        height: 1392,
        sizes: "(max-width: 767px) 62vw, 29vw"
      }
    ]
  },
  {
    slug: "studio-ford-bauhaus",
    client: "Studio Ford",
    title: "Bauhaus",
    label: "Studio Ford, Bauhaus",
    images: [
      {
        src: "/media/studio-ford-bauhaus/000053100001--1114.webp",
        width: 1114,
        height: 1521,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/studio-ford-bauhaus/000053100006--1114.webp",
        width: 1114,
        height: 1521,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/studio-ford-bauhaus/000053100011--1114.webp",
        width: 1114,
        height: 1521,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/studio-ford-bauhaus/000053170005--1114.webp",
        width: 1114,
        height: 1521,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/studio-ford-bauhaus/000053170012--1114.webp",
        width: 1114,
        height: 1521,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/studio-ford-bauhaus/000053170015--1114.webp",
        width: 1114,
        height: 1521,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/studio-ford-bauhaus/000053270004--1114.webp",
        width: 1114,
        height: 1521,
        sizes: "(max-width: 767px) 62vw, 29vw"
      }
    ]
  },
  {
    slug: "studio-marrant-orange-grove",
    client: "Studio Marrant",
    title: "Orange Grove",
    label: "Studio Marrant, Orange Grove",
    images: [
      {
        src: "/media/studio-marrant-orange-grove/studio-session-002-edit--1114.webp",
        width: 1114,
        height: 1393,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/studio-marrant-orange-grove/studio-session-011-edit-edit--1114.webp",
        width: 1114,
        height: 891,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/studio-marrant-orange-grove/studio-session-044-edit--1114.webp",
        width: 1114,
        height: 1393,
        sizes: "(max-width: 767px) 62vw, 29vw"
      }
    ]
  },
  {
    slug: "studio-muka-kas",
    client: "Studio Muka",
    title: "KAS",
    label: "Studio Muka, KAS",
    images: [
      {
        src: "/media/studio-muka-kas/studio-muka-kas-023--1114.webp",
        width: 1114,
        height: 1394,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/studio-muka-kas/studio-muka-kas-071--1114.webp",
        width: 1114,
        height: 1394,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/studio-muka-kas/studio-muka-kas-153--1114.webp",
        width: 1114,
        height: 1394,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/studio-muka-kas/studio-muka-kas-184-2--1114.webp",
        width: 1114,
        height: 891,
        sizes: "(max-width: 767px) 62vw, 29vw"
      }
    ]
  },
  {
    slug: "swike-record-label",
    client: "SWIKE",
    title: "Record Label",
    label: "SWIKE, Record Label",
    images: [
      {
        src: "/media/swike-record-label/swike-glendale-blvd-013-edit--1114.webp",
        width: 1114,
        height: 1393,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/swike-record-label/swike-glendale-blvd-062-edit--1114.webp",
        width: 1114,
        height: 1393,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/swike-record-label/swike-glendale-blvd-070-edit--1114.webp",
        width: 1114,
        height: 1393,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/swike-record-label/swike-glendale-blvd-071-edit--1114.webp",
        width: 1114,
        height: 1393,
        sizes: "(max-width: 767px) 62vw, 29vw"
      }
    ]
  },
  {
    slug: "taska-cleveland-how-house",
    client: "Taska Cleveland",
    title: "How House",
    label: "Taska Cleveland, How House",
    images: [
      {
        src: "/media/taska-cleveland-how-house/taska-cleveland-silver-ridge-040-edit-edit--1114.webp",
        width: 1114,
        height: 1485,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/taska-cleveland-how-house/taska-cleveland-silver-ridge-180-edit-edit-edit--1114.webp",
        width: 1114,
        height: 1393,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/taska-cleveland-how-house/taska-cleveland-silver-ridge-212-edit-2-edit--1114.webp",
        width: 1114,
        height: 1485,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/taska-cleveland-how-house/taska-cleveland-silver-ridge-260-edit-edit-edit-edit-edit--1114.webp",
        width: 1114,
        height: 890,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/taska-cleveland-how-house/taska-cleveland-silver-ridge-266-edit-edit--1114.webp",
        width: 1114,
        height: 1485,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/taska-cleveland-how-house/taska-cleveland-silver-ridge-286-edit--1114.webp",
        width: 1114,
        height: 1393,
        sizes: "(max-width: 767px) 62vw, 29vw"
      }
    ]
  },
  {
    slug: "victoria-porter-masselin",
    client: "Victoria Porter",
    title: "Masselin",
    label: "Victoria Porter, Masselin",
    images: [
      {
        src: "/media/victoria-porter-masselin/victoria-porter-home-017-edit--1114.webp",
        width: 1114,
        height: 1393,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/victoria-porter-masselin/victoria-porter-home-032-edit--1114.webp",
        width: 1114,
        height: 1393,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/victoria-porter-masselin/victoria-porter-home-046-edit--1114.webp",
        width: 1114,
        height: 1393,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/victoria-porter-masselin/victoria-porter-home-057-edit--1114.webp",
        width: 1114,
        height: 1393,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/victoria-porter-masselin/victoria-porter-home-070-edit--1114.webp",
        width: 1114,
        height: 1393,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/victoria-porter-masselin/victoria-porter-home-071-edit--1114.webp",
        width: 1114,
        height: 1393,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/media/victoria-porter-masselin/victoria-porter-home-112-edit--1114.webp",
        width: 1114,
        height: 1393,
        sizes: "(max-width: 767px) 62vw, 29vw"
      }
    ]
  }
];
