export type User = {
  id: number
  name?: string
  email?: string
  roleId?: number
  createdAt?: string
  updatedAt?: string
}

export type Subscription = {
  isActive: boolean
}
