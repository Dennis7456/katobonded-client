import React from 'react'
import Header from './stories/Header/Header'
import CreateYourTrip from './stories/CreateYourTrip/CreateYourTrip'
import TripCarousel from './stories/TripCarrousel/TripCarousel'
import './App.css'

const App: React.FC = () => {
  return (
    <div className="">
      <Header />
      <CreateYourTrip />
      {/* <ChatBot /> */}
    </div>
  )
}

export default App
