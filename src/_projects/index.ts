import type { ComponentType } from "react";
import Helpdesk from "../assets/images/HelpDesk.png";
import HelpdeskPost from "./HelpdeskPost";

// Every project lives here once: the Projects page lists them in this order,
// and /projects/[project] renders each one's Post as its blog page.
// To add a project: write its Post component in this folder, then add an entry below.
export interface ProjectEntry {
  id: string;
  title: string;
  description: string;
  image: string;
  github: string;
  Post: ComponentType;
}

export const projects: ProjectEntry[] = [
  {
    id: "helpdesk",
    title: "Helpdesk",
    description:
      "A digital classroom created to improve the student experience at the University of Guelph. Currently used by 200+ students in the School of Computer Science.",
    image: Helpdesk.src,
    github: "https://github.com/SulakshanSiva/UOG-HelpDesk",
    Post: HelpdeskPost,
  },
];

export const getProject = (id: string) => projects.find((p) => p.id === id);
