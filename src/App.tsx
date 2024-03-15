import React from 'react'
import Header from './stories/Header/Header'
import CreateYourTrip from './stories/CreateYourTrip/CreateYourTrip'
import TripCarousel from './stories/TripCarrousel/TripCarousel'
import './App.css'

const App: React.FC = () => {
  return (
    <div className="container">
      <Header />
      <CreateYourTrip />
      <TripCarousel />
    </div>
  )
}

export default App
