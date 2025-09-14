import { cookies } from "next/headers"
import { TranslateService } from "@/lib/services/translate.service"
import HeaderLayout from "@/components/shared/header/HeaderLayout"
import Chat from "@/components/molecules/WebApp-pages/dialogs/dialog/Chat"

const DialogPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params

  const cookieStore = await cookies()
  const accessToken = cookieStore.get("accessToken")?.value

  const dialog: Dialog = await TranslateService.getInstance().getDialogById(id, accessToken)

  return (
    <div className="flex flex-col w-full items-center h-[100svh] overflow-hidden ">
      <div className="hidden xl:flex w-full pt-[5svh]">
        <HeaderLayout title={dialog.title} text="" />
      </div>

      <Chat dialogId={id} title={dialog.title} initialMessages={dialog.dialog} />
    </div>
  )
}

export default DialogPage
