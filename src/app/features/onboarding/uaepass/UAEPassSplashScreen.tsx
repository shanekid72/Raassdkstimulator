import { useEffect } from "react";
import { motion } from "framer-motion";
import { createPortal } from "react-dom";

interface UAEPassSplashScreenProps {
    onNext: () => void;
}

/**
 * Frame 001 - UAE PASS Splash Screen
 * Green background with UAE PASS logo centered, auto-advances after 2 seconds.
 * This is a legal entity screen - UI must match official UAE PASS branding.
 */
export default function UAEPassSplashScreen({ onNext }: UAEPassSplashScreenProps) {
    const portalTarget = typeof document !== "undefined" ? document.getElementById("phone-frame") : null;

    useEffect(() => {
        const timer = setTimeout(() => {
            onNext();
        }, 2000);
        return () => clearTimeout(timer);
    }, [onNext]);

    const content = (
        <div className="absolute inset-0 z-50 flex flex-col bg-[#00843d]">
            {/* Main content - centered logo */}
            <div className="flex-1 flex items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="flex items-center gap-4"
                >
                    {/* UAE PASS Fingerprint Logo */}
                    <svg
                        width="64"
                        height="64"
                        viewBox="0 0 64 64"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-white"
                    >
                        {/* Stylized fingerprint icon */}
                        <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="2" fill="none" />
                        <path
                            d="M32 12C21 12 12 21 12 32C12 43 21 52 32 52"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                        />
                        <path
                            d="M32 18C24.3 18 18 24.3 18 32C18 39.7 24.3 46 32 46"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                        />
                        <path
                            d="M32 24C27.6 24 24 27.6 24 32C24 36.4 27.6 40 32 40"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                        />
                        <circle cx="32" cy="32" r="4" fill="currentColor" />
                        {/* Small dots for fingerprint effect */}
                        <circle cx="44" cy="20" r="1.5" fill="currentColor" />
                        <circle cx="48" cy="26" r="1.5" fill="currentColor" />
                        <circle cx="50" cy="32" r="1.5" fill="currentColor" />
                        <circle cx="48" cy="38" r="1.5" fill="currentColor" />
                        <circle cx="44" cy="44" r="1.5" fill="currentColor" />
                    </svg>

                    {/* Text content */}
                    <div className="flex flex-col">
                        <span className="text-white text-lg font-medium" dir="rtl">
                            الهوية الرقمية
                        </span>
                        <span className="text-white text-2xl font-bold tracking-wide">
                            UAE PASS
                        </span>
                    </div>
                </motion.div>
            </div>

            {/* 3D geometric background shapes (subtle) */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#006b31] opacity-40 transform -rotate-12 translate-y-32 -translate-x-16" />
                <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#006b31] opacity-30 transform rotate-12 translate-y-40 translate-x-20" />
            </div>

            {/* Copyright footer */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                className="pb-8 text-center relative z-10"
            >
                <p className="text-white/70 text-sm">
                    Copyright © 2025 UAE PASS All rights reserved.
                </p>
            </motion.div>
        </div>
    );

    return portalTarget ? createPortal(content, portalTarget) : content;
}
