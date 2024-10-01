import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import SimbaSafaris from '../../assets/TopTourOperators/SimbaSafaris.jpeg'
import NdovuSafaris from '../../assets/TopTourOperators/NdovuSafaris.jpeg'
import ChatuSafaris from '../../assets/TopTourOperators/ChatuSafaris.jpeg'
import TwigaSafaris from '../../assets/TopTourOperators/TwigaSafaris.jpeg'
import emptyLogo from '../../assets/blank-profile.svg'

interface TourOperator {
  name: string
  position: number
  logo: string
  backgroundImage: string
  rating: number
}

const TopTourOperators: React.FC = (): JSX.Element => {
  const tourOperators: TourOperator[] = [
    {
      name: 'Simba Safaris',
      position: 1,
      logo: emptyLogo,
      backgroundImage: SimbaSafaris,
      rating: 4,
    },
    {
      name: 'Chatu Safaris',
      position: 2,
      logo: emptyLogo,
      backgroundImage: ChatuSafaris,
      rating: 4,
    },
    {
      name: 'Ndovu Safaris',
      position: 3,
      logo: emptyLogo,
      backgroundImage: NdovuSafaris,
      rating: 4,
    },
    {
      name: 'Twiga Safaris',
      position: 4,
      logo: emptyLogo,
      backgroundImage: TwigaSafaris,
      rating: 4,
    },
  ]

  const [currentIndex, setCurrentIndex] = useState<number>(0)

  const handleNextSlide = (): void => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + tourOperators.length) % tourOperators.length,
    )
  }

  const handlePrevSlide = (): void => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % tourOperators.length)
  }

  const visibleOperators = tourOperators
    .slice(currentIndex, currentIndex + 4)
    .concat(
      currentIndex + 4 > tourOperators.length
        ? tourOperators.slice(0, (currentIndex + 4) % tourOperators.length)
        : [],
    )

  return (
    <div>
      {/* Title */}
      <div className="text-[25px] text-gray-900 text-center">
        Top Rated Tour Operators
      </div>

      <div className="flex items-center justify-center gap-[50px] my-[3rem] mx-[3rem]">
        {/* Left Carousel Button */}
        <div>
          <button
            className="carousel-control text-gray-300 hover:text-gray-700"
            onClick={handlePrevSlide}
          >
            <FontAwesomeIcon icon={solid('circle-chevron-left')} size="xl" />
          </button>
        </div>

        {/* Top Tour Operators Carousel */}
        <div className="flex justify-center items-center overflow-hidden space-x-10">
          {visibleOperators.map((tourOperator, index) => (
            <div key={index} className="bg-white p-4 relative">
              <div className="bg-yellow-500 absolute top-6 -right-0 text-xs font-semibold px-2 py-1">
                #0{tourOperator.position}
              </div>
              <img src={tourOperator.backgroundImage} alt="Tour Operator"></img>
              <div className="py-5 relative bg-white flex justify-center items-center border-l-2 border-r-2 border-b-2">
                <img src={tourOperator.logo}></img>
              </div>
              <div className="my-3">
                <p>{tourOperator.name}</p>
                {Array.from({ length: tourOperator.rating }, (_, index) => (
                  <FontAwesomeIcon
                    key={index}
                    icon={solid('star')}
                    size="sm"
                    className="star-color text-[#F3533D]"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Right Carousel Button */}
        <div>
          <button
            className="carousel-control text-gray-300 hover:text-gray-700"
            onClick={handleNextSlide}
          >
            <FontAwesomeIcon icon={solid('circle-chevron-right')} size="xl" />
          </button>
        </div>
      </div>
      <div className="flex justify-center my-[35px] pb-[40px]">
        <button className="w-[170px] h-[40px] bg-[#F3533D] rounded-[3px] text-white">
          View All Operators
        </button>
      </div>
    </div>
  )
}

export default TopTourOperators
