import React from "react";

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    helperText?: string;
    error?: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({ label, helperText, error, id, className = "", ...props }, ref) => {
        const textareaId = id || label?.toLowerCase().replace(/\s+/g, "-");
        const hasError = !!error;

        return (
            <div className="flex flex-col gap-sm w-full">
                {label && (
                    <label
                        htmlFor={textareaId}
                        className="font-sans font-semibold text-sm text-gray-900"
                    >
                        {label}
                    </label>
                )}

                <textarea
                    ref={ref}
                    id={textareaId}
                    aria-invalid={hasError}
                    aria-describedby={
                        hasError
                            ? `${textareaId}-error`
                            : helperText
                                ? `${textareaId}-helper`
                                : undefined
                    }
                    className={[
                        "w-full min-h-[120px] px-4 py-3",
                        "font-serif text-base text-gray-900 leading-6",
                        "bg-white border-2 rounded-md",
                        "placeholder:text-gray-500",
                        "resize-y",
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
                        id={`${textareaId}-error`}
                        className="font-sans text-[13px] text-error"
                        role="alert"
                    >
                        {error}
                    </p>
                )}

                {!hasError && helperText && (
                    <p
                        id={`${textareaId}-helper`}
                        className="font-sans text-[13px] text-gray-500"
                    >
                        {helperText}
                    </p>
                )}
            </div>
        );
    }
);

Textarea.displayName = "Textarea";

export { Textarea };
export type { TextareaProps };
