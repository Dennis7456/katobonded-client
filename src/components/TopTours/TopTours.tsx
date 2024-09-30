import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import elephantImage from '../../assets/elephant-img.jpeg'
import bufalloImage from '../../assets/Bufallo.jpeg'
import rhinoImage from '../../assets/RhinoImage.jpeg'
import SafariCard from '../SafariCard/SafariCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

const TopTours: React.FC = () => {
  const [activeGetaway, setActiveGetaway] = useState<number>(0)
  const [direction, setDirection] = useState<number>(0)

  const getaways = [
    {
      title: 'Safari Getaways',
      offers: [
        {
          title: '3 Days Amboseli Camping Safari',
          tourType: 'Private Tour, Luxury',
          price: '2,170',
          reviews: 800,
          image: elephantImage,
          tags: ['Private Tour', 'Luxury'],
          operator: 'Twiga Safaris',
          specialOffer: 'Special Offer',
        },
        {
          title: '3 Days Samburu Camping Safari',
          tourType: 'Shared Tour, Mid Range',
          price: '2,170',
          reviews: 800,
          image: bufalloImage,
          tags: ['Shared Tour', 'Mid Range'],
          operator: 'Twiga Safaris',
          specialOffer: 'Best Seller',
        },
        {
          title: '3 Days Masai Mara Camping Safari',
          tourType: 'Shared Tour, Budget',
          price: '2,170',
          reviews: 800,
          image: rhinoImage,
          tags: ['Shared Tour', 'Budget'],
          operator: 'Twiga Safaris',
          specialOffer: 'Top Rated Operator',
        },
      ],
      active: true,
    },
    {
      title: 'Honeymoon Getaways',
      offers: [],
      active: false,
    },
    {
      title: 'Beach Getaways',
      offers: [],
      active: false,
    },
    {
      title: 'Adventure Getaways',
      offers: [],
      active: false,
    },
  ]

  const offers = getaways[activeGetaway].offers

  const [visibleCards, setVisibleCards] = useState<number[]>([0, 1, 2])

  // Handle circular shift to the left (Prev button)
  const handlePrev = (): void => {
    setDirection(1)
    setVisibleCards((prev) => {
      const first = prev[0] // Last card in the list
      return [...prev.slice(1), first] // Move last card to the front
    })
  }

  // Handle circular shift to the right (Next button)
  const handleNext = (): void => {
    setDirection(-1)
    setVisibleCards((prev) => {
      const last = prev[prev.length - 1] // First card in the list
      return [last, ...prev.slice(0, prev.length - 1)] // Move first card to the end
    })
  }

  // Framer Motion settings
  const variants = {
    enter: (direction: number) => ({
      x: direction === 1 ? 300 : -300, // Enter from the right or left
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0, // Centered
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction === 1 ? -300 : 300, // Exit to the left or right
      opacity: 0,
    }),
  }

  // Updated transition settings for smoother motion
  const transition = {
    x: { type: 'spring', stiffness: 120, damping: 25, duration: 6 },
    opacity: { duration: 0.4 },
  }

  return (
    <div className="my-[6rem]">
      {/* Title */}
      <div className="text-[25px] text-gray-900 text-center">Top Tours</div>

      {/* Getaway Tabs */}
      <div className="flex items-center justify-center gap-[15px] pt-[35px]">
        {getaways.map((getaway, index) => (
          <div
            key={index}
            className={`${
              activeGetaway === index
                ? 'bg-[#272d3d] text-white hover:bg-[#272d3d]'
                : 'text-gray-900'
            } text-center cursor-pointer hover:bg-gray-500 hover:text-white rounded-full px-[25px] py-[3px]`}
            onClick={() => {
              setActiveGetaway(index)
              setVisibleCards([0, 1, 2]) // Reset visible cards
            }}
          >
            {getaway.title}
          </div>
        ))}
      </div>

      {/* Carousel Navigation */}
      <div className="flex justify-center items-center mt-[25px] mx-[6rem]">
        {/* Left Navigation Button */}
        <div className="">
          <button
            className="absolute left-0 text-gray-300 hover:text-gray-700 ml-[35px]"
            onClick={handlePrev}
          >
            <FontAwesomeIcon icon={solid('circle-chevron-left')} size="xl" />
          </button>
        </div>

        {/* Cards (Carousel) */}
        <div className="relative w-full overflow-hidden px-2">
          <div className="flex">
            <AnimatePresence initial={false} custom={direction}>
              {visibleCards.map((cardIndex) => (
                <motion.div
                  key={cardIndex}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={transition} // Smoother transition
                  className="min-w-[300px] max-w-[320px] mx-4"
                  style={{ flexShrink: 0 }}
                >
                  <SafariCard
                    title={offers[cardIndex].title}
                    tourType={offers[cardIndex].tourType}
                    price={offers[cardIndex].price}
                    reviews={offers[cardIndex].reviews}
                    image={offers[cardIndex].image}
                    tags={offers[cardIndex].tags}
                    operator={offers[cardIndex].operator}
                    specialOffer={offers[cardIndex].specialOffer}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Right Navigation Button */}
        <div className="">
          <button
            className="absolute right-0 text-gray-300 hover:text-gray-700 mr-[35px]"
            onClick={handleNext}
          >
            <FontAwesomeIcon icon={solid('circle-chevron-right')} size="xl" />
          </button>
        </div>
      </div>
      <div className="flex justify-center mt-[35px]">
        <button className="w-[170px] h-[40px] bg-[#F3533D] rounded-[3px] text-white">
          View All Packages
        </button>
      </div>
    </div>
  )
}

export default TopTours
