import StatCard from "./StatCard"
import Image from "next/image"
import people from "@/public/images/landing/termcat/people.png"
import arrow from "@/public/images/landing/arrow.svg"

const cardData: CardItem[] = [
  {
    id: 1,
    middleText: "Ежедневно",
    bigText: "2.5K+",
    smallText: "Прирост новых пользователей",
    extraContent: (
      <Image src={people} className="w-[85px]" alt={"people"}></Image>
    )
  },
  {
    id: 2,
    middleText: "TermCAT знает",
    bigText: "10K+",
    smallText: "Терминов из разных областей"
  },
  {
    id: 3,
    middleText: "Нейросеть TermCAT",
    bigText: "В 2 раза",
    smallText: "Сокращает время перевода"
  },
  {
    id: 4,
    middleText: "TermCAT",
    bigText: "В 5 раз",
    smallText: "Улучшит качество перевода за счет определения темы"
  }
]

const Stats = () => {
  return (
    <section className=" w-full flex flex-col items-center gap-[24px] md:gap-[40px] lg:gap-[80px] ">
      <div className="w-full flex flex-col md:flex-row items-start gap-[24px] px-[4vw] xl:px-0 xl:justify-between">
        <h3 className="text-LightGray text-[26px] lg:text-[42px] font-medium">
          Интеллектуальная <br className="hidden xl:flex" />
          терминологическая <br className="hidden xl:flex" />
          база данных
        </h3>
        <div className="flex lg:flex-2 flex-col gap-[12px] lg:gap-[40px] xl:w-1/2">
          <p className="text-[16px] lg:text-[18px] text-Gray02">
            Инструмент автоматически распознает и выделяет ключевые{" "}
            <br className="hidden 2xl:flex" /> термины в тексте, предлагая
            наиболее подходящие переводы <br className="hidden 2xl:flex" />{" "}
            на основе контекста и ранее проверенных переводов
          </p>
          <div className="">
            <button
              className="flex items-center rounded-[48px] text-[14px] lg:text-[16px] text-LightGray border-[1.5px]
             border-PrimaryGreen p-[7px] pl-[16px] lg:pl-[28px] lg:py-[12px] gap-[12px]"
            >
              Узнать больше
              <div className="w-[24px] h-[24px] lg:w-[36px] lg:h-[36px] bg-PrimaryGreen rounded-full flex items-center justify-center">
                <Image
                  src={arrow}
                  className="w-[13px] xl:w-[19px]"
                  alt={""}
                ></Image>
              </div>
            </button>
          </div>
        </div>
      </div>

      <div className="w-full flex overflow-x-auto lg:overflow-hidden gap-[24px] md:gap-[18px] lg:gap-0 lg:justify-between px-[4vw] no-scrollbar">
        {cardData.map((item) => (
          <StatCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  )
}

export default Stats
