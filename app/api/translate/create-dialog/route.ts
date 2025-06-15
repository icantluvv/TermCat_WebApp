import { NextResponse } from "next/server"
import { cookies } from "next/headers"

export async function POST(request: Request) {
  try {
    const backendUrl = process.env.BACKEND_URL
    if (!backendUrl) {
      return NextResponse.json(
        { error: "BACKEND_URL не задан" },
        { status: 500 }
      )
    }

    const cookieStore = await cookies()
    const accessToken = cookieStore.get("accessToken")?.value

    if (!accessToken) {
      return NextResponse.json(
        { error: "AccessToken не найден в куки" },
        { status: 401 }
      )
    }

    const body = await request.json()

    const response = await fetch(`${backendUrl}/dialogs/createDialog`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`
      },
      body: JSON.stringify(body)
    })

    if (!response.ok) {
      const errorText = await response.text()
      return NextResponse.json(
        { error: errorText },
        { status: response.status }
      )
    }

    const data: Dialog = await response.json()
    return NextResponse.json(data, { status: 200 })
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Неизвестная ошибка" },
      { status: 500 }
    )
  }
}
