import React from 'react'
import Header from 'src/stories/Header/Header'
import Footer from '../Footer/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import EmptyPhoto from '../../assets/blank-profile.svg'

const MyPackageDetails: React.FC = () => {
  return (
    <div>
      <Header />

      {/* Breadcrumb */}
      <div className="py-[20px] px-[75px] grid gap-[20px] mt-[80px] bg-gray-50">
        <div className="">
          <nav className="text-gray-900 font-semibold flex justify-start items-center gap-[20px]">
            <span>Home</span>
            <FontAwesomeIcon icon={solid('caret-right')} />
            <span className="text-gray-900">Safaris and Tours</span>
            <FontAwesomeIcon icon={solid('caret-right')} />
            <span className="text-gray-400">3 days Samburu camping safari</span>
          </nav>
        </div>
      </div>

      {/* Top Section */}
      <div className="border-t-[3px] border-b-[3px] bg-white">
        <div className="px-[75px] gap-[20px] flex">
          <p className="text-orange-500 border-b-[3px] border-orange-500 text-lg tracking-wider py-[10px]">
            Overview
          </p>
        </div>
      </div>
      <div className="flex justify-start items-start py-[20px] px-[75px] gap-[20px] bg-gray-50">
        <div className="bg-white px-[35px] py-[55px] shadow-sm w-[900px]">
          <h2 className="text-gray-700 text-xl tracking-wider font-semibold">
            7 Days Beach Holiday
          </h2>
          <h3>Day 1:</h3>
          <p>Arrive to the Tropical Island of Zanzibar</p>
          <p>
            Arrival at Zanzibar Airport Representative accompanies guests to
            Breezes Beach Club & Spa Settle down in your comfortable rooms to
            start planning your trip
          </p>
          <h3>Days 2-6</h3>
          <p>Let the Fun in the Sun Begin</p>
          <p>
            Breezes Beach Club & Spa, present on the picturesque stretch of
            powdered white sands overlooks the majestic cobalt blue sea. The
            beach is perfect for various different activities such as:
          </p>
          <ul>
            <li>Snorkeling</li>
            <li>Scuba Diving</li>
            <li>Pedal Boats</li>
            <li>Sailing</li>
            <li>Beach Volleyball</li>
          </ul>
          <p>
            When you feel like you have had enough of the sea and sand, you can
            relax besides the hotel pool. On day two, we arrange for our
            visitors a half day tour of the gorgeous Jozani Forest of Chwaka Bay
            National Park. Jozani Forest is one of the few remaining habitats of
            the red Colobus Monkeys, Sykes Monkeys and numerous species of birds
            and butterflies.
            <p>
              Cultural aficionados will be excited to know that on the third day
              we will take guests on a tour to the historic Stone Town,
              following which tourists will spend the evening looking at the
              orange and red hues of the setting sun on our exclusive cruise. Be
              sure to include spa treatments on your bucket list. Spas in
              Zanzibar have the best services to offer, which you cannot miss
              once there.
            </p>
            <h3>Day 7:</h3>
            <p>Depart For Home with Numerous Memories</p>
            <ul>
              <li>Pick Up From Breezes Beach Club & Spa</li>
              <li>Drop At Zanzibar Airport</li>
              <li>Fly Off Home</li>
            </ul>
          </p>
        </div>
        <div className="flex flex-col gap-[40px]">
          <div className="bg-blue-400 shadow-sm">
            <div className="px-[20px] py-[20px] flex justify-start items-center gap-[15px]">
              <h2 className="text-orange-500 text-2xl font-semibold tracking-wide">
                $3,890
              </h2>
              <h2 className="text-orange-500 text-2xl font-semibold tracking-wide">
                USD
              </h2>
            </div>
            <div className="px-[20px] py-[20px] flex flex-col gap-[15px] justify-center items-center">
              <button className="bg-orange-500 px-[100px] py-[12px] rounded-sm text-white hover:opacity-80">
                Accept Quote
              </button>
              <button className="bg-gray-300 px-[100px] py-[12px] rounded-sm text-gray-900 hover:opacity-80">
                Reject Quote
              </button>
              <p className="tracking-wider">Have Questions?</p>
              <button className="bg-white border-gray-300 border-[2px] px-[100px] py-[12px] rounded-sm text-gray-900 hover:opacity-80">
                Reject Quote
              </button>
            </div>
          </div>

          <div className=" shadow-md bg-white ">
            <div className="flex justify-center items-center py-[25px]">
              <img src={EmptyPhoto} />
            </div>
            <div className="flex justify-start items-start border-t-2 px-[20px] py-[25px] gap-[25px]">
              <div className="text-gray-400 tracking-wide">Offered By:</div>
              <div className="grid gap-3">
                <div className="text-gray-400 tracking-wider">
                  Kunguru Safaris
                </div>
                <div className="flex gap-2">
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
                  <p className="text-gray-400 font-light">(800 Reviews)</p>
                </div>
                <div className="text-[#F3533D] underline underline-offset-4">
                  View Profile
                </div>
              </div>
            </div>

            {/* Customer Review */}
            <div className="border-t-2 px-2">
              <h2 className="mx-[5px] my-[20px] text-gray-400 tracking-wider">
                Customer Reviews:
              </h2>
              <div className="border px-[35px] py-[30px] mx-[20px] bg-gray-50 mb-[20px]">
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
              <div className="flex justify-between items-center mx-[5px] my-[35px]">
                <div className="cursor-pointer">
                  <FontAwesomeIcon icon={solid('chevron-left')} size="lg" />
                </div>
                <p className="text-gray-400 tracking-wide">1/5</p>
                <div className="cursor-pointer">
                  <FontAwesomeIcon icon={solid('chevron-right')} size="lg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default MyPackageDetails
