import React from "react";
import type { Project } from "@/lib/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex flex-col justify-between h-full gap-8 rounded-lg bg-[#181818] p-6">
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-1 flex-col gap-1">
          <h3 className="text-2xl font-extrabold text-white">
            {project.title}
          </h3>
          {project.subtitle && (
            <p className="text-lg font-light text-white">
              {project.subtitle}
            </p>
          )}
        </div>
        {project.date && (
          <span className="shrink-0 text-lg font-light text-white">
            {project.date}
          </span>
        )}
      </div>

      {project.details.length > 0 && (
        <div className="flex flex-col gap-2">
          {project.details.map((detail, index) => (
            <p key={index} className="text-lg font-light text-white">
              {detail}
            </p>
          ))}
        </div>
      )}
    </article>
  );
}
