import { NextRequest, NextResponse } from "next/server"
import { cookies } from "next/headers"
import axios from "axios"

export async function POST(req: NextRequest) {
  try {
    const { prompt, dialogId, title } = await req.json()

    const cookieStore = await cookies()
    const accessToken = cookieStore.get("accessToken")?.value

    const response = await axios.post(
      `${process.env.BACKEND_URL}/translate/generate`,
      { prompt, dialogId, title },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      }
    )

    return NextResponse.json(response.data, { status: 200 })
  } catch (error) {
    console.error("Ошибка при отправке сообщения:", error)
    return NextResponse.json({ error: "Ошибка сервера" }, { status: 500 })
  }
}
