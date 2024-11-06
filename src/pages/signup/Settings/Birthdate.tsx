import React, { useRef, useState } from 'react'
import styles from '../Signup.module.scss'

interface BirthdateProps {
  data: {
    birthdate: string
  }
  handleBirthdateChange: (birthdate: string) => void
}

type InputType = {
  name: string
  value: string
  placeholder: string
}

export const Birthdate = ({ data, handleBirthdateChange }: BirthdateProps) => {
  const [inputs, setInputs] = useState<InputType[]>([
    { name: 'birthdate_day1', value: '', placeholder: 'J' },
    { name: 'birthdate_day2', value: '', placeholder: 'J' },
    { name: 'birthdate_month1', value: '', placeholder: 'M' },
    { name: 'birthdate_month2', value: '', placeholder: 'M' },
    { name: 'birthdate_year1', value: '', placeholder: 'A' },
    { name: 'birthdate_year2', value: '', placeholder: 'A' },
    { name: 'birthdate_year3', value: '', placeholder: 'A' },
    { name: 'birthdate_year4', value: '', placeholder: 'A' },
  ])
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target

    // Exclude non-numeric characters
    const numericValue = value.replace(/[^0-9]/g, '')

    const newInputs = inputs.map((input) =>
      input.name === name
        ? { ...input, value: numericValue.slice(0, 1) }
        : input
    )
    setInputs(newInputs)

    const newBirthdate = newInputs.map((input) => input.value).join('')
    handleBirthdateChange(newBirthdate)

    // Move focus to next input
    const currentIndex = inputs.findIndex((input) => input.name === name)
    if (currentIndex < inputs.length - 1 && numericValue !== '') {
      inputRefs.current[currentIndex + 1]?.focus()
    }
  }

  return (
    <div className={styles.Birthdate}>
      <h2 className={styles.SignupStepTitle}>
        Quelle est ta date de naissance ?
      </h2>

      <div className={styles.BirthdateDigits}>
        {inputs.map((item, i) => (
          <React.Fragment key={i}>
            <input
              type="text"
              className={styles.BirthdateInput}
              placeholder={item.placeholder}
              name={item.name}
              value={item.value}
              onChange={handleChange}
              ref={(el) => (inputRefs.current[i] = el)}
              maxLength={1}
            />

            {(i === 1 || i === 3) && (
              <span className={styles.BirthdateSeparator}>/</span>
            )}
          </React.Fragment>
        ))}
      </div>

      <p className={styles.SignupStepText}>
        Ton âge apparaîtra sur ton profil mais pas ta date de naissance.
      </p>
    </div>
  )
}
