import React from "react"
import HeaderButtonsLayout from "./HeaderButtonsLayout"

interface HeaderProps {
  title: string
  text: string
}

const HeaderLayout = ({ title, text }: HeaderProps) => {
  return (
    <div
      className="flex flex-col-reverse gap-y-4
     lg:flex-row justify-between"
    >
      <div className="flex flex-col gap-x-2 gap-y-4 max-w-[90%]">
        <h2 className="text-[1.75rem] xl:text-[2rem] font-medium font-cygre">
          {title}
        </h2>
        <p className="text-[1.25rem] xl:text-[1.5rem] font-poppins font-regular">
          {text}
        </p>
      </div>
      <HeaderButtonsLayout></HeaderButtonsLayout>
    </div>
  )
}

export default HeaderLayout
