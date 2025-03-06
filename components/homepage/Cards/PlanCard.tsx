import React from "react"
import Image from "next/image"

import PlanPict from "@/public/images/homepage/bb822f8796d8a19a5cfe750bbf13e695.png"
import arrow from "@/public/images/homepage/Arrow.png"
import Link from "next/link"

const PlanCard = () => (
  <Link
    className="rounded-[24px] w-full md:w-[48%] hidden xl:flex xl:w-full  bg-[#a1a1a1]/50 hover:opacity-85 transition-all relative overflow-hidden "
    href={""}
  >
    <p className="text-black text-[2rem] p-4 flex flex-col xl:px-10 xl:py-[3vh] leading-8 z-[1000] font-cygre font-medium gap-y-4">
      Подробнее
      <br /> о тарифе Смарт
      <span className="text-[0.75rem] font-poppins font-regular">
        Исследуйте возможности своего тарифа
      </span>
    </p>
    <Image
      src={PlanPict}
      className="rounded-[24px] absolute z-1000 mt-[-15svh] rotate-180 ml-[10vw] opacity-100"
      alt={""}
    />
    <div className="rounded-[50%] w-[48px] h-[48px] bg-[#e8e8e8] right-0 m-10 absolute flex items-center justify-center">
      <Image src={arrow} alt={""} className="w-1/3 h-1/3"></Image>
    </div>
  </Link>
)

export default PlanCard
