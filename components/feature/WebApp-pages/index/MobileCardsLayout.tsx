import ChatCard from "@/components/feature/WebApp-pages/index/ChatCard"
import BuyCard from "@/components/feature/WebApp-pages/index/BuyCard"
import CommentCard from "@/components/feature/WebApp-pages/index/CommentCard"
import SubScriptionCard from "@/components/feature/WebApp-pages/index/SubcriptionCard"
import IntroduceCard from "@/components/feature/WebApp-pages/index/IntroduceCard"
import PlanCard from "@/components/feature/WebApp-pages/index/PlanCard"
import HistoryCard from "@/components/feature/WebApp-pages/index/HistoryCard"

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
export default MobileCardsLayout
