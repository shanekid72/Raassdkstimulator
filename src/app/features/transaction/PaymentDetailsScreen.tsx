import { useState } from "react";
import { Button } from "@/app/ui/Button";
import { Header } from "@/app/ui/Header";
import { Input } from "@/app/ui/Input";

interface PaymentDetailsScreenProps {
    onBack: () => void;
    onPay: () => void;
}

export default function PaymentDetailsScreen({ onBack, onPay }: PaymentDetailsScreenProps) {
    const [form, setForm] = useState({
        name: "",
        number: "",
        expiry: "",
        cvc: "",
    });

    return (
        <div className="flex flex-col h-full bg-background">
            <Header title="Payment Details" onBack={onBack} />

            <main className="flex-1 p-6 space-y-4">
                <div className="text-sm text-muted-foreground">Accepted card:</div>
                <div className="text-xs text-muted-foreground">Visa, MasterCard, Amex, Discover</div>

                <Input
                    label="Cardholder name (Optional)"
                    placeholder=""
                    value={form.name}
                    onChange={(event) => setForm({ ...form, name: event.target.value })}
                />

                <Input
                    label="Card Number"
                    placeholder=""
                    value={form.number}
                    onChange={(event) => setForm({ ...form, number: event.target.value })}
                />

                <Input
                    label="Expiry date (Format is MM/YY)"
                    placeholder=""
                    value={form.expiry}
                    onChange={(event) => setForm({ ...form, expiry: event.target.value })}
                />

                <Input
                    label="Security code (3 - 4 digit code on your card)"
                    placeholder=""
                    value={form.cvc}
                    onChange={(event) => setForm({ ...form, cvc: event.target.value })}
                />
            </main>

            <div className="p-6 mt-auto">
                <Button className="w-full" size="lg" onClick={onPay}>
                    Pay
                </Button>
            </div>
        </div>
    );
}
