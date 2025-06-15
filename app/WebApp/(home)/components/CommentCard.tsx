const CommentCard = () => {
  return (
    <button
      className="order-[4] rounded-[24px] w-full flex bg-black p-[24px] text-white active:opacity-90 
      items-start md:items-center flex-col md:flex-row gap-[24px] select-none "
    >
      <div className="w-full flex flex-col items-start gap-[12px]">
        <h3 className="text-[24px] text-start xl:text-[32px] flex gap-[8px]">
          Помогите<span className="hidden 2xl:flex">нам</span> стать лучше
        </h3>

        <p className="text-[12px] xl:text-[14px] 2xl:text-[18px] text-start md:text-nowrap text-Gray02">
          Пройдите опрос для улучшения нашего сервиса
        </p>
      </div>

      <div className="text-PrimaryBlack bg-PrimaryGreen active:bg-PrimaryGreenActive text-[14px] text-nowrap rounded-full lg:text-[16px] px-[24px] py-[16px]">
        Пройти опрос за минуту
      </div>
    </button>
  )
}

export default CommentCard
