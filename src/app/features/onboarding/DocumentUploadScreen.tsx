import { useState, useRef } from "react";
import { Header } from "@/app/ui/Header";
import { Button } from "@/app/ui/Button";
import { Camera, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface DocumentUploadScreenProps {
    side: "front" | "back";
    onNext: () => void;
    onBack: () => void;
    onCaptured?: () => void;
}

export default function DocumentUploadScreen({ side, onNext, onBack, onCaptured }: DocumentUploadScreenProps) {
    const [status, setStatus] = useState<"idle" | "scanning" | "captured">("idle");
    const timeoutRef = useRef<NodeJS.Timeout>();

    const handleScan = () => {
        setStatus("scanning");
        timeoutRef.current = setTimeout(() => {
            setStatus("captured");
            if (onCaptured) {
                onCaptured();
            }
        }, 2000);
    };

    const handleRescan = () => {
        setStatus("idle");
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };

    const stepText = side === "front" ? "Step 1 of 2" : "Step 2 of 2";
    const titleText = side === "front" ? "Scan the front of ID Proof" : "Scan the Back of ID Proof";

    return (
        <div className="flex flex-col h-full bg-background">
            <Header title="" onBack={onBack} />

            <main className="flex-1 flex flex-col px-6 pt-2 pb-6 items-center text-center">

                <div className="space-y-2 mb-8">
                    <h2 className="text-2xl font-bold px-4 text-foreground">{titleText}</h2>
                    <p className="text-sm font-medium text-muted-foreground">{stepText}</p>
                </div>

                {/* Camera Frame Area */}
                <div className="w-full aspect-[3/4] max-h-[400px] bg-muted rounded-3xl relative overflow-hidden border border-border shadow-inner group cursor-pointer" onClick={status === "idle" ? handleScan : undefined}>

                    {/* Guide Frame */}
                    <div className="absolute inset-8 border-2 border-dashed border-primary/30 rounded-2xl pointer-events-none z-20 flex items-center justify-center">
                        {status === "idle" && (
                            <div className="flex flex-col items-center gap-3 text-foreground/40">
                                <Camera className="w-10 h-10" />
                                <span className="text-xs font-medium">Tap to capture</span>
                            </div>
                        )}
                    </div>

                    {/* Scanning Animation */}
                    {status === "scanning" && (
                        <motion.div
                            className="absolute inset-0 bg-foreground/5 z-10"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                        >
                            <motion.div
                                className="w-full h-1 bg-foreground shadow-[0_0_20px_rgba(0,0,0,0.25)]"
                                animate={{ top: ["10%", "90%", "10%"] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                style={{ position: "absolute" }}
                            />
                        </motion.div>
                    )}

                    {/* Captured State */}
                    {status === "captured" && (
                        <motion.div
                            className="absolute inset-0 bg-muted z-10 flex items-center justify-center"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                        >
                            <div className="text-center space-y-2">
                                <CheckCircle2 className="w-12 h-12 text-foreground mx-auto" />
                                <p className="text-sm font-semibold text-foreground">Document Captured</p>
                            </div>
                        </motion.div>
                    )}
                </div>

                <p className="mt-8 text-sm text-muted-foreground max-w-[260px] leading-relaxed">
                    Position your document, picture side up, inside the frame.
                </p>

            </main>

            <div className="p-6 mt-auto space-y-3">
                {status === "captured" ? (
                    <>
                        <Button className="w-full h-12 font-medium" size="lg" onClick={onNext}>
                            Continue
                        </Button>
                        <Button variant="ghost" className="w-full h-12 font-medium" onClick={handleRescan}>
                            Rescan
                        </Button>
                    </>
                ) : (
                    <Button
                        className={cn("w-full h-12 font-medium transition-all", status === "scanning" ? "opacity-50" : "")}
                        size="lg"
                        onClick={handleScan}
                        disabled={status === "scanning"}
                    >
                        {status === "scanning" ? "Scanning..." : "Capture"}
                    </Button>
                )}
            </div>
        </div>
    );
}
