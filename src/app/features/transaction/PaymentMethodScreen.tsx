import { useState } from "react";
import { Button } from "@/app/ui/Button";
import { Modal } from "@/app/ui/Modal";
import { CreditCard, Wallet, ChevronRight, Check } from "lucide-react";
import { motion } from "framer-motion";

interface PaymentMethodScreenProps {
    onBack: () => void;
    onNext: () => void;
    amount: string;
}

const PAYMENT_METHODS = [
    { id: "apple", name: "Apple Pay", icon: Wallet, desc: "Fastest" },
    { id: "card", name: "Debit Card", icon: CreditCard, desc: "0 Fees" },
];

export default function PaymentMethodScreen({ onBack, onNext, amount }: PaymentMethodScreenProps) {
    const [selected, setSelected] = useState<string | null>(null);

    return (
        <div className="flex flex-col h-full bg-background">
            <Modal
                open
                onClose={onBack}
                title="Payment Method"
                footer={
                    <Button className="w-full" size="lg" disabled={!selected} onClick={onNext}>
                        Review & Pay
                    </Button>
                }
            >
                <div className="text-center py-2">
                    <span className="text-xs text-muted-foreground">Total to pay</span>
                    <h2 className="text-3xl font-bold mt-1 text-foreground">{amount} AED</h2>
                </div>

                <div className="space-y-3">
                    <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Select Method</div>

                    {PAYMENT_METHODS.map((method) => (
                        <motion.button
                            key={method.id}
                            className={`w-full flex items-center justify-between p-4 rounded-2xl border transition-all ${
                                selected === method.id
                                    ? "bg-foreground text-background border-foreground"
                                    : "bg-background text-foreground border-border hover:bg-muted"
                            }`}
                            onClick={() => setSelected(method.id)}
                            whileTap={{ scale: 0.98 }}
                        >
                            <div className="flex items-center gap-4">
                                <div className={`h-12 w-12 rounded-full flex items-center justify-center ${
                                    selected === method.id ? "bg-background/15" : "bg-muted text-foreground"
                                }`}>
                                    <method.icon className="h-6 w-6" />
                                </div>
                                <div className="text-left">
                                    <p className="font-semibold text-lg">{method.name}</p>
                                    <p className={`text-xs ${selected === method.id ? "text-background/70" : "text-muted-foreground"}`}>
                                        {method.desc}
                                    </p>
                                </div>
                            </div>

                            {selected === method.id ? <Check className="h-6 w-6" /> : <ChevronRight className="h-5 w-5 text-muted-foreground" />}
                        </motion.button>
                    ))}
                </div>
            </Modal>
        </div>
    );
}
