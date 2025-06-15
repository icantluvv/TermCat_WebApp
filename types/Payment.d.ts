interface SubscribeStatus {
  id: number
  startedAt: string
  expiresAt: string
  isActive: true
  createdAt: string
  updatedAt: string
}

interface SubscribeStatusProps {
  subscribe: SubscribeStatus
}
