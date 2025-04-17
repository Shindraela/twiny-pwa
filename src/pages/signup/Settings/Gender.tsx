import { Fragment } from 'react'
import styles from '../Signup.module.scss'

interface GenderProps {
  data: {
    gender: string
  }
  handleChange: (value: string, name: string) => void
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
    <div className={styles.Choices}>
      <h2 className={styles.SignupStepTitle}>Tu es ... ?</h2>

      <div className={styles.ChoicesOptions}>
        {genders.map((gender, i) => (
          <Fragment key={i}>
            <button
              type="button"
              className={`${styles.ChoicesInput} ${data.gender === gender.value ? styles.ChoicesInputSelected : ''
                }`}
              onClick={() => handleChange(gender.value, 'gender')}
            >
              {gender.value}
            </button>
          </Fragment>
        ))}
      </div>
    </div>
  )
}
