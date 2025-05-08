import React from "react"

const SubscriptionStatusMobile = () => (
  <div className="bg-[#151515] p-[24px] lg:p-[30px] 2xl:p-[40px] rounded-[24px] lg:min-w-[495px] flex-wrap gap-y-6 gap-x-2 lg:flex hidden w-full justify-between font-cygre font-medium">
    <p className="text-[2rem] font-medium text-white text-nowrap">
      Активных подписок нет
    </p>
    <button className="bg-[#C2F041] hover:bg-[#B9E53E] active:bg-[#B0D93C] rounded-[24px] px-[28px] py-[16px] text-[1rem] transition-all">
      Приобрести
    </button>
  </div>
)

export default SubscriptionStatusMobile
