import { cookies } from "next/headers"
import client from "@/package/api/axios.client"
import { Dialog } from "@/types/Translate"

export async function getDialogById(dialogId: number): Promise<Dialog> {
  try {
    const cookieStore = await cookies()
    const accessToken = cookieStore.get("TermCatAccessToken")?.value

    const response = await client<Dialog>({
      url: `/dialogs/${dialogId}`,
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
