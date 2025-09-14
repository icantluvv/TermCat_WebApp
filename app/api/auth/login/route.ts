import { NextResponse } from "next/server"
import client from "@/package/api/axios.client"
// import { cookies } from "next/headers"

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const response = await client<{ accessToken: string; refreshToken: string }>({
      method: "POST",
      url: "/auth/login",
      data: body,
      headers: { "Content-Type": "application/json" }
    })

    // if (response.data) {
    //   const cookieStore = await cookies()
    //
    //   cookieStore.set({
    //     name: "termAccessToken",
    //     value: response.data.accessToken,
    //     httpOnly: false,
    //     path: "/",
    //     expires: new Date(Date.now() + 10 * 60 * 1000)
    //   })
    //
    //   cookieStore.set({
    //     name: "termRefreshToken",
    //     value: response.data.refreshToken,
    //     httpOnly: false,
    //     path: "/",
    //     expires: new Date(Date.now() + 7 * 23 * 60 * 60 * 1000)
    //   })
    // }

    return NextResponse.json(response.data)
  } catch (error: unknown) {
    console.error("API route login error:", error)
    const errorMessage = error instanceof Error ? error.message : "Internal Server Error"
    return NextResponse.json({ message: errorMessage }, { status: 500 })
  }
}
