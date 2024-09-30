import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SafariCard from '../SafariCard/SafariCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import Diani from '../../assets/TopDestinations/Diani.jpeg'
import Lamu from '../../assets/TopDestinations/Lamu.jpeg'
import Kisumu from '../../assets/TopDestinations/Kisumu.jpeg'
import Mombasa from '../../assets/TopDestinations/Mombasa.jpeg'
import Amboseli from '../../assets/TopDestinations/Amboseli.jpeg'
import Malindi from '../../assets/TopDestinations/Malindi.jpeg'
import MaasaiMara from '../../assets/TopDestinations/MaasaiMara.jpeg'
import Kilimanjaro from '../../assets/TopDestinations/Kilimanjaro.jpeg'
import Nairobi from '../../assets/TopDestinations/Nairobi.jpeg'
import Samburu from '../../assets/TopDestinations/Samburu.jpeg'
import emptyImage from '../../assets/blank-profile.svg'

interface DestinationInfo {
  name: string
  image: string
}

interface CountryDestinations {
  country: string
  destinations: DestinationInfo[]
}

const countryData: CountryDestinations[] = [
  {
    country: 'Kenya',
    destinations: [
      { name: 'Diani', image: Diani },
      { name: 'Lamu', image: Lamu },
      { name: 'Kisumu', image: Kisumu },
      { name: 'Mombasa', image: Mombasa },
      { name: 'Amboseli', image: Amboseli },
      { name: 'Malindi', image: Malindi },
      { name: 'Masai Mara', image: MaasaiMara },
      { name: 'Kilimanjaro', image: Kilimanjaro },
      { name: 'Nairobi', image: Nairobi },
      { name: 'Samburu', image: Samburu },
    ],
  },
  {
    country: 'Uganda',
    destinations: [
      { name: 'Kampala', image: emptyImage },
      { name: 'Jinja', image: emptyImage },
    ],
  },
  {
    country: 'Tanzania',
    destinations: [
      { name: 'Dar es Salaam', image: emptyImage },
      { name: 'Zanzibar', image: emptyImage },
    ],
  },
  {
    country: 'Rwanda',
    destinations: [
      { name: 'Kigali', image: emptyImage },
      { name: 'Volcanoes National Park', image: emptyImage },
    ],
  },
]

const TopDestinations: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState('Kenya')

  return (
    <div className="my-[6rem]">
      {/* Title */}
      <div className="text-[25px] text-gray-900 text-center">
        Top Destinations
      </div>

      {/* Country Tabs */}
      <div className="flex items-center justify-center gap-[20px] my-[35px]">
        {countryData.map((country, index) => (
          <div
            key={index}
            className={`${
              selectedCountry === country.country
                ? 'bg-gray-900 text-white hover:bg-gray-900'
                : 'text-gray-900'
            } text-center cursor-pointer hover:bg-gray-500 hover:text-white rounded-full px-[25px] py-[3px]`}
            onClick={() => {
              setSelectedCountry(country.country)
            }}
          >
            {country.country}
          </div>
        ))}
      </div>

      {/* Destinations and Images */}
      <div className="grid grid-cols-5 gap-4 mt-[25px] mx-[6rem]">
        {countryData
          .find((country) => country.country === selectedCountry)
          ?.destinations.map((destination, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-sm overflow-hidden transform transition hover:scale-105"
            >
              <img
                src={destination.image}
                alt={destination.name}
                className="w-full h-48 object-cover"
              ></img>
              <div className="p-4 text-center">
                <p className="text-xs font-semibold">{destination.name}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default TopDestinations
