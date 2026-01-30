import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { Button } from "@/app/ui/Button";
import { cn } from "@/lib/utils";

interface ModalProps {
    open: boolean;
    onClose: () => void;
    title?: string;
    children: React.ReactNode;
    footer?: React.ReactNode;
    className?: string;
}

const focusableSelector =
    "button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])";

export function Modal({ open, onClose, title, children, footer, className }: ModalProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const portalTarget = typeof document !== "undefined" ? document.getElementById("phone-frame") : null;

    useEffect(() => {
        if (!open) return;

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                onClose();
            }

            if (event.key !== "Tab") return;

            const focusable = containerRef.current?.querySelectorAll<HTMLElement>(focusableSelector);
            if (!focusable || focusable.length === 0) return;

            const first = focusable[0];
            const last = focusable[focusable.length - 1];

            if (event.shiftKey && document.activeElement === first) {
                event.preventDefault();
                last.focus();
            } else if (!event.shiftKey && document.activeElement === last) {
                event.preventDefault();
                first.focus();
            }
        };

        const focusable = containerRef.current?.querySelectorAll<HTMLElement>(focusableSelector);
        focusable?.[0]?.focus();

        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [open, onClose]);

    const content = (
        <AnimatePresence>
            {open ? (
                <motion.div
                    className="absolute inset-0 z-50 flex items-center justify-center bg-black/40 px-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    aria-modal="true"
                    role="dialog"
                    onClick={onClose}
                >
                    <motion.div
                        ref={containerRef}
                        className={cn(
                            "w-full max-w-md rounded-3xl border border-border bg-background shadow-[0_20px_40px_rgba(0,0,0,0.12)]",
                            className
                        )}
                        initial={{ opacity: 0, y: 20, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.98 }}
                        transition={{ type: "spring", stiffness: 260, damping: 26 }}
                        onClick={(event) => event.stopPropagation()}
                    >
                        <div className="flex items-center justify-between border-b border-border px-5 py-4">
                            <div className="text-sm font-semibold text-foreground">{title}</div>
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={onClose}
                                aria-label="Close"
                            >
                                <X className="h-4 w-4" />
                            </Button>
                        </div>
                        <div className="px-5 py-4">{children}</div>
                        {footer ? (
                            <div className="border-t border-border px-5 py-4">{footer}</div>
                        ) : null}
                    </motion.div>
                </motion.div>
            ) : null}
        </AnimatePresence>
    );

    return portalTarget ? createPortal(content, portalTarget) : content;
}
