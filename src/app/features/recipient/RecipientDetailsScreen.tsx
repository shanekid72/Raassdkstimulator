import { useState } from "react";
import { Header } from "@/app/ui/Header";
import { Input } from "@/app/ui/Input";
import { Button } from "@/app/ui/Button";
import { Card, CardContent } from "@/app/ui/Card";
import { ChevronRight, Landmark } from "lucide-react";

interface RecipientDetailsScreenProps {
    onBack: () => void;
    onNext: () => void;
}

export default function RecipientDetailsScreen({ onBack, onNext }: RecipientDetailsScreenProps) {
    const [accountNumber, setAccountNumber] = useState("0000123456");
    const [ifsc, setIfsc] = useState("IDFB0080172");

    return (
        <div className="flex flex-col h-full bg-background">
            <Header title="Payout Details" onBack={onBack} />

            <main className="flex-1 p-6 space-y-4 overflow-y-auto">
                <Card>
                    <CardContent className="flex items-center justify-between p-4">
                        <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-2xl bg-muted flex items-center justify-center">
                                <Landmark className="h-5 w-5 text-foreground" />
                            </div>
                            <span className="text-sm font-semibold text-foreground">Send to bank account</span>
                        </div>
                        <button className="text-xs text-muted-foreground">Change</button>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="space-y-4 pt-6">
                        <div className="text-sm font-semibold text-foreground">Recipient Bank Details</div>

                        <Input
                            label="Account Number"
                            value={accountNumber}
                            onChange={(event) => setAccountNumber(event.target.value)}
                        />

                        <div className="space-y-2">
                            <div className="flex items-center justify-between">
                                <label className="text-xs font-medium text-muted-foreground">IFSC</label>
                                <button className="text-xs text-muted-foreground">Change IFSC Code</button>
                            </div>
                            <Input
                                value={ifsc}
                                onChange={(event) => setIfsc(event.target.value)}
                            />
                        </div>

                        <div className="rounded-2xl bg-muted p-4 text-xs text-muted-foreground space-y-1">
                            <div className="text-sm font-semibold text-foreground">IDFC FIRST BANK LTD</div>
                            <div>Address: GROUND FLOOR, SITE NO. 4 & 5TH,</div>
                            <div>27TH MAIN, 1ST SECTOR, HSR LAYOUT,</div>
                            <div>BENGALURU - 560095</div>
                            <div>State: KARNATAKA</div>
                            <div>District: BANGALORE</div>
                        </div>
                    </CardContent>
                </Card>
            </main>

            <div className="p-6 mt-auto">
                <Button
                    className="w-full"
                    size="lg"
                    rightIcon={<ChevronRight className="h-4 w-4" />}
                    onClick={onNext}
                >
                    Confirm and Continue
                </Button>
            </div>
        </div>
    );
}
