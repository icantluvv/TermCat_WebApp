import Link from "next/link"
import React from "react"
import Image from "next/image"
import lightning from "@/public/images/header/lightning.svg"
import nav_logo from "@/public/images/sidebar/nav_logo.svg"

const HeaderButtonsLayout = () => {
  return (
    <>
      {/* pc header */}
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

      {/* mobile header */}

      <div className="h-[48px] w-full justify-between flex xl:hidden gap-x-4">
        <Link
          href={"/"}
          className="rounded-[50%] bg-black w-[36px] h-[36px] flex items-center justify-center"
        >
          <Image src={nav_logo} className="w-[75%]" alt={""}></Image>
        </Link>
        <Link
          href={"/profile"}
          className="rounded-[50%] w-[36px] h-[36px] bg-[#c2f041]"
        ></Link>
      </div>
    </>
  )
}

export default HeaderButtonsLayout
