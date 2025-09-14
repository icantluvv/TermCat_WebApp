import { AxiosError } from "axios"
import client from "@/package/api/axios.client"

export type SubscriptionInfo = {
  isActive: boolean
  [key: string]: unknown
}

export type GetSubInfoResult = {
  success: boolean
  data?: SubscriptionInfo
  error?: {
    message: string
    status: number
  }
}

export async function getSubInfo(userId: string, accessToken: string): Promise<GetSubInfoResult> {
  try {
    const res = await client<SubscriptionInfo>({
      method: "GET",
      url: `/subscriptions/getInfoSub/${userId}`,
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
    console.error("Get subscription info error:", axiosError.response?.data || axiosError.message)

    return {
      success: false,
      error: {
        message: axiosError.response?.data?.message || "Failed to get subscription info",
        status: axiosError.response?.status || 500
      }
    }
  }
}
