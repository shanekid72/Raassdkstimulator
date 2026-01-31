import { useEffect } from "react";
import { Button } from "@/app/ui/Button";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { fireConfetti } from "@/app/lib/confetti";

interface OnboardingSuccessScreenProps {
    onComplete: () => void;
}

export default function OnboardingSuccessScreen({ onComplete }: OnboardingSuccessScreenProps) {

    useEffect(() => {
        fireConfetti();
    }, []);

    return (
        <div className="flex flex-col h-full bg-background items-center justify-center p-8 text-center">

            <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", duration: 0.6 }}
                className="w-24 h-24 bg-black rounded-full flex items-center justify-center mb-8 shadow-xl"
            >
                <Check className="w-12 h-12 text-white stroke-[3]" />
            </motion.div>

            <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-3xl font-bold tracking-tight mb-2"
            >
                You're Verified!
            </motion.h1>

            <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-muted-foreground mb-12"
            >
                Your account has been successfully created and verified. You can now start sending money.
            </motion.p>

            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="w-full"
            >
                <Button className="w-full" size="lg" onClick={onComplete}>
                    Go to Home
                </Button>
            </motion.div>
        </div>
    );
}
