import React from "react";
import Image from "next/image";

interface DecorativePatternProps {
  className?: string;
  rows?: number;
  variant?: "hero" | "about";
}

export const DecorativePattern: React.FC<DecorativePatternProps> = ({
  className = "",
  rows = 15,
  variant = "hero",
}) => {
  const images = [
    "/patterns/ellipse-33.svg",
    "/patterns/group-35.svg",
    "/patterns/ellipse-34.svg",
    "/patterns/group-36.svg",
    "/patterns/group-37.svg",
  ];

  return (
    <div className={`flex flex-col gap-0 select-none overflow-hidden ${className}`}>
      {Array.from({ length: rows }).map((_, i) => (
        <div key={i} className="w-[106px] h-[106px] flex items-center justify-center">
          <Image
            src={images[i % images.length]}
            alt="Pattern element"
            width={106}
            height={106}
            className="w-full h-full object-contain opacity-40 grayscale contrast-125"
          />
        </div>
      ))}
    </div>
  );
};
