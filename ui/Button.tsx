import React from "react"
import Image from "next/image"
import arrow_24 from "@/public/images/landing/arrow_24.svg"

const Button = ({ type, text }: ButtonProps) => {
  switch (type) {
    case "primary-action":
      return (
        <button
          className="p-[6px] pl-[28px] max-w-[204px] py-[12px] border-[1.5px] 
        rounded-[100px] flex items-center gap-[10px] text-white border-primaryGreen bg-transparent 
        hover:bg-primaryGreen active:bg-primaryGreenActive hover:text-black rounded-[30px] transition-all"
        >
          {text}
          <Image src={arrow_24} alt={""}></Image>
        </button>
      )

    case "primary":
      return (
        <button
          className="px-[28px] max-w-[105px] lg:max-w-[200px]  text-[1rem]  lg:py-[16px] bg-primaryGreen 
        active:bg-primaryGreenActive text-black rounded-[30px] transition-all"
        >
          {text}
        </button>
      )

    case "secondary":
      return (
        <button
          className="px-[28px] hover:border-primaryGreen hover:text-primaryGreen 
        active:border-primaryGreenActive active:text-primaryGreenActive py-[12px] transition-all border-[1.5px] 
        border-white rounded-[100px] text-white flex items-center gap-[10px]"
        >
          {text}
        </button>
      )
  }
}
export default Button

interface ButtonProps {
  type: string
  text: string
}
