import React from "react"

interface InputFieldProps {
  label: string
  type: string
  placeholder?: string
  disabled?: boolean
}

const InputField = ({
  label,
  type,
  placeholder,
  disabled = false
}: InputFieldProps) => (
  <div
    className={`flex flex-col w-full ${
      disabled ? "opacity-50 pointer-events-none" : ""
    }`}
  >
    <label className="text-Gray02 mb-2 text-[12px] xl:text-[14px] font-poppins select-none">
      {label}
    </label>
    <input
      style={{ WebkitTextSizeAdjust: "100%", textSizeAdjust: "100%" }}
      type={type}
      defaultValue={placeholder}
      disabled={disabled}
      className="px-[18px] py-[12px] xl:px-[28px] xl:py-[16px] rounded-[24px] bg-transparent border border-Gray02 font-poppins font-reg text-[16px] focus:outline-none"
    />
  </div>
)

export default InputField
