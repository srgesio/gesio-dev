import React from "react";
import { cn } from "@/lib/utils";

interface CardItem {
  title: string;
  subtitle?: string;
  date: string;
  details: string[];
  hoverColor?: string;
}

export default function Card({ item }: { item: CardItem }) {
  return (
    <article className={cn("flex h-full flex-col justify-between gap-8 rounded-lg bg-zinc-800 p-6 transition-colors duration-200", item.hoverColor ? `hover:bg-${item.hoverColor}` : "hover:bg-zinc-700")}>
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-1 flex-col gap-1">
          <h3 className="text-2xl font-extrabold text-white">{item.title}</h3>
          {item.subtitle && (
            <p className="text-lg font-light text-white">{item.subtitle}</p>
          )}
        </div>
        {item.date && (
          <span className="shrink-0 text-xs font-light text-white">
            {item.date}
          </span>
        )}
      </div>

      {item.details.length > 0 && (
        <div className="flex flex-col gap-2">
          {item.details.map((detail, index) => (
            <p key={index} className="text-lg font-light text-white">
              {detail}
            </p>
          ))}
        </div>
      )}
    </article>
  );
}
