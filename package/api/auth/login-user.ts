import { AxiosError } from "axios"
import { decodeToken } from "@/utils/decodeJWT"
import client from "../../axios/axios.client"

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
  accessToken?: string
  refreshToken?: string
  accessMaxAge?: number
  refreshMaxAge?: number
  error?: {
    message: string
    status: number
  }
}

export async function loginUser(body: LoginBody): Promise<LoginResult> {
  if (!process.env.JWT_SECRET) {
    throw new Error("environment has not been configured")
  }

  try {
    const res = await client<LoginResponse>({
      method: "POST",
      url: "/auth/login",
      data: body,
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*"
      }
    })

    const { accessToken, refreshToken } = res.data
    if (!accessToken || !refreshToken) {
      return {
        success: false,
        error: {
          message: "Invalid tokens from server",
          status: 500
        }
      }
    }

    const decodedAccess = decodeToken(accessToken, process.env.JWT_SECRET)
    const decodedRefresh = decodeToken(refreshToken, process.env.JWT_SECRET)

    const accessMaxAge = decodedAccess.exp * 1000 - Date.now()
    const refreshMaxAge = decodedRefresh.exp * 1000 - Date.now()

    if (accessMaxAge <= 0 || refreshMaxAge <= 0) {
      return {
        success: false,
        error: {
          message: "Token already expired",
          status: 401
        }
      }
    }

    return {
      success: true,
      accessToken,
      refreshToken,
      accessMaxAge,
      refreshMaxAge
    }
  } catch (error) {
    const axiosError = error as AxiosError<{ message: string }>
    console.error("Login error:", axiosError.response?.data || axiosError.message)

    return {
      success: false,
      error: {
        message: axiosError.response?.data?.message || "Invalid credentials",
        status: axiosError.response?.status || 401
      }
    }
  }
}
