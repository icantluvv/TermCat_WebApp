import React from "react"
import Image from "next/image"
import Text from "@/ui/Text"
import footerlogo from "@/public/images/landing/footer_logo.svg"
import Button from "@/ui/Button"
import BlockURL from "./BlockURL"

import mail from "@/public/images/landing/mail.svg"
import Link from "next/link"
const Footer = () => {
  return (
    <footer className="hidden xl:flex flex-col justify-center mt-[5vh] gap-x-6 gap-y-[5vh] mb-[5vh] w-full">
      <div className="w-full flex justify-between">
        <Link href={"/"}>
          <Image src={footerlogo} alt={""}></Image>
        </Link>
        <div className="w-1/2 flex gap-x-6 justify-end relative">
          <div className="relative flex items-center">
            <Image
              src={mail}
              alt={""}
              width={24}
              height={24}
              className="absolute ml-3"
            ></Image>
            <input
              type="text"
              className="pl-11 w-1/4 min-w-[300px] bg-white py-[12px] px-[16px] rounded-[32px]"
              placeholder="Задайте нам вопросы, если они остались..."
            />
          </div>

          <Button type={"primary"} text={"Отправить"}></Button>
        </div>
      </div>
      <div className="h-[0.5px] w-full bg-white"></div>

      <div className="flex">
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

      <div className="flex justify-between">
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

export default Footer
