import TariffCard from "./TariffCard"

const TariffSection = () => {
  return (
    <section className="w-full flex flex-col items-center gap-y-[40px] lg:gap-y-[80px] px-[4vw] xl:px-0">
      <div className="flex flex-col gap-[24px] xl:gap-[40px] items-center">
        <div className="flex flex-col gap-[6px] items-center">
          <p className="text-[12px] lg:text-[18px] text-LightGray">
            Тарифные планы
          </p>
          <h2 className="text-LightGray text-[26px] lg:text-[42px] font-medium leading-14 xl:leading-[1.5] text-center">
            Совсем <span className="text-PrimaryGreen">немного</span> <br />
            за профессиональный инструмент
          </h2>
        </div>

        <p className="text-[16px] lg:text-[18px] text-Gray02 font-thin md:px-[1vw] lg:px-[8vw] text-center">
          Наш нейросетевой CAT-Tool инструмент предлагает несколько тарифных
          планов, <br />
          чтобы удовлетворить различные потребности пользователей,{" "}
          <br className="hidden xl:flex" />
          от фрилансеров до крупных корпоративных клиентов.
        </p>
      </div>
      <TariffCard></TariffCard>
    </section>
  )
}

export default TariffSection
