"use client"

import yandex from "@/public/images/auth/yandex.png"
import Image from "next/image"

const SignInYandexButton = () => {
  return (
    <button className="h-[48px] pl-[18px] pr-[24px] bg-black text-white rounded-[24px] flex items-center justify-center text-nowrap gap-x-2">
      <Image src={yandex} className="w-[36px]" alt={"yandex"}></Image>
      <p>Войти с Яндекс ID</p>
    </button>
  )
}

export default SignInYandexButton
