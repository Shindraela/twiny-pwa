import { Modal } from '../../components/Modal'
import styles from './Modal.module.scss'
import hand_wave from '/img/hand_wave.png'

type FinishModalPropsType = {
  isOpen: boolean
  onConfirm: () => void
  onClose: () => void
}

export const FinishModal = ({
  isOpen,
  onConfirm,
  onClose,
}: FinishModalPropsType) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className={styles.FinishModalContent}>
        <img src={hand_wave} alt="" className={styles.FinishModalImage} />
        <h4 className={styles.FinishModalTitle}>C'est fini !</h4>
        <p className={styles.FinishModalMessage}>
          Bravo tu as fini de compléter ton profil, tu peux maintenant commencer à chatter et tisser de nouvelles amitiés !
        </p>

        <div className={styles.FinishModalButtons}>
          <button onClick={onConfirm}>C'est parti !</button>
        </div>
      </div>
    </Modal>
  )
}
