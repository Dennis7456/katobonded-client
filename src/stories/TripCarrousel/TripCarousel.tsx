import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

const TripCarousel: React.FC = (): JSX.Element => {
  const images: string[] = Array.from(
    { length: 3 },
    (_, index) => `./assets/trip-carousel/image${index}.svg`,
  )

  const [currentIndex, setCurrentIndex] = useState<number>(0)

  const handleNextSlide = (): void => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length,
    )
  }

  const handlePrevSlide = (): void => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  return (
    <div className="flex items-center justify-center gap-4 sm:gap-6 lg:gap-12 my-16 sm:my-20 lg:my-24">
      {/* Previous Button */}
      <div className="ml-[35px]">
        <button
          className="carousel-control text-gray-300 hover:text-gray-700"
          onClick={handlePrevSlide}
        >
          <FontAwesomeIcon icon={solid('circle-chevron-left')} size="2xl" />
        </button>
      </div>

      {/* Carousel Images */}
      <div className="flex overflow-hidden space-x-6 sm:space-x-8 lg:space-x-10">
        {/* Left Image */}
        <div
          className="h-[200px] w-[180px] sm:h-[200px] sm:w-[240px] lg:h-[250px] lg:w-[300px] bg-cover bg-center"
          style={{
            backgroundImage: `url(${
              images[(currentIndex - 1 + images.length) % images.length]
            })`,
          }}
        >
          <div className="flex flex-col items-start gap-[px] relative top-[120px] sm:top-[160px] lg:top-[190px] left-4 sm:left-6">
            <div className="bg-[#F3533D] inline-block p-[2px] px-2 sm:px-[6px] text-xs sm:text-sm text-white">
              Honeymoon Specials
            </div>
            <div className="bg-white inline-block text-gray-700 text-left text-[10px] sm:text-xs p-[2px] px-2 sm:px-[6px]">
              1000 packages
            </div>
          </div>
        </div>

        {/* Center Image */}
        <div
          className="h-[200px] w-[180px] sm:h-[200px] sm:w-[240px] lg:h-[250px] lg:w-[300px] bg-cover bg-center"
          style={{
            backgroundImage: `url(${images[currentIndex]})`,
          }}
        >
          <div className="flex flex-col items-start gap-[px] relative top-[120px] sm:top-[160px] lg:top-[190px] left-4 sm:left-6">
            <div className="bg-[#F3533D] inline-block p-[2px] px-2 sm:px-[6px] text-xs sm:text-sm text-white">
              Honeymoon Specials
            </div>
            <div className="bg-white inline-block text-gray-700 text-left text-[10px] sm:text-xs p-[2px] px-2 sm:px-[6px]">
              1000 packages
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div
          className="h-[200px] w-[180px] sm:h-[200px] sm:w-[140px] lg:h-[250px] lg:w-[300px] bg-cover bg-center"
          style={{
            backgroundImage: `url(${
              images[(currentIndex + 1) % images.length]
            })`,
          }}
        >
          <div className="flex flex-col items-start gap-[px] relative top-[120px] sm:top-[160px] lg:top-[190px] left-4 sm:left-6">
            <div className="bg-[#F3533D] inline-block p-[2px] px-2 sm:px-[6px] text-xs sm:text-sm text-white">
              Honeymoon Specials
            </div>
            <div className="bg-white inline-block text-gray-700 text-left text-[10px] sm:text-xs p-[2px] px-2 sm:px-[6px]">
              1000 packages
            </div>
          </div>
        </div>
      </div>

      {/* Next Button */}
      <div className="mr-[35px]">
        <button
          className="carousel-control text-gray-300 hover:text-gray-700"
          onClick={handleNextSlide}
        >
          <FontAwesomeIcon icon={solid('circle-chevron-right')} size="2xl" />
        </button>
      </div>
    </div>
  )
}

export default TripCarousel
