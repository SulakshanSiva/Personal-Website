import React from "react";
import Image from "next/image";
import { Github } from "lucide-react";

interface ProjectProps {
  image: string;
  title: string;
  description: string;
  github: string;
}

const Project: React.FC<ProjectProps> = ({ image, title, description, github }) => {
  return (
    <div className="border border-gray-300 rounded-lg shadow-sm p-4 w-full flex flex-col md:flex-row gap-6 items-start">
      {/* Image */}
      <div className="w-full md:w-40 h-48 md:h-40 rounded-md overflow-hidden border flex-shrink-0 flex items-center justify-center bg-gray-50">
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
          <h2 className="text-md font-semibold">{title}</h2>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 transition"
            aria-label="View on GitHub"
            title="View on GitHub"
          >
            <Github size={20} />
          </a>
        </div>

        {/* Description */}
        <p className="text-gray-800 mt-2 whitespace-pre-line">{description}</p>
      </div>
    </div>
  );
};

export default Project;
