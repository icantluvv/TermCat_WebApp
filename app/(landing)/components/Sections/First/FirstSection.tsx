import React from "react"
import Image from "next/image"

import Video from "@/public/images/landing/video.svg"
import FirstBlockImage from "@/public/images/landing/first_block_image.svg"
import Button from "@/ui/Button"

import Text from "@/ui/Text"

const FirstSection = () => {
  return (
    <section className="flex w-full justify-between items-center h-screen">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col leading-[6vh]">
          <Text text={"TermCAT -"} tag={"h1-green"}></Text>
          <Text text={"верный помощник"} tag={"h2"}></Text>
          <div className="flex gap-4 items-center">
            <Image src={FirstBlockImage} alt={""}></Image>
            <Text text={"переводчиков"} tag={"h2"}></Text>
          </div>
        </div>

        <div className="h-[0.5px] w-1/2 bg-white opacity-50"></div>
        <div className="w-1/2">
          <Text
            text={
              "Теперь не нужно тратить время на перевод терминов и определение тематики, нейросетевая CAT-Tools сделает всю работу за вас!"
            }
            tag={"p"}
          ></Text>
        </div>

        <Button type={"primary"} text={"Попробовать"}></Button>
      </div>

      <div className="">
        <Image src={Video} alt={""}></Image>
      </div>
    </section>
  )
}

export default FirstSection
