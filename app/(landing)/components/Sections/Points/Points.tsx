import Image from "next/image"
import line_third from "@/public/images/landing/line_third.svg"
import StepItem from "./StepItem"
import shadow from "@/public/images/landing/points/text-shadow.svg"
import Typography from "@/core/typography/Typography"

const steps = [
  {
    id: "01",
    title: "Учетная запись",
    text: "Создайте или войдите в свой аккаунт TermCAT"
  },
  {
    id: "02",
    title: "Подготовка к переводу",
    text: "Загрузите свой исходный текст или файл с текстом на английском языке во вкладке «перевод»"
  },
  {
    id: "03",
    title: "Работа нейросети",
    text: "Получите наиболее точные и контекстуальные результаты для любого типа текста"
  },
  {
    id: "04",
    title: "Работа нейросети",
    text: "Воспользуйтесь предложенными нейросетью терминами для дальнейшего перевода"
  }
]

const ThirdSection = () => {
  return (
    <section className="flex flex-col gap-[60px] xl:gap-[80px] container items-center px-[4vw] xl:px-0">
      <div className="w-full flex-col text-center flex items-center">
        <Typography variants="h3" color="lightGray" weight="medium">
          Каким стал перевод текстов <br className="md:flex" />
          с инструментом{" "}
          <span className="relative">
            TermCAT
            <Image
              src={shadow}
              alt={"text-shadow"}
              className="w-[120px] md:w-[150px] lg:w-[200px] absolute bottom-[-50%] right-0"
            ></Image>
          </span>
        </Typography>
      </div>

      <div className="relative w-full flex md:justify-center h-[834px]">
        <Image
          src={line_third}
          alt=""
          width={15}
          height={834}
          className="absolute"
        />
        <div className="w-full flex flex-col md:items-center">
          {steps.map((step, index) => (
            <StepItem key={step.id} {...step} reverse={index % 2 !== 0} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ThirdSection
