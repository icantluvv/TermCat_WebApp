"use client"

import Image from "next/image"
import { useFeedbackStore } from "@/store/LandingFeedbackPeopleStore"

import human1 from "@/public/images/landing/feedback/human1.png"
import human2 from "@/public/images/landing/feedback/human2.png"
import human3 from "@/public/images/landing/feedback/human3.png"
import human4 from "@/public/images/landing/feedback/human4.png"
import human5 from "@/public/images/landing/feedback/human5.png"
import human6 from "@/public/images/landing/feedback/human6.png"
import human7 from "@/public/images/landing/feedback/human7.png"

import arrow from "@/public/images/landing/arrow.svg"

const feedbacks = [
  {
    name: "Екатерина Смирнова",
    status: "Специалист по переводам в области медицины, ЮФУ",
    text: "Перевод медицинских текстов требует особой точности и внимания к деталям. Работая с TermCAT инструментом, я уверена в точности переводов медицинской терминологии. Инструмент учитывает контекст и предлагает наиболее подходящие варианты, что значительно сокращает время на проверку и редактирование.",
    image: human1
  },
  {
    name: "Олег Шапов",
    status: "Студент МКиМТ, ДГТУ (специалист в цифровом контенте)",
    text: "Благодаря этому инструменту, перевод иностранного контента стал качественнее. Теперь мне  гораздо легче работать с зарубежными аналитическими данными, чтобы публиковать их в журналах. Я с уверенностью рекомендую TermCAT всем студентам!",
    image: human2
  },
  {
    name: "Андрей Лысов",
    status: "Лингвист-переводчик, фрилансер",
    text: "Как начинающему лингвисту, мне нужно было найти бюджетный, но эффективный инструмент для перевода, чтобы зарабатывать в интернете, занимаясь фрилансом, и именно тогда я наткнулся на TermCAT. С самого начала работы с TermCAT меня приятно удивила его простота и интуитивно понятный интерфейс.",
    image: human3
  },
  {
    name: "Виктория Лазаренко",
    status: "Лингвист-переводчик, фрилансер",
    text: "Я очень довольна, что оформила подписку на TermCAT, так как он учитывает контекст и предлагает наиболее точный и подходящий перевод, что позволяет мне избежать ошибок и не тратить время на поиск терминов в глоссариях. Так как мне приходится работать с текстами разных областей, TermCAT незаменимый инструмент для меня.",
    image: human4
  },
  {
    name: "Иван Торопыга",
    status: "Начинающий программист, фрилансер",
    text: "Недавно я осваивал новую профессию, мне было важно изучать IT на английском языке. Часто приходилось обращаться к онлайн-переводчику, но он не справлялся с контекстом. Благодаря TermCAT инструменту, мне удалось быстрее освоить новую профессию. Функция «память переводов» меня особенно выручала.",
    image: human5
  },
  {
    name: "Аксинья Белкина",
    status: "Студентка АМиУ, ДГТУ",
    text: "Благодаря TermCAT наша команда студентов ДГТУ смогла как минимум удвоить производительность нашей работы. Автоматизация здорово помогла нашей издательской научной работе: трудно подсчитать время, которое мы сэкономили с командой на обмене файлов друг с другом.",
    image: human6
  },
  {
    name: "Василиса Молоднякова",
    status: "Фрилансер",
    text: "На бирже фриланса много способов заработать в декрете, переводя инструкции к различным товарам для продажи на маркетплейсах. Работая с TermCAT инструментом, теперь я уверена, что не подведу своих заказчиков, ведь сложные термины, которые часто встречаются в составах TermCAT отлично переводит!",
    image: human7
  }
]

const FeedbackSlider = () => {
  const { activeIndex, next, prev, setActiveIndex } = useFeedbackStore()

  const getShiftedArray = () => {
    const len = feedbacks.length
    const centerIndex = Math.floor(len / 2)
    const result = []
    for (let i = -centerIndex; i <= centerIndex; i++) {
      const index = (activeIndex + i + len) % len
      result.push({ ...feedbacks[index], realIndex: index })
    }
    return result
  }

  const visibleFeedbacks = getShiftedArray()
  const activeFeedback = feedbacks[activeIndex]

  return (
    <div className="w-full flex-col relative items-center gap-[40px] hidden xl:flex">
      {/* Текст активного отзыва */}
      <div className="text-center max-w-[850px] flex flex-col gap-[40px]">
        <p className="text-LightGray text-[18px] h-[100px]">
          {activeFeedback.text}
        </p>
        <div className="flex flex-col gap-[6px]">
          <h4 className="font-semibold text-LightGray text-[24px]">
            {activeFeedback.name}
          </h4>
          <p className="text-[18px] text-Gray02">{activeFeedback.status}</p>
        </div>
      </div>

      {/* Аватарки */}
      <div className="flex items-start h-[270px] overflow-hidden">
        {visibleFeedbacks.map((item, idx) => {
          const isActive = item.realIndex === activeIndex

          // позиция относительно центра (0 — центр)
          const distanceFromCenter = Math.abs(
            idx - Math.floor(visibleFeedbacks.length / 2)
          )

          // масштаб
          const scale = isActive ? 1 : 1.75 - distanceFromCenter * 0.26

          // смещение сверху (чем дальше от центра — тем больше)
          const marginTop = isActive ? 0 : 70 + distanceFromCenter * 40

          return (
            <div
              key={idx}
              onClick={() => setActiveIndex(item.realIndex)}
              className={`overflow-hidden ${
                isActive ? "w-[314px] h-[314px]" : "w-[150px] h-[150px]"
              } rounded-full cursor-pointer transition-all duration-300 ${
                isActive ? "bg-PrimaryGreen z-[1000]" : "bg-LightGray"
              }`}
              style={{
                transform: `scale(${scale})`,
                marginTop: `${marginTop}px`
              }}
            >
              <Image
                src={item.image}
                alt={item.name}
                className="object-cover w-full h-full"
                width={isActive ? 314 : 150}
                height={isActive ? 314 : 150}
              />
            </div>
          )
        })}
      </div>

      {/* Кнопки */}
      <div className="flex w-full absolute justify-between">
        <button
          onClick={() => prev(feedbacks.length)}
          className="w-[48px] h-[48px] bg-LightGray hover:bg-PrimaryGreen active:bg-PrimaryGreenActive rounded-full flex items-center justify-center rotate-[224deg]"
        >
          <Image src={arrow} alt="" />
        </button>
        <button
          onClick={() => next(feedbacks.length)}
          className="w-[48px] h-[48px] bg-LightGray hover:bg-PrimaryGreen active:bg-PrimaryGreenActive rounded-full flex items-center justify-center rotate-[44deg]"
        >
          <Image src={arrow} alt="" />
        </button>
      </div>
    </div>
  )
}

export default FeedbackSlider
