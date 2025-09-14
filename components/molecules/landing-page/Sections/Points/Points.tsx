import Image from "next/image"
import line_third from "@/public/images/landing/line_third.svg"
import StepItem from "./StepItem"
import shadow from "@/public/images/landing/points/text-shadow.svg"
import Typography from "@/components/atoms/typography/Typography"
import { steps } from "@/app/(landing)/constants"
import Container from "@/components/shared/Container/Container"

const ThirdSection = () => {
  return (
    <section>
      <Container>
        <div className="w-full flex-col text-center flex items-center">
          <Typography variants="h3" color="lightGray" weight="medium">
            Каким стал перевод текстов <br className="md:flex" />с инструментом{" "}
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
      </Container>

      <div className="relative w-full flex md:justify-center mt-[60px] md:mt-[32px] xl:mt-[80px] h-[834px]">
        <Image src={line_third} alt="" width={15} height={834} className="absolute" />
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
