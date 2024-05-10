import React from 'react'
import './Modal.css'

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
    <div className="">
      <div className="modal-content">
        <div className="flex">
          Some text
          <span
            className="close bg-red-500 text-white text-5xl rounded-[35px]"
            onClick={handleClose}
          >
            &times;
          </span>
        </div>
      </div>
    </div>
  )
}

export default Modal
