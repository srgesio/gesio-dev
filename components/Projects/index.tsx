import React from "react";
import { projects } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";
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
      className="flex relative min-h-screen w-full items-center justify-center px-4 md:px-6"
    >
      <div className="flex w-full flex-col gap-6">
        <div className="flex items-center justify-between">
          <h2 className="text-4xl font-black text-white">Projetos</h2>
          <Button as="a" href="#experiencias" variant="secondary" size="default">
            Experiências
            <ChevronRight className="size-6" />
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[3fr_2fr_3fr]">
          {projects.map((project) => (
            <div key={project.id} className={gridPosition[project.id] ?? ""}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
