import { useState } from "react";
import { Header } from "@/app/ui/Header";
import { Button } from "@/app/ui/Button";
import { ShieldCheck } from "lucide-react";

interface ConfirmationScreenProps {
    onBack: () => void;
    onConfirm: () => void;
    amount: string;
}

export default function ConfirmationScreen({ onBack, onConfirm, amount }: ConfirmationScreenProps) {
    const [loading, setLoading] = useState(false);

    const handlePay = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            onConfirm();
        }, 2000); // Simulate processing time
    };

    return (
        <div className="flex flex-col h-full bg-background relative">
            <Header title="Review Transfer" onBack={onBack} />

            <main className="flex-1 p-6 space-y-6">

                <div className="bg-background rounded-3xl p-6 border border-border space-y-6">
                    <div className="flex items-center justify-between border-b border-border pb-4">
                        <span className="text-muted-foreground">Amount to send</span>
                        <span className="text-xl font-bold text-foreground">{amount} AED</span>
                    </div>

                    <div className="flex items-center justify-between border-b border-border pb-4">
                        <span className="text-muted-foreground">Recipient gets</span>
                        <span className="text-xl font-bold text-foreground">{(parseFloat(amount) * 15.33).toFixed(2)} PHP</span>
                    </div>

                    <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Recipient</span>
                        <div className="flex items-center gap-2">
                            <div className="h-6 w-6 rounded-full bg-muted text-[10px] flex items-center justify-center font-bold">AJ</div>
                            <span className="font-semibold text-foreground">Alice Johnson</span>
                        </div>
                    </div>
                </div>

                <div className="bg-muted rounded-2xl p-4 flex gap-3 text-foreground border border-border">
                    <ShieldCheck className="h-5 w-5 shrink-0" />
                    <p className="text-xs leading-relaxed opacity-80">
                        Your transfer is protected. Bank-level encryption ensures your money arrives safely.
                    </p>
                </div>

            </main>

            <div className="p-6 mt-auto">
                <div className="flex justify-between text-sm mb-4 px-1">
                    <span className="text-muted-foreground">Total includes fees</span>
                    <span className="font-bold text-foreground">{amount} AED</span>
                </div>

                <Button
                    className="w-full"
                    size="lg"
                    isLoading={loading}
                    onClick={handlePay}
                >
                    Pay Now
                </Button>
            </div>
        </div>
    );
}
