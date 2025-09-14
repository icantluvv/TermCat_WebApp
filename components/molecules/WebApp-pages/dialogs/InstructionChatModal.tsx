import Image from "next/image"
import careul from "@/public/images/chat/careful.png"

const InstructionChatModal = () => {
  return (
    <div className="xl:w-[80%] py-[5svh] h-full flex flex-col items-center justify-between">
      <h2 className="text-[28px] xl:text-[48px] flex flex-col text-center text-Purpl">
        Добро пожаловать в новый проект!
        <span className="text-PrimaryBlack">Что будем сегодня переводить?</span>
      </h2>

      <div className="flex  items-center flex-1 justify-center">
        <div className="bg-PrimaryBlack p-[20px] flex-col lg:flex-row max-w-[840px] xl:p-[40px] flex gap-[12px] xl:gap-[24px] rounded-[24px]">
          <Image
            src={careul}
            alt={"careul"}
            className="w-[32px] h-[32px] xl:w-[48px] xl:h-[48px]"
          />
          <p className="text-[12px] md:max-w-[50vw] lg:text-[16px] xl:text-[18px] flex flex-col gap-[12px] text-LightGray ">
            Добавьте текст в поле ввода объемом не более 1600 символов.
            Нейронная сеть автоматически проанализирует текст и укажет его
            контекстную область, а затем покажет все термины в тексте.
            <span>
              Для определения тематики достаточно нескольких предложений
              или абзацев, чем больше текст, тем выше точность.
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default InstructionChatModal
