"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import { TranslateService } from "@/lib/services/translate.service"

const CreateDialogChat = () => {
  const [prompt, setPrompt] = useState("")
  const router = useRouter()
  const translateService = TranslateService.getInstance()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Проверка на пустую строку
    const trimmedPrompt = prompt.trim()
    if (!trimmedPrompt) return

    // Формируем заголовок из первых 4 слов
    const title = trimmedPrompt.split(" ").slice(0, 5).join(" ")

    try {
      // Создаем диалог
      const dialog = await translateService.createDialog(title)

      await TranslateService.getInstance().sendPrompt(prompt, dialog.id, title)

      // Переходим в диалог
      router.push(`/WebApp/dialogs/${dialog.id}`)
    } catch (error) {
      console.error("Ошибка при создании диалога:", error)
    }
  }

  return (
    <>
      <main className="flex-1 w-full flex flex-col overflow-auto no-scrollbar gap-[24px] relative items-center "></main>

      <div className="flex items-center mb-[80px] xl:mb-[2svh] w-full xl:w-[65%] bg-LightGray rounded-full px-[24px] py-[12px] ">
        <input
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          type="text"
          placeholder="Напишите сообщение..."
          className="flex-1 bg-transparent outline-none text-PrimaryBlack placeholder:text-Gray02 text-[14px] lg:text-[16px]"
        />

        <button
          onClick={handleSubmit}
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
      </div>
    </>
  )
}

export default CreateDialogChat
