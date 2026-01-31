import { useEffect } from "react";
import type { RefObject } from "react";

export function useKeyboardAvoidance(containerRef: RefObject<HTMLElement | null>): void {
    useEffect(() => {
        if (typeof window === "undefined") {
            return;
        }

        const container = containerRef.current;
        if (!container) {
            return;
        }

        const handleFocusIn = (event: FocusEvent) => {
            const target = event.target;
            if (!(target instanceof HTMLElement)) {
                return;
            }

            const tagName = target.tagName.toLowerCase();
            if (tagName !== "input" && tagName !== "textarea" && tagName !== "select") {
                return;
            }

            window.setTimeout(() => {
                if (typeof target.scrollIntoView === "function") {
                    target.scrollIntoView({ block: "center", behavior: "smooth" });
                }
            }, 50);
        };

        container.addEventListener("focusin", handleFocusIn);

        const viewport = window.visualViewport;
        if (!viewport) {
            return () => {
                container.removeEventListener("focusin", handleFocusIn);
            };
        }

        const updateViewportVars = () => {
            const offset = Math.max(0, window.innerHeight - viewport.height);
            container.style.setProperty("--vv-height", `${viewport.height}px`);
            container.style.setProperty("--keyboard-offset", `${offset}px`);
        };

        updateViewportVars();
        viewport.addEventListener("resize", updateViewportVars);

        return () => {
            container.removeEventListener("focusin", handleFocusIn);
            viewport.removeEventListener("resize", updateViewportVars);
        };
    }, [containerRef]);
}
