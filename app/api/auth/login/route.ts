import { NextResponse } from "next/server"
import client from "@/package/api/axios.client"

type LoginResponse = {
  accessToken: string
  refreshToken: string
}

export async function POST(req: Request) {
  const { email, password } = await req.json()

  try {
    const response = await client<LoginResponse>({
      method: "POST",
      url: "/auth/login",
      data: { email, password },
      headers: { "Content-Type": "application/json" }
    })

    const { accessToken, refreshToken } = response.data

    return NextResponse.json({
      success: true,
      accessToken,
      refreshToken
    })
  } catch {
    return NextResponse.json({ success: false, error: "Login failed" }, { status: 401 })
  }
}
