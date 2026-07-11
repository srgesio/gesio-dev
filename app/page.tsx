import Hero from "@/components/Hero";
import FAQ from "@/components/FAQ";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Testimonials from "@/components/Testimonials";
import DecorativeShapes from "@/components/DecorativeShapes";

export default function Home() {
  return (
    <div className="flex flex-col w-full items-center justify-center">
      <div className="flex flex-1 z-1 w-full flex-col items-center justify-center">
        <Hero />
        <FAQ />
        <Experience />
        <Testimonials />
        <Projects />
      </div>
      <DecorativeShapes className="fixed h-screen top-0 left-0 z-0 w-full scale-[0.55] md:scale-100 origin-top text-zinc-100 dark:text-zinc-950" />
    </div>
  );
}
