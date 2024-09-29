import React, { createContext, useContext, useState } from 'react'

interface BotModalContextType {
  isModalOpen: boolean
  openModal: () => void
  closeModal: () => void
}

const LoginModalContext = createContext<BotModalContextType | undefined>(
  undefined,
)

export const useLoginModalContext = (): BotModalContextType => {
  const context = useContext(LoginModalContext)
  if (context === undefined) {
    throw new Error(
      'useLoginModalContext must be used within a LoginModalProvider',
    )
  }
  return context
}

interface ModalProviderProps {
  children: React.ReactNode
}

export const LoginModalProvider: React.FC<ModalProviderProps> = ({
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
    <LoginModalContext.Provider value={value}>
      {children}
    </LoginModalContext.Provider>
  )
}
