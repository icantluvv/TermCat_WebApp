"use client"

import Image from "next/image"
import yandex from "@/public/images/auth/yandex.png"
import { forwardRef, type ButtonHTMLAttributes } from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/components/cn"

const yandexButtonVariants = cva(
  "inline-flex cursor-pointer items-center justify-center rounded-full select-none transition-colors disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      size: {
        default:
          "pl-[12px] pr-[18px] py-[8px] lg:pl-[18px] lg:pr-[24px] lg:py-[12px] text-[14px] lg:text-[16px] gap-[6px] lg:gap-[6px]",
        sm: "px-3 py-2 text-sm gap-2",
        lg: "px-6 py-3 text-lg gap-3"
      },
      variant: {
        default: "bg-black text-white hover:bg-black/90"
      }
    },
    defaultVariants: {
      size: "default",
      variant: "default"
    }
  }
)

export type SignInYandexButtonProps = {
  asChild?: boolean
  loading?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof yandexButtonVariants>

const SignInYandexButton = forwardRef<HTMLButtonElement, SignInYandexButtonProps>(
  ({ className, size, variant, loading, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(yandexButtonVariants({ size, variant, className }))}
        disabled={loading || props.disabled}
        {...props}
      >
        <Image src={yandex} alt="Yandex" className="w-[24px] lg:w-[36px]" />
        {children ?? "Яндекс ID"}
      </button>
    )
  }
)

SignInYandexButton.displayName = "SignInYandexButton"

export { SignInYandexButton, yandexButtonVariants }
