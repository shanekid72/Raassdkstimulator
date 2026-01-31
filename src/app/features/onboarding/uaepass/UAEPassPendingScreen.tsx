import { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/app/ui/Button";
import { createPortal } from "react-dom";

interface UAEPassPendingScreenProps {
    onComplete: () => void;
    onCancel: () => void;
}

/**
 * Frame 006 - UAE PASS Pending Verification Screen
 * White background with UAE PASS logo, waiting for verification to complete.
 * Auto-advances after 2 seconds, then navigates to home with "Verified" alert.
 * This is a legal entity screen - UAE PASS branding must be kept as-is.
 */
export default function UAEPassPendingScreen({ onComplete, onCancel }: UAEPassPendingScreenProps) {
    const portalTarget = typeof document !== "undefined" ? document.getElementById("phone-frame") : null;

    useEffect(() => {
        const timer = setTimeout(() => {
            onComplete();
        }, 2000);
        return () => clearTimeout(timer);
    }, [onComplete]);

    const content = (
        <div className="absolute inset-0 z-50 flex flex-col bg-white">
            {/* Main content */}
            <div className="flex-1 flex flex-col items-center justify-center px-8">
                {/* UAE PASS Logo */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center gap-3 mb-10"
                >
                    <svg
                        width="56"
                        height="56"
                        viewBox="0 0 64 64"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle cx="32" cy="32" r="28" stroke="#1a1a1a" strokeWidth="2" fill="none" />
                        <path
                            d="M32 12C21 12 12 21 12 32C12 43 21 52 32 52"
                            stroke="#1a1a1a"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                        />
                        <path
                            d="M32 18C24.3 18 18 24.3 18 32C18 39.7 24.3 46 32 46"
                            stroke="#1a1a1a"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                        />
                        <path
                            d="M32 24C27.6 24 24 27.6 24 32C24 36.4 27.6 40 32 40"
                            stroke="#1a1a1a"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                        />
                        {/* UAE flag colors */}
                        <circle cx="32" cy="29" r="2" fill="#00843d" />
                        <circle cx="32" cy="35" r="2" fill="#c8102e" />
                    </svg>
                    <div className="flex flex-col">
                        <span className="text-gray-800 text-sm" dir="rtl">الهوية الرقمية</span>
                        <span className="text-gray-900 text-2xl font-bold">UAE PASS</span>
                    </div>
                </motion.div>

                {/* Message Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.3 }}
                    className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 text-center max-w-sm"
                >
                    <p className="text-gray-700 text-base mb-4">
                        RaaS Mobile App requires that you log in.
                    </p>
                    <p className="text-gray-500 text-sm mb-6">
                        This page will reload automatically once verification is complete.
                    </p>

                    {/* Loading indicator */}
                    <div className="flex justify-center gap-1.5 mb-6">
                        {Array.from({ length: 12 }).map((_, index) => (
                            <motion.div
                                key={index}
                                className="w-2.5 h-4 bg-gray-300 rounded-sm"
                                animate={{
                                    opacity: [0.3, 1, 0.3],
                                }}
                                transition={{
                                    duration: 1.2,
                                    repeat: Infinity,
                                    delay: index * 0.1,
                                }}
                            />
                        ))}
                    </div>

                    {/* Cancel button */}
                    <Button
                        variant="secondary"
                        size="lg"
                        className="w-full bg-white border border-gray-300 text-gray-900 hover:bg-gray-50"
                        onClick={onCancel}
                    >
                        Cancel
                    </Button>
                </motion.div>
            </div>

            {/* Footer - Powered by UAE PASS */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.3 }}
                className="pb-8 text-center"
            >
                <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-gray-400 text-xs border border-gray-300 rounded px-1.5 py-0.5">N6</span>
                    <span className="text-gray-600 text-base font-medium">Powered by UAE PASS</span>
                </div>
            </motion.div>
        </div>
    );

    return portalTarget ? createPortal(content, portalTarget) : content;
}
