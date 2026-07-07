import React from "react";
import { experiences } from "@/lib/experiences";
import Card from "@/components/Card";
import Button from "@/components/Button";
import { ChevronRight } from "lucide-react";

const gridPosition: Record<string, string> = {
  quality: "lg:[grid-area:1/1/4/5]",
  metodo: "lg:[grid-area:1/5/3/9]",
  vtex: "lg:[grid-area:3/5/4/9]",
  tre: "lg:[grid-area:4/1/7/6]",
  sesap: "lg:[grid-area:4/6/7/9]",
  tads: "lg:[grid-area:7/1/8/5]",
  design: "lg:[grid-area:7/5/8/9]",
};

export default function Experience() {
  return (
    <section
      id="experiencias"
      className="flex relative min-h-screen w-full bg-zinc-950 items-center justify-center px-4 py-8 md:px-6"
    >
      <div className="flex w-full flex-col gap-6">
        <div className="flex">
          <h2 className="text-3xl font-black text-white">
            Experiência profissional
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-8">
          {experiences.map((experience) => (
            <div
              key={experience.id}
              className={gridPosition[experience.id] ?? ""}
            >
              <Card item={experience} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
