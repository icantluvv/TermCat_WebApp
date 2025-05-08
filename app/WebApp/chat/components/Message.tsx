import Image from "next/image"
import navLogo from "@/public/images/sidebar/nav_logo.svg"

const Message = ({ type, text }: MessageProps) => {
  switch (type) {
    case "bot":
      return (
        <div className="flex gap-x-[2.5vw] lg:gap-x-[2vw] w-full">
          <div className="lg:w-[5%]">
            <div className="w-[24px] h-[24px] lg:w-[48px] lg:h-[48px] rounded-full bg-black flex items-center justify-center">
              <Image
                src={navLogo}
                className="w-[32px] h-[32px] scale-75 lg:scale-100"
                alt=""
              />
            </div>
          </div>

          <div className="flex flex-col justify-start">
            <div className="px-6 py-4 lg:p-6 max-w-[70vw] bg-BotMessageBG rounded-[24px]">
              <p className="text-black">{text}</p>
            </div>
          </div>
        </div>
      )

    case "user":
      return (
        <div className="flex gap-x-[2.5vw] lg:gap-x-[2vw] w-full">
          <div className="flex flex-col w-full justify-end items-end">
            <div className="px-6 py-4 lg:p-6 max-w-[70vw] bg-LightGray/50 rounded-[24px]">
              <p className="text-black">{text}</p>
            </div>
          </div>

          <div className="lg:w-[5%]">
            <div className="w-[24px] h-[24px] lg:w-[48px] lg:h-[48px] rounded-full bg-[#C2F041] flex items-center justify-center"></div>
          </div>
        </div>
      )
  }
}

export default Message

interface MessageProps {
  type: string
  text: string
}
