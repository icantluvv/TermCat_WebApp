"use client"

import { useRouter } from "next/navigation"
import { FormEvent, KeyboardEvent, useState } from "react"
import { createDialog } from "@/package/api/translate/createDialog"

const CreateDialogChat = () => {
  const [prompt, setPrompt] = useState("")
  const router = useRouter()

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    try {
      const dialog = await createDialog(prompt)

      router.push(`/WebApp/dialogs/${dialog.id}`)
    } catch (error) {
      console.error("Ошибка при создании диалога:", error)
    }
  }

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSubmit(e as unknown)
    }
  }

  return (
    <>
      <div className="flex-1 w-full flex flex-col overflow-auto no-scrollbar gap-[24px] relative items-center "></div>

      <div className="flex items-center mb-[80px] xl:mb-[2svh] w-full xl:w-[65%] bg-LightGray rounded-full px-[24px] py-[12px] ">
        <input
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          onKeyDown={handleKeyPress}
          type="text"
          placeholder="Ваш текст..."
          className="flex-1 bg-transparent outline-none text-PrimaryBlack placeholder:text-Gray02 text-[16px]"
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
            <path strokeLinecap="round" strokeLinejoin="round" d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" />
          </svg>
        </button>
      </div>
    </>
  )
}

export default CreateDialogChat
