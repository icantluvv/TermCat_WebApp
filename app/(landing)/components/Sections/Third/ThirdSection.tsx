import React from "react"
import Text from "@/ui/Text"
import Image from "next/image"

import line_third from "@/public/images/landing/line_third.svg"
const ThirdSection = () => {
  return (
    <section className="flex flex-col gap-[10vh] w-full items-center">
      <div className="w-full flex-col text-center flex">
        <Text text={"Каким стал перевод текстов"} tag={"h2"}></Text>
        <Text text={"с инструментом TermCAT"} tag={"h2"}></Text>
      </div>

      <div className="relative w-full flex justify-center h-[834px]">
        <Image
          src={line_third}
          alt={""}
          width={15}
          height={834}
          className="absolute"
        ></Image>

        <div className="w-full flex flex-col items-center">
          <div className="w-[70%] flex h-1/4 justify-end">
            <div className="flex gap-6 w-[43%] flex-col">
              <div className="w-[48px] h-[48px] select-none	rounded-[50%] bg-[#e8e8e8] border-2 border-[#c2f041] flex items-center justify-center text-thin">
                01
              </div>
              <div className="flex flex-col">
                <Text text={"Учетная запись"} tag={"h3-white"}></Text>
                <Text
                  text={"Создайте или войдите в свой аккаунт TermCAT"}
                  tag={"p"}
                ></Text>
              </div>
            </div>
          </div>

          <div className="w-[70%] flex h-1/4  justify-start">
            <div className="flex gap-6 w-[43%] flex-col items-end text-end">
              <div className="w-[48px] h-[48px] select-none	rounded-[50%] bg-[#e8e8e8] border-2 border-[#c2f041] flex items-center justify-center text-thin">
                02
              </div>
              <div className="flex flex-col">
                <Text text={"Учетная запись"} tag={"h3-white"}></Text>
                <Text
                  text={
                    "Загрузите свой исходный текст или файл с текстом на английском языке во вкладке «перевод»"
                  }
                  tag={"p"}
                ></Text>
              </div>
            </div>
          </div>

          <div className="w-[70%] flex h-1/4 justify-end">
            <div className="flex gap-6 flex-col w-[43%]">
              <div className="w-[48px] h-[48px] select-none	rounded-[50%] bg-[#e8e8e8] border-2 border-[#c2f041] flex items-center justify-center text-thin">
                03
              </div>
              <div className="flex flex-col">
                <Text text={"Учетная запись"} tag={"h3-white"}></Text>
                <Text
                  text={
                    "Получите наиболее точные и контекстуальные результаты для любого типа текста"
                  }
                  tag={"p"}
                ></Text>
              </div>
            </div>
          </div>

          <div className="w-[70%] flex h-1/4 justify-start">
            <div className="flex gap-6 w-[43%] flex-col items-end text-end">
              <div className="w-[48px] h-[48px] select-none	rounded-[50%] bg-[#e8e8e8] border-2 border-[#c2f041] flex items-center justify-center text-thin">
                04
              </div>
              <div className="flex flex-col">
                <Text text={"Учетная запись"} tag={"h3-white"}></Text>
                <Text
                  text={
                    "Воспользуйтесь предложенными нейросетью терминами для дальнейшего перевода"
                  }
                  tag={"p"}
                ></Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ThirdSection
