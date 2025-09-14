import { NextResponse } from "next/server"
import client from "@/package/api/axios.client"

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const response = await client<{ accessToken: string; refreshToken: string }>({
      method: "POST",
      url: "/auth/register",
      data: body,
      headers: { "Content-Type": "application/json" }
    })

    return NextResponse.json(response.data)
  } catch (error: unknown) {
    console.error("API route register error:", error)
    const errorMessage = error instanceof Error ? error.message : "Internal Server Error"
    return NextResponse.json({ message: errorMessage }, { status: 500 })
  }
}
