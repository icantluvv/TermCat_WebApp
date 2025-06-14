import Image from "next/image"
import Link from "next/link"
import arrow from "@/public/images/homepage/Arrow.png"
import termwardBack from "@/public/images/homepage/db8ea4379f48b0bd833ddd83078abae6.png"
import background from "@/public/images/homepage/d20c90509061782c2cbc21e06ccf4ce1.png"

const SubScriptionCard = ({ href }: CardProps) => {
  return (
    <Link
      className="order-[2] md:order-[3] lg:order-4 w-full md:w-full xl:flex-1 p-[24px] pb-[48px] xl:min-h-[194px] select-none 
       rounded-[24px] flex bg-PrimaryBlack active:opacity-90 relative overflow-hidden"
      href={href}
    >
      <h3 className="text-white text-[24px] xl:text-[32px] flex z-[1000]">
        Активировать
        <br /> Подписку
      </h3>
      <Image
        src={termwardBack}
        className="rounded-[24px] opacity-10 left-0 top-0 w-full absolute h-full"
        alt={""}
      />
      <Image
        src={background}
        className="rounded-[24px] right-0 bottom-[-13vh] absolute z-1000 mt-[1vh] ml-[6.4vw] opacity-100"
        alt={""}
      />
      <div className="rounded-full w-[36px] h-[36px] md:w-[48px] md:h-[48px] bg-LightGray right-0 top-0 m-[5%] absolute flex items-center justify-center">
        <Image src={arrow} alt={""} className="w-1/3 h-1/3" />
      </div>
    </Link>
  )
}

export default SubScriptionCard
