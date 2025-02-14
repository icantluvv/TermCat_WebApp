import React from "react"
import HeaderButtonsLayout from "./HeaderButtonsLayout"

const HeaderLayout = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row justify-between">
      <div className="flex flex-col gap-2">
        <h2 className="text-[34px] xl:text-[3rem]">Привет, Тимофей!</h2>
        <p className="text-[24px] xl:text-[1.5rem]">
          Начни редактировать проект прямо сейчас
        </p>
      </div>
      <HeaderButtonsLayout></HeaderButtonsLayout>
    </div>
  )
}

export default HeaderLayout
