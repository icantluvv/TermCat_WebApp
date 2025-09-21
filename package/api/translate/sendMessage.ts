import Cookies from "universal-cookie"
import client from "@/package/api/axios.client"
import { BotMessage } from "@/types/Translate"

export async function sendMessage(prompt: string, dialogId: number): Promise<BotMessage> {
  const cookies = new Cookies()
  const accessToken = cookies.get("TermCatAccessToken")

  const response = await client<BotMessage>({
    url: "/api/translate/generate",
    baseURL: "/",
    method: "POST",
    data: {
      prompt: prompt,
      dialogId: dialogId,
      title: ""
    },
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json"
    }
  })

  return response.data
}
