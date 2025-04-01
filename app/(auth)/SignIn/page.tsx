import Image from "next/image"
import React from "react"
import back from "@/public/images/auth/back.png"
import SignInForm from "./components/SignInForm"

const SignIn = () => {
  return (
    <main className="w-full h-full flex flex-col items-center justify-center relative bg-[#e8e8e8] pt-[50px] xl:pt-[70px] 2xl:pt-[80px] overflow-auto">
      <SignInForm />
      <Image
        src={back}
        alt=""
        className="w-full h-full top-0 left-0 absolute opacity-30"
      />
    </main>
  )
}
export default SignIn
