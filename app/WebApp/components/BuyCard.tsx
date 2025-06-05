import Link from "next/link"
import Image from "next/image"
import React from "react"
import background from "@/public/images/homepage/db8ea4379f48b0bd833ddd83078abae6.png"
import copyIcon from "@/public/images/homepage/copy_icon.svg"

const BuyCard = ({ href }: CardProps) => {
  return (
    <>
      <BigBuyCard href={href} />
      <SmallBuyCard href={href} />
    </>
  )
}

export default BuyCard

const BigBuyCard = ({ href }: CardProps) => {
  return (
    <Link
      className="w-[calc(50%-20px)] rounded-[24px] xl:flex bg-[#e8e8e8] hidden text-white active:opacity-85 transition-all relative overflow-hidden"
      href={href}
    >
      <div className="w-full p-[24px] xl:py-[48px] z-[1000]">
        <p className="text-[2rem] leading-[120%] text-[#1F1F1F] font-cygre font-medium">
          Заберите <br /> ваш подарок!
        </p>
        <p className="text-[4rem] text-[#1F1F1F] font-cygre font-bold">2025T</p>
        <p className="text-[1.125rem] text-[#A1A1A1] font-poppins">
          Используйте промокод <br />
          для активации пробного периода
        </p>
      </div>
      <Image src={background} className="absolute opacity-10 h-full" alt="" />
    </Link>
  )
}

const SmallBuyCard = ({ href }: CardProps) => {
  return (
    <Link
      className="order-[1] w-[calc(50%-8px)] lg:w-[calc(50%-8px)] p-[12px] lg:p-[24px] rounded-[24px] xl:hidden bg-[#e8e8e8] relative overflow-hidden"
      href={href}
    >
      <div className="w-full z-[1000] flex-col flex gap-[12px]">
        <span className="text-[1.375rem] leading-[120%] text-[#1F1F1F] font-cygre font-bold flex gap-x-[12px]">
          TERMX
          <Image src={copyIcon} alt="copyIcon" />
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
