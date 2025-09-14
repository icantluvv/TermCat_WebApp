export const revalidate = 60

import HeaderLayout from "@/components/shared/header/HeaderLayout"
import LinkedServices from "@/components/molecules/WebApp-pages/profile/LinkedServices"
import SubscriptionStatus from "@/components/molecules/WebApp-pages/profile/SubscriptionStatus"
import ProfileInfo from "@/components/molecules/WebApp-pages/profile/ProfileInfo"
import { cookies } from "next/headers"
import PromoModal from "@/components/molecules/WebApp-pages/profile/PromoModal"

async function Profile() {
  const cookieStore = await cookies()
  const accessToken = cookieStore.get("accessToken")?.value

  const getMe = await fetch(`${process.env.BACKEND_URL}/users/getMe`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`
    }
  })

  const user: User = await getMe.json()

  const getSub = await fetch(`${process.env.BACKEND_URL}/subscriptions/getInfoSub/${user.id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`
    }
  })

  let subscribe = null
  if (getSub.ok) {
    try {
      const text = await getSub.text()
      subscribe = text ? JSON.parse(text) : null
    } catch {
      subscribe = null
    }
  }

  return (
    <div className="flex flex-col gap-[24px] lg:gap-[40px]">
      <HeaderLayout title="Личный профиль" text="Здесь хранятся все ваши данные" />
      <main className="w-full">
        <ResponsiveProfileSections user={user} subscribe={subscribe} />
      </main>
      <PromoModal />
    </div>
  )
}

export default Profile

const ResponsiveProfileSections = ({ user, subscribe }: ProfilePageProps) => {
  return (
    <>
      {/* Computer large screens */}
      <SectionWrapper
        className="hidden xl:flex flex-col gap-[40px]"
        layout={
          <>
            <div className="flex gap-[40px]">
              <ProfileInfo user={user} />
              <LinkedServices />
            </div>
            <div className="w-[calc(55%-20px)]">
              <SubscriptionStatus subscribe={subscribe} />
            </div>
          </>
        }
      />

      {/* Tablet medium screens */}
      <SectionWrapper
        className="hidden md:flex xl:hidden gap-[20px]"
        layout={
          <>
            <ProfileInfo user={user} />
            <div className="w-[calc(50%-10px)] flex flex-col gap-[20px]">
              <SubscriptionStatus subscribe={subscribe} />
              <LinkedServices />
            </div>
          </>
        }
      />

      {/* Mobile small screens */}
      <SectionWrapper
        className="flex flex-col md:hidden gap-[20px]"
        layout={
          <>
            <ProfileInfo user={user} />
            <SubscriptionStatus subscribe={subscribe} />
            <LinkedServices />
          </>
        }
      />
    </>
  )
}

const SectionWrapper = ({ className, layout }: { className: string; layout: React.ReactNode }) => (
  <div className={className}>{layout}</div>
)
