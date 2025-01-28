import Link from "next/link"
import Image from "next/image"
import React from "react"

import background from "@/public/images/homepage/db8ea4379f48b0bd833ddd83078abae6.png"
import AI from "@/public/images/homepage/AI.svg"
const ChatCard = () => {
  return (
    <Link
      className="rounded-[24px] w-1/2 bg-[#0c0c0c] h-[334px] flex text-white hover:opacity-50 transition-all relative overflow-hidden"
      href={"/chat"}
    >
      <div className="w-full px-8 py-10">
        <h3 className="text-[2.625rem] ">
          Чат для перевода <br />
          терминов
        </h3>
      </div>

      <Image
        src={background}
        className="absolute opacity-10 w-full h-full"
        alt={""}
      ></Image>
      <Image src={AI} className="absolute left-0 bottom-0" alt={""}></Image>
    </Link>
  )
}

export default ChatCard
