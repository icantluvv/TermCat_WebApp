"use client"
import React from "react"
import Image from "next/image"
import arrow_24 from "@/public/images/landing/arrow_24.svg"
import clsx from "clsx"

interface ButtonProps {
  variant: "primary-action" | "primary" | "secondary"
  text: string
  onClick?: () => void
}

const Button: React.FC<ButtonProps> = ({ variant, text, onClick }) => {
  const baseStyles = "transition-all rounded-[30px]"
  const variants = {
    "primary-action": `p-[6px] pl-[28px] max-w-[204px] py-[12px] border-[1.5px] rounded-[100px] flex items-center gap-[10px] 
    text-white border-primaryGreen bg-transparent hover:bg-primaryGreen active:bg-primaryGreenActive hover:text-black`,
    primary:
      "px-[28px] max-w-[105px] lg:max-w-[200px] text-[1rem] lg:py-[16px] bg-primaryGreen active:bg-primaryGreenActive text-black",
    secondary: `px-[28px] hover:border-primaryGreen hover:text-primaryGreen active:border-primaryGreenActive active:text-primaryGreenActive 
      py-[12px] border-[1.5px] border-white text-white flex items-center gap-[10px]`
  }
  return (
    <button onClick={onClick} className={clsx(baseStyles, variants[variant])}>
      {text}
      {variant === "primary-action" && <Image src={arrow_24} alt="" />}
    </button>
  )
}

export default Button
