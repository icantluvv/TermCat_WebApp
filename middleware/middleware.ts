import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const token = request.cookies.get("accessToken")?.value

  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url))
  }

  const base64Url = token.split(".")[1]
  const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/")
  const decoded = JSON.parse(Buffer.from(base64, "base64").toString())

  const now = Math.floor(Date.now() / 1000)
  const exp = decoded.exp

  // Проверяем, если токен истёк
  if (exp < now) {
    console.log("Access token expired")
    return NextResponse.redirect(new URL("/login", request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/app/:path*"]
}
