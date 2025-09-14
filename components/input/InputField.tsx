"use client"

import React, { useState } from "react"
import Image from "next/image"
import eye from "@/public/images/auth/eye.png"
import Button from "@/components/atoms/button/Button"

interface InputFieldProps {
  label: string
  type: string
  placeholder?: string
  disabled?: boolean
  hide?: boolean
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const InputField = ({ label, type, placeholder, disabled = false, hide, value, onChange }: InputFieldProps) => {
  const [showPassword, setShowPassword] = useState(false)
  const inputType = hide ? (showPassword ? "text" : "password") : type

  function handleShowPassword() {
    setShowPassword((prev) => !prev)
  }

  return (
    <div className={`flex flex-col w-full ${disabled ? "opacity-50 pointer-events-none" : ""}`}>
      <label className="text-Gray02 text-[12px] md:text-[14px]">{label}</label>
      <div className="inline-block relative mt-1">
        <input
          value={value}
          onChange={onChange}
          style={{ WebkitTextSizeAdjust: "100%", textSizeAdjust: "100%" }}
          type={inputType}
          placeholder={placeholder}
          disabled={disabled}
          className="border placeholder:text-Gray02 border-Gray02 px-4 py-3 md:px-6 w-full rounded-full focus:border-PrimaryGreen focus:ring-2
            focus:ring-PrimaryGreen outline-none transition-colors placeholder:text-base"
        />
        {hide && (
          <Button onClick={handleShowPassword} className="absolute right-2 top-0" type="button" variant="image">
            <Image src={eye} alt="Показать пароль" className="scale-50" />
          </Button>
        )}
      </div>
    </div>
  )
}

export default InputField
