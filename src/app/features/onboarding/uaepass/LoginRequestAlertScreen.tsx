import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import { Button } from "@/app/ui/Button";
import { createPortal } from "react-dom";

interface LoginRequestAlertScreenProps {
    onConfirm: () => void;
    onDecline: () => void;
}

/**
 * Frame 003 - Login Request Alert Screen
 * RaaS branded header (#0b0b0c instead of red), shows login request from "RaaS Mobile App".
 * User can Confirm or Decline the request.
 */
export default function LoginRequestAlertScreen({ onConfirm, onDecline }: LoginRequestAlertScreenProps) {
    const portalTarget = typeof document !== "undefined" ? document.getElementById("phone-frame") : null;
    const currentDate = new Date();
    const formattedDate = `${currentDate.getDate()} ${currentDate.toLocaleString('en-US', { month: 'short' })} ${currentDate.getFullYear().toString().slice(-2)}, ${currentDate.getHours().toString().padStart(2, '0')}:${currentDate.getMinutes().toString().padStart(2, '0')}`;

    const content = (
        <div className="absolute inset-0 z-50 flex flex-col bg-[#e8e8e8]">
            {/* Header - RaaS branded (#0b0b0c instead of red) */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-[#0b0b0c] pt-12 pb-6 px-6"
            >
                <h1 className="text-white text-2xl font-medium italic text-center">
                    Login Request Alert
                </h1>
            </motion.div>

            {/* Content */}
            <div className="flex-1 p-6 relative">
                {/* FROM Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.3 }}
                    className="bg-white rounded-2xl shadow-sm overflow-hidden mb-6"
                >
                    <div className="bg-[#f5f5f0] px-6 py-4 text-center">
                        <span className="text-gray-500 text-sm font-medium tracking-wide">FROM</span>
                    </div>
                    <div className="px-6 py-8 text-center">
                        <h2 className="text-3xl font-bold text-gray-900">
                            RaaS Mobile
                        </h2>
                        <h2 className="text-3xl font-bold text-gray-900">
                            App
                        </h2>
                    </div>
                </motion.div>

                {/* REQUEST DETAILS */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.3 }}
                >
                    <h3 className="text-gray-800 text-sm font-semibold mb-3 tracking-wide">
                        REQUEST DETAILS
                    </h3>
                    <div className="bg-[#f5f5f0] rounded-2xl px-5 py-4 flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                            <Clock className="w-5 h-5 text-[#c9a227]" />
                        </div>
                        <div>
                            <p className="text-gray-800 text-sm font-semibold">Date & Time</p>
                            <p className="text-[#c9a227] text-sm">{formattedDate}</p>
                        </div>
                    </div>
                </motion.div>

                {/* Fingerprint watermark background */}
                <div className="absolute bottom-8 right-4 opacity-5 pointer-events-none">
                    <svg
                        width="200"
                        height="200"
                        viewBox="0 0 64 64"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle cx="32" cy="32" r="28" stroke="#000" strokeWidth="1" fill="none" />
                        <path
                            d="M32 12C21 12 12 21 12 32C12 43 21 52 32 52"
                            stroke="#000"
                            strokeWidth="1"
                            fill="none"
                            strokeLinecap="round"
                        />
                        <path
                            d="M32 18C24.3 18 18 24.3 18 32C18 39.7 24.3 46 32 46"
                            stroke="#000"
                            strokeWidth="1"
                            fill="none"
                            strokeLinecap="round"
                        />
                        <path
                            d="M32 24C27.6 24 24 27.6 24 32C24 36.4 27.6 40 32 40"
                            stroke="#000"
                            strokeWidth="1"
                            fill="none"
                            strokeLinecap="round"
                        />
                    </svg>
                </div>
            </div>

            {/* Action buttons */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.3 }}
                className="p-6 flex gap-4"
            >
                <Button
                    variant="secondary"
                    size="lg"
                    className="flex-1 bg-white border border-gray-300 text-gray-900 hover:bg-gray-50"
                    onClick={onDecline}
                >
                    Decline
                </Button>
                <Button
                    variant="default"
                    size="lg"
                    className="flex-1 bg-[#0b0b0c] text-white hover:bg-[#1a1a1a]"
                    onClick={onConfirm}
                >
                    Confirm
                </Button>
            </motion.div>
        </div>
    );

    return portalTarget ? createPortal(content, portalTarget) : content;
}
