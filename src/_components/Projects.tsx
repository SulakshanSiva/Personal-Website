import React from "react";
import Project from "./Project";
import PageHeader from "./PageHeader";
import TikTok from "../assets/images/TikTok.png"
import Helpdesk from "../assets/images/HelpDesk.png"

const projects = [
  {
    image: Helpdesk.src,
    title: "Helpdesk",
    description:
      "A digital classroom created to improve the student experience at the University of Guelph. Currently used by 50+ students in the School of Computer Science.",
    github: "https://github.com/SulakshanSiva/UOG-HelpDesk",
  },
];

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
          {projects.map((p, idx) => (
            <Project
              key={idx}
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
