import React from "react"

const TariffLayout = () => {
  const tariffs = [
    { label: "Тариф Индивидуальный", active: true },
    { label: "Тариф Команда", active: false }
  ]

  return (
    <div className="flex gap-x-3 overflow-x-auto w-full text-sm xl:text-base no-scrollbar font-cygre font-medium">
      {tariffs.map(({ label, active }, i) => (
        <button
          key={i}
          className={`text-nowrap rounded-[24px] px-[16px] py-[7px] xl:px-[28px] xl:py-[12px] transition-all text-[0.875rem] xl:text-[1rem] ${
            active
              ? "bg-black text-white active:opacity-50"
              : "bg-black text-white opacity-30"
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  )
}

export default TariffLayout
