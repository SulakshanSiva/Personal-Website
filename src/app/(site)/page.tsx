import Landing from "@/_components/Landing";
import About from "@/_components/About";

export default function Home() {
  return (
    // On phones, center the content vertically in the space below the header
    <div className="flex flex-col items-center justify-center min-h-[calc(100svh-76px)] pt-6 pb-10 px-4 sm:px-8 md:justify-start md:min-h-0 md:pt-20 md:pb-24">
        <Landing />
        <About />
    </div>
  );
}
