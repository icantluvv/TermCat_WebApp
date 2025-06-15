import HeaderLayout from "@/components/header/HeaderLayout"
import { cookies } from "next/headers"
import DialogsArray from "./components/DialogsArray"

const History = async () => {
  const cookieStore = await cookies()
  const accessToken = cookieStore.get("accessToken")

  let history: DialogType[] = []

  try {
    const response = await fetch(`${process.env.BACKEND_URL}/dialogs/list`, {
      headers: {
        Authorization: `Bearer ${accessToken?.value}`
      }
    })

    if (!response.ok) {
      throw new Error("Failed to fetch history")
    }

    history = await response.json()
  } catch (error) {
    console.error("Error fetching history:", error)
  }

  return (
    <div className="flex flex-col h-full w-full gap-[24px] xl:h-[100svh] pt-[5svh]  xl:pb-0 items-center">
      <HeaderLayout title="История" text="Продолжите один из своих проектов" />

      <main className="flex-1 flex flex-col w-[55%] xl:px-0 bg-PageBG overflow-auto no-scrollbar gap-[24px] xl:py-[5vh] pb-[100px]">
        <DialogsArray dialogs={history} />
      </main>
    </div>
  )
}

export default History
