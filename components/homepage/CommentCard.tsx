import React from "react"

const CommentCard = () => {
  return (
    <button className="rounded-[24px] w-full bg-black h-[128px] text-white px-10 hover:opacity-50 transition-all flex items-center">
      <div className="w-full flex flex-col items-start">
        <p className="text-[2rem] font-medium">Помогите нам стать лучше</p>
        <p className="text-[1.125rem] font-normal opacity-50 font-thin">
          Пройдите опрос для улучшения нашего сервиса
        </p>
      </div>
      <div className="text-black px-4 py-2 rounded-[24px] bg-[#c2f041] whitespace-nowrap">
        Пройти опрос за минуту
      </div>
    </button>
  )
}

export default CommentCard
