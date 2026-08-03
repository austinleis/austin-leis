export type ProjectImage = {
  src: string;
  width: number;
  height: number;
  sizes: string;
};

export type Project = {
  slug: string;
  title: string;
  year: string;
  images: ProjectImage[];
};

export const projects: Project[] = [
  {
    slug: "aime-leon-dore-los-angeles",
    title: "Aimé Leon Dore Los Angeles",
    year: "2025",
    images: [
      {
        src: "/aime-leon-dore-los-angeles/SnapInsta.to_670335752_18580357417020058_5871574489355699133_n--1114.jpg",
        width: 1114,
        height: 1397,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/aime-leon-dore-los-angeles/SnapInsta.to_670491377_18580357408020058_1394067042244776373_n--1114.jpg",
        width: 1114,
        height: 1391,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/aime-leon-dore-los-angeles/SnapInsta.to_670632180_18580357453020058_8327147711777379715_n--1114.jpg",
        width: 1114,
        height: 1391,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/aime-leon-dore-los-angeles/SnapInsta.to_670673171_18580357384020058_6075187081829220846_n--1114.jpg",
        width: 1114,
        height: 1388,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/aime-leon-dore-los-angeles/SnapInsta.to_671160956_18580357426020058_1448713586305342110_n--1114.jpg",
        width: 1114,
        height: 1385,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/aime-leon-dore-los-angeles/SnapInsta.to_673805661_18580357435020058_4883557516678031937_n--1114.jpg",
        width: 1114,
        height: 1385,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/aime-leon-dore-los-angeles/SnapInsta.to_673813958_18580357444020058_5085238273683052013_n--1114.jpg",
        width: 1114,
        height: 1391,
        sizes: "(max-width: 767px) 62vw, 29vw"
      }
    ]
  },
  {
    slug: "elle-decor",
    title: "Elle Decor",
    year: "2024",
    images: [
      {
        src: "/elle-decor/SnapInsta.to_655680907_18573561436020058_3185127563807048133_n--1114.jpg",
        width: 1114,
        height: 1391,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/elle-decor/SnapInsta.to_656197546_18573561478020058_3798771913597329957_n--1114.jpg",
        width: 1114,
        height: 1389,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/elle-decor/SnapInsta.to_656556717_18573560863020058_3710238547077163541_n--1114.jpg",
        width: 1114,
        height: 1386,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/elle-decor/SnapInsta.to_656821044_18573561028020058_3414875729863642801_n--1114.jpg",
        width: 1114,
        height: 1392,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/elle-decor/SnapInsta.to_658188933_18573560695020058_5465161851643153975_n--1114.jpg",
        width: 1114,
        height: 1392,
        sizes: "(max-width: 767px) 62vw, 29vw"
      }
    ]
  },
  {
    slug: "galerie-half",
    title: "Galerie Half",
    year: "2025",
    images: [
      {
        src: "/galerie-half/SnapInsta.to_662249311_18577526323020058_1924414837002518114_n--1114.jpg",
        width: 1114,
        height: 1397,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/galerie-half/SnapInsta.to_662312369_18577526353020058_7049058101604642420_n--1114.jpg",
        width: 1114,
        height: 1387,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/galerie-half/SnapInsta.to_662530244_18577526296020058_392299096947773305_n--1114.jpg",
        width: 1114,
        height: 1381,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/galerie-half/SnapInsta.to_669085986_18577525594020058_4024773780648788628_n--1114.jpg",
        width: 1114,
        height: 1393,
        sizes: "(max-width: 767px) 62vw, 29vw"
      }
    ]
  },
  {
    slug: "how-house",
    title: "How House",
    year: "2024",
    images: [
      {
        src: "/how-house/SnapInsta.to_645474801_18569210689020058_5146144489956474478_n--1114.jpg",
        width: 1114,
        height: 1395,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/how-house/SnapInsta.to_645482720_18569210884020058_16574236401191205_n--1114.jpg",
        width: 1114,
        height: 1386,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/how-house/SnapInsta.to_645483409_18569211214020058_2577511508896815175_n--1114.jpg",
        width: 1114,
        height: 1389,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/how-house/SnapInsta.to_645539071_18569211130020058_1649065803097495967_n--1114.jpg",
        width: 1114,
        height: 1392,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/how-house/SnapInsta.to_645557515_18569211109020058_3820748212438954493_n--1114.jpg",
        width: 1114,
        height: 1386,
        sizes: "(max-width: 767px) 62vw, 29vw"
      }
    ]
  },
  {
    slug: "montecito-by-acosbie",
    title: "Montecito",
    year: "2026",
    images: [
      {
        src: "/montecito-by-acosbie/SnapInsta.to_729674474_18599755510020058_6973034965093209775_n--1114.jpg",
        width: 1114,
        height: 1392,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/montecito-by-acosbie/SnapInsta.to_729746749_18599755528020058_4319737336714229108_n--1114.jpg",
        width: 1114,
        height: 1395,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/montecito-by-acosbie/SnapInsta.to_729976791_18599755489020058_1131325078730801305_n--1114.jpg",
        width: 1114,
        height: 1397,
        sizes: "(max-width: 767px) 62vw, 29vw"
      }
    ]
  },
  {
    slug: "ome-dezin",
    title: "Ome Dezin",
    year: "2025",
    images: [
      {
        src: "/ome-dezin/SnapInsta.to_671658581_18582459469020058_2597371885676409297_n--1114.jpg",
        width: 1114,
        height: 1386,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/ome-dezin/SnapInsta.to_673133430_18582458062020058_1506000068391274933_n--1114.jpg",
        width: 1114,
        height: 1388,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/ome-dezin/SnapInsta.to_674485148_18582459505020058_91503126041899198_n--1114.jpg",
        width: 1114,
        height: 1387,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/ome-dezin/SnapInsta.to_675363507_18582459493020058_8375257094610987473_n--1114.jpg",
        width: 1114,
        height: 1383,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/ome-dezin/SnapInsta.to_675428284_18582458044020058_2200496454290009245_n--1114.jpg",
        width: 1114,
        height: 1395,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/ome-dezin/SnapInsta.to_681201969_18582459445020058_5870170574396735815_n--1114.jpg",
        width: 1114,
        height: 1385,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/ome-dezin/SnapInsta.to_681690610_18582458266020058_5756641326040644503_n--1114.jpg",
        width: 1114,
        height: 1396,
        sizes: "(max-width: 767px) 62vw, 29vw"
      }
    ]
  },
  {
    slug: "seventh-st",
    title: "Seventh St",
    year: "2025",
    images: [
      {
        src: "/seventh-st/SnapInsta.to_670039860_18579879436020058_96516497729486715_n--1114.jpg",
        width: 1114,
        height: 1393,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/seventh-st/SnapInsta.to_671122459_18579879487020058_6923933191012634030_n--1114.jpg",
        width: 1114,
        height: 1395,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/seventh-st/SnapInsta.to_671185485_18579879451020058_7372215902163634798_n--1114.jpg",
        width: 1114,
        height: 1393,
        sizes: "(max-width: 767px) 62vw, 29vw"
      },
      {
        src: "/seventh-st/SnapInsta.to_671234550_18579879562020058_2834679692219103391_n--1114.jpg",
        width: 1114,
        height: 1394,
        sizes: "(max-width: 767px) 62vw, 29vw"
      }
    ]
  }
];
