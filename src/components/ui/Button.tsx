import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

/**
 * Quy ước nút:
 * - cta (cam): hành động chính dẫn tới liên hệ/báo giá — mỗi khu vực chỉ 1 nút cam
 * - default (navy): hành động thường
 * - outline: hành động phụ
 * - onDark: hành động phụ trên nền tối
 */
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl font-semibold transition-colors disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-navy text-white hover:bg-navy-deep",
        cta: "bg-orange text-white hover:bg-orange-dark",
        accent: "bg-orange text-white hover:bg-orange-dark",
        secondary: "bg-sky text-white hover:bg-navy",
        outline: "border border-line bg-white text-ink hover:border-navy hover:text-navy",
        onDark: "border border-white/25 bg-white/5 text-white hover:bg-white/15",
        ghost: "text-ink hover:bg-paper",
        link: "text-navy underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-5 text-sm",
        sm: "h-9 px-3 text-sm",
        lg: "h-13 px-6 text-base",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
