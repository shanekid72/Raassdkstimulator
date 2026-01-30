import { AnimatePresence, motion } from "framer-motion";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { Button } from "@/app/ui/Button";
import { cn } from "@/lib/utils";

interface BottomSheetProps {
    open: boolean;
    onClose: () => void;
    title?: string;
    children: React.ReactNode;
    className?: string;
}

export function BottomSheet({ open, onClose, title, children, className }: BottomSheetProps) {
    const portalTarget = typeof document !== "undefined" ? document.getElementById("phone-frame") : null;
    const content = (
        <AnimatePresence>
            {open ? (
                <motion.div
                    className="absolute inset-0 z-50 flex items-end bg-black/35"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    role="dialog"
                    aria-modal="true"
                    onClick={onClose}
                >
                    <motion.div
                        className={cn(
                            "w-full rounded-t-3xl border border-border bg-background shadow-[0_-16px_32px_rgba(0,0,0,0.12)]",
                            className
                        )}
                        initial={{ y: 60, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 60, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 260, damping: 26 }}
                        onClick={(event) => event.stopPropagation()}
                    >
                        <div className="px-5 pt-3">
                            <div className="mx-auto h-1 w-10 rounded-full bg-border" />
                        </div>
                        <div className="flex items-center justify-between px-5 py-4">
                            <div className="text-sm font-semibold text-foreground">{title}</div>
                            <Button variant="ghost" size="icon" onClick={onClose} aria-label="Close">
                                <X className="h-4 w-4" />
                            </Button>
                        </div>
                        <div className="max-h-[70vh] overflow-y-auto px-5 pb-6">
                            {children}
                        </div>
                    </motion.div>
                </motion.div>
            ) : null}
        </AnimatePresence>
    );

    return portalTarget ? createPortal(content, portalTarget) : content;
}
