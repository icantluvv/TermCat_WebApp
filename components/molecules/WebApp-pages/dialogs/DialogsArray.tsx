import Dialog from "./DialogListElement"
import Link from "next/link"
import { Dialog as DialogType } from "@/types/Translate"

type DialogsArrayProps = {
  list: DialogType[]
}

const DialogsArray = ({ list }: DialogsArrayProps) => {
  if (!list || list.length === 0) {
    return (
      <section className="flex w-full h-full bg-PageBg items-center justify-center flex-col xl:gap-[24px]">
        <Link
          href="/WebApp/dialogs/create"
          className="text-[14px] xl:text-[16px] rounded-full px-[24px] py-[12px] bg-PrimaryGreen active:bg-PrimaryGreenActive text-PrimaryBlack ]"
        >
          Начните работу с TermCAT
        </Link>
      </section>
    )
  }

  return (
    <>
      {list.map((dialog: DialogType) => (
        <Dialog key={dialog.id} id={dialog.id} title={dialog.title} />
      ))}
    </>
  )
}

export default DialogsArray
