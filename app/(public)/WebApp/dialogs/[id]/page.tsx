import HeaderLayout from "@/components/shared/header/HeaderLayout"
import { getDialogById } from "@/package/api/translate/getDialogById"
import Chat from "@/components/molecules/WebApp-pages/dialogs/dialog/Chat"

const DialogPage = async ({ params }: { params: Promise<{ id: number }> }) => {
  const { id } = await params

  const dialog = await getDialogById(id)

  return (
    <div className="flex flex-col w-full items-center h-[100svh] overflow-hidden ">
      <div className="hidden xl:flex w-full pt-[5svh]">
        <HeaderLayout title={dialog.title} text="" />
      </div>

      <Chat id={id} dialog={dialog.dialog} />
    </div>
  )
}

export default DialogPage
