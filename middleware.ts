import { NextResponse, NextRequest } from "next/server"

export async function middleware(req: NextRequest) {
  const accessToken = req.cookies.get("accessToken")?.value
  const refreshToken = req.cookies.get("refreshToken")?.value

  console.log("middleware access " + accessToken)
  console.log("middleware refresh " + refreshToken)

  if (!refreshToken) {
    return NextResponse.redirect(
      new URL("/login", process.env.NEXT_PUBLIC_BASE_URL)
    )
  }

  if (!accessToken && refreshToken) {
    try {
      const res = await fetch(`${process.env.BACKEND_URL}/auth/refresh`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          refreshToken: refreshToken
        })
      })

      if (res.ok) {
        const data = await res.json()
        console.log("New access token: ", data.accessToken)

        const response = NextResponse.next()
        response.cookies.set("accessToken", data.accessToken, {
          httpOnly: true,
          sameSite: "strict",
          path: "/",
          maxAge: 60 * 15 // 15 минут
        })
        return response
      } else {
        console.error("Res is not OK", res.status)
        return NextResponse.redirect(new URL("/login", req.url))
      }
    } catch {
      throw new Error("Erorr with refreshing access")
    }
  }
}
export const config = {
  matcher: ["/app/:path*"]
}
