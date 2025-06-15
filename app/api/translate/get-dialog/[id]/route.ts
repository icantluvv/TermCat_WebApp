import { NextRequest, NextResponse } from "next/server"
import { cookies } from "next/headers"
import axios from "axios"

export async function GET(request: NextRequest) {
  const url = new URL(request.url)

  try {
    const id = url.pathname.split("/").pop()
    // const { id } = context.params
    // const { params } = context
    // const { id } = params

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
  } catch (error: unknown) {
    console.error("Ошибка при получении диалога:", error)

    if (axios.isAxiosError(error)) {
      return NextResponse.json(
        { error: error.response?.data || "Ошибка сервера" },
        { status: error.response?.status || 500 }
      )
    }

    return NextResponse.json(
      { error: "Неизвестная ошибка сервера" },
      { status: 500 }
    )
  }
}
