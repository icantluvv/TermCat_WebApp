import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === "/login" || request.nextUrl.pathname === "/signup") {
    return NextResponse.next()
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/WebApp/:path*"]
}
