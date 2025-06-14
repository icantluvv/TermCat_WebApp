import { JwtPayload } from "jsonwebtoken";

export default function isJwtPayload(payload: string | JwtPayload): payload is JwtPayload {
  return typeof payload === "object" && payload !== null
}
