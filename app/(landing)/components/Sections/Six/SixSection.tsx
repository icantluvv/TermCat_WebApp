import React from "react"

const SixSection = () => {
  return (
    <section className="w-full text-center items-center flex flex-col gap-y-10">
      <div>
        <p className=" text-[1.125rem] text-white">Тарифные планы</p>
        <h2 className="text-white text-[3rem] font-medium">
          Совсем <span className="text-primaryGreen">немного</span>
        </h2>
        <h2 className="text-white text-[3rem] font-medium">
          за профессиональный инструмент
        </h2>
      </div>

      <p className="max-w-[848px] text-[1.125rem] text-white font-thin">
        Наш нейросетевой CAT-Tool инструмент предлагает несколько тарифных
        планов, чтобы удовлетворить различные потребности пользователей, от
        фрилансеров до крупных корпоративных клиентов.
      </p>
    </section>
  )
}

export default SixSection
