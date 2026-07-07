import React from "react";
import { projects } from "@/lib/projects";
import Card from "@/components/Card";
import Button from "@/components/Button";
import { ChevronRight } from "lucide-react";

const gridPosition: Record<string, string> = {
  noda: "lg:[grid-area:1/1/3/3]",
  patente: "lg:[grid-area:3/1/4/3]",
  listei: "lg:[grid-area:1/3/4/4]",
  termocrivo: "lg:[grid-area:4/1/5/2]",
  checkapp: "lg:[grid-area:4/2/5/3]",
  "visual-thinker": "lg:[grid-area:4/3/5/4]",
};

export default function Projects() {
  return (
    <section
      id="projetos"
      className="flex relative min-h-screen w-full bg-zinc-950 items-center justify-center px-4 py-8 md:px-6"
    >
      <div className="flex w-full flex-col gap-6">
        <div className="flex">
          <h2 className="text-3xl font-black text-white">Projetos</h2>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[3fr_2fr_3fr]">
          {projects.map((project) => (
            <div key={project.id} className={gridPosition[project.id] ?? ""}>
              <Card item={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
