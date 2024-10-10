import React from 'react'
import Header from 'src/stories/Header/Header'
import CreateYourTrip from 'src/stories/CreateYourTrip/CreateYourTrip'
import { ChatBotModal } from 'src/stories/ChatBotModal/ChatBotModal'
import TripCarousel from 'src/stories/TripCarrousel/TripCarousel'
import TopTours from 'src/components/TopTours/TopTours'
import TopDestinations from 'src/components/TopDestinations/TopDestinations'
import TopTourOperators from 'src/components/TopTourOperators/TopTourOperators'
import Footer from 'src/components/Footer/Footer'

const HomePage: React.FC = () => {
  return (
    <div>
      {/* <ChatBotModal /> */}
      <Header />
      {/* <CreateYourTrip />
      <TripCarousel />
      <TopTours />
      <TopDestinations />
      <TopTourOperators />
      <Footer /> */}
    </div>
  )
}

export default HomePage
