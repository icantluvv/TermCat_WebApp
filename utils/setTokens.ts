import Cookies from "universal-cookie"

export function setClientTokens(
  accessToken: string,
  refreshToken: string,
  accessMaxAge?: number,
  refreshMaxAge?: number
) {
  const cookies = new Cookies()

  cookies.remove("TermCatAccessToken", { path: "/" })
  cookies.remove("TermCatRefreshToken", { path: "/" })

  cookies.set("TermCatAccessToken", accessToken, {
    path: "/",
    maxAge: accessMaxAge ? Math.floor(accessMaxAge / 1000) : 13 * 60,
    sameSite: "strict"
  })

  cookies.set("TermCatRefreshToken", refreshToken, {
    path: "/",
    maxAge: refreshMaxAge ? Math.floor(refreshMaxAge / 1000) : 7 * 24 * 60 * 60,
    sameSite: "strict"
  })
}
