"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ_ITEMS = [
  {
    value: "item-1",
    question: "Quem é Gésio de Moura?",
    answer: "Gésio é um profissional híbrido que une desenvolvimento de software e design de interfaces, com foco em criar produtos digitais que geram impacto real para negócios e usuários.",
  },
  {
    value: "item-2",
    question: "O que significa ser \"uma mistura de dev com designer\"?",
    answer: "Significa atuar na interseção entre estética e código, garantindo que o design seja viável tecnicamente e que a implementação final seja 100% fiel à visão de UI/UX, reduzindo o atrito na comunicação entre equipes.",
  },
  {
    value: "item-3",
    question: "Você trabalha com design e desenvolvimento ao mesmo tempo?",
    answer: "Sim, dependendo da necessidade do projeto. Posso atuar desde a concepção visual e prototipação no Figma até o desenvolvimento frontend em React/Next.js e engenharia de sistemas no backend.",
  },
  {
    value: "item-4",
    question: "Quais tecnologias de desenvolvimento você domina?",
    answer: "Tenho forte domínio em TypeScript, React, Next.js, Node.js, Tailwind CSS e arquitetura de sistemas de alta performance, sempre prezando por código limpo, componentização e acessibilidade.",
  },
];

export default function FAQ() {
  return (
    <section
      id="sobre-mim"
      className="flex relative min-h-screen items-center justify-center w-full px-4 md:px-8 py-20"
    >
      <div className="flex flex-col w-full max-w-[675px] gap-16 z-10">
        <h2 className="text-3xl font-extrabold text-white text-left">
          Sobre mim
        </h2>

        <Accordion type="single" collapsible className="w-full flex flex-col gap-4">
          {FAQ_ITEMS.map((item) => (
            <AccordionItem
              key={item.value}
              value={item.value}
              className="bg-zinc-800 border-2 border-transparent rounded-xl transition-all duration-300 hover:bg-zinc-700 [&[data-state=open]]:bg-zinc-950 [&[data-state=open]]:border-zinc-800 hover:[&[data-state=open]]:bg-zinc-900 hover:[&[data-state=open]]:border-zinc-700"
            >
              <AccordionTrigger className="text-white w-full hover:no-underline text-lg font-bold p-4 cursor-pointer">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-white w-full text-base leading-relaxed px-4 pb-4">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
