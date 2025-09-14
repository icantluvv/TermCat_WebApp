import ChatCard from "@/components/molecules/WebApp-pages/index/ChatCard"
import BuyCard from "@/components/molecules/WebApp-pages/index/BuyCard"
import CommentCard from "@/components/molecules/WebApp-pages/index/CommentCard"
import IntroduceCard from "@/components/molecules/WebApp-pages/index/IntroduceCard"
import SubScriptionCard from "@/components/molecules/WebApp-pages/index/SubcriptionCard"
import HistoryCard from "@/components/molecules/WebApp-pages/index/HistoryCard"
import PlanCard from "@/components/molecules/WebApp-pages/index/PlanCard"

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

export default ComputerCardsLayout
