import React from "react"
import Image from "next/image"

import PlanPict from "@/public/images/homepage/bb822f8796d8a19a5cfe750bbf13e695.png"
import arrow from "@/public/images/homepage/Arrow.png"

const PlanCard = () => {
  return (
    <button className="rounded-[24px] w-1/2 xl:w-full bg-[#a1a1a1]/50 flex xl:h-[194px] hover:opacity-85 transition-all relative overflow-hidden ">
      <p className="text-black text-[2rem] flex flex-col text-start pt-[3vh] h-full px-10 leading-10 z-[1000]">
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
    </button>
  )
}

export default PlanCard
