import { useEffect } from "react";
import { Button } from "@/app/ui/Button";
import { motion } from "framer-motion";
import { Check, Receipt } from "lucide-react";
import { fireConfetti } from "@/app/lib/confetti";

interface TransactionSuccessScreenProps {
    onHome: () => void;
    amount: string;
}

export default function TransactionSuccessScreen({ onHome, amount }: TransactionSuccessScreenProps) {

    useEffect(() => {
        fireConfetti();
    }, []);

    return (
        <div className="flex flex-col h-full bg-background items-center justify-center p-8 text-center">

            <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", duration: 0.6 }}
                className="w-24 h-24 bg-foreground rounded-full flex items-center justify-center mb-6"
            >
                <Check className="w-12 h-12 text-background stroke-[3]" />
            </motion.div>

            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                <h1 className="text-3xl font-bold tracking-tight mb-2 text-foreground">Transfer Sent!</h1>
                <p className="text-muted-foreground mb-6">
                    We've sent <strong className="text-foreground">{amount} AED</strong> to Alice Johnson.
                </p>
            </motion.div>

            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="bg-background p-4 rounded-2xl w-full border border-border mb-8"
            >
                <div className="flex items-center gap-3 mb-4">
                    <div className="bg-muted p-2 rounded-lg">
                        <Receipt className="w-5 h-5 text-muted-foreground" />
                    </div>
                    <div className="text-left">
                        <p className="text-xs text-muted-foreground font-medium">Transaction ID</p>
                        <p className="text-sm font-mono text-foreground">TXN-83920192</p>
                    </div>
                </div>
                <div className="h-px bg-border my-2" />
                <div className="flex justify-between text-sm py-1">
                    <span className="text-muted-foreground">Rate</span>
                    <span className="font-medium text-foreground">1 AED = 15.33 PHP</span>
                </div>
                <div className="flex justify-between text-sm py-1">
                    <span className="text-muted-foreground">Fee</span>
                    <span className="font-medium text-foreground">Free</span>
                </div>
            </motion.div>

            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="w-full"
            >
                <Button className="w-full" size="lg" onClick={onHome}>
                    Done
                </Button>
            </motion.div>
        </div>
    );
}
