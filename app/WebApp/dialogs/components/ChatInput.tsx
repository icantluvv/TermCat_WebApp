"use client"

import { useState } from "react"

const ChatInput = () => {
  const [value, setValue] = useState("")

  const handleSend = () => {
    if (!value.trim()) return
    console.log("Отправить сообщение:", value)
    setValue("")
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSend()
  }

  return (
    <div className="fixed bottom-0 left-0 w-full px-[4vw] xl:pl-[8%] xl:pr-[4vw] py-[12px] bg-white z-[9000]">
      <div className="flex items-center bg-LightGray rounded-full px-[16px] py-[10px] shadow-md">
        <input
          type="text"
          placeholder="Напишите сообщение..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 bg-transparent outline-none text-black placeholder:text-Gray02 text-[14px] lg:text-[16px]"
        />

        <button
          onClick={handleSend}
          className="ml-3 p-3 rounded-full bg-PrimaryBlack hover:bg-black transition-all flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#fff"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default ChatInput
