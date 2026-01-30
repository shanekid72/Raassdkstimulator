import { useState } from "react";
import { Header } from "@/app/ui/Header";
import { Button } from "@/app/ui/Button";
import { ArrowDown, Info } from "lucide-react";

interface AmountScreenProps {
    onBack: () => void;
    onNext: (amount: string) => void;
}

const EXCHANGE_RATE = 15.33; // Mock rate for AED to PHP

export default function AmountScreen({ onBack, onNext }: AmountScreenProps) {
    const [amount, setAmount] = useState("");

    const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value.replace(/[^0-9.]/g, "");
        setAmount(val);
    };

    const convertedAmount = amount ? (parseFloat(amount) * EXCHANGE_RATE).toFixed(2) : "0.00";

    return (
        <div className="flex flex-col h-full bg-background">
            <Header title="Send Money" onBack={onBack} />

            <main className="flex-1 p-6 flex flex-col items-center">
                <div className="w-full mt-8 bg-background rounded-3xl p-6 border border-border relative z-10">
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-muted-foreground">You send</span>
                        <div className="flex items-center gap-2 bg-muted rounded-full px-3 py-1">
                            <div className="w-5 h-5 bg-foreground rounded-full text-[10px] text-background flex items-center justify-center font-bold">UE</div>
                            <span className="text-sm font-bold text-foreground">AED</span>
                        </div>
                    </div>
                    <input
                        type="text"
                        placeholder="0"
                        value={amount}
                        onChange={handleAmountChange}
                        className="w-full text-4xl font-bold bg-transparent border-none outline-none placeholder:text-muted-foreground text-foreground"
                        autoFocus
                    />
                </div>

                <div className="-my-3 z-20 bg-background rounded-full p-1 border border-border">
                    <ArrowDown className="w-5 h-5 text-foreground" />
                </div>

                <div className="w-full bg-muted rounded-3xl p-6 pt-8 pb-4 border border-border relative top-[-10px] z-0">
                    <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium text-muted-foreground">They receive</span>
                        <div className="flex items-center gap-2 bg-background rounded-full px-3 py-1 border border-border">
                            <div className="w-5 h-5 bg-foreground rounded-full text-[10px] text-background flex items-center justify-center font-bold">PH</div>
                            <span className="text-sm font-bold text-foreground">PHP</span>
                        </div>
                    </div>
                    <div className="text-3xl font-bold text-foreground">
                        {convertedAmount}
                    </div>
                    <div className="flex items-center gap-1 mt-4 text-xs text-muted-foreground bg-background/70 w-fit px-2 py-1 rounded-md border border-border">
                        <Info className="w-3 h-3" />
                        <span>1 AED = {EXCHANGE_RATE} PHP - Fee: 0 AED</span>
                    </div>
                </div>

                <div className="w-full mt-6 grid grid-cols-4 gap-2">
                    {["100", "500", "1000", "5000"].map((val) => (
                        <button
                            key={val}
                            onClick={() => setAmount(val)}
                            className="py-2 bg-background border border-border rounded-xl text-sm font-semibold text-muted-foreground hover:bg-muted transition-all"
                        >
                            {val}
                        </button>
                    ))}
                </div>
            </main>

            <div className="p-6 mt-auto">
                <Button
                    className="w-full"
                    size="lg"
                    disabled={!amount || parseFloat(amount) <= 0}
                    onClick={() => onNext(amount)}
                >
                    Continue
                </Button>
            </div>
        </div>
    );
}
