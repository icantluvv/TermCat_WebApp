interface User {
  id: number
  name: string
  email: string
  roleId: number
}

interface UserProps {
  user: User
}

interface LoginBody {
  email: string
  password: string
}

interface SignUpBody {
  email: string
  password: string
  name: string
}

type LoginData = { email: string; password: string }
type SignupData = { email: string; password: string; name: string }
