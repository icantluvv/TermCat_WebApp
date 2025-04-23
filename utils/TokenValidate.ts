import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export async function TokenValidate() {
  const cookieStore = await cookies()

  const accessToken = cookieStore.get("accessToken")?.value
  const refreshToken = cookieStore.get("refreshToken")?.value

  if (accessToken && refreshToken) {
    return accessToken
  }

  if (!accessToken && refreshToken) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/refresh`,
      {
        headers: {
          Cookie: `refreshToken=${refreshToken}`
        },
        method: "POST",
        credentials: "include"
      }
    )

    if (res.ok) {
      const data = await res.json()
      return data.accessToken
    }

    throw new Error("Failed to refresh access token")
  }

  if (!refreshToken) {
    return redirect("/login")
  }
}
