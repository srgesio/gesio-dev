import React from "react";

export default function Hero() {
  return (
    <section className="flex min-h-screen max-w-5xl flex-col items-center justify-center gap-4 text-center px-4 md:px-8">
      <h1 className="text-6xl md:text-7xl font-bold">
        <span>Gésio</span>{" "}
        <span className="font-extralight">de Moura</span>
      </h1>
      <p className="text-2xl md:text-3xl font-extralight text-zinc-300">
        Engenheiro de sistemas e designer de interfaces
      </p>
    </section>
  );
}
