import { Button } from "@/app/ui/Button";
import { ChevronRight } from "lucide-react";

// Reuse the same illustration as the Almost There screen
import successImage from "/@fs/C:/Users/786000726/.gemini/antigravity/brain/81c36b68-02e7-444f-8f30-ba47f0aaa702/onboarding_success_3d_1769703475115.png";

interface OnboardingContinueScreenProps {
    onContinue: () => void;
}

export default function OnboardingContinueScreen({ onContinue }: OnboardingContinueScreenProps) {
    return (
        <div className="flex flex-col h-full bg-background px-6 py-8">
            <div className="flex-1 flex flex-col items-center justify-center">
                <div className="bg-background rounded-[24px] border border-border p-6 w-full flex flex-col items-center text-center">
                    <div className="mb-6 w-52 h-52">
                        <img src={successImage} alt="Almost There Illustration" className="w-full h-full object-contain" />
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
