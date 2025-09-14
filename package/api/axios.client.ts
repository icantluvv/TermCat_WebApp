import axios, { type AxiosError, type AxiosRequestConfig, type AxiosResponse } from "axios"

export type RequestConfig<TData = unknown> = {
  data?: TData
  headers?: AxiosRequestConfig["headers"]
  method: "DELETE" | "GET" | "PATCH" | "POST" | "PUT"
  params?: unknown
  responseType?: "arraybuffer" | "blob" | "document" | "json" | "stream" | "text"
  signal?: AbortSignal
  url?: string
  baseURL?: string // <-- новый параметр
}

export type ResponseErrorConfig<TError = unknown> = TError

export type ResponseConfig<TData = unknown> = {
  data: TData
  headers?: AxiosResponse["headers"]
  status: number
  statusText: string
}

export const axiosInstance = axios.create({
  baseURL: (process.env.BASE_API_URL as string) ?? (process.env.NEXT_PUBLIC_BASE_API_URL as string),
  withCredentials: true
})

const client = async <TData, TError = unknown, TVariables = unknown>(
  config: RequestConfig<TVariables>
): Promise<ResponseConfig<TData>> => {
  const axiosConfig = {
    ...config,
    baseURL: config.baseURL ?? axiosInstance.defaults.baseURL
  }

  return axiosInstance.request<TVariables, ResponseConfig<TData>>(axiosConfig).catch((error: AxiosError<TError>) => {
    if (error.config) {
      throw new Error(
        `Request Failed: \n ${JSON.stringify({
          message: error.message,
          responseData: error.response?.data,
          status: error.status,
          url: `${String(error.config.baseURL)}${String(error.config.url)}`
        })}`
      )
    }

    throw error
  })
}

axiosInstance.interceptors.request.use((request) => {
  console.log("Request baseURL:", request.baseURL)
  return request
})

export default client
