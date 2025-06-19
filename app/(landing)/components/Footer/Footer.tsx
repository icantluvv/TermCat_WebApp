import React from "react"
import Image from "next/image"
import footerlogo from "@/public/images/landing/footer/footer_logo.svg"
import email from "@/public/images/landing/footer/email.svg"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center gap-x-6 gap-y-[20px] xl:gap-y-[40px]  w-full z-[9000] px-[4vw] xl:px-0">
      <div className="flex justify-between flex-col md:flex-row gap-y-[20px] xl:gap-y-[40px] lg:items-center items-start">
        <Link href={"/"}>
          <Image
            src={footerlogo}
            alt={"footerlogo"}
            className="w-[130px] md:w-[150px] xl:w-[193px] "
          ></Image>
        </Link>

        <div className="w-full h-[1px] bg-Gray02 md:hidden"></div>

        <div className="flex gap-[12px] items-center">
          <div className="relative flex flex-1 items-center">
            <Image
              className="absolute left-[14px] lg:left-[28px] w-[20px] lg:w-[24px]"
              src={email}
              alt={""}
            ></Image>
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
          <button className="bg-PrimaryGreen active:bg-PrimaryGreenActive min-h-[40px] py-[8px] px-[16px] lg:py-[16px] lg:px-[28px] rounded-[32px] text-[14px] lg:text-[16px] text-PrimaryBlack">
            Отправить
          </button>
        </div>
      </div>

      <div className="w-full h-[1px] bg-Gray02"></div>
      <div className="flex w-full justify-between flex-col-reverse gap-y-[40px] md:flex-row">
        <p className="text-WhiteDefault text-[14px]">
          TermCAT @ 2024. All rights reserved.
        </p>
        <Link
          href={"/"}
          className="text-LightGray hover:text-PrimaryGreen text-[16px] md:text-[14px]"
        >
          Документы
        </Link>
      </div>
    </footer>
  )
}

export default Footer
