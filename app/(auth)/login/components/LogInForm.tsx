"use client"
import Button from "@/components/Button/Button"
import Image from "next/image"
import SignInYandexButton from "../../components/SignInYandexButton"
import { useState } from "react"
import { AuthService } from "@/lib/services/auth.service"
import { useRouter } from "next/navigation"
import eye from "@/public/images/auth/eye.png"

const LogInForm = () => {
  const router = useRouter()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const success = await AuthService.getInstance().login({ email, password })
    if (success) {
      router.push("/WebApp")
    } else {
      alert("Неверный логин или пароль")
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col  md:max-w-[520px] bg-white rounded-[24px] pt-[40px] 2xl:pt-[80px] pb-[20px] 2xl:pb-[40px] px-[40px] gap-y-4 z-[10] items-center"
    >
      <div className="flex flex-col w-full gap-y-3 text-center">
        <h1 className="text-[2.625rem] font-cygre font-medium leading-snug">
          Добро пожаловать <br /> в TermCat
        </h1>
        <p className="text-[1.125rem] text-[#a1a1a1] leading-snug">
          Войдите в аккаунт, чтобы использовать <br /> инновационный CAT Tools
          инструмент
        </p>
      </div>

      <SignInYandexButton />

      <div className="flex flex-col w-full gap-y-2">
        <label className="text-[#a1a1a1] text-[0.875rem]">E-mail</label>
        <input
          type="email"
          placeholder="Введите почту"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-[#a1a1a1] px-[28px] rounded-[24px] h-[48px] focus:border-[#C2F041] focus:ring-2 focus:ring-[#C2F041] outline-none transition-colors"
        />
      </div>
      <div className="flex flex-col w-full gap-y-2">
        <label className="text-[#a1a1a1] text-[0.875rem]">Пароль</label>
        <div className="relative flex w-full">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Введите пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-[#a1a1a1] px-[28px] w-full rounded-[24px] h-[48px] focus:border-[#C2F041] focus:ring-2 focus:ring-[#C2F041] outline-none transition-colors"
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
      <label className="flex items-center gap-x-2 w-full">
        <input
          type="checkbox"
          className="w-[24px] h-[24px] border-[#a1a1a1] accent-[#C2F041] cursor-pointer"
        />
        <span className="text-[#a1a1a1] text-[0.875rem]">Запомнить меня</span>
      </label>

      <div className="w-full">
        <Button variant="submit" text="Войти" />
      </div>

      <div className="flex flex-col items-center gap-y-2">
        <div className="flex gap-x-1">
          <p className="text-[#a1a1a1]">Забыли пароль?</p>
          <Button variant="text" text="Обновите пароль"></Button>
        </div>
        <div className="flex gap-x-1">
          <p className="text-[#a1a1a1]">У вас нет аккаунта?</p>
          <Button variant="text" text="Создать бесплатный аккаунт"></Button>
        </div>
      </div>
    </form>
  )
}
export default LogInForm
