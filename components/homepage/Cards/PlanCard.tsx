import React from "react"
import Image from "next/image"

import PlanPict from "@/public/images/homepage/bb822f8796d8a19a5cfe750bbf13e695.png"
import arrow from "@/public/images/homepage/Arrow.png"
import Link from "next/link"

const PlanCard = () => (
  <>
    <Link
      className="rounded-[24px] w-full md:w-[48%] hidden xl:flex xl:w-full py-4 bg-[#a1a1a1]/50 hover:opacity-85 transition-all relative overflow-hidden "
      href={""}
    >
      <p className="text-black text-[2rem] flex flex-col text-start h-full px-10 leading-10 z-[1000]">
        Подробнее
        <br /> о тарифе Смарт
        <span className="text-[0.75rem]">
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

    {/* mobile version */}

    <Link
      className="rounded-[24px] w-full md:w-[48%] xl:hidden bg-[#a1a1a1]/50 flex md:h-[194px] py-[3vh] hover:opacity-85 transition-all relative overflow-hidden "
      href={""}
    >
      <p className="text-black text-[30px] flex flex-col text-start h-full px-8 leading-10 z-[1000]">
        Подробнее
        <br /> о тарифе Старт
        <span className="text-[14px]">
          Исследуйте возможности своего тарифа
        </span>
      </p>
      <Image
        src={PlanPict}
        className="rounded-[24px] absolute z-1000 rotate-[80deg] scale-[200%] ml-[66vw] mt-[-37vh] opacity-70"
        alt={""}
      />
    </Link>
  </>
)

export default PlanCard
