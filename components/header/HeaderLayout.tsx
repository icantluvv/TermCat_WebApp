import React from "react"
import PcHeaderButtons from "./PcHeaderButtons"
import MobileHeaderButtons from "./MobileHeaderButtons"

interface HeaderProps {
  title: string
  text: string
}

const HeaderLayout = ({ title, text }: HeaderProps) => {
  return (
    <header
      className="flex flex-col-reverse gap-y-4
     lg:flex-row justify-between mb-6"
    >
      <div className="flex flex-col gap-x-2 gap-y-4 max-w-[90%]">
        <h2 className="text-[1.75rem] xl:text-[3rem] font-medium font-cygre">
          {title}
        </h2>
        <p className="text-[1.25rem] xl:text-[1.5rem] font-poppins font-regular">
          {text}
        </p>
      </div>

      <PcHeaderButtons />
      <MobileHeaderButtons />
    </header>
  )
}

export default HeaderLayout
