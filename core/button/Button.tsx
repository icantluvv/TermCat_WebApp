"use client"

import clsx from "clsx"
import { ComponentPropsWithoutRef, ElementType, ReactNode } from "react"

const defaultButtonVariants =
  "transition-colors duration-[.3] cursor-pointer flex items-center justify-center"

const variantsButton = {
  size: {
    default: "",
    big: "px-[24px] h-[48px]"
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
