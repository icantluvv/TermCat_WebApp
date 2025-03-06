import React from "react"
import ChatCard from "./Cards/ChatCard"
import BuyCard from "./Cards/BuyCard"
import CommentCard from "./Cards/CommentCard"
import IntroduceCard from "./Cards/IntroduceCard"
import SubScriptionCard from "./Cards/SubcriptionCard"
import HistoryCard from "./Cards/HistoryCard"
import PlanCard from "./Cards/PlanCard"

const CardsLayout = () => {
  return (
    <div className="flex xl:flex-row flex-col w-full mb-[4vh] xl:mb-0 gap-4 xl:gap-6">
      <div className="flex flex-col w-full xl:w-[64%]">
        <div className="flex w-full h-full flex-wrap justify-between gap-4 xl:gap-6">
          <ChatCard></ChatCard>
          <BuyCard></BuyCard>
          <div className="hidden xl:flex w-full">
            <CommentCard></CommentCard>
          </div>
          <IntroduceCard></IntroduceCard>
          <SubScriptionCard></SubScriptionCard>
        </div>
      </div>

      <div className="flex flex-col w-full xl:w-[36%] justify-between flex-grow gap-4 xl:gap-6">
        <HistoryCard></HistoryCard>
        <PlanCard></PlanCard>
      </div>

      <div className="flex xl:hidden">
        <CommentCard></CommentCard>
      </div>
    </div>
  )
}

export default CardsLayout
