import { Navigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import type { ChildrenProps } from '../types/children'
import type { UserType } from '../types/user'

export const ProtectedRoute = ({ children }: ChildrenProps) => {
  const { user } = useAuth() as UserType

  if (!user) {
    return <Navigate to="/onboarding" />
  }

  return children
}
