import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectGallery } from "@/app/components/ProjectGallery";
import { projects } from "@/app/data/projects";
import { JsonLd, breadcrumbSchema, siteName, siteUrl } from "@/app/lib/site";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

const describe = (label: string) =>
  `${label}, photographed by Austin Leis. Interiors, architecture and still life photography made in Los Angeles for design studios, brands and publications.`;

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return {};

  const description = describe(project.label);
  const cover = project.images[0];

  return {
    title: project.label,
    description,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      type: "article",
      title: `${project.label} | Austin Leis`,
      description,
      url: `/projects/${project.slug}`,
      images: [{ url: cover.src, width: cover.width, height: cover.height, alt: project.label }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.label} | Austin Leis`,
      description,
      images: [cover.src],
    },
  };
}

export default async function ProjectPage({ params }: Params) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  const gallery = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: project.label,
    description: describe(project.label),
    url: `${siteUrl}/projects/${project.slug}`,
    author: { "@id": `${siteUrl}/#austin-leis` },
    copyrightHolder: { "@id": `${siteUrl}/#austin-leis` },
    associatedMedia: project.images.map((image) => ({
      "@type": "ImageObject",
      contentUrl: `${siteUrl}${image.src}`,
      width: image.width,
      height: image.height,
      creator: { "@id": `${siteUrl}/#austin-leis` },
      creditText: siteName,
    })),
  };

  const breadcrumbs = breadcrumbSchema([
    { name: "Home", path: "" },
    { name: "Work", path: "/work" },
    { name: project.label, path: `/projects/${project.slug}` },
  ]);

  return (
    <>
      <JsonLd schema={[gallery, breadcrumbs]} />
      <ProjectGallery project={project} />
    </>
  );
}
