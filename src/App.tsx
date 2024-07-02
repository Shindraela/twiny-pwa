/* eslint-disable jsx-a11y/anchor-is-valid */
import { Route, Routes } from 'react-router'
import { Auth } from './layouts/Auth'
import { Home } from './layouts/Home'
import { Login } from './pages/login/Login'
import { Signup } from './pages/signup/Signup'
import { ChatList } from './pages/chatList/ChatList'
import { ProtectedRoute } from './components/ProtectedRoutes'
import { AuthProvider } from './hooks/useAuth'
import { Onboarding } from './pages/onboarding/Onboarding'

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="" element={<Auth />}>
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>

        <Route path="/" element={<Home />}>
          <Route
            index
            element={
              <ProtectedRoute>
                <ChatList />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </AuthProvider>
  )
}

export default App
