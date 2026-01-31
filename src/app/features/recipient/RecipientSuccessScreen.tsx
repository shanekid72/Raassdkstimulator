import { useEffect } from "react";
import { Check, Plus } from "lucide-react";
import { Button } from "@/app/ui/Button";
import { fireConfetti } from "@/app/lib/confetti";
import { motion } from "framer-motion";

interface RecipientSuccessScreenProps {
    onAddAnother: () => void;
    onDashboard: () => void;
}

export default function RecipientSuccessScreen({ onAddAnother, onDashboard }: RecipientSuccessScreenProps) {
    useEffect(() => {
        fireConfetti();
    }, []);

    return (
        <div className="flex flex-col h-full bg-background items-center justify-center p-6 text-center">
            <motion.div
                className="w-48 h-48 rounded-full bg-muted flex items-center justify-center mb-6"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
            >
                <div className="w-24 h-24 rounded-full bg-background border border-border flex items-center justify-center">
                    <Check className="w-10 h-10 text-foreground" />
                </div>
            </motion.div>

            <div className="space-y-2 mb-10">
                <h1 className="text-2xl font-bold tracking-tight text-foreground">Recipient added</h1>
                <p className="text-muted-foreground text-base font-semibold">successfully</p>
            </div>

            <div className="w-full space-y-4">
                <Button
                    className="w-full"
                    size="lg"
                    variant="secondary"
                    leftIcon={<Plus className="w-4 h-4" />}
                    onClick={onAddAnother}
                >
                    Add another one
                </Button>

                <Button
                    className="w-full"
                    size="lg"
                    variant="ghost"
                    onClick={onDashboard}
                >
                    Back to Dashboard
                </Button>
            </div>
        </div>
    );
}
