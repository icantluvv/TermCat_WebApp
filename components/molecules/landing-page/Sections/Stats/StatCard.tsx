"use client"
import Image from "next/image"
import stat_back_mobile from "@/public/images/landing/stats/stat_back_mobile.svg"
import arrow from "@/public/images/landing/arrow.svg"
import { useState } from "react"

const StatCard = ({ item }: InfoCardProps) => {
  return (
    <>
      <MobileStatCard item={item} />
    </>
  )
}

export default StatCard

const MobileStatCard = ({ item }: InfoCardProps) => {
  const [active, setActive] = useState(false)
  return (
    <div
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      className="relative flex flex-col items-center text-PrimaryBlack select-none justify-center xl:scale-90 2xl:scale-100"
    >
      {/* paper bg */}
      <Image
        src={stat_back_mobile}
        alt="background"
        objectFit="cover"
        className="absolute w-[280px] h-[340px] xl:w-[280px] xl:h-[340px] 2xl:w-[308px] 2xl:h-[374px]"
      />

      {/* form */}
      <svg className="w-[222px] h-[277px] xl:w-[280px] xl:h-[340px] 2xl:w-[308px] 2xl:h-[374px] flex">
        {/* mobile and table */}
        <path
          className="bg-price-card xl:hidden"
          d="M222 24C222 10.7452 211.255 0 198 0H24C10.7452 0 0 10.7452 0 24V253C0 266.255 10.7452 277 24 
        277H152C164.703 277 175 266.703 175 254V254C175 240.745 185.745 230 199 230V230C211.703 230 222 219.703 222 207V24Z"
          fill="#e8e8e8"
        />

        {/* laptop */}
        <path
          className="transition-colors duration-300 bg-price-card hidden xl:flex 2xl:hidden"
          d="
    M280 30C280 13.4315 266.569 0 250 0H30C13.4315 0 0 13.4315 0 30V310C0 326.569 13.4315 340 30 340H192C208.568 340 222 326.568 222 310
    C222 293.431 235.431 280 252 280C268.568 280 280 266.568 280 250V30Z"
          fill={`${active ? "#c2f041" : "#e8e8e8"}`}
        />

        {/* pc */}
        <path
          className="transition-colors duration-300 bg-price-card hidden 2xl:flex"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M308 26.4C308 11.8197 296.18 0 281.6 0H26.4C11.8197 0 0 11.8197 0 26.4V347.6C0 362.18 11.8197 374 26.4 374H216.7C231.28 374 243.1 362.18 243.1 347.6V345.4C243.1 325.352 259.352 309.1 279.4 309.1H281.6C296.18 309.1 308 297.28 308 282.7V26.4Z"
          fill={`${active ? "#c2f041" : "#e8e8e8"}`}
        />
      </svg>

      {/* facts */}
      <div className="absolute w-[222px] h-[277px] xl:w-[280px] xl:h-[340px] 2xl:w-[308px] 2xl:h-[374px] px-[4%] py-[9%] xl:px-[4%] xl:py-[7%] flex flex-col gap-[24px]">
        <div
          className="top-[8%] left-[5%] xl:top-0 xl:left-0 w-[36px] h-[36px] xl:w-[48px] xl:h-[48px] rounded-full border-[1.5px]
           border-PrimaryBlack flex items-center justify-center text-[14px] xl:text-[16px] font-medium font-cygre"
        >
          {item.id.toString().padStart(2, "0")}
        </div>

        <div className="flex flex-col gap-[6px]">
          <p className="text-[14px] xl:text-[16px]">{item.middleText}</p>

          <h3 className="text-[42px] xl:text-[64px] font-bold">
            {item.bigText}
          </h3>

          <div className="flex items-center gap-[5px] xl:gap-[10px]">
            {item.extraContent}
            <p className="text-[14px] xl:text-[16px]">{item.smallText}</p>
          </div>
        </div>

        {/* arrow button */}
        <button
          className={`rounded-full w-[36px] h-[36px] xl:w-[48px] xl:h-[48px] bg-LightGray absolute right-0 bottom-0 flex items-center
             justify-center ${active ? "xl:bg-PrimaryGreen" : "bg-LightGray"}`}
        >
          <Image src={arrow} className="w-[19px] xl:w-[22px]" alt={""}></Image>
        </button>
      </div>
    </div>
  )
}
