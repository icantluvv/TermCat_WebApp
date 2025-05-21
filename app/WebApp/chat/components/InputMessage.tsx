'use client'
import Image from "next/image"
import { useRef } from "react"
import send from "@/public/images/chat/sendButton.svg"

const InputMessage = ({
  onHeightChange
}: {
  onHeightChange: (height: number) => void
}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const handleInput = () => {
    const textarea = textareaRef.current
    if (textarea) {
      textarea.style.height = "auto"
      const newHeight = Math.min(
        textarea.scrollHeight,
        window.innerHeight * 0.2
      )
      textarea.style.height = `${newHeight}px`
      onHeightChange(newHeight)
    }
  }
  function sendMessage() {}
  return (
    <>
      <div className="w-full flex gap-x-[2vw] absolute bottom-0 z-[1000]">
        <textarea
          ref={textareaRef}
          placeholder="Ввести текст"
          onInput={handleInput}
          className="bg-Gray01 rounded-[24px] py-[16px] pl-[24px] pr-[5%] flex-1 resize-none overflow-y-auto no-scrollbar leading-[1.4] outline-none"
          style={{
            wordWrap: "break-word",
            overflowWrap: "break-word",
            maxHeight: "20vh",
            height: "55px"
          }}
        />
        <div className="bg-PageBG rounded-t-[48px] flex-2">
          <button
            onClick={() => sendMessage()}
            className="rounded-[50%] bg-[#0C0C0C] w-[48px] h-[48px] flex items-center justify-center"
          >
            <Image src={send} alt="send" className="w-[24px] h-[24px]" />
          </button>
        </div>
      </div>
      <div className="w-full bg-gradient-to-b from-PageBG/70 to-PageBG h-[50px] blur-sm"></div>
    </>
  )
}
export default InputMessage
