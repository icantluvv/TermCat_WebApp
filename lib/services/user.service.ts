import axios, { AxiosInstance } from "axios"
import getAccessToken from "../getAccess"

export class UserService {
  private api: AxiosInstance

  constructor() {
    this.api = axios.create({
      baseURL: process.env.BACKEND_URL
    })
  }

  async getCurrentUser() {
    const token = getAccessToken()
    try {
      const res = await this.api.get("/users/getMe", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      return res.data
    } catch (e) {
      return null
    }
  }
}
