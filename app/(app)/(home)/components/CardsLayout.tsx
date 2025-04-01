import React from "react"
import ChatCard from "./ChatCard"
import BuyCard from "./BuyCard"
import CommentCard from "./CommentCard"
import IntroduceCard from "./IntroduceCard"
import SubScriptionCard from "./SubcriptionCard"
import HistoryCard from "./HistoryCard"
import PlanCard from "./PlanCard"

const CardsLayout = () => {
  return (
    <div className="flex xl:flex-row flex-col w-full mb-[4vh] gap-4 xl:mb-0 ">
      <div className="flex flex-col w-full xl:w-[64%]">
        <div className="flex w-full flex-wrap gap-4">
          <ChatCard></ChatCard>
          <BuyCard></BuyCard>
          <div className="hidden xl:flex w-full">
            <CommentCard></CommentCard>
          </div>
          <IntroduceCard></IntroduceCard>
          <SubScriptionCard></SubScriptionCard>
        </div>
      </div>

      <div className="flex flex-col gap-4 w-full xl:w-[36%] flex-grow">
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
