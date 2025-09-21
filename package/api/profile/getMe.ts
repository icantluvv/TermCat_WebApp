import { cookies } from "next/headers"
import client from "@/package/api/axios.client"
import { User } from "@/types/User"

export async function getMe(): Promise<User> {
  try {
    const cookieStore = await cookies()
    const accessToken = cookieStore.get("TermCatAccessToken")?.value

    const response = await client<User>({
      url: "/users/getMe",
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })

    return response.data
  } catch (error: unknown) {
    throw new Error("Error of fetching user data" + error)
  }
}
