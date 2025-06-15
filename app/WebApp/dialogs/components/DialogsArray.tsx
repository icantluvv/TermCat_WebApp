"use client"
import { useRouter } from "next/navigation"
import Dialog from "./DialogListElement"

const DialogsArray = ({ dialogs }: { dialogs: DialogType[] }) => {
  const router = useRouter()

  const handleClick = async () => {
    try {
      router.push("/WebApp/dialogs/create")
    } catch (error) {
      console.error("Ошибка при создании диалога:", error)
    }
  }

  if (!dialogs || dialogs.length === 0) {
    return (
      <section className="flex w-full h-full bg-PageBg items-center justify-center flex-col xl:gap-[24px]">
        <button
          onClick={handleClick}
          className="text-[14px] xl:text-[16px] rounded-full px-[24px] py-[12px] bg-PrimaryGreen active:bg-PrimaryGreenActive text-PrimaryBlack ]"
        >
          Начните работу с TermCAT
        </button>
      </section>
    )
  }

  return (
    <>
      {dialogs.map((dialog) => (
        <Dialog key={dialog.id} id={dialog.id} title={dialog.title} />
      ))}
    </>
  )
}

export default DialogsArray
