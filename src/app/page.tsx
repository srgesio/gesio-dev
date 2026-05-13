import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col max-w-[1440px] mx-auto overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <Footer />
    </main>
  );
}
