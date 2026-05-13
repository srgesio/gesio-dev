import React from "react";
import { Accordion } from "./Accordion";
import { DecorativePattern } from "./DecorativePattern";
import { Button } from "./Button";

export const About: React.FC = () => {
  const faqItems = [
    {
      question: "Quem é Gésio de Moura?",
      answer: "Gésio é um profissional híbrido que une desenvolvimento de software e design de interfaces, com foco em criar produtos digitais que geram impacto real para negócios e usuários.",
      isOpen: true,
    },
    {
      question: "O que significa ser \"uma mistura de dev com designer\"?",
      answer: "Significa ter a visão estética e funcional de um designer aliada à capacidade técnica de implementar essas soluções de forma eficiente e escalável.",
    },
    {
      question: "Você trabalha com design e desenvolvimento ao mesmo tempo?",
      answer: "Sim, atuo em todo o ciclo de vida do produto, desde a concepção visual e prototipagem até a implementação do código final.",
    },
    {
      question: "Quais tecnologias de desenvolvimento você domina?",
      answer: "Domino tecnologias modernas como React, Next.js, TypeScript, Tailwind CSS, Node.js e ferramentas de design como Figma.",
    },
  ];

  return (
    <section className="px-6 pb-6">
      <div className="flex flex-col md:flex-row gap-8 items-stretch min-h-[887px]">
        {/* Pattern Section - Desktop */}
        <div className="hidden md:block bg-dark-gray rounded-lg overflow-hidden relative w-full max-w-[692px] min-h-[600px]">
           <div className="flex flex-wrap gap-0 h-full">
                {Array.from({ length: 6 }).map((_, i) => (
                    <DecorativePattern key={i} rows={10} className="w-1/6" />
                ))}
           </div>
        </div>

        {/* Mobile Pattern */}
        <div className="md:hidden bg-dark-gray rounded-lg overflow-hidden h-[300px] relative">
            <div className="flex flex-wrap gap-0">
                {Array.from({ length: 4 }).map((_, i) => (
                    <DecorativePattern key={i} rows={3} className="w-1/4" />
                ))}
            </div>
        </div>

        {/* FAQ Content */}
        <div className="flex-1 flex flex-col justify-center px-4 md:px-8 py-12">
          <h2 className="text-white text-[32px] font-extrabold mb-8 md:mb-16">
            Sobre mim
          </h2>
          
          <div className="mb-12">
            <Accordion items={faqItems} />
          </div>

          <div className="flex justify-end">
            <Button variant="secondary" className="px-8 py-4">
              Ver experiências
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
