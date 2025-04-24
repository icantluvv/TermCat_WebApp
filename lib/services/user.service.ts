import axios from "axios"
import { cookies } from "next/headers"

export class UserService {
  private static instance: UserService
  private constructor() {}

  public static getInstance(): UserService {
    if (!UserService.instance) {
      UserService.instance = new UserService()
    }
    return UserService.instance
  }

  async getUser(): Promise<User> {
    const accessToken = (await cookies()).get("accessToken")?.value
    try {
      const res = await axios.get<User>(
        `${process.env.BACKEND_URL}/users/getMe`,
        {
          headers: { Authorization: `Bearer ${accessToken}` },
          params: { revalidate: 60 }
        }
      )
      if (res.status === 200 || res.status === 201) {
        return res.data
      }
    } catch {
      throw Error("Fetch trouble")
    }

    throw new Error("getUser function error")
  }
}
