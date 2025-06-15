import { NextResponse } from "next/server"
import { cookies } from "next/headers"
import axios from "axios"

export async function POST() {
  try {
    const cookieStore = await cookies()
    const accessToken = cookieStore.get("accessToken")?.value

    if (!accessToken) {
      return NextResponse.json(
        { error: "Отсутствует accessToken в cookies" },
        { status: 401 }
      )
    }

    const response = await axios.post(
      `${process.env.BACKEND_URL}/auth/revoke`,
      {},
      {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      }
    )

    cookieStore.delete("accessToken")
    cookieStore.delete("refreshToken")

    return NextResponse.json(response.data, { status: 200 })
  } catch (error: unknown) {
    console.error("Ошибка при отзыве токена:", error)

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
