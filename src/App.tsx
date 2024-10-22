import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './stories/Header/Header'
import CreateYourTrip from './stories/CreateYourTrip/CreateYourTrip'
import TripCarousel from './stories/TripCarrousel/TripCarousel'
import './App.css'
import TestModalComponent from './stories/testmodalcomponent/TestModalComponent'
import { useBotModalContext } from './context/BotModalContext'
import {
  LoginModalProvider,
  useLoginModalContext,
} from './context/LoginModalContext'
import TopTours from './components/TopTours/TopTours'
import SafariCard from './components/SafariCard/SafariCard'
import image from './assets/elephant-img.jpeg'
import { ChatBotModal } from './stories/ChatBotModal/ChatBotModal'
import TopDestinations from './components/TopDestinations/TopDestinations'
import TopTourOperators from './components/TopTourOperators/TopTourOperators'
import Footer from './components/Footer/Footer'
import SafarisAndTours from './components/SafarisAndTours/SafarisAndTours'
import { BookTrip } from './stories/BookTrip/BookTrip'
import HomePage from './pages/HomePage'
import ViewCard from './components/ViewCard/ViewCard'
import TourOperatorDetails from './components/TourOperatorDetails/TourOperatorDetails'
import TourOperatorDetailsView from './components/TourOperatorDetailsView/TourOperatorDetailsView'
import GetAFreeQuote from './components/GetAFreeQuote/GetAFreeQuote'
import MyPackages from './components/MyPackages/MyPackages'
import MyPackageDetails from './components/MyPackageDetails/MyPackageDetails'

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
      <div>
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/build-your-package" element={<BookTrip />}></Route>
        <Route path="/safaris-and-tours" element={<SafarisAndTours />}></Route>
        <Route path="/view-card-details" element={<ViewCard />}></Route>
        <Route
          path="/view-tour-operator-details"
          element={<TourOperatorDetails />}
        ></Route>
        <Route
          path="/view-tour-operator-details-1"
          element={<TourOperatorDetailsView />}
        ></Route>
        <Route path="/get-a-free-quote" element={<GetAFreeQuote />}></Route>
        <Route path="/my-packages" element={<MyPackages />}></Route>
        <Route
          path="/my-package-details"
          element={<MyPackageDetails />}
        ></Route>
      </Routes>
    </div>
  )
}

export default App
