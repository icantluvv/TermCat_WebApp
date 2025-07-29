import FeedbackCard from "./FeedbackCard"
import FeedbackSlider from "./FeedbackSlider"
import Typography from "@/components/core/typography/Typography"
import { feedbacks } from "@/app/(landing)/constants"


const Feedback = () => {
  return (
    <section className="flex flex-col items-center container gap-[40px] mb-[40px] xl:mb-[160px]">
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
