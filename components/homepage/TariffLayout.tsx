import React from "react"

const TariffLayout = () => {
  return (
    <div className="flex gap-x-4 my-2 overflow-x-auto w-full no-scrollbar">
      <button className="bg-black text-nowrap rounded-[24px] text-white hover:opacity-50 py-2 px-5 transition-all">
        Тариф старт
      </button>
      <button className="bg-black text-nowrap rounded-[24px] text-white opacity-30 py-2 px-5 hover:opacity-60 transition-all">
        Тариф Продвинутый
      </button>
      <button className="bg-black text-nowrap rounded-[24px] text-white opacity-30 py-2 px-5 hover:opacity-60 transition-all">
        Тариф Команда
      </button>
    </div>
  )
}

export default TariffLayout
