import Landing from "@/_components/Landing";
import About from "@/_components/About";
import Experience from "@/_components/Experience";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen py-24 px-4 sm:px-8">
        <Landing />
        <About />
        <Experience />
    </div>
  );
}
