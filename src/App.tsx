import React from 'react'
import Header from './stories/Header/Header'
import CreateYourTrip from './stories/CreateYourTrip/CreateYourTrip'
import TripCarousel from './stories/TripCarrousel/TripCarousel'
import './App.css'
import TestModalComponent from './stories/testmodalcomponent/TestModalComponent'
import { useBotModalContext } from './context/BotModalContext'
import { useLoginModalContext } from './context/LoginModalContext'

const App: React.FC = () => {
  const {
    isModalOpen: isBotModalOpen,
    openModal: openBotModal,
    closeModal: closeBotModal,
  } = useBotModalContext()
  const {
    isModalOpen: isLoginModalOpen,
    openModal: openLoginModal,
    closeModal: closeLoginModal,
  } = useLoginModalContext()

  return (
    <div className={isBotModalOpen || isLoginModalOpen ? 'fixed' : ''}>
      <Header />
      <CreateYourTrip />
      <TripCarousel />
    </div>
  )
}

export default App
