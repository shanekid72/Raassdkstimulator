import { useEffect, useId } from "react";
import { AnimatePresence, animate, motion, useMotionValue } from "framer-motion";
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
    const y = useMotionValue(0);
    const portalTarget = typeof document !== "undefined" ? document.getElementById("phone-frame") : null;
    const titleId = useId();

    useEffect(() => {
        if (!open) return;

        const scrollTarget =
            document.querySelector<HTMLElement>("#phone-frame .world-app-bg") ?? document.body;
        const previousOverflow = scrollTarget.style.overflow;
        scrollTarget.style.overflow = "hidden";

        return () => {
            scrollTarget.style.overflow = previousOverflow;
        };
    }, [open]);

    useEffect(() => {
        if (typeof document === "undefined") return;

        if (open) {
            document.documentElement.dataset.modalOpen = "true";
        } else {
            delete document.documentElement.dataset.modalOpen;
        }

        return () => {
            delete document.documentElement.dataset.modalOpen;
        };
    }, [open]);

    const content = (
        <AnimatePresence>
            {open ? (
                <motion.div
                    className="absolute inset-0 z-50 flex items-end bg-black/45"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby={title ? titleId : undefined}
                    onClick={onClose}
                >
                    <motion.div
                        className={cn(
                            "w-full rounded-t-3xl border border-border bg-background shadow-[0_-20px_40px_rgba(0,0,0,0.18)]",
                            className
                        )}
                        style={{ y }}
                        initial={{ y: 60, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 60, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 260, damping: 26 }}
                        drag="y"
                        dragConstraints={{ top: 0 }}
                        dragElastic={{ top: 0, bottom: 0.2 }}
                        dragMomentum={false}
                        onDragEnd={(event, info) => {
                            void event;
                            const shouldClose = info.offset.y > 120 || info.velocity.y > 800;
                            if (shouldClose) {
                                onClose();
                            } else {
                                animate(y, 0, { type: "spring", stiffness: 260, damping: 26 });
                            }
                        }}
                        onClick={(event) => event.stopPropagation()}
                    >
                        <div className="max-h-[70vh] overflow-y-auto pb-[calc(4rem+env(safe-area-inset-bottom))]">
                            <div className="sticky top-0 z-20 bg-background">
                                <div className="px-5 pt-3">
                                    <div className="mx-auto h-1 w-10 rounded-full bg-border" />
                                </div>
                                <div className="flex items-center justify-between px-5 py-4">
                                    <div id={titleId} className="text-sm font-semibold text-foreground">{title}</div>
                                    <Button variant="ghost" size="icon" className="h-11 w-11" onClick={onClose} aria-label="Close">
                                        <X className="h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                            <div className="px-5">
                                {children}
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            ) : null}
        </AnimatePresence>
    );

    return portalTarget ? createPortal(content, portalTarget) : content;
}
