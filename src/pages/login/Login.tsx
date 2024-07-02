/* eslint-disable jsx-a11y/anchor-is-valid */
import type { FormEvent } from 'react'
import { useState } from 'react'
import { useAuth } from '../../hooks/useAuth'
import styles from './Login.module.scss'

interface Errors {
  email?: string
  password?: string
  form?: string
}

const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

const isValidPassword = (password: string): boolean => {
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
  return passwordRegex.test(password)
}

export const Login = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [errors, setErrors] = useState<Errors>({})
  const { login } = useAuth()

  const validateForm = (): Errors => {
    const newErrors: Errors = {}
    if (!email) {
      newErrors.email = 'Email requis'
    } else if (!isValidEmail(email)) {
      newErrors.email = "Format d'email invalide"
    }

    if (!password) {
      newErrors.password = 'Mot de passe requis'
    } else if (!isValidPassword(password)) {
      newErrors.password =
        'Le mot de passe doit comporter au moins 8 caractères, dont au moins une lettre minuscule, une lettre majuscule, un chiffre et un caractère spécial'
    }

    return newErrors
  }

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault()
    setErrors({})

    const validationErrors = validateForm()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    await login({ email })
  }

  const disableSubmitButton = (): boolean => !email.length || !password.length

  return (
    <div className={styles.login}>
      <div className={styles.loginContent}>
        <h3 className={styles.loginTitle}>Connexion</h3>
        <div className={styles.loginLogo}></div>

        <form className={styles.Form} onSubmit={handleLogin}>
          <label htmlFor="email" className={styles.FormLabel}>
            <input
              id="email"
              type="text"
              value={email}
              placeholder="&nbsp;"
              className={`${styles.FormInput} ${errors.email ? styles.FormErrorInput : ''}`}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className={styles.FormPlaceholder}>Email</div>

            {errors.email && (
              <p className={styles.FormErrorText}>{errors.email}</p>
            )}
          </label>

          <label htmlFor="password" className={styles.FormLabel}>
            <input
              id="password"
              type="password"
              value={password}
              placeholder="&nbsp;"
              className={`${styles.FormInput} ${errors.password ? styles.FormErrorInput : ''}`}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className={styles.FormPlaceholder}>Mot de passe</div>

            {errors.password && (
              <p className={styles.FormErrorText}>{errors.password}</p>
            )}
          </label>

          <button
            type="submit"
            className={styles.FormSubmit}
            disabled={disableSubmitButton()}
          >
            Accéder
          </button>

          {errors.form && <p className={styles.FormErrorText}>{errors.form}</p>}
        </form>
      </div>

      <a role="button" className={styles.ForgotPassword}>
        Mot de passe oublié ?
      </a>
    </div>
  )
}
