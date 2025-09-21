import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { refreshToken } from "@/package/api/auth/refresh-token"
import { isAccessTokenExpired } from "@/utils/isAccessTokenExpired"

export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === "/login" || request.nextUrl.pathname === "/signup") {
    return NextResponse.next()
  }

  // const accessToken = request.cookies.get("accessToken")?.value
  // const refreshTokenValue = request.cookies.get("refreshToken")?.value

  // if (!accessToken && !refreshTokenValue) {
  //   return NextResponse.redirect(new URL("/login", request.url))
  // }

  // if (isAccessTokenExpired(accessToken) && refreshTokenValue) {
  //   try {
  //     const result = await refreshToken(refreshTokenValue)
  //
  //     if (result.success) {
  //       const response = NextResponse.next()
  //
  //       response.cookies.set("accessToken", result.accessToken!, {
  //         httpOnly: true,
  //         path: "/",
  //         maxAge: 60 * 13,
  //         sameSite: "lax"
  //       })
  //
  //       if (result.refreshToken) {
  //         response.cookies.set("refreshToken", result.refreshToken, {
  //           httpOnly: true,
  //           path: "/",
  //           maxAge: 60 * 60 * 23 * 7,
  //           sameSite: "lax"
  //         })
  //       }
  //
  //       return response
  //     } else {
  //       // return NextResponse.redirect(new URL("/login", request.url))
  //     }
  //   } catch {
  //     // return NextResponse.redirect(new URL("/login", request.url))
  //   }
  // }

  return NextResponse.next()
}

export const config = {
  matcher: ["/WebApp/:path*"]
}
