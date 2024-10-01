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

  const allOffers = getaways.flatMap((getaway) => getaway.offers)

  return (
    <div>
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
          <div className="cursor-pointer hover:bg-gray-400 hover:text-white text-center px-[4px] rounded-sm">
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
