import { NextResponse } from "next/server"
import { cookies } from "next/headers"

export async function POST() {
  const cookieStore = await cookies()

  const accessToken = cookieStore.get("accessToken")
  const refreshToken = cookieStore.get("refreshToken")

  console.log("Delete Access Token: ", accessToken)
  console.log("Delete Refresh Token: ", refreshToken)

  // создаём редирект-ответ
  const res = NextResponse.redirect(
    new URL("/login", process.env.NEXT_PUBLIC_BASE_URL)
  )

  // удаляем куки через res.cookies
  res.cookies.delete("accessToken")
  res.cookies.delete("refreshToken")

  return res
}
