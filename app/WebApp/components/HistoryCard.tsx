import Link from "next/link"
import Image from "next/image"
import background from "@/public/images/homepage/history_back.png"
import arrow from "@/public/images/homepage/Arrow.png"
import folder from "@/public/images/homepage/folder.png"
import element_plus from "@/public/images/homepage/plus.png"

const HistoryCard = ({ href }: CardProps) => {
  return (
    <Link
      className="rounded-[24px] xl:flex-1 w-full text-LightGray active:opacity-90 
      select-none relative overflow-hidden"
      href={href}
    >
      <div className="flex flex-col w-full h-full gap-[24px] items-center justify-between z-[10] p-[20px] xl:p-[40px] relative">
        <div className="flex justify-between w-full">
          <h3 className="text-PrimaryBlack text-[24px] xl:text-[32px]">
            История
          </h3>
          <div className="rounded-full bg-LightGray w-[36px] h-[36px] xl:w-[48px] xl:h-[48px] flex items-center justify-center">
            <Image src={arrow} className="w-1/3 h-1/3" alt={""}></Image>
          </div>
        </div>

        <div className="w-full relative">
          <svg className="xl:block hidden" viewBox="0 0 504 190">
            <path
              d="M325 24C325 10.7452 314.255 0 301 0H24C10.7452 0 0 10.7452 0 24V166C0 179.255 10.7452 190 24 190H480C493.255 190 504 179.255 504 166V81.6963C504 68.4415 493.255 57.6963 480 57.6963H358C339.775 57.6963 325 42.9217 325 24.6963V24Z"
              fill="#0C0C0C"
            />
          </svg>

          <svg className="xl:hidden block" viewBox="0 0 295 140">
            <path
              d="M199 23C199 10.2975 188.703 0 176 0H24C10.7452 0 0 10.7452 0 24V116C0 129.255 10.7452 140 24 140H271C284.255 140 295 129.255 295 116V71C295 57.7452 284.255 47 271 47H223C209.745 47 199 36.2548 199 23V23Z"
              fill="#0C0C0C"
            />
          </svg>

          <div className="flex h-full p-[18px] xl:p-[24px] flex-col gap-[12px] absolute top-0 left-0">
            <Image
              src={folder}
              alt={"history_icon"}
              className="w-[18px] xl:w-[24px]"
            ></Image>

            <div className="flex flex-col h-full justify-between">
              <p className="text-LightGray text-[16px] xl:text-[18px] ">
                Следите за всеми <br />
                вашими переводами
              </p>
              <p className=" text-Gray02 text-[10px] xl:text-[12px]">
                Наша система сохраняет каждую вашу сессию
              </p>
            </div>
          </div>
        </div>

        <div className="w-full justify-center items-end flex flex-1 ">
          <button className="bg-LightGray flex gap-[6px] text-PrimaryBlack px-[16px] py-[8px] xl:px-[28px] xl:py-[12px] rounded-full text-[14px] xl:text-[16px]">
            <Image
              src={element_plus}
              alt={"new project"}
              className="w-[18px] h-[18px] xl:w-[24px] xl:h-[24px]"
            ></Image>
            Создать новый проект
          </button>
        </div>
      </div>

      <Image
        src={background}
        alt={"background history card"}
        fill
        className="absolute inset-0 z-0 object-cover"
      />
    </Link>
  )
}

export default HistoryCard
