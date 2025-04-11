"use client"

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export function useAuth() {
  const router = useRouter()
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch("/api/user/getMe")
      .then((res) => {
        if (!res.ok) throw new Error()
        return res.json()
      })
      .then((data) => setUser(data))
      .catch(() => router.push("/login"))
  }, [router])

  return { user }
}
