import Image from "next/image"
import Link from "next/link"
import arrow from "@/public/images/homepage/Arrow.png"
import smart from "@/public/images/homepage/smart.png"

const PlanCard = () => {
  return (
    <Link
      className="order-[3] rounded-[24px] w-full md:min-h-[132px] lg:min-h-[194px] active:opacity-90 relative overflow-hidden select-none flex"
      href={"/WebApp/profile"}
    >
      <h3
        className="text-black text-[24px] xl:text-[32px] p-[24px] flex flex-col
       gap-[12px] z-[1000]"
      >
        Подробнее
        <br /> о тарифе Смарт
        <span className="text-[12px] xl:text-[14px] font-poppins font-regular">
          Исследуйте возможности своего тарифа
        </span>
      </h3>
      <Image
        src={smart}
        className="rounded-[24px] absolute z-[0] top-0 left-0 object-cover"
        fill
        alt={"smart_back"}
      />
      <div className="rounded-[50%] w-[48px] h-[48px] bg-[#e8e8e8] right-0 top-0 m-[5%] md:flex hidden absolute items-center justify-center">
        <Image src={arrow} alt={""} className="w-1/3 h-1/3"></Image>
      </div>
    </Link>
  )
}

export default PlanCard
