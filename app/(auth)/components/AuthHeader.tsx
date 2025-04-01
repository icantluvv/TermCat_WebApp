import Image from "next/image"
import React from "react"

import auth_logo from "@/public/images/auth/logo.png"

const authHeader = () => {
  return (
    <div className="w-full h-[50px] xl:h-[70px] 2xl:h-[80px] bg-[#0c0c0c] flex items-center justify-center absolute z-[9000]">
      <Image src={auth_logo} alt={""} className="scale-50"></Image>
    </div>
  )
}

export default authHeader
