import React, { useState } from 'react'
import Header from 'src/stories/Header/Header'
import Footer from '../Footer/Footer'
import SafariCard from '../SafariCard/SafariCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import elephantImage from '../../assets/elephant-img.jpeg'
import leopardImage from '../../assets/LeopardImage.jpeg'
import buffaloImage from '../../assets/Bufallo.jpeg'
import rhinoImage from '../../assets/RhinoImage.jpeg'
import elephantsImage from '../../assets/ElephantsImage.jpeg'
import balloonImage from '../../assets/BalloonsImage.jpeg'
import giraffeImage from '../../assets/Giraffe.jpeg'
import giraffesImage from '../../assets/Giraffes.jpeg'
import lionImage from '../../assets/LionImage.jpeg'
import cheetahImage from '../../assets/ChatuImage.jpeg'
import { LocationCompnent } from 'src/stories/CreateYourTrip/LocationCompnent'
import { DateComponent } from 'src/stories/CreateYourTrip/DateComponent'
import Travellers from '../Travellers/Travellers'
import RangeSlider from '../RangeSlider/RangeSlider'

interface Getaway {
  title: string
  offers: Offer[]
  active: boolean
}

interface Offer {
  title: string
  tourType: string
  price: string
  reviews: number
  image: string
  tags: string[]
  operator: string
  specialOffer: string
}

const getaways: Getaway[] = [
  {
    title: 'Safari Getaways',
    offers: [
      {
        title: '3 Days Amboseli Camping Safari',
        tourType: 'Private Tour, Luxury',
        price: '2,170',
        reviews: 800,
        image: elephantImage, // Replace with actual image path
        tags: ['Private Tour', 'Luxury'],
        operator: 'Twiga Safaris',
        specialOffer: 'Special Offer',
      },
      {
        title: '3 Days Samburu Camping Safari',
        tourType: 'Private Tour, Luxury',
        price: '2,170',
        reviews: 800,
        image: buffaloImage, // Replace with actual image path
        tags: ['Private Tour', 'Luxury'],
        operator: 'Twiga Safaris',
        specialOffer: 'Special Offer',
      },
      {
        title: '3 Days Masai Mara Camping Safari',
        tourType: 'Shared Tour, Budget',
        price: '2,170',
        reviews: 800,
        image: rhinoImage, // Replace with actual image path
        tags: ['Shared Tour', 'Budget'],
        operator: 'Twiga Safaris',
        specialOffer: 'Top Rated Operator',
      },
      {
        title: '3 Days Amboseli Camping Safari',
        tourType: 'Private Tour, Luxury',
        price: '2,170',
        reviews: 800,
        image: leopardImage, // Replace with actual image path
        tags: ['Private Tour', 'Luxury'],
        operator: 'Twiga Safaris',
        specialOffer: 'Special Offer',
      },
      {
        title: '3 Days Samburu Camping Safari',
        tourType: 'Private Tour, Luxury',
        price: '2,170',
        reviews: 800,
        image: elephantsImage, // Replace with actual image path
        tags: ['Private Tour', 'Luxury'],
        operator: 'Twiga Safaris',
        specialOffer: 'Special Offer',
      },
      {
        title: '3 Days Masai Mara Camping Safari',
        tourType: 'Shared Tour, Budget',
        price: '2,170',
        reviews: 800,
        image: balloonImage, // Replace with actual image path
        tags: ['Shared Tour', 'Budget'],
        operator: 'Twiga Safaris',
        specialOffer: 'Top Rated Operator',
      },
      {
        title: '3 Days Amboseli Camping Safari',
        tourType: 'Private Tour, Luxury',
        price: '2,170',
        reviews: 800,
        image: giraffeImage, // Replace with actual image path
        tags: ['Private Tour', 'Luxury'],
        operator: 'Twiga Safaris',
        specialOffer: 'Special Offer',
      },
      {
        title: '3 Days Samburu Camping Safari',
        tourType: 'Private Tour, Luxury',
        price: '2,170',
        reviews: 800,
        image: giraffesImage, // Replace with actual image path
        tags: ['Private Tour', 'Luxury'],
        operator: 'Twiga Safaris',
        specialOffer: 'Special Offer',
      },
      {
        title: '3 Days Masai Mara Camping Safari',
        tourType: 'Shared Tour, Budget',
        price: '2,170',
        reviews: 800,
        image: lionImage, // Replace with actual image path
        tags: ['Shared Tour', 'Budget'],
        operator: 'Twiga Safaris',
        specialOffer: 'Top Rated Operator',
      },
      {
        title: '3 Days Amboseli Camping Safari',
        tourType: 'Private Tour, Luxury',
        price: '2,170',
        reviews: 800,
        image: cheetahImage, // Replace with actual image path
        tags: ['Private Tour', 'Luxury'],
        operator: 'Twiga Safaris',
        specialOffer: 'Special Offer',
      },
      {
        title: '3 Days Samburu Camping Safari',
        tourType: 'Private Tour, Luxury',
        price: '2,170',
        reviews: 800,
        image: leopardImage, // Replace with actual image path
        tags: ['Private Tour', 'Luxury'],
        operator: 'Twiga Safaris',
        specialOffer: 'Special Offer',
      },
      {
        title: '3 Days Masai Mara Camping Safari',
        tourType: 'Shared Tour, Budget',
        price: '2,170',
        reviews: 800,
        image: rhinoImage, // Replace with actual image path
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

const SafarisAndTours: React.FC = () => {
  const [sortOption, setSortOption] = useState<string>('Price Low - High')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [tourLength, setTourLength] = useState(0.5)
  const [rates, setRates] = useState(0)

  const allOffers = getaways.flatMap((getaway) => getaway.offers)

  const toggleFilter = (): void => {
    setIsModalOpen(!isModalOpen)
  }

  return (
    <div className="relative">
      {/* Filter Panel */}

      {isModalOpen ? (
        <div className="z-20 modal-bg">
          <div className="z-20 fixed top-0 right-0 w-[430px] bg-white h-full px-[35px] py-[35px] overflow-auto">
            <div className="flex justify-between items-center gap-[35px]">
              <span className="text-lg">Filter Results</span>
              <span>
                <FontAwesomeIcon
                  icon={solid('circle-xmark')}
                  size="lg"
                  className="text-gray-400 cursor-pointer hover:text-error"
                  onClick={toggleFilter}
                />
              </span>
            </div>
            <div className="mt-[50px] flex flex-col gap-[20px]">
              <h2 className="font-semibold mb-[1px]">Your Safari</h2>
              <div className="mb-[35px]">
                <LocationCompnent />
              </div>
              <div className="mb-[5px]">
                <DateComponent />
              </div>
              <div className="flex justify-center items-center">
                <input
                  type="checkbox"
                  id="checkbox1"
                  className="
                peer 
                relative 
                h-5 
                w-5 
                shrink-0 
                appearance-none 
                rounded-sm border 
                after:absolute 
                after:left-0 
                after:top-0 
                after:h-full 
                after:w-full 
                after:bg-[url('data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjZmZmZmZmIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIHk9IjBweCI+PHRpdGxlPmljb25fYnlfUG9zaGx5YWtvdjEwPC90aXRsZT48ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz48ZyBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyBmaWxsPSIjZmZmZmZmIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNi4wMDAwMDAsIDI2LjAwMDAwMCkiPjxwYXRoIGQ9Ik0xNy45OTk5ODc4LDMyLjQgTDEwLjk5OTk4NzgsMjUuNCBDMTAuMjI2Nzg5MSwyNC42MjY4MDE0IDguOTczMTg2NDQsMjQuNjI2ODAxNCA4LjE5OTk4Nzc5LDI1LjQgTDguMTk5OTg3NzksMjUuNCBDNy40MjY3ODkxNCwyNi4xNzMxOTg2IDcuNDI2Nzg5MTQsMjcuNDI2ODAxNCA4LjE5OTk4Nzc5LDI4LjIgTDE2LjU4NTc3NDIsMzYuNTg1Nzg2NCBDMTcuMzY2ODIyOCwzNy4zNjY4MzUgMTguNjMzMTUyOCwzNy4zNjY4MzUgMTkuNDE0MjAxNCwzNi41ODU3ODY0IEw0MC41OTk5ODc4LDE1LjQgQzQxLjM3MzE4NjQsMTQuNjI2ODAxNCA0MS4zNzMxODY0LDEzLjM3MzE5ODYgNDAuNTk5OTg3OCwxMi42IEw0MC41OTk5ODc4LDEyLjYgQzM5LjgyNjc4OTEsMTEuODI2ODAxNCAzOC41NzMxODY0LDExLjgyNjgwMTQgMzcuNzk5OTg3OCwxMi42IEwxNy45OTk5ODc4LDMyLjQgWiI+PC9wYXRoPjwvZz48L2c+PC9nPjwvc3ZnPg==')] 
                after:bg-[length:40px] 
                after:bg-center 
                after:bg-no-repeat after:content-['']
              checked:bg-[#F3533D] 
              ring
              ring-gray-300
              hover:ring 
               hover:ring-[#F3533D] 
              focus:outline-none"
                />
                <label
                  className="
              w-full 
              cursor-pointer 
              font-medium text-gray-700 
              peer-checked:text-gray-500 
              peer-checked:line-through
              pl-[10px]
              "
                >
                  {' '}
                  My dates are flexible{' '}
                </label>
              </div>
              <div>
                <Travellers />
              </div>
            </div>
            <div className="mt-[50px] flex flex-col gap-[20px]">
              <h2 className="font-semibold mb-[px]">Filters</h2>
              <div className="flex justify-start items-center">
                {/* Tour Length Slider */}
                <div className="mb-8">
                  <div className="">
                    <RangeSlider title="Tour Length" max={1000} min={0} />
                  </div>
                  <div className="relative">
                    <button className="absolute left-[130px] -top-0.5 text-[#F3533D] underline cursor-pointer ">
                      Change Currency
                    </button>
                    <RangeSlider title="Rates in USD $" max={100000} min={0} />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3 mb-4">
                <h2 className="text-sm text-gray-900 font-semibold mb-3">
                  Comfort Level
                </h2>
                <div className="flex justify-center items-center text-sm">
                  <input
                    type="checkbox"
                    id="checkbox1"
                    className="
                peer 
                relative 
                h-5 
                w-5 
                shrink-0 
                appearance-none 
                rounded-sm border 
                after:absolute 
                after:left-0 
                after:top-0 
                after:h-full 
                after:w-full 
                after:bg-[url('data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjZmZmZmZmIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIHk9IjBweCI+PHRpdGxlPmljb25fYnlfUG9zaGx5YWtvdjEwPC90aXRsZT48ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz48ZyBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyBmaWxsPSIjZmZmZmZmIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNi4wMDAwMDAsIDI2LjAwMDAwMCkiPjxwYXRoIGQ9Ik0xNy45OTk5ODc4LDMyLjQgTDEwLjk5OTk4NzgsMjUuNCBDMTAuMjI2Nzg5MSwyNC42MjY4MDE0IDguOTczMTg2NDQsMjQuNjI2ODAxNCA4LjE5OTk4Nzc5LDI1LjQgTDguMTk5OTg3NzksMjUuNCBDNy40MjY3ODkxNCwyNi4xNzMxOTg2IDcuNDI2Nzg5MTQsMjcuNDI2ODAxNCA4LjE5OTk4Nzc5LDI4LjIgTDE2LjU4NTc3NDIsMzYuNTg1Nzg2NCBDMTcuMzY2ODIyOCwzNy4zNjY4MzUgMTguNjMzMTUyOCwzNy4zNjY4MzUgMTkuNDE0MjAxNCwzNi41ODU3ODY0IEw0MC41OTk5ODc4LDE1LjQgQzQxLjM3MzE4NjQsMTQuNjI2ODAxNCA0MS4zNzMxODY0LDEzLjM3MzE5ODYgNDAuNTk5OTg3OCwxMi42IEw0MC41OTk5ODc4LDEyLjYgQzM5LjgyNjc4OTEsMTEuODI2ODAxNCAzOC41NzMxODY0LDExLjgyNjgwMTQgMzcuNzk5OTg3OCwxMi42IEwxNy45OTk5ODc4LDMyLjQgWiI+PC9wYXRoPjwvZz48L2c+PC9nPjwvc3ZnPg==')] 
                after:bg-[length:40px] 
                after:bg-center 
                after:bg-no-repeat after:content-['']
              checked:bg-[#F3533D] 
              ring
              ring-gray-300
              hover:ring 
               hover:ring-[#F3533D] 
              focus:outline-none"
                  />
                  <label
                    className="
              w-full 
              cursor-pointer 
              font-medium text-gray-700 
              peer-checked:text-gray-500 
              peer-checked:line-through
              pl-[10px]
              "
                  >
                    {' '}
                    Luxury{' '}
                  </label>
                </div>
                <div className="flex justify-center items-center text-sm">
                  <input
                    type="checkbox"
                    id="checkbox1"
                    className="
                peer 
                relative 
                h-5 
                w-5 
                shrink-0 
                appearance-none 
                rounded-sm border 
                after:absolute 
                after:left-0 
                after:top-0 
                after:h-full 
                after:w-full 
                after:bg-[url('data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjZmZmZmZmIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIHk9IjBweCI+PHRpdGxlPmljb25fYnlfUG9zaGx5YWtvdjEwPC90aXRsZT48ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz48ZyBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyBmaWxsPSIjZmZmZmZmIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNi4wMDAwMDAsIDI2LjAwMDAwMCkiPjxwYXRoIGQ9Ik0xNy45OTk5ODc4LDMyLjQgTDEwLjk5OTk4NzgsMjUuNCBDMTAuMjI2Nzg5MSwyNC42MjY4MDE0IDguOTczMTg2NDQsMjQuNjI2ODAxNCA4LjE5OTk4Nzc5LDI1LjQgTDguMTk5OTg3NzksMjUuNCBDNy40MjY3ODkxNCwyNi4xNzMxOTg2IDcuNDI2Nzg5MTQsMjcuNDI2ODAxNCA4LjE5OTk4Nzc5LDI4LjIgTDE2LjU4NTc3NDIsMzYuNTg1Nzg2NCBDMTcuMzY2ODIyOCwzNy4zNjY4MzUgMTguNjMzMTUyOCwzNy4zNjY4MzUgMTkuNDE0MjAxNCwzNi41ODU3ODY0IEw0MC41OTk5ODc4LDE1LjQgQzQxLjM3MzE4NjQsMTQuNjI2ODAxNCA0MS4zNzMxODY0LDEzLjM3MzE5ODYgNDAuNTk5OTg3OCwxMi42IEw0MC41OTk5ODc4LDEyLjYgQzM5LjgyNjc4OTEsMTEuODI2ODAxNCAzOC41NzMxODY0LDExLjgyNjgwMTQgMzcuNzk5OTg3OCwxMi42IEwxNy45OTk5ODc4LDMyLjQgWiI+PC9wYXRoPjwvZz48L2c+PC9nPjwvc3ZnPg==')] 
                after:bg-[length:40px] 
                after:bg-center 
                after:bg-no-repeat after:content-['']
              checked:bg-[#F3533D] 
              ring
              ring-gray-300
              hover:ring 
               hover:ring-[#F3533D] 
              focus:outline-none"
                  />
                  <label
                    className="
              w-full 
              cursor-pointer 
              font-medium text-gray-700 
              peer-checked:text-gray-500 
              peer-checked:line-through
              pl-[10px]
              "
                  >
                    {' '}
                    Midrange{' '}
                  </label>
                </div>
                <div className="flex justify-center items-center text-sm">
                  <input
                    type="checkbox"
                    id="checkbox1"
                    className="
                peer 
                relative 
                h-5 
                w-5 
                shrink-0 
                appearance-none 
                rounded-sm border 
                after:absolute 
                after:left-0 
                after:top-0 
                after:h-full 
                after:w-full 
                after:bg-[url('data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjZmZmZmZmIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIHk9IjBweCI+PHRpdGxlPmljb25fYnlfUG9zaGx5YWtvdjEwPC90aXRsZT48ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz48ZyBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyBmaWxsPSIjZmZmZmZmIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNi4wMDAwMDAsIDI2LjAwMDAwMCkiPjxwYXRoIGQ9Ik0xNy45OTk5ODc4LDMyLjQgTDEwLjk5OTk4NzgsMjUuNCBDMTAuMjI2Nzg5MSwyNC42MjY4MDE0IDguOTczMTg2NDQsMjQuNjI2ODAxNCA4LjE5OTk4Nzc5LDI1LjQgTDguMTk5OTg3NzksMjUuNCBDNy40MjY3ODkxNCwyNi4xNzMxOTg2IDcuNDI2Nzg5MTQsMjcuNDI2ODAxNCA4LjE5OTk4Nzc5LDI4LjIgTDE2LjU4NTc3NDIsMzYuNTg1Nzg2NCBDMTcuMzY2ODIyOCwzNy4zNjY4MzUgMTguNjMzMTUyOCwzNy4zNjY4MzUgMTkuNDE0MjAxNCwzNi41ODU3ODY0IEw0MC41OTk5ODc4LDE1LjQgQzQxLjM3MzE4NjQsMTQuNjI2ODAxNCA0MS4zNzMxODY0LDEzLjM3MzE5ODYgNDAuNTk5OTg3OCwxMi42IEw0MC41OTk5ODc4LDEyLjYgQzM5LjgyNjc4OTEsMTEuODI2ODAxNCAzOC41NzMxODY0LDExLjgyNjgwMTQgMzcuNzk5OTg3OCwxMi42IEwxNy45OTk5ODc4LDMyLjQgWiI+PC9wYXRoPjwvZz48L2c+PC9nPjwvc3ZnPg==')] 
                after:bg-[length:40px] 
                after:bg-center 
                after:bg-no-repeat after:content-['']
              checked:bg-[#F3533D] 
              ring
              ring-gray-300
              hover:ring 
               hover:ring-[#F3533D] 
              focus:outline-none"
                  />
                  <label
                    className="
              w-full 
              cursor-pointer 
              font-medium text-gray-700 
              peer-checked:text-gray-500 
              peer-checked:line-through
              pl-[10px]
              "
                  >
                    {' '}
                    Budget{' '}
                  </label>
                </div>
                <div className="flex justify-center items-center text-sm">
                  <input
                    type="checkbox"
                    id="checkbox1"
                    className="
                peer 
                relative 
                h-5 
                w-5 
                shrink-0 
                appearance-none 
                rounded-sm border 
                after:absolute 
                after:left-0 
                after:top-0 
                after:h-full 
                after:w-full 
                after:bg-[url('data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjZmZmZmZmIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIHk9IjBweCI+PHRpdGxlPmljb25fYnlfUG9zaGx5YWtvdjEwPC90aXRsZT48ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz48ZyBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyBmaWxsPSIjZmZmZmZmIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNi4wMDAwMDAsIDI2LjAwMDAwMCkiPjxwYXRoIGQ9Ik0xNy45OTk5ODc4LDMyLjQgTDEwLjk5OTk4NzgsMjUuNCBDMTAuMjI2Nzg5MSwyNC42MjY4MDE0IDguOTczMTg2NDQsMjQuNjI2ODAxNCA4LjE5OTk4Nzc5LDI1LjQgTDguMTk5OTg3NzksMjUuNCBDNy40MjY3ODkxNCwyNi4xNzMxOTg2IDcuNDI2Nzg5MTQsMjcuNDI2ODAxNCA4LjE5OTk4Nzc5LDI4LjIgTDE2LjU4NTc3NDIsMzYuNTg1Nzg2NCBDMTcuMzY2ODIyOCwzNy4zNjY4MzUgMTguNjMzMTUyOCwzNy4zNjY4MzUgMTkuNDE0MjAxNCwzNi41ODU3ODY0IEw0MC41OTk5ODc4LDE1LjQgQzQxLjM3MzE4NjQsMTQuNjI2ODAxNCA0MS4zNzMxODY0LDEzLjM3MzE5ODYgNDAuNTk5OTg3OCwxMi42IEw0MC41OTk5ODc4LDEyLjYgQzM5LjgyNjc4OTEsMTEuODI2ODAxNCAzOC41NzMxODY0LDExLjgyNjgwMTQgMzcuNzk5OTg3OCwxMi42IEwxNy45OTk5ODc4LDMyLjQgWiI+PC9wYXRoPjwvZz48L2c+PC9nPjwvc3ZnPg==')] 
                after:bg-[length:40px] 
                after:bg-center 
                after:bg-no-repeat after:content-['']
              checked:bg-[#F3533D] 
              ring
              ring-gray-300
              hover:ring 
               hover:ring-[#F3533D] 
              focus:outline-none"
                  />
                  <label
                    className="
              w-full 
              cursor-pointer 
              font-medium text-gray-700 
              peer-checked:text-gray-500 
              peer-checked:line-through
              pl-[10px]
              "
                  >
                    {' '}
                    Shared Tour{' '}
                  </label>
                </div>
              </div>
              <div className="flex flex-col gap-3 mb-4">
                <h2 className="text-sm text-gray-900 font-semibold mb-3">
                  Operator Rating
                </h2>
                <div className="flex justify-start items-end gap-3">
                  <span className="border border-gray-900 rounded-full p-2"></span>
                  <span>
                    <FontAwesomeIcon
                      icon={solid('star')}
                      size="lg"
                      className="text-orange-400 cursor-pointer"
                      onClick={toggleFilter}
                    />
                  </span>
                  <span>
                    <FontAwesomeIcon
                      icon={solid('star')}
                      size="lg"
                      className="text-orange-400 cursor-pointer"
                      onClick={toggleFilter}
                    />
                  </span>
                  <span>
                    <FontAwesomeIcon
                      icon={solid('star')}
                      size="lg"
                      className="text-orange-400 cursor-pointer"
                      onClick={toggleFilter}
                    />
                  </span>
                  <span>
                    <FontAwesomeIcon
                      icon={solid('star')}
                      size="lg"
                      className="text-orange-400 cursor-pointer"
                      onClick={toggleFilter}
                    />
                  </span>
                  <span>
                    <FontAwesomeIcon
                      icon={solid('star')}
                      size="lg"
                      className="text-orange-400 cursor-pointer"
                      onClick={toggleFilter}
                    />
                  </span>
                </div>
                <div className="flex justify-start items-end gap-3">
                  <span className="border border-gray-900 rounded-full p-2"></span>
                  <span>
                    <FontAwesomeIcon
                      icon={solid('star')}
                      size="lg"
                      className="text-orange-400 cursor-pointer"
                      onClick={toggleFilter}
                    />
                  </span>
                  <span>
                    <FontAwesomeIcon
                      icon={solid('star')}
                      size="lg"
                      className="text-orange-400 cursor-pointer"
                      onClick={toggleFilter}
                    />
                  </span>
                  <span>
                    <FontAwesomeIcon
                      icon={solid('star')}
                      size="lg"
                      className="text-orange-400 cursor-pointer"
                      onClick={toggleFilter}
                    />
                  </span>
                  <span>
                    <FontAwesomeIcon
                      icon={solid('star')}
                      size="lg"
                      className="text-orange-400 cursor-pointer"
                      onClick={toggleFilter}
                    />
                  </span>
                  <span>
                    <FontAwesomeIcon
                      icon={solid('star')}
                      size="lg"
                      className="text-gray-400 cursor-pointer"
                      onClick={toggleFilter}
                    />
                  </span>
                  <span>& up</span>
                </div>
                <div className="flex justify-start items-end gap-3">
                  <span className="border border-gray-900 rounded-full p-2"></span>
                  <span>
                    <FontAwesomeIcon
                      icon={solid('star')}
                      size="lg"
                      className="text-orange-400 cursor-pointer"
                      onClick={toggleFilter}
                    />
                  </span>
                  <span>
                    <FontAwesomeIcon
                      icon={solid('star')}
                      size="lg"
                      className="text-orange-400 cursor-pointer"
                      onClick={toggleFilter}
                    />
                  </span>
                  <span>
                    <FontAwesomeIcon
                      icon={solid('star')}
                      size="lg"
                      className="text-orange-400 cursor-pointer"
                      onClick={toggleFilter}
                    />
                  </span>
                  <span>
                    <FontAwesomeIcon
                      icon={solid('star')}
                      size="lg"
                      className="text-gray-400 cursor-pointer"
                      onClick={toggleFilter}
                    />
                  </span>
                  <span>
                    <FontAwesomeIcon
                      icon={solid('star')}
                      size="lg"
                      className="text-gray-400 cursor-pointer"
                      onClick={toggleFilter}
                    />
                  </span>
                  <span>& up</span>
                </div>
                <div className="flex justify-start items-end gap-3">
                  <span className="border border-gray-900 rounded-full p-2"></span>
                  <span>
                    <FontAwesomeIcon
                      icon={solid('star')}
                      size="lg"
                      className="text-orange-400 cursor-pointer"
                      onClick={toggleFilter}
                    />
                  </span>
                  <span>
                    <FontAwesomeIcon
                      icon={solid('star')}
                      size="lg"
                      className="text-orange-400 cursor-pointer"
                      onClick={toggleFilter}
                    />
                  </span>
                  <span>
                    <FontAwesomeIcon
                      icon={solid('star')}
                      size="lg"
                      className="text-gray-400 cursor-pointer"
                      onClick={toggleFilter}
                    />
                  </span>
                  <span>
                    <FontAwesomeIcon
                      icon={solid('star')}
                      size="lg"
                      className="text-gray-400 cursor-pointer"
                      onClick={toggleFilter}
                    />
                  </span>
                  <span>
                    <FontAwesomeIcon
                      icon={solid('star')}
                      size="lg"
                      className="text-gray-400 cursor-pointer"
                      onClick={toggleFilter}
                    />
                  </span>
                  <span>& up</span>
                </div>
                <div className="flex justify-start items-end gap-3">
                  <span className="border border-gray-900 rounded-full p-2"></span>
                  <span>
                    <FontAwesomeIcon
                      icon={solid('star')}
                      size="lg"
                      className="text-orange-400 cursor-pointer"
                      onClick={toggleFilter}
                    />
                  </span>
                  <span>
                    <FontAwesomeIcon
                      icon={solid('star')}
                      size="lg"
                      className="text-gray-400 cursor-pointer"
                      onClick={toggleFilter}
                    />
                  </span>
                  <span>
                    <FontAwesomeIcon
                      icon={solid('star')}
                      size="lg"
                      className="text-gray-400 cursor-pointer"
                      onClick={toggleFilter}
                    />
                  </span>
                  <span>
                    <FontAwesomeIcon
                      icon={solid('star')}
                      size="lg"
                      className="text-gray-400 cursor-pointer"
                      onClick={toggleFilter}
                    />
                  </span>
                  <span>
                    <FontAwesomeIcon
                      icon={solid('star')}
                      size="lg"
                      className="text-gray-400 cursor-pointer"
                      onClick={toggleFilter}
                    />
                  </span>
                  <span>& up</span>
                </div>
              </div>
              <div>
                <label
                  className="text-sm text-gray-900 font-semibold"
                  htmlFor="operator-filter"
                >
                  Filter by Operator
                </label>
                <div className="mt-[20px] relative">
                  <input
                    id="operator-filter"
                    type="text"
                    className="bg-gray-100 w-[280px] h-[49px] px-[15px] border-none focus:border-none focus:outline-none truncate"
                  />
                  <span className="p-[10px] absolute bg-gray-900 text-white h-[49px] px-[15px] overflow-hidden cursor-pointer hover:opacity-90">
                    Apply
                  </span>
                </div>
              </div>
              <div>
                <label
                  className="text-sm text-gray-900 font-semibold"
                  htmlFor="operator-filter"
                >
                  Filter by Accommodation
                </label>
                <div className="mt-[20px] relative">
                  <input
                    id="operator-filter"
                    type="text"
                    className="bg-gray-100 w-[280px] h-[49px] px-[15px] border-none focus:border-none focus:outline-none truncate"
                  />
                  <span className="p-[10px] absolute bg-gray-900 text-white h-[49px] px-[15px] overflow-hidden cursor-pointer hover:opacity-90">
                    Apply
                  </span>
                </div>
              </div>
              <div className="flex justify-center items-center mt-[35px] bg-[#F3533D] text-white rounded-sm py-[15px] font-semibold hover:opacity-90 cursor-pointer">
                <button>Apply Filters</button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      <Header />
      <div className="my-[100px] py-[35px] px-[75px]">
        <div>
          {/* Breadcrumb */}
          <nav className="text-gray-900 mb-6 font-semibold flex justify-start items-center gap-[20px]">
            <span>Home</span>
            <FontAwesomeIcon icon={solid('caret-right')} />
            <span className="text-gray-400">Safaris and Tours</span>
          </nav>
        </div>

        <div className="flex justify-between items-center border-b-2 py-[25px] border-gray-200">
          <div
            className="cursor-pointer hover:bg-gray-400 hover:text-white text-center px-[4px] rounded-sm"
            onClick={toggleFilter}
          >
            <span className="mr-[20px] font-semibold">Filter</span>
            <FontAwesomeIcon icon={solid('filter')} className="" />
          </div>
          <div className="text-gray-400">
            <span className="text-gray-900 font-semibold">1-10</span> of{' '}
            <span className="text-gray-900 font-semibold">1000</span> trips,
            packages and vacations
          </div>
          <div className="">
            <label htmlFor="sort" className="text-gray-600 pr-[10px]">
              Sort By:
            </label>
            <select
              id="sort"
              value={sortOption}
              onChange={(e) => {
                setSortOption(e.target.value)
              }}
              className="relative border rounded-sm pr-10 pl-3 py-1 focus:outline-none focus:ring-0 appearance-none"
            >
              <option className="border-none">Price High - Low</option>
              <option>Price Low - High</option>
              <option>Highest Rating</option>
            </select>
            <FontAwesomeIcon
              icon={solid('chevron-down')}
              className="relative right-7 top-1/2"
            />
          </div>
        </div>
        <div className="py-6 px-2">
          <span className="pr-4 font-semibold">Applied Filters</span>
          <button className="underline text-[#F3533D] cursor-pointer">
            Clear all
          </button>
        </div>
        <div className="px-2 flex justify-start items-center gap-[10px] text-[#F3533D]">
          <span className="hover:bg-[#F3533D] hover:text-white px-3 cursor-pointer rounded-sm">
            Mombasa X
          </span>
          <span className="hover:bg-[#F3533D] hover:text-white px-3 cursor-pointer rounded-sm">
            Jul 6, 2020 X
          </span>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-3 gap-2">
          {allOffers.map((offer, index) => (
            <SafariCard
              key={index}
              title={offer.title}
              tourType={offer.tourType}
              price={offer.price}
              reviews={offer.reviews}
              image={offer.image}
              tags={offer.tags}
              operator={offer.operator}
              specialOffer={offer.specialOffer}
            />
          ))}
        </div>

        {/* Pagination */}
        <div className="text-xl px-4 pt-8 flex justify-center items-center gap-8 text-gray-400 text-center">
          <span>
            <FontAwesomeIcon
              icon={solid('circle-chevron-left')}
              size="xl"
              className="cursor-pointer hover:text-gray-900"
            />
          </span>
          <span className="text-[#F3533D] border-b-2 border-b-[#F3533D]">
            1
          </span>
          <span className="cursor-pointer hover:text-gray-900">2</span>
          <span className="cursor-pointer hover:text-gray-900">3</span>
          <span className="">...</span>
          <span className="cursor-pointer hover:text-gray-900">10</span>
          <span>
            <FontAwesomeIcon
              icon={solid('circle-chevron-right')}
              size="xl"
              className="cursor-pointer hover:text-gray-900"
            />
          </span>
        </div>
      </div>
      <Footer />
    </div>
  )
}
export default SafarisAndTours
