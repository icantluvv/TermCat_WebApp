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
      const response = await axios.get(
        `${process.env.BACKEND_URL}/dialogs/${id}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        }
      )

      return response.data
    } catch (error) {
      console.error("Ошибка при получении диалога:", error)
      throw error
    }
  }

  async createDialog() {
    const now = new Date()

    // Форматируем дату по московскому времени
    const formattedDate = now
      .toLocaleString("ru-RU", {
        timeZone: "Europe/Moscow",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
      })
      .replace(",", "") // убираем запятую между датой и временем
      .replace(/\./g, "-") // меняем точки на дефисы

    const body = {
      title: `Диалог от ${formattedDate}`,
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
}
