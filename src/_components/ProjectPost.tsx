import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Github } from "lucide-react";
import PageHeader from "./PageHeader";
import type { ProjectEntry } from "../_projects";

// Shared blog layout for every project: back button, header, preview image, then the post.
// The article's descendant selectors style the plain tags each Post writes.
const ProjectPost = ({ project }: { project: ProjectEntry }) => {
  const { title, description, image, github, Post } = project;

  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex flex-col items-start text-left w-full sm:max-w-md md:max-w-lg lg:max-w-124">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 rounded-full border border-outline px-4 py-1.5 text-sm font-medium transition-colors duration-300 hover:bg-control-hover hover:text-control-hover-foreground"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          All Projects
        </Link>

        <div className="w-full mt-8">
          <PageHeader title={title} description={description} />
        </div>

        <div className="flex justify-center w-full mt-5">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-b-2 border-accent pb-1 text-xs font-bold uppercase tracking-[0.14em] transition-colors duration-300 hover:text-link"
          >
            <Github size={14} aria-hidden="true" />
            View on GitHub
          </a>
        </div>

        <div className="w-full h-56 md:h-64 mt-10 rounded-lg overflow-hidden border border-border bg-surface-muted flex items-center justify-center">
          <Image src={image} alt={`${title} preview`} width={496} height={256} className="object-contain w-full h-full" />
        </div>

        <article
          className="w-full mt-10 text-base text-muted leading-relaxed
            [&_h2]:mt-10 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-foreground [&>h2:first-child]:mt-0
            [&_h3]:mt-7 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-foreground
            [&_p]:mt-3
            [&_ul]:mt-3 [&_ul]:ml-4 [&_ul]:list-disc [&_ul]:list-outside [&_ul]:space-y-2
            [&_blockquote]:mt-5 [&_blockquote]:border-l-2 [&_blockquote]:border-accent [&_blockquote]:pl-4 [&_blockquote]:italic
            [&_code]:rounded [&_code]:bg-surface-muted [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:text-sm
            [&_a]:text-link"
        >
          <Post />
        </article>
      </div>
    </div>
  );
};

export default ProjectPost;
