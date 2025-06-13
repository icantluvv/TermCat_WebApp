"use client"
import Button from "@/components/Button/Button"
import Image from "next/image"
import SignInYandexButton from "../../components/SignInYandexButton"
import { useState } from "react"
import { AuthService } from "@/lib/services/auth.service"
import eye from "@/public/images/auth/eye.png"
import Link from "next/link"

const LogInForm = () => {
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
    <form
      onSubmit={handleSubmit}
      className="flex flex-col w-[85vw] md:w-[55vw] lg:w-auto lg:max-w-[518px] py-[3vh] px-[3vw] 
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

      <div className="flex flex-col gap-[12px] md:gap-[18px] lg:gap-[24px] px-[2vw] xl:px-[1vw]">
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

        {/* <label className="flex items-center gap-[6px] w-full">
        <input
          type="checkbox"
          className="w-[18px] h-[18px] border-[#a1a1a1] accent-[#C2F041] cursor-pointer"
        />
        <span className="text-Gray02 text-[12px]">Запомнить меня</span>
      </label> */}

        <div className="w-full mt-[1vh]">
          <Button variant="submit" text="Войти" />
        </div>

        <div className="flex flex-col items-center">
          {/* <div className="flex gap-x-1">
          <p className="text-Gray02 text-[12px]">Забыли пароль?</p>
          <Button variant="text" text="Обновите пароль"></Button>
        </div> */}
          <div className="flex flex-col gap-[3px] items-center">
            <p className="text-Gray02 text-[12px] md:text-[14px]">
              У вас нет аккаунта?
            </p>
            <Link
              href={"/signup"}
              className="font-medium text-[14px] md:text-[16px]"
            >
              Создать бесплатный аккаунт
            </Link>
          </div>
        </div>
      </div>
    </form>
  )
}
export default LogInForm
