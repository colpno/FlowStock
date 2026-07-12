import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-1 rounded-xl typo-body-md font-medium whitespace-nowrap ring-offset-surface transition-colors focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-on-primary hover:brightness-110",
        destructive: "bg-error text-on-error hover:bg-red-600",
        outline:
          "border border-outline-variant bg-surface text-on-surface hover:bg-surface-container-high",
        secondary: "bg-secondary-container text-on-secondary-container hover:brightness-110",
        ghost: "text-on-surface hover:bg-surface-container-high",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-lg px-3 typo-body-sm",
        lg: "h-11 rounded-lg px-8",
        icon: "h-10 w-10",
        "icon-xs": "h-8 w-9",
        "icon-sm": "h-9 w-9",
        "icon-lg": "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      type="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
