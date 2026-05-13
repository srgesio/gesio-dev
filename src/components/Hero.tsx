import React from "react";
import { Button } from "./Button";
import { DecorativePattern } from "./DecorativePattern";

export const Hero: React.FC = () => {
  return (
    <section className="px-6 pb-6">
      <div className="bg-dark-gray rounded-lg overflow-hidden relative flex flex-col md:flex-row min-h-[700px] md:min-h-[899px] items-center justify-center">
        {/* Pattern Columns - Desktop */}
        <DecorativePattern className="absolute left-0 top-0 h-full hidden md:flex" rows={10} />
        <DecorativePattern className="absolute right-0 top-0 h-full hidden md:flex scale-x-[-1]" rows={10} />
        <DecorativePattern className="absolute left-[121px] top-0 h-full hidden xl:flex" rows={10} />
        <DecorativePattern className="absolute right-[121px] top-0 h-full hidden xl:flex scale-x-[-1]" rows={10} />

        {/* Content */}
        <div className="relative z-10 text-center flex flex-col items-center max-w-[800px] px-4">
          <p className="text-muted-gray text-[16px] md:text-[32px] font-light md:mb-4">
            Uma mistura inteligente de
          </p>
          <h1 className="text-white text-[48px] md:text-[64px] font-bold leading-tight mb-8 md:mb-12">
            dev com designer
          </h1>
          
          <div className="flex flex-col md:flex-row gap-4">
            <Button variant="primary" className="px-8 py-4">
              Ver experiências
            </Button>
            <Button variant="secondary" className="px-8 py-4">
              Ver projetos
            </Button>
          </div>
        </div>

        {/* Mobile Pattern (Simplified) */}
        <div className="absolute top-0 w-full h-32 md:hidden overflow-hidden opacity-20">
             <div className="flex flex-wrap gap-0">
                {Array.from({ length: 4 }).map((_, i) => (
                    <DecorativePattern key={i} rows={1} className="w-1/4" />
                ))}
             </div>
        </div>
      </div>
    </section>
  );
};
