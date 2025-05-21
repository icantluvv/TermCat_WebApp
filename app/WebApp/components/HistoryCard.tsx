import Link from "next/link"
import Image from "next/image"
import React from "react"

import background from "@/public/images/homepage/history_back.png"
import arrow from "@/public/images/homepage/Arrow.png"
import folder from "@/public/images/homepage/clock.svg"
import elemetn_plus from "@/public/images/homepage/elements-plus.svg"

const HistoryCardDesktop = () => {
  return (
    <Link
      className="rounded-[24px] hidden xl:flex flex-1 md:w-[48%] xl:w-full bg-[#a1a1a1]/60 text-white px-8 py-10 hover:opacity-85 transition-all relative overflow-hidden"
      href={"/history"}
    >
      <Image
        src={background}
        className="absolute opacity-50 scale-[3.5] pb-[250px] pr-[57px] left-0 z-[0]"
        alt={""}
      ></Image>

      <div className="flex flex-col w-full h-full gap-6 items-center justify-between z-[1000]">
        <div className="flex justify-between w-full">
          <h3 className="text-black font-medium text-[2rem] w-full font-cygre">
            История
          </h3>
          <div className="rounded-[50%] bg-[#e8e8e8] min-w-[48px] min-h-[48px] flex items-center justify-center">
            <Image src={arrow} className="w-1/3 h-1/3" alt={""}></Image>
          </div>
        </div>

        <div className="w-full relative flex bg-black rounded-[25px]">
          <div className="flex z-[1000] p-5 flex-col gap-[2vh]">
            <Image
              src={folder}
              alt={"history_icon"}
              className="w-[24px]"
            ></Image>
            <p className="text-[#e8e8e8] text-[1.125rem] max-w-[60%] flex-1 font-poppins font-medium">
              Следите за всеми вашими переводами
            </p>
            <p className="font-light text-[#a1a1a1] text-[0.75rem] font-poppins">
              Наша система сохраняет каждую вашу сессию
            </p>
          </div>
        </div>

        <div className="w-full justify-center items-end flex flex-1 z-[5000]">
          <button className="bg-[#e8e8e8] flex gap-2 text-black px-[1.5vw] py-[1vh] rounded-[2vh] font-cygre font-medium text-[1rem]">
            <Image src={elemetn_plus} alt={""}></Image>
            Создать новый проект
          </button>
        </div>
      </div>
    </Link>
  )
}

const HistoryCardMobile = () => {
  return (
    <Link
      className="rounded-[24px] flex xl:hidden flex-1 md:w-[48%] xl:w-full bg-[#a1a1a1]/60 text-white p-[24px] hover:opacity-85 transition-all relative overflow-hidden"
      href={"/history"}
    >
      <Image
        src={background}
        className="absolute opacity-50 scale-[3.5] pb-[250px] pr-[57px] left-0 z-[0]"
        alt={""}
      ></Image>

      <div className="flex flex-col w-full h-full gap-6 items-center justify-between z-[1000]">
        <div className="flex justify-between w-full">
          <h3 className="text-black font-medium text-[1.5rem] w-full font-cygre">
            История
          </h3>
          <div className="rounded-[50%] bg-[#e8e8e8] min-w-[36px] h-[36px] flex items-center justify-center">
            <Image src={arrow} className="w-1/3 h-1/3" alt={""}></Image>
          </div>
        </div>

        <div className="w-full relative flex bg-black rounded-[25px]">
          <div className="flex z-[1000] p-5 flex-col gap-[2vh]">
            <Image
              src={folder}
              alt={"history_icon"}
              className="w-[24px]"
            ></Image>
            <p className="text-[#e8e8e8] text-[1rem] max-w-[60%] flex-1 font-poppins font-medium">
              Следите за всеми вашими переводами
            </p>
            <p className="font-light text-[#a1a1a1]  text-[0.625rem] font-poppins">
              Наша система сохраняет каждую вашу сессию
            </p>
          </div>
        </div>

        <div className="w-full justify-center items-end flex flex-1 z-[5000]">
          <button className="bg-[#e8e8e8] flex gap-2 text-black px-[16px] py-[8px] rounded-[32px] font-cygre font-medium text-[0.875rem]">
            <Image src={elemetn_plus} alt={""}></Image>
            Создать новый проект
          </button>
        </div>
      </div>
    </Link>
  )
}

const HistoryCard = () => {
  return (
    <>
      <HistoryCardDesktop />
      <HistoryCardMobile />
    </>
  )
}

export default HistoryCard
