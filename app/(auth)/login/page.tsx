import { Metadata } from "next"
import { getStaticMeta } from "@/utils/getStaticMeta"
import LoginForm from "@/components/feature/login-page/LoginForm"

export const metadata: Metadata = { ...getStaticMeta("/login") }

const LoginPage = () => {
  return (
    <>
      <LoginForm />
    </>
  )
}
export default LoginPage
