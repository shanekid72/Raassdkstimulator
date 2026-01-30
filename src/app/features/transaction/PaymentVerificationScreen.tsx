import { Button } from "@/app/ui/Button";
import { Header } from "@/app/ui/Header";
import { Input } from "@/app/ui/Input";

interface PaymentVerificationScreenProps {
    onBack: () => void;
    onSubmit: () => void;
}

export default function PaymentVerificationScreen({ onBack, onSubmit }: PaymentVerificationScreenProps) {
    return (
        <div className="flex flex-col h-full bg-background">
            <Header title="Payment Method" onBack={onBack} />

            <main className="flex-1 p-6 space-y-6">
                <div className="space-y-2">
                    <div className="text-sm font-semibold text-foreground">Transaction Verification</div>
                    <div className="text-xs text-muted-foreground">Enter your Secure code</div>
                </div>

                <Input placeholder="" />

                <Button className="w-full" size="lg" onClick={onSubmit}>
                    Submit
                </Button>

                <div className="flex justify-between text-xs text-muted-foreground">
                    <button>Resend</button>
                    <button>Learn More</button>
                </div>

                <button className="text-xs text-muted-foreground">Need Some Help</button>
            </main>
        </div>
    );
}
