import React, { forwardRef } from "react";

export interface InputProps extends React.ComponentPropsWithoutRef<"input"> {
  textarea?: boolean;
  rows?: number;
  error?: string;
  transparent?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, textarea, error, transparent, ...props }, ref) => {
    const bg = transparent ? `bg-transparent` : `bg-primary-700`;
    const ring = error ? `border-2 border-red-500` : "";
    const cn = `w-full py-4 px-4 shadow-md rounded-md text-primary-100 ring-1 ring-transparent placeholder-primary-300 focus:outline-none ${bg} ${ring} ${className} `;

    return textarea ? (
      <textarea
        ref={ref as any}
        placeholder="text-area"
        className={cn}
        {...(props as any)}
        data-testid="textarea"
      />
    ) : (
      <input ref={ref} className={cn} placeholder="place-holder" type="text" {...props} data-testid="input" />
    );
  }
);

Input.displayName = "Input";