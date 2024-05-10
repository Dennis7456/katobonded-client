import React from 'react'
import Modal from './Modal'
import { useBotModalContext } from 'src/context/BotModalContext'

// const openModal: React.FC = () => {}

const TestModalComponent: React.FC = () => {
  const { isModalOpen, openModal, closeModal } = useBotModalContext()
  return (
    <div>
      <button onClick={openModal} className="px-[10px] bg-info">
        Open Modal
      </button>
      {isModalOpen && <Modal isOpen={isModalOpen} onClose={closeModal}></Modal>}
    </div>
  )
}

export default TestModalComponent
