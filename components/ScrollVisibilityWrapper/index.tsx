"use client";

import { useScrollDirection } from "@/app/hooks/useScrollDirection";

interface ScrollVisibilityWrapperProps {
    children: React.ReactNode;
    as?: "div" | "header" | "footer" | "nav" | "aside";
    className?: string;
    invert?: boolean;
    direction?: "up" | "down" | "fade";
    thresholdUp?: number;
    thresholdDown?: number;
}

export default function ScrollVisibilityWrapper({
    children,
    as = "div",
    className = "",
    invert = false,
    direction = "up",
    thresholdUp = 50,
    thresholdDown = 10,
}: ScrollVisibilityWrapperProps) {
    const scrollDirection = useScrollDirection({ thresholdUp, thresholdDown });

    let isHidden = scrollDirection === "down";
    if (invert) {
        isHidden = scrollDirection === "up";
    }

    let transitionClass = isHidden ? "-translate-y-full opacity-0 pointer-events-none" : "translate-y-0 opacity-100";

    if (direction === "down") {
        transitionClass = isHidden ? "translate-y-full opacity-0 pointer-events-none" : "translate-y-0 opacity-100";
    }

    if (direction === "fade") {
        transitionClass = isHidden ? "opacity-0 pointer-events-none" : "opacity-100";
    }

    const Component = as;

    return (
        <Component
            className={`transition-all duration-300 ease-in-out ${transitionClass} ${className}`}
        >
            {children}
        </Component>
    );
}
