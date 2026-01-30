import { Button } from "@/app/ui/Button";
import { ShieldCheck, UserCheck } from "lucide-react";
import { motion } from "framer-motion";

interface VerificationIntroScreenProps {
    onNext: () => void;
    onLogin: () => void;
}

export default function VerificationIntroScreen({ onNext, onLogin }: VerificationIntroScreenProps) {
    return (
        <div className="flex flex-col h-full bg-background relative px-6 py-8">

            <main className="flex-1 flex flex-col items-center justify-center space-y-8 text-center">

                {/* Illustration */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="w-full relative"
                >
                    {/* Simple vector illustration placeholder matching the vibe */}
                    <div className="w-64 h-64 mx-auto bg-muted rounded-full flex items-center justify-center border border-border relative">
                        <div className="absolute inset-4 border border-dashed border-border rounded-full animate-[spin_10s_linear_infinite]" />
                        <ShieldCheck className="w-24 h-24 text-foreground/20" />
                        <div className="absolute bottom-4 right-10 bg-background p-2 rounded-xl border border-border">
                            <UserCheck className="w-8 h-8 text-foreground" />
                        </div>
                    </div>
                </motion.div>

                <div className="space-y-4 max-w-xs mx-auto">
                    <h1 className="text-3xl font-bold tracking-tight text-foreground">
                        Verify your Account
                    </h1>
                    <p className="text-muted-foreground text-base leading-relaxed">
                        It takes a couple of minutes. Once you are verified you can send money around the world.
                    </p>
                </div>

            </main>

            <div className="space-y-4 mt-auto">
                <Button className="w-full h-12 text-base font-medium" size="lg" onClick={onNext}>
                    Get Verified
                </Button>
                <Button className="w-full h-12 text-base font-medium" size="lg" variant="secondary" onClick={onLogin}>
                    Login with UAE PASS
                </Button>
            </div>
        </div>
    );
}
