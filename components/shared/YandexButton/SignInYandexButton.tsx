"use client"

import yandex from "@/public/images/auth/yandex.png"
import Image from "next/image"

const SignInYandexButton = () => {
  return (
    <div
      className="pl-[12px] pr-[18px] py-[8px] lg:pl-[18px] lg:pr-[24px] lg:py-[12px] bg-black text-white rounded-full 
    gap-[6px] lg:gap-[6px] flex items-center justify-center text-[14px] lg:text-[16px] select-none"
    >
      <Image
        src={yandex}
        className="w-[24px] lg:w-[36px]"
        alt={"yandex"}
      ></Image>
      Яндекс ID
    </div>
  )
}

export default SignInYandexButton
