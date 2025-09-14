import Image from "next/image"
import FirstBlockImage from "@/public/images/landing/termcat/people.png"
import termcat_webapp from "@/public/images/landing/termcat/termcat_webapp.png"
import Link from "next/link"
import Typography from "@/components/atoms/typography/Typography"
import Button from "@/components/atoms/button/Button"
import Container from "@/components/shared/Container/Container"

const FirstSection = () => {
  return (
    <Container>
      <section
        id="termcat"
        className="flex scroll-mt-[200px] flex-col md:flex-row justify-between gap-[24px] md:gap-[48px] my-[40px] xl:mt-[80px] xl:mb-[160px]"
      >
        <div className="flex flex-col md:gap-[12px] md:w-auto xl:gap-[24px]">
          <Typography
            color="green"
            className="flex flex-col text-[32px] xl:text-[54px] leading-8 font-semibold"
            variants={"button"}
          >
            TermCAT —
          </Typography>

          <Typography variants="h2" weight="medium" color="lightGray">
            верный помощник <br />
            <div className="flex gap-[12px] xl:gap-[16px] items-center">
              <Image src={FirstBlockImage} alt={""} className="w-[88px] xl:mt-4"></Image>
              переводчиков
            </div>
          </Typography>

          <div className="h-[0.5px] w-full bg-Gray02 hidden md:flex"></div>

          <Typography variants="p" color="darkGray" className="hidden xl:flex">
            Теперь не нужно тратить время на перевод терминов <br /> и определение тематики, нейросетевая CAT-Tool{" "}
            <br />
            сделает всю работу за вас!
          </Typography>

          <Typography className="hidden md:flex xl:hidden" variants="p" color="darkGray">
            Не нужно тратить время на перевод <br />
            терминов и определение тематики,
            <br />
            TermCAT сделает всю работу за вас!
          </Typography>

          <div className="hidden md:block">
            <Link href={"/#tariff"}>
              <Button variant="primary" form="rounded" size="big">
                <Typography variants="button" color="black">
                  Попробовать
                </Typography>
              </Button>
            </Link>
            <Link href={"/registration"}></Link>
          </div>
        </div>

        <div className="flex flex-col gap-[12px] md:w-1/2 max-w-[80vw] md:max-w-auto">
          <div className="">
            <Image src={termcat_webapp} alt={"termcat_webapp"}></Image>
          </div>

          <div className="h-[0.5px] w-full bg-Gray02 md:hidden"></div>

          <Typography className="md:hidden w-[80vw]" variants="p" color="darkGray">
            Не нужно тратить время на перевод терминов и определение тематики, TermCAT сделает всю работу за вас!
          </Typography>
        </div>
      </section>
    </Container>
  )
}

export default FirstSection
