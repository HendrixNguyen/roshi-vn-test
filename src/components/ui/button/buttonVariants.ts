import { cva, VariantProps } from "class-variance-authority";

type ButtonVariantsPropsType = VariantProps<typeof buttonVariants>;

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md border text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:opacity-50 [&_.icon]:pointer-events-none [&_.icon]:flex [&_.icon]:shrink-0 [&_.icon]:items-center [&_.icon]:justify-center",
  {
    variants: {
      variant: {
        solid: "shadow",
        outline: "bg-background shadow-sm",
        ghost: "border-transparent",
        link: "border-transparent underline-offset-4 hover:underline",
      },
      color: {
        default: "",
        primary: "",
        secondary: "",
        warning: "",
        destructive: "",
      },
      size: {
        sm: "h-8 rounded-md px-3 text-xs [&_.icon]:size-4",
        md: "h-9 px-4 py-2 [&_.icon]:size-5",
        lg: "h-11 rounded-md px-5 py-2.5 text-base [&_.icon]:size-6",
        icon: "h-9 w-9",
      },
      disabled: {
        false: null,
        true: "cursor-not-allowed text-muted-foreground",
      },
    },
    compoundVariants: [
      {
        variant: "solid",
        color: ["primary", "default"],
        disabled: false,
        className: "bg-primary text-primary-foreground hover:bg-primary/90",
      },
      {
        variant: "solid",
        color: "secondary",
        disabled: false,
        className: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      },
      {
        variant: "solid",
        color: "warning",
        disabled: false,
        className: "bg-warning text-warning-foreground hover:bg-warning/90",
      },
      {
        variant: "solid",
        color: "destructive",
        disabled: false,
        className: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
      },
      {
        variant: "outline",
        color: "default",
        disabled: false,
        className: "border-input hover:bg-accent hover:text-accent-foreground",
      },
      {
        variant: "outline",
        color: "primary",
        disabled: false,
        className: "border-primary text-primary hover:bg-primary/5 active:bg-primary/10",
      },
      {
        variant: "outline",
        color: "secondary",
        disabled: false,
        className: "border-secondary text-secondary hover:bg-secondary/5 active:bg-secondary/10",
      },
      {
        variant: "outline",
        color: "warning",
        disabled: false,
        className: "border-warning text-warning hover:bg-warning/5 active:bg-warning/10",
      },
      {
        variant: "outline",
        color: "destructive",
        disabled: false,
        className: "border-destructive text-destructive hover:bg-destructive/5 active:bg-destructive/10",
      },
      {
        variant: "ghost",
        color: "default",
        disabled: false,
        className: "hover:bg-accent hover:text-accent-foreground",
      },
      {
        variant: "ghost",
        color: "primary",
        disabled: false,
        className: "text-primary hover:bg-primary/5 active:bg-primary/10",
      },
      {
        variant: "ghost",
        color: "secondary",
        disabled: false,
        className: "text-secondary hover:bg-secondary/5 active:bg-secondary/10",
      },
      {
        variant: "ghost",
        color: "warning",
        disabled: false,
        className: "text-warning hover:bg-warning/5 active:bg-warning/10",
      },
      {
        variant: "ghost",
        color: "destructive",
        disabled: false,
        className: "text-destructive hover:bg-destructive/5 active:bg-destructive/10",
      },
      {
        variant: "link",
        color: ["default", "primary"],
        disabled: false,
        className: "text-primary",
      },
      {
        variant: "link",
        color: "secondary",
        disabled: false,
        className: "text-secondary",
      },
      {
        variant: "link",
        color: "warning",
        disabled: false,
        className: "text-warning",
      },
      {
        variant: "link",
        color: "destructive",
        disabled: false,
        className: "text-destructive",
      },
      {
        disabled: true,
        variant: "solid",
        className: "border-transparent bg-muted",
      },
      {
        disabled: true,
        variant: "outline",
        className: "border-muted-foreground bg-muted",
      },
      {
        disabled: true,
        variant: ["ghost", "link"],
        className: "border-transparent hover:no-underline",
      },
    ],
    defaultVariants: {
      variant: "solid",
      size: "md",
      color: "default",
      disabled: false,
    },
  },
);

export { buttonVariants as default, type ButtonVariantsPropsType };
