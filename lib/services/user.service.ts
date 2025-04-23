import { TokenValidate } from "@/utils/TokenValidate"
import axios from "axios"

interface UserData {
  id: string
  name: string
  email: string
  image: string
}

export class UserService {
  private static instance: UserService
  private constructor() {}

  public static getInstance(): UserService {
    if (!UserService.instance) {
      UserService.instance = new UserService()
    }
    return UserService.instance
  }

  async getUser(): Promise<UserData> {
    const accessToken = await TokenValidate()

    const res = await axios.get<UserData>(
      `${process.env.BACKEND_URL}/users/getMe`,
      {
        headers: { Authorization: `Bearer ${accessToken}` },
        params: { revalidate: 60 }
      }
    )
    if (res.status === 200 || res.status === 201) {
      return res.data
    }
    throw new Error("Failed to fetch user data")
  }
}
