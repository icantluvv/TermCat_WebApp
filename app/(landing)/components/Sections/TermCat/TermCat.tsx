import Image from "next/image"
import FirstBlockImage from "@/public/images/landing/termcat/people.png"
import termcat_webapp from "@/public/images/landing/termcat/termcat_webapp.png"

const FirstSection = () => {
  return (
    <section className="flex flex-col md:flex-row w-full justify-between px-[4vw] gap-[24px] md:gap-[48px] xl:px-0 xl:py-[4vh]">
      <div className="flex flex-col md:gap-[12px] md:w-auto xl:gap-[24px]">
        <h1 className="flex flex-col text-[32px] xl:text-[54px] text-PrimaryGreen leading-8 font-semibold">
          TermCAT —
        </h1>
        <h2 className="text-[28px] xl:text-[48px] text-LightGray">
          верный помощник <br />
          <div className="flex gap-[12px] xl:gap-[16px] items-center">
            <>
              <Image
                src={FirstBlockImage}
                alt={""}
                className="w-[88px] xl:mt-4"
              ></Image>
            </>
            переводчиков
          </div>
        </h2>

        <div className="h-[0.5px] w-full bg-Gray02 hidden md:flex"></div>

        <p className="text-[16px] hidden xl:flex xl:text-[18px] text-Gray02">
          Теперь не нужно тратить время на перевод терминов <br /> и определение
          тематики, нейросетевая CAT-Tool <br />
          сделает всю работу за вас!
        </p>
        <p className="text-[16px] hidden md:flex xl:hidden text-Gray02">
          Не нужно тратить время на перевод <br />
          терминов и определение тематики,
          <br />
          TermCAT сделает всю работу за вас!
        </p>
        <div className="hidden md:flex">
          <button className="rounded-full bg-PrimaryGreen text-PrimaryBlack px-[16px] py-[8px] xl:px-[28px] xl:py-[16px] active:bg-PrimaryGreenActive">
            Попробовать
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-[12px] md:w-1/2">
        <div className="">
          <Image src={termcat_webapp} alt={"termcat_webapp"}></Image>
        </div>

        <div className="h-[0.5px] w-full bg-Gray02 md:hidden"></div>

        <div className="w-[80vw]">
          <p className="text-[16px] md:hidden  text-Gray02">
            Не нужно тратить время на перевод терминов и определение тематики,
            TermCAT сделает всю работу за вас!
          </p>
        </div>
      </div>
    </section>
  )
}

export default FirstSection
