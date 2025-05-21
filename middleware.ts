import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export async function middleware(request: NextRequest) {
  const accessToken = request.cookies.get("accessToken")?.value
  const refreshToken = request.cookies.get("refreshToken")?.value

  if (accessTokenExpired(accessToken) && refreshToken) {
    const refreshRes = await fetch(`${process.env.BACKEND_URL}/auth/refresh`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ refreshToken })
    })

    if (refreshRes.ok) {
      const { accessToken: newAccessToken } = await refreshRes.json()
      const response = NextResponse.next()

      response.cookies.set("accessToken", newAccessToken, {
        httpOnly: true,
        path: "/",
        maxAge: 60 * 10 // 10 minutes
      })

      return response
    } else {
      return NextResponse.redirect(new URL("/login", request.url))
    }
  }

  return NextResponse.next()
}

function accessTokenExpired(token?: string): boolean {
  if (!token) return true

  try {
    const payloadBase64 = token.split(".")[1]
    const decodedPayload = JSON.parse(
      Buffer.from(payloadBase64, "base64").toString("utf-8")
    )

    // exp в секундах, Date.now() в миллисекундах
    const exp = decodedPayload.exp
    const now = Math.floor(Date.now() / 1000)

    return exp < now
  } catch (error) {
    console.error("Failed to decode token:", error)
    return true
  }
}
