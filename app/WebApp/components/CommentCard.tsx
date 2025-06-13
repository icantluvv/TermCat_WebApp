import React from "react"

const CommentCard = () => {
  return (
    <button
      className="order-[4]  rounded-[24px] w-full flex bg-black p-[24px] text-white active:opacity-85 transition-all 
      items-start lg:items-center flex-col lg:flex-row gap-[24px] select-none "
    >
      <div className="w-full flex flex-col items-start gap-[12px]">
        <p className="hidden xl:flex text-[2rem] font-cygre font-medium">
          Помогите нам стать лучше
        </p>
        <p className="text-[1.5rem] flex xl:hidden font-cygre font-medium">
          Помогите стать лучше
        </p>
        <p className="text-[0.75rem] md:text-[1.125rem] opacity-50 font-poppins">
          Пройдите опрос для улучшения нашего сервиса
        </p>
      </div>
      <div className="text-black px-5 py-2 rounded-[24px] bg-PrimaryGreen whitespace-nowrap font-cygre font-medium">
        Пройти опрос за минуту
      </div>
    </button>
  )
}

export default CommentCard
