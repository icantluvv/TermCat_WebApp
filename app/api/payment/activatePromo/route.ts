import { NextRequest, NextResponse } from "next/server"
import axios from "axios"
import { cookies } from "next/headers"

export async function POST(req: NextRequest) {
  const cookieStore = await cookies() // не нужно await, cookies() синхронная функция
  const accessToken = cookieStore.get("accessToken")?.value
  const { code } = await req.json()

  try {
    const response = await axios.post(
      `${process.env.BACKEND_URL}/subscriptions/activatePromoSub`,
      null,
      {
        params: { code },
        headers: {
          Authorization: `Bearer ${accessToken}`,
          Accept: "application/json"
        }
      }
    )

    return NextResponse.json(response.data)
  } catch (error: unknown) {
    console.error("Ошибка на сервере Next при активации подписки:", error)

    if (axios.isAxiosError(error)) {
      if (error.response?.status === 400) {
        return NextResponse.json(
          { message: "Подписка уже активирована" },
          { status: 400 }
        )
      }

      return NextResponse.json(
        { error: error.response?.data || "Ошибка активации подписки" },
        { status: error.response?.status || 500 }
      )
    }

    // Если ошибка не от axios
    return NextResponse.json(
      { error: "Неизвестная ошибка при активации подписки" },
      { status: 500 }
    )
  }
}
