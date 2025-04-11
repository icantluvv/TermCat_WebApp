import { useRouter } from "next/navigation"
import { useState } from "react"
import SignInYandexButton from "../../components/SignInYandexButton"
import Image from "next/image"
import { AuthService } from "@/lib/services/auth.service"
import eye from "@/public/images/auth/eye.png"

const PcLoginForm = () => {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <div className="hidden lg:flex flex-col bg-white rounded-[24px] pb-[20px] 2xl:pb-[40px] pt-[40px] 2xl:pt-[80px] max-w-[520px] px-[40px] items-center z-[5000] gap-y-4">
      <div className="flex-col flex w-full gap-y-3">
        <h1 className="text-center text-[2.625rem] font-cygre font-medium leading-snug">
          Добро пожаловать <br />в TermCat
        </h1>
        <p className="text-center text-[1.125rem] text-[#a1a1a1] leading-snug">
          Войдите в аккаунт, чтобы использовать <br /> инновационный CAT Tools
          инструмент
        </p>
      </div>

      <SignInYandexButton />

      <div className="flex flex-col gap-y-2 w-full">
        <label className="text-[#a1a1a1] text-[0.875rem]">E-mail</label>
        <input
          type="email"
          placeholder="Введите почту"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-[#a1a1a1] px-[28px] rounded-[24px] h-[48px] 
  focus:border-[#C2F041] focus:ring-2 focus:ring-[#C2F041] outline-none transition-colors"
        />
      </div>
      <div className="flex flex-col gap-y-2 w-full">
        <label className="text-[#a1a1a1] text-[0.875rem]">Пароль</label>
        <div className="relative w-full flex">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Введите пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
          type="checkbox"
          className="w-[24px] h-[24px] border-[#a1a1a1] accent-[#C2F041] cursor-pointer"
        />
        <p className="text-[#a1a1a1] text-[0.875rem]">Запомнить меня</p>
      </div>

      <button
        onClick={async () => {
          const success = await AuthService.getInstance().login({
            email,
            password
          })
          if (success) {
            router.push("/app/home")
          } else {
            alert("Неверный логин или пароль")
          }
        }}
        className="text-black bg-[#E8E8E8] hover:bg-[#C2F041]
        rounded-[24px] w-full h-[48px] flex items-center justify-center transition-colors"
      >
        <p className="w-full h-[48px] active:bg-black/10 bg-transparent rounded-[24px] flex items-center justify-center transition-colors">
          Войти
        </p>
      </button>

      <div className="flex flex-col items-center gap-y-2">
        <div className="flex gap-x-1">
          <p className="text-[#a1a1a1]">Забыли пароль?</p>
          <button className="text-[#0c0c0c] font-semibold">
            Обновите пароль
          </button>
        </div>
        <div className="flex gap-x-1">
          <p className="text-[#a1a1a1]">У вас нет аккаунта? </p>
          <button
            onClick={() => router.push("/signup")}
            className="text-[#0c0c0c] font-semibold"
          >
            Создать бесплатный аккаунт
          </button>
        </div>
      </div>
    </div>
  )
}
export default PcLoginForm
