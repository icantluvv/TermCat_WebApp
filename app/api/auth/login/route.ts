import { NextResponse } from "next/server"
import { loginUser, type LoginBody } from "@/package/api/auth/login-user"
import { setTokensInCookies } from "@/utils/setTokens"

export async function POST(req: Request) {
  const body: LoginBody = await req.json()

  const result = await loginUser(body)

  if (!result.success) {
    return NextResponse.json({ message: result.error!.message }, { status: result.error!.status })
  }

  const response = NextResponse.json({ message: "Login successful" })

  setTokensInCookies(response, result.accessToken!, result.accessMaxAge!, result.refreshToken!, result.refreshMaxAge!)

  return response
}
