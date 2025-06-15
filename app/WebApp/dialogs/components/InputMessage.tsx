"use client"
import Image from "next/image"
import { useRef } from "react"
import send from "@/public/images/chat/sendButton.svg"

const InputMessage = ({}) => {
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
    }
  }
  function sendMessage() {}
  return (
    <div className="absolute w-full flex bottom-[80px] md:bottom-[100px] xl:bottom-[3svh]">
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
      ></textarea>
      <button
        onClick={() => sendMessage()}
        className="rounded-[50%] bg-[#0C0C0C] w-[48px] h-[48px] flex items-center justify-center"
      >
        <Image src={send} alt="send" className="w-[24px] h-[24px]" />
      </button>
    </div>
  )
}
export default InputMessage
