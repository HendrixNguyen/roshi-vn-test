import { Slot, Slottable } from "@radix-ui/react-slot";
import { Loader2 } from "lucide-react";
import * as React from "react";

import { cn } from "@/lib/utils";
import buttonVariants, { ButtonVariantsPropsType } from "./buttonVariants";

interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "color" | "disabled">,
    ButtonVariantsPropsType {
  asChild?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      color,
      size,
      asChild = false,
      disabled,
      icon,
      iconPosition = "left",
      loading,
      children,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";

    const renderIcon = loading ? <Loader2 className="!h-4 !w-4 animate-spin" /> : <span className="icon">{icon}</span>;

    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size, disabled: loading || disabled, color, className }))}
        disabled={!!(loading || disabled)}
        {...props}
      >
        {icon && iconPosition === "left" && renderIcon}
        <Slottable>{!icon && loading ? renderIcon : (icon && <span>{children}</span>) || children}</Slottable>
        {icon && iconPosition === "right" && renderIcon}
      </Comp>
    );
  },
);
Button.displayName = "Button";

export { Button as default, type ButtonProps };
