import { Header } from "@/app/ui/Header";
import { Button } from "@/app/ui/Button";
import { Card, CardContent } from "@/app/ui/Card";
import { Plus, Users } from "lucide-react";

interface RecipientListScreenProps {
    onAdd: () => void;
    onBack: () => void;
}

export default function RecipientListScreen({ onAdd, onBack }: RecipientListScreenProps) {
    return (
        <div className="flex flex-col h-full bg-background">
            <Header title="Recipients" onBack={onBack} />

            <main className="flex-1 p-6">
                <Card>
                    <CardContent className="space-y-6 pt-6 text-center">
                        <div className="w-24 h-24 bg-muted rounded-2xl flex items-center justify-center mx-auto">
                            <Users className="w-10 h-10 text-muted-foreground" />
                        </div>

                        <div className="space-y-2">
                            <h2 className="text-lg font-semibold text-foreground">No recipients here yet</h2>
                            <p className="text-sm text-muted-foreground">Add a recipient to get started.</p>
                        </div>

                        <div className="space-y-3">
                            <Button className="w-full" size="lg" variant="secondary" onClick={onAdd} leftIcon={<Plus className="w-4 h-4" />}>
                                New recipient
                            </Button>
                            <Button className="w-full" size="lg" variant="ghost">
                                How it works
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </main>
        </div>
    );
}
