"use server"

import { cookies } from "next/headers"
import client from "@/package/api/axios.client"
import { DialogList } from "@/types/Translate"

export async function getDialogList(): Promise<DialogList> {
  try {
    const cookieStore = await cookies()
    const accessToken = cookieStore.get("accessToken")?.value

    const response = await client<DialogList>({
      url: `/dialogs/list`,
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
