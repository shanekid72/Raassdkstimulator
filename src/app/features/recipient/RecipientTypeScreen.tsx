import { Header } from "@/app/ui/Header";
import { User, Users } from "lucide-react";
import { motion } from "framer-motion";

interface RecipientTypeScreenProps {
    onBack: () => void;
    onSelect: (type: "myself" | "someone") => void;
}

export default function RecipientTypeScreen({ onBack, onSelect }: RecipientTypeScreenProps) {
    return (
        <div className="flex flex-col h-full bg-background">
            <Header title="Add Recipient" onBack={onBack} />

            <main className="flex-1 p-6">
                <h2 className="text-2xl font-bold mb-8 text-foreground">Who would you like to send money to?</h2>

                <div className="space-y-4">

                    <motion.button
                        whileTap={{ scale: 0.98 }}
                        onClick={() => onSelect("myself")}
                        className="w-full flex items-center gap-4 p-4 bg-background border border-border rounded-2xl shadow-[0_1px_0_rgba(0,0,0,0.02)] hover:bg-muted transition-colors text-left"
                    >
                        <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center text-foreground">
                            <User className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-foreground">Add myself</h3>
                        </div>
                    </motion.button>

                    <motion.button
                        whileTap={{ scale: 0.98 }}
                        onClick={() => onSelect("someone")}
                        className="w-full flex items-center gap-4 p-4 bg-background border border-border rounded-2xl shadow-[0_1px_0_rgba(0,0,0,0.02)] hover:bg-muted transition-colors text-left"
                    >
                        <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center text-foreground">
                            <Users className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-foreground">Add someone else</h3>
                        </div>
                    </motion.button>

                </div>
            </main>
        </div>
    );
}
