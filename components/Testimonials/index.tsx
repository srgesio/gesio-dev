import React from "react";
import IndividualShapeGroup from "@/components/DecorativeShapes/IndividualShapeGroup";
import MessageSlider from "@/components/MessageSlider";

export default function Testimonials() {
  return (
    <section 
      id="depoimentos"
      className="flex relative min-h-screen items-center justify-center w-full bg-white dark:bg-black px-4 md:px-8"
    >
      <div className="absolute left-0 top-0 gap-4 select-none pointer-events-none text-zinc-100 w-36 dark:text-zinc-950 h-full flex flex-col items-center">
        <IndividualShapeGroup className="h-full w-auto" />
        <IndividualShapeGroup className="h-full w-auto" />
      </div>

      <MessageSlider />
      
      <div className="absolute right-0 top-0 gap-4 select-none pointer-events-none text-zinc-100 w-36 dark:text-zinc-950 h-full flex flex-col items-center justify-center">
        <IndividualShapeGroup className="h-full w-auto" />
        <IndividualShapeGroup className="h-full w-auto" />
      </div>
    </section>
  );
}
