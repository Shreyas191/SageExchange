import React from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: [
    "bg-navy text-white",
    "hover:bg-navy-light hover:-translate-y-px",
    "active:translate-y-0 active:scale-[0.98]",
    "disabled:bg-gray-300 disabled:text-gray-500 disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0 disabled:scale-100",
  ].join(" "),
  secondary: [
    "bg-white text-navy border-2 border-navy",
    "hover:bg-gray-50 hover:border-gold",
    "active:scale-[0.98]",
    "disabled:bg-gray-100 disabled:text-gray-500 disabled:border-gray-300 disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100",
  ].join(" "),
  ghost: [
    "bg-transparent text-navy border-none",
    "hover:bg-gray-50 hover:text-gold",
    "active:scale-[0.98]",
    "disabled:text-gray-500 disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100",
  ].join(" "),
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-sm",         // 36px
  md: "h-11 px-6 text-base",      // 44px — meets touch target minimum
  lg: "h-[52px] px-8 text-base",  // 52px
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", className = "", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={[
          "inline-flex items-center justify-center gap-2",
          "font-sans font-semibold",
          "rounded-md",
          "transition-all duration-200 ease-out",
          "cursor-pointer select-none",
          "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy",
          variantStyles[variant],
          sizeStyles[size],
          className,
        ].join(" ")}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
export type { ButtonProps, ButtonVariant, ButtonSize };
