
export class AuthService {
  private static instance: AuthService
  private constructor() {}

  public static getInstance(): AuthService {
    if (!AuthService.instance) {
      AuthService.instance = new AuthService()
    }
    return AuthService.instance
  }

  async login(data: LoginData): Promise<boolean> {
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    })

    return res.ok
  }

  async signup(data: SignupData): Promise<boolean> {
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    })

    return res.ok
  }

  async logout(): Promise<void> {
    await fetch("/api/auth/logout", { method: "POST" })
  }
}
