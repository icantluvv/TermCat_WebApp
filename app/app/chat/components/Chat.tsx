"use client"
import { useState } from "react"
import InputMessage from "./InputMessage"
import Message from "./Message"

const Chat = () => {
  const [inputHeight, setInputHeight] = useState(48)

  return (
    <>
      <div
        className="w-full overflow-y-auto flex flex-col py-[10vh] items-center gap-y-[4vh] no-scrollbar"
        style={{ paddingBottom: `${inputHeight + 16}px` }}
      >
        <Message type="bot" text="Привет! Чем могу помочь?" />
        <Message type="user" text="Привет! Подскажи погоду на сегодня." />
        <Message
          type="bot"
          text="Сегодня солнечно, +22°C. Отличный день для прогулки!"
        />
        <Message type="user" text="А на завтра?" />
        <Message
          type="bot"
          text="Завтра ожидается облачность и возможен дождь, температура около +18°C."
        />
        <Message type="user" text="Спасибо!" />
        <Message type="bot" text="Всегда пожалуйста! Если что — я рядом ✌️" />
        <Message type="user" text="А можешь анекдот рассказать?" />
        <Message
          type="bot"
          text="Конечно! Почему программисты путают Хэллоуин и Рождество? Потому что 31 октября = 25 декабря (в шестнадцатеричной системе) 🎃🎄"
        />
        <Message type="user" text="Хахаха, норм! 😂" />
        <Message
          type="bot"
          text="Рад, что зашло! Если ещё что-то нужно — пиши 😉"
        />
      </div>
      <InputMessage onHeightChange={setInputHeight} />
    </>
  )
}

export default Chat
