import Cookies from "universal-cookie"
import client from "@/package/api/axios.client"
import { Dialog } from "@/types/Translate"

type TextTitle = {
  title: string
}

async function generateTitle(prompt: string): Promise<TextTitle> {
  const words = prompt.trim().split(/\s+/).slice(0, 5)
  return { title: words.join(" ") }
}

export async function createDialog(prompt: string): Promise<Dialog> {
  const { title } = await generateTitle(prompt)

  const cookies = new Cookies()
  const accessToken = cookies.get("accessToken")

  if (!accessToken) {
    throw new Error("Access token not found")
  }

  const response = await client<Dialog>({
    url: "/dialogs/createDialog",
    method: "POST",
    data: {
      title,
      dialog: [
        {
          role: "user",
          text: prompt
        }
      ]
    },
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json"
    }
  })

  return response.data
}
