"use client"

import { useAuth } from "@/lib/hooks/useAuth"
import { createContext, useContext, ReactNode } from "react"

// Создаём контекст для авторизации
interface AuthContextType {
  user: any
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

// Хук для использования данных авторизации в других компонентах
export const useAuthContext = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuthContext must be used within an AuthProvider")
  }
  return context
}

interface AuthProviderProps {
  children: ReactNode
}

// Компонент, который будет использовать хук useAuth и предоставлять данные в контексте
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const { user } = useAuth() // Используем твой хук

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  )
}
