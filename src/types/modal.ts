import type { SyntheticEvent } from 'react'

export type ModalType =
  | 'default'
  | 'alert'
  | 'sidepanel'
  | 'tray'
  | 'notification'
  | 'fullscreen'

export type ModalWidth = 'small' | 'medium' | 'large' | 'full'

export type Breakpoint = 'default' | 'medium' | 'large'
export type ResponsiveProps<T> = {
  [key in Breakpoint]?: T
}

export type ValueOrResponsive<T> = T | ResponsiveProps<T>

export type ModalProps = {
  /**
   * Whether the modal is open or not
   */
  isOpen?: boolean
  /**
   * Close callback
   */
  onClose?: (e?: SyntheticEvent | Event) => void
}
