import * as React from "react";

import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

type InputProps = Omit<React.ComponentProps<"input">, "prefix" | "suffix"> & {
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
};

const inputVariants = cva(
  "flex h-9 w-full rounded-md border border-input bg-transparent px-2.5 py-2.5 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:border-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
  {
    variants: {
      prefix: {
        true: "pl-10",
      },
      suffix: {
        true: "pe-10",
      },
    },
    defaultVariants: {
      prefix: false,
      suffix: false,
    },
  },
);

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, prefix, suffix, ...props }, ref) => {
  return (
    <div className="relative w-fit">
      {prefix && (
        <>
          <div className="absolute left-8 top-1/2 h-6 w-px -translate-y-1/2 border-l border-l-neutral-stroke" />

          <span
            className={cn("absolute left-2.5 top-1/2 -translate-y-1/2 text-neutral-body-2", {
              "text-neutral-400": !!props.disabled,
            })}
          >
            {prefix}
          </span>
        </>
      )}

      <input
        ref={ref}
        type={type}
        className={cn(
          inputVariants({
            prefix: !!prefix,
            suffix: !!suffix,
            className,
          }),
        )}
        {...props}
      />

      {suffix && (
        <>
          <div className="absolute right-8 top-1/2 h-6 w-px -translate-y-1/2 border-l border-l-neutral-stroke" />

          <span
            className={cn("absolute right-2.5 top-1/2 -translate-y-1/2 text-neutral-body-2", {
              "text-neutral-400": !!props.disabled,
            })}
          >
            {suffix}
          </span>
        </>
      )}
    </div>
  );
});
Input.displayName = "Input";

export { Input };
