import React from "react"
import Image from "next/image"
import arrow from "@/public/images/homepage/Arrow.png"
import termwardBack from "@/public/images/homepage/db8ea4379f48b0bd833ddd83078abae6.png"

import background from "@/public/images/homepage/d20c90509061782c2cbc21e06ccf4ce1.png"
import Link from "next/link"

const SubScriptionCard = () => {
  return (
    <>
      {/* pc card */}
      <Link
        className="rounded-[24px] w-[48%] bg-[#0c0c0c] hidden xl:flex hover:opacity-85 transition-all relative overflow-hidden "
        href={""}
      >
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
      </Link>

      {/* mobile and laptop card */}

      <Link
        className="rounded-[24px] w-full bg-[#0c0c0c] flex xl:hidden py-[3vh] px-8 hover:opacity-85 transition-all relative overflow-hidden "
        href={""}
      >
        <p className="text-white text-[30px] flex flex-col text-start h-full leading-10 ">
          Активировать
          <br /> подписку
        </p>
        <Image
          src={background}
          className="rounded-[24px] opacity-50 right-0 bottom-[-13vh] absolute z-1000 mt-[1vh] ml-[6.4vw] opacity-100"
          alt={""}
        />
        <div className="rounded-[50%] w-[48px] h-[48px] bg-[#e8e8e8] right-0 top-0 m-4 absolute flex items-center justify-center">
          <Image src={arrow} alt={""} className="w-1/3 h-1/3"></Image>
        </div>
      </Link>
    </>
  )
}

export default SubScriptionCard
