import { useState } from "react";
import { Header } from "@/app/ui/Header";
import { Input } from "@/app/ui/Input";
import { Button } from "@/app/ui/Button";
import { motion } from "framer-motion";

interface PersonalInfoScreenProps {
    onBack: () => void;
    onNext: () => void;
}

export default function PersonalInfoScreen({ onBack, onNext }: PersonalInfoScreenProps) {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        mobile: ""
    });

    const [errors, setErrors] = useState<Record<string, string>>({});

    const handleNext = () => {
        // Basic validation
        const newErrors: Record<string, string> = {};
        if (!formData.firstName) newErrors.firstName = "First name is required";
        if (!formData.lastName) newErrors.lastName = "Last name is required";
        if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Valid email is required";
        if (!formData.mobile) newErrors.mobile = "Mobile number is required";

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        // Proceed (Mock next step)
        onNext();
    };

    return (
        <div className="flex flex-col h-full bg-background">
            <Header title="Personal Information" onBack={onBack} />

            <main className="flex-1 p-6 space-y-6">
                <div className="space-y-2">
                    <h2 className="text-2xl font-bold">Tell us about yourself</h2>
                    <p className="text-muted-foreground text-sm">
                        We need a few details to verify your identity and get you started.
                    </p>
                </div>

                <motion.div
                    className="space-y-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="grid grid-cols-2 gap-4">
                        <Input
                            label="First Name"
                            placeholder="Jane"
                            value={formData.firstName}
                            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                            error={errors.firstName}
                        />
                        <Input
                            label="Last Name"
                            placeholder="Doe"
                            value={formData.lastName}
                            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                            error={errors.lastName}
                        />
                    </div>

                    <Input
                        label="Email Address"
                        type="email"
                        placeholder="jane@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        error={errors.email}
                    />

                    <Input
                        label="Mobile Number"
                        type="tel"
                        placeholder="+971 50 123 4567"
                        value={formData.mobile}
                        onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                        error={errors.mobile}
                    />
                </motion.div>
            </main>

            <div className="p-6 mt-auto">
                <Button className="w-full" size="lg" onClick={handleNext}>
                    Continue
                </Button>
            </div>
        </div>
    );
}
