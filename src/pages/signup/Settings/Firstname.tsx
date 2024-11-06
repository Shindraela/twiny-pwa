import type React from 'react'
import styles from '../Signup.module.scss'

interface FirstnameProps {
  data: {
    name: string
  }
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Firstname = ({ data, handleChange }: FirstnameProps) => {
  return (
    <div className={styles.Firstname}>
      <h2 className={styles.SignupStepTitle}>Quel est ton prénom ?</h2>

      <input
        className={styles.FirstnameInput}
        placeholder="Ton prénom"
        name="name"
        value={data.name}
        onChange={handleChange}
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
