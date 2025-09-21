import HeaderLayout from "@/components/shared/header/HeaderLayout"
import TariffLayout from "@/components/molecules/WebApp-pages/index/TariffLayout"
import CardsLayout from "@/components/molecules/WebApp-pages/index/CardsLayout"
import { getMe } from "@/package/api/profile/getMe"
import { getSubStatus } from "@/package/api/profile/getSubStatus"

export default async function Home() {
  const user = await getMe()
  const subscription = await getSubStatus(user.id)

  return (
    <div className="flex flex-col gap-y-[24px] lg:gap-y-[40px] ">
      <HeaderLayout title={"Привет, " + user.name + "!"} text={"Начни переводить текст прямо сейчас"} />
      <TariffLayout isActive={subscription} />
      <CardsLayout />
    </div>
  )
}
