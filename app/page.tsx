import Logo from "../components/Logo";
import DecorativeShapes from "../components/DecorativeShapes";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full min-h-screen max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <DecorativeShapes className="fixed top-0 left-0 z-0 w-full text-zinc-100 dark:text-zinc-950" />
      </main>
    </div>
  );
}
