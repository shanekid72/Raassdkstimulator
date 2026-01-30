import React from "react";
import { cn } from "@/lib/utils";
import { motion, type HTMLMotionProps } from "framer-motion";

type ButtonProps = Omit<HTMLMotionProps<"button">, "children"> & {
    children?: React.ReactNode;
    variant?: "primary" | "secondary" | "ghost" | "destructive" | "outline";
    size?: "sm" | "md" | "lg" | "icon";
    isLoading?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            className,
            variant = "primary",
            size = "md",
            isLoading,
            leftIcon,
            rightIcon,
            children,
            ...props
        },
        ref
    ) => {
        const baseStyles =
            "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50";

        const variants = {
            primary: "bg-foreground text-background hover:bg-foreground/90 active:bg-foreground",
            secondary: "bg-secondary text-foreground border border-border hover:bg-secondary/80 active:bg-secondary/70",
            outline: "bg-background text-foreground border border-border hover:bg-muted active:bg-muted/80",
            ghost: "bg-transparent text-foreground hover:bg-muted active:bg-muted/80",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        };

        const sizes = {
            sm: "h-9 px-4 text-xs",
            md: "h-11 px-5 text-sm",
            lg: "h-12 px-6 text-base",
            icon: "h-10 w-10",
        };

        const MotionButton = motion.button;

        return (
            <MotionButton
                ref={ref}
                className={cn(baseStyles, variants[variant], sizes[size], className)}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 420, damping: 20 }}
                disabled={props.disabled || isLoading}
                {...props}
            >
                {isLoading ? (
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                ) : leftIcon ? (
                    <span className="inline-flex items-center">{leftIcon}</span>
                ) : null}
                {children}
                {rightIcon ? <span className="inline-flex items-center">{rightIcon}</span> : null}
            </MotionButton>
        );
    }
);
Button.displayName = "Button";

export { Button };
