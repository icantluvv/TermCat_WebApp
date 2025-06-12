import Image from "next/image"
import FirstBlockImage from "@/public/images/landing/termcat/people.png"
import termcat_webapp from "@/public/images/landing/termcat/termcat_webapp.png"

const FirstSection = () => {
  return (
    <section className="flex flex-col xl:flex-row w-full justify-between px-[4vw] gap-[24px] xl:px-0 xl:hidden">
      <div className="flex flex-col ">
        <h1 className="flex flex-col text-[32px] xl:text-[54px] text-PrimaryGreen leading-8 font-semibold">
          TermCAT —
        </h1>
        <h2 className="text-[28px] xl:text-[48px] text-LightGray">
          верный помощник <br />
          <div className="flex gap-[12px] xl:gap-[16px] items-center">
            <div className="">
              <Image
                src={FirstBlockImage}
                alt={""}
                width={88}
                height={36}
              ></Image>
            </div>
            переводчиков
          </div>
        </h2>
      </div>

      <div className="flex flex-col gap-[12px]">
        <div className="">
          <Image src={termcat_webapp} alt={"termcat_webapp"}></Image>
        </div>

        <div className="h-[0.5px] w-full bg-Gray02"></div>

        <div className="w-[80vw]">
          <p className="text-[16px] xl:text-[18px] text-Gray02">
            Теперь не нужно тратить время на перевод терминов и определение
            тематики, нейросетевая CAT-Tool сделает всю работу за вас!
          </p>
        </div>
      </div>
    </section>
  )
}

export default FirstSection
