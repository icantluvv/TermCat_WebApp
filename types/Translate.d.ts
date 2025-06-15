interface Message {
  role: "user" | "assistant"
  text: string
}

interface Dialog {
  id: number
  userId: number
  title: string
  dialog: Message[]
  createdAt: string
  updatedAt: string
}

type DialogType = {
  id: string
  title: string
}

interface ChatProps {
  dialogId: string
  title: string
  initialMessages: { text: string; role: "user" | "assistant" }[]
}

interface MessageProps {
  role: "user" | "assistant"
  text: string
}
