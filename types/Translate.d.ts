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
