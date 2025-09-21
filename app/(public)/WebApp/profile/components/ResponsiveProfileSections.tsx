import ProfileInfo from "@/components/molecules/WebApp-pages/profile/ProfileInfo"
import LinkedServices from "@/components/molecules/WebApp-pages/profile/LinkedServices"
import SubscriptionStatus from "@/components/molecules/WebApp-pages/profile/SubscriptionStatus"
import SectionWrapper from "@/app/(public)/WebApp/profile/components/SectionWrapper"
import { User } from "@/types/User"
import { ActiveSub, SubData } from "@/types/Subscription"

type ResponsiveProfileSectionsProps = {
  user: User
  subscribe: SubData | ActiveSub
}

const ResponsiveProfileSections = ({ user, subscribe }: ResponsiveProfileSectionsProps) => {
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

      {/* Mobile medium screens */}
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
export default ResponsiveProfileSections
