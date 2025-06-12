import Image from "next/image"
import stat_back_mobile from "@/public/images/landing/stats/stat_back_mobile.svg"
import arrow from "@/public/images/landing/arrow.svg"

const StatCard = ({ item }: InfoCardProps) => {
  return (
    <div className="relative flex flex-col items-center text-PrimaryBlack xl:hidden select-none justify-center">
      <Image
        src={stat_back_mobile}
        alt="background"
        className="absolute w-[222px] h-[277px]"
        fill
        objectFit="cover"
      />

      <svg className="w-[222px] h-[277px] flex">
        <path
          className="transition-colors duration-300 bg-price-card"
          d="M222 24C222 10.7452 211.255 0 198 0H24C10.7452 0 0 10.7452 0 24V253C0 266.255 10.7452 277 24 
          277H152C164.703 277 175 266.703 175 254V254C175 240.745 185.745 230 199 230V230C211.703 230 222 219.703 222 207V24Z"
          fill="#E8E8E8"
        />
      </svg>

      <div className="absolute w-[222px] h-[277px] px-[4%] py-[9%] flex flex-col gap-[24px]">
        <div
          className="top-[8%] left-[5%] w-[36px] h-[36px] rounded-full border-[1.5px] border-PrimaryBlack flex items-center justify-center 
        text-[14px] font-medium"
        >
          {item.id.toString().padStart(2, "0")}
        </div>

        <div className="flex flex-col gap-[6px]">
          <p className="text-[14px]">{item.middleText}</p>
          <h3 className="text-[42px] font-bold">{item.bigText}</h3>
          <div className="flex items-center gap-[5px]">
            {item.extraContent}
            <p className="text-[14px]">{item.smallText}</p>
          </div>
        </div>
        <div className="rounded-full w-[36px] h-[36px] bg-LightGray absolute right-0 bottom-0 flex items-center justify-center">
          <Image src={arrow} className="w-[19px] xl:w-[22px]" alt={""}></Image>
        </div>
      </div>
    </div>
  )
}

export default StatCard
