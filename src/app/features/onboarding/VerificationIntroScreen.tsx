import { Button } from "@/app/ui/Button";
import { ShieldCheck, UserCheck } from "lucide-react";
import { motion } from "framer-motion";
import uaePassButton from "../../../../UAEPASS_Continue with_Btn_Pill_Black_Active.png";
import verifiedBadge from "../../../../verified3.png";
import verifiedBadgeTransparent from "../../../../verified3-transparent.png";

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
                    <div className="w-64 h-64 mx-auto bg-transparent rounded-full flex items-center justify-center border border-border relative">
                        <div className="absolute inset-4 border border-dashed border-border rounded-full animate-[spin_10s_linear_infinite]" />
                        {/* <ShieldCheck className="w-24 h-24 text-foreground/20" /> */}
                        <img
                            src={verifiedBadgeTransparent}
                            alt="Verified"
                            className="h-40 w-40 object-contain"
                        />
                        {/* <img
                            src={verifiedBadge}
                            alt="Verified"
                            className="h-40 w-40 object-contain"
                        /> */}
                        <div className="absolute bottom-4 right-10 bg-background p-2 rounded-xl border border-border">
                            <UserCheck className="w-8 h-8 text-foreground" />
                        </div>
                        {/* <div className="absolute bottom-4 right-10 bg-background p-2 rounded-xl border border-border">
                            <img
                                src={verifiedBadge}
                                alt="Verified"
                                className="h-8 w-8 object-contain"
                            />
                        </div> */}
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
                <p className="text-xs text-muted-foreground text-center">Choose a verification method</p>
                <Button className="w-full h-12 text-base font-medium" size="lg" variant="secondary" onClick={onNext}>
                    Get Verified
                </Button>
                <p className="text-xs text-muted-foreground text-center my-2">or</p>
                {/* UAE PASS button - standalone per brand guidelines, no wrapper styling */}
                <button
                    type="button"
                    onClick={onLogin}
                    aria-label="Continue with UAE PASS"
                    className="w-full focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded-full"
                >
                    <img
                        src={uaePassButton}
                        alt="Continue with UAE PASS"
                        className="h-12 w-full object-contain"
                    />
                </button>
            </div>
        </div>
    );
}
