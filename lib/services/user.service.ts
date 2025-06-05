import axios, { AxiosInstance } from "axios"

export class UserService {
  private api: AxiosInstance

  constructor() {
    this.api = axios.create({
      baseURL: process.env.BACKEND_URL
    })
  }
}
