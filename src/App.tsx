import React from 'react'
import Header from './stories/Header/Header'
import CreateYourTrip from './stories/CreateYourTrip/CreateYourTrip'
import TripCarousel from './stories/TripCarrousel/TripCarousel'
import './App.css'
import { ChatBot } from './stories/ChatBot/ChatBot'

const App: React.FC = () => {
  return (
    <div className="container">
      <Header />
      <CreateYourTrip />
      <ChatBot />
      <TripCarousel />
    </div>
  )
}

export default App
