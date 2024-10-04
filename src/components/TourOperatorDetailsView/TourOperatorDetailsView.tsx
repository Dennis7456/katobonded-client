import React, { useState } from 'react'
import Header from 'src/stories/Header/Header'
import SafariCard from '../SafariCard/SafariCard'
import Giraffe from '../../assets/Giraffe.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import elephantImage from '../../assets/elephant-img.jpeg'
import leopardImage from '../../assets/LeopardImage.jpeg'
import buffaloImage from '../../assets/Bufallo.jpeg'
import rhinoImage from '../../assets/RhinoImage.jpeg'
import elephantsImage from '../../assets/ElephantsImage.jpeg'
import balloonImage from '../../assets/BalloonsImage.jpeg'
import giraffesImage from '../../assets/Giraffes.jpeg'
import lionImage from '../../assets/LionImage.jpeg'
import cheetahImage from '../../assets/ChatuImage.jpeg'
import Footer from '../Footer/Footer'
import EmptyPhoto from '../../assets/blank-profile.svg'

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
        image: giraffesImage, // Replace with actual image path
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

const TourOperatorDetailsView: React.FC = () => {
  const [sideBarOption, setSideBarOption] = useState('option-1')

  const allOffers = getaways.flatMap((getaway) => getaway.offers)
  return (
    <div className="">
      <Header />
      <div className="mt-[100px] ml-[100px] mb-[20px]">
        <h1 className="text-3xl ml-[55px]">Twiga Safaris</h1>
      </div>
      <div className="mb-[10px]">
        <div className="bg-gray-300">
          <img
            src={Giraffe}
            alt="Giraffe"
            className="w-full h-[380px] object-cover"
          />
        </div>
      </div>

      {/* Top Section */}
      <div className=" px-[75px] grid gap-[20px] border-b-2 bg-white">
        <div className="flex justify-between items-center mb-[10px]">
          <h2 className="text-lg tracking-wider">Twiga Safaris</h2>
          <button className="bg-orange-500 px-[55px] text-white py-[10px] rounded-md">
            Get A Free Quote
          </button>
        </div>
      </div>

      <div className=" py-[35px] px-[75px] grid gap-[20px] bg-gray-50">
        {/* Breadcrumb */}
        <div>
          <nav className="text-gray-900 mb-6 font-semibold flex justify-start items-center gap-[20px]">
            <span>Home</span>
            <FontAwesomeIcon icon={solid('caret-right')} />
            <span className="text-gray-900">Tour Operators</span>
            <FontAwesomeIcon icon={solid('caret-right')} />
            <span className="text-gray-400">Twiga Safaris</span>
          </nav>
        </div>
      </div>

      {/* Main Section */}
      <div className="px-[75px] grid gap-[20px] bg-gray-50">
        <div className="">
          <div className="grid grid-cols-5">
            {/* SidBar */}
            <div className="grid text-lg text-orange-500 gap-4 font-bold tracking-wide col-span-1 py-[85px] h-[10px] bg-gray-50">
              <div
                className={`${sideBarOption === 'option-1' ? 'opacity-100 cursor-pointer' : 'opacity-50 cursor-pointer'}`}
                onClick={() => {
                  setSideBarOption('option-1')
                }}
              >
                Overview
              </div>
              <div
                className={`${sideBarOption === 'option-2' ? 'opacity-100 cursor-pointer' : 'opacity-50 cursor-pointer'}`}
                onClick={() => {
                  setSideBarOption('option-2')
                }}
              >
                Safari & Tours
              </div>
              <div
                className={`${sideBarOption === 'option-3' ? 'opacity-100 cursor-pointer' : 'opacity-50 cursor-pointer'}`}
                onClick={() => {
                  setSideBarOption('option-3')
                }}
              >
                Reviews
              </div>
              <div
                className={`${sideBarOption === 'option-4' ? 'opacity-100 cursor-pointer' : 'opacity-50 cursor-pointer'}`}
                onClick={() => {
                  setSideBarOption('option-4')
                }}
              >
                Company Profile
              </div>
            </div>

            {/* Overview Option */}
            {sideBarOption === 'option-1' && (
              <div className="col-span-4 bg-white shadow-md py-[55px] px-[45px] my-[35px]">
                <div className="grid gap-3">
                  <h2 className="text-lg text-gray-900 font-bold tracking-wide ">
                    Overview
                  </h2>
                  <p>
                    Nulla turpis magna blandit diam nulla cras gravida. Sed
                    convallis ac eget egestas arcu sagittis, at. Semper facilisi
                    nibh vulputate posuere accumsan. Fringilla tristique cras eu
                    varius pellentesque lectus massa aliquet. Vitae ultrices id
                    volutpat tellus consectetur mauris imperdiet urna. Orci
                    ipsum, tortor et nulla consectetur nec justo, felis. Feugiat
                    imperdiet convallis integer elementum quisque. Diam volutpat
                    tortor sed neque elementum integer ut tempus porta.{' '}
                  </p>
                  <p className="text-orange-500 underline underline-offset-4">
                    Full Company Profile
                  </p>
                </div>
                <div className="grid gap-3 mt-[105px]">
                  <h2 className=" text-gray-900 font-semibold tracking-wide text-sm">
                    Safaris & Tours (20):
                  </h2>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-2">
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
                <div className="px-[23px] py-[20px]">
                  <button className="text-white bg-orange-500 px-[35px] py-[10px] text-sm rounded-md">
                    All 20 tours
                  </button>
                </div>
              </div>
            )}

            {/* Safari and Tours Option */}
            {sideBarOption === 'option-2' && (
              <div className="col-span-3 bg-white shadow-md py-[15px] px-[45px] my-[25px]">
                <div className="grid gap-3 mt-[10px]">
                  <h2 className=" text-gray-900 font-semibold tracking-wide text-sm">
                    Safaris & Tours (20):
                  </h2>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-2">
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
                <div className="px-[23px] py-[20px]">
                  <button className="text-white bg-orange-500 px-[35px] py-[10px] text-sm rounded-md">
                    All 20 tours
                  </button>
                </div>
              </div>
            )}

            {/* Reviews */}
            {sideBarOption === 'option-3' && (
              <div className="col-span-3 bg-white shadow-md py-[15px] px-[45px] my-[25px] w-full">
                <div className="grid gap-3 mt-[10px] mb-6">
                  <h2 className=" text-gray-900 font-semibold tracking-wide text-sm">
                    Reviews (100):
                  </h2>
                </div>

                {/* Review */}
                <div className="px-[35px] py-[30px] mx-[20px] bg-gray-100 mb-[20px]">
                  <div className="flex justify-start items-center gap-4">
                    <div>
                      <img src={EmptyPhoto} alt="profile image"></img>
                    </div>
                    <div>
                      <p className="font-semibold">Jane Doe</p>
                      <p className="text-gray-400">Reviewed: 12 Aug, 2020</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 mt-[20px]">
                    <div className="text-lg tracking-wider font-light text-gray-400">
                      &quot;Amazing!&quot;
                    </div>
                    <div className="flex gap-2 opacity-70">
                      <span>
                        <FontAwesomeIcon
                          icon={solid('star')}
                          size="lg"
                          className="text-orange-400"
                        />
                      </span>
                      <span>
                        <FontAwesomeIcon
                          icon={solid('star')}
                          size="lg"
                          className="text-orange-400"
                        />
                      </span>
                      <span>
                        <FontAwesomeIcon
                          icon={solid('star')}
                          size="lg"
                          className="text-orange-400"
                        />
                      </span>
                      <span>
                        <FontAwesomeIcon
                          icon={solid('star')}
                          size="lg"
                          className="text-orange-400"
                        />
                      </span>
                      <span>
                        <FontAwesomeIcon
                          icon={solid('star')}
                          size="lg"
                          className="text-orange-400"
                        />
                      </span>
                    </div>
                    <p className="text-lg tracking-wider font-light text-gray-400">
                      Elit in aliquet porttitor sed lectus turpis aliquet eu
                      viverra. Metus bibendum netus velit elit porta pharetra et
                      egestas! ...
                    </p>
                  </div>
                </div>

                {/* Review */}
                <div className="px-[35px] py-[30px] mx-[20px] bg-gray-100 mb-[20px]">
                  <div className="flex justify-start items-center gap-4">
                    <div>
                      <img src={EmptyPhoto} alt="profile image"></img>
                    </div>
                    <div>
                      <p className="font-semibold">Jane Doe</p>
                      <p className="text-gray-400">Reviewed: 12 Aug, 2020</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 mt-[20px]">
                    <div className="text-lg tracking-wider font-light text-gray-400">
                      &quot;Amazing!&quot;
                    </div>
                    <div className="flex gap-2 opacity-70">
                      <span>
                        <FontAwesomeIcon
                          icon={solid('star')}
                          size="lg"
                          className="text-orange-400"
                        />
                      </span>
                      <span>
                        <FontAwesomeIcon
                          icon={solid('star')}
                          size="lg"
                          className="text-orange-400"
                        />
                      </span>
                      <span>
                        <FontAwesomeIcon
                          icon={solid('star')}
                          size="lg"
                          className="text-orange-400"
                        />
                      </span>
                      <span>
                        <FontAwesomeIcon
                          icon={solid('star')}
                          size="lg"
                          className="text-orange-400"
                        />
                      </span>
                      <span>
                        <FontAwesomeIcon
                          icon={solid('star')}
                          size="lg"
                          className="text-orange-400"
                        />
                      </span>
                    </div>
                    <p className="text-lg tracking-wider font-light text-gray-400">
                      Elit in aliquet porttitor sed lectus turpis aliquet eu
                      viverra. Metus bibendum netus velit elit porta pharetra et
                      egestas! ...
                    </p>
                  </div>
                </div>

                {/* Review */}
                <div className="px-[35px] py-[30px] mx-[20px] bg-gray-100 mb-[20px]">
                  <div className="flex justify-start items-center gap-4">
                    <div>
                      <img src={EmptyPhoto} alt="profile image"></img>
                    </div>
                    <div>
                      <p className="font-semibold">Jane Doe</p>
                      <p className="text-gray-400">Reviewed: 12 Aug, 2020</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 mt-[20px]">
                    <div className="text-lg tracking-wider font-light text-gray-400">
                      &quot;Amazing!&quot;
                    </div>
                    <div className="flex gap-2 opacity-70">
                      <span>
                        <FontAwesomeIcon
                          icon={solid('star')}
                          size="lg"
                          className="text-orange-400"
                        />
                      </span>
                      <span>
                        <FontAwesomeIcon
                          icon={solid('star')}
                          size="lg"
                          className="text-orange-400"
                        />
                      </span>
                      <span>
                        <FontAwesomeIcon
                          icon={solid('star')}
                          size="lg"
                          className="text-orange-400"
                        />
                      </span>
                      <span>
                        <FontAwesomeIcon
                          icon={solid('star')}
                          size="lg"
                          className="text-orange-400"
                        />
                      </span>
                      <span>
                        <FontAwesomeIcon
                          icon={solid('star')}
                          size="lg"
                          className="text-orange-400"
                        />
                      </span>
                    </div>
                    <p className="text-lg tracking-wider font-light text-gray-400">
                      Elit in aliquet porttitor sed lectus turpis aliquet eu
                      viverra. Metus bibendum netus velit elit porta pharetra et
                      egestas! ...
                    </p>
                  </div>
                </div>

                {/* Review */}
                <div className="px-[35px] py-[30px] mx-[20px] bg-gray-100 mb-[20px]">
                  <div className="flex justify-start items-center gap-4">
                    <div>
                      <img src={EmptyPhoto} alt="profile image"></img>
                    </div>
                    <div>
                      <p className="font-semibold">Jane Doe</p>
                      <p className="text-gray-400">Reviewed: 12 Aug, 2020</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 mt-[20px]">
                    <div className="text-lg tracking-wider font-light text-gray-400">
                      &quot;Amazing!&quot;
                    </div>
                    <div className="flex gap-2 opacity-70">
                      <span>
                        <FontAwesomeIcon
                          icon={solid('star')}
                          size="lg"
                          className="text-orange-400"
                        />
                      </span>
                      <span>
                        <FontAwesomeIcon
                          icon={solid('star')}
                          size="lg"
                          className="text-orange-400"
                        />
                      </span>
                      <span>
                        <FontAwesomeIcon
                          icon={solid('star')}
                          size="lg"
                          className="text-orange-400"
                        />
                      </span>
                      <span>
                        <FontAwesomeIcon
                          icon={solid('star')}
                          size="lg"
                          className="text-orange-400"
                        />
                      </span>
                      <span>
                        <FontAwesomeIcon
                          icon={solid('star')}
                          size="lg"
                          className="text-orange-400"
                        />
                      </span>
                    </div>
                    <p className="text-lg tracking-wider font-light text-gray-400">
                      Elit in aliquet porttitor sed lectus turpis aliquet eu
                      viverra. Metus bibendum netus velit elit porta pharetra et
                      egestas! ...
                    </p>
                  </div>
                </div>

                {/* Review */}
                <div className="px-[35px] py-[30px] mx-[20px] bg-gray-100 mb-[20px]">
                  <div className="flex justify-start items-center gap-4">
                    <div>
                      <img src={EmptyPhoto} alt="profile image"></img>
                    </div>
                    <div>
                      <p className="font-semibold">Jane Doe</p>
                      <p className="text-gray-400">Reviewed: 12 Aug, 2020</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 mt-[20px]">
                    <div className="text-lg tracking-wider font-light text-gray-400">
                      &quot;Amazing!&quot;
                    </div>
                    <div className="flex gap-2 opacity-70">
                      <span>
                        <FontAwesomeIcon
                          icon={solid('star')}
                          size="lg"
                          className="text-orange-400"
                        />
                      </span>
                      <span>
                        <FontAwesomeIcon
                          icon={solid('star')}
                          size="lg"
                          className="text-orange-400"
                        />
                      </span>
                      <span>
                        <FontAwesomeIcon
                          icon={solid('star')}
                          size="lg"
                          className="text-orange-400"
                        />
                      </span>
                      <span>
                        <FontAwesomeIcon
                          icon={solid('star')}
                          size="lg"
                          className="text-orange-400"
                        />
                      </span>
                      <span>
                        <FontAwesomeIcon
                          icon={solid('star')}
                          size="lg"
                          className="text-orange-400"
                        />
                      </span>
                    </div>
                    <p className="text-lg tracking-wider font-light text-gray-400">
                      Elit in aliquet porttitor sed lectus turpis aliquet eu
                      viverra. Metus bibendum netus velit elit porta pharetra et
                      egestas! ...
                    </p>
                  </div>
                </div>
                {/* Review */}
                <div className="px-[35px] py-[30px] mx-[20px] bg-gray-100 mb-[20px]">
                  <div className="flex justify-start items-center gap-4">
                    <div>
                      <img src={EmptyPhoto} alt="profile image"></img>
                    </div>
                    <div>
                      <p className="font-semibold">Jane Doe</p>
                      <p className="text-gray-400">Reviewed: 12 Aug, 2020</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 mt-[20px]">
                    <div className="text-lg tracking-wider font-light text-gray-400">
                      &quot;Amazing!&quot;
                    </div>
                    <div className="flex gap-2 opacity-70">
                      <span>
                        <FontAwesomeIcon
                          icon={solid('star')}
                          size="lg"
                          className="text-orange-400"
                        />
                      </span>
                      <span>
                        <FontAwesomeIcon
                          icon={solid('star')}
                          size="lg"
                          className="text-orange-400"
                        />
                      </span>
                      <span>
                        <FontAwesomeIcon
                          icon={solid('star')}
                          size="lg"
                          className="text-orange-400"
                        />
                      </span>
                      <span>
                        <FontAwesomeIcon
                          icon={solid('star')}
                          size="lg"
                          className="text-orange-400"
                        />
                      </span>
                      <span>
                        <FontAwesomeIcon
                          icon={solid('star')}
                          size="lg"
                          className="text-orange-400"
                        />
                      </span>
                    </div>
                    <p className="text-lg tracking-wider font-light text-gray-400">
                      Elit in aliquet porttitor sed lectus turpis aliquet eu
                      viverra. Metus bibendum netus velit elit porta pharetra et
                      egestas! ...
                    </p>
                  </div>
                </div>
                {/* Review */}
                <div className="px-[35px] py-[30px] mx-[20px] bg-gray-100 mb-[20px]">
                  <div className="flex justify-start items-center gap-4">
                    <div>
                      <img src={EmptyPhoto} alt="profile image"></img>
                    </div>
                    <div>
                      <p className="font-semibold">Jane Doe</p>
                      <p className="text-gray-400">Reviewed: 12 Aug, 2020</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 mt-[20px]">
                    <div className="text-lg tracking-wider font-light text-gray-400">
                      &quot;Amazing!&quot;
                    </div>
                    <div className="flex gap-2 opacity-70">
                      <span>
                        <FontAwesomeIcon
                          icon={solid('star')}
                          size="lg"
                          className="text-orange-400"
                        />
                      </span>
                      <span>
                        <FontAwesomeIcon
                          icon={solid('star')}
                          size="lg"
                          className="text-orange-400"
                        />
                      </span>
                      <span>
                        <FontAwesomeIcon
                          icon={solid('star')}
                          size="lg"
                          className="text-orange-400"
                        />
                      </span>
                      <span>
                        <FontAwesomeIcon
                          icon={solid('star')}
                          size="lg"
                          className="text-orange-400"
                        />
                      </span>
                      <span>
                        <FontAwesomeIcon
                          icon={solid('star')}
                          size="lg"
                          className="text-orange-400"
                        />
                      </span>
                    </div>
                    <p className="text-lg tracking-wider font-light text-gray-400">
                      Elit in aliquet porttitor sed lectus turpis aliquet eu
                      viverra. Metus bibendum netus velit elit porta pharetra et
                      egestas! ...
                    </p>
                  </div>
                </div>

                {/* Pagination */}
                <div className="text-xl px-4 pt-8 flex justify-center items-center gap-8 text-gray-400 text-center mb-[35px]">
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
            )}

            {/* Company Profile */}
            {sideBarOption === 'option-4' && (
              <div className="col-span-3 bg-white shadow-md py-[55px] px-[45px] my-[35px]">
                <div className="grid gap-3">
                  <h2 className="text-lg text-gray-900 font-bold tracking-wide ">
                    Company Profile
                  </h2>
                  <p>
                    Congue ultrices aliquam egestas tempor, in ridiculus dapibus
                    turpis at. Odio ullamcorper feugiat tristique nunc ut. Neque
                    pharetra nisl vulputate tempus, ullamcorper. Sagittis dolor
                    orci, at urna. Sit integer turpis enim, scelerisque nulla.
                    Diam nec mauris sollicitudin id et. Ullamcorper tempus
                    pretium dignissim sit augue sit. Iaculis ut augue ipsum
                    egestas in. Gravida porttitor pellentesque orci eu
                    tristique. Phasellus elit mauris sed adipiscing nascetur
                    pharetra maecenas in. Volutpat ac eget leo aliquet volutpat
                    aliquam. Amet in aliquet in et commodo sit. Lobortis non
                    amet et sed sit senectus malesuada velit, proin. Et pharetra
                    maecenas vel porttitor et, vel. At a, proin eu adipiscing
                    venenatis, metus morbi amet, augue. Bibendum non tortor,
                    enim etiam. Id quis laoreet purus sit massa tortor tincidunt
                    orci. Auctor tempor fermentum eu ut ridiculus sit. Nunc
                    accumsan eget felis eget consectetur nunc mattis purus amet.
                    Adipiscing duis congue nibh leo. Dapibus interdum cras ut
                    sodales tempus pharetra feugiat purus, tellus. Adipiscing
                    tristique amet vitae turpis euismod enim ut cursus. Ipsum
                    porta netus nulla sollicitudin bibendum nunc imperdiet sem.
                    Sapien, sodales sollicitudin molestie eu netus ut amet vel,
                    elementum. Nisi, posuere et porttitor auctor ac nam et mi
                    hendrerit. Fusce sit ligula sit fermentum dictum tristique
                    arcu ut nisi. Parturient vitae aliquam massa nisl pulvinar
                    varius lobortis iaculis ac. At orci nibh diam non. Eget
                    dictum tristique tincidunt nam eleifend ac aenean. Leo lorem
                    ut sed nec pellentesque arcu porttitor.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default TourOperatorDetailsView
