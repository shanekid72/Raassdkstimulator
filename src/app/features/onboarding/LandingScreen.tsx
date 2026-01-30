import { Button } from "@/app/ui/Button";
import { ArrowDown, Info, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

interface LandingScreenProps {
    onStart: () => void;
}

export default function LandingScreen({ onStart }: LandingScreenProps) {
    return (
        <div className="flex flex-col h-full bg-background relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-foreground/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

            <main className="flex-1 flex flex-col items-center justify-center p-6 space-y-8">

                {/* Rate Guarantee Badge */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 bg-background text-foreground px-4 py-2 rounded-full text-xs font-semibold border border-border"
                >
                    <ShieldCheck className="w-4 h-4" />
                    <span>We Promise Lowest Rate Guarantee</span>
                </motion.div>

                {/* Exchange Widget */}
                <div className="w-full max-w-sm relative">
                    {/* Send Amount */}
                    <div className="bg-background rounded-3xl p-6 border border-border relative z-10">
                        <div className="flex justify-between items-center mb-1">
                            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Send Amount</span>
                            <div className="flex items-center gap-2 bg-muted rounded-full px-2 py-1">
                                <div className="w-5 h-5 bg-foreground rounded-full text-[8px] text-background flex items-center justify-center font-bold">UE</div>
                                <span className="text-xs font-bold text-foreground">AED</span>
                            </div>
                        </div>
                        <div className="text-3xl font-bold text-foreground">1000.00</div>
                    </div>

                    {/* Connector */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-[50%] -translate-y-[50%] z-20 bg-background rounded-full p-1.5 border border-border">
                        <ArrowDown className="w-4 h-4 text-foreground" />
                    </div>

                    {/* Receive Amount */}
                    <div className="bg-muted rounded-3xl p-6 pt-8 pb-5 border border-border relative top-[-16px] z-0">
                        <div className="flex justify-between items-center mb-1">
                            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Receive Amount</span>
                            <div className="flex items-center gap-2 bg-background rounded-full px-2 py-1 border border-border">
                                <div className="w-5 h-5 bg-foreground rounded-full text-[8px] text-background flex items-center justify-center font-bold">PH</div>
                                <span className="text-xs font-bold text-foreground">PHP</span>
                            </div>
                        </div>
                        <div className="text-3xl font-bold text-foreground">15,333.43</div>
                        <div className="flex items-center gap-1 mt-4 text-[10px] text-muted-foreground bg-background/70 w-fit px-2 py-1 rounded-md border border-border">
                            <Info className="w-3 h-3" />
                            <span>1 AED = 15.33 PHP</span>
                        </div>
                    </div>
                </div>

            </main>

            {/* Footer CTA */}
            <div className="p-6 mt-auto bg-background border-t border-border">
                <Button className="w-full h-12 text-base" size="lg" onClick={onStart}>
                    Send 1000.00 AED
                </Button>
            </div>
        </div>
    );
}
