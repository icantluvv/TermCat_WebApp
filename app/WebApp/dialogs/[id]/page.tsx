import { cookies } from "next/headers"
import { TranslateService } from "@/lib/services/translate.service"
import Message from "../components/Message"
import HeaderLayout from "@/components/header/HeaderLayout"

const DialogPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params

  const cookieStore = await cookies()
  const accessToken = cookieStore.get("accessToken")?.value

  const dialog: Dialog = await TranslateService.getInstance().getDialogById(
    id,
    accessToken
  )
  const messages = dialog.dialog

  return (
    <div className="flex flex-col w-full items-center h-[100svh] overflow-hidden ">
      <div className="hidden xl:flex w-full pt-[5svh]">
        <HeaderLayout title={dialog.title} text="" />
      </div>

      <main className="flex-1 w-full flex flex-col  overflow-auto no-scrollbar gap-[24px] relative items-center ">
        <section className="flex flex-col gap-[48px] xl:w-[55%] py-[5svh]">
          {messages.map((message: Message, index: number) => (
            <Message key={index} role={message.role} text={message.text} />
          ))}
          {messages.map((message: Message, index: number) => (
            <Message key={index} role={message.role} text={message.text} />
          ))}
          {messages.map((message: Message, index: number) => (
            <Message key={index} role={message.role} text={message.text} />
          ))}
        </section>
      </main>

      <div className="flex items-center mb-[80px] xl:mb-[2svh] w-full xl:w-[65%] bg-LightGray rounded-full px-[24px] py-[12px] shadow-md">
        <input
          type="text"
          placeholder="Напишите сообщение..."
          className="flex-1 bg-transparent outline-none text-PrimaryBlack placeholder:text-Gray02 text-[14px] lg:text-[16px]"
        />

        <button className="ml-3 p-3 rounded-full bg-PrimaryBlack active:bg-PrimaryBlack/80 transition-all flex items-center justify-center">
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
    </div>
  )
}

export default DialogPage
