import { isAccessTokenExpired } from "@/utils/isAccessTokenExpired"
import { refreshToken } from "@/package/api/auth/refresh-token"
import Cookies from "universal-cookie"
import { redirect } from "next/navigation"

export async function getAccessToken(): Promise<string | undefined> {
  const cookies = new Cookies()
  let accessToken = cookies.get("accessToken")
  const refreshTokenValue = cookies.get("refreshToken")

  if (isAccessTokenExpired(accessToken) && refreshTokenValue) {
    try {
      const newAccessToken = await refreshToken({ refreshToken: refreshTokenValue })
      if (newAccessToken) {
        accessToken = newAccessToken

        if (typeof window !== "undefined") {
          const cookies = new Cookies()
          cookies.set("accessToken", newAccessToken, { path: "/", maxAge: 13 * 60 })
        }
      }
    } catch (error) {
      console.error("Token refresh failed:", error)

      if (typeof window === "undefined") {
        redirect("/login")
      } else {
        window.location.href = "/login"
        return undefined
      }
    }
  }

  return accessToken
}
