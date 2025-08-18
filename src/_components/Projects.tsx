import React from "react";
import Project from "./Project";
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
  {
    image: TikTok.src,
    title: "TikTrend",
    description:
      "A machine learning model designed to detect and predict current/future TikTok trends.",
    github: "https://github.com/SulakshanSiva/TikTrend",
  },
];

const Projects = () => {
  return (
    <div className="flex flex-col items-center w-full py-12">
      {/* MATCHES About.tsx wrapper to align header */}
      <div className="flex flex-col items-start text-left w-full sm:max-w-md md:max-w-lg lg:max-w-124">
        <h1 className="text-lg font-bold border-b-2 border-black">
          Projects
        </h1>

        {/* Single column down the middle */}
        <div className="flex flex-col gap-6 mt-4 w-full">
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
