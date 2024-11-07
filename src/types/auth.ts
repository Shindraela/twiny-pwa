import type { IUser } from './user'

export interface IAuthContextProps {
  user: IUser
  login: (data: any) => Promise<void>
  logout: () => void
  activeTab: number
  setActiveTab: (activeTab: number) => void
}
