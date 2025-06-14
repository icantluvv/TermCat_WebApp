const TariffLayout = () => {
  const tariffs = [
    { label: "Тариф Индивидуальный", active: true },
    { label: "Тариф Команда", active: false }
  ]

  return (
    <div className="flex gap-x-[12px] overflow-x-auto w-full no-scrollbar">
      {tariffs.map(({ label, active }, i) => (
        <button
          key={i}
          className={`text-nowrap rounded-full px-[16px] py-[8px] xl:px-[28px] xl:py-[12px] text-[14px] xl:text-[16px] select-none ${
            active
              ? "bg-PrimaryBlack text-LightGray active:opacity-80"
              : "bg-PrimaryBlack text-LightGray opacity-30"
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  )
}

export default TariffLayout
