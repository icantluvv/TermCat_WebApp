import axios from "axios"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const body: LoginBody = await req.json()
  try {
    const res = await axios.post(
      `${process.env.BACKEND_URL}/auth/login`,
      body,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "*/*"
        }
      }
    )

    const { accessToken, refreshToken } = res.data

    if (!accessToken || !refreshToken) {
      return NextResponse.json(
        { message: "Invalid tokens from server" },
        { status: 500 }
      )
    }

    const response = NextResponse.json({ message: "Login successful" })

    response.cookies.set("accessToken", accessToken, {
      httpOnly: true,
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 10
    })

    response.cookies.set("refreshToken", refreshToken, {
      httpOnly: true,
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7
    })
    return response
  } catch (error: any) {
    console.error("Login error:", error.response?.data || error.message)
    return NextResponse.json(
      { message: error.response?.data?.message || "Invalid credentials" },
      { status: error.response?.status || 401 }
    )
  }
}
interface LoginBody {
  email: string
  password: string
}
