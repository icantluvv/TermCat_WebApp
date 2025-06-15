import { create } from "zustand"
import { v4 as uuidv4 } from "uuid"

type Message = {
  id: string
  text: string
  role: "user" | "assistant"
}

type ChatStore = {
  messages: Message[]
  addMessage: (msg: Omit<Message, "id">) => string
  updateMessage: (id: string, newText: string) => void
  clearMessages: () => void
}

export const useChatStore = create<ChatStore>((set) => ({
  messages: [],
  addMessage: (msg) => {
    const newMessage = { ...msg, id: uuidv4() }
    set((state) => ({ messages: [...state.messages, newMessage] }))
    return newMessage.id
  },
  updateMessage: (id, newText) =>
    set((state) => ({
      messages: state.messages.map((msg) =>
        msg.id === id ? { ...msg, text: newText } : msg
      )
    })),
  clearMessages: () => set({ messages: [] })
}))
