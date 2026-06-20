import IndividualShapeGroup from "@/components/DecorativeShapes/IndividualShapeGroup";
import DecorativeShapes from "../components/DecorativeShapes";
import MessageSlider from "../components/MessageSlider";

export default function Home() {
  return (
    <div className="flex flex-col w-full items-center justify-center">
      <main className="flex flex-1 z-1 w-full flex-col items-center justify-center">
        <div className="flex min-h-screen max-w-5xl flex-col items-center justify-center gap-4 text-center px-4 md:px-8">
          <h1 className="text-6xl md:text-7xl font-bold">
            <span>
              Gésio
            </span>
            {" "}
            <span className="font-extralight">de Moura</span>
          </h1>
          <p className="text-2xl md:text-3xl font-extralight text-zinc-300">Engenheiro de sistemas e designer de interfaces</p>
        </div>

        <div className="flex relative min-h-screen items-center justify-center w-full bg-zinc-100 dark:bg-zinc-950 px-4 md:px-8">
        </div>
        <div className="flex relative min-h-screen items-center justify-center w-full bg-white dark:bg-black px-4 md:px-8">
          <div className="absolute left-0 top-0 gap-4 select-none pointer-events-none text-zinc-100 w-36 dark:text-zinc-950 h-full flex flex-col items-center">
            <IndividualShapeGroup className="h-full w-auto" />
            <IndividualShapeGroup className="h-full w-auto" />
          </div>

          <MessageSlider />
          <div className="absolute right-0 top-0 gap-4 select-none pointer-events-none text-zinc-100 w-36 dark:text-zinc-950 h-full flex flex-col items-center justify-center">
            <IndividualShapeGroup className="h-full w-auto" />
            <IndividualShapeGroup className="h-full w-auto" />
          </div>
        </div>
      </main>
      <DecorativeShapes className="fixed h-screen top-0 left-0 z-0 w-full text-zinc-100 dark:text-zinc-950" />
    </div>
  );
}
