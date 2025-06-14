const NotReadyPage = () => {
  return (
    <div className="flex flex-col h-full w-full bg-PageBG relative">
      <div className="flex flex-col p-[5%] lg:p-[10%] h-full w-full gap-[12px] lg:gap-[24px] z-[1000]">
        <h2 className="text-PrimaryBlack font-cygre text-[28px] xl:text-[42px] font-medium">
          Страница не доступна
        </h2>
        <p className="flex flex-col text-Gray02 text-[14px] xl:text-[16px]">
          В данный момент ведется разработка данной части веб-приложения TermCAT{" "}
          <br /> Приносим свои извинения
        </p>
      </div>
    </div>
  )
}

export default NotReadyPage
