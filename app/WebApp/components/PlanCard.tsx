import React from "react"
import Image from "next/image"
import arrow from "@/public/images/homepage/Arrow.png"
import Link from "next/link"
import tariff_back_mobile from "@/public/images/homepage/tariff_mobile_back.svg"

const PlanCard = ({ href }: CardProps) => {
  return (
    <>
      <Link
        className="order-[3] rounded-[24px] w-full md:min-h-[132px] lg:min-h-[194px] active:opacity-90 relative overflow-hidden select-none flex"
        href={href}
      >
        <p
          className="text-black text-[1.5rem] xl:text-[2rem] p-[24px] flex flex-col xl:px-10 
        xl:py-[3vh] leading-8 font-cygre font-medium gap-[12px] z-[1000]"
        >
          Подробнее
          <br /> о тарифе Смарт
          <span className="text-[0.75rem] font-poppins font-regular">
            Исследуйте возможности своего тарифа
          </span>
        </p>
        <Image
          src={tariff_back_mobile}
          className="rounded-[24px] absolute z-[0] top-0 left-0 object-cover"
          fill
          alt={""}
        />
        <div className="rounded-[50%] w-[48px] h-[48px] bg-[#e8e8e8] right-0 top-0 m-[5%] md:flex hidden absolute items-center justify-center">
          <Image src={arrow} alt={""} className="w-1/3 h-1/3"></Image>
        </div>
      </Link>
    </>
  )
}

export default PlanCard
