import type { Metadata } from "next";
import Experience from "@/_components/Experience";

export const metadata: Metadata = {
  title: "Experience | Sulakshan Siva",
};

export default function ExperiencePage() {
  return (
    <div className="flex flex-col items-center px-4 sm:px-8 pt-10 pb-24 md:pt-14">
      <Experience />
    </div>
  );
}
