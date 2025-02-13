import Link from "next/link"
import Image from "next/image"
import React from "react"

import background from "@/public/images/homepage/first_back.png"
import AI from "@/public/images/homepage/AI.svg"
const ChatCard = () => {
  return (
    <Link
      className="rounded-[24px] w-1/2 flex text-white hover:opacity-85 transition-all relative overflow-hidden"
      href={"/chat"}
    >
      <div className="w-full px-8 py-10 z-[1000]">
        <h3 className="text-[2.625rem] leading-[120%]">
          Чат для перевода <br />
          терминов
        </h3>
      </div>

      <Image src={background} className="absolute h-full" alt={""}></Image>
      <Image src={AI} className="absolute left-0 bottom-0" alt={""}></Image>
    </Link>
  )
}

export default ChatCard
