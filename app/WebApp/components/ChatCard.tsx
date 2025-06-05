import Link from "next/link"
import Image from "next/image"
import React from "react"
import background from "@/public/images/homepage/db8ea4379f48b0bd833ddd83078abae6.png"
import AI from "@/public/images/homepage/AI.svg"

const ChatCard = ({ href }: CardProps) => {
  return (
    <Link
      className="order-[0] w-full xl:w-[calc(50%-20px)] min-h-[200px] rounded-[24px]
       bg-PrimaryBlack flex text-white active:opacity-85 transition-all relative overflow-hidden"
      href={href}
    >
      <div className="w-full p-[24px] xl:py-[48px] z-[1000]">
        <h3 className="text-[1.625rem] xl:text-[2.625rem] leading-[120%] font-cygre font-medium">
          Чат для перевода <br /> терминов
        </h3>
      </div>
      <Image
        src={background}
        className="absolute w-full h-full opacity-10"
        alt=""
      />
      <Image
        src={AI}
        className="absolute left-0 bottom-0 w-[25%] xl:w-[30%]"
        alt=""
      />
    </Link>
  )
}

export default ChatCard
