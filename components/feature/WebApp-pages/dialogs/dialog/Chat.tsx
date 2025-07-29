"use client"

import { useEffect, useRef, useState } from "react"
import { TranslateService } from "@/lib/services/translate.service"
import Message from "../Message"

const Chat = ({ dialogId, title, initialMessages }: ChatProps) => {
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const [prompt, setPrompt] = useState("")
  const [messages, setMessages] = useState(initialMessages)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!prompt.trim()) return

    const userMessage = prompt
    setMessages((prev) => [...prev, { text: userMessage, role: "user" }])
    setPrompt("")
    setLoading(true)

    try {
      const response = await TranslateService.getInstance().sendPrompt(
        userMessage,
        dialogId,
        title
      )

      console.log(response)

      const updatedDialog = await TranslateService.getInstance().fetchDialog(
        dialogId
      )
      setMessages(updatedDialog.dialog)
    } catch (error) {
      console.error("Ошибка при отправке сообщения:", error)
    } finally {
      setLoading(false)
    }
  }
  return (
    <>
      <main className="flex-1 w-full flex flex-col  overflow-auto no-scrollbar gap-[24px] relative items-center ">
        <section className="flex flex-col gap-[48px] xl:w-[55%] py-[5svh]">
          {messages.map((msg, index) => (
            <Message key={index} role={msg.role} text={msg.text} />
          ))}
          <div className="w-full h-[px]" ref={messagesEndRef} />
        </section>
      </main>

      <form
        onSubmit={handleSubmit}
        className="flex items-center mb-[80px] xl:mb-[2svh] w-full xl:w-[65%] bg-LightGray rounded-full px-[24px] py-[12px] shadow-md"
      >
        <input
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          type="text"
          placeholder="Ваш текст..."
          className="flex-1 bg-transparent outline-none text-PrimaryBlack placeholder:text-Gray02 text-[16px]"
        />
        <button
          type="submit"
          disabled={loading}
          className="ml-3 p-3 rounded-full bg-PrimaryBlack active:bg-PrimaryBlack/80 transition-all flex items-center justify-center"
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
      </form>
    </>
  )
}

export default Chat
