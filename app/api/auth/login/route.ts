import axios from "axios"
import { NextResponse } from "next/server"
import { decodeToken } from "@/utils/decodeJWT"
import { setTokensInCookies } from "@/utils/setTokens"

export async function POST(req: Request) {
  // if no ENV at project
  if (!process.env.JWT_SECRET) {
    throw new Error("environment has not been configured")
  }

  // create Body of request
  const body: LoginBody = await req.json()

  // make request to backend
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

    // get tokens from response
    const { accessToken, refreshToken } = res.data
    if (!accessToken || !refreshToken) {
      return NextResponse.json(
        { message: "Invalid tokens from server" },
        { status: 500 }
      )
    }

    // decode tokens to get expiration time
    const decodedAccess = decodeToken(accessToken, process.env.JWT_SECRET)
    const decodedRefresh = decodeToken(refreshToken, process.env.JWT_SECRET)

    const accessMaxAge = decodedAccess.exp * 1000 - Date.now()
    const refreshMaxAge = decodedRefresh.exp * 1000 - Date.now()

    if (accessMaxAge <= 0 || refreshMaxAge <= 0) {
      return NextResponse.json(
        { message: "Token already expired" },
        { status: 401 }
      )
    }

    const response = NextResponse.json({ message: "Login successful" })

    // set tokens in cookies
    setTokensInCookies(
      response,
      accessToken,
      accessMaxAge,
      refreshToken,
      refreshMaxAge
    )

    return response
  } catch (error: any) {
    console.error("Login error:", error.response?.data || error.message)
    return NextResponse.json(
      { message: error.response?.data?.message || "Invalid credentials" },
      { status: error.response?.status || 401 }
    )
  }
}
