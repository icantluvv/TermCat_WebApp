import Cookies from "universal-cookie"
import client, { type RequestConfig, type ResponseConfig } from "../axios.client"

export type LoginBody = {
  email: string
  password: string
}

export type LoginResponse = {
  accessToken: string
  refreshToken: string
}

export type LoginResult = {
  success: boolean
  data?: LoginResponse
  error?: string
}

export async function loginUser({ email, password }: LoginBody): Promise<LoginResult> {
  const config: RequestConfig<LoginBody> = {
    method: "POST",
    url: "/api/auth/login",
    baseURL: "/",
    data: { email, password },
    headers: { "Content-Type": "application/json" }
  }

  const cookies = new Cookies()

  try {
    const response: ResponseConfig<LoginResponse> = await client<LoginResponse, LoginBody>(config)
    const { accessToken, refreshToken } = response.data

    if (!accessToken || !refreshToken) {
      return { success: false, error: "Invalid tokens from API" }
    }

    cookies.set("accessToken", accessToken, { path: "/", maxAge: 10 * 60 })
    cookies.set("refreshToken", refreshToken, { path: "/", maxAge: 7 * 24 * 60 * 60 })

    return { success: true, data: { accessToken, refreshToken } }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "An unknown error occurred"
    }
  }
}
