import axios, { AxiosError } from "axios"
import { NextResponse } from "next/server"
import { decodeToken } from "@/utils/decodeJWT"
import { setTokensInCookies } from "@/utils/setTokens"

export async function POST(req: Request) {
  if (!process.env.JWT_SECRET) {
    throw new Error("environment has not been configured")
  }

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

    const { accessToken, refreshToken } = res.data
    if (!accessToken || !refreshToken) {
      return NextResponse.json(
        { message: "Invalid tokens from server" },
        { status: 500 }
      )
    }

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

    const response = NextResponse.json(
      { message: "Registration successful" },
      { status: 200 }
    )

    setTokensInCookies(
      response,
      accessToken,
      accessMaxAge,
      refreshToken,
      refreshMaxAge
    )

    return response
  } catch (error) {
    const axiosError = error as AxiosError<{ message: string }>
    console.error(
      "Registration error:",
      axiosError.response?.data || axiosError.message
    )
    return NextResponse.json(
      { message: axiosError.response?.data?.message || "Invalid credentials" },
      { status: axiosError.response?.status || 401 }
    )
  }
}
