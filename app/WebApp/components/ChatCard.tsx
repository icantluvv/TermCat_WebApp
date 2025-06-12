import Link from "next/link"
import Image from "next/image"
import React from "react"
import background from "@/public/images/homepage/db8ea4379f48b0bd833ddd83078abae6.png"
import AI from "@/public/images/homepage/AI.svg"

const ChatCard = ({ href }: CardProps) => {
  return (
    <>
      <Link href={href} className="flex-1 flex xl:w-[calc(50%-20px)]">
        <svg
          className="w-full h-full border"
          viewBox="0 0 520 334"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M520 24C520 10.7452 509.255 0 496 0H24C10.7452 0 0 10.7452 0 24V310C0 323.255 10.7452 334 24 334H308C321.255 334 332 323.255 332 310V309.041C332 290.816 346.775 276.041 365 276.041H496C509.255 276.041 520 265.296 520 252.041V24Z"
            fill="#0C0C0C"
          />
          <path
            xmlns="http://www.w3.org/2000/svg"
            d="M520 24C520 10.7452 509.255 0 496 0H24C10.7452 0 0 10.7452 0 24V310C0 323.255 10.7452 334 24 334H308C321.255 334 332 323.255 332 310V309.041C332 290.816 346.775 276.041 365 276.041H496C509.255 276.041 520 265.296 520 252.041V24Z"
            fill="url(#pattern0_3783_2556)"
            fillOpacity="0.1"
          />
          <path
            xmlns="http://www.w3.org/2000/svg"
            d="M-38.3984 271.72H66.0663V304.14H-38.3984V271.72ZM-43.7283 346.924H-83.4355L-9.35083 160.906H35.9528L110.57 346.924H70.8632L13.834 196.516L-43.7283 346.924ZM166.842 346.924H132.198V160.906H166.842V346.924Z"
            fill="#C2F041"
          />
        </svg>
      </Link>
      {/* <Link
        className="order-[0] w-full xl:w-[calc(50%-20px)] min-h-[200px] rounded-[24px]
       bg-PrimaryBlack flex text-white active:opacity-85 transition-all relative overflow-hidden"
        href={href}
      >
        <div className="w-full p-[24px] xl:py-[48px] z-[1000]">
          <h3 className="text-[1.625rem] xl:text-[2.625rem] leading-[120%] font-cygre font-medium">
            Чат для перевода <br /> терминов
          </h3>
        </div> */}

      {/* <Image
        src={background}
        className="absolute w-full h-full opacity-10"
        alt=""
      />
      <Image
        src={AI}
        className="absolute left-0 bottom-0 w-[25%] xl:w-[30%]"
        alt=""
      /> */}
      {/* </Link> */}
    </>
  )
}

export default ChatCard
