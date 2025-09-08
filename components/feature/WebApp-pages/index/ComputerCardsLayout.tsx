import ChatCard from "@/components/feature/WebApp-pages/index/ChatCard"
import BuyCard from "@/components/feature/WebApp-pages/index/BuyCard"
import CommentCard from "@/components/feature/WebApp-pages/index/CommentCard"
import IntroduceCard from "@/components/feature/WebApp-pages/index/IntroduceCard"
import SubScriptionCard from "@/components/feature/WebApp-pages/index/SubcriptionCard"
import HistoryCard from "@/components/feature/WebApp-pages/index/HistoryCard"
import PlanCard from "@/components/feature/WebApp-pages/index/PlanCard"

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
