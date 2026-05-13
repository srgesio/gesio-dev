"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface AccordionItemProps {
  question: string;
  answer?: string;
  isOpen?: boolean;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  question,
  answer,
  isOpen: initialOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState(initialOpen);

  return (
    <div
      className={`rounded-lg overflow-hidden transition-all border-2 border-transparent ${
        isOpen ? "bg-faq-bg border-accent-gray p-4" : "bg-accent-gray p-4"
      }`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left"
      >
        <span className="font-bold text-[18px] text-white pr-4">{question}</span>
        <ChevronDown
          className={`shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
          size={24}
        />
      </button>
      {isOpen && answer && (
        <div className="mt-2 text-[16px] text-white leading-[24px]">
          {answer}
        </div>
      )}
    </div>
  );
};

interface AccordionProps {
  items: AccordionItemProps[];
}

export const Accordion: React.FC<AccordionProps> = ({ items }) => {
  return (
    <div className="flex flex-col gap-4 w-full">
      {items.map((item, index) => (
        <AccordionItem key={index} {...item} />
      ))}
    </div>
  );
};
