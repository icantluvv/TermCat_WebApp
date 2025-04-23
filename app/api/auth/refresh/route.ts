import { NextResponse } from "next/server"
import axios from "axios"

export async function POST(req: Request) {
  const cookieHeader = req.headers.get("cookie")
  const refreshToken = cookieHeader
    ?.split(";")
    .find((cookie) => cookie.trim().startsWith("refreshToken="))
    ?.split("=")[1]

  if (!refreshToken) {
    return NextResponse.json({ error: "No refresh token" }, { status: 401 })
  }

  try {
    const res = await axios.post(`${process.env.BACKEND_URL}/auth/refresh`, {
      refreshToken
    })

    const newAccessToken = res.data.accessToken

    const response = NextResponse.json({ accessToken: newAccessToken })
    response.cookies.set("accessToken", newAccessToken, {
      httpOnly: true,
      secure: true,
      path: "/",
      maxAge: 60 * 15
    })

    return response
  } catch (e) {
    console.error(e)
    return NextResponse.json(
      { error: "Failed to refresh token" },
      { status: 500 }
    )
  }
}
