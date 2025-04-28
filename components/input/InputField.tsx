import React from "react"

const InputField = ({ label, type, placeholder }: InputFieldProps) => (
  <div className="flex flex-col w-full">
    <label className="text-[#A2A9B0] mb-2 text-[0.875rem] font-poppins select-none">
      {label}
    </label>
    <input
      type={type}
      defaultValue={placeholder}
      className="px-[28px] py-[16px] rounded-[24px] bg-transparent border border-[#A1A1A1] font-poppins font-reg text-[0.875rem] lg:text-[1rem]"
    />
  </div>
)

export default InputField
