"use client"
import React, { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import SignInYandexButton from "@/app/(auth)/components/SignInYandexButton"
import eye from "@/public/images/auth/eye.png"
import { AuthService } from "@/lib/services/auth.service"
import Button from "@/components/Button/Button"
import Link from "next/link"

const SignUpForm = () => {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [agreeToTerms, setAgreeToTerms] = useState(false)

  const handleSubmit = async () => {
    const register = await AuthService.getInstance().signup({
      email,
      password,
      name
    })
    if (register) {
      router.push("/WebApp")
    } else {
      alert("Ошибка регистрации")
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col w-[85vw] md:w-[55vw] lg:w-[518px] py-[3vh] px-[3vw] xl:px-[2vw]
      bg-white rounded-[24px] gap-[12px] md:gap-[18px] lg:gap-[24px] z-[1000] text-PrimaryBlack"
    >
      <div className="flex flex-col items-center w-full text-center mt-[3vh] gap-[12px] md:gap-[18px] lg:gap-[40px]">
        <h3 className="text-[24px] lg:text-[42px] font-medium leading-tight">
          Добро пожаловать <br />в TermCat
        </h3>
        <p className="text-[12px] lg:text-[14px] text-Gray02 ">
          Зарегистрируйтесь, чтобы использовать <br /> инновационный CAt Toolls
          инструмент
        </p>
      </div>

      <div className="w-full flex justify-center opacity-30">
        <SignInYandexButton />
      </div>

      <div className="flex flex-col gap-[12px] md:gap-[18px] lg:gap-[24px] px-[2vw] xl:px-[0vw]">
        <div className="flex flex-col w-full gap-[6px]">
          <label className="text-[#a1a1a1] text-[12px] md:text-[14px]">
            Имя
          </label>
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="email"
            placeholder="Введите почту"
            className="border border-Gray02 px-[18px] py-[12px] md:px-[24px] rounded-full focus:border-PrimaryGreen focus:ring-2
          focus:ring-PrimaryGreen outline-none transition-colors placeholder:text-[14px] md:placeholder:text-[16px]"
          />
        </div>

        <div className="flex flex-col w-full gap-[6px]">
          <label className="text-[#a1a1a1] text-[12px] md:text-[14px]">
            E-mail
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Введите почту"
            className="border border-Gray02 px-[18px] py-[12px] md:px-[24px] rounded-full focus:border-PrimaryGreen focus:ring-2
          focus:ring-PrimaryGreen outline-none transition-colors placeholder:text-[14px] md:placeholder:text-[16px]"
          />
        </div>

        <div className="flex flex-col w-full gap-[6px]">
          <label className="text-[#a1a1a1] text-[12px] md:text-[14px]">
            Пароль
          </label>
          <div className="relative w-full flex">
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type={showPassword ? "text" : "password"}
              placeholder="Введите пароль"
              className="border border-Gray02 px-[18px] py-[12px] md:px-[24px]  w-full rounded-full focus:border-PrimaryGreen focus:ring-2 
            focus:ring-PrimaryGreen outline-none transition-colors placeholder:text-[14px] md:placeholder:text-[16px]"
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2"
            >
              <Image src={eye} alt="eye" className="scale-50" />
            </button>
          </div>

          <div className="relative w-full flex mt-[1vh]">
            <input
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
              type={showPassword ? "text" : "password"}
              placeholder="Повторите пароль"
              className="border border-Gray02 px-[18px] py-[12px] md:px-[24px]  w-full rounded-full focus:border-PrimaryGreen focus:ring-2 
            focus:ring-PrimaryGreen outline-none transition-colors placeholder:text-[14px] md:placeholder:text-[16px]"
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

        <div className="flex gap-x-2 w-full items-start xl:items-center">
          <input
            onChange={(e) => setAgreeToTerms(e.target.checked)}
            checked={agreeToTerms}
            type="checkbox"
            className="w-[18px] h-[18px] lg:w-[24px] lg:h-[24px] border-[#a1a1a1] accent-[#C2F041] cursor-pointer"
          />
          <p className="text-[#a1a1a1] text-[12px] xl:text-[14px]">
            Я соглашаюсь на обработку персональных данных
          </p>
        </div>

        <Button variant="submit" text="Зарегистрироваться" />

        <div className="flex gap-[6px] items-center mt-[1vh] justify-center">
          <p className="text-Gray02 text-[12px] md:text-[14px]">
            Уже есть аккаунт?
          </p>
          <Link
            href={"/login"}
            className="font-medium text-[14px] md:text-[16px]"
          >
            Войти
          </Link>
        </div>
      </div>
    </form>
  )
}
export default SignUpForm
