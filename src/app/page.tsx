import Landing from "@/_components/Landing";
import About from "@/_components/About";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-center min-h-screen space-y-16 py-16">
        <Landing />
        <About />
    </div>
  );
}
