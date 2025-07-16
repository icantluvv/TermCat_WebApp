import React from "react"
import Question from "./Question"
import Typography from "@/core/typography/Typography"
import {questions} from "@/app/(landing)/constants";


const FAQ = () => (
  <section className="flex flex-col gap-[40px] lg:gap-[80px] container items-center px-[4vw] xl:px-0">
    <Typography variants="h3" center color="lightGray">
      Часто задаваемые <br className="md:hidden" /> вопросы
    </Typography>

    <div className="w-full xl:w-[70vw] flex flex-col gap-6 ">
      {questions.map((question, i) => (
        <Question key={i} title={question.title} text={question.text} />
      ))}
    </div>
  </section>
)

export default FAQ
