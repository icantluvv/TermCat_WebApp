import Button from "@/components/Button/Button"
import React from "react"

const SubscriptionStatusMobile = () => (
  <div
    className="bg-[#151515] opacity-50 p-[24px] rounded-[24px] flex flex-wrap gap-y-6  w-full 
  justify-between"
  >
    <h4 className="text-[24px] font-medium text-white text-nowrap">
      Активных подписок нет
    </h4>
    <Button text={"Приобрести"} variant={"main"}></Button>
  </div>
)

export default SubscriptionStatusMobile
