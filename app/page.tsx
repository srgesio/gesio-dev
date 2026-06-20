import Logo from "../components/Logo";
import DecorativeShapes from "../components/DecorativeShapes";

export default function Home() {
  return (
    <div className="flex flex-col w-full items-center justify-center">
      <main className="flex min-h-screen gap-4 flex-1 z-1 w-full max-w-5xl flex-col items-center justify-center px-4 md:px-8">
        <h1 className="text-6xl md:text-7xl font-bold text-center">
          <span>
            Gésio
          </span>
          {" "}
          <span className="font-extralight">de Moura</span>
        </h1>
        <p className="text-2xl md:text-3xl font-extralight text-center text-zinc-300">Engenheiro de sistemas e designer de interfaces</p>
      </main>
      <DecorativeShapes className="fixed h-screen top-0 left-0 z-0 w-full text-zinc-100 dark:text-zinc-950" />
    </div>
  );
}
