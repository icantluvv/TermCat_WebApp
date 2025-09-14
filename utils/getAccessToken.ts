import Cookies from "universal-cookie"

interface RequestWithHeaders {
  headers?: Record<string, string>
}

export function getAccessToken(req?: RequestWithHeaders): string {
  const cookies = new Cookies(req?.headers?.cookie)
  return cookies.get("switch_termcatAccessToken") ?? cookies.get("termcatAccessToken")
}
