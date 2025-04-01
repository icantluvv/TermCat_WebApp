import Image from "next/image"
import Link from "next/link"
import React from "react"
import lightning from "@/public/images/header/lightning.svg"

const PcHeaderButtons = () => {
  return (
    <div className="h-[48px] hidden xl:flex gap-x-4">
      <button className="px-[28px] py-4 active:bg-activeGrayButton hover:bg-[#e8e8e8]/75 bg-grayButton rounded-[50px] h-[48px] items-center flex gap-2 transition-all">
        <Image src={lightning} alt={lightning}></Image>
        <p>Upgrade now</p>
      </button>
      <Link
        href={"/profile"}
        className="rounded-[50%] w-[48px] h-[48px] bg-[#c2f041]"
      ></Link>
    </div>
  )
}

export default PcHeaderButtons
