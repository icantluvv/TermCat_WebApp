import HeaderLayout from "@/components/shared/header/HeaderLayout"
import PromoModal from "@/components/molecules/WebApp-pages/profile/PromoModal"
import ResponsiveProfileSections from "@/app/(public)/WebApp/profile/components/ResponsiveProfileSections"
import { getMe } from "@/package/api/profile/getMe"
import { getSubStatus } from "@/package/api/profile/getSubStatus"

export const dynamic = "force-dynamic"

async function Profile() {
  const user = await getMe()
  const subResult = await getSubStatus(user.id)

  return (
    <div className="flex flex-col gap-[24px] lg:gap-[40px]">
      <HeaderLayout title="Личный профиль" text="Здесь хранятся все ваши данные" />
      <div className="w-full">
        <ResponsiveProfileSections user={user} subscribe={subResult} />
      </div>
      <PromoModal />
    </div>
  )
}

export default Profile
