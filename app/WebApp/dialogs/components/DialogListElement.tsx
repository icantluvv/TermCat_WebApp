"use client"

import { useRouter } from "next/navigation"

const Dialog = ({ title, id }: DialogType) => {
  const router = useRouter()
  return (
    <button
      onClick={() => router.push("/WebApp/dialogs/" + id)}
      className="w-full flex p-[24px] bg-LightGray active:bg-PrimaryGreen rounded-[24px] min-h-[80px] items-center shadow-md select-none text-start"
    >
      <h4>{title}</h4>
    </button>
  )
}

export default Dialog
