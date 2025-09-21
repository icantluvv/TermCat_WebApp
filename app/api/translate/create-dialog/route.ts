import { NextResponse } from "next/server"
import { cookies } from "next/headers"

const backendUrl = process.env.BASE_API_URL

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const cookieStore = await cookies()

    const accessToken = cookieStore.get("accessToken")?.value

    const response = await fetch(`${backendUrl}/dialogs/createDialog`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`
      },
      body: JSON.stringify(body)
    })

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error: unknown) {
    if (error instanceof Error) return NextResponse.json(error, { status: 500 })
  }
}
