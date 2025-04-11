import Link from "next/link"
import React from "react"

const CommentCardDesktop = () => {
  return (
    <Link
      className="rounded-[24px] w-full bg-black h-[128px] text-white px-10 active:opacity-85 transition-all hidden xl:flex items-center"
      href={""}
    >
      <div className="w-full flex flex-col items-start">
        <p className="text-[2rem] font-cygre font-medium">
          Помогите нам стать лучше
        </p>
        <p className="text-[1.125rem] opacity-50 font-poppins">
          Пройдите опрос для улучшения нашего сервиса
        </p>
      </div>
      <div className="text-black px-5 py-2 rounded-[24px] bg-[#c2f041] whitespace-nowrap font-cygre font-medium">
        Пройти опрос за минуту
      </div>
    </Link>
  )
}

const CommentCardMobile = () => {
  return (
    <Link
      className="rounded-[24px] w-full bg-black text-white px-[24px] py-[3vh] active:opacity-85 transition-all flex flex-col xl:hidden gap-y-6"
      href={""}
    >
      <div className="flex flex-col gap-y-2">
        <p className="text-[1.5rem] font-medium font-cygre">
          Помогите стать лучше
        </p>
        <p className="text-[0.75rem] opacity-50 font-poppins">
          Пройдите опрос для улучшения нашего сервиса
        </p>
      </div>

      <button className="text-black px-4 py-2 max-w-[75%] rounded-[24px] bg-[#c2f041] whitespace-nowrap text-[0.875rem] font-cygre font-medium">
        Пройти опрос за минуту
      </button>
    </Link>
  )
}

const CommentCard = () => {
  return (
    <>
      <CommentCardDesktop />
      <CommentCardMobile />
    </>
  )
}

export default CommentCard
