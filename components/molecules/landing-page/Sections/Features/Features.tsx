import Image from "next/image"
import apadtation from "@/public/images/landing/features/adaptation.svg"
import usability from "@/public/images/landing/features/usability.svg"
import analysis from "@/public/images/landing/features/analysis.svg"
import star_data_chat from "@/public/images/landing/features/star_data_chat.png"
import Typography from "@/components/atoms/typography/Typography"
import Container from "@/components/shared/Container/Container"

const FourthSection = () => {
  return (
    <Container>
      <section className="xl:py-[160px] relative">
        <div>
          <Typography variants="h3" center color="lightGray" weight="medium">
            ИИ-платформа для <span className="text-PrimaryGreen">aвтоматизированного</span>
            <br />
            перевода любого контента
          </Typography>

          <div className="flex w-full justify-center">
            <Typography
              className="max-w-[80vw] lg:max-w-[36vw] mt-[24px] xl:mt-[40px]"
              center
              variants="p"
              color="darkGray"
            >
              Платформа для переводов TermCAT позволяет выполнять переводы терминов быстрее и точнее в рамках вашего
              бюджета. Лучше всего то, что мы упростили вам задачу — <br />
              вам просто нужно нажать перевести!
            </Typography>
          </div>
        </div>

        <div className="flex flex-col w-full gap-[30px] my-[40px] md:hidden">
          <Image src={usability} alt={"usability"}></Image>
          <div className="w-full flex justify-end">
            <Image src={apadtation} alt={""}></Image>
          </div>
          <Image src={analysis} alt={""}></Image>
        </div>

        <div className="hidden md:block">
          <Image
            src={usability}
            alt={"usability"}
            className="absolute left-[4vw] top-[-5%] xl:scale-125 xl:animate-floatXY1"
          ></Image>
          <Image
            src={apadtation}
            alt={""}
            className="absolute left-[5vw] bottom-[2vh] lg:bottom-0 xl:scale-125 xl:animate-floatXY2"
          ></Image>
          <Image
            src={analysis}
            alt={""}
            className="absolute right-[4vw] top-0 xl:scale-125 xl:animate-floatXY3"
          ></Image>
          <Image
            src={star_data_chat}
            alt={"star_data_chat"}
            className="w-[200px] absolute right-[8vw] bottom-[5vh] xl:w-[260px]"
          ></Image>
        </div>
      </section>
    </Container>
  )
}

export default FourthSection
