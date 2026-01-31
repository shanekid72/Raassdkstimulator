import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/app/ui/Button";
import AlmostThereLoader from "@/app/ui/AlmostThereLoader";

interface ProcessingScreenProps {
    onComplete: () => void;
    onNotify?: (state: "idle" | "loading" | "success" | "error", message: string) => void;
}

export default function ProcessingScreen({ onComplete, onNotify }: ProcessingScreenProps) {
    const onCompleteRef = useRef(onComplete);
    const onNotifyRef = useRef(onNotify);

    onCompleteRef.current = onComplete;
    onNotifyRef.current = onNotify;

    useEffect(() => {
        let fired = false;
        const notifyTimeout = setTimeout(() => {
            if (typeof onNotifyRef.current === "function") {
                onNotifyRef.current("loading", "Final checks");
            }
        }, 200);
        const timeout = setTimeout(() => {
            if (!fired) {
                fired = true;
                onCompleteRef.current();
            }
        }, 1800);
        return () => {
            clearTimeout(timeout);
            clearTimeout(notifyTimeout);
        };
    }, []);

    return (
        <div className="flex flex-col h-full bg-background relative px-6 py-8">

            {/* Title Bar */}
            <div className="flex justify-between items-center mb-4 text-foreground">
                <span className="text-lg font-semibold">9:41</span>
                <div className="flex gap-1.5">
                    <div className="w-4 h-2.5 bg-foreground rounded-[1px]" />
                    <div className="w-4 h-2.5 bg-foreground rounded-[1px]" />
                    <div className="w-5 h-2.5 bg-foreground rounded-[1px]" />
                </div>
            </div>

            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-background rounded-[20px] border border-border p-6 flex-1 flex flex-col items-center justify-center text-center relative overflow-hidden"
            >

                {/* Loader */}
                <div className="mb-8 flex items-center justify-center">
                    <AlmostThereLoader className="text-foreground" />
                </div>

                <h1 className="text-2xl font-bold text-foreground mb-3">Almost There!</h1>
                <p className="text-muted-foreground text-sm max-w-[240px] leading-relaxed">
                    Just a moment! We're making sure everything's good to go
                </p>
                <div className="mt-8 w-full max-w-xs space-y-3">
                    <div className="px-4 py-2 rounded-full bg-muted text-xs text-muted-foreground">
                        Processing...
                    </div>
                    <Button className="w-full" size="lg" onClick={() => onComplete()}>
                        Continue
                    </Button>
                </div>
            </motion.div>

        </div>
    );
}
