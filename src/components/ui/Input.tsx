import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    helperText?: string;
    error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ label, helperText, error, id, className = "", ...props }, ref) => {
        const inputId = id || label?.toLowerCase().replace(/\s+/g, "-");
        const hasError = !!error;

        return (
            <div className="flex flex-col gap-sm w-full">
                {label && (
                    <label
                        htmlFor={inputId}
                        className="font-sans font-semibold text-sm text-gray-900"
                    >
                        {label}
                    </label>
                )}

                <input
                    ref={ref}
                    id={inputId}
                    aria-invalid={hasError}
                    aria-describedby={
                        hasError
                            ? `${inputId}-error`
                            : helperText
                                ? `${inputId}-helper`
                                : undefined
                    }
                    className={[
                        "w-full h-12 px-4",
                        "font-serif text-base text-gray-900",
                        "bg-white border-2 rounded-md",
                        "placeholder:text-gray-500",
                        "transition-all duration-200 ease-out",
                        "focus:outline-none focus:border-navy focus:ring-4 focus:ring-navy/10",
                        hasError
                            ? "border-error bg-error-light"
                            : "border-gray-300",
                        props.disabled
                            ? "bg-gray-100 cursor-not-allowed opacity-70"
                            : "",
                        className,
                    ].join(" ")}
                    {...props}
                />

                {hasError && (
                    <p
                        id={`${inputId}-error`}
                        className="font-sans text-[13px] text-error"
                        role="alert"
                    >
                        {error}
                    </p>
                )}

                {!hasError && helperText && (
                    <p
                        id={`${inputId}-helper`}
                        className="font-sans text-[13px] text-gray-500"
                    >
                        {helperText}
                    </p>
                )}
            </div>
        );
    }
);

Input.displayName = "Input";

export { Input };
export type { InputProps };
