import { Header } from "@/app/ui/Header";
import { Heart } from "lucide-react";
import { motion } from "framer-motion";
import { useSimulator } from "@/app/simulator/SimulatorStore";
import { Skeleton } from "@/app/ui/Skeleton";

interface RecipientSelectScreenProps {
    onBack: () => void;
    onSelect: (name: string) => void;
}

const FAVORITES = [
    { name: "Lara Khan", bank: "IDFC First Bank Ltd.", account: "0000123456" },
    { name: "Meri Jhone", bank: "IDFC First Bank Ltd.", account: "0000123456" },
];

const ALL_RECIPIENTS = [
    { name: "Jordan Lee", bank: "IDFC First Bank Ltd.", account: "0000123456" },
    { name: "Sophia Turner", bank: "IDFC First Bank Ltd.", account: "0000123456" },
    { name: "Ethan Parker", bank: "IDFC First Bank Ltd.", account: "0000123456" },
    { name: "Noah Kim", bank: "IDFC First Bank Ltd.", account: "0000123456" },
];

export default function RecipientSelectScreen({ onBack, onSelect }: RecipientSelectScreenProps) {
    const { recipients, isBootstrapping } = useSimulator();
    const hasRecipients = recipients.length > 0;
    const getDisplayName = (firstName: string, lastName: string, mobile: string) => {
        const fullName = `${firstName} ${lastName}`.trim();
        return fullName || mobile || "Recipient";
    };
    const recipientCards = recipients.map((recipient) => ({
        name: getDisplayName(recipient.firstName, recipient.lastName, recipient.mobile),
        bank: "IDFC First Bank Ltd.",
        account: recipient.accountNumber || "0000123456",
    }));
    const favoriteCards = hasRecipients ? recipientCards.slice(0, 2) : FAVORITES;
    const allCards = hasRecipients ? recipientCards : ALL_RECIPIENTS;
    const listContainer = {
        hidden: {},
        show: { transition: { staggerChildren: 0.06 } }
    };

    const listItem = {
        hidden: { opacity: 0, y: 10 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <div className="flex flex-col h-full bg-background">
            <Header title="Select a Recipient" onBack={onBack} />

            <main className="flex-1 p-6 space-y-6 overflow-y-auto">
                <section className="space-y-3">
                    <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Favourites</div>
                    {isBootstrapping ? (
                        <div className="space-y-3">
                            {Array.from({ length: 2 }).map((_, index) => (
                                <div
                                    key={`favorite-skeleton-${index}`}
                                    className="w-full flex items-center justify-between rounded-2xl border border-border bg-background p-4 shadow-[0_1px_0_rgba(0,0,0,0.02)]"
                                >
                                    <div className="flex items-center gap-4">
                                        <Skeleton className="h-10 w-10 rounded-full" />
                                        <div className="text-left space-y-2">
                                            <Skeleton className="h-3 w-28" />
                                            <Skeleton className="h-3 w-36" />
                                            <Skeleton className="h-3 w-20" />
                                        </div>
                                    </div>
                                    <Skeleton className="h-4 w-4 rounded-sm" />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <motion.div className="space-y-3" variants={listContainer} initial="hidden" animate="show">
                            {favoriteCards.map((item) => (
                                <motion.button
                                    key={item.name}
                                    variants={listItem}
                                    className="w-full flex items-center justify-between rounded-2xl border border-border bg-background p-4 shadow-[0_1px_0_rgba(0,0,0,0.02)]"
                                    onClick={() => onSelect(item.name)}
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="h-10 w-10 rounded-full bg-muted text-foreground flex items-center justify-center text-sm font-semibold">
                                            {item.name.split(" ").map((part) => part[0]).join("")}
                                        </div>
                                        <div className="text-left">
                                            <div className="text-sm font-semibold text-foreground">{item.name}</div>
                                            <div className="text-xs text-muted-foreground">{item.bank}</div>
                                            <div className="text-xs text-muted-foreground">{item.account}</div>
                                        </div>
                                    </div>
                                    <Heart className="h-4 w-4 text-foreground" />
                                </motion.button>
                            ))}
                        </motion.div>
                    )}
                </section>

                <section className="space-y-3">
                    <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">All recipients</div>
                    {isBootstrapping ? (
                        <div className="space-y-3">
                            {Array.from({ length: 4 }).map((_, index) => (
                                <div
                                    key={`recipient-skeleton-${index}`}
                                    className="w-full flex items-center justify-between rounded-2xl border border-border bg-background p-4 shadow-[0_1px_0_rgba(0,0,0,0.02)]"
                                >
                                    <div className="flex items-center gap-4">
                                        <Skeleton className="h-10 w-10 rounded-full" />
                                        <div className="text-left space-y-2">
                                            <Skeleton className="h-3 w-28" />
                                            <Skeleton className="h-3 w-36" />
                                            <Skeleton className="h-3 w-20" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <motion.div className="space-y-3" variants={listContainer} initial="hidden" animate="show">
                            {allCards.map((item) => (
                                <motion.button
                                    key={item.name}
                                    variants={listItem}
                                    className="w-full flex items-center justify-between rounded-2xl border border-border bg-background p-4 shadow-[0_1px_0_rgba(0,0,0,0.02)]"
                                    onClick={() => onSelect(item.name)}
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="h-10 w-10 rounded-full bg-muted text-muted-foreground flex items-center justify-center text-sm font-semibold">
                                            {item.name.split(" ").map((part) => part[0]).join("")}
                                        </div>
                                        <div className="text-left">
                                            <div className="text-sm font-semibold text-foreground">{item.name}</div>
                                            <div className="text-xs text-muted-foreground">{item.bank}</div>
                                            <div className="text-xs text-muted-foreground">{item.account}</div>
                                        </div>
                                    </div>
                                </motion.button>
                            ))}
                        </motion.div>
                    )}
                </section>
            </main>
        </div>
    );
}
