import HeaderLayout from "@/components/shared/header/HeaderLayout"
import { cookies } from "next/headers"
import ChatCard from "../../../components/feature/WebApp-pages/index/ChatCard"
import CommentCard from "../../../components/feature/WebApp-pages/index/CommentCard"
import HistoryCard from "../../../components/feature/WebApp-pages/index/HistoryCard"
import IntroduceCard from "../../../components/feature/WebApp-pages/index/IntroduceCard"
import PlanCard from "../../../components/feature/WebApp-pages/index/PlanCard"
import SubScriptionCard from "../../../components/feature/WebApp-pages/index/SubcriptionCard"
import TariffLayout from "../../../components/feature/WebApp-pages/index/TariffLayout"
import BuyCard from "../../../components/feature/WebApp-pages/index/BuyCard"

export default async function Home() {
  const cookieStore = await cookies()
  const accessToken = cookieStore.get("accessToken")?.value

  const res = await fetch(`${process.env.BACKEND_URL}/users/getMe`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`
    }
  })

  const User: User = await res.json()

  const getSub = await fetch(
    `${process.env.BACKEND_URL}/subscriptions/getInfoSub/${User.id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`
      }
    }
  )

  const sub = await getSub.json()

  return (
    <div className="flex flex-col gap-y-[24px] lg:gap-y-[40px] ">
      <HeaderLayout
        title={"Привет, " + User.name + "!"}
        text={"Начни переводить текст прямо сейчас"}
      />
      <TariffLayout activeAcc={sub.isActive} />

      <CardsLayout />
    </div>
  )
}

const CardsLayout = () => {
  return (
    <>
      <MobileCardsLayout />
      <TabsCardsLayout />
      <ComputerCardsLayout />
    </>
  )
}

const MobileCardsLayout = () => {
  return (
    <div className="flex flex-col md:hidden w-full gap-y-[24px]">
      <div className="w-full flex flex-wrap gap-x-[12px] gap-y-[24px] ">
        <ChatCard />
        <BuyCard />
        <CommentCard />
        <SubScriptionCard />
        <IntroduceCard />
        <PlanCard />
        <HistoryCard />
      </div>
    </div>
  )
}

const TabsCardsLayout = () => {
  return (
    <div className="flex-col w-full gap-[16px] hidden md:flex xl:hidden">
      <div className="w-full gap-[16px] flex">
        <div className="w-[calc(50%-8px)] flex flex-col gap-[16px]">
          <ChatCard />
          <HistoryCard />
        </div>
        <div className="w-[calc(50%-8px)] flex flex-col gap-[16px]">
          <div className="flex w-full gap-[16px] ">
            <BuyCard />
            <IntroduceCard />
          </div>

          <div className="flex flex-col w-full gap-[16px]">
            <SubScriptionCard />
            <PlanCard />
          </div>
        </div>
      </div>

      <div className="flex w-full">
        <CommentCard />
      </div>
    </div>
  )
}

const ComputerCardsLayout = () => {
  return (
    <div className="flex-col xl:flex-row w-full gap-[24px] hidden xl:flex 2xl:gap-[40px]">
      <div className="w-full xl:w-[calc(64%-20px)] flex flex-wrap  gap-[24px] 2xl:gap-[40px]">
        <ChatCard />
        <BuyCard />
        <CommentCard />
        <IntroduceCard />
        <SubScriptionCard />
      </div>

      <div className="flex-1 hidden xl:flex flex-col gap-[24px] 2xl:gap-[40px]">
        <HistoryCard />
        <PlanCard />
      </div>
    </div>
  )
}
