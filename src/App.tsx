import React from 'react'
import Header from './stories/Header/Header'
import CreateYourTrip from './stories/CreateYourTrip/CreateYourTrip'
import TripCarousel from './stories/TripCarrousel/TripCarousel'
import './App.css'
import TestModalComponent from './stories/testmodalcomponent/TestModalComponent'
import { useBotModalContext } from './context/BotModalContext'
import { useLoginModalContext } from './context/LoginModalContext'
import TopTours from './components/TopTours/TopTours'
import SafariCard from './components/SafariCard/SafariCard'
import image from './assets/elephant-img.jpeg'
import { ChatBotModal } from './stories/ChatBotModal/ChatBotModal'

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
      <ChatBotModal />
      <Header />
      <CreateYourTrip />
      <TripCarousel />
      <TopTours />
    </div>
  )
}

export default App
