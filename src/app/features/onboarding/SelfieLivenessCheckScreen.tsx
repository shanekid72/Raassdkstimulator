import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { ChevronLeft, Lock, Check } from "lucide-react";

type SelfieLivenessCheckScreenProps = {
    onBack: () => void;
    onComplete: () => void;
};

// Verification stages with their progress thresholds
const VERIFICATION_STAGES = [
    { threshold: 0, label: "Detecting face...", status: "detecting" },
    { threshold: 20, label: "Face detected", status: "detected" },
    { threshold: 35, label: "Checking alignment...", status: "aligning" },
    { threshold: 50, label: "Alignment verified", status: "aligned" },
    { threshold: 60, label: "Verifying liveness...", status: "liveness" },
    { threshold: 80, label: "Liveness confirmed", status: "liveness_ok" },
    { threshold: 90, label: "Processing results...", status: "processing" },
    { threshold: 100, label: "Verification complete", status: "complete" },
] as const;

function getCurrentStage(progress: number) {
    for (let i = VERIFICATION_STAGES.length - 1; i >= 0; i--) {
        if (progress >= VERIFICATION_STAGES[i].threshold) {
            return VERIFICATION_STAGES[i];
        }
    }
    return VERIFICATION_STAGES[0];
}

export default function SelfieLivenessCheckScreen({ onBack, onComplete }: SelfieLivenessCheckScreenProps) {
    const prefersReducedMotion = useReducedMotion();
    const [progress, setProgress] = useState(0);
    const [completedStages, setCompletedStages] = useState<string[]>([]);
    const onCompleteRef = useRef(onComplete);

    useEffect(() => {
        onCompleteRef.current = onComplete;
    }, [onComplete]);

    // Track completed stages for visual feedback
    useEffect(() => {
        const currentStage = getCurrentStage(progress);
        if (currentStage.status.endsWith("_ok") || currentStage.status === "detected" || currentStage.status === "aligned") {
            setCompletedStages(prev => 
                prev.includes(currentStage.status) ? prev : [...prev, currentStage.status]
            );
        }
    }, [progress]);

    useEffect(() => {
        let frameId: number | null = null;
        let completionTimeout: ReturnType<typeof setTimeout> | null = null;

        if (prefersReducedMotion) {
            setProgress(100);
            completionTimeout = setTimeout(() => {
                onCompleteRef.current();
            }, 800);
            return () => {
                if (completionTimeout) clearTimeout(completionTimeout);
            };
        }

        // Increased duration for more realistic feel (5.5 seconds)
        const durationMs = 5500;
        const start = performance.now();

        // Non-linear progress curve - slower at verification stages, faster at transitions
        const easeProgress = (t: number): number => {
            // Add pauses at key verification points
            if (t < 0.2) return t * 1.0; // Normal speed to face detection
            if (t < 0.35) return 0.2 + (t - 0.2) * 0.8; // Slower during alignment check
            if (t < 0.5) return 0.32 + (t - 0.35) * 1.2; // Speed up briefly
            if (t < 0.6) return 0.5 + (t - 0.5) * 1.0; // Normal
            if (t < 0.8) return 0.6 + (t - 0.6) * 0.75; // Slower during liveness check
            if (t < 0.9) return 0.75 + (t - 0.8) * 1.5; // Speed up
            return 0.9 + (t - 0.9) * 1.0; // Final processing
        };

        const step = (now: number) => {
            const elapsed = now - start;
            const linearProgress = Math.min(1, elapsed / durationMs);
            const easedProgress = easeProgress(linearProgress) * 100;
            setProgress(Math.min(100, easedProgress));

            if (elapsed < durationMs) {
                frameId = requestAnimationFrame(step);
            } else {
                setProgress(100);
                completionTimeout = setTimeout(() => {
                    onCompleteRef.current();
                }, 600);
            }
        };

        frameId = requestAnimationFrame(step);

        return () => {
            if (frameId !== null) cancelAnimationFrame(frameId);
            if (completionTimeout) clearTimeout(completionTimeout);
        };
    }, [prefersReducedMotion]);

    const progressValue = Math.min(100, Math.round(progress));
    const currentStage = getCurrentStage(progress);
    const isComplete = currentStage.status === "complete";

    // Get border color based on current stage
    const getBorderColor = () => {
        if (isComplete) return "border-emerald-400";
        if (currentStage.status === "liveness" || currentStage.status === "liveness_ok") return "border-amber-400/80";
        if (currentStage.status === "aligning" || currentStage.status === "aligned") return "border-sky-400/80";
        return "border-sky-400/80";
    };

    // Get status badge styling
    const getStatusBadge = () => {
        if (isComplete) {
            return { bg: "bg-emerald-400/20", text: "text-emerald-200", label: "Verified ✓" };
        }
        if (progress >= 20) {
            return { bg: "bg-emerald-400/20", text: "text-emerald-200", label: "Face Detected" };
        }
        return { bg: "bg-amber-400/20", text: "text-amber-200", label: "Scanning..." };
    };

    const statusBadge = getStatusBadge();

    return (
        <div className="flex flex-col h-full bg-[#0b0f1a] text-white">
            <div className="px-6 pt-6 pb-4">
                <div className="flex items-center justify-between">
                    <button
                        type="button"
                        onClick={onBack}
                        className="h-10 w-10 rounded-full border border-white/15 bg-white/5 flex items-center justify-center"
                        aria-label="Go back"
                    >
                        <ChevronLeft className="h-5 w-5" />
                    </button>
                    <span className="text-xs font-medium tracking-wide text-white/60">Selfie Liveness Check</span>
                    <div className="w-10" />
                </div>
                <h1 className="mt-4 text-center text-2xl font-semibold text-white">Identity Verification</h1>
            </div>

            <div className="flex-1 px-6 flex items-center justify-center">
                <div className="w-full max-w-[260px] aspect-[9/16] rounded-2xl bg-[#141a2a] border border-white/10 shadow-[inset_0_0_30px_rgba(0,0,0,0.45)] relative overflow-hidden flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/20" />
                    <div className="relative z-10 flex flex-col items-center gap-4">
                        <div className="relative w-32 h-32 rounded-full bg-white/10 flex items-center justify-center">
                            {/* Face placeholder with pulse animation during scanning */}
                            <motion.div 
                                className="w-20 h-20 rounded-full bg-white/10"
                                animate={!prefersReducedMotion && progress < 20 ? { 
                                    scale: [1, 1.05, 1],
                                    opacity: [0.3, 0.5, 0.3]
                                } : undefined}
                                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                            />
                            {/* Rotating border - changes color based on stage */}
                            <motion.div
                                className={`absolute inset-[-10px] rounded-full border-4 ${getBorderColor()} border-t-transparent`}
                                animate={prefersReducedMotion || isComplete ? undefined : { rotate: 360 }}
                                transition={prefersReducedMotion ? undefined : { 
                                    duration: currentStage.status === "liveness" ? 1.5 : 2.1, 
                                    repeat: isComplete ? 0 : Infinity, 
                                    ease: "linear" 
                                }}
                            />
                            {/* Completion checkmark */}
                            <AnimatePresence>
                                {isComplete && (
                                    <motion.div
                                        initial={{ scale: 0, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        className="absolute inset-0 flex items-center justify-center bg-emerald-500/20 rounded-full"
                                    >
                                        <Check className="w-12 h-12 text-emerald-400" />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                        <div className="w-40 h-2 rounded-full bg-white/10" />
                    </div>
                    {/* Status badge */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={statusBadge.label}
                                initial={{ opacity: 0, y: 5 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -5 }}
                                className={`px-3 py-1 rounded-full ${statusBadge.bg} ${statusBadge.text} text-xs font-semibold tracking-wide`}
                            >
                                {statusBadge.label}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>

            <div className="bg-white text-slate-900 rounded-t-[32px] px-6 pt-6 pb-8 shadow-[0_-18px_40px_rgba(0,0,0,0.35)]">
                <div className="space-y-2">
                    <h2 className="text-lg font-semibold">
                        {isComplete ? "Verification Complete" : "Align your face & blink"}
                    </h2>
                    <p className="text-sm text-slate-600">
                        {isComplete 
                            ? "Your identity has been successfully verified."
                            : "Keep your face centered in the frame. We will verify you are present and real in just a moment."
                        }
                    </p>
                </div>
                <div className="mt-5 space-y-3">
                    {/* Current stage indicator */}
                    <div className="flex items-center justify-between text-xs font-semibold text-slate-500">
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={currentStage.label}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="tracking-wide uppercase"
                            >
                                {currentStage.label}
                            </motion.span>
                        </AnimatePresence>
                        <span>{progressValue}%</span>
                    </div>
                    {/* Progress bar */}
                    <div className="h-2 rounded-full bg-slate-200 overflow-hidden">
                        <div
                            className={`h-full transition-[width] duration-150 ease-linear ${isComplete ? "bg-emerald-500" : "bg-sky-500"}`}
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                    {/* Stage checklist */}
                    <div className="flex items-center gap-4 text-xs text-slate-500 mt-2">
                        <span className={`flex items-center gap-1 ${completedStages.includes("detected") ? "text-emerald-600" : ""}`}>
                            {completedStages.includes("detected") && <Check className="w-3 h-3" />}
                            Face
                        </span>
                        <span className={`flex items-center gap-1 ${completedStages.includes("aligned") ? "text-emerald-600" : ""}`}>
                            {completedStages.includes("aligned") && <Check className="w-3 h-3" />}
                            Alignment
                        </span>
                        <span className={`flex items-center gap-1 ${completedStages.includes("liveness_ok") ? "text-emerald-600" : ""}`}>
                            {completedStages.includes("liveness_ok") && <Check className="w-3 h-3" />}
                            Liveness
                        </span>
                    </div>
                </div>
                <div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
                    <Lock className="h-4 w-4 text-slate-400" />
                    <span>We verify your identity to keep your account secure.</span>
                </div>
            </div>
        </div>
    );
}
