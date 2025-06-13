import Link from "next/link"
import Image from "next/image"
import React from "react"
import background from "@/public/images/homepage/history_back.svg"
import arrow from "@/public/images/homepage/Arrow.png"
import folder from "@/public/images/homepage/clock.svg"
import elemetn_plus from "@/public/images/homepage/elements-plus.svg"
import mobile_back from "@/public/images/homepage/history_mobile_back.svg"

const HistoryCard = ({ href }: CardProps) => {
  return (
    <>
      <Link
        className=" rounded-[24px] flex-1 hidden xl:flex w-full bg-[#a1a1a1]/60 text-white px-8 py-10 active:opacity-90 
        select-none  relative overflow-hidden"
        href={href}
      >
        <div className="flex flex-col w-full h-full gap-6 items-center justify-between ">
          <div className="flex justify-between w-full z-[5000]">
            <h3 className="text-black font-medium text-[1.5rem] xl:text-[2rem] w-full font-cygre">
              История
            </h3>
            <div className="rounded-[50%] bg-[#e8e8e8] min-w-[48px] min-h-[48px] flex items-center justify-center">
              <Image src={arrow} className="w-1/3 h-1/3" alt={""}></Image>
            </div>
          </div>

          <div className="w-full relative flex bg-black rounded-[25px] z-[5000]">
            <div className="flex z-[1000] p-5 flex-col gap-[2vh]">
              <Image
                src={folder}
                alt={"history_icon"}
                className="w-[24px]"
              ></Image>
              <p className="text-[#e8e8e8] text-[1rem] xl:text-[1.125rem] max-w-[60%] flex-1 font-poppins font-medium">
                Следите за всеми вашими переводами
              </p>
              <p className="font-light text-[#a1a1a1] text-[0.625rem] xl:text-[0.75rem] font-poppins">
                Наша система сохраняет каждую вашу сессию
              </p>
            </div>
          </div>

          <div className="w-full justify-center items-end flex flex-1 z-[5000]">
            <button
              className="bg-[#e8e8e8] flex gap-2 text-black px-[16px] py-[8px] xl:px-[28px] xl:py-[12px] rounded-[32px] 
          font-cygre font-medium text-[0.875rem] xl:text-[1rem]"
            >
              <Image src={elemetn_plus} alt={""}></Image>
              Создать новый проект
            </button>
          </div>
        </div>
        <Image
          src={background}
          className="absolute z-[0]"
          alt={"history-background"}
          fill
          objectFit="cover"
        ></Image>
      </Link>
      <HistoryMobile href={href} />
    </>
  )
}

export default HistoryCard

const HistoryMobile = ({ href }: CardProps) => {
  return (
    <Link
      className="order-[2] md:order-[3] rounded-[24px] w-full bg-[#a1a1a1]/60 text-white p-[24px] 
      active:opacity-90 relative overflow-hidden xl:hidden"
      href={href}
    >
      <div className="flex flex-col w-full h-full gap-6 items-center justify-between ">
        <div className="flex justify-between w-full z-[5000]">
          <h3 className="text-black font-medium text-[1.5rem] xl:text-[2rem] w-full font-cygre">
            История
          </h3>
          <div className="rounded-[50%] bg-[#e8e8e8] min-w-[48px] min-h-[48px] flex items-center justify-center">
            <Image src={arrow} className="w-1/3 h-1/3" alt={""}></Image>
          </div>
        </div>

        <div className="w-full relative flex rounded-[25px] ">
          <Image
            src={mobile_back}
            alt={"mobile_back_history_card"}
            className="absolute"
          ></Image>

          <div className="flex z-[1000] p-5 flex-col gap-[2vh]">
            <Image
              src={folder}
              alt={"history_icon"}
              className="w-[24px]"
            ></Image>
            <p className="text-[#e8e8e8] text-[1rem] xl:text-[1.125rem] max-w-[60%] flex-1 font-poppins font-medium">
              Следите за всеми вашими переводами
            </p>
            <p className="font-light text-[#a1a1a1] text-[0.625rem] xl:text-[0.75rem] font-poppins">
              Наша система сохраняет каждую вашу сессию
            </p>
          </div>
        </div>

        <div className="w-full justify-center items-end flex flex-1 z-[5000]">
          <button
            className="bg-[#e8e8e8] flex gap-2 text-black px-[16px] py-[8px] xl:px-[28px] xl:py-[12px] rounded-[32px] 
        font-cygre font-medium text-[0.875rem] xl:text-[1rem]"
          >
            <Image src={elemetn_plus} alt={""}></Image>
            Создать новый проект
          </button>
        </div>
      </div>

      <Image
        src={background}
        className="absolute z-[0]"
        alt={"history-background"}
        fill
        objectFit="cover"
      ></Image>
    </Link>
  )
}
