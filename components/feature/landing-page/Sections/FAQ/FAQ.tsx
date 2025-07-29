import React from "react"
import Question from "./Question"
import Typography from "@/components/core/typography/Typography"
import { questions } from "@/app/(landing)/constants"


const FAQ = () => (
  <section className="flex flex-col gap-[40px] lg:gap-[80px] container items-center mb-[40px] xl:mb-[160px]">
    <Typography variants="h3" center color="lightGray">
      Часто задаваемые <br className="md:hidden" /> вопросы
    </Typography>

    <div className="w-full xl:w-[70vw] flex flex-col gap-6 ">
      {questions.map((q, i) => (
        <Question key={i} title={q.title} text={q.text} />
      ))}
    </div>
  </section>
)

export default FAQ
