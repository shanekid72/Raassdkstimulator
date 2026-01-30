import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Check, Loader2, AlertCircle, X } from "lucide-react";

export type DynamicAlertState = "idle" | "loading" | "success" | "error";

interface DynamicAlertProps {
    state: DynamicAlertState;
    message?: string;
    onClose?: () => void;
}

export function DynamicAlert({ state, message, onClose }: DynamicAlertProps) {
    // Island dimensions for different states
    const variants = {
        idle: { width: "96px", height: "32px", borderRadius: "16px" },
        loading: { width: "190px", height: "46px", borderRadius: "23px" },
        success: { width: "240px", height: "50px", borderRadius: "25px" },
        error: { width: "240px", height: "50px", borderRadius: "25px" },
    };

    return (
        <div className="absolute top-2 left-0 right-0 z-50 flex justify-center pointer-events-none">
            <motion.div
                layout
                initial="idle"
                animate={state}
                variants={variants}
                transition={{ type: "spring", stiffness: 380, damping: 22, bounce: 0.35 }}
                className={cn(
                    "bg-foreground text-background flex items-center justify-center overflow-hidden shadow-lg",
                    "pointer-events-auto"
                )}
            >
                <AnimatePresence mode="wait">
                    {state === "idle" && (
                        <motion.div
                            key="idle"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.98 }}
                            className="h-full w-full bg-black rounded-full"
                        />
                    )}

                    {state === "loading" && (
                        <motion.div
                            key="loading"
                            initial={{ opacity: 0, y: 8, scale: 0.96 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -8, scale: 0.98 }}
                            className="flex items-center gap-2 px-4"
                        >
                            <Loader2 className="h-4 w-4 animate-spin text-background" />
                            <motion.span
                                key={message || "processing"}
                                initial={{ opacity: 0, y: 6 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -6 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                className="text-sm font-medium"
                            >
                                {message || "Processing..."}
                            </motion.span>
                            {onClose ? (
                                <button
                                    onClick={onClose}
                                    className="ml-2 rounded-full p-1 text-background/80 hover:text-background"
                                    aria-label="Dismiss"
                                >
                                    <X className="h-3 w-3" />
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
                            className="flex items-center gap-3 px-4"
                        >
                            <div className="rounded-full bg-background/15 p-1">
                                <Check className="h-3 w-3 text-background" />
                            </div>
                            <motion.span
                                key={message || "success"}
                                initial={{ opacity: 0, y: 6 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -6 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                className="text-sm font-medium"
                            >
                                {message || "Success"}
                            </motion.span>
                            {onClose ? (
                                <button
                                    onClick={onClose}
                                    className="ml-2 rounded-full p-1 text-background/80 hover:text-background"
                                    aria-label="Dismiss"
                                >
                                    <X className="h-3 w-3" />
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
                            className="flex items-center gap-3 px-4"
                        >
                            <div className="rounded-full bg-background/15 p-1">
                                <AlertCircle className="h-3 w-3 text-background" />
                            </div>
                            <motion.span
                                key={message || "error"}
                                initial={{ opacity: 0, y: 6 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -6 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                className="text-sm font-medium"
                            >
                                {message || "Error"}
                            </motion.span>
                            {onClose ? (
                                <button
                                    onClick={onClose}
                                    className="ml-2 rounded-full p-1 text-background/80 hover:text-background"
                                    aria-label="Dismiss"
                                >
                                    <X className="h-3 w-3" />
                                </button>
                            ) : null}
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    );
}
