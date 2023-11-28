import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { regular, solid } from '@fortawesome/fontawesome-svg-core/import.macro'

const TripCarousel: React.FC = () => {
  const images = Array.from(
    { length: 3 },
    (_, index) => `./assets/trip-carousel/image${index}.svg`,
  )
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToNextSlide = (): void => {
    const newIndex = (currentIndex + 1) % images.length
    setCurrentIndex(newIndex)
  }

  const goToPrevSlide = (): void => {
    const newIndex = (currentIndex - 1 + images.length) % images.length
    setCurrentIndex(newIndex)
  }

  return (
    <div className="flex items-center justify-center gap-[50px]">
      <div>
        <button
          className="carousel-control text-gray-300 hover:text-gray-700"
          onClick={goToPrevSlide}
        >
          <FontAwesomeIcon icon={solid('circle-chevron-left')} size="xl" />
        </button>
      </div>
      <div className="flex items-center justify-center gap-[30px]">
        {images.map((image, index) => (
          <div key={index}>
            <div
              className="h-[250px] w-[300px]"
              style={{ backgroundImage: `url(${image})` }}
            >
              <div className="flex flex-col items-start gap-[px] relative top-[190px] left-[30px]">
                <div className=" bg-[#F3533D] inline-block p-[2px] px-[6px] text-sm text-white text-left">
                  Honeymoon Specials
                </div>
                <div className=" bg-white inline-block text-gray-700 text-left text-xs p-[2px] px-[6px]">
                  1000 packages
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <button
          className="carousel-control text-gray-300 hover:text-gray-700"
          onClick={goToNextSlide}
        >
          <FontAwesomeIcon icon={solid('circle-chevron-right')} size="xl" />
        </button>
      </div>
    </div>
  )
}

export default TripCarousel
