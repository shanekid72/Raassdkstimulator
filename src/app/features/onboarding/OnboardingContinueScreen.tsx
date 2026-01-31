import { Button } from "@/app/ui/Button";
import { ChevronRight } from "lucide-react";

// Reuse the same illustration as the Almost There screen
import AlmostThereLoader from "@/app/ui/AlmostThereLoader";

interface OnboardingContinueScreenProps {
    onContinue: () => void;
}

export default function OnboardingContinueScreen({ onContinue }: OnboardingContinueScreenProps) {
    return (
        <div className="flex flex-col h-full bg-background px-6 py-8">
            <div className="flex-1 flex flex-col items-center justify-center">
                <div className="bg-background rounded-[24px] border border-border p-6 w-full flex flex-col items-center text-center">
                    <div className="mb-6 flex items-center justify-center">
                        <AlmostThereLoader className="text-foreground" />
                    </div>
                    <h1 className="text-2xl font-bold text-foreground mb-2">Almost There!</h1>
                    <p className="text-muted-foreground text-sm max-w-[240px] leading-relaxed">
                        Just a moment! We&apos;re making sure everything&apos;s good to go
                    </p>
                </div>
            </div>

            <div className="pb-4 space-y-4">
                <div className="w-full bg-background rounded-[24px] border border-border p-5">
                    <Button className="w-full" size="lg" rightIcon={<ChevronRight className="w-4 h-4" />} onClick={onContinue}>
                        Continue
                    </Button>
                </div>
            </div>
        </div>
    );
}
