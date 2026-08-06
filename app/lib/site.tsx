export const siteUrl = "https://austinleis.com";

export const siteName = "Austin Leis";

export const siteDescription =
  "Austin Leis is a photographer based in Los Angeles, working with design studios, brands and publications on interiors, architecture and still life.";

export const instagramUrl = "https://www.instagram.com/";

export const ogImage = {
  url: "/opengraph-image.png",
  width: 1200,
  height: 630,
  alt: "Austin Leis",
};

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteUrl}/#austin-leis`,
    name: siteName,
    jobTitle: "Photographer",
    description: siteDescription,
    url: siteUrl,
    image: `${siteUrl}/opengraph-image.png`,
    email: "austin@austinleis.com",
    sameAs: [instagramUrl],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Los Angeles",
      addressRegion: "CA",
      addressCountry: "US",
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: siteName,
    url: siteUrl,
    description: siteDescription,
    publisher: { "@id": `${siteUrl}/#austin-leis` },
  };
}

export function breadcrumbSchema(trail: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.path}`,
    })),
  };
}

export function JsonLd({ schema }: { schema: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
