import { useState } from "react";
import { Input } from "@/app/ui/Input";
import { BottomSheet } from "@/app/ui/BottomSheet";
import { Search } from "lucide-react";
import { motion } from "framer-motion";

interface SelectCountryCurrencyScreenProps {
    onBack: () => void;
    onSelect: () => void;
    onSelectCountryCurrency: (country: string, currencyCode: string) => void;
}

const COUNTRIES = [
    { country: "Philippines", currency: "Philippine Peso", code: "PHP", flag: "PH" },
    { country: "Bahrain", currency: "Bahraini Dinar", code: "BHD", flag: "BH" },
    { country: "Bangladesh", currency: "Bangladeshi taka", code: "BDT", flag: "BD" },
    { country: "Egypt", currency: "Egyptian Pound", code: "EGP", flag: "EG" },
    { country: "India", currency: "Indian Rupee", code: "INR", flag: "IN" },
    { country: "Philippines", currency: "US Dollar", code: "USD", flag: "PH" },
];

export default function SelectCountryCurrencyScreen({ onBack, onSelect, onSelectCountryCurrency }: SelectCountryCurrencyScreenProps) {
    const [query, setQuery] = useState("");
    const listContainer = {
        hidden: {},
        show: { transition: { staggerChildren: 0.04 } }
    };
    const listItem = {
        hidden: { opacity: 0, y: 8 },
        show: { opacity: 1, y: 0 }
    };

    const filtered = COUNTRIES.filter((item) => {
        const q = query.toLowerCase();
        return item.country.toLowerCase().includes(q) || item.currency.toLowerCase().includes(q) || item.code.toLowerCase().includes(q);
    });

    return (
        <div className="flex flex-col h-full bg-background">
            <BottomSheet open onClose={onBack} title="Select Country and Currency">
                <div className="space-y-4">
                    <div className="sticky top-[72px] z-10 bg-background pt-2 pb-3">
                        <Input
                            placeholder="Search"
                            value={query}
                            onChange={(event) => setQuery(event.target.value)}
                            leadingIcon={<Search className="h-4 w-4" />}
                        />
                    </div>

                    <motion.div
                        className="divide-y divide-border rounded-2xl border border-border bg-background"
                        variants={listContainer}
                        initial="hidden"
                        animate="show"
                    >
                        {filtered.map((item) => (
                            <motion.button
                                key={`${item.country}-${item.currency}-${item.code}`}
                                variants={listItem}
                                className="w-full flex items-center justify-between px-4 py-4 text-left"
                                onClick={() => {
                                    onSelectCountryCurrency(item.country, item.code);
                                    onSelect();
                                }}
                            >
                                <div className="flex items-center gap-3">
                                    <div className="h-8 w-8 rounded-full bg-muted text-muted-foreground flex items-center justify-center text-xs font-semibold">
                                        {item.flag}
                                    </div>
                                    <div>
                                        <div className="text-sm font-semibold text-foreground">{item.country}</div>
                                        <div className="text-xs text-muted-foreground">{item.currency}</div>
                                    </div>
                                </div>
                                <div className="text-xs font-semibold text-muted-foreground">{item.code}</div>
                            </motion.button>
                        ))}

                        {filtered.length === 0 && (
                            <div className="px-4 py-8 text-center text-sm text-muted-foreground">No results</div>
                        )}
                    </motion.div>
                </div>
            </BottomSheet>
        </div>
    );
}
