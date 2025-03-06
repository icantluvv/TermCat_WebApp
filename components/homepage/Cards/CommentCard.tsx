import Link from "next/link"
import React from "react"

const CommentCard = () => {
  return (
    <>
      {/* pc version */}
      <Link
        className="rounded-[24px] w-full bg-black h-[128px] text-white px-10 hover:opacity-85 transition-all hidden xl:flex items-center"
        href={""}
      >
        <div className="w-full flex flex-col items-start">
          <p className="text-[2rem] font-cygre font-medium">
            Помогите нам стать лучше
          </p>
          <p className="text-[1.125rem] font-normal opacity-50 font-poppins">
            Пройдите опрос для улучшения нашего сервиса
          </p>
        </div>
        <div className="text-black px-5 py-2 rounded-[24px] bg-[#c2f041] whitespace-nowrap font-cygre font-medium">
          Пройти опрос за минуту
        </div>
      </Link>

      {/* mobile version */}

      <Link
        className="rounded-[24px] w-full bg-black text-white px-8 py-[3vh] hover:opacity-85 transition-all flex flex-col xl:hidden gap-y-6"
        href={""}
      >
        <div className="flex flex-col gap-y-2">
          <p className="text-[30px] font-medium">Помогите стать лучше</p>
          <p className="text-[14px] font-normal opacity-50 font-thin">
            Пройдите опрос для улучшения нашего сервиса
          </p>
        </div>

        <button className="text-black px-4 py-2 max-w-[75%] rounded-[24px] bg-[#c2f041] whitespace-nowrap">
          Пройти опрос за минуту
        </button>
      </Link>
    </>
  )
}

export default CommentCard
