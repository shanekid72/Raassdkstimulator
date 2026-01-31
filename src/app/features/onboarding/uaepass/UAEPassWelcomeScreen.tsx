import { useEffect } from "react";
import { motion } from "framer-motion";
import { User, QrCode, Lock } from "lucide-react";
import { createPortal } from "react-dom";

interface UAEPassWelcomeScreenProps {
    onNext: () => void;
}

/**
 * Frame 002 - UAE PASS Welcome Screen
 * Green/gray gradient background with UAE PASS logo, feature icons,
 * and a "Validating...." modal overlay.
 * Auto-advances after 2 seconds.
 * This is a legal entity screen - UI must match official UAE PASS branding.
 */
export default function UAEPassWelcomeScreen({ onNext }: UAEPassWelcomeScreenProps) {
    const portalTarget = typeof document !== "undefined" ? document.getElementById("phone-frame") : null;

    useEffect(() => {
        const timer = setTimeout(() => {
            onNext();
        }, 2000);
        return () => clearTimeout(timer);
    }, [onNext]);

    const content = (
        <div className="absolute inset-0 z-50 flex flex-col bg-gradient-to-b from-[#a8b5a8] to-[#8a9a8a]">
            {/* Main content area */}
            <div className="flex-1 flex flex-col items-center justify-center px-8 relative">
                {/* Top icon - Profile with checkmark */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.3 }}
                    className="absolute top-24"
                >
                    <div className="w-14 h-14 rounded-full bg-[#00843d] flex items-center justify-center border-2 border-[#00843d]/30">
                        <User className="w-6 h-6 text-white" />
                    </div>
                </motion.div>

                {/* Central UAE PASS logo circle */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                    className="w-48 h-48 rounded-full bg-gradient-to-br from-[#00843d] to-[#006b31] flex items-center justify-center shadow-2xl"
                >
                    <div className="flex items-center gap-3">
                        {/* UAE PASS Fingerprint Logo */}
                        <svg
                            width="48"
                            height="48"
                            viewBox="0 0 64 64"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="text-white"
                        >
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
                            <circle cx="44" cy="20" r="1.5" fill="currentColor" />
                            <circle cx="48" cy="26" r="1.5" fill="currentColor" />
                            <circle cx="50" cy="32" r="1.5" fill="currentColor" />
                        </svg>
                        <div className="flex flex-col">
                            <span className="text-white text-xs" dir="rtl">الهوية الرقمية</span>
                            <span className="text-white text-lg font-bold">UAE PASS</span>
                        </div>
                    </div>
                </motion.div>

                {/* Side icons */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.3 }}
                    className="absolute left-8 top-1/2 -translate-y-1/2"
                >
                    <div className="w-14 h-14 rounded-full bg-[#00843d] flex items-center justify-center border-2 border-[#00843d]/30">
                        <QrCode className="w-6 h-6 text-white" />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.3 }}
                    className="absolute right-8 top-1/2 -translate-y-1/2"
                >
                    <div className="w-14 h-14 rounded-full bg-[#00843d] flex items-center justify-center border-2 border-[#00843d]/30">
                        <Lock className="w-6 h-6 text-white" />
                    </div>
                </motion.div>

                {/* Validating Modal Overlay */}
                <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.3 }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-20"
                >
                    <div className="bg-white rounded-2xl shadow-2xl px-8 py-6 flex flex-col items-center min-w-[200px]">
                        {/* Fingerprint icon with UAE flag colors */}
                        <svg
                            width="56"
                            height="56"
                            viewBox="0 0 64 64"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="mb-3"
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
                            {/* UAE flag colors in center */}
                            <circle cx="32" cy="29" r="2" fill="#00843d" />
                            <circle cx="32" cy="35" r="2" fill="#c8102e" />
                        </svg>
                        <span className="text-gray-700 text-base font-medium">Validating....</span>
                    </div>
                </motion.div>

                {/* Welcome text below modal */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.3 }}
                    className="absolute bottom-32 text-center px-8"
                >
                    <h1 className="text-3xl font-bold text-gray-800 mb-3">
                        Welcome to UAE PASS
                    </h1>
                    <p className="text-gray-600 text-base leading-relaxed">
                        The <span className="font-semibold">National Digital Identity</span> for all citizens,
                        <br />residents and visitors in UAE
                    </p>
                </motion.div>
            </div>

            {/* Footer */}
            <div className="pb-6 text-center">
                <p className="text-gray-600 text-sm">
                    Copyright © 2026 UAE PASS All rights reserved.
                </p>
                <p className="text-gray-500 text-xs mt-1">6.5.0</p>
            </div>
        </div>
    );

    return portalTarget ? createPortal(content, portalTarget) : content;
}
