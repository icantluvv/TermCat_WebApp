import React from "react"

const InputField = ({ label, type, placeholder }: InputFieldProps) => (
  <div className="flex flex-col w-full">
    <label className="text-Gray02 mb-2 text-[12px] xl:text-[14px] font-poppins select-none">
      {label}
    </label>
    <input
      type={type}
      defaultValue={placeholder}
      className="px-[18px] py-[12px] xl:px-[28px] xl:py-[16px] rounded-[24px] bg-transparent border border-Gray02 font-poppins font-reg text-[14px] lg:text-[16px]"
    />
  </div>
)

export default InputField
