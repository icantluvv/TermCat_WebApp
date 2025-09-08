export function isAccessTokenExpired(token?: string): boolean {
  if (!token) return true

  try {
    const payloadBase64 = token.split(".")[1]
    const decodedPayload = JSON.parse(Buffer.from(payloadBase64, "base64").toString("utf-8"))
    const exp = decodedPayload.exp
    const now = Math.floor(Date.now() / 1000)
    return exp < now
  } catch (error) {
    console.error("Failed to decode token:", error)
    return true
  }
}
