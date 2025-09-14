import Cookies from "universal-cookie"
import client, { type RequestConfig, type ResponseConfig } from "../axios.client"

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

export type RegisterResult = {
  success: boolean
  data?: RegisterResponse
  error?: string
}

export async function registerUser({ email, password, name }: RegisterBody): Promise<RegisterResult> {
  const config: RequestConfig<RegisterBody> = {
    method: "POST",
    url: "/api/auth/register",
    baseURL: "/",
    data: { email, password, name },
    headers: { "Content-Type": "application/json" }
  }

  const cookies = new Cookies()

  try {
    const response: ResponseConfig<RegisterResponse> = await client<RegisterResponse, RegisterBody>(config)
    const { accessToken, refreshToken, user } = response.data

    if (!accessToken || !refreshToken) {
      return { success: false, error: "Invalid tokens from API" }
    }

    cookies.set("accessToken", accessToken, { path: "/", maxAge: 10 * 60 })
    cookies.set("refreshToken", refreshToken, { path: "/", maxAge: 7 * 23 * 60 * 60 })

    return { success: true, data: { accessToken, refreshToken, user } }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "An unknown error occurred"
    }
  }
}
