import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline" | "neon";
  size?: "sm" | "md" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    const variants = {
      primary: "bg-white text-background hover:bg-white/90",
      secondary: "bg-surface text-white border border-white/10 hover:border-white/20",
      ghost: "bg-transparent text-white hover:bg-white/5",
      outline: "bg-transparent text-white border-2 border-white hover:bg-white hover:text-background",
      neon: "bg-primary-neon/10 text-primary-neon border border-primary-neon/20 hover:border-primary-neon hover:shadow-[0_0_20px_rgba(0,209,255,0.4)]",
    };

    const sizes = {
      sm: "px-4 py-2 text-xs",
      md: "px-6 py-3 text-sm",
      lg: "px-8 py-4 text-base",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-full font-bold transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:pointer-events-none",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export default Button;
