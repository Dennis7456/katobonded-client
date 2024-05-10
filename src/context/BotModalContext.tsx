import React, { createContext, useContext, useState } from 'react'

interface BotModalContextType {
  isModalOpen: boolean
  openModal: () => void
  closeModal: () => void
}

const BotModalContext = createContext<BotModalContextType | undefined>(
  undefined,
)

export const useBotModalContext = (): BotModalContextType => {
  const context = useContext(BotModalContext)
  if (context === undefined) {
    throw new Error('useModalContext must be used within a ModalProvider')
  }
  return context
}

interface ModalProviderProps {
  children: React.ReactNode
}

export const BotModalProvider: React.FC<ModalProviderProps> = ({
  children,
}): JSX.Element => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  const openModal = (): void => {
    setIsModalOpen(true)
  }
  const closeModal = (): void => {
    setIsModalOpen(false)
  }

  const value: BotModalContextType = {
    isModalOpen,
    openModal,
    closeModal,
  }

  return (
    <BotModalContext.Provider value={value}>
      {children}
    </BotModalContext.Provider>
  )
}
