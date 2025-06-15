import Button from "@/components/Button/Button"
import React from "react"

const SubscriptionStatusMobile = () => (
  <div
    className="bg-PrimaryBlack lg:p-[30px] 2xl:p-[40px] rounded-[24px] md:w-full flex-wrap gap-y-6 gap-x-2 lg:flex hidden 
  w-full justify-between opacity-50 select-none"
  >
    <p className="text-[2rem] text-white text-nowrap font-medium">
      Активных подписок нет
    </p>
    <Button text={"Приобрести"} variant={"main"}></Button>
  </div>
)

export default SubscriptionStatusMobile
