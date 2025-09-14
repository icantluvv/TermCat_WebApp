import axios, { AxiosRequestConfig, Method, AxiosResponse } from "axios"
import Cookies from "universal-cookie"
import { getAccessToken } from "./getAccessToken"

const baseURL = process.env.BASE_API_HOST
  ? process.env.BASE_API_HOST.startsWith("http")
    ? process.env.BASE_API_HOST
    : `http://${process.env.BASE_API_HOST}`
  : ""

const client = axios.create({
  baseURL: process.env.NODE_ENV === "development" ? `${baseURL}/api-proxy` : baseURL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
})

axios.interceptors.request.use((request) => {
  console.log(request)
  return request
})

interface CreateHttpRequestOptions {
  method: Method
  path: string
  baseURL?: string
  authorization?: boolean
  refresh?: boolean
  data?: unknown
  req?: { headers?: Record<string, string> }
  headers?: Record<string, string>
  token?: string
  refreshToken?: string
  withoutCache?: boolean
  abortSignal?: AbortSignal
}

export function createHttpRequest<T = unknown>({
  method,
  path,
  baseURL,
  authorization,
  refresh,
  data,
  req,
  headers,
  token,
  refreshToken,
  withoutCache,
  abortSignal
}: CreateHttpRequestOptions): Promise<AxiosResponse<T>> {
  const options: AxiosRequestConfig = {}
  const cookies = new Cookies(req?.headers?.cookie)

  if (authorization ?? true) {
    const accessToken = token || getAccessToken(req)

    if (accessToken) {
      options.headers = {
        ...(client.defaults.headers.common as Record<string, string>),
        ...(client.defaults.headers[method.toLowerCase() as keyof typeof client.defaults.headers] as
          | Record<string, string>
          | undefined),
        Authorization: `Bearer ${accessToken}`
      }

      if (
        req &&
        cookies.get("termcatAccessToken") !== null &&
        typeof cookies.get("termcatAccessToken") !== "undefined"
      ) {
        options.headers["cookie"] = req.headers?.cookie
      }
    }
  }

  if (refresh) {
    const refreshTok = refreshToken || cookies.get("termcatRefreshToken")
    if (refreshTok) {
      options.headers = {
        ...(client.defaults.headers.common as Record<string, string>),
        ...(client.defaults.headers[method.toLowerCase() as keyof typeof client.defaults.headers] as
          | Record<string, string>
          | undefined),
        Authorization: `Bearer ${refreshTok}`
      }
    }
  }

  if (baseURL) {
    options.baseURL = (process.env.BASE_API_HOST || "") + baseURL
  } else if (!baseURL && !req) {
    options.baseURL = client.defaults.baseURL
  }

  if (headers) {
    options.headers = {
      ...(client.defaults.headers as Record<string, unknown>),
      ...(options.headers as Record<string, unknown>),
      ...(headers as Record<string, unknown>)
    } as AxiosRequestConfig["headers"]
  } else if (!headers && !authorization && !refresh) {
    options.headers = {
      ...(client.defaults.headers as Record<string, unknown>),
      ...((options.headers as Record<string, unknown>) ?? {})
    } as AxiosRequestConfig["headers"]
  }

  if (withoutCache) {
    options.headers = { ...options.headers, "Cache-Control": "no-cache" }
  }

  if (req?.headers?.["x-forwarded-for"]) {
    options.headers = { ...options.headers, "x-forwarded-for": req.headers["x-forwarded-for"] }
  }

  if (abortSignal) {
    options.signal = abortSignal
  }

  return client({
    method,
    url: path,
    data,
    ...options
  })
}
