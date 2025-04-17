import { Modal } from '../../components/Modal'
import styles from './Modal.module.scss'
import hand_wave from '/img/hand_wave.png'

type ConfirmModalPropsType = {
  username: string
  isOpen: boolean
  onConfirm: () => void
  onClose: () => void
}

export const ConfirmModal = ({
  username,
  isOpen,
  onConfirm,
  onClose,
}: ConfirmModalPropsType) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className={styles.ConfirmModalContent}>
        <img src={hand_wave} alt="" className={styles.ConfirmModalImage} />
        <h4 className={styles.ConfirmModalTitle}>Bienvenue {username} !</h4>
        <p className={styles.ConfirmModalMessage}>
          Il y a plein de choses à découvrir mais commençons d’abord par
          configurer ton profil.
        </p>

        <div className={styles.ConfirmModalButtons}>
          <button onClick={onConfirm}>C'est parti !</button>
          <button onClick={onClose}>Modifier mon prénom</button>
        </div>
      </div>
    </Modal>
  )
}
