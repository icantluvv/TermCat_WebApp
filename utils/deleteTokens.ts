import Cookies from "universal-cookie"

export async function deleteTokens() {
  try {
    const cookies = new Cookies()

    cookies.remove("TermCatAccessToken", { path: "/" })
    cookies.remove("TermCatRefreshToken", { path: "/" })

    return
  } catch {
    throw new Error("Failed to logout")
  }
}
