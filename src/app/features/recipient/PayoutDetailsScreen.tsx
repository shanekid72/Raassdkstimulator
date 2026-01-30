import { useState } from "react";
import { Header } from "@/app/ui/Header";
import { Input } from "@/app/ui/Input";
import { Button } from "@/app/ui/Button";
import { Card, CardContent } from "@/app/ui/Card";
import { Building2, Pencil } from "lucide-react";

interface CountryDetails {
    name: string;
    currencyName?: string;
    code?: string;
}

interface PayoutDetailsScreenProps {
    country?: CountryDetails;
    onBack: () => void;
    onNext: () => void;
}

export default function PayoutDetailsScreen({ country, onBack, onNext }: PayoutDetailsScreenProps) {
    const [accountNumber, setAccountNumber] = useState("0000123456");
    const [ifsc, setIfsc] = useState("IDFB0080172");

    return (
        <div className="flex flex-col h-full bg-background">
            <Header title="Payout Details" onBack={onBack} />

            <main className="flex-1 p-6 overflow-y-auto pb-24 space-y-6">

                {/* Method Header */}
                <div className="flex items-center justify-between">
                    <div className="space-y-1">
                        <h2 className="text-lg font-bold text-foreground">Send to bank account</h2>
                        {country?.name ? (
                            <p className="text-xs text-muted-foreground">Country: {country.name}</p>
                        ) : null}
                    </div>
                    <button className="text-muted-foreground text-xs font-semibold">Change</button>
                </div>

                {/* Bank Form */}
                <Card>
                    <CardContent className="space-y-4 pt-6">
                        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Recipient Bank Details</h3>

                        <Input
                            label="Account Number"
                            value={accountNumber}
                            onChange={e => setAccountNumber(e.target.value)}
                        />

                        <div className="relative">
                            <Input
                                label="IFSC"
                                value={ifsc}
                                onChange={e => setIfsc(e.target.value)}
                            />
                            <button className="absolute right-3 top-[26px] text-xs text-muted-foreground font-semibold flex items-center gap-1">
                                <Pencil className="w-3 h-3" /> Change IFSC Code
                            </button>
                        </div>

                        <div className="bg-muted p-4 rounded-xl border border-border space-y-2">
                            <div className="flex items-center gap-2">
                                <Building2 className="w-5 h-5 text-muted-foreground" />
                                <span className="font-bold text-foreground">IDFC FIRST BANK LTD</span>
                            </div>
                            <div className="text-xs text-muted-foreground space-y-1 pl-7">
                                <p>Address: GROUND FLOOR, SITE NO. 4 & 5TH, 27TH MAIN, 1ST SECTOR, HSR LAYOUT, BENGALURU - 560095</p>
                                <p>State: KARNATAKA</p>
                                <p>District: BANGALORE</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

            </main>

            <div className="p-6 mt-auto border-t border-border bg-background">
                <Button className="w-full h-12" size="lg" onClick={onNext}>
                    Confirm and Continue
                </Button>
            </div>
        </div>
    );
}
