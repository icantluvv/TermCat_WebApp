import React from "react"
import Image from "next/image"
import instruction_back from "@/public/images/homepage/instruction_back.svg"
import arrow from "@/public/images/homepage/Arrow.png"
import Link from "next/link"
import introduce_back_mobile from "@/public/images/homepage/introduce_back_mobile.svg"

const IntroduceCard = ({ href }: CardProps) => {
  return (
    <Link
      className="order-1 xl:order-[4] w-[calc(50%-12px)] p-[12px] lg:p-[24px] md:w-[calc(50%-8px)]
      lg:w-[calc(50%-8px)] xl:w-[calc(50%-20px)] rounded-[24px] flex bg-[#e8e8e8] active:opacity-85 transition-all relative overflow-hidden"
      href={href}
    >
      <div className="text-black lex flex-col leading-6 xl:leading-8 font-cygre font-medium gap-[12px] z-[1000]">
        <h6 className="text-[1.125rem] xl:text-[2rem]">
          Смотреть
          <br /> инструкцию
        </h6>
        <span className="text-[0.75rem] font-poppins font-regular xl:flex hidden">
          по работе с Termcat
        </span>
      </div>
      <div className="rounded-[50%] w-[36px] lg:w-[48px] h-[36px] lg:h-[48px] bg-[#e8e8e8] right-0 top-0 m-[5%] absolute flex items-center justify-center z-[1000]">
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
        src={instruction_back}
        alt={"instruction_back"}
        fill
        objectFit="cover"
        className="xl:flex hidden"
      ></Image>

      <Image
        src={introduce_back_mobile}
        alt={"introduce_back_mobile"}
        fill
        className="rounded-[24px] flex xl:hidden object-cover"
      />
    </>
  )
}
