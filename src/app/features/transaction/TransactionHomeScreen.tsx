import { ChangeEvent } from "react";
import { Button } from "@/app/ui/Button";
import { Header } from "@/app/ui/Header";
import { Input } from "@/app/ui/Input";
import { ArrowDown, Search } from "lucide-react";
import { motion } from "framer-motion";

interface TransactionHomeScreenProps {
    onBack: () => void;
    onStart: () => void;
    amount: string;
    onAmountChange: (value: string) => void;
}

const HOME_RATE_DISPLAY = "15.33";
const HOME_RATE_VALUE = 15.33343;
const listContainer = {
    hidden: {},
    show: { transition: { staggerChildren: 0.06 } }
};

const listItem = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 }
};

export default function TransactionHomeScreen({ onBack, onStart, amount, onAmountChange }: TransactionHomeScreenProps) {
    const handleAmountChange = (event: ChangeEvent<HTMLInputElement>) => {
        const raw = event.target.value.replace(/[^0-9.]/g, "");
        onAmountChange(raw);
    };

    const numericAmount = parseFloat(amount);
    const displayAmount = Number.isFinite(numericAmount) ? numericAmount.toFixed(2) : amount || "0.00";
    const receiveAmount = Number.isFinite(numericAmount)
        ? (numericAmount * HOME_RATE_VALUE).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })
        : "0.00";

    return (
        <div className="flex flex-col h-full bg-background">
            <Header title="Send / Home" onBack={onBack} />

            <main className="flex-1 p-6 space-y-6 overflow-y-auto">
                <div className="text-center">
                    <p className="text-xs font-semibold text-foreground bg-background inline-flex items-center px-3 py-1 rounded-full border border-border">
                        We Promise Lowest Rate Guarantee
                    </p>
                </div>

                <div className="relative">
                    <div className="bg-background rounded-3xl p-5 border border-border">
                        <div className="flex items-center justify-between mb-1">
                            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Send Amount</span>
                            <div className="flex items-center gap-2 bg-muted rounded-full px-2 py-1">
                                <div className="w-5 h-5 bg-foreground rounded-full text-[8px] text-background flex items-center justify-center font-bold">AE</div>
                                <span className="text-xs font-bold text-foreground">AED</span>
                            </div>
                        </div>
                        <input
                            type="text"
                            inputMode="decimal"
                            value={amount}
                            onChange={handleAmountChange}
                            placeholder="0.00"
                            className="w-full text-4xl font-bold bg-transparent border-none outline-none placeholder:text-muted-foreground text-foreground"
                        />
                    </div>

                    <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 bg-background rounded-full p-1.5 border border-border">
                        <ArrowDown className="w-4 h-4 text-foreground" />
                    </div>

                    <div className="bg-muted rounded-3xl p-5 pt-7 border border-border -mt-4">
                        <div className="flex items-center justify-between mb-1">
                            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Receive Amount</span>
                            <div className="flex items-center gap-2 bg-background rounded-full px-2 py-1 border border-border">
                                <div className="w-5 h-5 bg-foreground rounded-full text-[8px] text-background flex items-center justify-center font-bold">PH</div>
                                <span className="text-xs font-bold text-foreground">PHP</span>
                            </div>
                        </div>
                        <div className="text-3xl font-bold text-foreground">{receiveAmount}</div>
                        <div className="text-xs text-muted-foreground mt-2">1 AED = {HOME_RATE_DISPLAY} PHP</div>
                    </div>
                </div>

                <div>
                    <Button className="w-full" size="lg" onClick={onStart} disabled={!amount || !Number.isFinite(numericAmount) || numericAmount <= 0}>
                        Send {displayAmount} AED
                    </Button>
                </div>

                <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm font-semibold text-foreground">
                        <span>Recipients</span>
                        <button className="text-muted-foreground text-xs">See all</button>
                    </div>
                    <motion.div className="flex items-center gap-3" variants={listContainer} initial="hidden" animate="show">
                        <div className="flex flex-col items-center gap-1">
                            <button className="h-12 w-12 rounded-2xl bg-muted flex items-center justify-center text-xl font-semibold text-muted-foreground">+</button>
                            <span className="text-[10px] text-muted-foreground">Add</span>
                        </div>
                        {[
                            { name: "Lara Khan", initials: "LK" },
                            { name: "Meri Jhone", initials: "MJ" },
                            { name: "Jordan Lee", initials: "JL" },
                        ].map((item) => (
                            <motion.div key={item.name} variants={listItem} className="flex flex-col items-center gap-1">
                                <div className="h-12 w-12 rounded-2xl bg-background border border-border shadow-[0_1px_0_rgba(0,0,0,0.02)] flex items-center justify-center text-sm font-semibold">
                                    {item.initials}
                                </div>
                                <span className="text-[10px] text-muted-foreground">{item.name}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm font-semibold text-foreground">
                        <span>History</span>
                        <button className="text-muted-foreground text-xs">See all</button>
                    </div>
                    <div className="bg-background rounded-2xl border border-border p-4 space-y-4">
                        <div className="text-xs text-muted-foreground">Today, 23rd Jan</div>
                        <motion.div className="space-y-4" variants={listContainer} initial="hidden" animate="show">
                        {[
                            { from: "Lara Khan", to: "Mandy Ahmad" },
                            { from: "Jordan Lee", to: "Mandy Ahmad" },
                        ].map((row, index) => (
                            <motion.div key={`${row.from}-${index}`} variants={listItem} className="flex items-center justify-between">
                                <div>
                                    <div className="text-sm font-semibold text-foreground">{row.from}</div>
                                    <div className="text-xs text-muted-foreground">{row.to}</div>
                                    <div className="text-xs text-muted-foreground mt-1">Repeat</div>
                                </div>
                                <div className="text-right">
                                    <div className="text-sm font-semibold text-foreground">95.50 AED</div>
                                    <div className="text-xs text-muted-foreground">Completed</div>
                                </div>
                            </motion.div>
                        ))}
                        </motion.div>
                    </div>
                </div>

                <div className="space-y-3">
                    <div className="text-sm font-semibold text-foreground">Track your transaction</div>
                    <div className="bg-background rounded-2xl border border-border p-4 space-y-3">
                        <div className="text-xs text-muted-foreground">Reference code</div>
                        <Input placeholder="Enter Reference No" leadingIcon={<Search className="h-4 w-4" />} />
                    </div>
                </div>
            </main>
        </div>
    );
}
