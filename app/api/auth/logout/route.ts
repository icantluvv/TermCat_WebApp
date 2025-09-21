import { NextResponse } from "next/server"
import { cookies } from "next/headers"
import axios from "axios"

export async function POST() {
  try {
    const cookieStore = await cookies()
    const accessToken = cookieStore.get("TermCatAccessToken")?.value

    await axios.post(`${process.env.BASE_API_URL}/auth/revoke`, null, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })

    return NextResponse.json({ message: "Logout success" }, { status: 200 })
  } catch (error) {
    console.error("Ошибка при логауте:", error)

    return NextResponse.json({ error: "Ошибка при выходе из системы" }, { status: 500 })
  }
}
