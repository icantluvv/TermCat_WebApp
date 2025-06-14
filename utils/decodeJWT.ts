import jwt from "jsonwebtoken"

interface DecodedToken {
  exp: number
  [key: string]: unknown
}

export function decodeToken(token: string, secret: string): DecodedToken {
  const decoded = jwt.verify(token, secret)

  if (typeof decoded !== "object" || !("exp" in decoded)) {
    throw new Error("Invalid token payload structure")
  }

  return decoded as DecodedToken
}
