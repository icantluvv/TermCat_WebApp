import { NextResponse } from "next/server"
import client from "@/package/api/axios.client"

export type RegisterBody = {
  email: string
  password: string
  name: string
}

export type RegisterResponse = {
  accessToken: string
  refreshToken: string
  user?: {
    id: string
    email: string
    name: string
  }
}

export async function POST(req: Request) {
  const { email, password, name }: RegisterBody = await req.json()

  try {
    const response = await client<RegisterResponse>({
      method: "POST",
      url: "/auth/register",
      data: { email, password, name },
      headers: { "Content-Type": "application/json" }
    })

    const { accessToken, refreshToken, user } = response.data

    return NextResponse.json({
      success: true,
      accessToken,
      refreshToken,
      user
    })
  } catch (error: unknown) {
    console.error("API route register error:", error)
    const errorMessage = error instanceof Error ? error.message : "Registration failed"
    return NextResponse.json({ error: errorMessage }, { status: 500 })
  }
}
