import { Metadata } from "next"
import { getStaticMeta } from "@/utils/getStaticMeta"
import RegistrationForm from "@/components/molecules/registration-page/RegistrationForm"

export const metadata: Metadata = { ...getStaticMeta("/registration") }

const SignUp = () => {
  return (
    <>
      <RegistrationForm />
    </>
  )
}
export default SignUp
