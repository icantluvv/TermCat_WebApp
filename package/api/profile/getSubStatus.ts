"use server"

import { cookies } from "next/headers"
import client from "@/package/api/axios.client"
import { SubData, ActiveSub } from "@/types/Subscription"

export async function getSubStatus(userId: number): Promise<SubData | ActiveSub> {
  try {
    const cookieStore = await cookies()
    const accessToken = cookieStore.get("accessToken")?.value

    const response = await client<SubData | ActiveSub>({
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
