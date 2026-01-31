import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Check, Loader2, AlertCircle, X } from "lucide-react";

export type DynamicAlertState = "idle" | "loading" | "success" | "error";

interface DynamicAlertProps {
    state: DynamicAlertState;
    message?: string;
    onClose?: () => void;
}

export function DynamicAlert({ state, message, onClose }: DynamicAlertProps) {
    const prefersReducedMotion = useReducedMotion();
    const sanitizeText = (rawText: string) => rawText.replace(/\s*\n+\s*/g, " ");
    // Island dimensions for different states
    const variants = {
        idle: { width: "96px", height: "32px", borderRadius: "16px", x: 0 },
        loading: { width: "240px", height: "50px", borderRadius: "25px", x: 0 },
        success: { width: "240px", height: "50px", borderRadius: "25px", x: 0 },
        error: {
            width: "240px",
            height: "50px",
            borderRadius: "25px",
            x: prefersReducedMotion ? 0 : [0, -4, 4, -3, 3, 0],
        },
    };
    const backgroundClass =
        state === "idle"
            ? "bg-black"
            : "bg-gradient-to-br from-[#2f3034] via-[#1c1d21] to-[#0f1012]";

    return (
        <div
            className="absolute top-[calc(max(env(safe-area-inset-top),24px)+0.5rem)] left-0 right-0 z-50 flex justify-center pointer-events-none"
            role={state !== "idle" ? "alert" : undefined}
            aria-live={state !== "idle" ? "polite" : undefined}
            aria-atomic={state !== "idle" ? "true" : undefined}
        >
            <motion.div
                layout
                initial="idle"
                animate={state}
                variants={variants}
                transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 22,
                    bounce: 0.35,
                    x: prefersReducedMotion ? { duration: 0 } : { duration: 0.25, ease: "easeInOut" },
                }}
                className={cn(
                    "relative text-white flex items-center justify-center overflow-hidden shadow-lg",
                    backgroundClass,
                    "pointer-events-auto"
                )}
            >
                <div
                    className={cn(
                        "pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.18),_transparent_55%)] transition-opacity duration-300",
                        state === "idle" ? "opacity-0" : "opacity-100"
                    )}
                />
                <AnimatePresence mode="wait">
                    {state === "idle" && (
                        <motion.div
                            key="idle"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.98 }}
                            className="h-full w-full rounded-full bg-black"
                        />
                    )}

                    {state === "loading" && (
                        <motion.div
                            key="loading"
                            initial={{ opacity: 0, y: 8, scale: 0.96 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -8, scale: 0.98 }}
                            className="flex min-w-0 items-center gap-2 px-4"
                        >
                            <motion.div
                                className="flex h-5 w-5 flex-none items-center justify-center"
                                aria-hidden="true"
                                animate={
                                    prefersReducedMotion
                                        ? { scale: 1, opacity: 1 }
                                        : { scale: [1, 1.04, 1], opacity: [1, 0.85, 1] }
                                }
                                transition={
                                    prefersReducedMotion
                                        ? { duration: 0 }
                                        : { duration: 1.4, repeat: Infinity, ease: "easeInOut" }
                                }
                            >
                                <Loader2
                                    className={cn(
                                        "h-4 w-4 text-white",
                                        prefersReducedMotion ? "" : "animate-spin"
                                    )}
                                    aria-hidden="true"
                                />
                            </motion.div>
                            <motion.span
                                key={message || "processing"}
                                initial={{ opacity: 0, y: 6 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -6 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                className="min-w-0 flex-1 truncate text-sm font-medium"
                            >
                                {sanitizeText(message || "Processing...")}
                            </motion.span>
                            {onClose ? (
                                <button
                                    onClick={onClose}
                                    className="ml-2 rounded-full p-1 text-white/70 hover:text-white"
                                    aria-label="Dismiss"
                                >
                                    <X className="h-3 w-3" aria-hidden="true" />
                                </button>
                            ) : null}
                        </motion.div>
                    )}

                    {state === "success" && (
                        <motion.div
                            key="success"
                            initial={{ opacity: 0, y: 8, scale: 0.96 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -8, scale: 0.98 }}
                            className="flex min-w-0 items-center gap-3 px-4"
                        >
                            <motion.div
                                className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-white/15"
                                initial={
                                    prefersReducedMotion ? { scale: 1, opacity: 1 } : { scale: 0.6, opacity: 0 }
                                }
                                animate={{ scale: 1, opacity: 1 }}
                                transition={
                                    prefersReducedMotion ? { duration: 0 } : { duration: 0.2, ease: "easeOut" }
                                }
                                aria-hidden="true"
                            >
                                <Check className="h-3 w-3 text-white" aria-hidden="true" />
                            </motion.div>
                            <motion.span
                                key={message || "success"}
                                initial={{ opacity: 0, y: 6 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -6 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                className="min-w-0 flex-1 truncate text-sm font-medium"
                            >
                                {sanitizeText(message || "Success")}
                            </motion.span>
                            {onClose ? (
                                <button
                                    onClick={onClose}
                                    className="ml-2 rounded-full p-1 text-white/70 hover:text-white"
                                    aria-label="Dismiss"
                                >
                                    <X className="h-3 w-3" aria-hidden="true" />
                                </button>
                            ) : null}
                        </motion.div>
                    )}

                    {state === "error" && (
                        <motion.div
                            key="error"
                            initial={{ opacity: 0, y: 8, scale: 0.96 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -8, scale: 0.98 }}
                            className="flex min-w-0 items-center gap-3 px-4"
                        >
                            <div
                                className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-white/15"
                                aria-hidden="true"
                            >
                                <AlertCircle className="h-3 w-3 text-white" aria-hidden="true" />
                            </div>
                            <motion.span
                                key={message || "error"}
                                initial={{ opacity: 0, y: 6 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -6 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                className="min-w-0 flex-1 truncate text-sm font-medium"
                            >
                                {sanitizeText(message || "Error")}
                            </motion.span>
                            {onClose ? (
                                <button
                                    onClick={onClose}
                                    className="ml-2 rounded-full p-1 text-white/70 hover:text-white"
                                    aria-label="Dismiss"
                                >
                                    <X className="h-3 w-3" aria-hidden="true" />
                                </button>
                            ) : null}
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    );
}
