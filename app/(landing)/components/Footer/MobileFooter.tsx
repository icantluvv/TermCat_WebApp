import React from "react"
import Image from "next/image"
import Text from "@/ui/Text"
import footerlogo from "@/public/images/landing/footer_logo.svg"
import Button from "@/ui/Button"
import BlockURL from "./BlockURL"

import mail from "@/public/images/landing/mail.svg"
import Link from "next/link"
const MobileFooter = () => {
  return (
    <footer className="flex flex-col justify-center gap-x-6 gap-y-[5vh] my-[5vh] xl:hidden w-full">
      <div className="w-full flex flex-col gap-10">
        <Link href={"/"}>
          <Image src={footerlogo} alt={""}></Image>
        </Link>
        <div className="h-[0.5px] w-full bg-white"></div>

        <div className="w-full flex gap-x-6 relative">
          <div className="relative flex flex-1 items-center">
            <Image
              src={mail}
              alt={""}
              width={24}
              height={24}
              className="absolute ml-3"
            ></Image>
            <input
              type="text"
              className="pl-11 w-full bg-white py-[12px] px-[16px] rounded-[32px]"
              placeholder="Задайте нам вопросы, если они остались..."
            />
          </div>

          <Button type={"primary"} text={"Отправить"}></Button>
        </div>
      </div>

      <div className="flex w-full flex-wrap gap-6">
        <BlockURL
          text1={"first"}
          text2={"first2"}
          text3={"first3"}
          text4={"first4"}
        ></BlockURL>
        <BlockURL
          text1={"first"}
          text2={"first2"}
          text3={"first3"}
          text4={"first4"}
        ></BlockURL>
        <BlockURL
          text1={"first"}
          text2={"first2"}
          text3={"first3"}
          text4={"first4"}
        ></BlockURL>
        <BlockURL
          text1={"first"}
          text2={"first2"}
          text3={"first3"}
          text4={"first4"}
        ></BlockURL>
      </div>

      <div className="h-[0.5px] w-full bg-white"></div>

      <div className="flex flex-col md:flex-row gap-6 justify-between">
        <Text
          text={"TermCAT @ 2024. All rights reserved."}
          tag={"p-footer"}
        ></Text>

        <div className="flex gap-x-4">
          <Text text={"Button"} tag={"p-footer"}></Text>
          <Text text={"Button"} tag={"p-footer"}></Text>
          <Text text={"Button"} tag={"p-footer"}></Text>
        </div>
      </div>
    </footer>
  )
}

export default MobileFooter
