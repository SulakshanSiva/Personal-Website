import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Github } from "lucide-react";

interface ProjectProps {
  href: string;
  image: string;
  title: string;
  description: string;
  github: string;
}

const Project = ({ href, image, title, description, github }: ProjectProps) => {
  return (
    // The title link stretches over the whole card (after:inset-0) so the card opens the blog page;
    // the GitHub link sits above it (relative z-10) since links can't be nested
    <div className="relative border border-border bg-surface rounded-lg shadow-sm p-4 w-full flex flex-col md:flex-row gap-6 items-start hover:border-accent transition-colors">
      {/* Image */}
      <div className="w-full md:w-40 h-48 md:h-40 rounded-md overflow-hidden border border-border flex-shrink-0 flex items-center justify-center bg-surface-muted">
        <Image
          src={image}
          alt={`${title} preview`}
          width={160}
          height={160}
          className="object-contain w-full h-full"
        />
      </div>

      {/* Right side: title + GitHub + description */}
      <div className="flex-1 flex flex-col w-full">
        {/* Title and GitHub icon inline */}
        <div className="flex justify-between items-center mt-2">
          <h2 className="text-md font-semibold">
            <Link href={href} className="after:absolute after:inset-0 after:rounded-lg">
              {title}
            </Link>
          </h2>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 text-subtle hover:text-link transition"
            aria-label="View on GitHub"
            title="View on GitHub"
          >
            <Github size={20} />
          </a>
        </div>

        {/* Description */}
        <p className="text-muted mt-2 whitespace-pre-line">{description}</p>

        {/* Visible cue that the card opens the blog page. It sits above the stretched title link (relative z-10)
            so it can highlight on its own hover; hidden from keyboard and screen readers since the title link covers it */}
        <Link
          href={href}
          aria-hidden="true"
          tabIndex={-1}
          className="group/read relative z-10 inline-flex items-center gap-1.5 self-start mt-4 border-b-2 border-accent pb-1 text-xs font-bold uppercase tracking-[0.14em] transition-colors duration-300 hover:text-link"
        >
          Read more
          <ArrowRight size={14} className="transition-transform duration-300 group-hover/read:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

export default Project;
