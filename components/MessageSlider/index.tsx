"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Button from "@/components/Button";
import { cn } from "@/lib/utils";
import { useMessageSlider } from "./useMessageSlider";

export interface Message {
  id: string | number;
  text: string;
  author: string;
  role?: string;
}

interface MessageSliderProps {
  messages?: Message[];
  className?: string;
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

const DEFAULT_MESSAGES: Message[] = [
  {
    id: 1,
    text: "Uma frase legal e impactante, talvez inspiradora, não sei. Vamos decidir ainda.",
    author: "Fulano de Tal",
    role: "Colega de trabalho",
  },
  {
    id: 2,
    text: "Trabalhar com o Gésio é sempre um aprendizado. Sua atenção aos detalhes na interface e a robustez do código são impressionantes.",
    author: "Ciclano de Souza",
    role: "Tech Lead",
  },
  {
    id: 3,
    text: "O Gésio consegue unir o mundo do design e da engenharia como poucos. O resultado são produtos extremamente polidos e performáticos.",
    author: "Beltrano de Oliveira",
    role: "Product Manager",
  },
  {
    id: 4,
    text: "O Gésio é um profissional que se destaca pela sua dedicação e comprometimento. Ele é um excelente profissional e um grande amigo.",
    author: "Fulano de Tal",
    role: "Colega de trabalho",
  },
];

export default function MessageSlider({
  messages = DEFAULT_MESSAGES,
  className,
  autoPlay = false,
  autoPlayInterval = 6000,
}: MessageSliderProps) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [slideWidth, setSlideWidth] = useState(0);
  const totalSlides = messages.length;

  const {
    currentIndex,
    dragOffset,
    isDragging,
    nextSlide,
    prevSlide,
    goToSlide,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    handleMouseLeave,
  } = useMessageSlider({
    totalSlides,
    autoPlay,
    autoPlayInterval,
  });

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const updateWidth = () => setSlideWidth(viewport.clientWidth);

    updateWidth();
    const observer = new ResizeObserver(updateWidth);
    observer.observe(viewport);
    return () => observer.disconnect();
  }, []);

  const slideOffset = slideWidth > 0 ? -currentIndex * slideWidth + dragOffset : dragOffset;

  return (
    <div
      className={cn(
        "relative w-full max-w-2xl mx-auto z-10 py-4 md:p-6 select-none cursor-grab active:cursor-grabbing",
        className
      )}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative w-full bg-zinc-950 md:bg-transparent rounded-lg p-6">
        <div ref={viewportRef} className="overflow-hidden w-full">
          <div
            className={cn(
              "flex",
              isDragging ? "transition-none" : "transition-transform duration-500 ease-out"
            )}
            style={{ transform: `translateX(${slideOffset}px)` }}
          >
            {messages.map((msg) => (
              <div
                key={msg.id}
                className="shrink-0 flex flex-col-reverse md:flex-col gap-6 text-left overflow-hidden"
                style={{ width: slideWidth > 0 ? slideWidth : "100%" }}
              >
                <div className="flex flex-col gap-2 md:flex-row md:items-center text-2xl font-sans tracking-wide min-w-0">
                  <span className="font-light text-zinc-200">{msg.author},</span>
                  {msg.role && (
                    <span className="text-zinc-500 font-light text-base">{msg.role}</span>
                  )}
                </div>

                <h2 className="text-3xl md:text-5xl font-light text-zinc-100 leading-snug md:leading-normal min-w-0">
                  {msg.text}
                </h2>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 flex items-center gap-4 justify-between mt-10 md:mt-14 w-full">
        <div className="flex gap-4 w-full order-1 md:order-0 justify-center md:justify-start">
          {messages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                "dot-indicator w-6 h-6 rounded-sm transition-colors duration-300 focus:outline-hidden",
                index === currentIndex
                  ? "bg-zinc-100"
                  : "bg-zinc-800 hover:bg-zinc-700"
              )}
              aria-label={`Ir para mensagem ${index + 1}`}
            />
          ))}
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={prevSlide}
          className="order-0 md:order-1"
          aria-label="Mensagem anterior"
        >
          <ChevronLeft className="w-8 h-8" strokeWidth={1} />
        </Button>
        <Button
          variant="inverse"
          size="icon"
          onClick={nextSlide}
          className="order-2"
          aria-label="Próxima mensagem"
        >
          <ChevronRight className="w-8 h-8" strokeWidth={1} />
        </Button>
      </div>
    </div>
  );
}
