import HeaderLayout from "@/components/header/HeaderLayout"
import TariffLayout from "./components/TariffLayout"
import { cookies } from "next/headers"
import ChatCard from "./components/ChatCard"
import BuyCard from "./components/BuyCard"
import CommentCard from "./components/CommentCard"
import HistoryCard from "./components/HistoryCard"
import IntroduceCard from "./components/IntroduceCard"
import PlanCard from "./components/PlanCard"
import SubScriptionCard from "./components/SubcriptionCard"

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

  return (
    <div className="flex flex-col gap-y-[24px] md:gap-y-[40px]">
      <HeaderLayout
        title={"Привет, " + User.name}
        text={"Начни редактировать проект прямо сейчас"}
      />
      <TariffLayout />
      <CardsLayout />
    </div>
  )
}

const CardsLayout = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full gap-y-[24px] md:gap-[40px]">
      <div className="w-full lg:w-[calc(66.666%-20px)] flex flex-wrap gap-x-[12px] gap-y-[24px] lg:gap-[40px]">
        <ChatCard></ChatCard>
        <BuyCard></BuyCard>
        <CommentCard></CommentCard>
        <SubScriptionCard></SubScriptionCard>
        <IntroduceCard></IntroduceCard>
      </div>

      <div className="flex-1 flex flex-col gap-y-[24px] lg:gap-[40px]">
        <HistoryCard></HistoryCard>
        <PlanCard></PlanCard>
      </div>
    </div>
  )
}
