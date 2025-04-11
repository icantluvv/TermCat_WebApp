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
    const res = await fetch("/api/user/getMe", {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    })
    if (!res.ok) {
      throw new Error("Failed to fetch user data")
    }
    const data = await res.json()
    return data
  }
}
