"use client"

import { FormEvent, useEffect, useState } from "react"

import Button from "@/components/Button/Button"
import { SignInYandexButton } from "@/components/organism/SignInYandexButton"
import { useModalStore } from "@/store/useRegistrationErrorModalStore"
import RegistrationErrorModal from "@/components/molecules/registration-page/RegistrationErrorModal"
import { registerUser } from "@/package/api/auth/create-user"

import FormBottomLink from "@/components/molecules/FormBottomLink"
import InputField from "@/components/input/InputField"
import FormTitle from "@/components/molecules/FormTitle"

function RegistrationForm() {
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [agreeToTerms, setAgreeToTerms] = useState(false)

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  })

  const { showErrorModal, openErrorModal, closeErrorModal } = useModalStore()

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  useEffect(() => {
    setErrors({
      name:
        name.trim().length === 0 ? "Введите имя" : name.trim().length < 2 ? "Имя должно быть минимум 2 символа" : "",
      email: email.trim().length === 0 ? "Введите email" : !validateEmail(email) ? "Неверный формат email" : "",
      password:
        password.length === 0 ? "Введите пароль" : password.length < 6 ? "Пароль должен быть минимум 6 символов" : "",
      confirmPassword:
        confirmPassword.length === 0 ? "Подтвердите пароль" : confirmPassword !== password ? "Пароли не совпадают" : ""
    })
  }, [name, email, password, confirmPassword])

  const isFormValid = !errors.name && !errors.email && !errors.password && !errors.confirmPassword && agreeToTerms

  useEffect(() => {
    if (showErrorModal) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [showErrorModal])

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!isFormValid) {
      openErrorModal()
      return
    }

    const userData = await registerUser({ email, name, password })
    if (userData.success) {
      window.location.href = "/WebApp"
    } else {
      alert("Ошибка регистрации")
    }
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-[85vw] md:w-[55vw] lg:w-[518px] py-[3vh] px-[3vw] xl:px-[2vw]
      bg-white rounded-[24px] gap-[12px] md:gap-[18px] lg:gap-[24px] z-[1000] text-PrimaryBlack"
      >
        <FormTitle
          title={
            <>
              Добро пожаловать <br /> в TermCat
            </>
          }
          description={
            <>
              Зарегистрируйтесь, чтобы использовать <br /> инновационный CAt Toolls инструмент
            </>
          }
        />

        <SignInYandexButton disabled />

        <div className="flex flex-col gap-[12px] md:gap-[18px] lg:gap-[24px] px-[2vw] xl:px-[0vw]">
          <InputField
            placeholder="Введите имя"
            label="Имя"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <InputField
            placeholder="Введите почту"
            label="E-mail"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <div className="flex flex-col w-full gap-[6px]">
            <InputField
              placeholder="Введите пароль"
              label="Пароль"
              type="password"
              hide
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <InputField
              placeholder="Повторите пароль"
              label=""
              type="password"
              hide
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <div className="flex gap-x-2 w-full items-start xl:items-center">
            <input
              onChange={(e) => setAgreeToTerms(e.target.checked)}
              checked={agreeToTerms}
              type="checkbox"
              className="w-[18px] h-[18px] lg:w-[24px] lg:h-[24px] border-[#a1a1a1] accent-[#C2F041] cursor-pointer"
            />
            <p className="text-[#a1a1a1] text-[12px] xl:text-[14px]">Я соглашаюсь на обработку персональных данных</p>
          </div>

          <Button variant="submit" disabled={!agreeToTerms}>
            Зарегистрироваться
          </Button>

          <FormBottomLink move={"Войти"} href={"/login"} question={"Уже есть аккаунт?"} />
        </div>
      </form>

      {showErrorModal && <RegistrationErrorModal onClose={() => closeErrorModal()} />}
    </>
  )
}

export default RegistrationForm
