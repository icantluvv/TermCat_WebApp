"use client"

import clsx from "clsx"
import { ComponentPropsWithoutRef, ElementType, ReactNode } from "react"

const defaultButtonVariants =
  "transition-colors duration-[.3] cursor-pointer flex gap-[12px] items-center justify-center "

const variantsButton = {
  size: {
    default: "",
    middle: "h-[48px] px-[24px]",
    big: "min-h-[40px] py-[8px] px-[16px] lg:py-[16px] lg:px-[28px]"
  },
  form: {
    default: "",
    rounded: "rounded-full"
  },
  variant: {
    default: "",
    primary: "bg-PrimaryGreen hover:bg-black active:bg-PrimaryGreenActive",
    empty: "border-[1.5px] border-lightGray",
    emptyGreen: "border-[1.5px] border-PrimaryGreen",
    secondary: "bg-PrimaryBlack",
    disable: "bg-lightGray"
  }
} as const

type ButtonSize = keyof typeof variantsButton.size
type ButtonForm = keyof typeof variantsButton.form
type ButtonVariant = keyof typeof variantsButton.variant

type ButtonProps<T extends ElementType = "button"> = {
  as?: T
  children?: ReactNode
  className?: string
  size?: ButtonSize
  form?: ButtonForm
  variant?: ButtonVariant
} & ComponentPropsWithoutRef<T>

function Button<T extends ElementType = "button">({
  as,
  className,
  size = "default",
  form = "default",
  variant = "default",
  children,
  ...props
}: ButtonProps<T>) {
  const Component = as || "button"

  return (
    <Component
      className={clsx(
        defaultButtonVariants,
        variantsButton.size[size],
        variantsButton.form[form],
        variantsButton.variant[variant],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  )
}

export default Button
