import StatCard from "./StatCard"
import Image from "next/image"
import people from "@/public/images/landing/termcat/people.png"
import arrow from "@/public/images/landing/arrow.svg"
import Typography from "@/components/core/typography/Typography"
import Link from "next/link"
import Button from "@/components/core/button/Button"

const cardData: CardItem[] = [
  {
    id: 1,
    middleText: "Ежедневно",
    bigText: "25+",
    smallText: "Прирост новых пользователей",
    extraContent: (
      <Image
        src={people}
        className="w-[85px] xl:w-[120px]"
        alt={"people"}
      ></Image>
    )
  },
  {
    id: 2,
    middleText: "TermCAT знает",
    bigText: "50K+",
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
    <section className={"mb-[40px] xl:mb-[160px]"}>
      <div
        className="w-full flex flex-col md:flex-row md:w-full items-start gap-[24px] md:justify-between">
        <>
          <Typography variants="h3" weight="medium" color={"lightGray"}>
            Интеллектуальная <br className="hidden md:flex" />
            терминологическая <br className="hidden md:flex" />
            база данных
          </Typography>
        </>

        <div className="flex lg:flex-2 flex-col gap-[12px] lg:gap-[40px] md:w-1/2 mt-3">
          <Typography className="hidden xl:flex" variants="p" color="darkGray">
            Инструмент автоматически распознает и выделяет ключевые <br />
            термины в тексте, предлагая наиболее подходящие переводы <br />{" "}
            на основе контекста и ранее проверенных переводов
          </Typography>

          <Typography className="flex xl:hidden" variants="p" color="darkGray">
            Инструмент автоматически распознает и выделяет ключевые <br />
            термины в тексте, предлагая наиболее подходящие переводы <br />{" "}
            на основе контекста и ранее проверенных переводов
          </Typography>

          <div>
            <Link href={"/#points"}>
              <Button
                size="big"
                form="rounded"
                className="pr-[4px]"
                variant="emptyGreen"
              >
                <Typography variants="button">Узнать больше</Typography>
                <div
                  className="w-[24px] h-[24px] lg:w-[36px] lg:h-[36px] bg-PrimaryGreen rounded-full flex items-center justify-center">
                  <Image
                    src={arrow}
                    className="w-[13px] xl:w-[19px]"
                    alt={""}
                  ></Image>
                </div>
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div
        className="w-full flex overflow-x-auto overflow-y-hidden lg:overflow-hidden gap-[24px] md:gap-[18px] lg:gap-0 
      lg:justify-between px-[4vw] xl:px-0 no-scrollbar mt-[24px] md:mt-[40px] xl:mt-[80px]"
      >
        {cardData.map((item) => (
          <StatCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  )
}

export default Stats
