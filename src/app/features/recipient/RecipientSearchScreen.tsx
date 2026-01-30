import { useState } from "react";
import { Header } from "@/app/ui/Header";
import { Input } from "@/app/ui/Input";
import { Button } from "@/app/ui/Button";
import { Search, UserPlus, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

interface RecipientSearchScreenProps {
    onBack: () => void;
    onAddNew: () => void;
    onSelect: (recipient: string) => void;
}

const MOCK_RECIPIENTS = [
    { id: 1, name: "Alice Johnson", bank: "Chase Bank", last4: "4321" },
    { id: 2, name: "Bob Smith", bank: "Bank of America", last4: "9876" },
    { id: 3, name: "Charlie Brown", bank: "Wells Fargo", last4: "1111" },
];

export default function RecipientSearchScreen({ onBack, onAddNew, onSelect }: RecipientSearchScreenProps) {
    const [search, setSearch] = useState("");

    const filtered = MOCK_RECIPIENTS.filter(r =>
        r.name.toLowerCase().includes(search.toLowerCase()) ||
        r.bank.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="flex flex-col h-full bg-background">
            <Header title="Select Recipient" onBack={onBack} />

            <div className="px-4 py-2 bg-background sticky top-14 z-10">
                <Input
                    placeholder="Search name, bank..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    leadingIcon={<Search className="h-4 w-4" />}
                />
            </div>

            <main className="flex-1 p-4 space-y-4 overflow-y-auto">
                <Button
                    variant="secondary"
                    className="w-full justify-start h-14 px-4"
                    onClick={onAddNew}
                    leftIcon={
                        <span className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
                            <UserPlus className="h-5 w-5 text-foreground" />
                        </span>
                    }
                >
                    <span className="font-semibold text-base">Add New Recipient</span>
                </Button>

                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider ml-1 mt-6 mb-2">
                    Recent Recipients
                </div>

                <div className="space-y-2">
                    {filtered.map((item, i) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.05 }}
                            className="group"
                        >
                            <button
                                className="w-full flex items-center justify-between p-4 bg-background rounded-2xl border border-border shadow-[0_1px_0_rgba(0,0,0,0.02)] active:scale-[0.98] transition-all hover:bg-muted"
                                onClick={() => onSelect(item.name)}
                            >
                                <div className="flex items-center gap-4">
                                    <div className="h-10 w-10 bg-muted rounded-full flex items-center justify-center font-bold text-muted-foreground">
                                        {item.name.charAt(0)}
                                    </div>
                                    <div className="text-left">
                                        <p className="font-semibold text-foreground">{item.name}</p>
                                        <p className="text-xs text-muted-foreground">{item.bank} **** {item.last4}</p>
                                    </div>
                                </div>
                                <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                            </button>
                        </motion.div>
                    ))}

                    {filtered.length === 0 && (
                        <div className="text-center py-12 text-muted-foreground">
                            No recipients found
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}
