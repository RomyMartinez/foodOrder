import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

export function Modal({ children, open, onClose }) {
  const modal = useRef()
  useEffect(() => {
    if (open) {
      modal.current.showModal()
    } else {
      modal.current.close()
    }
  }, [open])

  return createPortal(
    <dialog ref={modal} onClose={onClose} className="modal">
      {children}
    </dialog>,
    document.getElementById('modal')
  )
}
