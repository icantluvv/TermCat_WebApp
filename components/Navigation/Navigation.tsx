import Link from "next/link"
import React from "react"
import Image from "next/image"

import nav_logo from "@/public/images/nav_logo.svg"
import home from "@/public/images/home.svg"
import profile from "@/public/images/profile.svg"
import chat from "@/public/images/chat.svg"
import folder from "@/public/images/folder.svg"
import quit from "@/public/images/quit.svg"

const Navigation = () => {
  return (
    <div className="w-[8%] fixed left-0 top-0 flex justify-end h-screen items-center">
      <nav className="flex flex-col bg-black h-[65vh] w-full rounded-[50px] items-center py-[48px] max-w-[96px] flex-grow">
        <Link href={"/"}>
          <Image
            src={nav_logo}
            width={48}
            height={48}
            alt={""}
            className="hover:opacity-70 transition-all"
          ></Image>
        </Link>

        <div className="flex flex-col flex-1 gap-y-[24px] justify-center">
          <Link href={"/"}>
            <Image
              src={home}
              width={48}
              height={48}
              className="hover:opacity-70 transition-all"
              alt={""}
            ></Image>
          </Link>
          <Link href={"/profile"}>
            <Image
              src={profile}
              width={48}
              height={48}
              className="hover:opacity-70 transition-all"
              alt={""}
            ></Image>
          </Link>
          <Link href={"/chat"}>
            <Image
              src={chat}
              width={48}
              height={48}
              className="hover:opacity-70 transition-all"
              alt={""}
            ></Image>
          </Link>
          <Link href={"/history"}>
            <Image
              src={folder}
              width={48}
              height={48}
              className="hover:opacity-70 transition-all"
              alt={""}
            ></Image>
          </Link>
        </div>

        <Link href={""}>
          <Image
            src={quit}
            width={48}
            height={48}
            className="hover:opacity-70 transition-all"
            alt={""}
          ></Image>
        </Link>
      </nav>
    </div>
  )
}

export default Navigation
