import { AxiosError } from "axios"
import client from "@/package/api/axios.client"
import Cookies from "universal-cookie"

export type RefreshTokenBody = {
  refreshToken: string
}

export type RefreshTokenResponse = {
  accessToken: string
}

export async function refreshToken({ refreshToken }: RefreshTokenBody): Promise<string | undefined> {
  try {
    const res = await client<RefreshTokenResponse>({
      method: "POST",
      url: "/auth/refresh",
      data: { refreshToken },
      headers: {
        "Content-Type": "application/json"
      }
    })

    const newAccessToken = res.data.accessToken

    if (typeof window !== "undefined") {
      const cookies = new Cookies()
      cookies.set("accessToken", newAccessToken, { path: "/", maxAge: 13 * 60 })
    }

    return newAccessToken
  } catch (error) {
    const axiosError = error as AxiosError<{ message: string }>
    console.error("Refresh token error:", axiosError.response?.data || axiosError.message)
    return undefined
  }
}
