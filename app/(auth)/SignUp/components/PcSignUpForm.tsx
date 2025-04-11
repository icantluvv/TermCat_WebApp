import React, { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import SignInYandexButton from "@/app/(auth)/components/SignInYandexButton"
import eye from "@/public/images/auth/eye.png"
import { AuthService } from "@/lib/services/auth.service"

const PcSignUpForm = () => {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [rememberMe, setRememberMe] = useState(false)
  const [agreeToTerms, setAgreeToTerms] = useState(false)

  const registerData = async () => {
    const register = await AuthService.getInstance().signup({
      email,
      password,
      name
    })
    if (register) {
      router.push("/app/home")
    } else {
      alert("Ошибка регистрации")
    }
  }

  return (
    <div className="hidden lg:flex my-[7.5vh] flex-col bg-white rounded-[24px] pb-[20px] 2xl:pb-[40px] pt-[40px] 2xl:pt-[80px] max-w-[520px] px-[40px] items-center z-[5000] gap-y-4">
      <div className="flex-col flex w-full">
        <h1 className="text-center text-[1.5rem] md:text-[2rem] font-cygre font-medium leading-snug">
          Добро пожаловать <br />в TermCat
        </h1>
        <p className="text-center text-[0.875rem] md:text-[1rem] text-[#a1a1a1] leading-snug">
          Зарегистрируйтесь, чтобы использовать <br /> инновационный CAt Toolls
          инструмент
        </p>
      </div>

      <SignInYandexButton />

      <div className="flex flex-col w-full">
        <label className="text-[#a1a1a1] text-[0.875rem]">Имя</label>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="email"
          placeholder="Введите почту"
          className="border border-[#a1a1a1] px-[28px] rounded-[24px] h-[48px] 
  focus:border-[#C2F041] focus:ring-2 focus:ring-[#C2F041] outline-none transition-colors"
        />
      </div>

      <div className="flex flex-col w-full">
        <label className="text-[#a1a1a1] text-[0.875rem]">E-mail</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Введите почту"
          className="border border-[#a1a1a1] px-[28px] rounded-[24px] h-[48px] 
  focus:border-[#C2F041] focus:ring-2 focus:ring-[#C2F041] outline-none transition-colors"
        />
      </div>

      <div className="flex flex-col gap-y-1 w-full">
        <label className="text-[#a1a1a1] text-[0.875rem]">Пароль</label>
        <div className="relative w-full flex">
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type={showPassword ? "text" : "password"}
            placeholder="Введите пароль"
            className="border border-[#a1a1a1] px-[28px] w-full rounded-[24px] h-[48px] 
  focus:border-[#C2F041] focus:ring-2 focus:ring-[#C2F041] outline-none transition-colors"
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

      <div className="flex flex-col gap-y-1 w-full">
        <label className="text-[#a1a1a1] text-[0.875rem]">
          Повторите пароль
        </label>
        <div className="relative w-full flex">
          <input
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
            type={showPassword ? "text" : "password"}
            placeholder="Повторите пароль"
            className="border border-[#a1a1a1] px-[28px] w-full rounded-[24px] h-[48px] 
  focus:border-[#C2F041] focus:ring-2 focus:ring-[#C2F041] outline-none transition-colors"
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
        <input
          onChange={(e) => setAgreeToTerms(e.target.checked)}
          checked={agreeToTerms}
          type="checkbox"
          className="w-[24px] h-[24px] border-[#a1a1a1] accent-[#C2F041] cursor-pointer"
        />
        <p className="text-[#a1a1a1] text-[0.875rem]">
          Я соглашаюсь на обработку персональных данных
        </p>
      </div>

      <div className="flex gap-x-2 w-full items-center">
        <input
          onChange={(e) => setRememberMe(e.target.checked)}
          checked={rememberMe}
          type="checkbox"
          className="w-[24px] h-[24px] border-[#a1a1a1] accent-[#C2F041] cursor-pointer"
        />
        <p className="text-[#a1a1a1] text-[0.875rem]">Запомнить меня</p>
      </div>

      <button
        onClick={() => registerData()}
        className="text-black bg-[#E8E8E8] hover:bg-[#C2F041]
        rounded-[24px] w-full h-[48px] flex items-center justify-center transition-colors"
      >
        <p className="w-full h-[48px] active:bg-black/10 bg-transparent rounded-[24px] flex items-center justify-center transition-colors">
          Зарегистрироваться
        </p>
      </button>

      <div className="flex gap-x-1">
        <p className="text-[#a1a1a1]">Уже есть аккаунт? </p>
        <button
          onClick={() => router.push("/SignIn")}
          className="text-[#0c0c0c] font-semibold"
        >
          Войти
        </button>
      </div>
    </div>
  )
}

export default PcSignUpForm
