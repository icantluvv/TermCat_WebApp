"use client"

import Link from "next/link"
import { useState } from "react"
import Image from "next/image"

import { AuthService } from "@/lib/services/auth.service"
import SignInYandexButton from "../../../components/YandexButton/SignInYandexButton"
import Button from "@/components/Button/Button"
import eye from "@/public/images/auth/eye.png"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const success = await AuthService.getInstance().login({ email, password })
    if (success) {
      window.location.href = "/WebApp"
    } else {
      alert("Неверный логин или пароль")
    }
  }

  return (
    <main className="w-full flex flex-1 items-center justify-center relative bg-[#e8e8e8] lg:py-[10vh] xl:py-0">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-[85vw] md:w-[55vw] lg:w-[518px] py-[3vh] px-[3vw] xl:px-[2vw]
      bg-white rounded-[24px] gap-[12px] md:gap-[18px] lg:gap-[24px] z-[1000] text-PrimaryBlack"
      >
        <div className="flex flex-col items-center w-full text-center mt-[3vh] gap-[12px] md:gap-[18px] lg:gap-[40px]">
          <h3 className="text-[24px] lg:text-[42px] font-medium leading-tight">
            Добро пожаловать <br /> в TermCat
          </h3>
          <p className="text-[12px] lg:text-[14px] text-Gray02 ">
            Войдите в аккаунт, чтобы использовать <br /> инновационный CAT Tools
            инструмент
          </p>
        </div>

        <div className="w-full flex justify-center opacity-30">
          <SignInYandexButton />
        </div>

        <div className="flex flex-col gap-[12px] md:gap-[18px] lg:gap-[24px] px-[2vw] xl:px-[0vw]">
          <div className="flex flex-col w-full gap-[6px]">
            <label className="text-[#a1a1a1] text-[12px] md:text-[14px]">
              E-mail
            </label>
            <input
              type="email"
              placeholder="Введите почту"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-Gray02 px-[18px] py-[12px] md:px-[24px] rounded-full focus:border-PrimaryGreen focus:ring-2
          focus:ring-PrimaryGreen outline-none transition-colors placeholder:text-[14px] md:placeholder:text-[16px]"
            />
          </div>

          <div className="flex flex-col w-full gap-y-2">
            <label className="text-Gray02 text-[12px] md:text-[14px]">
              Пароль
            </label>
            <div className="relative flex w-full">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Введите пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border border-Gray02 px-[18px] py-[12px] md:px-[24px]  w-full rounded-full focus:border-PrimaryGreen focus:ring-2 
            focus:ring-PrimaryGreen outline-none transition-colors placeholder:text-[14px] md:placeholder:text-[16px]"
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2"
              >
                <Image src={eye} alt="Показать пароль" className="scale-50" />
              </button>
            </div>
          </div>

          <div className="w-full mt-[1vh]">
            <Button variant="submit" text="Войти" />
          </div>

          <div className="flex flex-col items-center">
            <div className="flex flex-col gap-[3px] items-center">
              <p className="text-Gray02 text-[12px] md:text-[14px]">
                У вас нет аккаунта?
              </p>
              <Link
                href={"/registration"}
                className="font-medium text-[14px] md:text-[16px]"
              >
                Создать бесплатный аккаунт
              </Link>
            </div>
          </div>
        </div>
      </form>
    </main>
  )
}
export default Login
