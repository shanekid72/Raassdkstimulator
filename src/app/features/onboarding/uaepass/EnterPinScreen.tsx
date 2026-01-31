import { useState } from "react";
import { motion } from "framer-motion";
import { Smile, Delete } from "lucide-react";
import { createPortal } from "react-dom";

interface EnterPinScreenProps {
    onSubmit: () => void;
    onExit: () => void;
}

/**
 * Frames 004/005 - Enter PIN Screen
 * Bottom sheet with UAE PASS branding for PIN entry.
 * Background shows RaaS branded header (#0b0b0c instead of red).
 * UAE PASS PIN entry UI is kept as-is (legal entity).
 */
export default function EnterPinScreen({ onSubmit, onExit }: EnterPinScreenProps) {
    const portalTarget = typeof document !== "undefined" ? document.getElementById("phone-frame") : null;
    const [pin, setPin] = useState<string[]>([]);
    const PIN_LENGTH = 4;

    const handleNumberPress = (num: string) => {
        if (pin.length < PIN_LENGTH) {
            const newPin = [...pin, num];
            setPin(newPin);
            
            // Auto-submit when PIN is complete
            if (newPin.length === PIN_LENGTH) {
                setTimeout(() => {
                    onSubmit();
                }, 300);
            }
        }
    };

    const handleDelete = () => {
        setPin(prev => prev.slice(0, -1));
    };

    const numberKeys = [
        { num: "1", letters: "" },
        { num: "2", letters: "ABC" },
        { num: "3", letters: "DEF" },
        { num: "4", letters: "GHI" },
        { num: "5", letters: "JKL" },
        { num: "6", letters: "MNO" },
        { num: "7", letters: "PQRS" },
        { num: "8", letters: "TUV" },
        { num: "9", letters: "WXYZ" },
    ];

    const content = (
        <div className="absolute inset-0 z-50 flex flex-col">
            {/* Background - RaaS branded header visible behind the sheet */}
            <div className="absolute inset-0 bg-[#e8e8e8]">
                {/* Header strip - RaaS branding */}
                <div className="bg-[#0b0b0c] pt-12 pb-6 px-6">
                    <h1 className="text-white text-2xl font-medium italic text-center opacity-50">
                        Login Request Alert
                    </h1>
                </div>
            </div>

            {/* PIN Entry Bottom Sheet */}
            <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-2xl"
                style={{ maxHeight: "85%" }}
            >
                {/* Exit button */}
                <div className="flex justify-end px-6 pt-4">
                    <button
                        onClick={onExit}
                        className="text-[#00843d] text-base font-medium"
                    >
                        Exit
                    </button>
                </div>

                {/* UAE PASS branding - legal entity, keep as-is */}
                <div className="flex items-center justify-center gap-3 py-4">
                    <svg
                        width="40"
                        height="40"
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
                        <span className="text-gray-800 text-xs" dir="rtl">الهوية الرقمية</span>
                        <span className="text-gray-900 text-lg font-bold">UAE PASS</span>
                    </div>
                </div>

                {/* Title */}
                <div className="text-center px-6 pb-4">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Enter PIN</h2>
                    <p className="text-gray-500 text-base">Please enter your UAE PASS PIN</p>
                </div>

                {/* PIN Dots */}
                <div className="flex justify-center gap-6 py-6">
                    {Array.from({ length: PIN_LENGTH }).map((_, index) => (
                        <motion.div
                            key={index}
                            className={`w-5 h-5 rounded-full border-2 ${
                                index < pin.length
                                    ? "bg-[#00843d] border-[#00843d]"
                                    : "bg-transparent border-[#00843d]"
                            }`}
                            animate={index < pin.length ? { scale: [1, 1.2, 1] } : {}}
                            transition={{ duration: 0.15 }}
                        />
                    ))}
                </div>

                {/* Divider */}
                <div className="w-48 h-px bg-gray-200 mx-auto mb-6" />

                {/* Face ID option */}
                <div className="flex flex-col items-center mb-6">
                    <div className="w-12 h-12 flex items-center justify-center mb-2">
                        <Smile className="w-8 h-8 text-gray-400" strokeWidth={1.5} />
                    </div>
                    <span className="text-gray-400 text-sm">Try with Face ID</span>
                </div>

                {/* Number Pad */}
                <div className="px-4 pb-8">
                    <div className="grid grid-cols-3 gap-2">
                        {numberKeys.map(({ num, letters }) => (
                            <motion.button
                                key={num}
                                whileTap={{ scale: 0.95, backgroundColor: "#f0f0f0" }}
                                className="h-16 bg-white border border-gray-200 rounded-xl flex flex-col items-center justify-center"
                                onClick={() => handleNumberPress(num)}
                            >
                                <span className="text-2xl font-medium text-gray-900">{num}</span>
                                {letters && (
                                    <span className="text-[10px] text-gray-400 tracking-widest">{letters}</span>
                                )}
                            </motion.button>
                        ))}
                        
                        {/* Empty space */}
                        <div className="h-16" />
                        
                        {/* Zero */}
                        <motion.button
                            whileTap={{ scale: 0.95, backgroundColor: "#f0f0f0" }}
                            className="h-16 bg-white border border-gray-200 rounded-xl flex items-center justify-center"
                            onClick={() => handleNumberPress("0")}
                        >
                            <span className="text-2xl font-medium text-gray-900">0</span>
                        </motion.button>
                        
                        {/* Delete */}
                        <motion.button
                            whileTap={{ scale: 0.95 }}
                            className="h-16 flex items-center justify-center"
                            onClick={handleDelete}
                        >
                            <Delete className="w-6 h-6 text-gray-600" />
                        </motion.button>
                    </div>
                </div>
            </motion.div>
        </div>
    );

    return portalTarget ? createPortal(content, portalTarget) : content;
}
