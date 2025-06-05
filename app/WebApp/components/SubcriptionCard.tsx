import React from "react"
import Image from "next/image"
import arrow from "@/public/images/homepage/Arrow.png"
import termwardBack from "@/public/images/homepage/db8ea4379f48b0bd833ddd83078abae6.png"
import background from "@/public/images/homepage/d20c90509061782c2cbc21e06ccf4ce1.png"
import Link from "next/link"

const SubScriptionCard = () => {
  return (
    <Link
      className="order-[2] lg:order-4 w-full md:w-[calc(50%-20px)] p-[24px] pb-[48px] md:min-h-[194px] rounded-[24px] flex bg-PrimaryBlack active:opacity-85 
      transition-all relative overflow-hidden"
      href={""}
    >
      <p className="text-white text-[1.5rem] lg:text-[2rem] leading-8 font-cygre font-medium">
        Активировать
        <br /> Подписку
      </p>
      <Image
        src={termwardBack}
        className="rounded-[24px] opacity-10 left-0 top-0 w-full absolute h-full"
        alt={""}
      />
      <Image
        src={background}
        className="rounded-[24px] right-0 bottom-[-13vh] absolute z-1000 mt-[1vh] ml-[6.4vw] opacity-100"
        alt={""}
      />
      <div className="rounded-[50%] w-[36px] h-[36px] md:w-[48px] md:h-[48px] bg-[#e8e8e8] right-0 top-0 m-[5%] absolute flex items-center justify-center">
        <Image src={arrow} alt={""} className="w-1/3 h-1/3" />
      </div>
    </Link>
  )
}

export default SubScriptionCard
