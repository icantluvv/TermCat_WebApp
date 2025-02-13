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
    <div className="flex xl:flex-row flex-col w-full gap-6">
      <div className="flex flex-col w-full xl:w-2/3  gap-6">
        <div className="flex w-full gap-6">
          <ChatCard></ChatCard>
          <BuyCard></BuyCard>
        </div>
        <CommentCard></CommentCard>
        <div className="flex w-full gap-6">
          <IntroduceCard></IntroduceCard>
          <SubScriptionCard></SubScriptionCard>
        </div>
      </div>

      <div className="flex xl:flex-col xl:w-1/3 gap-6">
        <HistoryCard></HistoryCard>
        <PlanCard></PlanCard>
      </div>
    </div>
  )
}

export default CardsLayout
