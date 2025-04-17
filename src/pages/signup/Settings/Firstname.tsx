import { useState } from 'react'
import styles from '../Signup.module.scss'

interface FirstnameProps {
  data: {
    firstname: string
  }
  handleChange: (value: string, name: string) => void
}

export const Firstname = ({ data, handleChange }: FirstnameProps) => {
  const [currentFirstname, setCurrentFirstname] = useState<string>('')

  const handleFirstnameChange = (value: string) => {
    setCurrentFirstname(value)
    handleChange(value, 'firstname')
  }

  return (
    <div className={styles.Firstname}>
      <h2 className={styles.SignupStepTitle}>Quel est ton prénom ?</h2>

      <input
        className={styles.FirstnameInput}
        placeholder="Ton prénom"
        name="name"
        value={currentFirstname}
        onChange={(event) => handleFirstnameChange(event.target.value)}
      />

      <p className={styles.SignupStepText}>
        <span className={styles.SignupStepSpan}>
          C'est comme ça qu'il apparaîtra sur ton profil.
        </span>
        <br />
        <span className={styles.SignupStepSpan}>
          Tu ne pourras pas le modifier plus tard.
        </span>
      </p>
    </div>
  )
}
