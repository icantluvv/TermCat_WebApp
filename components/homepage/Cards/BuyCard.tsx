import Link from "next/link"
import Image from "next/image"
import React from "react"

import background from "@/public/images/homepage/db8ea4379f48b0bd833ddd83078abae6.png"
import copyIcon from "@/public/images/homepage/copy_icon.svg"
const BuyCard = () => {
  return (
    <>
      {/* pc card */}
      <Link
        className="rounded-[24px] bg-[#e8e8e8] w-full xl:flex hidden lg:w-[48%]  flex text-white hover:opacity-85 transition-all relative overflow-hidden"
        href={"/chat"}
      >
        <div className="w-full px-8 py-10 z-[1000]">
          <p className="text-[2.625rem] leading-[120%] text-[#1F1F1F] text-[32px]">
            Приобретите <br />
            termwards
          </p>

          <p className="text-[64px] font-bold text-[#1F1F1F]">2025T</p>

          <p className="text-[18px] text-[#A1A1A1] font-thin">
            Используйте промокод в профиле <br />
            для получения валюты
          </p>
        </div>

        <Image
          src={background}
          className="absolute opacity-10 h-full"
          alt={""}
        ></Image>
      </Link>

      {/* mobile and laptop card */}
      <Link
        className="rounded-[24px] bg-[#e8e8e8] w-[47.5%] lg:w-[48%] flex xl:hidden text-white active:opacity-85 transition-all relative overflow-hidden"
        href={"/chat"}
      >
        <div className="w-full p-4 gap-y-2 flex flex-col z-[1000]">
          <div className="flex flex-row w-full gap-x-5 items-center">
            <p className="text-[26px] font-semibold text-[#1F1F1F] text-[32px]">
              TERMX
            </p>
            <Image src={copyIcon} alt={""}></Image>
          </div>

          <p className="text-[12px] text-[#A1A1A1] font-thin">
            Промокод для получения termwards в профиле
          </p>
        </div>

        <Image
          src={background}
          className="absolute opacity-10 h-full"
          alt={""}
        ></Image>
      </Link>
    </>
  )
}

export default BuyCard
