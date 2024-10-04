import React, { useState } from 'react'
import Header from 'src/stories/Header/Header'
import Footer from '../Footer/Footer'
import SafariCard from '../SafariCard/SafariCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import backGround from '../../assets/ViewCardImages/MaasaiMara.jpeg'
import leopardImage from '../../assets/LeopardImage.jpeg'
import buffaloImage from '../../assets/Bufallo.jpeg'
import rhinoImage from '../../assets/RhinoImage.jpeg'
import elephantsImage from '../../assets/ElephantsImage.jpeg'
import balloonImage from '../../assets/BalloonsImage.jpeg'
import giraffesImage from '../../assets/Giraffes.jpeg'
import lionImage from '../../assets/LionImage.jpeg'
import cheetahImage from '../../assets/ChatuImage.jpeg'
import EmptyPhoto from '../../assets/blank-profile.svg'
import elephantImage from '../../assets/elephant-img.jpeg'

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

const MyPackages: React.FC = () => {
  const [sideBarOption, setSideBarOption] = useState('option-1')
  const [tabOption, setTabOption] = useState('option-1')

  const allOffers = getaways.flatMap((getaway) => getaway.offers)
  return (
    <div className="bg-gray-50">
      <Header />
      <div className="py-[20px] px-[75px] grid gap-[20px] mt-[80px]">
        {/* Breadcrumb */}
        <div className="">
          <nav className="text-gray-900 font-semibold flex justify-start items-center gap-[20px]">
            <span>Home</span>
            <FontAwesomeIcon icon={solid('caret-right')} />
            <span className="text-gray-400">My Packages</span>
          </nav>
        </div>
      </div>

      {/* Image */}
      <div className="">
        <img
          src={backGround}
          alt="background image"
          className="h-[300px] w-full object-cover"
        />
      </div>

      {/* Main Section */}
      <div className="py-[px] px-[75px] grid gap-[20px] bg-gray-50">
        <div className="grid grid-cols-5 mb-[35px]">
          {/* SidBar */}
          <div className="grid text-lg text-orange-500 gap-4 font-bold tracking-wide col-span-1 py-[85px] h-[10px] bg-gray-50">
            <div
              className={`${sideBarOption === 'option-1' ? 'opacity-100 cursor-pointer' : 'opacity-50 cursor-pointer'}`}
              onClick={() => {
                setSideBarOption('option-1')
              }}
            >
              Favourite
            </div>
            <div
              className={`${sideBarOption === 'option-2' ? 'opacity-100 cursor-pointer' : 'opacity-50 cursor-pointer'}`}
              onClick={() => {
                setSideBarOption('option-2')
              }}
            >
              Quoted Tours
            </div>
          </div>

          {/* Favourite Option */}
          {sideBarOption === 'option-1' && (
            <div className="col-span-4 py-[15px] px-[45px]">
              {/* Tabs */}
              <div className="flex justify-start items-center gap-[55px] tracking-wider ml-[20px]">
                <div
                  className={`${tabOption === 'option-1' ? 'text-orange-500 border-b-[3px] border-orange-500' : 'text-gray-400'} cursor-pointer  font-semibold`}
                  onClick={() => {
                    setTabOption('option-1')
                  }}
                >
                  <h2 className="py-[10px]">Safaris And Tours</h2>
                </div>
                <div
                  className={`${tabOption === 'option-2' ? 'text-orange-500 border-b-[3px] border-orange-500' : 'text-gray-400'} cursor-pointer  font-semibold`}
                  onClick={() => {
                    setTabOption('option-2')
                  }}
                >
                  <h2 className="py-[10px]">Tour Operators</h2>
                </div>
              </div>
              {tabOption === 'option-1' && (
                <div>
                  {/* Cards */}
                  <div className="grid grid-cols-2 mt-[20px]">
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
                </div>
              )}

              {tabOption === 'option-2' && (
                <div className="px-[25px] py-[15px]">
                  {/* Packages */}
                  <div className="mt-[20px] bg-white w-[860px] rounded-sm shadow-sm">
                    <div className="flex">
                      <div>
                        <img
                          src={giraffesImage}
                          alt="giraffe image"
                          className="h-[200px] w-[300px] object-cover"
                        />
                      </div>
                      <div className="flex justify-between gap-[5px] px-[20px] py-[10px]">
                        {/* Details */}
                        <div>
                          <h2 className="text-orange-500 text-2xl tracking-wider font-semibold">
                            Twiga Safaris
                          </h2>
                          <div className="flex gap-[5px]">
                            <FontAwesomeIcon
                              icon={solid('star')}
                              className="text-orange-500"
                              size="sm"
                            />
                            <FontAwesomeIcon
                              icon={solid('star')}
                              className="text-orange-500"
                              size="sm"
                            />
                            <FontAwesomeIcon
                              icon={solid('star')}
                              className="text-orange-500"
                              size="sm"
                            />
                            <FontAwesomeIcon
                              icon={solid('star')}
                              className="text-orange-500"
                              size="sm"
                            />
                            <FontAwesomeIcon
                              icon={solid('star')}
                              className="text-orange-500"
                              size="sm"
                            />
                          </div>
                          <div className="flex text-sm mt-[20px]">
                            <p className="uppercase mr-[10px]">Tour Types: </p>
                            <p>
                              Custom mid-range & luxury tours that can start
                              every day
                            </p>
                          </div>
                          <div className="flex text-sm">
                            <p className="uppercase mr-[10px]">Tour Types: </p>
                            <p>
                              Custom mid-range & luxury tours that can start
                              every day
                            </p>
                          </div>
                        </div>

                        {/* Heart */}
                        <div className="px-[0px] py-[20px]">
                          <FontAwesomeIcon
                            icon={solid('heart')}
                            size="xl"
                            className="text-red-500 border rounded-full p-2"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-start items-center gap-[px]">
                      <div className="px-[100px] py-[20px]">
                        <img
                          src={EmptyPhoto}
                          alt="Empty image"
                          className="h-[100px] w-[100px] object-cover"
                        />
                      </div>
                      <div className="flex justify-start items-center gap-[20px] h-[100px] px-[35px] py-[40px]">
                        <button className="px-[20px] bg-orange-500 text-white py-[10px] rounded-sm">
                          All 30 Tours
                        </button>
                        <p className="text-gray-400">
                          Offered by Twiga Safaris
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Packages */}
                  <div className="mt-[20px] bg-white w-[860px] rounded-sm shadow-sm">
                    <div className="flex">
                      <div>
                        <img
                          src={leopardImage}
                          alt="giraffe image"
                          className="h-[200px] w-[300px] object-cover"
                        />
                      </div>
                      <div className="flex justify-between gap-[5px] px-[20px] py-[10px]">
                        {/* Details */}
                        <div>
                          <h2 className="text-orange-500 text-2xl tracking-wider font-semibold">
                            Twiga Safaris
                          </h2>
                          <div className="flex gap-[5px]">
                            <FontAwesomeIcon
                              icon={solid('star')}
                              className="text-orange-500"
                              size="sm"
                            />
                            <FontAwesomeIcon
                              icon={solid('star')}
                              className="text-orange-500"
                              size="sm"
                            />
                            <FontAwesomeIcon
                              icon={solid('star')}
                              className="text-orange-500"
                              size="sm"
                            />
                            <FontAwesomeIcon
                              icon={solid('star')}
                              className="text-orange-500"
                              size="sm"
                            />
                            <FontAwesomeIcon
                              icon={solid('star')}
                              className="text-orange-500"
                              size="sm"
                            />
                          </div>
                          <div className="flex text-sm mt-[20px]">
                            <p className="uppercase mr-[10px]">Tour Types: </p>
                            <p>
                              Custom mid-range & luxury tours that can start
                              every day
                            </p>
                          </div>
                          <div className="flex text-sm">
                            <p className="uppercase mr-[10px]">Tour Types: </p>
                            <p>
                              Custom mid-range & luxury tours that can start
                              every day
                            </p>
                          </div>
                        </div>

                        {/* Heart */}
                        <div className="px-[0px] py-[20px]">
                          <FontAwesomeIcon
                            icon={solid('heart')}
                            size="xl"
                            className="text-red-500 border rounded-full p-2"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-start items-center gap-[px]">
                      <div className="px-[100px] py-[20px]">
                        <img
                          src={EmptyPhoto}
                          alt="Empty image"
                          className="h-[100px] w-[100px] object-cover"
                        />
                      </div>
                      <div className="flex justify-start items-center gap-[20px] h-[100px] px-[35px] py-[40px]">
                        <button className="px-[20px] bg-orange-500 text-white py-[10px] rounded-sm">
                          All 30 Tours
                        </button>
                        <p className="text-gray-400">
                          Offered by Twiga Safaris
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Packages */}
                  <div className="mt-[20px] bg-white w-[860px] rounded-sm shadow-sm">
                    <div className="flex">
                      <div>
                        <img
                          src={elephantsImage}
                          alt="giraffe image"
                          className="h-[200px] w-[300px] object-cover"
                        />
                      </div>
                      <div className="flex justify-between gap-[5px] px-[20px] py-[10px]">
                        {/* Details */}
                        <div>
                          <h2 className="text-orange-500 text-2xl tracking-wider font-semibold">
                            Twiga Safaris
                          </h2>
                          <div className="flex gap-[5px]">
                            <FontAwesomeIcon
                              icon={solid('star')}
                              className="text-orange-500"
                              size="sm"
                            />
                            <FontAwesomeIcon
                              icon={solid('star')}
                              className="text-orange-500"
                              size="sm"
                            />
                            <FontAwesomeIcon
                              icon={solid('star')}
                              className="text-orange-500"
                              size="sm"
                            />
                            <FontAwesomeIcon
                              icon={solid('star')}
                              className="text-orange-500"
                              size="sm"
                            />
                            <FontAwesomeIcon
                              icon={solid('star')}
                              className="text-orange-500"
                              size="sm"
                            />
                          </div>
                          <div className="flex text-sm mt-[20px]">
                            <p className="uppercase mr-[10px]">Tour Types: </p>
                            <p>
                              Custom mid-range & luxury tours that can start
                              every day
                            </p>
                          </div>
                          <div className="flex text-sm">
                            <p className="uppercase mr-[10px]">Tour Types: </p>
                            <p>
                              Custom mid-range & luxury tours that can start
                              every day
                            </p>
                          </div>
                        </div>

                        {/* Heart */}
                        <div className="px-[0px] py-[20px]">
                          <FontAwesomeIcon
                            icon={solid('heart')}
                            size="xl"
                            className="text-red-500 border rounded-full p-2"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-start items-center gap-[px]">
                      <div className="px-[100px] py-[20px]">
                        <img
                          src={EmptyPhoto}
                          alt="Empty image"
                          className="h-[100px] w-[100px] object-cover"
                        />
                      </div>
                      <div className="flex justify-start items-center gap-[20px] h-[100px] px-[35px] py-[40px]">
                        <button className="px-[20px] bg-orange-500 text-white py-[10px] rounded-sm">
                          All 30 Tours
                        </button>
                        <p className="text-gray-400">
                          Offered by Twiga Safaris
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
          {/* Quoted Tours Option */}
          {sideBarOption === 'option-2' && (
            <div className="col-span-3 bg-white shadow-md py-[15px] px-[45px]">
              <div className="flex justify-start items-center gap-[55px] tracking-wider">
                <div>Safaris And Tours</div>
                <div>Tour Operators</div>
              </div>
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
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default MyPackages
