import React from "react"

const InputField = ({ label, type, placeholder }: InputFieldProps) => (
  <div className="flex flex-col w-full">
    <label className="text-[#A2A9B0] mb-2 text-[0.875rem] lg:text-[1rem] font-poppins select-none">
      {label}
    </label>
    <input
      type={type}
      className="px-[28px] py-[1rem] rounded-[24px] bg-transparent border border-[#A1A1A1] font-poppins font-reg text-[0.875rem] lg:text-[1rem]"
    />
  </div>
)

export default InputField
