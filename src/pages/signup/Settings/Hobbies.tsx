import { Fragment } from 'react'
import styles from '../Signup.module.scss'

interface GenderProps {
  data: {
    hobbies: string[]
  }
  handleChange: (value: string | string[], name: string) => void
}

type HobbyType = {
  id: number
  value: string
  placeholder: string
}

export const Hobbies = ({ data, handleChange }: GenderProps) => {
  // TODO: change later with API data
  const hobbies: HobbyType[] = [
    { id: 0, value: 'Dessin', placeholder: 'dessin' },
    { id: 1, value: 'Musique', placeholder: 'musique' },
    { id: 2, value: 'Ecriture', placeholder: 'ecriture' },
    { id: 3, value: 'Danse', placeholder: 'danse' },
    { id: 4, value: 'K-pop', placeholder: 'kpop' },
    { id: 5, value: 'Roman', placeholder: 'roman' },
    { id: 6, value: 'Boxe', placeholder: 'boxe' },
    { id: 7, value: 'J-pop', placeholder: 'jpop' },
    { id: 8, value: 'Course à pieds', placeholder: 'course' },
    { id: 9, value: 'Marvel', placeholder: 'marvel' },
    { id: 10, value: 'Peinture', placeholder: 'peinture' },
    { id: 11, value: 'Hip-Hop', placeholder: 'hiphop' },
    { id: 12, value: 'Jazz', placeholder: 'jazz' },
    { id: 13, value: 'Rap', placeholder: 'rap' },
    { id: 14, value: 'Horreur', placeholder: 'horreur' },
    { id: 15, value: 'BD', placeholder: 'bd' },
    { id: 16, value: 'Yoga', placeholder: 'yoga' },
    { id: 17, value: 'Animé', placeholder: 'anime' },
    { id: 18, value: 'Gospel', placeholder: 'gospel' },
    { id: 19, value: 'Le seigneur des anneaux', placeholder: 'seigneur' },
    { id: 20, value: 'Musculation', placeholder: 'musculation' },
    { id: 21, value: 'RnB', placeholder: 'rnb' },
    { id: 22, value: 'Fitness', placeholder: 'fitness' },
    { id: 23, value: 'Crossfit', placeholder: 'crossfit' },
    { id: 24, value: 'Piano', placeholder: 'piano' },
    { id: 25, value: 'Electro', placeholder: 'electro' },
    { id: 26, value: 'Poterie', placeholder: 'poterie' },
    { id: 27, value: 'DC Comics', placeholder: 'poterie' },
    { id: 28, value: 'Variété FR', placeholder: 'variete' },
    { id: 29, value: 'Fantastique', placeholder: 'fantastique' },
    { id: 30, value: 'Animaux', placeholder: 'animaux' },
    { id: 31, value: 'Marcher', placeholder: 'marcher' },
    { id: 32, value: 'Mode', placeholder: 'mode' },
    { id: 33, value: 'Reggaeton', placeholder: 'reggaeton' },
    { id: 34, value: 'Harry Potter', placeholder: 'harry_potter' },
    { id: 35, value: 'Comics', placeholder: 'comics' },
    { id: 36, value: 'Méditation', placeholder: 'meditation' },
    { id: 37, value: 'Romance', placeholder: 'romance' },
    { id: 38, value: 'Pop', placeholder: 'pop' },
    { id: 39, value: 'Funk', placeholder: 'funk' },
    { id: 40, value: 'Burger', placeholder: 'burger' },
    { id: 41, value: 'Manga', placeholder: 'manga' },
    { id: 42, value: 'Skincare', placeholder: 'skincare' },
    { id: 43, value: 'Photographie', placeholder: 'photographie' },
    { id: 44, value: 'Lecture', placeholder: 'lecture' },
    { id: 45, value: 'Policier', placeholder: 'policier' },
  ]

  const handleSelectedHobbies = (hobby: HobbyType) => {
    const isSelected = data.hobbies.includes(hobby.value)
    const updatedHobbies = isSelected
      ? data.hobbies.filter((h) => h !== hobby.value)
      : [...data.hobbies, hobby.value]

    handleChange(updatedHobbies, 'hobbies')
  }

  return (
    <div className={styles.Choices}>
      <h2 className={styles.SignupStepTitle}>Dis nous en plus sur ce que tu aimes ?</h2>
      <p className={styles.SignupStepSubtitle}>
        Sélectionne tout ce que tu aimes.
      </p>

      <div className={styles.HobbiesList}>
        {hobbies.map((hobby, i) => (
          <Fragment key={i}>
            <span
              className={`${styles.HobbiesTag} ${data.hobbies.includes(hobby.value) ? styles.HobbiesTagSelected : ''}`}
              onClick={() => handleSelectedHobbies(hobby)}
            >
              {hobby.value}
            </span>
          </Fragment>
        ))}
      </div>
    </div>
  )
}
