import Link from "next/link"
import Image from "next/image"
import background from "@/public/images/homepage/db8ea4379f48b0bd833ddd83078abae6.png"
import AI from "@/public/images/homepage/ai.svg"

const ChatCard = ({ href }: CardProps) => {
  return (
    <>
      <ChatCardFormMobile href={href} />
      <ChatCardFormRegular href={href} />
    </>
  )
}

export default ChatCard

const ChatCardFormMobile = ({ href }: CardProps) => {
  return (
    <Link
      className="w-full flex xl:hidden active:opacity-90 select-none relative"
      href={href}
    >
      <Image
        src={background}
        alt={"chat_background"}
        fill
        objectFit="cover"
        className="absolute opacity-10"
      ></Image>
      <svg
        viewBox="0 0 343 198"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          xmlns="http://www.w3.org/2000/svg"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M343 24C343 10.7452 332.255 0 319 0H24C10.7452 0 0 10.7452 0 24V174C0 187.255 10.7452 198 24 198H172C184.703 198 195 187.703 195 175V175C195 161.745 205.745 151 219 151H319C332.255 151 343 140.255 343 127V24Z"
          fill="#0C0C0C"
        />
      </svg>
    </Link>
  )
}

const ChatCardFormRegular = ({ href }: CardProps) => {
  return (
    <Link
      className="w-full hidden xl:flex xl:w-[calc(50%-20px)] active:opacity-90 select-none relative"
      href={href}
    >
      <div className="absolute w-full h-full top-0 left-0 z-10 flex p-[24px] xl:py-10 ">
        <h3 className="text-[42px] font-medium text-LightGray">
          Чат для перевода терминов
        </h3>
      </div>
      <Image
        src={AI}
        alt={"AI"}
        className="absolute bottom-0 h-[186px]"
      ></Image>
      <Image
        src={background}
        alt={"chat_background"}
        fill
        objectFit="cover"
        className="absolute opacity-10"
      ></Image>
      <svg
        viewBox="0 0 520 334"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          xmlns="http://www.w3.org/2000/svg"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M520 24C520 10.7452 509.255 0 496 0H24C10.7452 0 0 10.7452 0 24V310C0 323.255 10.7452 334 24 334H308C321.255 334 332 323.255 332 310V309.041C332 290.816 346.775 276.041 365 276.041H496C509.255 276.041 520 265.296 520 252.041V24Z"
          fill="#0C0C0C"
        />
      </svg>
    </Link>
  )
}
