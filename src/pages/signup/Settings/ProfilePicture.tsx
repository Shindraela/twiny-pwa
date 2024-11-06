import { useRef, useState } from 'react'
import styles from '../Signup.module.scss'
import add_picture from '/img/add_picture.svg'

interface ProfilePictureProps {
  data: {
    picture: File | null
  }
  handleFileChange: (file: File | null) => void
}

export const ProfilePicture = ({
  data,
  handleFileChange,
}: ProfilePictureProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string)
      }

      reader.readAsDataURL(file)
      handleFileChange(file)
    } else {
      setPreviewUrl(null)
      handleFileChange(null)
    }
  }

  const handleClick = () => {
    fileInputRef.current?.click()
  }

  return (
    <div className={styles.ProfilePicture}>
      <h2 className={styles.SignupStepTitle}>Choisis une photo de profil</h2>
      <p className={styles.SignupStepSubtitle}>
        Elle sera visible par tout le monde alors choisis une photo récente, sur
        laquelle on pourra clairement te voir.
      </p>

      <div
        className={styles.ProfilePictureUploadContainer}
        onClick={handleClick}
      >
        {previewUrl ? (
          <img
            src={previewUrl}
            alt="Preview"
            className={styles.ProfilePicturePreview}
          />
        ) : (
          <img src={add_picture} alt="" />
        )}
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleChange}
        style={{ display: 'none' }}
      />
    </div>
  )
}
