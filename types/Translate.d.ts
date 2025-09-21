export type Dialog = {
  id: number
  userId?: number
  title: string
  dialog: Message[]
  createdAt?: string
  updatedAt?: string
}

export type Message = {
  role: "user" | "assistant"
  text: string
}

export type BotMessage = {
  response: string
  dialogId: number
}
