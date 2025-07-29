import React from "react"
import clsx from "clsx"

const variantsTypography = {
  family: {
    default: "font-inter",
    inter: "font-inter",
    poppins: "font-poppins",
    cygre: "font-cygre"
  },

  weight: {
    default: "font-normal",
    medium: "font-medium",
    bold: "font-bold"
  },

  color: {
    lightGray: "text-LightGray",
    darkGray: "text-Gray02",
    black: "text-PrimaryBlack",
    green: "text-PrimaryGreen"
  },

  center: "w-full text-center",
  start: "text-start w-full",

  variant: {
    h1: "text-[32px] xl:text-[54px]",
    h2: "text-[28px] xl:text-[48px]",
    h3: "text-[26px] xl:text-[42px]",
    h4: "text-[24px] xl:text-[32px]",
    h5: "text-[22px] xl:text-[24px]",
    h6: "text-[18px]",
    accent: "text-[18px] xl:text-[64px]",
    p: "text-[16px] lg:text-[18px]",
    button: "text-[14px] lg:text-[16px] font-medium font-cygre",
    custom: "",
    span: ""
  }
} as const

type TypographyVariants = keyof typeof variantsTypography.variant

type TypographyProps = {
  children: React.ReactNode
  className?: string
  weight?: keyof typeof variantsTypography.weight
  color?: keyof typeof variantsTypography.color
  center?: boolean
  start?: boolean
  variants: TypographyVariants
  as?: keyof React.JSX.IntrinsicElements
}

const baseTypographyStyles = "text-pretty"

function Typography({
  children,
  className,
  variants,
  start,
  weight,
  color,
  center
}: TypographyProps) {
  const Tag: keyof React.JSX.IntrinsicElements = (() => {
    if (
      variants === "accent" ||
      variants === "custom" ||
      variants === "button"
    ) {
      return "p"
    }
    if (variants.startsWith("h") && !isNaN(Number(variants[1]))) {
      return variants as keyof React.JSX.IntrinsicElements
    }
    return "p"
  })()

  return (
    <Tag
      className={clsx(
        baseTypographyStyles,
        variantsTypography.family.default,
        variantsTypography.variant[variants],
        color && variantsTypography.color[color],
        center && variantsTypography.center,
        start && variantsTypography.start,
        weight && variantsTypography.weight,
        className
      )}
    >
      {children}
    </Tag>
  )
}

export default Typography
