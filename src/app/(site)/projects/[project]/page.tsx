import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectPost from "@/_components/ProjectPost";
import { getProject, projects } from "@/_projects";

type Params = Promise<{ project: string }>;

// Build one static page per project at build time
export const generateStaticParams = () => projects.map((p) => ({ project: p.id }));

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const project = getProject((await params).project);
  return { title: `${project?.title ?? "Project"} | Sulakshan Siva` };
}

export default async function ProjectPage({ params }: { params: Params }) {
  const project = getProject((await params).project);
  if (!project) notFound();

  return (
    <div className="flex flex-col items-center px-4 sm:px-8 pt-10 pb-24 md:pt-14">
      <ProjectPost project={project} />
    </div>
  );
}
