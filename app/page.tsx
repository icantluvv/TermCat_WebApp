"use client"
import { useRouter } from "next/navigation"
import React from "react"

const LandingPage = () => {
  const router = useRouter()

  return (
    <div>
      <button
        onClick={() => router.push("login")}
        className="bg-black rounded-[24px] px-[3vw] py-[8px] text-white"
      >
        Login
      </button>
    </div>
  )
}

export default LandingPage
