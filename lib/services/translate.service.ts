import axios from "axios"

export class TranslateService {
  private static instance: TranslateService

  private constructor() {}

  public static getInstance() {
    if (!TranslateService.instance) {
      TranslateService.instance = new TranslateService()
    }
    return TranslateService.instance
  }

  async getDialogById(id: string, accessToken: string | unknown) {
    try {
      const response = await axios.get(`${process.env.BACKEND_URL}/dialogs/${id}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })

      return response.data
    } catch (error) {
      console.error("Ошибка при получении диалога:", error)
      throw error
    }
  }

  async createDialog(title: string) {
    const body = {
      title,
      dialog: []
    }

    const response = await fetch("/api/translate/create-dialog", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    })

    if (!response.ok) {
      throw new Error("Ошибка при создании диалога")
    }

    return await response.json()
  }

  async sendPrompt(prompt: string, dialogId: number, title: string) {
    const response = await fetch("/api/translate/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        prompt,
        dialogId,
        title
      })
    })

    if (!response.ok) {
      throw new Error("Ошибка при отправке сообщения")
    }

    return await response.json()
  }

  async fetchDialog(dialogId: number) {
    const response = await fetch(`/api/translate/get-dialog/${dialogId}`)

    if (!response.ok) {
      throw new Error("Ошибка при получении диалога")
    }

    return await response.json()
  }
}
