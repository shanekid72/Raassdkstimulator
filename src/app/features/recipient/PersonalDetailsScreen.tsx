import { useState } from "react";
import { Input } from "@/app/ui/Input";
import { Select } from "@/app/ui/Select";
import { Button } from "@/app/ui/Button";
import { Header } from "@/app/ui/Header";
import { Card, CardContent } from "@/app/ui/Card";
import { ChevronRight } from "lucide-react";
import { RecipientDraft } from "@/app/simulator/SimulatorStore";

interface PersonalDetailsScreenProps {
    onBack: () => void;
    onNext: () => void;
    onSubmitDraft: (partial: Partial<RecipientDraft>) => void;
}

export default function PersonalDetailsScreen({ onBack, onNext, onSubmitDraft }: PersonalDetailsScreenProps) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [mobile, setMobile] = useState("788977899");
    const [nationality, setNationality] = useState("India");
    const [relationship, setRelationship] = useState("Brother");

    return (
        <div className="flex flex-col h-full bg-background">
            <Header title="Recipient Personal Details" onBack={onBack} />

            <main className="flex-1 p-6 overflow-y-auto">
                <Card>
                    <CardContent className="space-y-6 pt-6">
                        <div className="space-y-4">
                            <h3 className="text-sm font-semibold text-foreground">Name</h3>
                            <Input
                                id="firstName"
                                label="Recipient First Name"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                nextFieldId="lastName"
                            />
                            <Input
                                id="lastName"
                                label="Recipient Last name"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                nextFieldId="mobile"
                            />
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-sm font-semibold text-foreground">Contact Information</h3>
                            <Input
                                id="mobile"
                                label="Recipient Mobile Number"
                                value={mobile}
                                onChange={(e) => setMobile(e.target.value)}
                            />
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-sm font-semibold text-foreground">Other details</h3>
                            <Select
                                label="Recipient Nationality"
                                options={[
                                    { value: "India", label: "India" },
                                    { value: "Philippines", label: "Philippines" },
                                    { value: "Bangladesh", label: "Bangladesh" },
                                    { value: "Egypt", label: "Egypt" },
                                ]}
                                value={nationality}
                                onChange={(e) => setNationality(e.target.value)}
                                placeholder="Select"
                            />
                            <Select
                                label="Relationship with Recipient"
                                options={[
                                    { value: "Brother", label: "Brother" },
                                    { value: "Sister", label: "Sister" },
                                    { value: "Father", label: "Father" },
                                    { value: "Mother", label: "Mother" },
                                    { value: "Friend", label: "Friend" },
                                ]}
                                value={relationship}
                                onChange={(e) => setRelationship(e.target.value)}
                                placeholder="Select"
                            />
                        </div>

                        <Button
                            className="w-full"
                            size="lg"
                            rightIcon={<ChevronRight className="h-4 w-4" />}
                            onClick={() => {
                                onSubmitDraft({ firstName, lastName, mobile, nationality, relationship });
                                onNext();
                            }}
                        >
                            Submit
                        </Button>
                    </CardContent>
                </Card>
            </main>
        </div>
    );
}
