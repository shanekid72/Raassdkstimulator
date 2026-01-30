import { useState } from "react";
import { Button } from "@/app/ui/Button";
import { Header } from "@/app/ui/Header";
import { Input } from "@/app/ui/Input";
import { Check } from "lucide-react";

interface ReviewTransferScreenProps {
    onBack: () => void;
    onNext: () => void;
    recipientName: string;
    amount: string;
}

const REVIEW_RATE_DISPLAY = "20.35";
const REVIEW_RATE_VALUE = 15.33343;
const TAX_AMOUNT = 5;
const PAYMENT_CHARGES = 5;

export default function ReviewTransferScreen({ onBack, onNext, recipientName, amount }: ReviewTransferScreenProps) {
    const [accepted, setAccepted] = useState(false);
    const [promo, setPromo] = useState("");
    const numericAmount = parseFloat(amount) || 0;
    const amountDisplay = Number.isFinite(numericAmount) ? numericAmount.toFixed(2) : amount;
    const receiveAmount = (numericAmount * REVIEW_RATE_VALUE).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    const totalToPayValue = numericAmount + TAX_AMOUNT + PAYMENT_CHARGES;
    const totalToPay = totalToPayValue.toFixed(2);
    const totalToPayLabel = Math.round(totalToPayValue).toString();

    return (
        <div className="flex flex-col h-full bg-background">
            <Header title="Review Transfer" onBack={onBack} />

            <main className="flex-1 p-6 space-y-6 overflow-y-auto">
                <div className="bg-background rounded-2xl border border-border p-4 flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-muted text-foreground flex items-center justify-center text-sm font-semibold">
                        {recipientName.split(" ").map((part) => part[0]).join("")}
                    </div>
                    <div>
                        <div className="text-sm font-semibold text-foreground">{recipientName}</div>
                        <div className="text-xs text-muted-foreground">IDFC First Bank Ltd.</div>
                        <div className="text-xs text-muted-foreground">0000123456</div>
                    </div>
                </div>

                <div className="bg-background rounded-2xl border border-border p-4 space-y-4">
                    <div className="flex items-center justify-between">
                        <div className="text-sm font-semibold text-foreground">Payment method</div>
                        <button className="text-xs text-muted-foreground">Debit Cards (Change)</button>
                    </div>

                    <div className="space-y-3">
                        <div className="flex items-center justify-between">
                            <span className="text-sm text-muted-foreground">You send</span>
                            <span className="text-sm font-semibold text-foreground">{amountDisplay} AED</span>
                        </div>
                        <div className="text-xs text-muted-foreground">1 AED = {REVIEW_RATE_DISPLAY} PHP</div>
                        <div className="flex items-center justify-between">
                            <span className="text-sm text-muted-foreground">They receive</span>
                            <span className="text-sm font-semibold text-foreground">{receiveAmount} PHP</span>
                        </div>
                    </div>

                    <div className="border-t border-border pt-4 space-y-2 text-sm">
                        <div className="flex items-center justify-between text-muted-foreground">
                            <span>Taxes</span>
                            <span>{TAX_AMOUNT.toFixed(2)} AED</span>
                        </div>
                        <div className="flex items-center justify-between text-muted-foreground">
                            <span>Fee</span>
                            <span>0.00 AED</span>
                        </div>
                        <div className="flex items-center justify-between text-muted-foreground">
                            <span>Payment Charges</span>
                            <span>{PAYMENT_CHARGES.toFixed(2)} AED</span>
                        </div>
                        <div className="flex items-center justify-between text-muted-foreground">
                            <span>Discount</span>
                            <span>0.00 AED</span>
                        </div>
                        <div className="flex items-center justify-between font-semibold text-foreground">
                            <span>Total to pay</span>
                            <span>{totalToPay} AED</span>
                        </div>
                    </div>
                </div>

                <div className="bg-background rounded-2xl border border-border p-4 space-y-3">
                    <div className="text-sm font-semibold text-foreground">Promo Code</div>
                    <div className="flex items-center gap-2">
                        <Input
                            className="h-10"
                            placeholder="Enter Promo Code"
                            value={promo}
                            onChange={(event) => setPromo(event.target.value)}
                        />
                        <Button size="sm" variant="secondary">Apply</Button>
                    </div>
                    <button className="text-xs text-muted-foreground">View all promo codes</button>
                </div>

                <div className="space-y-3">
                    <div className="text-sm font-semibold text-foreground">Terms & Conditions</div>
                    <button
                        className="flex items-center gap-3 text-left"
                        onClick={() => setAccepted(!accepted)}
                    >
                        <div className={`h-5 w-5 rounded border flex items-center justify-center ${accepted ? "bg-foreground border-foreground" : "border-border"}`}>
                            {accepted ? <Check className="h-3 w-3 text-background" /> : null}
                        </div>
                        <span className="text-xs text-muted-foreground">I accept Terms of services and Privacy Policy</span>
                    </button>
                </div>

                <div className="text-[10px] text-muted-foreground text-center">Rates are indicative and may vary</div>
            </main>

            <div className="p-6 mt-auto">
                <Button className="w-full" size="lg" onClick={onNext} disabled={!accepted}>
                    Send {totalToPayLabel} AED
                </Button>
            </div>
        </div>
    );
}
