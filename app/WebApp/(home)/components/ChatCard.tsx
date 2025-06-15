import Image from "next/image"
import AI from "@/public/images/homepage/neiro.png"
import Link from "next/link"

const ChatCard = () => {
  return (
    <Link
      className="active:opacity-90 select-none flex flex-1"
      href={`WebApp/dialogs/create`}
    >
      <ChatCardFormMobile />
      <ChatCardFormRegular />
    </Link>
  )
}

export default ChatCard

const ChatCardFormMobile = () => {
  return (
    <div className="w-full flex xl:hidden relative">
      <div className="absolute w-full h-full top-0 left-0 z-10 flex p-[24px] xl:py-10 ">
        <h3 className="text-[24px] font-medium text-LightGray text-start">
          Чат для перевода <br />
          терминов
        </h3>
      </div>

      <Image src={AI} alt={"AI"} className="absolute bottom-0 w-[25%]"></Image>
      <svg
        viewBox="0 0 343 198"
        className="w-full min-h-[198px]"
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
    </div>
  )
}

const ChatCardFormRegular = () => {
  return (
    <div className="w-full hidden xl:flex flex-1 relative">
      <div className="absolute w-full h-full top-0 left-0 z-10 flex p-[24px] xl:py-10 ">
        <h3 className="lg:text-[32px] 2xl:text-[42px] font-medium text-start text-LightGray">
          Чат для перевода терминов
        </h3>
      </div>
      <Image
        src={AI}
        alt={"AI"}
        className="absolute bottom-0 xl:w-[35%] 2xl:w-[28%]"
      ></Image>

      <svg
        preserveAspectRatio="none"
        className="fill-[#0C0C0C] w-full"
        viewBox="0 0 520 334"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M520 24C520 10.7452 509.255 0 496 0H24C10.7452 0 0 10.7452 0 24V310C0 323.255 10.7452 334 24 334H308C321.255 334 332 323.255 332 310V309.041C332 290.816 346.775 276.041 365 276.041H496C509.255 276.041 520 265.296 520 252.041V24Z"
        />
      </svg>
    </div>
  )
}
