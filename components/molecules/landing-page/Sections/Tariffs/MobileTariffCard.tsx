import Image from "next/image"
import Link from "next/link"
import Price from "@/public/images/landing/tariffs/Price.svg"
import check from "@/public/images/landing/tariffs/check.svg"
import price_back_mobile from "@/public/images/landing/tariffs/price_back_mobile.svg"

const MobileTariffCard = ({ features }: TariffCardProps) => {
  return (
    <div className="relative flex flex-col items-center text-PrimaryBlack md:hidden select-none justify-center">
      <div className="absolute top-[-10px] px-[18px] py-[2px] bg-PrimaryGreen rounded-[16px] z-[1500]">
        <p className="text-[0.75rem]">Самый популярный</p>
      </div>

      <Image
        src={price_back_mobile}
        alt={price_back_mobile}
        className="absolute w-[262px] h-[456px]"
        fill
        objectFit="cover"
      ></Image>
      <svg className="w-[262px] h-[456px] flex">
        <path
          fill="#e8e8e8"
          d="M 262 24 C 262 10.7452 251.255 0 238 0 H 24 C 10.7452 0 0 10.7452 0 24 V 432 C 0 445.255 10.7452 456 24 456 H 104 C 117.255 456 128 445.255 128 432 V 431.575 C 128 418.32 138.745 407.575 152 407.575 H 238 C 251.255 407.575 262 396.83 262 383.575 V 24 Z"
        />
      </svg>
      <Link
        href="/paying"
        className="text-PrimaryBlack font-medium bg-PrimaryGreen flex z-[1000] absolute 
        px-[16px] py-[8px] text-[14px] xl:text-[16px] rounded-[32px] bottom-0 right-0"
      >
        Попробовать
      </Link>

      <div className="absolute flex flex-col items-center w-full gap-y-[24px] px-[12px] h-[390px]">
        <div className="text-center gap-[6px]">
          <p className="text-[24px] font-medium">Базовый план</p>
          <p className="text-[16px]">Индивидуальные переводчики и фрилансеры</p>
        </div>

        <div className="flex flex-col items-center gap-[6px]">
          <Image src={Price} alt="Price" className="w-[110px]" />
          <p className="text-[14px]">За месяц использования</p>
        </div>

        <div className="flex flex-col gap-[6px] text-[1rem] leading-5 w-[240px]">
          {features.map((feature, idx) => (
            <div key={idx} className="flex gap-[8px] items-start">
              <Image src={check} alt="check" />
              <p>{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MobileTariffCard
