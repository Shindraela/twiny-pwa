import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import styles from './Modal.module.scss'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  const [modalRoot, setModalRoot] = useState<HTMLElement | null>(null)

  useEffect(() => {
    // Check if an element with the ID 'modal-root' already exists
    let root = document.getElementById('modal-root')

    if (!root) {
      // Create the element only if it doesn't exist
      root = document.createElement('div')
      root.setAttribute('id', 'modal-root')
      document.body.appendChild(root)
    }

    setModalRoot(root)

    // Cleanup: don't remove the element, as it could be used by other modals
    return () => {
      // Optional: remove the element if it's empty after closing the modal
      if (root && root.childNodes.length === 0) {
        document.body.removeChild(root)
      }
    }
  }, [])

  if (!isOpen || !modalRoot) return null

  return createPortal(
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        {children}
        {/* <button onClick={onClose}>Fermer</button> */}
      </div>
    </div>,
    modalRoot
  )
}
