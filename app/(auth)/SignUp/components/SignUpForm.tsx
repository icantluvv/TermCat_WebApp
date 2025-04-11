"use client"

import MobileSignUpForm from "./MobileSignUpForm"
import PcSignUpForm from "./PcSignUpForm"

const SignUpForm = () => {
  return (
    <div className="flex w-full h-full justify-center ">
      <PcSignUpForm />
      <MobileSignUpForm />
    </div>
  )
}
export default SignUpForm
