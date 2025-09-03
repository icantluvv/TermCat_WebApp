import React from "react"
import Image from "next/image"
import footerlogo from "@/public/images/landing/footer/footer_logo.svg"
import email from "@/public/images/landing/footer/email.svg"
import Link from "next/link"
import Button from "@/components/core/button/Button"
import Typography from "@/components/core/typography/Typography"
import Container from "@/components/shared/Container/Container"

const Footer = () => {
  return (
    <Container>
      <footer className="flex flex-col justify-center gap-x-6 py-[48px] gap-y-[20px] xl:gap-y-[40px] w-full z-[9000]">
        <div className="flex justify-between flex-col md:flex-row gap-y-[20px] xl:gap-y-[40px] lg:items-center items-start">
          <Link href={"/#termcat"}>
            <Image src={footerlogo} alt={"footerlogo"} className="w-[130px] md:w-[150px] xl:w-[193px] "></Image>
          </Link>

          <div className="w-full h-[1px] bg-Gray02 md:hidden"></div>

          <div className="flex flex-col md:flex-row gap-[12px] items-start md:items-center">
            <div className="relative flex flex-1 items-center">
              <Image className="absolute left-[14px] lg:left-[28px] w-[20px] lg:w-[24px]" src={email} alt={""}></Image>
              <input
                type="text"
                name="ask_questions"
                id="ask_quetions"
                placeholder="Задайте нам вопросы, если они остались"
                className="placeholder:text-[0.875rem] lg:placeholder:text-[1rem]
              pl-[45px] pr-[10px] py-[8px] lg:px-[60px] lg:py-[16px] rounded-[32px] xl:min-w-[430px] 
              bg-LightGray xl:flex-[0] flex-1 focus:outline-none"
              />
            </div>

            <Button type="button" variant="primary" size="big" form="rounded">
              <Typography variants={"button"} color="black" weight="medium">
                Отправить
              </Typography>
            </Button>
          </div>
        </div>

        <div className="w-full h-[1px] bg-Gray02"></div>
        <div className="flex w-full justify-between flex-col-reverse gap-y-[40px] md:flex-row">
          <Typography variants={"custom"} className={"text-[14px]"} color="lightGray">
            TermCAT @ 2024. All rights reserved.
          </Typography>
          <Link href={"/privacy"}>
            <Typography
              variants={"custom"}
              className={"text-[14px] xl:text-[16px] hover:text-PrimaryGreen"}
              color="lightGray"
            >
              Документы
            </Typography>
          </Link>
        </div>
      </footer>
    </Container>
  )
}

export default Footer
