import HeaderLayout from "@/components/header/HeaderLayout"
import React from "react"

import LinkedServices from "./components/LinkedServices"
import SubscriptionStatusMobile from "./components/SubscriptionStatusMobile"
import SubscriptionStatus from "./components/SubscriptionStatus"
import ProfileInfo from "./components/ProfileInfo"

const Profile = () => {
  return (
    <>
      <HeaderLayout
        title="Личный профиль"
        text="Здесь хранятся все ваши данные"
      />
      <section className="w-full flex gap-4 lg:gap-6 flex-col md:flex-row flex-wrap pb-[5vh] lg:pb-0">
        <div className="flex lg:flex-col gap-4 lg:gap-6 md:w-1/2 lg:min-w-[700px]">
          <ProfileInfo />
          <SubscriptionStatus />
        </div>

        <div className="xl:w-1/3 md:flex-1 flex flex-col gap-4 lg:gap-6 lg:flex-row flex-wrap ">
          <LinkedServices />
          <SubscriptionStatusMobile />
        </div>
      </section>
    </>
  )
}

export default Profile
