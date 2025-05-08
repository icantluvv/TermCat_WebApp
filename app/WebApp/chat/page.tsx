import HeaderLayout from "@/components/header/HeaderLayout"
import React from "react"
import Chat from "./components/Chat"

const ChatPage = () => {
  return (
    <>
      <HeaderLayout
        title={"Название проекта"}
        text={"Здесь происходит магия перевода"}
      />
      <main className="flex flex-1 w-full px-[5%] lg:px-[15%]">
        <div className="w-full items-center flex-col flex h-[73vh] relative">
          <Chat />
        </div>
      </main>
    </>
  )
}

export default ChatPage
