import React from "react"
import Image from "next/image"
import instructionPicture from "@/public/images/homepage/8e7b61f79ac54e335c8c3cca63fa8ae0.png"
import arrow from "@/public/images/homepage/Arrow.png"
import termwardBack from "@/public/images/homepage/db8ea4379f48b0bd833ddd83078abae6.png"
import Link from "next/link"

const IntroduceCard = () => {
  return (
    <Link
      className="rounded-[24px] w-[48%] bg-[#e8e8e8] flex active:opacity-85 transition-all relative overflow-hidden "
      href={""}
    >
      <p className="text-black text-[18px] h-full xl:text-[2rem] flex flex-col py-[3vh] px-4 xl:px-10 leading-8 font-cygre font-medium gap-y-4">
        Смотреть
        <br /> инструкцию
        <span className="text-[0.75rem] font-poppins font-regular xl:block hidden">
          по работе с Termcat
        </span>
      </p>
      <Image
        src={termwardBack}
        className="rounded-[24px] opacity-10 w-full absolute h-full"
        alt={""}
      />
      <Image
        src={instructionPicture}
        className="rounded-[24px] absolute z-1000 mt-[1vh] ml-[6.4vw] opacity-100"
        alt={""}
      />
      <div className="rounded-[50%] w-[48px] h-[48px] bg-[#e8e8e8] right-0 m-10 absolute flex items-center justify-center">
        <Image src={arrow} alt={""} className="w-1/3 h-1/3"></Image>
      </div>
    </Link>
  )
}

export default IntroduceCard
