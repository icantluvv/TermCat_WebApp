import Image from "next/image"
import React from "react"
import back from "@/public/images/auth/back.png"
import SignUpForm from "./components/SignUpForm"

const SignUp = () => {
  return (
    <main className="w-full min-h-[100vh] flex flex-col items-center  relative bg-[#e8e8e8] overflow-auto">
      <SignUpForm />
      <Image
        src={back}
        alt=""
        className="w-full h-full top-0 left-0 absolute opacity-30"
      />
    </main>
  )
}
export default SignUp
