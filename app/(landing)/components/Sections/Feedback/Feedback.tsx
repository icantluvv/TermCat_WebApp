import human1 from "@/public/images/landing/feedback/human1.png"
import human2 from "@/public/images/landing/feedback/human2.png"
import human3 from "@/public/images/landing/feedback/human3.png"
import human4 from "@/public/images/landing/feedback/human4.png"
import human5 from "@/public/images/landing/feedback/human5.png"
import human6 from "@/public/images/landing/feedback/human6.png"
import human7 from "@/public/images/landing/feedback/human7.png"
import FeedbackCard from "./FeedbackCard"
import FeedbackSlider from "./FeedbackSlider"
import Typography from "@/core/typography/Typography"

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
    text: "Я очень довольна, что оформила подписку на TermCAT, так как он учитывает контекст и предлагает наиболее точный и подходящий перевод, что позволяет мне избежать ошибок и не тратить время на поиск терминов в глоссариях. Так как мне проходится работать с текстами разных областей, TermCAT незаменимый инструмент для меня.",
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

const Feedback = () => {
  return (
    <section className="flex flex-col items-center container gap-[40px]">
      <div className="px-[4vw] xl:px-0">
        <Typography variants="h3" center color="lightGray" className="">
          Отзывы наших пользователей
        </Typography>
      </div>

      <div className="w-[100vw] px-[4vw] xl:px-0 overflow-x-auto no-scrollbar xl:hidden">
        <div className="flex gap-4 w-max">
          {feedbacks.map((item, index) => (
            <FeedbackCard
              key={index}
              name={item.name}
              status={item.status}
              text={item.text}
              image={item.image}
            />
          ))}
        </div>
      </div>

      <FeedbackSlider />
    </section>
  )
}

export default Feedback
