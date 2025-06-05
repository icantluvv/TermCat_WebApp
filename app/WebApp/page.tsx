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
import { webAppLinks } from "@/constants/webAppLink"

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
    <div className="flex flex-col gap-y-[24px] lg:gap-y-[40px]">
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
    <>
      <MobileCardsLayout />
      <TabsCardsLayout />
      <ComputerCardsLayout />
    </>

    // <div className="flex flex-col xl:flex-row w-full gap-y-[24px] xl:gap-[40px]">
    //   <div className="w-full xl:w-[calc(66.666%-20px)] flex flex-wrap gap-x-[12px] gap-y-[24px] xl:gap-[40px]">
    //     <ChatCard href={webAppLinks.chat} />
    //     <BuyCard href={webAppLinks.profile} />
    //     <CommentCard />
    //     <SubScriptionCard href={webAppLinks.profile} />
    //     <IntroduceCard href={webAppLinks.introduce} />
    //     <PlanCard href={webAppLinks.profile} />
    //     <HistoryCard href={webAppLinks.history} />
    //   </div>

    //   <div className="flex-1 hidden xl:flex flex-col gap-y-[24px] xl:gap-[40px]">
    //     <HistoryCard href={webAppLinks.history} />
    //     <PlanCard href={webAppLinks.profile} />
    //   </div>
    // </div>
  )
}

const MobileCardsLayout = () => {
  return (
    <div className="flex flex-col md:hidden w-full gap-y-[24px]">
      <div className="w-full flex flex-wrap gap-x-[12px] gap-y-[24px] ">
        <ChatCard href={webAppLinks.chat} />
        <BuyCard href={webAppLinks.profile} />
        <CommentCard />
        <SubScriptionCard href={webAppLinks.profile} />
        <IntroduceCard href={webAppLinks.introduce} />
        <PlanCard href={webAppLinks.profile} />
        <HistoryCard href={webAppLinks.history} />
      </div>
    </div>
  )
}

const TabsCardsLayout = () => {
  return (
    <div className="flex-col w-full gap-[16px] hidden md:flex xl:hidden">
      <div className="w-full gap-[16px] flex">
        <div className="w-[calc(50%-8px)] flex flex-col gap-[16px]">
          <ChatCard href={webAppLinks.chat} />
          <HistoryCard href={webAppLinks.history} />
        </div>
        <div className="w-[calc(50%-8px)] flex flex-col gap-[16px]">
          <div className="flex w-full gap-[16px] ">
            <BuyCard href={webAppLinks.profile} />
            <IntroduceCard href={webAppLinks.introduce} />
          </div>

          <div className="flex flex-col w-full gap-[16px]">
            <SubScriptionCard href={webAppLinks.profile} />
            <PlanCard href={webAppLinks.profile} />
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
    <div className="flex-col xl:flex-row w-full gap-y-[24px] hidden xl:flex xl:gap-[40px]">
      <div className="w-full xl:w-[calc(66.666%-20px)] flex flex-wrap gap-x-[12px] gap-y-[24px] xl:gap-[40px]">
        <ChatCard href={webAppLinks.chat} />
        <BuyCard href={webAppLinks.profile} />
        <CommentCard />
        <IntroduceCard href={webAppLinks.introduce} />
        <SubScriptionCard href={webAppLinks.profile} />
      </div>

      <div className="flex-1 hidden xl:flex flex-col gap-y-[24px] xl:gap-[40px]">
        <HistoryCard href={webAppLinks.history} />
        <PlanCard href={webAppLinks.profile} />
      </div>
    </div>
  )
}
