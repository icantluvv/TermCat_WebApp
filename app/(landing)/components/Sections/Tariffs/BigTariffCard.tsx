import Image from "next/image"
import Link from "next/link"
import Price from "@/public/images/landing/tariffs/Price.svg"
import check from "@/public/images/landing/tariffs/check.svg"
import price_back from "@/public/images/landing/tariffs/price_back.svg"

const BigTariffCard = ({
  choosing,
  setChoosing,
  features
}: TariffCardProps) => {
  return (
    <div
      className="relative hidden md:flex flex-col items-center text-PrimaryBlack select-none"
      onMouseEnter={() => setChoosing(true)}
      onMouseLeave={() => setChoosing(false)}
    >
      <div className="absolute top-[-12px] px-[18px] py-[6px] bg-PrimaryGreen rounded-[16px] z-[1500]">
        <p className="text-[0.75rem]">Самый популярный</p>
      </div>
      <Image
        src={price_back}
        alt={price_back}
        className="absolute"
        fill
        objectFit="cover"
      ></Image>
      <svg className="w-[398px] h-[656px] flex">
        <path
          fill={choosing ? "#C2F041" : "#e8e8e8"}
          d="M398 24C398 10.7 387.3 0 374 0H24C10.7 0 0 10.7 0 24V632C0 645.3 10.7 656 24 656H197.6C210.8 656 221.6 645.3 221.6 632V630C221.6 611.8 236.3 597 254.6 597H374C387.3 597 398 586.3 398 573V24Z"
          className="transition-colors duration-300"
        />
      </svg>
      <Link
        href="/paying"
        className="text-PrimaryBlack bg-PrimaryGreen active:bg-PrimaryGreenActive flex z-[1000] absolute px-[40px] py-[12px] rounded-[32px] bottom-0 right-0 font-medium"
      >
        К продукту
      </Link>

      <div className="absolute flex flex-col items-center w-full gap-y-[40px] px-[12px] py-[24px]">
        <div className="text-center max-w-[80%]">
          <p className="text-[2rem] font-medium">Базовый план</p>
          <p className="text-[1.125rem]">
            Индивидуальные переводчики и фрилансеры
          </p>
        </div>

        <div className="flex flex-col items-center gap-[6px]">
          <Image src={Price} alt="Price" />
          <p className="text-[0.875rem]">За месяц использования</p>
        </div>

        <div className="flex flex-col gap-[12px] text-[1.125rem] leading-6 w-full">
          {features.map((feature, idx) => (
            <div key={idx} className="flex gap-[12px] items-start">
              <Image src={check} alt="check" />
              <p>{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BigTariffCard
