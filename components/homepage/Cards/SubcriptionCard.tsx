import React from "react"
import Image from "next/image"
import arrow from "@/public/images/homepage/Arrow.png"
import termwardBack from "@/public/images/homepage/db8ea4379f48b0bd833ddd83078abae6.png"

import background from "@/public/images/homepage/d20c90509061782c2cbc21e06ccf4ce1.png"

const SubScriptionCard = () => {
  return (
    <button className="rounded-[24px] w-[48%] bg-[#0c0c0c] flex h-[194px] hover:opacity-85 transition-all relative overflow-hidden ">
      <p className="text-white text-[2rem] flex flex-col text-start pt-[3vh] h-full px-10 leading-10 ">
        Активировать
        <br /> подписку
      </p>
      <Image
        src={termwardBack}
        className="rounded-[24px] opacity-10 w-full absolute h-full"
        alt={""}
      />
      <Image
        src={background}
        className="rounded-[24px] opacity-50 right-0 bottom-[-13vh] absolute z-1000 mt-[1vh] ml-[6.4vw] opacity-100"
        alt={""}
      />
      <div className="rounded-[50%] w-[48px] h-[48px] bg-[#e8e8e8] right-0 m-10 absolute flex items-center justify-center">
        <Image src={arrow} alt={""} className="w-1/3 h-1/3"></Image>
      </div>
    </button>
  )
}

export default SubScriptionCard
