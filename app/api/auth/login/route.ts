import { NextResponse } from "next/server"
import client from "@/package/api/axios.client"
// import { cookies } from "next/headers"

type LoginResponse = {
  accessToken: string
  refreshToken: string
}

export async function POST(req: Request) {
  const { email, password } = await req.json()

  try {
    const response = await client<LoginResponse>({
      method: "POST",
      url: "/auth/login",
      data: { email, password },
      headers: { "Content-Type": "application/json" }
    })

<<<<<<< Updated upstream
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
=======
    const { accessToken, refreshToken } = response.data

    return NextResponse.json({
      success: true,
      accessToken,
      refreshToken
    })
  } catch {
    return NextResponse.json({ success: false, error: "Login failed" }, { status: 401 })
>>>>>>> Stashed changes
  }
}
