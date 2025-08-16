import Landing from "@/_components/Landing";
import About from "@/_components/About";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen space-y-4 py-24 px-4 sm:px-8">
        <Landing />
        <About />
    </div>
  );
}
