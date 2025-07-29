const StepItem = ({ id, title, text, reverse = false }: StepItemProps) => (
  <div
    className={`w-[90vw] xl:w-full 2xl:w-[70%] flex h-1/4 ${
      reverse
        ? "md:justify-start justify-end"
        : "justify-start pl-[10vw] md:pl-0 md:justify-end"
    }`}
  >
    <div
      className={`flex gap-[20px] md:gap-[10px] lg:gap-[20px] w-full md:w-[43%] flex-col ${
        reverse ? "md:items-end md:text-end pl-[10vw] md:pl-0" : ""
      }`}
    >
      <div
        className="w-[48px] h-[48px] select-none text-[14px] lg:text-[16px]
        rounded-full bg-[#e8e8e8] border-2 border-[#c2f041] flex items-center justify-center text-thin font-cygre text-PrimaryBlack"
      >
        {id}
      </div>
      <div className="flex flex-col gap-[8px]">
        <h3 className="text-LightGray text-[22px] font-bold">{title}</h3>
        <p className="text-[16px] xl:text-[18px] text-Gray02 xl:max-w-[450px]">
          {text}
        </p>
      </div>
    </div>
  </div>
)

export default StepItem
