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
    <div className="flex flex-col gap-[24px] ">
      <HeaderLayout
        title="Личный профиль"
        text="Здесь хранятся все ваши данные"
      />
      <main className="w-full flex gap-4 lg:gap-6 flex-col md:flex-row flex-wrap lg:pb-0">
        <ProfileForm user={user} />
        <ProfileServices />
      </main>
    </div>
  )
}
export default Profile

const ProfileForm = ({ user }: UserProps) => {
  return (
    <section className="flex lg:flex-col gap-[12px] lg:gap-6 md:w-1/2 lg:min-w-[700px]">
      <ProfileInfo user={user} />
      <SubscriptionStatus />
    </section>
  )
}

const ProfileServices = () => {
  return (
    <section className="xl:w-1/3 md:flex-1 flex flex-col gap-4 lg:gap-6 lg:flex-row flex-wrap ">
      <LinkedServices />
      <SubscriptionStatusMobile />
    </section>
  )
}
