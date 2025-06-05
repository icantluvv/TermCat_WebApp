import React from "react"
import Image from "next/image"
import instructionPicture from "@/public/images/homepage/8e7b61f79ac54e335c8c3cca63fa8ae0.png"
import arrow from "@/public/images/homepage/Arrow.png"
import termwardBack from "@/public/images/homepage/db8ea4379f48b0bd833ddd83078abae6.png"
import Link from "next/link"
import introduce_back_mobile from "@/public/images/homepage/introduce_back_mobile.svg"

const IntroduceCard = () => {
  return (
    <Link
      className="order-1 lg:order-[4] w-[calc(50%-6px)] p-[12px] md:p-[24px] lg:w-[calc(50%-20px)] md:min-h-[194px] rounded-[24px] flex bg-[#e8e8e8] 
      active:opacity-85 transition-all relative overflow-hidden"
      href={""}
    >
      <div className="text-black text-[1.125rem] md:text-[2rem] flex flex-col leading-6 font-cygre font-medium gap-y-4 z-[1000]">
        Смотреть
        <br /> инструкцию
        <span className="text-[0.75rem] font-poppins font-regular xl:flex hidden">
          по работе с Termcat
        </span>
      </div>
      <div className="rounded-[50%] w-[36px] md:w-[48px] h-[36px] md:h-[48px] bg-[#e8e8e8] right-0 top-0 m-[5%] absolute flex items-center justify-center z-[1000]">
        <Image src={arrow} alt={""} className="w-1/3 h-1/3"></Image>
      </div>
      <BackgroundPicture />
    </Link>
  )
}

export default IntroduceCard

const BackgroundPicture = () => {
  return (
    <>
      <Image
        src={termwardBack}
        alt={"termwardBack"}
        fill
        className="rounded-[24px] hidden lg:flex opacity-10 object-cover"
      />
      <Image
        src={instructionPicture}
        alt={"instructionPicture"}
        fill
        className="rounded-[24px] hidden lg:flex z-[1000] mt-[1vh] ml-[6.4vw] opacity-100 object-contain"
      />
      <Image
        src={introduce_back_mobile}
        alt={"introduce_back_mobile"}
        fill
        className="rounded-[24px] flex lg:hidden object-cover"
      />
    </>
  )
}
