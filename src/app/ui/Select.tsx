import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface SelectOption {
    value: string;
    label: string;
    disabled?: boolean;
}

export interface SelectProps
    extends React.SelectHTMLAttributes<HTMLSelectElement> {
    label?: string;
    helperText?: string;
    error?: string;
    options?: SelectOption[];
    placeholder?: string;
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
    (
        { className, label, helperText, error, options, placeholder, ...props },
        ref
    ) => {
        return (
            <div className="w-full space-y-2">
                {label ? (
                    <label className="text-xs font-medium text-muted-foreground">
                        {label}
                    </label>
                ) : null}
                <div className="relative">
                    <select
                        ref={ref}
                        className={cn(
                            "flex h-11 w-full appearance-none rounded-2xl border border-border bg-background px-4 text-sm text-foreground shadow-[0_1px_0_rgba(0,0,0,0.02)] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:bg-muted",
                            error && "border-destructive focus-visible:ring-destructive/30",
                            className
                        )}
                        aria-invalid={Boolean(error)}
                        {...props}
                    >
                        {placeholder ? (
                            <option value="" disabled>
                                {placeholder}
                            </option>
                        ) : null}
                        {options?.map((option) => (
                            <option key={option.value} value={option.value} disabled={option.disabled}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                </div>
                {error ? (
                    <p className="text-xs text-destructive">{error}</p>
                ) : helperText ? (
                    <p className="text-xs text-muted-foreground">{helperText}</p>
                ) : null}
            </div>
        );
    }
);

Select.displayName = "Select";

export { Select };
