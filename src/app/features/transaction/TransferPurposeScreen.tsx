import { useState } from "react";
import { Button } from "@/app/ui/Button";
import { BottomSheet } from "@/app/ui/BottomSheet";

interface TransferPurposeScreenProps {
    onBack: () => void;
    onConfirm: () => void;
}

const PURPOSES = [
    "Educational Fees",
    "Investment",
    "Real Estate Investment",
    "Repayment of Loan",
    "Savings",
    "Travel Expenses",
    "Salary",
    "Family Support",
];

export default function TransferPurposeScreen({ onBack, onConfirm }: TransferPurposeScreenProps) {
    const [selected, setSelected] = useState<string | null>(null);

    return (
        <div className="flex flex-col h-full bg-background">
            <BottomSheet open onClose={onBack} title="Select Purpose of Transfer">
                <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-3">
                        {PURPOSES.map((purpose) => (
                            <button
                                key={purpose}
                                className={`px-3 py-2 rounded-xl text-xs font-semibold border transition-colors ${selected === purpose
                                    ? "border-foreground bg-foreground text-background"
                                    : "border-border text-muted-foreground hover:bg-muted"
                                    }`}
                                onClick={() => setSelected(purpose)}
                            >
                                {purpose}
                            </button>
                        ))}
                    </div>
                    <Button className="w-full" size="lg" disabled={!selected} onClick={onConfirm}>
                        Confirm
                    </Button>
                </div>
            </BottomSheet>
        </div>
    );
}
