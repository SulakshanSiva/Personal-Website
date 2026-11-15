import React from "react";
import Project from "./Project";
import PageHeader from "./PageHeader";
import { projects } from "../_projects";

const Projects = () => {
  return (
    <div className="flex flex-col items-center w-full">
      {/* MATCHES About.tsx wrapper to align header */}
      <div className="flex flex-col items-start text-left w-full sm:max-w-md md:max-w-lg lg:max-w-124">
        <div className="w-full">
          <PageHeader title="Projects" description="Things I've built outside of work." />
        </div>

        {/* Single column down the middle */}
        <div className="flex flex-col gap-6 mt-10 w-full">
          {projects.map((p) => (
            <Project
              key={p.id}
              href={`/projects/${p.id}`}
              image={p.image}
              title={p.title}
              description={p.description}
              github={p.github}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
