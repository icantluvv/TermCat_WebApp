import Image from "next/image"
import navLogo from "@/public/images/sidebar/nav_logo.svg"

interface MessageProps {
  role: "user" | "assistant"
  text: string
}

const Message = ({ role, text }: MessageProps) => {
  const isAssistant = role === "assistant"

  return (
    <div
      className={`flex gap-x-[2.5vw] lg:gap-x-[2vw] flex-1 w-full items-end ${
        !isAssistant ? "justify-end" : "justify-start"
      }`}
    >
      {isAssistant && (
        <div className="">
          <div className="w-[24px] h-[24px] lg:w-[48px] lg:h-[48px] rounded-full bg-black flex items-center justify-center">
            <Image
              src={navLogo}
              className="w-[32px] h-[32px] scale-75 lg:scale-100"
              alt=""
            />
          </div>
        </div>
      )}

      <div
        className={`flex flex-col max-w-[80vw]  ${
          isAssistant ? "justify-start " : "w-full items-end"
        }`}
      >
        <div
          className={`px-6 py-4 lg:p-6 max-w-[90%] md:max-w-[70%] xl:max-w-[60%] rounded-[24px] ${
            isAssistant ? "bg-BotMessageBG" : "bg-LightGray/50"
          }`}
        >
          <p className="text-PrimaryBlack  text-[12px] md:text-[14px] lg:text-[16px]">
            {text}
          </p>
        </div>
      </div>

      {!isAssistant && (
        <div className="">
          <div className="w-[24px] h-[24px] lg:w-[48px] lg:h-[48px] rounded-full bg-[#C2F041] flex items-center justify-center"></div>
        </div>
      )}
    </div>
  )
}

export default Message
