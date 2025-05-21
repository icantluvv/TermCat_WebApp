import Image from "next/image"
import React from "react"
import back from "@/public/images/404/background_404.svg"

const NotReadyPage = () => {
  return (
    <div className="flex flex-col h-screen w-full bg-PageBG relative">
      <div className="pl-[10vw] pt-[15vh]">
        <h2 className="text-PrimaryBlack font-cygre text-[42px] font-medium">
          Страница не найдена
        </h2>
        <div className="flex flex-col text-Gray02 font-poppins text-[1.125rem]">
          <p>
            Эта страница в данный момент недоступна или находится в разработке
          </p>
          <p>Приносим свои извинения</p>
        </div>
      </div>

      <Image src={back} alt={back} className="absolute bottom-0"></Image>
    </div>
  )
}

export default NotReadyPage
