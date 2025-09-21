import Cookies from "universal-cookie"
import client from "@/package/api/axios.client"
import { ActiveSub } from "@/types/Subscription"

export async function activateSub(code: string): Promise<ActiveSub> {
  const cookies = new Cookies()
  const accessToken = cookies.get("accessToken")

  const response = await client<ActiveSub>({
    url: "/api/payment/activate-sub",
    baseURL: "/",
    method: "POST",
    data: code,
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json"
    }
  })

  return response.data
}
