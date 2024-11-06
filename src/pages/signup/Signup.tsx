import { useCallback, useEffect, useState } from 'react'
import { useTransition, animated } from '@react-spring/web'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'

import { ConfirmModal } from './ConfirmModal'
import { Privacy } from './Privacy'
import { Rules } from './Rules'
import { Firstname } from './Settings/Firstname'
import { ProfilePicture } from './Settings/ProfilePicture'
import { Birthdate } from './Settings/Birthdate'
import { Gender } from './Settings/Gender'

import styles from './Signup.module.scss'
import back_arrow from '/img/back_arrow.svg'

export const Signup = () => {
  const navigate = useNavigate()
  const { activeTab, setActiveTab } = useAuth()
  const [isNextButtonDisabled, setIsNextButtonDisabled] =
    useState<boolean>(false)
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState<boolean>(false)
  const [infoText, setInfoText] = useState<{
    text: string
    showCheckbox: boolean
  }>({ text: '', showCheckbox: false })
  const [data, setData] = useState({
    name: '',
    picture: null as File | null,
    gender: '',
    showGender: false,
    birthdate: '',
    preferences: '',
  })
  const [isGenderVisible, setIsGenderVisible] = useState<boolean>(false)

  const transitions = useTransition(activeTab, {
    key: activeTab,
    initial: { opacity: 1 },
    from: {
      opacity: 0,
      transform: 'translate3d(100%, 0, 0)',
    },
    enter: {
      opacity: 1,
      transform: 'translate3d(0%, 0, 0)',
    },
    leave: {
      opacity: 0,
      transform: 'translate3d(-50%, 0, 0)',
    },
    exitBeforeEnter: true,
  })

  const updateInfoText = (text: string, showCheckbox: boolean = false) => {
    setInfoText({ text, showCheckbox })
  }

  const handleChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.MouseEvent<HTMLInputElement>
      | string
  ) => {
    if (typeof event === 'string') {
      // Gender change
      setData((prevData) => ({
        ...prevData,
        gender: event,
      }))
    } else {
      const target = event.target as HTMLInputElement
      const value = target.type === 'checkbox' ? target.checked : target.value
      const name = target.name

      setData((prevData) => ({
        ...prevData,
        [name]: value,
      }))

      // If it's checkbox from gender step, update infoText
      if (name === 'showGender') {
        updateInfoText(infoText.text, value as boolean)
      }
    }
  }

  const handleFileChange = (file: File | null) => {
    setData((prevData) => ({
      ...prevData,
      picture: file,
    }))
  }

  const handleBirthdateChange = (birthdate: string) => {
    setData((prevData) => ({
      ...prevData,
      birthdate,
    }))
  }

  const handleCheckboxChange = (checked: boolean) => setIsGenderVisible(checked)

  const currentNextButtonText =
    activeTab === 0 ? 'Je consens' : activeTab === 1 ? "J'accepte" : 'Suivant'

  const formElements = [
    <Privacy />,
    <Rules />,
    <Firstname data={data} handleChange={handleChange} />,
    <ProfilePicture data={data} handleFileChange={handleFileChange} />,
    <Birthdate data={data} handleBirthdateChange={handleBirthdateChange} />,
    <Gender data={data} handleChange={handleChange} />,
  ]

  const updateNextButtonState = useCallback(() => {
    switch (activeTab) {
      case 0: // Privacy
      case 1: // Rules
        setIsNextButtonDisabled(false)
        break
      case 2: // Firstname
        setIsNextButtonDisabled(data.name.trim() === '')
        break
      case 3: // Profile
        updateInfoText('Tu pourras la changer plus tard dans ton profil')
        setIsNextButtonDisabled(!data.picture)
        break
      case 4: // Birthdate
        setIsNextButtonDisabled(data.birthdate.length !== 8)
        break
      case 5: // Gender
        updateInfoText('Afficher mon sexe sur le profil', true)
        setIsNextButtonDisabled(!data.gender)
        break
      case 6: // WantToMeet
        setIsNextButtonDisabled(!data.preferences)
        break
      default:
        setIsNextButtonDisabled(false)
        break
    }
  }, [activeTab, data])

  const handleNextButtonClick = () => {
    if (activeTab === 2) {
      setIsConfirmModalOpen(true)
    } else {
      setActiveTab(activeTab + 1)
    }
  }

  const handleConfirm = () => {
    setIsConfirmModalOpen(false)
    setActiveTab(activeTab + 1)
  }

  const handleCancel = () => {
    setIsConfirmModalOpen(false)
  }

  const goBack = () =>
    activeTab === 0
      ? navigate('/', { replace: true })
      : setActiveTab(activeTab - 1)

  useEffect(() => {
    updateNextButtonState()
  }, [updateNextButtonState, activeTab, data, isNextButtonDisabled])

  useEffect(() => {
    setData((prevData) => ({
      ...prevData,
      showGender: isGenderVisible,
    }))
  }, [isGenderVisible])

  useEffect(() => {
    if (activeTab === 4 || activeTab === 6) {
      updateInfoText('', false)
    }
  }, [activeTab])

  return (
    <div className={styles.Signup}>
      <div className={styles.SignupContent}>
        <img
          className={styles.SignupButtonBackIcon}
          src={back_arrow}
          alt="Bouton de retour"
          width={24}
          height={24}
          onClick={goBack}
        />

        {transitions((style, item) => (
          <animated.div style={style} className={styles.SignupStep}>
            {formElements[item]}
          </animated.div>
        ))}

        <p className={styles.SignupStepInfo}>
          {infoText.showCheckbox && (
            <input
              type="checkbox"
              name="showGender"
              checked={isGenderVisible}
              onChange={(e) => handleCheckboxChange(e.target.checked)}
            />
          )}
          {infoText.text}
        </p>

        <button
          disabled={isNextButtonDisabled}
          onClick={handleNextButtonClick}
          className={`${styles.SignupButtonNext}`}
        >
          {currentNextButtonText}
        </button>

        <ConfirmModal
          username={data.name}
          isOpen={isConfirmModalOpen}
          onConfirm={handleConfirm}
          onClose={handleCancel}
        />
      </div>
    </div>
  )
}
