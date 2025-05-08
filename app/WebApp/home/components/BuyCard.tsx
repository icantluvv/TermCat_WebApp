import Link from "next/link"
import Image from "next/image"
import React from "react"

import background from "@/public/images/homepage/db8ea4379f48b0bd833ddd83078abae6.png"
import copyIcon from "@/public/images/homepage/copy_icon.svg"


const BuyCard = () => {
  return (
    <>
      <BuyCardDesktop />
      <BuyCardMobile />
    </>
  )
}

export default BuyCard


const BuyCardDesktop = () => {
  return (
    <Link
      className="rounded-[24px] bg-[#e8e8e8] xl:flex hidden flex-1 text-white active:opacity-85 transition-all relative overflow-hidden"
      href={"/chat"}
    >
      <div className="w-full px-8 py-10 z-[1000]">
        <p className="text-[2rem] leading-[120%] text-[#1F1F1F] font-cygre font-medium">
          Приобретите <br /> termwards
        </p>
        <p className="text-[4rem] text-[#1F1F1F] font-cygre font-bold">2025T</p>
        <p className="text-[1.125rem] text-[#A1A1A1] font-poppins">
          Используйте промокод в профиле <br /> для получения валюты
        </p>
      </div>
      <Image src={background} className="absolute opacity-10 h-full" alt="" />
    </Link>
  )
}

const BuyCardMobile = () => {
  return (
    <Link
      className="rounded-[24px] bg-[#e8e8e8] h-full w-[47.5%] lg:w-[48%] flex xl:hidden text-white active:opacity-85 transition-all relative overflow-hidden"
      href={"/chat"}
    >
      <div className="w-full p-[16px] gap-y-4 flex flex-col z-[1000]">
        <div className="flex flex-row w-full gap-x-5 items-center">
          <p className="text-[22px] text-[#1F1F1F] font-cygre font-bold">
            TERMX
          </p>
          <Image src={copyIcon} alt="" width={16} />
        </div>
        <p className="text-[10px] text-[#A1A1A1] font-thin">
          Промокод для получения termwards в профиле
        </p>
      </div>
      <Image src={background} className="absolute opacity-10 h-full" alt="" />
    </Link>
  )
}
