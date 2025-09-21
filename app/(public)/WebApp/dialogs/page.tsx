import HeaderLayout from "@/components/shared/header/HeaderLayout"
import DialogsArray from "@/components/molecules/WebApp-pages/dialogs/DialogsArray"
import { getDialogList } from "@/package/api/translate/getDialogList"

const History = async () => {
  const dialogsData = await getDialogList()

  return (
    <div className="flex flex-col h-full w-full gap-[24px] xl:h-[100svh] pt-[5svh]  xl:pb-0 items-center overflow-x-hidden">
      <HeaderLayout title="История" text="Продолжите один из своих проектов" />

      <main className="flex-1 flex flex-col w-full  md:w-[70%] xl:w-[55%] xl:px-0 bg-PageBG overflow-auto no-scrollbar gap-[24px] xl:py-[5vh] pb-[100px] overflow-x-hidden">
        <DialogsArray list={dialogsData} />
      </main>
    </div>
  )
}

export default History
