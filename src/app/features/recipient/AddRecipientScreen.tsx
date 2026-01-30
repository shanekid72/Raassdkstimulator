import { Header } from "@/app/ui/Header";
import { Card, CardContent } from "@/app/ui/Card";
import { ChevronRight, UserPlus } from "lucide-react";

interface AddRecipientScreenProps {
    onBack: () => void;
    onAddMyself: () => void;
    onAddSomeoneElse: () => void;
}

export default function AddRecipientScreen({ onBack, onAddMyself, onAddSomeoneElse }: AddRecipientScreenProps) {
    return (
        <div className="flex flex-col h-full bg-background">
            <Header title="Add Recipient" onBack={onBack} />

            <main className="flex-1 p-6">
                <Card>
                    <CardContent className="space-y-6 pt-6">
                        <div className="flex justify-center">
                            <div className="h-28 w-28 rounded-full bg-muted flex items-center justify-center">
                                <div className="h-16 w-16 rounded-full bg-background border border-border flex items-center justify-center">
                                    <UserPlus className="h-8 w-8 text-foreground" />
                                </div>
                            </div>
                        </div>

                        <div className="text-center">
                            <h2 className="text-xl font-bold text-foreground">Who would you like</h2>
                            <h2 className="text-xl font-bold text-foreground">to send money to?</h2>
                        </div>

                        <div className="space-y-3">
                            <button
                                className="w-full flex items-center justify-between px-4 py-3 rounded-2xl border border-border bg-background"
                                onClick={onAddMyself}
                            >
                                <div className="flex items-center gap-3">
                                    <div className="h-8 w-8 rounded-full bg-muted text-foreground flex items-center justify-center text-xs font-semibold">A</div>
                                    <span className="text-sm font-semibold text-foreground">Add myself</span>
                                </div>
                                <ChevronRight className="h-4 w-4 text-muted-foreground" />
                            </button>

                            <button
                                className="w-full flex items-center justify-between px-4 py-3 rounded-2xl border border-border bg-background"
                                onClick={onAddSomeoneElse}
                            >
                                <div className="flex items-center gap-3">
                                    <div className="h-8 w-8 rounded-full bg-muted text-foreground flex items-center justify-center">
                                        <UserPlus className="h-4 w-4" />
                                    </div>
                                    <span className="text-sm font-semibold text-foreground">Add someone else</span>
                                </div>
                                <ChevronRight className="h-4 w-4 text-muted-foreground" />
                            </button>
                        </div>
                    </CardContent>
                </Card>
            </main>
        </div>
    );
}
