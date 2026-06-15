"use client";

import { useState, useEffect, useRef } from "react";

export type ScrollDirection = "up" | "down";

interface ScrollDirectionOptions {
    thresholdUp?: number;
    thresholdDown?: number;
}

export function useScrollDirection(options?: ScrollDirectionOptions) {
    const thresholdUp = options?.thresholdUp ?? 50;
    const thresholdDown = options?.thresholdDown ?? 10;

    const [scrollDirection, setScrollDirection] = useState<ScrollDirection>("up");
    const dirRef = useRef<ScrollDirection>("up");

    useEffect(() => {
        let lastScrollY = window.pageYOffset;
        let accumUp = 0;
        let accumDown = 0;

        const updateScrollDirection = () => {
            const scrollY = window.pageYOffset;
            const diff = scrollY - lastScrollY;

            const isAtTop = scrollY <= 50;
            const isAtTopAndAlreadyUp = isAtTop && dirRef.current === "up";
            
            if (isAtTopAndAlreadyUp) {
                accumUp = 0;
                accumDown = 0;
                lastScrollY = scrollY;
                return;
            }
            
            const isAtTopAndNeedsUpdate = isAtTop && dirRef.current !== "up";
            if (isAtTopAndNeedsUpdate) {
                dirRef.current = "up";
                setScrollDirection("up");
                accumUp = 0;
                accumDown = 0;
                lastScrollY = scrollY;
                return;
            }

            const isScrollingDown = diff > 0;
            if (isScrollingDown) {
                accumDown += diff;
                accumUp = 0;
                lastScrollY = scrollY;
            }

            const shouldHide = isScrollingDown && accumDown > thresholdDown && dirRef.current !== "down";
            if (shouldHide) {
                dirRef.current = "down";
                setScrollDirection("down");
                return;
            }

            if (isScrollingDown) {
                return;
            }

            const isScrollingUp = diff < 0;
            if (isScrollingUp) {
                accumUp += Math.abs(diff);
                accumDown = 0;
                lastScrollY = scrollY;
            }

            const shouldShow = isScrollingUp && accumUp > thresholdUp && dirRef.current !== "up";
            if (shouldShow) {
                dirRef.current = "up";
                setScrollDirection("up");
                return;
            }

            if (isScrollingUp) {
                return;
            }

            lastScrollY = scrollY;
        };

        window.addEventListener("scroll", updateScrollDirection, { passive: true });
        return () => {
            window.removeEventListener("scroll", updateScrollDirection);
        };
    }, [thresholdUp, thresholdDown]);

    return scrollDirection;
}
