import React from "react"

const TariffLayout = () => {
  return (
    <div className="flex gap-x-[3vw] xl:gap-x-[1vw] my-2 overflow-x-auto w-full text-[14px] xl:text-[16px] no-scrollbar font-cygre font-medium">
      <button className="bg-black text-nowrap rounded-[24px] text-white hover:opacity-50 py-3 px-[6vw] xl:px-[2vw] transition-all">
        Тариф Индивидуальный
      </button>
      <button className="bg-black text-nowrap rounded-[24px] text-white opacity-30 py-3 px-[6vw] xl:px-[2vw] hover:opacity-60 transition-all">
        Тариф Команда
      </button>
    </div>
  )
}

export default TariffLayout
