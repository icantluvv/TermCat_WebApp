export const revalidate = 60

import HeaderLayout from "@/components/header/HeaderLayout"
import LinkedServices from "./components/LinkedServices"
import SubscriptionStatusMobile from "./components/SubscriptionStatusMobile"
import SubscriptionStatus from "./components/SubscriptionStatus"
import ProfileInfo from "./components/ProfileInfo"
import { cookies } from "next/headers"

async function Profile() {
  const cookieStore = await cookies()
  const accessToken = cookieStore.get("accessToken")?.value
  const res = await fetch(`${process.env.BACKEND_URL}/users/getMe`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`
    }
  })

  const user: User = await res.json()

  return (
    <div className="flex flex-col gap-[24px] lg:gap-[40px]">
      <HeaderLayout
        title="Личный профиль"
        text="Здесь хранятся все ваши данные"
      />
      <main className="w-full">
        <ComputerSection user={user} />
        <TableSection user={user} />
        <MobileSection user={user} />
      </main>
    </div>
  )
}
export default Profile

const ComputerSection = ({ user }: UserProps) => {
  return (
    <div className="w-full flex-col gap-[40px] hidden xl:flex">
      <div className="w-full flex gap-[40px]">
        <ProfileInfo user={user} />
        <LinkedServices />
      </div>
      <div className="w-[calc(55%-20px)]">
        <SubscriptionStatus />
      </div>
    </div>
  )
}

const TableSection = ({ user }: UserProps) => {
  return (
    <div className="w-full gap-[20px] hidden md:flex xl:hidden">
      <ProfileInfo user={user} />
      <div className="w-[calc(50%-10px)] flex flex-col gap-[20px]">
        <SubscriptionStatusMobile />
        <LinkedServices />
      </div>
    </div>
  )
}

const MobileSection = ({ user }: UserProps) => {
  return (
    <div className="w-full gap-[20px] flex flex-col md:hidden">
      <ProfileInfo user={user} />
      <SubscriptionStatusMobile />
      <LinkedServices />
    </div>
  )
}
