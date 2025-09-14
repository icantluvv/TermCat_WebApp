import { AxiosError } from "axios"
import client from "@/package/api/axios.client"

export type RefreshTokenBody = {
  refreshToken: string
}

export type RefreshTokenResponse = {
  accessToken: string
  refreshToken?: string
}

export type RefreshTokenResult = {
  success: boolean
  accessToken?: string
  refreshToken?: string
  error?: {
    message: string
    status: number
  }
}

export async function refreshToken(refreshTokenValue: string): Promise<RefreshTokenResult> {
  try {
    const res = await client<RefreshTokenResponse>({
      method: "POST",
      url: "/auth/refresh",
      data: { refreshToken: refreshTokenValue },
      headers: {
        "Content-Type": "application/json"
      }
    })

    const { accessToken, refreshToken: newRefreshToken } = res.data

    if (!accessToken) {
      return {
        success: false,
        error: {
          message: "Invalid access token from server",
          status: 500
        }
      }
    }

    return {
      success: true,
      accessToken,
      refreshToken: newRefreshToken
    }
  } catch (error) {
    const axiosError = error as AxiosError<{ message: string }>
    console.error("Refresh token error:", axiosError.response?.data || axiosError.message)

    return {
      success: false,
      error: {
        message: axiosError.response?.data?.message || "Failed to refresh token",
        status: axiosError.response?.status || 401
      }
    }
  }
}
