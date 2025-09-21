type DialogList = {
  list: Dialog[]
}

type Dialog = {
  id: number
  userId: number
  title: string
  dialog: Messages
  createdAt: string
  updatedAt: string
}

type Messages = {
  messagesList: Message[]
}

export type Message = {
  role: "user" | "assistant"
  text: string
}
