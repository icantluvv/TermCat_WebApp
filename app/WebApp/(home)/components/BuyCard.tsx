import Link from "next/link"
import Image from "next/image"
import React from "react"
import background from "@/public/images/homepage/db8ea4379f48b0bd833ddd83078abae6.png"
import copyIcon from "@/public/images/homepage/copy_icon.png"

const BuyCard = () => {
  return (
    <>
      <BigBuyCard />
      <SmallBuyCard />
    </>
  )
}

export default BuyCard

const BigBuyCard = () => {
  return (
    <Link
      className="flex-1 rounded-[24px] xl:flex bg-[#e8e8e8] hidden text-white active:opacity-90
      select-none transition-all relative overflow-hidden"
      href={"/WebApp/profile"}
    >
      <div className="w-full p-[24px] xl:py-10 z-[1000]">
        <h3 className="text-[2rem] leading-10 text-[#1F1F1F] font-medium">
          Заберите <br /> ваш подарок!
        </h3>
        <p className="text-[4rem] text-[#1F1F1F] font-cygre font-bold">2025T</p>
        <p className="text-[16px] text-[#A1A1A1] font-poppins">
          Используйте промокод <br />
          для активации пробного периода
        </p>
      </div>
      <Image src={background} className="absolute opacity-10 h-full" alt="" />
    </Link>
  )
}

const SmallBuyCard = () => {
  return (
    <Link
      className="order-[1] w-[calc(50%-8px)] lg:w-[calc(50%-8px)] p-[12px] lg:p-[24px] rounded-[24px] xl:hidden bg-[#e8e8e8] relative 
      active:opacity-90 overflow-hidden select-none"
      href={"/WebApp/profile"}
    >
      <div className="w-full z-[1000] flex-col flex gap-[12px]">
        <span className="text-[1.375rem] leading-[120%] text-[#1F1F1F] font-cygre font-bold flex gap-x-[6px]">
          TERMX
          <Image src={copyIcon} alt="copyIcon" className="w-[32px]" />
        </span>
        <p className="text-[0.625rem] text-[#A1A1A1] font-poppins">
          Промокод для получения <br /> termwords в профиле
        </p>
      </div>
      <Image
        src={background}
        className="absolute opacity-10"
        fill
        objectFit="cover"
        alt=""
      />
    </Link>
  )
}
