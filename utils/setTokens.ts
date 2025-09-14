import { NextResponse } from "next/server"

export function setTokensInCookies(
  response: NextResponse,
  accessToken: string,
  accessMaxAge: number,
  refreshToken: string,
  refreshMaxAge: number
) {
  response.cookies.set("accessToken", accessToken, {
    httpOnly: true,
    sameSite: "strict",
    path: "/",
    maxAge: Math.floor(accessMaxAge / 1000)
  })

  response.cookies.set("refreshToken", refreshToken, {
    httpOnly: true,
    sameSite: "strict",
    path: "/",
    maxAge: Math.floor(refreshMaxAge / 1000)
  })
}
