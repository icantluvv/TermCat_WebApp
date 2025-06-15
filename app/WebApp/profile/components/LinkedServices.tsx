import Image from "next/image"
import back from "@/public/images/homepage/db8ea4379f48b0bd833ddd83078abae6.png"
import SignInYandexButton from "@/components/YandexButton/SignInYandexButton"

const LinkedServices = () => (
  <div className="opacity-50 select-none md:w-full xl:w-[calc(45%-20px)] max-w-[460px]">
    {/* pc version */}
    <div
      className="bg-[#E8E8E8] hidden xl:flex w-full flex-col rounded-[24px] 
    relative self-start"
    >
      <div
        className="w-full pl-[40px] py-[40px] pr-[100px] flex flex-col 
      gap-y-8 z-[5000]"
      >
        <h4 className="font-cygre font-medium text-[2rem] text-nowrap">
          Привязанные сервисы
        </h4>
        <div className="w-2/3">
          <SignInYandexButton />
        </div>
      </div>

      <Image
        src={back}
        className="w-full h-full absolute opacity-10 rounded-[24px]"
        alt=""
      />
    </div>

    {/* mobile version */}
    <div className="bg-[#E8E8E8] xl:hidden flex flex-col rounded-[24px] w-full md:w-full relative self-start">
      <div className="w-full p-[24px] flex flex-col gap-y-8 z-[5000]">
        <h4 className="font-cygre font-medium text-[1.5rem]">
          Привязанные сервисы
        </h4>
        <div className="flex">
          <SignInYandexButton />
        </div>
      </div>
      <Image
        src={back}
        className="w-full h-full absolute opacity-10 rounded-[24px]"
        alt=""
      />
    </div>
  </div>
)

export default LinkedServices
