import { useState, useEffect, useRef, useCallback, TouchEvent, MouseEvent } from "react";

interface UseMessageSliderProps {
  totalSlides: number;
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

export function useMessageSlider({
  totalSlides,
  autoPlay = false,
  autoPlayInterval = 6000,
}: UseMessageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const autoPlayTimer = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = useCallback(() => {
    if (totalSlides === 0) return;
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    if (totalSlides === 0) return;
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  useEffect(() => {
    if (!autoPlay) return;
    if (isDragging) return;
    if (totalSlides <= 1) return;

    autoPlayTimer.current = setInterval(nextSlide, autoPlayInterval);
    return () => {
      if (autoPlayTimer.current) {
        clearInterval(autoPlayTimer.current);
      }
    };
  }, [currentIndex, isDragging, autoPlay, autoPlayInterval, totalSlides, nextSlide]);

  const handleTouchStart = (e: TouchEvent) => {
    setIsDragging(true);
    startX.current = e.touches[0].clientX;
    setDragOffset(0);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    const currentX = e.touches[0].clientX;
    const diff = currentX - startX.current;

    if ((currentIndex === 0 && diff > 0) || (currentIndex === totalSlides - 1 && diff < 0)) {
      setDragOffset(diff * 0.4);
      return;
    }
    setDragOffset(diff);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    const threshold = 60;
    if (dragOffset > threshold) {
      prevSlide();
    }
    if (dragOffset < -threshold) {
      nextSlide();
    }
    setDragOffset(0);
  };

  const handleMouseDown = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.closest("button")) return;
    if (target.closest(".dot-indicator")) return;

    setIsDragging(true);
    startX.current = e.clientX;
    setDragOffset(0);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const currentX = e.clientX;
    const diff = currentX - startX.current;

    if ((currentIndex === 0 && diff > 0) || (currentIndex === totalSlides - 1 && diff < 0)) {
      setDragOffset(diff * 0.4);
      return;
    }
    setDragOffset(diff);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);

    const threshold = 60;
    if (dragOffset > threshold) {
      prevSlide();
    }
    if (dragOffset < -threshold) {
      nextSlide();
    }
    setDragOffset(0);
  };

  const handleMouseLeave = () => {
    if (!isDragging) return;
    handleMouseUp();
  };

  return {
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
  };
}
