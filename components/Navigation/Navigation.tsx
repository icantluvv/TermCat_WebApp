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
    <>
      <div className="w-[8%] hidden xl:flex fixed left-0 top-0 justify-end h-screen items-center">
        <nav className="flex flex-col bg-black h-[6vh] xl:h-[65vh] w-full rounded-t-[50px] xl:rounded-[50px] items-center py-[48px] max-w-[96px] flex-grow gap-x-6">
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

      <div className="w-full xl:hidden h-[6vh] fixed bottom-0 z-[5000]">
        <nav className="flex bg-black h-[6vh] w-full rounded-t-[50px] items-center">
          <div className="flex flex-1 gap-[10vw] justify-center">
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
        </nav>
      </div>
    </>
  )
}

export default Navigation
