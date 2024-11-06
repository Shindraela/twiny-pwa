import { Fragment } from 'react'
import styles from '../Signup.module.scss'

interface GenderProps {
  data: {
    gender: string
  }
  handleChange: (value: string) => void
}

type InputType = {
  value: string
  placeholder: string
}

export const Gender = ({ data, handleChange }: GenderProps) => {
  const genders: InputType[] = [
    { value: 'Une femme', placeholder: 'femme' },
    { value: 'Un homme', placeholder: 'homme' },
    { value: 'Non binaire', placeholder: 'non binaire' },
    { value: 'Je ne souhaite pas le préciser', placeholder: 'non précisé' },
  ]

  return (
    <div className={styles.Gender}>
      <h2 className={styles.SignupStepTitle}>Tu es ... ?</h2>

      <div className={styles.GenderOptions}>
        {genders.map((gender, i) => (
          <Fragment key={i}>
            <button
              type="button"
              className={`${styles.GenderInput} ${
                data.gender === gender.value ? styles.GenderInputSelected : ''
              }`}
              onClick={() => handleChange(gender.value)}
            >
              {gender.value}
            </button>
          </Fragment>
        ))}
      </div>
    </div>
  )
}
