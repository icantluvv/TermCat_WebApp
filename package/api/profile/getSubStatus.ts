"use server"

import { cookies } from "next/headers"
import client from "@/package/api/axios.client"
import { SubData } from "@/types/Subscription"

export async function getSubStatus(userId: number): Promise<SubData> {
  try {
    const cookieStore = await cookies()
    const accessToken = cookieStore.get("accessToken")?.value

    const response = await client<SubData>({
      url: `/subscriptions/getInfoSub/${userId}`,
      method: "GET",
      headers: {
        accept: "*/*",
        Authorization: `Bearer ${accessToken}`
      }
    })

    return response.data
  } catch (error) {
    throw new Error("Error of fetching subscription data" + error)
  }
}
