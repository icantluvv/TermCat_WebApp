import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api-proxy/:path*",
        destination: "/:path*"
      }
    ]
  },
  reactStrictMode: true,
  swcMinify: true
}

export default nextConfig
