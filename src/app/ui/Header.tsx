import { ChevronLeft } from "lucide-react";
import { Button } from "@/app/ui/Button";
import { cn } from "@/lib/utils";

interface HeaderProps {
    title?: string;
    onBack?: () => void;
    rightAction?: React.ReactNode;
    className?: string;
}

export function Header({ title, onBack, rightAction, className }: HeaderProps) {
    return (
        <header className={cn("sticky top-0 z-40 px-4 h-14 flex items-center justify-between bg-transparent", className)}>
            <div className="flex-1 flex justify-start">
                {onBack && (
                    <Button variant="ghost" size="icon" onClick={onBack} className="-ml-2 text-foreground" aria-label="Go back">
                        <ChevronLeft className="h-6 w-6" />
                    </Button>
                )}
            </div>

            <div className="flex-2 flex justify-center">
                {title && <h1 className="text-base font-semibold text-foreground">{title}</h1>}
            </div>

            <div className="flex-1 flex justify-end">
                {rightAction}
            </div>
        </header>
    );
}
