import Image from "next/image"
import Link from "next/link"
import React from "react"
import nav_logo from "@/public/images/sidebar/nav_logo.svg"

const MobileHeaderButtons = () => {
  return (
    <div className="h-[48px] w-full justify-between flex md:hidden gap-x-4">
      <Link
        href={"/"}
        className="rounded-[50%] bg-black w-[36px] h-[36px] flex items-center justify-center"
      >
        <Image src={nav_logo} className="w-[75%]" alt={""}></Image>
      </Link>
      <Link
        href={"/app/profile"}
        className="rounded-[50%] w-[36px] h-[36px] bg-[#c2f041]"
      ></Link>
    </div>
  )
}

export default MobileHeaderButtons
