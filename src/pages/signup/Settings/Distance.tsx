import { useState } from 'react'
import styles from '../Signup.module.scss'

interface DistanceProps {
  data: {
    distance: string
  }
  handleChange: (value: string, name: string) => void
}

export const Distance = ({ data, handleChange }: DistanceProps) => {
  const [currentDistance, setCurrentDistance] = useState<string>(data.distance || '50')

  const handleDistanceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value).toString()
    setCurrentDistance(value)
    handleChange(value, 'distance')
  }

  return (
    <div className={styles.Choices}>
      <h2 className={styles.SignupStepTitle}>
        Tes préférences en matière de distance ?
      </h2>
      <p className={styles.SignupStepSubtitle}>
        Utilise le curseur pour définir la distance maximale à laquelle tu souhaites que tes matchs potentiels soient situés.
      </p>

      <label className={styles.ChoicesLabel}>
        <span>Distance</span>
        <span>{currentDistance} km</span>
      </label>

      <input
        type="range"
        min="0"
        max="100"
        step="1"
        value={currentDistance}
        onChange={handleDistanceChange}
        className={styles.CustomSlider}
        style={{ '--progress': `${Math.round(((parseInt(currentDistance) - 0) / (100 - 0)) * 100)}%` } as React.CSSProperties}
      />
    </div>
  )
}
