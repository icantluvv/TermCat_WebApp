import Button from "@/components/Button/Button"
import React from "react"

const SubscriptionStatusMobile = () => (
  <div className="bg-[#151515] p-[24px] rounded-[24px] flex flex-wrap gap-y-6 lg:hidden w-full justify-between font-cygre font-medium">
    <p className="text-[1.5rem] font-medium text-white text-nowrap">
      Активных подписок нет
    </p>
    <Button text={"Приобрести"} variant={"main"}></Button>
  </div>
)

export default SubscriptionStatusMobile
