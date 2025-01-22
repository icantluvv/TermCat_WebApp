"use client"
import React from "react"
import Image from "next/image"
import lightning from "@/public/images/lightning.svg"

const Button = ({ text, type }: ButtonProps) => {
  switch (type) {
    case "upgrade":
      return (
        <button className="px-[28px] py-4 bg-[#E8E8E8] h-[48px] items-center flex gap-[20px]">
          <Image src={lightning} alt={lightning}></Image>
          <p>{text}</p>
        </button>
      )
  }
}

export default Button

interface ButtonProps {
  text: string
  type: string
}
