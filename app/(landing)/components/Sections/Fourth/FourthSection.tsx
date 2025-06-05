import React from "react"
import Image from "next/image"
import video from "@/public/images/landing/video.svg"

const FourthSection = () => {
  return (
    <section className="w-full text-center items-center flex flex-col gap-y-10">
      <div>
        <h2 className="text-white text-[3rem] font-medium">
          ИИ-платформа для{" "}
          <span className="text-primaryGreen">aвтоматизированного</span>
        </h2>
        <h2 className="text-white text-[3rem] font-medium">
          перевода любого контента
        </h2>
      </div>

      <p className="max-w-[544px] text-[1.125rem] text-white font-thin">
        Платформа для переводов TermCAT позволяет выполнять переводы терминов
        быстрее и точнее в рамках вашего бюджета. Лучше всего то, что мы
        упростили вам задачу — вам просто нужно нажать перевести!
      </p>

      <Image src={video} alt={"video"} width={754}></Image>
    </section>
  )
}

export default FourthSection
