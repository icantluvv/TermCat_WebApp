import { NextResponse } from "next/server"
import client from "@/package/api/axios.client"

type RegisterResponse = {
  accessToken: string
  refreshToken: string
}

export async function POST(req: Request) {
  const { email, password, name } = await req.json()

  try {
    const response = await client<RegisterResponse>({
      method: "POST",
      url: "/auth/register",
      data: { email, password, name },
      headers: { "Content-Type": "application/json" }
    })

    const { accessToken, refreshToken } = response.data

    return NextResponse.json({
      success: true,
      accessToken,
      refreshToken
    })
  } catch {
    return NextResponse.json({ success: false, error: "Registration failed" }, { status: 500 })
  }
}
