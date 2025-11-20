"use client"

import type React from "react"

import { createContext, useContext, useState, useEffect } from "react"

interface User {
  id: string
  email: string
  name?: string
}

interface AuthContextType {
  user: User | null
  isLoading: boolean
  login: (email: string, password: string) => Promise<void>
  signup: (email: string, password: string, name: string) => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check localStorage for user data on mount
    const userData = localStorage.getItem("oceanome_user")
    if (userData) {
      try {
        setUser(JSON.parse(userData))
      } catch (error) {
        console.error("Failed to parse user data:", error)
      }
    }
    setIsLoading(false)
  }, [])

  const login = async (email: string, password: string) => {
    const userData: User = {
      id: Math.random().toString(36).substr(2, 9),
      email,
    }
    setUser(userData)
    localStorage.setItem("oceanome_user", JSON.stringify(userData))
  }

  const signup = async (email: string, password: string, name: string) => {
    const userData: User = {
      id: Math.random().toString(36).substr(2, 9),
      email,
      name,
    }
    setUser(userData)
    localStorage.setItem("oceanome_user", JSON.stringify(userData))
  }

  const logout = () => {
    localStorage.removeItem("oceanome_user")
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, isLoading, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
