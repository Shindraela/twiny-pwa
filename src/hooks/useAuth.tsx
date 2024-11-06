import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'
import { useNavigate } from 'react-router-dom'
import { useLocalStorage } from './useLocalStorage'
import type { ChildrenProps } from '../types/children'
import type { IAuthContextProps } from '../types/auth'
import type { IUser } from '../types/user'
const AuthContext = createContext({} as IAuthContextProps)

export const AuthProvider = ({ children }: ChildrenProps) => {
  const [user, setUser] = useLocalStorage('user', undefined)
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState<number>(0)

  const login = useCallback(
    async (user: IUser) => {
      setUser(user)
      navigate('/')
    },
    [navigate, setUser]
  )

  const logout = useCallback(() => {
    setUser(null)
    navigate('/', { replace: true })
  }, [navigate, setUser])

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
      activeTab,
      setActiveTab,
    }),
    [activeTab, login, logout, user]
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  return useContext(AuthContext)
}
