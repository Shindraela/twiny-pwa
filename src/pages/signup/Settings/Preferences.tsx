import { Fragment } from 'react'
import styles from '../Signup.module.scss'

interface PreferencesProps {
  data: {
    preference: string
  }
  handleChange: (value: string, name: string) => void
}

type InputType = {
  value: string
  placeholder: string
}

export const Preferences = ({ data, handleChange }: PreferencesProps) => {
  const preferences: InputType[] = [
    { value: 'Femmes', placeholder: 'femmes' },
    { value: 'Hommes', placeholder: 'hommes' },
    { value: 'Peu importe, les deux', placeholder: 'no preferences' },
  ]

  return (
    <div className={styles.Choices}>
      <h2 className={styles.SignupStepTitle}>
        Tu souhaites rencontrer des ... ?
      </h2>

      <div className={styles.ChoicesOptions}>
        {preferences.map((preference, i) => (
          <Fragment key={i}>
            <button
              type="button"
              className={`${styles.ChoicesInput} ${data.preference === preference.value
                ? styles.ChoicesInputSelected
                : ''
                }`}
              onClick={() => handleChange(preference.value, 'preference')}
            >
              {preference.value}
            </button>
          </Fragment>
        ))}
      </div>
    </div>
  )
}
