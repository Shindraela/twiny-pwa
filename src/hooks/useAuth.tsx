import { createContext, useContext, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLocalStorage } from './useLocalStorage'
import type { ChildrenProps } from '../types/children'
import type { IAuthContextProps } from '../types/auth'
import type { IUser } from '../types/user'
const AuthContext = createContext({} as IAuthContextProps)

export const AuthProvider = ({ children }: ChildrenProps) => {
  const [user, setUser] = useLocalStorage('user', undefined)
  const navigate = useNavigate()

  const login = async (user: IUser) => {
    setUser(user)
    navigate('/')
  }

  const logout = () => {
    setUser(null)
    navigate('/', { replace: true })
  }

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
    }),
    [user]
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  return useContext(AuthContext)
}
