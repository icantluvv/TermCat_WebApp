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
