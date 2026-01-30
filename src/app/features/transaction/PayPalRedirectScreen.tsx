import { Button } from "@/app/ui/Button";
import { Header } from "@/app/ui/Header";

interface PayPalRedirectScreenProps {
    onBack: () => void;
    onProceed: () => void;
}

export default function PayPalRedirectScreen({ onBack, onProceed }: PayPalRedirectScreenProps) {
    return (
        <div className="flex flex-col h-full bg-background">
            <Header title="PayPal" onBack={onBack} />

            <main className="flex-1 p-6 flex flex-col items-center justify-center text-center space-y-4">
                <div className="text-2xl font-semibold text-foreground">PayPal</div>
                <div className="text-sm font-semibold text-foreground">Redirecting to PayPal...</div>
                <p className="text-xs text-muted-foreground max-w-xs">
                    We are securely redirecting you to authorize the transaction. Please follow the instruction in the PayPal app.
                </p>
            </main>

            <div className="p-6 mt-auto">
                <Button className="w-full" size="lg" onClick={onProceed}>
                    Proceed
                </Button>
            </div>
        </div>
    );
}
