import { useState } from "react";
import { Header } from "@/app/ui/Header";
import { Input } from "@/app/ui/Input";
import { Search, ChevronRight } from "lucide-react";

interface CountryOption {
    name: string;
    currencyName: string;
    code: string;
    flag: string;
}

interface CountrySelectionScreenProps {
    onBack: () => void;
    onSelect: (country: CountryOption) => void;
}

const COUNTRIES: CountryOption[] = [
    { name: "Philippines", currencyName: "Philippine Peso", code: "PHP", flag: "PH" },
    { name: "Bahrain", currencyName: "Bahraini Dinar", code: "BHD", flag: "BH" },
    { name: "Bangladesh", currencyName: "Bangladeshi Taka", code: "BDT", flag: "BD" },
    { name: "Egypt", currencyName: "Egyptian Pound", code: "EGP", flag: "EG" },
    { name: "India", currencyName: "Indian Rupee", code: "INR", flag: "IN" },
    { name: "Philippines", currencyName: "US Dollar", code: "USD", flag: "PH" },
];

export default function CountrySelectionScreen({ onBack, onSelect }: CountrySelectionScreenProps) {
    const [search, setSearch] = useState("");

    const filtered = COUNTRIES.filter(c =>
        c.name.toLowerCase().includes(search.toLowerCase()) ||
        c.code.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="flex flex-col h-full bg-background">
            <Header title="Select Country and Currency" onBack={onBack} />

            <main className="flex-1 flex flex-col">
                <div className="p-4 border-b border-border">
                    <Input
                        placeholder="Search"
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        leadingIcon={<Search className="h-4 w-4" />}
                    />
                </div>

                <div className="flex-1 overflow-y-auto">
                    {filtered.map((item, idx) => (
                        <button
                            key={idx}
                            onClick={() => onSelect(item)}
                            className="w-full flex items-center gap-4 p-4 border-b border-border hover:bg-muted transition-colors text-left"
                        >
                            <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center text-xs font-semibold text-muted-foreground">
                                {item.flag}
                            </div>
                            <div className="flex-1">
                                <div className="flex flex-col">
                                    <span className="font-semibold text-foreground text-sm">{item.name}</span>
                                    <span className="text-xs text-muted-foreground">{item.currencyName} - <span className="font-bold text-foreground">{item.code}</span></span>
                                </div>
                            </div>
                            <ChevronRight className="w-4 h-4 text-muted-foreground" />
                        </button>
                    ))}
                </div>
            </main>
        </div>
    );
}
