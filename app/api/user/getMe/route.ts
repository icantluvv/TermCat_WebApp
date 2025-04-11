import { cookies } from "next/headers"

export async function GET() {
  const cookiesStorage = await cookies()

  const token = cookiesStorage.get("accessToken")?.value

  if (!token) {
    return new Response("Unauthorized", { status: 401 })
  }

  try {
    const res = await fetch(`${process.env.BACKEND_URL}/users/getMe`, {
      headers: { Authorization: `Bearer ${token}` }
    })

    if (!res.ok) {
      return new Response("Unauthorized", { status: 401 })
    }

    const user = await res.json()
    return new Response(JSON.stringify(user))
  } catch (error) {
    return new Response("Internal Server Error", { status: 500 })
  }
}
