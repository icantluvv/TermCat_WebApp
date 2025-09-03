import { Metadata } from "next"
import { getStaticMeta } from "@/utils/getStaticMeta"
import RegistrationForm from "@/components/feature/registration-page/RegistrationForm"

export const metadata: Metadata = { ...getStaticMeta("/registration") }

const SignUp = () => {
  return (
    <>
      <RegistrationForm />
    </>
  )
}
export default SignUp
