"use client"

import { usePromoStore } from "@/store/PromoStore"
import Button from "@/components/Button/Button"
import { useEffect, useState } from "react"
import Image from "next/image"
import active_sub_back from "@/public/images/profile/active_sub_back.png"

interface SubscribeStatusProps {
  subscribe?: {
    id: number
    startedAt: string
    expiresAt: string
    isActive: boolean
  } | null
}

const SubscriptionStatus = ({ subscribe }: SubscribeStatusProps) => {
  const { openPromoModal } = usePromoStore()

  if (subscribe?.isActive) {
    return (
      <SubscriptionActive
        expiresAt={subscribe.expiresAt}
        startedAt={subscribe.startedAt}
      />
    )
  }

  return (
    <div className="bg-[#151515] p-[24px] xl:p-[40px] rounded-[24px] flex flex-wrap gap-y-6  w-full justify-between">
      <h4 className="text-[24px] xl:text-[32px] text-white whitespace-nowrap">
        Активных подписок нет
      </h4>
      <Button
        text={"Приобрести"}
        onClick={() => openPromoModal()}
        variant={"main"}
      />
    </div>
  )
}

export default SubscriptionStatus

const SubscriptionActive = ({
  expiresAt,
  startedAt
}: {
  expiresAt: string
  startedAt: string
}) => {
  const [timeLeft, setTimeLeft] = useState<string>("")
  const [progressPercent, setProgressPercent] = useState<number>(0)

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date()
      const expires = new Date(expiresAt)
      const start = new Date(startedAt)

      const diff = expires.getTime() - now.getTime()
      const diffFromStart = now.getTime() - start.getTime()

      if (diff <= 0) {
        setTimeLeft("Подписка истекла")
        setProgressPercent(100)
        return
      }

      const daysLeft = Math.floor(diff / (1000 * 60 * 60 * 24))
      setTimeLeft(`${daysLeft} дней доступно`)

      const daysPassed = Math.floor(diffFromStart / (1000 * 60 * 60 * 24))

      const maxDays = 30
      let percent = (daysPassed / maxDays) * 100
      if (percent > 100) percent = 100
      if (percent < 0) percent = 0

      setProgressPercent(percent)
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [expiresAt, startedAt])

  return (
    <div className="p-[24px] xl:p-[40px] rounded-[24px] flex w-full relative overflow-hidden">
      <div className="z-10 flex w-full justify-between gap-[12px] flex-wrap items-center">
        <h4 className="text-[24px] xl:text-[32px] text-PrimaryBlack whitespace-nowrap">
          Активные подписки
        </h4>

        <div className="flex items-center gap-[12px] xl:gap-[24px] justify-between">
          <button className="bg-PrimaryBlack cursor-default px-[18px] py-[8px] xl:px-[28px] xl:py-[12px] rounded-full text-LightGray text-[14px] xl:text-[16px]">
            Тариф старт
          </button>
          <div className="flex flex-col gap-[6px] w-[150px]">
            <p className="text-PrimaryBlack text-[16px]">{timeLeft}</p>

            <div className="w-full h-[5px] rounded-full overflow-hidden flex">
              <div
                className="h-full bg-PrimaryGreen transition-all duration-500"
                style={{ width: `${100 - progressPercent}%` }}
              />
              <div
                className="h-full bg-PrimaryBlack transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      <Image
        src={active_sub_back}
        alt={"active_sub_back"}
        fill
        className="rounded-[24px]"
        style={{ objectFit: "cover" }}
      />
    </div>
  )
}
