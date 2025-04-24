import axios from "axios"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const body = await req.json()

  try {
    const res = await axios.post(
      `${process.env.BACKEND_URL}/auth/register`,
      body,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "*/*"
        }
      }
    )

    const accessToken = res.data.accessToken
    const refreshToken = res.data.refreshToken

    const response = NextResponse.json(
      { message: "Registration successful" },
      { status: 200 }
    )

    response.cookies.set("accessToken", accessToken, {
      httpOnly: true,
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 15 // 15 minutes
    })

    response.cookies.set("refreshToken", refreshToken, {
      httpOnly: true,
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60 * 24 * 7
    })

    return response
  } catch (error) {
    console.error("Registration error:", error)
    return NextResponse.json(
      { message: "Invalid credentials" },
      { status: 401 }
    )
  }
}
