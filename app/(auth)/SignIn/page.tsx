"use client"

import Image from "next/image"
import React, { useState } from "react"
import back from "@/public/images/auth/back.png"

const SignIn = () => {
  return (
    <main className="w-full h-screen flex flex-col items-center justify-center relative bg-[#e8e8e8]">
      <SignInForm />
      <Image
        src={back}
        alt=""
        className="w-full h-full top-0 left-0 absolute opacity-30"
      />
    </main>
  )
}
export default SignIn

import yandex from "@/public/images/auth/yandex.png"
const YandexButton = () => {
  return (
    <button className="h-[48px] pl-[18px] pr-[24px] bg-black text-white rounded-[24px] flex items-center text-nowrap gap-x-2">
      <Image src={yandex} className="w-[36px]" alt={"yandex"}></Image>
      <p>Войти с Яндекс ID</p>
    </button>
  )
}

import { useRouter } from "next/navigation"
import eye from "@/public/images/auth/eye.png"
const SignInForm = () => {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)

  return (
    <form
      action=""
      className="flex flex-col w-1/3 bg-white rounded-[24px] pb-[40px] pt-[80px] max-w-[520px] px-[40px] items-center z-[5000] gap-y-6"
    >
      <div className="flex-col flex w-full gap-y-6">
        <h1 className="text-center text-[2.625rem] font-cygre font-medium leading-snug">
          Добро пожаловать <br />в TermCat
        </h1>
        <p className="text-center text-[1.125rem] text-[#a1a1a1] leading-snug">
          Войдите в аккаунт, чтобы использовать <br /> инновационный CAT Tools
          инструмент
        </p>
      </div>

      <YandexButton />

      <div className="flex flex-col gap-y-2 w-full">
        <label className="text-[#a1a1a1] text-[0.875rem]">E-mail</label>
        <input
          type="email"
          placeholder="Введите почту"
          className="border border-[#a1a1a1] px-[28px] rounded-[24px] h-[48px]"
        />
      </div>
      <div className="flex flex-col gap-y-2 w-full">
        <label className="text-[#a1a1a1] text-[0.875rem]">Пароль</label>
        <div className="relative w-full flex">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Введите пароль"
            className="border border-[#a1a1a1] px-[28px] w-full rounded-[24px] h-[48px]"
          />
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2"
          >
            <Image src={eye} alt="eye" className="scale-50" />
          </button>
        </div>
      </div>
      <div className="flex gap-x-2 w-full items-center">
        <input type="checkbox" className="border-[#a1a1a1] w-[24px] h-[24px]" />
        <p className="text-[#a1a1a1] text-[0.875rem]">Запомнить меня</p>
      </div>
      <button className="text-black bg-[#E8E8E8] border-[24px] rounded-[24px] w-full h-[48px] flex items-center justify-center">
        Войти
      </button>
      <div className="flex gap-x-1">
        <p className="text-[#a1a1a1]">У вас нет аккаунта? </p>
        <button
          onClick={() => router.push("/SignUp")}
          className="text-[#0c0c0c] font-semibold"
        >
          Создать бесплатный аккаунт
        </button>
      </div>
    </form>
  )
}
