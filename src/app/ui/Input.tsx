import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    helperText?: string;
    error?: string;
    success?: string;
    leadingIcon?: React.ReactNode;
    trailingIcon?: React.ReactNode;
    nextFieldId?: string;
    onEnter?: () => void;
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
            nextFieldId,
            onEnter,
            enterKeyHint,
            onKeyDown,
            id,
            ...props
        },
        ref
    ) => {
        const hasError = Boolean(error);
        const hasSuccess = Boolean(success) && !hasError;
        const computedEnterKeyHint = enterKeyHint ?? (onEnter ? "done" : nextFieldId ? "next" : undefined);
        const generatedId = React.useId();
        const inputId = id ?? generatedId;
        const errorId = `${inputId}-error`;
        const helperId = `${inputId}-helper`;
        const describedBy = hasError ? errorId : helperText ? helperId : undefined;

        const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
            onKeyDown?.(event);
            if (event.defaultPrevented) {
                return;
            }

            if (event.key !== "Enter") {
                return;
            }

            if (onEnter) {
                event.preventDefault();
                onEnter();
                return;
            }

            if (nextFieldId) {
                event.preventDefault();
                const nextField = typeof document !== "undefined" ? document.getElementById(nextFieldId) : null;
                if (nextField && "focus" in nextField) {
                    (nextField as HTMLElement).focus();
                }
            }
        };

        return (
            <div className="w-full space-y-2">
                {label ? (
                    <label htmlFor={inputId} className="text-xs font-medium text-muted-foreground">
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
                        id={inputId}
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
                        aria-describedby={describedBy}
                        enterKeyHint={computedEnterKeyHint}
                        onKeyDown={handleKeyDown}
                        {...props}
                    />
                    {trailingIcon ? (
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                            {trailingIcon}
                        </span>
                    ) : null}
                </div>
                {hasError ? (
                    <p id={errorId} className="text-xs text-destructive">{error}</p>
                ) : helperText ? (
                    <p id={helperId} className="text-xs text-muted-foreground">{helperText}</p>
                ) : hasSuccess ? (
                    <p className="text-xs text-foreground/70">{success}</p>
                ) : null}
            </div>
        );
    }
);
Input.displayName = "Input";

export { Input };
