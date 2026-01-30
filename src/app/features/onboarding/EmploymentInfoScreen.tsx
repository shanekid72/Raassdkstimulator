import { useState } from "react";
import { Input } from "@/app/ui/Input";
import { Select } from "@/app/ui/Select";
import { Header } from "@/app/ui/Header";
import { Card, CardContent } from "@/app/ui/Card";
import { Button } from "@/app/ui/Button";
import { ChevronRight } from "lucide-react";

interface EmploymentInfoScreenProps {
    onBack: () => void;
    onNext: () => void;
}

export default function EmploymentInfoScreen({ onBack, onNext }: EmploymentInfoScreenProps) {
    const [formData, setFormData] = useState({
        sector: "",
        employerName: "",
        employerAddress: "",
        profession: "",
        volume: "0-1000",
        count: "5-10",
        income: "0-4999 SGD",
        incomeType: "Salary"
    });

    const handleChange = (field: string, val: string) => {
        setFormData(prev => ({ ...prev, [field]: val }));
    };

    return (
        <div className="flex flex-col h-full bg-background">
            <Header title="Employment Details" onBack={onBack} />
            <main className="flex-1 p-6">
                <Card className="h-full">
                    <CardContent className="flex h-full flex-col gap-6 pt-6">
                        <div className="space-y-1 text-center">
                            <h1 className="text-xl font-bold text-foreground">Help us get to know you better!</h1>
                            <p className="text-sm text-muted-foreground">A few details help keep transfers secure.</p>
                        </div>

                        <div className="flex-1 overflow-y-auto space-y-4">
                            <Input
                                label="Employment Sector"
                                value={formData.sector}
                                onChange={(e) => handleChange("sector", e.target.value)}
                            />

                            <Input
                                label="Employer Name"
                                value={formData.employerName}
                                onChange={(e) => handleChange("employerName", e.target.value)}
                            />

                            <Input
                                label="Employer Address"
                                value={formData.employerAddress}
                                onChange={(e) => handleChange("employerAddress", e.target.value)}
                            />

                            <Select
                                label="Profession"
                                options={[
                                    { value: "Engineer", label: "Engineer" },
                                    { value: "Doctor", label: "Doctor" },
                                    { value: "Manager", label: "Manager" },
                                    { value: "Other", label: "Other" },
                                ]}
                                value={formData.profession}
                                onChange={(e) => handleChange("profession", e.target.value)}
                                placeholder="Select"
                            />

                            <Select
                                label="Txn Volume/Month"
                                options={[
                                    { value: "0-1000", label: "0-1000" },
                                    { value: "1000-5000", label: "1000-5000" },
                                    { value: "5000+", label: "5000+" },
                                ]}
                                value={formData.volume}
                                onChange={(e) => handleChange("volume", e.target.value)}
                                placeholder="Select"
                            />

                            <Select
                                label="Txn Count/Month"
                                options={[
                                    { value: "0-5", label: "0-5" },
                                    { value: "5-10", label: "5-10" },
                                    { value: "10+", label: "10+" },
                                ]}
                                value={formData.count}
                                onChange={(e) => handleChange("count", e.target.value)}
                                placeholder="Select"
                            />

                            <Select
                                label="Income"
                                options={[
                                    { value: "0-4999 SGD", label: "0-4999 SGD" },
                                    { value: "5000-9999 SGD", label: "5000-9999 SGD" },
                                    { value: "10000+ SGD", label: "10000+ SGD" },
                                ]}
                                value={formData.income}
                                onChange={(e) => handleChange("income", e.target.value)}
                                placeholder="Select"
                            />

                            <Select
                                label="Income Type"
                                options={[
                                    { value: "Salary", label: "Salary" },
                                    { value: "Business", label: "Business" },
                                    { value: "Savings", label: "Savings" },
                                ]}
                                value={formData.incomeType}
                                onChange={(e) => handleChange("incomeType", e.target.value)}
                                placeholder="Select"
                            />
                        </div>

                        <Button
                            className="w-full"
                            size="lg"
                            rightIcon={<ChevronRight className="h-4 w-4" />}
                            onClick={onNext}
                        >
                            Submit
                        </Button>
                    </CardContent>
                </Card>
            </main>
        </div>
    );
}
