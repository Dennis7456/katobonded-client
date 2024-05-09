import React from 'react'
import './Modals.css'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children?: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const handleClose = (): void => {
    onClose()
  }
  // if (!isOpen){
  //     return null
  // }

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={handleClose}>
          &times;
        </span>
      </div>
    </div>
  )
}

export default Modal
