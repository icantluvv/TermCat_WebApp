import Link from "next/link"
import Image from "next/image"
import React from "react"

// import background from "@/public/images/homepage/first_back.png"
import background from "@/public/images/homepage/db8ea4379f48b0bd833ddd83078abae6.png"

import AI from "@/public/images/homepage/AI.svg"
const ChatCard = () => {
  return (
    <Link
      className="rounded-[24px] bg-[#0c0c0c] w-full md:w-[48%] flex text-white active:opacity-85 transition-all relative overflow-hidden"
      href={"/chat"}
    >
      <div className="w-full h-[22vh] py-6 px-8 xl:py-10 z-[1000]">
        <h3 className="text-[26px] xl:text-[2.625rem] leading-[120%] font-cygre font-medium">
          Чат для перевода <br />
          терминов
        </h3>
      </div>

      <Image
        src={background}
        className="absolute w-full h-full opacity-10"
        alt={""}
      ></Image>
      <Image
        src={AI}
        className="absolute left-0 bottom-0 w-[25%] xl:w-[30%]"
        alt={""}
      ></Image>
    </Link>
  )
}

export default ChatCard
