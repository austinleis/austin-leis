import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectGallery } from "@/app/components/ProjectGallery";
import { projects } from "@/app/data/projects";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return {};

  return {
    title: `${project.title} - Austin Leis`,
    description: `${project.title}, photographed by Austin Leis, ${project.year}.`,
    alternates: { canonical: `/projects/${project.slug}` },
  };
}

export default async function ProjectPage({ params }: Params) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  return <ProjectGallery project={project} />;
}
