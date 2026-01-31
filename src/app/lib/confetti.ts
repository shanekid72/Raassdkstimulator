type ConfettiModule = {
    default?: (options: Record<string, unknown>) => void;
};

export function fireConfetti(): void {
    if (typeof window === "undefined") return;

    void import("canvas-confetti")
        .then((module: ConfettiModule) => {
            const confetti = module.default ?? (module as unknown as (options: Record<string, unknown>) => void);
            if (typeof confetti !== "function") return;

            const base = {
                particleCount: 40,
                spread: 70,
                origin: { y: 0.6 },
                colors: ["#0b0b0c", "#f5f5f5", "#ffffff"],
            };

            confetti(base);
            window.setTimeout(() => confetti(base), 200);
            window.setTimeout(() => confetti(base), 400);
        })
        .catch(() => {});
}
