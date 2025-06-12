import Image from "next/image"
import apadtation from "@/public/images/landing/features/adaptation.svg"
import usability from "@/public/images/landing/features/usability.svg"
import analysis from "@/public/images/landing/features/analysis.svg"

const FourthSection = () => {
  return (
    <section className="w-full text-center items-center flex flex-col gap-y-[40px] lg:gap-y-[80px] px-[4vw] lg:px-0 ">
      <div className=" flex flex-col gap-[24px] xl:gap-[40px] items-center">
        <h3 className=" text-LightGray text-[26px] lg:text-[42px] font-medium">
          ИИ-платформа для
          <span className="text-PrimaryGreen"> aвтоматизированного </span>
          <br />
          перевода любого контента
        </h3>
        <p className="w-full max-w-[80vw] lg:max-w-[37vw] text-[16px] lg:text-[18px] text-Gray02 font-thin">
          Платформа для переводов TermCAT позволяет выполнять переводы терминов
          быстрее и точнее в рамках вашего бюджета. Лучше всего то,
          что мы упростили вам задачу — <br />
          вам просто нужно нажать перевести!
        </p>
      </div>

      <div className="flex flex-col w-full gap-[30px]">
        <Image src={usability} alt={"usability"}></Image>
        <div className="w-full flex justify-end">
          <Image src={apadtation} alt={""}></Image>
        </div>
        <Image src={analysis} alt={""}></Image>
      </div>
    </section>
  )
}

export default FourthSection
