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
    <div className="flex items-center justify-center gap-[50px] my-[6rem]">
      <div>
        <button
          className="carousel-control text-gray-300 hover:text-gray-700"
          onClick={handlePrevSlide}
        >
          <FontAwesomeIcon icon={solid('circle-chevron-left')} size="xl" />
        </button>
      </div>

      {/* Carousel Images */}
      <div className="flex overflow-hidden space-x-10">
        {/* Display the last image to the left, the current in the center, and the next on the right */}
        <div
          className="h-[250px] w-[300px] bg-cover"
          style={{
            backgroundImage: `url(${
              images[(currentIndex - 1 + images.length) % images.length]
            })`,
          }}
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
        <div
          className="h-[250px] w-[300px] bg-cover"
          style={{
            backgroundImage: `url(${images[currentIndex]})`,
          }}
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
        <div
          className="h-[250px] w-[300px] bg-cover"
          style={{
            backgroundImage: `url(${
              images[(currentIndex + 1) % images.length]
            })`,
          }}
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

      <div>
        <button
          className="carousel-control text-gray-300 hover:text-gray-700"
          onClick={handleNextSlide}
        >
          <FontAwesomeIcon icon={solid('circle-chevron-right')} size="xl" />
        </button>
      </div>
    </div>
  )
}

export default TripCarousel
