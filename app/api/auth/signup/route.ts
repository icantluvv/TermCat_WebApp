import { cookies } from "next/headers"

export async function POST(req: Request) {
  const body = await req.json()
  const res = await fetch(`${process.env.BACKEND_URL}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "*/*" },
    body: JSON.stringify(body)
  })

  if (!res.ok) {
    console.log("Login failed ", res)
    return new Response("Unauthorized", { status: 401 })
  }

  const { accessToken, refreshToken } = await res.json()
  const cookieStore = await cookies()

  // accessToken — 15 минут
  cookieStore.set("accessToken", accessToken, {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    path: "/",
    maxAge: 60 * 15
  })

  // refreshToken — 7 дней
  cookieStore.set("refreshToken", refreshToken, {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    path: "/",
    maxAge: 60 * 60 * 24 * 7
  })

  return new Response(JSON.stringify({ success: true }))
}
