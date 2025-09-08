import HeaderLayout from "@/components/shared/header/HeaderLayout"
import { cookies } from "next/headers"
import { getMe } from "@/package/api/profile/getMe"
import { getSubInfo } from "@/package/api/profile/getSubInfo"
import TariffLayout from "../../../components/feature/WebApp-pages/index/TariffLayout"
import CardsLayout from "@/components/feature/WebApp-pages/index/CardsLayout"

export default async function Home() {
  const cookieStore = await cookies()
  const accessToken = cookieStore.get("accessToken")?.value

  if (!accessToken) {
    throw new Error("Access token not found")
  }
  const userResult = await getMe(accessToken)

  if (!userResult.success) {
    console.error("Failed to get user info:", userResult.error?.message)
    throw new Error(userResult.error?.message || "Failed to get user info")
  }

  const subResult = await getSubInfo(userResult.data!.id, accessToken)

  if (!subResult.success) {
    console.error("Failed to get subscription info:", subResult.error?.message)
    throw new Error(subResult.error?.message || "Failed to get subscription info")
  }

  return (
    <div className="flex flex-col gap-y-[24px] lg:gap-y-[40px] ">
      <HeaderLayout title={"Привет, " + userResult.data!.name + "!"} text={"Начни переводить текст прямо сейчас"} />
      <TariffLayout activeAcc={subResult.data!.isActive} />
      <CardsLayout />
    </div>
  )
}
