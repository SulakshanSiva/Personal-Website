import type { Metadata } from "next";
import Projects from "@/_components/Projects";

export const metadata: Metadata = {
  title: "Projects | Sulakshan Siva",
};

export default function ProjectsPage() {
  return (
    <div className="flex flex-col items-center px-4 sm:px-8 pt-10 pb-24 md:pt-14">
      <Projects />
    </div>
  );
}
