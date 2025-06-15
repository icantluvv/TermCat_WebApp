import Image from "next/image"
import navLogo from "@/public/images/sidebar/nav_logo.svg"

const Message = ({ role, text }: MessageProps) => {
  const isAssistant = role === "assistant"

  const [mainText, metaText] =
    isAssistant && typeof text === "string"
      ? text.split(/(?=Тематика текста:)/)
      : [text || "", ""]

  const formattedMainText = isAssistant
    ? mainText.replace(/(?<!^)(\d+\.)/g, "<br />$1").replace(/;/g, "<br />")
    : mainText

  return (
    <div
      className={`flex flex-col gap-y-4 flex-1 w-full ${
        !isAssistant ? "items-end" : "items-start"
      }`}
    >
      {/* Сообщение */}
      <div
        className={`flex gap-x-[2.5vw] lg:gap-x-[2vw] w-full items-end ${
          !isAssistant ? "justify-end" : "justify-start"
        }`}
      >
        {isAssistant && (
          <div className="lg:min-w-[48px] w-[24px] h-[24px] lg:w-[48px] lg:h-[48px] rounded-full bg-black flex items-center justify-center">
            <Image
              src={navLogo}
              className="w-[32px] h-[32px] scale-75 lg:scale-100"
              alt=""
            />
          </div>
        )}

        <div
          className={`flex flex-col max-w-[80vw] ${
            isAssistant ? "justify-start" : "items-end w-full"
          }`}
        >
          <div
            className={`px-6 py-4 lg:p-6 max-w-[90%] md:max-w-[70%]  rounded-[24px] ${
              isAssistant ? "bg-BotMessageBG" : "bg-LightGray/50"
            }`}
          >
            <p
              className="text-PrimaryBlack text-[12px] md:text-[14px] lg:text-[16px] break-words"
              dangerouslySetInnerHTML={{ __html: formattedMainText || "" }}
            />
          </div>
        </div>

        {!isAssistant && (
          <div className="w-[24px] h-[24px] lg:w-[48px] lg:min-w-[48px] lg:h-[48px] rounded-full bg-[#C2F041] flex items-center justify-center"></div>
        )}
      </div>

      {/* Второе сообщение (если есть metaText) */}
      {isAssistant && metaText && (
        <div
          className={`flex gap-x-[2.5vw] lg:gap-x-[2vw] w-full items-end justify-start`}
        >
          <div className="w-[24px] h-[24px] lg:min-w-[48px] lg:w-[48px] lg:h-[48px] rounded-full bg-black flex items-center justify-center">
            <Image
              src={navLogo}
              className="w-[32px] h-[32px] scale-75 lg:scale-100"
              alt=""
            />
          </div>

          <div className="flex flex-col max-w-[80vw] justify-start">
            <div className="px-6 py-4 lg:p-6 max-w-[90%] md:max-w-[70%] xl:max-w-[65%] rounded-[24px] bg-BotMessageBG">
              <p className="text-PrimaryBlack text-[12px] md:text-[14px] lg:text-[16px] break-words">
                {metaText}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Message
