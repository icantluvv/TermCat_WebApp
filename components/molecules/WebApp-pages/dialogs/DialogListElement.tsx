"use client"

import { useRouter } from "next/navigation"

type DialogProps = {
  title: string
  id: number
}
const Dialog = ({ title, id }: DialogProps) => {
  const router = useRouter()
  return (
    <button
      onClick={() => router.push("/WebApp/dialogs/" + id)}
      className="flex p-[24px] bg-LightGray active:bg-PrimaryGreen rounded-[24px] min-h-[80px] 
  items-center shadow-md select-none text-start overflow-hidden break-all"
    >
      {title}
    </button>
  )
}

export default Dialog
