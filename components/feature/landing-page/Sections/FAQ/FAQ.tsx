import React from "react"
import Question from "./Question"
import Typography from "@/components/core/typography/Typography"
import { questions } from "@/app/(landing)/constants"
import Container from "@/components/shared/Container/Container"

const FAQ = () => (
  <Container>
    <section className=" mb-[40px] xl:mb-[160px]">
      <Typography variants="h3" center color="lightGray">
        Часто задаваемые <br className="md:hidden" /> вопросы
      </Typography>

      <div className="w-full xl:w-[70vw] mt-[40px] xl:mt-[80px]">
        {questions.map((q, i) => (
          <Question key={i} title={q.title} text={q.text} />
        ))}
      </div>
    </section>
  </Container>
)

export default FAQ
