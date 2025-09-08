import { AxiosError } from "axios"
import client from "@/package/axios/axios.client"

export type User = {
  id: string
  name: string
  email: string
  picture?: string
  [key: string]: unknown
}

export type GetMeResult = {
  success: boolean
  data?: User
  error?: {
    message: string
    status: number
  }
}

export async function getMe(accessToken: string): Promise<GetMeResult> {
  try {
    const res = await client<User>({
      method: "GET",
      url: "/users/getMe",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`
      }
    })

    return {
      success: true,
      data: res.data
    }
  } catch (error) {
    const axiosError = error as AxiosError<{ message: string }>
    console.error("Get user info error:", axiosError.response?.data || axiosError.message)

    return {
      success: false,
      error: {
        message: axiosError.response?.data?.message || "Failed to get user info",
        status: axiosError.response?.status || 500
      }
    }
  }
}
