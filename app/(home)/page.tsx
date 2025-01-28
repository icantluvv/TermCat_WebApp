import Link from "next/link"
import Image from "next/image"
import lightning from "@/public/images/lightning.svg"
import termwardBack from "@/public/images/homepage/db8ea4379f48b0bd833ddd83078abae6.png"
import IntroduceCard from "@/components/homepage/IntroduceCard"
import CommentCard from "@/components/homepage/CommentCard"
import HistoryCard from "@/components/homepage/HistoryCard"

export default function Home() {
  return (
    <main className="w-[92%] py-[5vh] ml-[8%] px-[2%] h-screen">
      <div className="flex flex-col gap-6">
        {/* Header hello + profile */}
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <h2 className="text-[3rem]">Привет, Тимофей!</h2>
            <p className="text-[1.5rem]">
              Начни редактировать проект прямо сейчас
            </p>
          </div>

          <div className="h-[48px] flex gap-x-4">
            <button className="px-[28px] py-4 active:bg-activeGrayButton hover:bg-[#e8e8e8]/75 bg-grayButton rounded-[50px] h-[48px] items-center flex gap-2 transition-all">
              <Image src={lightning} alt={lightning}></Image>
              <p>Upgrade now</p>
            </button>
            <Link
              href={"/profile"}
              className="rounded-[50%] w-[48px] h-[48px] bg-[#c2f041]"
            ></Link>
          </div>
        </div>

        <div className="flex gap-x-4">
          <button className="bg-black rounded-[24px] text-white hover:opacity-50 py-2 px-5 transition-all">
            Тариф старт
          </button>
          <button className="bg-black rounded-[24px] text-white opacity-30 py-2 px-5 hover:opacity-60 transition-all">
            Тариф Продвинутый
          </button>
          <button className="bg-black rounded-[24px] text-white opacity-30 py-2 px-5 hover:opacity-60 transition-all">
            Тариф Команда
          </button>
        </div>

        {/* Buttons to pages */}
        <div className="flex xl:flex-row flex-col w-full gap-6">
          {/* left panel */}
          <div className="flex flex-col w-2/3 gap-6">
            {/* top */}
            <div className="flex w-full gap-6">
              <Link
                className="rounded-[24px] w-1/2 bg-black h-[334px] text-white p-5 hover:opacity-50 transition-all"
                href={"/chat"}
              >
                Чат
              </Link>
              <button className="rounded-[24px] w-1/2 bg-[#e8e8e8] h-[334px] hover:opacity-50 transition-all relative">
                <Image
                  src={termwardBack}
                  className="rounded-[24px] opacity-10 w-full h-full"
                  alt={""}
                ></Image>
                <div className="text-black absolute z-[1000]">
                  Приобретите termwards
                </div>
              </button>
            </div>
            {/* mid */}
            <CommentCard></CommentCard>
            {/* bottom */}
            <div className="flex w-full gap-6">
              <IntroduceCard></IntroduceCard>
              <button className="rounded-[24px] w-1/2 bg-black h-[194px] text-white p-5 hover:opacity-50 transition-all">
                Активировать подписку
              </button>
            </div>
          </div>

          {/* right panel */}
          <div className="flex flex-col w-1/3 gap-6">
            <HistoryCard></HistoryCard>
            <button className="rounded-[24px] w-full bg-black h-[194px] text-white p-5 hover:opacity-50 transition-all">
              Подробнее о тарифе Старт
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
