import { cookies } from "next/headers"

export default async function getAccessToken() {
  const cookieStore = await cookies()
  let accessToken = cookieStore.get("accessToken")?.value

  if (accessToken) {
    return accessToken
  }

  const refreshToken = cookieStore.get("refreshToken")?.value
  if (!refreshToken) {
    return null
  }

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/refresh`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" }
      }
    )

    if (!res.ok) {
      return null
    }

    const data = await res.json()
    accessToken = data.accessToken

    return accessToken
  } catch (error) {
    console.error("Ошибка при обновлении access токена:", error)
    return null
  }
}
