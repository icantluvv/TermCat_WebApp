import FeedbackCard from "./FeedbackCard"
import FeedbackSlider from "./FeedbackSlider"
import Typography from "@/components/core/typography/Typography"
import { feedbacks } from "@/app/(landing)/constants"
import Container from "@/components/shared/Container/Container"

const Feedback = () => {
  return (
    <section className="mb-[40px] xl:mb-[160px]">
      <Container>
        <Typography variants="h3" center color="lightGray" className="">
          Отзывы наших пользователей
        </Typography>
      </Container>

      <div className="w-[100vw] mt-[40px] px-[4vw] xl:px-0 overflow-x-auto no-scrollbar xl:hidden">
        <div className="flex gap-4 w-max">
          {feedbacks.map((item, index) => (
            <FeedbackCard key={index} name={item.name} status={item.status} text={item.text} image={item.image} />
          ))}
        </div>
      </div>

      <Container>
        <FeedbackSlider />
      </Container>
    </section>
  )
}

export default Feedback
