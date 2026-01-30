import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    helperText?: string;
    error?: string;
    success?: string;
    leadingIcon?: React.ReactNode;
    trailingIcon?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    (
        {
            className,
            type,
            label,
            helperText,
            error,
            success,
            leadingIcon,
            trailingIcon,
            ...props
        },
        ref
    ) => {
        const hasError = Boolean(error);
        const hasSuccess = Boolean(success) && !hasError;

        return (
            <div className="w-full space-y-2">
                {label ? (
                    <label className="text-xs font-medium text-muted-foreground">
                        {label}
                    </label>
                ) : null}
                <div className="relative">
                    {leadingIcon ? (
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                            {leadingIcon}
                        </span>
                    ) : null}
                    <input
                        type={type}
                        className={cn(
                            "flex h-11 w-full rounded-2xl border border-border bg-background px-4 text-sm text-foreground shadow-[0_1px_0_rgba(0,0,0,0.02)] transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:bg-muted",
                            leadingIcon && "pl-10",
                            trailingIcon && "pr-10",
                            hasError && "border-destructive focus-visible:ring-destructive/30",
                            hasSuccess && "border-foreground/30 focus-visible:ring-foreground/20",
                            className
                        )}
                        ref={ref}
                        aria-invalid={hasError}
                        {...props}
                    />
                    {trailingIcon ? (
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                            {trailingIcon}
                        </span>
                    ) : null}
                </div>
                {hasError ? (
                    <p className="text-xs text-destructive">{error}</p>
                ) : helperText ? (
                    <p className="text-xs text-muted-foreground">{helperText}</p>
                ) : hasSuccess ? (
                    <p className="text-xs text-foreground/70">{success}</p>
                ) : null}
            </div>
        );
    }
);
Input.displayName = "Input";

export { Input };
