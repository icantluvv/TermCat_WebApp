"use client"

import clsx from "clsx"
import { ComponentPropsWithoutRef, ElementType, ReactNode } from "react"

const defaultButtonVariants =
  "transition-colors duration-[.3] cursor-pointer flex items-center justify-center "

const variantsButton = {
  size: {
    default: "",
    small: "px-[16px] py-[8px]",
    big: "px-[28px] py-[16px] h-[48px] gap-[12px]"
  },
  form: {
    default: "",
    rounded: "rounded-full"
  },
  variant: {
    default: "",

    primary:
      "bg-PrimaryGreen hover:bg-PrimaryGreenHover active:bg-PrimaryGreenActive text-PrimaryBlack",

    empty:
      "border-[1.5px] border-lightGray text-LightGray hover:text-PrimaryGreen active:border-[#DDDDDD]",

    emptyGreen:
      "border-[1.5px] border-PrimaryGreen text-LightGray hover:text-PrimaryGreen hover:border-PrimaryGreenHover",

    black:
      "border-[1.5px] text-PrimaryBlack border-PrimaryBlack hover:bg-PrimaryBlack active:text-PrimaryGreen hover:text-LightGray",
    disable: "bg-[#E8E8E8] text-PrimaryBlack cursor-not-allowed"
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
        className,  
        defaultButtonVariants,
        variantsButton.size[size],
        variantsButton.form[form],
        variantsButton.variant[variant]
      )}
      {...props}
    >
      {children}
    </Component>
  )
}

export default Button
