import { cookies } from "next/headers"
import axios from "axios"

export async function POST(req: Request) {
  const body = await req.json()

  try {
    const { data } = await axios.post(
      `${process.env.BACKEND_URL}/auth/login`,
      body,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "*/*"
        }
      }
    )

    const { accessToken, refreshToken } = data
    const cookieStore = await cookies()

    // accessToken — 15 минут
    cookieStore.set("accessToken", accessToken, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 15
    })

    // refreshToken — 7 дней
    cookieStore.set("refreshToken", refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60 * 24 * 7
    })

    return new Response(JSON.stringify({ success: true }))
  } catch (error: any) {
    console.log("Login failed ", error.response || error)
    return new Response("Unauthorized", { status: 401 })
  }
}
