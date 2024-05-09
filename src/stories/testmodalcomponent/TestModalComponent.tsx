import React from 'react'
import Modal from './Modal'
import { useModalContext } from 'src/context/ModalContext'

// const openModal: React.FC = () => {}

const TestModalComponent: React.FC = () => {
  const { isModalOpen, openModal, closeModal } = useModalContext()
  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      {isModalOpen && (
        <Modal isOpen={false} onClose={closeModal}>
          <h2>This is the modal</h2>
          <p>This is some modal content</p>
        </Modal>
      )}
    </div>
  )
}

export default TestModalComponent
