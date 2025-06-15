import { NextRequest, NextResponse } from "next/server"
import { cookies } from "next/headers"
import axios from "axios"

export async function GET(
  request: NextRequest,
  context: { params: { id: string } }
) {
  try {
    const { params } = context
    const { id } = await params

    if (!id) {
      return NextResponse.json(
        { error: "Не указан id диалога" },
        { status: 400 }
      )
    }

    const cookieStore = await cookies()
    const accessToken = cookieStore.get("accessToken")?.value

    const response = await axios.get(
      `${process.env.BACKEND_URL}/dialogs/${id}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      }
    )

    return NextResponse.json(response.data, { status: 200 })
  } catch (error) {
    console.error("Ошибка при получении диалога:", error)
    return NextResponse.json({ error: "Ошибка сервера" }, { status: 500 })
  }
}
