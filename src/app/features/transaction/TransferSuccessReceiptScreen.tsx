import { useEffect } from "react";
import { Button } from "@/app/ui/Button";
import { Check } from "lucide-react";
import { fireConfetti } from "@/app/lib/confetti";

interface TransferSuccessReceiptScreenProps {
    onHome: () => void;
}

export default function TransferSuccessReceiptScreen({ onHome }: TransferSuccessReceiptScreenProps) {
    useEffect(() => {
        fireConfetti();
    }, []);

    return (
        <div className="flex flex-col h-full bg-background items-center justify-center p-8 text-center">
            <div className="w-20 h-20 rounded-full bg-foreground flex items-center justify-center mb-6">
                <Check className="w-10 h-10 text-background stroke-[3]" />
            </div>

            <div className="space-y-2 mb-6">
                <h1 className="text-2xl font-bold tracking-tight text-foreground">The money is on the way</h1>
                <Button variant="ghost" size="sm">Track status</Button>
            </div>

            <div className="bg-background rounded-2xl w-full border border-border p-5 space-y-4">
                <div className="text-center">
                    <div className="text-2xl font-semibold text-foreground">15,333.43 PHP</div>
                    <div className="text-xs text-muted-foreground">Recipient Receives</div>
                </div>

                <div className="space-y-2 text-xs text-muted-foreground text-left">
                    <div>Payment method - Debit Cards</div>
                    <div>Reference ID - 025315015528</div>
                    <div>Send Amount - 1010.00 AED</div>
                    <div>Fund to - Sumit Balakrishna</div>
                    <div>Bank and Details - IDFC Bank Ltd. - 0000123456</div>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-3 text-[10px] w-full mt-6">
                <button className="bg-background rounded-2xl p-3 border border-border">Repeat transaction</button>
                <button className="bg-background rounded-2xl p-3 border border-border">Download receipt</button>
                <button className="bg-background rounded-2xl p-3 border border-border">Go to dashboard</button>
            </div>

            <div className="w-full mt-6">
                <Button className="w-full" size="lg" onClick={onHome}>
                    Go to dashboard
                </Button>
            </div>
        </div>
    );
}