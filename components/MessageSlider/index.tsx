"use client";

import { useState, useEffect, useRef, useCallback, TouchEvent, MouseEvent } from "react";
import IndividualShapeGroup from "@/components/DecorativeShapes/IndividualShapeGroup";
import { cn } from "@/lib/utils";

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
];

export default function MessageSlider({
  messages = DEFAULT_MESSAGES,
  className,
  autoPlay = true,
  autoPlayInterval = 6000,
}: MessageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const autoPlayTimer = useRef<NodeJS.Timeout | null>(null);

  const totalSlides = messages.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Reset autoplay timer whenever current index changes or dragging changes
  useEffect(() => {
    if (autoPlay && !isDragging && totalSlides > 1) {
      autoPlayTimer.current = setInterval(nextSlide, autoPlayInterval);
    }
    return () => {
      if (autoPlayTimer.current) {
        clearInterval(autoPlayTimer.current);
      }
    };
  }, [currentIndex, isDragging, autoPlay, autoPlayInterval, totalSlides, nextSlide]);

  // Touch Events
  const handleTouchStart = (e: TouchEvent) => {
    setIsDragging(true);
    startX.current = e.touches[0].clientX;
    setDragOffset(0);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    const currentX = e.touches[0].clientX;
    const diff = currentX - startX.current;

    // Dampen drag at boundary edges
    if ((currentIndex === 0 && diff > 0) || (currentIndex === totalSlides - 1 && diff < 0)) {
      setDragOffset(diff * 0.4);
    } else {
      setDragOffset(diff);
    }
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    const threshold = 60;
    if (dragOffset > threshold) {
      prevSlide();
    } else if (dragOffset < -threshold) {
      nextSlide();
    }
    setDragOffset(0);
  };

  // Mouse Events
  const handleMouseDown = (e: MouseEvent) => {
    // Avoid dragging on button click or dot click
    if ((e.target as HTMLElement).closest("button") || (e.target as HTMLElement).closest(".dot-indicator")) {
      return;
    }
    setIsDragging(true);
    startX.current = e.clientX;
    setDragOffset(0);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const currentX = e.clientX;
    const diff = currentX - startX.current;

    // Dampen drag at boundary edges
    if ((currentIndex === 0 && diff > 0) || (currentIndex === totalSlides - 1 && diff < 0)) {
      setDragOffset(diff * 0.4);
    } else {
      setDragOffset(diff);
    }
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);

    const threshold = 60;
    if (dragOffset > threshold) {
      prevSlide();
    } else if (dragOffset < -threshold) {
      nextSlide();
    }
    setDragOffset(0);
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      handleMouseUp();
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative w-full max-w-2xl mx-auto overflow-hidden px-6 py-10 sm:px-12 sm:py-16 md:px-20 md:py-24 select-none cursor-grab active:cursor-grabbing",
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
      {/* Slider Viewport */}
      <div className="relative overflow-hidden z-10 w-full">
        <div
          className={cn(
            "flex w-full",
            isDragging ? "transition-none" : "transition-transform duration-500 ease-out"
          )}
          style={{
            transform: `translateX(calc(-${currentIndex * 100}% + ${dragOffset}px))`,
          }}
        >
          {messages.map((msg) => (
            <div key={msg.id} className="w-full shrink-0 flex flex-col gap-6 text-left">
              {/* Author & Role */}
              <div className="flex items-center text-sm sm:text-base font-sans tracking-wide">
                <span className="font-semibold text-zinc-200">{msg.author}</span>
                {msg.role && (
                  <span className="text-zinc-500 font-light">, {msg.role}</span>
                )}
              </div>

              {/* Message text */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-zinc-100 leading-snug md:leading-normal min-h-[140px] flex items-center">
                {msg.text}
              </h2>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Controls */}
      <div className="relative z-10 flex items-center justify-between mt-10 md:mt-14 w-full">
        {/* Pagination Dots (Square/rounded-sm indicators) */}
        <div className="flex gap-2">
          {messages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                "dot-indicator w-3 h-3 rounded-xs transition-colors duration-300 focus:outline-hidden",
                index === currentIndex
                  ? "bg-zinc-100 scale-105"
                  : "bg-zinc-800 hover:bg-zinc-700"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <button
            onClick={prevSlide}
            className="w-10 h-10 flex items-center justify-center rounded-lg bg-zinc-950/80 border border-zinc-800 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900 active:scale-95 transition-all duration-200 cursor-pointer"
            aria-label="Previous message"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="w-10 h-10 flex items-center justify-center rounded-lg bg-zinc-100 text-zinc-950 hover:bg-zinc-200 active:scale-95 transition-all duration-200 cursor-pointer shadow-lg shadow-white/5"
            aria-label="Next message"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
