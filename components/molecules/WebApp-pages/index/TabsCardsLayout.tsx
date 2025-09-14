import ChatCard from "@/components/molecules/WebApp-pages/index/ChatCard"
import HistoryCard from "@/components/molecules/WebApp-pages/index/HistoryCard"
import BuyCard from "@/components/molecules/WebApp-pages/index/BuyCard"
import IntroduceCard from "@/components/molecules/WebApp-pages/index/IntroduceCard"
import SubScriptionCard from "@/components/molecules/WebApp-pages/index/SubcriptionCard"
import PlanCard from "@/components/molecules/WebApp-pages/index/PlanCard"
import CommentCard from "@/components/molecules/WebApp-pages/index/CommentCard"

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

export default TabsCardsLayout
